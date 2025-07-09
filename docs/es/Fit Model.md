# Fit Model



## Fit Causal Treatment

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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
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

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Data Table Window;

```

### Fit Causal Treatment

**Sintaxis:** Fit Model( Y( columns ), <Effects( columns )>, Treatment( column ), Personality( "Causal Treatment" ) )

**Descripción:** Ajusta modelos para un tratamiento causal en los que se realizan ajustes para la probabilidad de un tratamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
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

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
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

### Model Dialog

**Sintaxis:** obj << Model Dialog

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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
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

### Show Tips and Interpretations

**Sintaxis:** obj << Show Tips and Interpretations( state=0|1 )

**JMP Versión agregada:** 19

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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
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

**Sintaxis:** obj = Fit Causal Treatment(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Fit Generalized Linear Model

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

### Contour Profiler

**Sintaxis:** obj << Contour Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de contorno, que representa gráficamente los contornos de las respuestas de dos factores a la vez.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Contour Profiler( 1 );

```

### Contrast

**Sintaxis:** obj << (effect name << Contrast( [l1 l2 l3 ...] ))

**Descripción:** Ejecuta una prueba F personalizada para los contrastes estadísticos de los niveles de tratamiento para un efecto en el modelo. Especifique cada contraste como un vector de filas. Nota: Especifique el nombre del efecto como una cadena de caracteres.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
obj << ("color" << Contrast( [1 0 -0.5 -0.5] ));

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Copy Script;

```

### Correlation of Estimates

**Sintaxis:** obj << Correlation of Estimates( state=0|1 )

**Descripción:** Muestra u oculta la matriz de correlaciones entre las estimaciones de los parámetros para el ajuste especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);
obj << Correlation of Estimates( 1 );

```

### Covariance of Estimates

**Sintaxis:** obj << Covariance of Estimates( state=0|1 )

**Descripción:** Muestra u oculta la matriz de covarianzas entre las estimaciones de los parámetros para el ajuste especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Covariance of Estimates( 1 );

```

### Custom Test

**Sintaxis:** obj << Custom Test( [ l1 l2 l3 ... ], <Label( name )> )

**Descripción:** Ejecuta una prueba F personalizada que contrasta los distintos efectos del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
obj << Custom Test( [0 .5 0 0 0 0 0 .5 -1], Label( "Test 1" ) );

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Data Table Window;

```

### Deviance Residuals

**Sintaxis:** obj << Deviance Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La nueva columna contiene los residuos de la devianza.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Deviance Residuals;

```

### Deviance Residuals by Predicted

**Sintaxis:** obj << Deviance Residuals by Predicted( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de residuos de la devianza en el eje vertical y los valores de respuesta predichos en el eje horizontal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Deviance Residuals by Predicted( 1 );

```

### Effect Summary

**Sintaxis:** obj << Effect Summary( state=0|1 )

**Descripción:** Muestra u oculta el informe Resumen de efectos, que permite actualizar interactivamente los efectos del modelo. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

### FDR

**Sintaxis:** obj << FDR( state=0|1 )

**Descripción:** Especifica si se ajustan o no los valores de log utilidad y sus valores p correspondientes de la tabla Resumen de efectos utilizando la tasa de falsos descubrimientos (FDR).

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

### Firth Bias-Adjusted Estimates

**Sintaxis:** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que se utiliza el método ajustado por sesgo de Firth para ajustar el modelo. Solo está disponible para la personalidad Modelo lineal generalizado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

### GLM Distribution

**Sintaxis:** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica una distribución de probabilidad para la variable de respuesta. Disponible solo para la personalidad Modelo lineal generalizado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);

```

### Generalized Linear Model

**Sintaxis:** Fit Model( Y( column ), Effects( columns ), Personality( "Generalized Linear Model" ), GLM Distribution( distribution name ), Link Function( link type ) )

**Descripción:** Ajusta un modelo lineal generalizado usando varias funciones de distribución y enlace. Algunas de las técnicas son regresión exponencial, de Poisson y logística.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
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
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
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
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
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

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
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

### Inverse Prediction

**Sintaxis:** obj << Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Descripción:** Genera un valor X predicho y un intervalo de confianza basado en los valores especificados de Y y todos los demás factores.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
// Exactly one term value must be set to missing.
obj << Inverse Prediction(
	Response( 5, 6 ),
	Term Value(
		color( "Dark" ),
		spine( "Both Good" ),
		width( 26.2988439306358 ),
		weight( . )
	)
);

```

### Linear Predictor Plot

**Sintaxis:** obj << Linear Predictor Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de respuestas transformadas por la función de enlace inversa en el eje vertical y el predictor continuo en el eje horizontal. Solo está disponible cuando hay un predictor continuo y no más de un predictor categórico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :weight, :color ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run()
);
obj << Linear Predictor Plot( 1 );

```

### Link Function

**Sintaxis:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica la función de enlace para el modelo. Solo está disponible para la personalidad Modelo lineal generalizado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
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

### Mean Confidence Interval

**Sintaxis:** obj << Mean Confidence Interval

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las nuevas columnas contienen los límites de confianza al 95 % para la ecuación de predicción del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Mean Confidence Interval;

```

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Model Dialog;

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

### Overdispersion Tests and Intervals

**Sintaxis:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que debe incluirse un parámetro de sobredispersión en el modelo. Solo está disponible para la personalidad Modelo lineal generalizado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

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

### Pearson Residuals

**Sintaxis:** obj << Pearson Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La nueva columna contiene los residuos de Pearson.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Pearson Residuals;

```

### Pearson Residuals by Predicted

**Sintaxis:** obj << Pearson Residuals by Predicted( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de los residuos de Pearson en el eje vertical y los valores de respuesta predichos en el eje horizontal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Pearson Residuals by Predicted( 1 );

```

### Power Link Parameter

**Sintaxis:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el parámetro para la función de enlace de la potencia. Solo está disponible cuando se especifica Potencia como función de enlace en la personalidad Modelo lineal generalizado. "1" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Power" ),
	Power Link Parameter( 0.5 ),
	Run
);

```

### Predicted Values

**Sintaxis:** obj << Predicted Values

**Descripción:** Guarda una nueva columna en la tabla de datos. La nueva columna contiene los valores predichos por el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Predicted Values;

```

### Prediction Formula

**Sintaxis:** obj << Prediction Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La nueva columna contiene una fórmula para los valores predichos de la media, calculados por el modelo especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Prediction Formula;

```

### Profiler

**Sintaxis:** obj << Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de predicción, que se utiliza para explorar gráficamente la ecuación de predicción seccionándola factor por factor. El perfilador de predicción contiene funciones de optimización.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);
obj << Profiler( 1 );

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

### Regression Plot

**Sintaxis:** obj << Regression Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de la respuesta en el eje vertical y el predictor continuo en el eje horizontal. Solo está disponible cuando hay un predictor continuo y no más de un predictor categórico. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :weight, :color ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run( Regression Plot( 0 ) )
);
Wait( 1 );
obj << Regression Plot( 1 );

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
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
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Indiv Confid Limits

**Sintaxis:** obj << Save Indiv Confid Limits

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las nuevas columnas contienen los límites de confianza al 95 % para un valor individual proporcionado para el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Indiv Confid Limits;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
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

### Studentized Deviance Residuals

**Sintaxis:** obj << Studentized Deviance Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La nueva columna contiene los residuos de la devianza estudentizados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Deviance Residuals;

```

### Studentized Deviance Residuals by Predicted

**Sintaxis:** obj << Studentized Deviance Residuals by Predicted( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de residuos de la devianza estudentizados en el eje vertical y los valores de respuesta predichos en el eje horizontal. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run( Studentized Deviance Residuals by Predicted( 0 ) )
);
Wait( 1 );
obj << Studentized Deviance Residuals by Predicted( 1 );

```

### Studentized Pearson Residuals

**Sintaxis:** obj << Studentized Pearson Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La nueva columna contiene los residuos de Pearson estudentizados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Pearson Residuals;

```

### Studentized Pearson Residuals by Predicted

**Sintaxis:** obj << Studentized Pearson Residuals by Predicted( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de los residuos de Pearson estudentizados en el eje vertical y los valores de respuesta predichos en el eje horizontal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Pearson Residuals by Predicted( 1 );

```

### Surface Profiler

**Sintaxis:** obj << Surface Profiler( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de superficie interactivo para la respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Surface Profiler( 1 );

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
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
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

**Sintaxis:** obj = Generalized Linear Model(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Fit Least Squares > Effect Fit > Control Differences Chart

### Point Options

**Sintaxis:** scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descripción:** Especifica el estilo de dibujo de los puntos del gráfico. Puede escoger entre agujas verticales, puntos conectados y solo puntos. De forma predeterminada, el gráfico se dibuja con las agujas que conectan los puntos con la línea horizontal que se traza en la media.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Point Options( "Show Only Points" ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Point Options( "Show Connected Points" );

```

### Show Center Line

**Sintaxis:** scrobj << Show Center Line( state=0|1 )

**Descripción:** Muestra u oculta la línea central (media general) en el Gráfico de las diferencias de control. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Center Line( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Center Line( 1 );

```

### Show Decision Limit Shading

**Sintaxis:** scrobj << Show Decision Limit Shading( state=0|1 )

**Descripción:** Muestra u oculta el sombreado de límites de decisión en el Gráfico de las diferencias de control. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Decision Limit Shading( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Decision Limit Shading( 1 );

```

### Show Decision Limits

**Sintaxis:** scrobj << Show Decision Limits( state=0|1 )

**Descripción:** Muestra u oculta las líneas de límites de decisión en el Gráfico de las diferencias de control. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Decision Limits( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Decision Limits( 1 );

```

### Show Summary Report

**Sintaxis:** scrobj << Show Summary Report( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las medias grupales y los límites de decisión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1 )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Summary Report( 1 );

```

## Fit Least Squares > Effect Fit

### LSMeans Contrast

**Sintaxis:** scrobj << LSMeans Contrast( [ l1, l2, l3, ... ] );

obj << ( effect << {LSMeans Contrast( [ l1, l2, l3, ... ] )} )

**Descripción:** Ejecuta una prueba F personalizada para los contrastes estadísticos de diferentes niveles de un efecto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {LSMeans Contrast( [1 0 -1] )});

```

### LSMeans Dunnett

**Sintaxis:** scrobj << LSMeans Dunnett( state=0|1|<alpha>, Control Level( level ), <comparison options> );

obj << ( effect << {LSMeans Dunnett( state=0|1|<alpha>, Control Level( level ), <comparison options> )} )

**Descripción:** Muestra u oculta las pruebas y los intervalos de confianza para las comparaciones por pares frente al nivel de control especificado.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Dunnett( 1, Control Level( "a" ) )});

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Dunnett( .01, Control Level( "a" ) )});

```

### LSMeans Plot

**Sintaxis:** scrobj << LSMeans Plot;

obj << ( effect << {LSMeans Plot} )

**Descripción:** Muestra gráficos de medias de mínimos cuadrados para efectos nominales y ordinales. Si el efecto es una interacción, esta opción muestra la ventana Opciones del gráfico de medias de mínimos cuadrados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {LSMeans Plot});

```

### LSMeans Student's t

**Sintaxis:** scrobj << Student&apos;s t( state=0|1|<alpha>, <comparison options> );

obj << ( effect << {Student&apos;s t( state=0|1|<alpha>, <comparison options> )} )

**Descripción:** Muestra u oculta pruebas e intervalos de confianza para comparaciones por pares de medias de mínimos cuadrados utilizando pruebas t de Student.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Student's t( 1 )});

```

### LSMeans Table

**Sintaxis:** scrobj << LSMeans Table( state=0|1 );

obj << ( effect << {LSMeans Table( state=0|1 )} )

**Descripción:** Muestra u oculta una tabla de los estadísticos que se comparan cuando se comprueban los efectos. Esta opción no está disponible para los efectos continuos. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Table( 0 )} )
);
Wait( 1 );
obj << (:Drug << {LSMeans Table( 1 )});

```

### LSMeans Tukey HSD

**Sintaxis:** scrobj << LSMeans Tukey HSD( state=0|1|<alpha>, <comparison options> );

obj << ( effect << {LSMeans Tukey HSD( state=0|1|<alpha>, <comparison options> )} )

**Descripción:** Muestra u oculta pruebas e intervalos de confianza para comparaciones por pares de medias de mínimos cuadrados utilizando la prueba de Tukey-Kramer de diferencias honestamente significativas (HSD).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Tukey HSD( 1 )});

```

### Power Analysis

**Sintaxis:** scrobj << Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, <Power Plot>, <Done>);

obj << ( effect << {Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, <Power Plot>, <Done>)} )

**Descripción:** Muestra el informe Detalles de potencia, que permite analizar la potencia de la prueba del efecto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {Power Analysis(
	Alpha( 0.05 ),
	Sigma( 4.00577754367453 ),
	Delta( 1.51166255719209 ),
	Number( 10, 100, 10 ),
	Solve for Power,
	Power Plot,
	Done
)});

```

### Test Slices

**Sintaxis:** scrobj << Test Slices( state=0|1 );

obj << ( response << { effect1 * effect2 << {Test Slices( state=0|1 )} } )

**Descripción:** Ejecuta una prueba F personalizada para cada nivel de ambos factores en un término de interacción. Esta opción solo está disponible para las interacciones que implican efectos nominales y ordinales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :sex, :age * :sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:height << {:age * :sex << {Test Slices( 1 )}});

```

## Fit Least Squares > LSMeans Comparisons

### Connecting Letters Report

**Sintaxis:** scrobj << Connecting Letters Report( state=0|1 )

**Descripción:** Muestra u oculta las comparaciones significativas y no significativas con letras de conexión. Los niveles que no están conectados por la misma letra son significativamente diferentes. Los niveles conectados por la misma letra no presentan diferencias significativas. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Tukey HSD( 1, Connecting Letters Report( 0 ) )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);
scrobj << Connecting Letters Report( 1 );

```

### Control Differences Chart

**Sintaxis:** scrobj << Control Differences Chart( state=0|1 )

**Descripción:** Muestra u oculta un gráfico que contiene un punto por cada nivel del efecto distinto del de control. Cada punto muestra la diferencia entre la media de mínimos cuadrados de ese nivel y la media de mínimos cuadrados del nivel de control. Se representan los límites de decisión superior (UDL) y los límites de decisión inferior (LDL).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 0 )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);
scrobj << Control Differences Chart( 1 );

```

### Control Differences Report

**Sintaxis:** scrobj << Control Differences Report( state=0|1 )

**Descripción:** Muestra u oculta una tabla que contiene una fila por cada nivel del efecto distinto del de control. Cada fila contiene el nivel comparado con el nivel de control, la diferencia estimada, el error estándar de la diferencia, un intervalo de confianza y el valor p de la comparación. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Report( 0 )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);
scrobj << Control Differences Report( 1 );

```

### Crosstab Report

**Sintaxis:** scrobj << Crosstab Report( state=0|1 )

**Descripción:** Muestra u oculta un informe de tabla cruzada que contiene la diferencia de cada combinación de media de mínimos cuadrados, el error estándar de la diferencia y los límites de confianza de la diferencia. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( 1, Crosstab Report( 0 ) )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Crosstab Report( 1 );

```

### Detailed Comparisons

**Sintaxis:** scrobj << Detailed Comparisons( state=0|1 )

**Descripción:** Muestra u oculta un informe detallado para cada combinación de medias de mínimos cuadrados. El informe también contiene un gráfico que muestra la significación de cada comparación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Detailed Comparisons( 1 );

```

### Equivalence Test

**Sintaxis:** scrobj << Equivalence Test( difference )

**Descripción:** Prueba que las medias no difieran más de una diferencia especificada con la que se consideran prácticamente equivalentes. Se trata de lo opuesto a la prueba de significación habitual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Equivalence Test( 1.5 );

```

### Ordered Differences Report

**Sintaxis:** scrobj << Ordered Differences Report( state=0|1 )

**Descripción:** Muestra u oculta un informe que ordena las diferencias para cada nivel de medias de mínimos cuadrados de mayor a menor. El informe también contiene los errores estándar de las diferencias, los límites de confianza y los valores p.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Tukey HSD( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);
scrobj << Ordered Differences Report( 1 );

```

### Save Connecting Letters Table

**Sintaxis:** scrobj << Save Connecting Letters Table

**Descripción:** Crea una tabla de datos con columnas que contienen los niveles del efecto, las letras de conexión, las medias de mínimos cuadrados, sus errores estándar y los intervalos de confianza.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( 1 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Save Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Equivalence Tests

### Forest Plot

**Sintaxis:** scrobj << Forest Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de bosque Pruebas de equivalencia. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Forest Plot( 1 );

```

### Remove

**Sintaxis:** scrobj << Remove

**Descripción:** Quita todo el informe Pruebas de equivalencia.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );
Wait( 2 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Remove;

```

### Scatterplot

**Sintaxis:** scrobj << Scatterplot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de dispersión de las pruebas de equivalencia. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Scatterplot( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Scatterplot( 1 );

```

### Test Report

**Sintaxis:** scrobj << Test Report( state=0|1 )

**Descripción:** Muestra u oculta el informe Pruebas de equivalencia, que contiene los resultados del método dos pruebas unilaterales (TOST) que se utiliza para comprobar si existe una diferencia práctica entre las medias. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Test Report( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Test Report( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Mean Mean Scatterplot

### Show Reference Lines

**Sintaxis:** scrobj << Show Reference Lines( state=0|1 )

**Descripción:** Muestra u oculta las líneas de cuadrícula de referencia para los puntos del gráfico de dispersión.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1 ) );
Wait( 1 );
scrobj = Report( obj )["All Pairwise Comparisons Scatterplot"] << get scriptable object;
scrobj << Show Reference Lines( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons

### All Pairwise Comparisons Scatterplot

**Sintaxis:** scrobj << All Pairwise Comparisons Scatterplot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de dispersión Todas las comparaciones por pares. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( Drug ),
	Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << All Pairwise Comparisons Scatterplot( 1 );

```

### All Pairwise Differences

**Sintaxis:** scrobj << All Pairwise Differences( state=0|1 )

**Descripción:** Muestra u oculta el informe Todas las diferencias por pares. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1, All Pairwise Differences( 0 ) ) );
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << All Pairwise Differences( 1 );

```

### All Pairwise Differences Connecting Letters

**Sintaxis:** scrobj << All Pairwise Differences Connecting Letters( state=0|1 )

**Descripción:** Muestra u oculta el informe Letras de conexión de todas las diferencias por pares.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );
obj = dt << Fit Model(
	Y( :pain ),
	Effects( :gender, :drug, :gender * :drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( Drug ),
	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

### Save All Pairwise Differences Connecting Letters Table

**Sintaxis:** scrobj << Save All Pairwise Differences Connecting Letters Table

**Descripción:** Crea una tabla de datos con columnas que contienen los niveles del efecto, las letras de conexión, las medias de mínimos cuadrados, sus errores estándar y los intervalos de confianza.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );
obj = dt << Fit Model(
	Y( :pain ),
	Effects( :gender, :drug, :gender * :drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		Multiple Comparisons(
			Effect( Drug ),
			Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) )
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << Save All Pairwise Differences Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Control

### Calculate Adjusted P-Values

**Sintaxis:** scrobj << "Calculate Adjusted P-Values"n( state=0|1 )

**Descripción:** Muestra u oculta una columna de valores p en el informe Diferencias con el control.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << "Calculate Adjusted P-Values"n( 1 );

```

### Comparisons with Control Decision Chart

**Sintaxis:** scrobj << Comparisons with Control Decision Chart( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de decisión de las comparaciones con control. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control(
		1,
		Control Level( "Drug:a" ),
		Comparisons with Control Decision Chart( 0 )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << Comparisons with Control Decision Chart( 1 );

```

### Differences from Control

**Sintaxis:** scrobj << Differences from Control( state=0|1 )

**Descripción:** Muestra u oculta el informe Diferencias con el control. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ), Differences from Control( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << Differences from Control( 1 );

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Overall Average

### Calculate Adjusted P-Values

**Sintaxis:** scrobj << "Calculate Adjusted P-Values"n( state=0|1 )

**Descripción:** Muestra u oculta una columna de valores p en el informe Diferencias con respecto a las medias globales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << "Calculate Adjusted P-Values"n( 1 );

```

### Comparisons with Overall Average Decision Chart

**Sintaxis:** scrobj << Comparisons with Overall Average Decision Chart( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de decisión de las comparaciones con media global. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Overall Average(
		1,
		Comparisons with Overall Average Decision Chart( 0 )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << Comparisons with Overall Average Decision Chart( 1 );

```

### Differences from Overall Average

**Sintaxis:** scrobj << Differences from Overall Average( state=0|1 )

**Descripción:** Muestra u oculta el informe Diferencias con respecto a la media global. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Overall Average( 1, Differences from Overall Average( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << Differences from Overall Average( 1 );

```

## Fit Least Squares > Multiple Comparisons > Least Squares Means Plot

### Remove

**Sintaxis:** scrobj << Remove

**Descripción:** Quita el gráfico de las medias de mínimos cuadrados del informe.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Least Squares Means Plot( Show Connected Points( 0 ) )
);
Wait( 2 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Remove;

```

### Show Confidence Limits

**Sintaxis:** scrobj << Show Confidence Limits( state=0|1 )

**Descripción:** Muestra u oculta los límites de confianza de cada estimación en el gráfico. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Least Squares Means Plot( Show Confidence Limits( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Show Confidence Limits( 1 );

```

### Show Connected Points

**Sintaxis:** scrobj << Show Connected Points( state=0|1 )

**Descripción:** Muestra u oculta una o más líneas que conectan las medias de mínimos cuadrados de cada nivel en el gráfico. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Least Squares Means Plot( Show Connected Points( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Show Connected Points( 1 );

```

## Fit Least Squares > Multiple Comparisons

### Comparisons with Control

**Sintaxis:** scrobj << Comparisons with Control( state=0|1, Control Level( level ), <options> );

obj << Multiple Comparisons( Effect( effect ), Comparisons with Control( state=0|1, Control Level( level ), <options> ) )

**Descripción:** Muestra u oculta una prueba de comparaciones múltiples que compara la media de mínimos cuadrados de cada efecto con la media de mínimos cuadrados de un nivel de control. También se conoce como prueba de Dunnett.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ) )
);

```

### Comparisons with Overall Average

**Sintaxis:** scrobj << Comparisons with Overall Average( state=0|1, <options> );

obj << Multiple Comparisons( Effect( effect ), Comparisons with Overall Average( state=0|1, <options> ) )

**Descripción:** Muestra u oculta una prueba de comparaciones múltiples que compara la media de mínimos cuadrados de cada efecto con la media general de mínimos cuadrados. También se conoce como prueba de análisis de medias.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );

```

### Equivalence Tests

**Sintaxis:** scrobj << Equivalence Tests( number );

obj << Multiple Comparisons( Effect( effect ), Equivalence Tests( number ) )

**Descripción:** Muestra u oculta una prueba de comparaciones múltiples de todas las comparaciones de medias de mínimos cuadrados por pares con respecto a una diferencia especificada que se considera prácticamente equivalente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Equivalence Tests( 5 ) );

```

### Least Squares Means Plot

**Sintaxis:** scrobj << Least Squares Means Plot;

obj << Multiple Comparisons( Effect( effect ), Least Squares Means Plot )

**Descripción:** Muestra un gráfico de las medias de mínimos cuadrados con barras de error estándar.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );

```

### Remove

**Sintaxis:** scrobj << Remove

**Descripción:** Quita todo el informe Comparaciones múltiples.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );
Wait( 2 );
scrobj = (Report( obj )["Multiple Comparisons for Drug"] << get scriptable object);
scrobj << Remove;

```

### Slice F Test

**Sintaxis:** scrobj << Slice F Test( state=0|1 );

obj << Multiple Comparisons( Sliced Effect Estimates( Sliced Effect( effect1 * effect2 ), Slice Term List( effect_level ) ), Slice F Test( state=0|1 ) )

**Descripción:** Muestra u oculta la prueba F para el efecto segmentado. Opción activada de forma predeterminada.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :sex, :age * :sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Sliced Effect Estimates( Sliced Effect( :age * :sex ), Slice Term List( :age( "12" ) ) ),
	Slice F Test( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Multiple Comparisons for Slice of age*sex where age = 12"] <<
get scriptable object);
scrobj << Slice F Test( 0 );
Wait( 1 );
scrobj << Slice F Test( 1 );

```

### Student's t

**Sintaxis:** scrobj << Student&apos;s t( state=0|1, <options> );

obj << Multiple Comparisons( Effect( effect ), Student&apos;s t( state=0|1, <options> ) )

**Descripción:** Muestra u oculta una prueba de comparaciones múltiples de todas las comparaciones de medias de mínimos cuadrados por pares utilizando la prueba t de Student.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Student's t( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

### Tukey HSD

**Sintaxis:** scrobj << Tukey HSD( state=0|1, <options> );

obj << Multiple Comparisons( Effect( effect ), Tukey HSD( state=0|1, <options> ) )

**Descripción:** Muestra u oculta una prueba de comparaciones múltiples de todas las comparaciones de medias de mínimos cuadrados por pares utilizando la prueba de diferencias honestamente significativas (HSD) de Tukey-Kramer.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

## Fit Least Squares > REML

### Convergence Limit

**Sintaxis:** obj = Fit Model(...Convergence Limit( number=0.00000001 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el límite de convergencia para el ajuste del modelo. Si su modelo no converge fácilmente, puede que sea necesario aumentar el límite de convergencia. De forma predeterminada, el límite de convergencia es 0,00000001.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Convergence Limit( 0.0001 ),
	Run
);

```

### Maximum Iterations

**Sintaxis:** obj = Fit Model(...Maximum Iterations( number=100 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el número máximo de iteraciones que se utilizan en el ajuste del modelo. De forma predeterminada, el número máximo de iteraciones es 100.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Maximum Iterations( 150 ),
	Run
);

```

### Method

**Sintaxis:** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el método que se utiliza para ajustar los modelos mixtos en la personalidad de tipo mínimos cuadrados estándar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

### NoBounds

**Sintaxis:** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Elimina los límites de las estimaciones de varianza. Cuando esta opción está desactivada, se establece el límite inferior de las estimaciones de varianza con el valor cero. Solo está disponible para la personalidad de tipo mínimos cuadrados estándar. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 0 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

## Fit Least Squares > Response Fit

### AICc

**Sintaxis:** obj << AICc( state=0|1 )

**Descripción:** Muestra u oculta los valores corregidos del Criterio de información de Akaike (AICc) y del Criterio de información de Bayes (BIC) en el informe Resumen del ajuste.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << AICc( 1 );

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

### Analysis of Variance

**Sintaxis:** obj << Analysis of Variance( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene estadísticos para comparar el modelo ajustado con un modelo de media simple.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Analysis of Variance( 0 ) )
);
Wait( 1 );
obj << Analysis of Variance( 1 );

```

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj2 = dt2 << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj2 << (:Oxy << Apply Preset( preset ));

```

### Automatic Recalc

**Sintaxis:** obj << Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Bayes Plot

**Sintaxis:** obj << Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go  )

**Descripción:** Muestra u oculta un gráfico que calcula las probabilidades posteriores de todos los términos del modelo utilizando un enfoque bayesiano.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

### Box Cox Y Transformation

**Sintaxis:** obj << Box Cox Y Transformation( state=0|1, <Save Best Transformation( state=0|1 )>, <Save Specific Transformation( number )>, <Table of Estimates( state=0|1 )> )

**Descripción:** Muestra u oculta el informe Transformaciones de Box-Cox, que muestra cómo cambiaría el ajuste si se reajusta el modelo con una transformación de potencia (Box-Cox) en la respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

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

### Compare Slopes

**Sintaxis:** obj << Compare Slopes( Effect( effect ), <options> )

**Descripción:** Genera un informe de análisis de medias (ANOM) que compara las pendientes de interacción con la pendiente media de un modelo de análisis de covarianza (ANCOVA). Esta opción solo está disponible cuando hay un efecto nominal, un efecto continuo y su efecto de interacción para los efectos fijos.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );
obj = dt << Fit Model(
	Y( :Eighth Grade Math ),
	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Region * :High School Graduates ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

### Conditional Indiv CI

**Sintaxis:** obj << Conditional Indiv CI( <alpha=0.05> )

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene el intervalo de confianza del valor individual de la predicción condicional. Los intervalos de confianza incluyen estimaciones de efectos aleatorios para modelos con efectos aleatorios. Esta opción solo está disponible para los métodos de análisis REML. Hold down the shift key to enter alpha level or suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Indiv CI( 0.001 );

```

### Conditional Mean CI

**Sintaxis:** obj << Conditional Mean CI( <alpha=0.05> )

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene el intervalo de confianza del valor esperado de la predicción condicional. Los intervalos de confianza incluyen estimaciones de efectos aleatorios para modelos con efectos aleatorios. Esta opción solo está disponible para los métodos de análisis REML. Hold down the shift key to enter alpha level or suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Mean CI( 0.01 );

```

### Conditional Pred Formula

**Sintaxis:** obj << Conditional Pred Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene una fórmula que incluye estimaciones de efectos aleatorios para modelos con efectos aleatorios. Esta opción solo está disponible para los métodos de análisis REML. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Formula;

```

### Conditional Pred Values

**Sintaxis:** obj << Conditional Pred Values

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los valores predichos condicionales que se calculan utilizando los mejores predictores lineales insesgados (BLUP) para los coeficientes de efectos aleatorios. Esta opción solo está disponible para los métodos de análisis REML. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Values;

```

### Conditional Residuals

**Sintaxis:** obj << Conditional Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los residuos de la predicción condicional. Los valores residuales incluyen estimaciones de efectos aleatorios para modelos con efectos aleatorios. Esta opción solo está disponible para los métodos de análisis REML. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Residuals;

```

### Contour Profiler

**Sintaxis:** obj << Contour Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de contorno, que representa gráficamente los contornos de las respuestas de dos factores a la vez. Solo está disponible cuando el modelo contiene más de un factor continuo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

### Cook's D Influence

**Sintaxis:** obj << Cook&apos;s D Influence

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene una medida de la influencia de cada observación en la estimación del modelo. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Cook's D Influence;

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Copy Script;

```

### Correlation of Estimates

**Sintaxis:** obj << Correlation of Estimates( state=0|1 )

**Descripción:** Muestra u oculta la matriz de correlaciones entre las estimaciones de los parámetros para el ajuste especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Correlation of Estimates( 1 );

```

### Cox Mixtures

**Sintaxis:** obj << Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**Descripción:** Muestra u oculta las estimaciones de los parámetros para el modelo de mezcla de Cox basado en los valores de mezcla de referencia especificados. Esta opción solo está disponible cuando el modelo contiene efectos de mezcla.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

### Cube Plots

**Sintaxis:** obj << Cube Plots( state=0|1 )

**Descripción:** Muestra u oculta los valores predichos para los extremos de los rangos de factores dispuestos en uno o más cubos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cube Plots( 1 );

```

### Custom Test

**Sintaxis:** obj << Custom Test( [l1, l2, l3, ... ], <Label( text )> )

**Descripción:** Ejecuta una prueba F personalizada que contrasta los distintos efectos del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Data Table Window;

```

### Durbin Watson Test

**Sintaxis:** obj << Durbin Watson Test( state=0|1 )

**Descripción:** Muestra u oculta el informe Durbin-Watson, que contiene un estadístico para comprobar si los residuos tienen autocorrelación de primer orden. El informe también muestra la autocorrelación de los residuos y la probabilidad exacta asociada al estadístico. Esta opción solo es adecuada para datos de series de tiempo y asume que las observaciones están en orden cronológico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );
obj = dt << Fit Model(
	Y( :CO2 ),
	Effects( :Year, :Month ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Durbin Watson Test( 1 );

```

### Effect Details

**Sintaxis:** obj << Effect Details( state=0|1 )

**Descripción:** Muestra u oculta informes detallados de cada efecto del modelo, incluida la tabla de medias de mínimos cuadrados para cada efecto categórico. Puede obtener información adicional si envía mensajes a los efectos del modelo. Consulte el objeto Ajuste del efecto, situado en Ajuste del modelo para tener más información. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( Effect Details( 0 ) )
);
Wait( 1 );
obj << Effect Details( 1 );

```

### Effect Leverage Pairs

**Sintaxis:** obj << Effect Leverage Pairs

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen los valores X e Y que se representan en los gráficos de apalancamiento de los efectos. El valor Y es el residuo parcial. El valor X es el encogimiento del regresor en los gráficos de apalancamiento de los efectos. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Effect Leverage Pairs;

```

### Effect Summary

**Sintaxis:** obj << Effect Summary( state=0|1 )

**Descripción:** Muestra u oculta el informe Resumen de efectos, que permite actualizar interactivamente los efectos del modelo. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

### Effect Tests

**Sintaxis:** obj << Effect Tests( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene pruebas para los efectos fijos del modelo. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

### Error Specification

**Sintaxis:** obj << Error Specification( "Estimación predeterminada"|"Error puro"|"Especificados" )

**Descripción:** Especifica la varianza del error y los grados de libertad del error que se utilizan para los errores estándar y las pruebas en el informe Ajuste por mínimos cuadrados. Esta opción solo está disponible cuando el modelo no contiene efectos aleatorios.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Error Specification( "Pure Error" );

```

### Expanded  Estimates

**Sintaxis:** obj << Expanded  Estimates( state=0|1 )

**Descripción:** Muestra u oculta las estimaciones de los parámetros para todos los niveles de un efecto nominal del modelo. En el caso de un efecto nominal con k niveles, la tabla Estimaciones de los parámetros contiene coeficientes para los k-1 parámetros, y Estimaciones ampliadas muestra los coeficientes del efecto para todos los k niveles. Esta opción solo está disponible cuando al menos uno de los efectos no es continuo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Expanded Estimates( 1 );

```

### Externally Studentized Residuals

**Sintaxis:** obj << Externally Studentized Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los residuos estudentizados externamente. Son los residuos divididos entre las estimaciones del error estándar que excluyen la fila actual. Hold down the shift key to enter suffix.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Externally Studentized Residuals;

```

### FDR

**Sintaxis:** obj << FDR( state=0|1 )

**Descripción:** Especifica si se ajustan o no los valores de log utilidad y sus valores p correspondientes de la tabla Resumen de efectos utilizando la tasa de falsos descubrimientos (FDR).

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Conditional Formula

**Sintaxis:** obj << Get Conditional Formula

**Descripción:** Devuelve una fórmula de predicción que incluye estimaciones de efectos aleatorios.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Conditional Formula;

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Effect Names

**Sintaxis:** obj << Get Effect Names

**Descripción:** Devuelve los nombres de los efectos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect Names;
Show( G );

```

### Get Effect PValues

**Sintaxis:** obj << Get Effect PValues

**Descripción:** Devuelve los valores p de los efectos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect PValues;
Show( G );

```

### Get Estimates

**Sintaxis:** obj << Get Estimates

**Descripción:** Devuelve las estimaciones.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Estimates;
Show( G );

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

### Get Indiv Confid Limit Formula

**Sintaxis:** obj << Get Indiv Confid Limit Formula

**Descripción:** Devuelve una fórmula para los límites de confianza individuales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Indiv Confid Limit Formula;

```

### Get MM SAS DATA Step

**Sintaxis:** obj << Get MM SAS DATA Step

**Descripción:** Crea un código SAS que puede registrar en el Gestor de modelos SAS.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

### Get Mean Confid Limit Formula

**Sintaxis:** obj << Get Mean Confid Limit Formula

**Descripción:** Devuelve una fórmula para los límites de confianza de la media.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Mean Confid Limit Formula;

```

### Get Measures

**Sintaxis:** obj << Get Measures

**Descripción:** Devuelve medidas de ajuste de resumen del modelo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Get Measures;

```

### Get Parameter Names

**Sintaxis:** obj << Get Parameter Names

**Descripción:** Devuelve los nombres de los parámetros.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Parameter Names;
Show( G );

```

### Get Parameterized Formula

**Sintaxis:** obj << Get Parameterized Formula

**Descripción:** Devuelve una fórmula de predicción que utiliza parámetros en lugar de constantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Parameterized Formula;

```

### Get Prediction Formula

**Sintaxis:** obj << Get Prediction Formula

**Descripción:** Construye un script para crear una columna de fórmula de predicción y la devuelve.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Prediction Formula;

```

### Get Random Effect Names

**Sintaxis:** obj << Get Random Effect Names

**Descripción:** Devuelve los nombres de los efectos aleatorios. Disponible para métodos de análisis de REML.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Random Effect Names;
Show( G );

```

### Get SAS DATA Step

**Sintaxis:** obj << Get SAS DATA Step

**Descripción:** Crea un código SAS que puede utilizar para asignar una puntuación un nuevo conjunto de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SAS Data Step;

```

### Get SQL prediction expression

**Sintaxis:** obj << Get SQL prediction expression

**Descripción:** Crea una expresión SQL que se puede pegar en una instrucción SQL Select para predecir una respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SQL prediction expression;

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Standard Error Formula

**Sintaxis:** obj << Get Standard Error Formula

**Descripción:** Devuelve una fórmula para el error estándar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Standard Error Formula;

```

### Get Std Errors

**Sintaxis:** obj << Get Std Errors

**Descripción:** Devuelve los errores estándar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Std Errors;
Show( G );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

### Get Variance Components

**Sintaxis:** obj << Get Variance Components

**Descripción:** Devuelve los componentes de varianza. Disponible para métodos de análisis de REML.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Variance Components;
Show( G );

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

### Get X Matrix

**Sintaxis:** obj << Get X Matrix

**Descripción:** Devuelve la matriz de diseño.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get X Matrix;
Show( G );

```

### Get XPX Inverse

**Sintaxis:** obj << Get XPX Inverse

**Descripción:** Devuelve la matriz inversa X&apos;X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get XPX Inverse;
Show( G );

```

### Get Y Matrix

**Sintaxis:** obj << Get Y Matrix

**Descripción:** Devuelve la matriz Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Y Matrix;
Show( G );

```

### Hats

**Sintaxis:** obj << Hats

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los valores diagonales de la matriz xInv(x`x)x`. Estos valores también se denominan valores hat o de apalancamiento. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Hats;

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

### Indicator Parameterization Estimates

**Sintaxis:** obj << Indicator Parameterization Estimates( state=0|1 )

**Descripción:** Muestra u oculta el informe Parametrización de la función indicadora, que contiene estimaciones de parámetros con los efectos nominales en el modelo parametrizado utilizando las funciones indicadoras clásicas. Esta opción solo está disponible cuando hay columnas nominales y una constante del modelo entre los efectos del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Indicator Parameterization Estimates( 1 );

```

### Indiv Confidence Interval

**Sintaxis:** obj << Indiv Confidence Interval( <alpha=0.05> )

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen los límites del intervalo de confianza para una realización individual de la respuesta. Engloba la variación tanto en la respuesta como en su estimación. Hold down the shift key to enter alpha level or suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Indiv Confidence Interval( .001 );

```

### Indiv Confidence Limit Formula

**Sintaxis:** obj << Indiv Confidence Limit Formula( <alpha=0.05> )

**Descripción:** Guarda las columnas de la nueva fórmula en la tabla de datos original. Hay columnas para los límites de confianza inferior y superior de una predicción individual que son funciones de los regresores. El nivel predeterminado para alfa es 0,05, que genera límites de confianza al 95%.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
ref = obj << Indiv Confidence Limit Formula( .001 );
Show( ref );

```

### Individual Response Fit

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage"|"Effect Screening"|"Minimal Report" )

**Descripción:** Ajusta una regresión lineal para una respuesta continua. Algunas de las técnicas son regresión, análisis de varianza, análisis de covarianza, modelos mixtos y análisis de experimentos diseñados. La opción Énfasis le permite especificar el diseño del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);

```

### Interaction Plots

**Sintaxis:** obj << Interaction Plots( state=0|1 )

**Descripción:** Muestra u oculta una matriz de gráficos de interacción. Esta opción solo está disponible cuando hay efectos de interacción en el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Interaction Plots( 1 );

```

### Inverse Prediction

**Sintaxis:** obj << Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Descripción:** Genera un valor X predicho y un intervalo de confianza basado en los valores especificados de Y y todos los demás factores.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :RunTime ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

### Joint Factor Tests

**Sintaxis:** obj << Joint Factor Tests( state=0|1 )

**Descripción:** Muestra u oculta una prueba conjunta para cada efecto principal del modelo. La prueba conjunta es para todos los parámetros que impliquen ese efecto principal. Esta opción solo está disponible cuando el modelo contiene interacciones.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Joint Factor Tests( 1 );

```

### Lack of Fit

**Sintaxis:** obj << Lack of Fit( state=0|1 )

**Descripción:** Muestra u oculta una prueba que evalúa si el modelo tiene los efectos adecuados. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Lack Of Fit( 0 ) )
);
Wait( 1 );
obj << Lack Of Fit( 1 );

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

### Mean Confidence Interval

**Sintaxis:** obj << Mean Confidence Interval( <alpha=0.05> )

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen los límites del intervalo de confianza para el valor esperado. Engloba la variación en la estimación, pero no en la respuesta. Hold down the shift key to enter alpha level or suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Mean Confidence Interval( .01 );

```

### Mean Confidence Limit Formula

**Sintaxis:** obj << Mean Confidence Limit Formula( <alpha=0.05> )

**Descripción:** Guarda las columnas de la nueva fórmula en la tabla de datos original. Hay columnas para los límites de confianza inferior y superior de la respuesta media que son funciones de los regresores. El nivel predeterminado para alfa es 0,05, que genera límites de confianza al 95%.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
r = obj << Mean Confidence Limit Formula( .01 );
Show( r );

```

### Mixture Profiler

**Sintaxis:** obj << Mixture Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador de mezclas que muestra los contornos de la respuesta en un gráfico ternario. Esta opción solo está disponible si el atributo Efecto de mezcla se aplica a tres o más factores del modelo o la propiedad Mezcla se aplica a tres o más columnas de factores.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Model Dialog;

```

### Multiple Comparisons

**Sintaxis:** obj << Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), <options> )

**Descripción:** Genera estimaciones de las medias de mínimos cuadrados o estimaciones definidas por el usuario. El informe Comparaciones múltiples permite realizar comparaciones con la media global, comparaciones con un control o comparaciones por pares.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Multiple Comparisons( Effect( :Drug ) );

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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

```

### Normal Plot

**Sintaxis:** obj << Normal Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico que identifica las estimaciones de los parámetros que se desvían de la normalidad. Esto ayuda a determinar qué efectos están activos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Normal Plot( 1 );

```

### Parameter Estimates

**Sintaxis:** obj << Parameter Estimates( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las estimaciones de los parámetros y las pruebas t para la hipótesis de que cada parámetro es igual a cero.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Parameter Estimates( 1 );

```

### Parameter Power

**Sintaxis:** obj << Parameter Power( state=0|1 )

**Descripción:** Agrega o elimina columnas del informe Estimaciones de los parámetros. Estas columnas contienen la potencia y otros detalles relacionados con las pruebas de hipótesis correspondientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Parameter Power( 1 );

```

### Parameterized Formula

**Sintaxis:** obj << Parameterized Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene una fórmula de predicción que utiliza parámetros de tabla en lugar de constantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Parameterized Formula;

```

### Pareto Plot

**Sintaxis:** obj << Pareto Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de los valores absolutos de las estimaciones de los parámetros ortogonalizados y estandarizados. Este gráfico muestra su composición relativa a la suma de los valores absolutos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Pareto Plot( 1 );

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

### Plot Actual by Predicted

**Sintaxis:** obj << Plot Actual by Predicted( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Observados frente a predichos, que representa los valores observados de la respuesta frente a los valores predichos de la respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

### Plot Effect Leverage

**Sintaxis:** obj << Plot Effect Leverage( state=0|1 )

**Descripción:** Muestra u oculta el informe Gráfico de apalancamiento para cada efecto del modelo. El gráfico muestra cómo influyen las observaciones en la prueba de ese efecto y ofrece información sobre la multicolinealidad.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run( Plot Effect Leverage( 0 ) )
);
Wait( 1 );
obj << Plot Effect Leverage( 1 );

```

### Plot Regression

**Sintaxis:** obj << Plot Regression( state=0|1 )

**Descripción:** Muestra u oculta el informe Gráfico de regresión, que contiene un gráfico de dispersión de los datos y líneas de regresión para cada nivel del efecto categórico. Esta opción solo está disponible si hay exactamente un efecto continuo y no más de un efecto categórico en el modelo. Si se cumplen estas condiciones, se proporciona el informe Gráfico de regresión de forma predeterminada. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Plot Regression( 0 ) )
);
Wait( 1 );
obj << Plot Regression( 1 );

```

### Plot Residual by Normal Quantiles

**Sintaxis:** obj << Plot Residual by Normal Quantiles( state=0|1 )

**Descripción:** Muestra u oculta un gráfico con los residuos en el eje vertical y los cuantiles normales de los residuos en el eje horizontal. Esta opción no está disponible cuando el método es REML.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Normal Quantiles( 1 );

```

### Plot Residual by Predicted

**Sintaxis:** obj << Plot Residual by Predicted( state=0|1 )

**Descripción:** Muestra u oculta un gráfico con los residuos en el eje vertical y los valores predichos de la respuesta en el eje horizontal. Esta opción solo está disponible para respuestas continuas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Predicted( 1 );

```

### Plot Residual by Row

**Sintaxis:** obj << Plot Residual by Row( state=0|1 )

**Descripción:** Muestra u oculta un gráfico con los residuos en el eje vertical y el número de fila en el eje horizontal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Row( 1 );

```

### Plot Studentized Residuals

**Sintaxis:** obj << Plot Studentized Residuals( state=0|1 )

**Descripción:** Muestra u oculta un gráfico con los residuos estudentizados en el eje vertical y el número de fila en el eje horizontal. Cada punto del gráfico se calcula utilizando una estimación de su desviación estándar obtenida con la observación actual eliminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Studentized Residuals( 1 );

```

### Predicted Values

**Sintaxis:** obj << Predicted Values

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los valores predichos para el modelo ajustado. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Predicted Values;

```

### Prediction Formula

**Sintaxis:** obj << Prediction Formula

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos. La columna nueva contiene la fórmula de predicción para el modelo ajustado. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction Formula;

```

### Prediction and Interval Formulas

**Sintaxis:** obj << Prediction and Interval Formulas( <alpha=0.05> )

**Descripción:** Guarda las columnas nuevas en la tabla de datos. Las columnas contienen fórmulas para las predicciones, límites de confianza y límites de predicción. Las columnas de límites que se crean con esta opción contienen propiedades que utiliza el Perfilador de predicción. Hold down the shift key to enter alpha level or suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction and Interval Formulas;
dt << Profiler(
	Y( :Pred Formula y ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);
Wait( 2 );
obj << Prediction and Interval Formulas( 0.01 );
dt << Profiler(
	Y( :Pred Formula y2 ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);

```

### Press

**Sintaxis:** obj << Press( state=0|1 )

**Descripción:** Muestra u oculta el estadístico de la suma de cuadrados del error de predicción (Press) y su raíz del error cuadrático medio (RMSE). El estadístico Press es útil cuando se comparan varios modelos. Se favorecen los modelos con estadísticos Press más bajos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Press( 1 );

```

### Profiler

**Sintaxis:** obj << Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de predicción, que se utiliza para explorar gráficamente la ecuación de predicción seccionándola factor por factor. El perfilador de predicción contiene funciones de optimización.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

### Publish Conditional Formula

**Sintaxis:** obj << Publish Conditional Formula

**Descripción:** Crea una fórmula de predicción que incluye estimaciones de efectos aleatorios y la publica como script de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Conditional Formula;

```

### Publish Indiv Confid Limit Formula

**Sintaxis:** obj << Publish Indiv Confid Limit Formula

**Descripción:** Crea fórmulas para los límites de confianza individuales y las publica como scripts de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Indiv Confid Limit Formula;

```

### Publish Mean Confid Limit Formula

**Sintaxis:** obj << Publish Mean Confid Limit Formula

**Descripción:** Crea fórmulas para los límites de confianza de la media y las publica como scripts de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Mean Confid Limit Formula;

```

### Publish Parameterized Formula

**Sintaxis:** obj << Publish Parameterized Formula

**Descripción:** Crea una fórmula de predicción que utiliza parámetros en lugar de constantes y la publica como script de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Parameterized Formula;

```

### Publish Prediction Formula

**Sintaxis:** obj << Publish Prediction Formula

**Descripción:** Crea una fórmula de predicción y la publica como script de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Prediction Formula;

```

### Publish Standard Error Formula

**Sintaxis:** obj << Publish Standard Error Formula

**Descripción:** Crea una fórmula de error estándar y la publica como script de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Standard Error Formula;

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Report View( "Summary" );

```

### Residuals

**Sintaxis:** obj << Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los valores residuales para el modelo ajustado. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Residuals;

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Coding Table

**Sintaxis:** obj << Save Coding Table

**Descripción:** Crea una tabla de datos nueva que contiene la codificación JMP para todos los parámetros del modelo. La última columna muestra los valores de la variable de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Save Coding Table;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Script Window;

```

### Scaled Estimates

**Sintaxis:** obj << Scaled Estimates( state=0|1 )

**Descripción:** Muestra u oculta las estimaciones de los parámetros correspondientes a los factores que se escalan para que tengan una media de cero y un rango de dos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Scaled Estimates( 1 );

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

### Sequential Tests

**Sintaxis:** obj << Sequential Tests( state=0|1 )

**Descripción:** Muestra u oculta el informe Pruebas secuenciales (tipo 1), que contiene las sumas de cuadrados a medida que se añaden efectos al modelo secuencialmente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

### Show All Confidence Intervals

**Sintaxis:** obj << Show All Confidence Intervals( state=0|1 )

**Descripción:** Muestra u oculta intervalos de confianza para las estimaciones de los parámetros y las estimaciones de las medias de mínimos cuadrados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show All Confidence Intervals( 1 );

```

### Show Prediction Expression

**Sintaxis:** obj << Show Prediction Expression( state=0|1 )

**Descripción:** Muestra u oculta el informe Expresión de predicción, que contiene la ecuación para el modelo estimado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show Prediction Expression( 1 );

```

### Show Sqrt Variance Component

**Sintaxis:** obj << Show Sqrt Variance Component( state=0|1 )

**Descripción:** Muestra u oculta la columna Componente de varianza de sqrt en el informe Estimaciones de componentes de varianza por REML.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

### Show VIF

**Sintaxis:** obj << Show VIF( state=0|1 )

**Descripción:** Muestra u oculta los valores del factor de inflación de la varianza (VIF) en el informe Estimaciones de los parámetros.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

### Sorted Estimates

**Sintaxis:** obj << Sorted Estimates( state=0|1 )

**Descripción:** Muestra u oculta el informe Estimaciones de los parámetros ordenados, que puede ser útil en situaciones de cribado. Este informe contiene las estimaciones de los parámetros ordenados por el valor absoluto de la razón t de cada estimación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sorted Estimates( 1 );

```

### Std Error of Individual

**Sintaxis:** obj << Std Error of Individual

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene el error estándar de un valor predicho individual. Se utiliza para calcular el intervalo de confianza individual. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Individual;

```

### Std Error of Predicted

**Sintaxis:** obj << Std Error of Predicted

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene el error estándar de los valores predichos. Se utiliza para calcular el intervalo de confianza de la media. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Predicted;

```

### Std Error of Residual

**Sintaxis:** obj << Std Error of Residual

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene el error estándar de los valores residuales. Se utiliza para calcular los residuos estudentizados. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Residual;

```

### StdErr Pred Formula

**Sintaxis:** obj << StdErr Pred Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene la fórmula del error estándar de los valores predichos como función de los regresores. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << StdErr Pred Formula;

```

### Studentized Residuals

**Sintaxis:** obj << Studentized Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene el residuo estudentizado, que es el residuo dividido por su error estándar. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Studentized Residuals;

```

### Summary of Fit

**Sintaxis:** obj << Summary of Fit( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene un resumen de los estadísticos de ajuste del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Summary of Fit( 0 ) )
);
Wait( 1 );
obj << Summary of Fit( 1 );

```

### Surface Profiler

**Sintaxis:** obj << Surface Profiler( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de superficie tridimensional de la superficie de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
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

**Sintaxis:** obj = Individual Response Fit(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Fit Least Squares

### AICc

**Sintaxis:** obj << AICc( state=0|1 )

**Descripción:** Muestra u oculta los valores corregidos del Criterio de información de Akaike (AICc) y del Criterio de información de Bayes (BIC) en el informe Resumen del ajuste.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << AICc( 1 );

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

### Analysis of Variance

**Sintaxis:** obj << Analysis of Variance( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene estadísticos para comparar el modelo ajustado con un modelo de media simple.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Analysis of Variance( 0 ) )
);
Wait( 1 );
obj << Analysis of Variance( 1 );

```

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj2 = dt2 << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj2 << (:Oxy << Apply Preset( preset ));

```

### Automatic Recalc

**Sintaxis:** obj << Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Bayes Plot

**Sintaxis:** obj << Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go  )

**Descripción:** Muestra u oculta un gráfico que calcula las probabilidades posteriores de todos los términos del modelo utilizando un enfoque bayesiano.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

### Box Cox Y Transformation

**Sintaxis:** obj << Box Cox Y Transformation( state=0|1, <Save Best Transformation( state=0|1 )>, <Save Specific Transformation( number )>, <Table of Estimates( state=0|1 )> )

**Descripción:** Muestra u oculta el informe Transformaciones de Box-Cox, que muestra cómo cambiaría el ajuste si se reajusta el modelo con una transformación de potencia (Box-Cox) en la respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

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

### Compare Slopes

**Sintaxis:** obj << Compare Slopes( Effect( effect ), <options> )

**Descripción:** Genera un informe de análisis de medias (ANOM) que compara las pendientes de interacción con la pendiente media de un modelo de análisis de covarianza (ANCOVA). Esta opción solo está disponible cuando hay un efecto nominal, un efecto continuo y su efecto de interacción para los efectos fijos.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );
obj = dt << Fit Model(
	Y( :Eighth Grade Math ),
	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Region * :High School Graduates ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

### Conditional Indiv CI

**Sintaxis:** obj << Conditional Indiv CI( <alpha=0.05> )

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene el intervalo de confianza del valor individual de la predicción condicional. Los intervalos de confianza incluyen estimaciones de efectos aleatorios para modelos con efectos aleatorios. Esta opción solo está disponible para los métodos de análisis REML. Hold down the shift key to enter alpha level or suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Indiv CI( 0.001 );

```

### Conditional Mean CI

**Sintaxis:** obj << Conditional Mean CI( <alpha=0.05> )

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene el intervalo de confianza del valor esperado de la predicción condicional. Los intervalos de confianza incluyen estimaciones de efectos aleatorios para modelos con efectos aleatorios. Esta opción solo está disponible para los métodos de análisis REML. Hold down the shift key to enter alpha level or suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Mean CI( 0.01 );

```

### Conditional Pred Formula

**Sintaxis:** obj << Conditional Pred Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene una fórmula que incluye estimaciones de efectos aleatorios para modelos con efectos aleatorios. Esta opción solo está disponible para los métodos de análisis REML. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Formula;

```

### Conditional Pred Values

**Sintaxis:** obj << Conditional Pred Values

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los valores predichos condicionales que se calculan utilizando los mejores predictores lineales insesgados (BLUP) para los coeficientes de efectos aleatorios. Esta opción solo está disponible para los métodos de análisis REML. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Values;

```

### Conditional Residuals

**Sintaxis:** obj << Conditional Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los residuos de la predicción condicional. Los valores residuales incluyen estimaciones de efectos aleatorios para modelos con efectos aleatorios. Esta opción solo está disponible para los métodos de análisis REML. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Residuals;

```

### Contour Profiler

**Sintaxis:** obj << Contour Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de contorno, que representa gráficamente los contornos de las respuestas de dos factores a la vez. Solo está disponible cuando el modelo contiene más de un factor continuo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

### Cook's D Influence

**Sintaxis:** obj << Cook&apos;s D Influence

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene una medida de la influencia de cada observación en la estimación del modelo. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Cook's D Influence;

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Copy Script;

```

### Correlation of Estimates

**Sintaxis:** obj << Correlation of Estimates( state=0|1 )

**Descripción:** Muestra u oculta la matriz de correlaciones entre las estimaciones de los parámetros para el ajuste especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Correlation of Estimates( 1 );

```

### Cox Mixtures

**Sintaxis:** obj << Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**Descripción:** Muestra u oculta las estimaciones de los parámetros para el modelo de mezcla de Cox basado en los valores de mezcla de referencia especificados. Esta opción solo está disponible cuando el modelo contiene efectos de mezcla.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

### Cube Plots

**Sintaxis:** obj << Cube Plots( state=0|1 )

**Descripción:** Muestra u oculta los valores predichos para los extremos de los rangos de factores dispuestos en uno o más cubos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cube Plots( 1 );

```

### Custom Test

**Sintaxis:** obj << Custom Test( [l1, l2, l3, ... ], <Label( text )> )

**Descripción:** Ejecuta una prueba F personalizada que contrasta los distintos efectos del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Data Table Window;

```

### Durbin Watson Test

**Sintaxis:** obj << Durbin Watson Test( state=0|1 )

**Descripción:** Muestra u oculta el informe Durbin-Watson, que contiene un estadístico para comprobar si los residuos tienen autocorrelación de primer orden. El informe también muestra la autocorrelación de los residuos y la probabilidad exacta asociada al estadístico. Esta opción solo es adecuada para datos de series de tiempo y asume que las observaciones están en orden cronológico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );
obj = dt << Fit Model(
	Y( :CO2 ),
	Effects( :Year, :Month ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Durbin Watson Test( 1 );

```

### Effect Details

**Sintaxis:** obj << Effect Details( state=0|1 )

**Descripción:** Muestra u oculta informes detallados de cada efecto del modelo, incluida la tabla de medias de mínimos cuadrados para cada efecto categórico. Puede obtener información adicional si envía mensajes a los efectos del modelo. Consulte el objeto Ajuste del efecto, situado en Ajuste del modelo para tener más información. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( Effect Details( 0 ) )
);
Wait( 1 );
obj << Effect Details( 1 );

```

### Effect Leverage Pairs

**Sintaxis:** obj << Effect Leverage Pairs

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen los valores X e Y que se representan en los gráficos de apalancamiento de los efectos. El valor Y es el residuo parcial. El valor X es el encogimiento del regresor en los gráficos de apalancamiento de los efectos. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Effect Leverage Pairs;

```

### Effect Summary

**Sintaxis:** obj << Effect Summary( state=0|1 )

**Descripción:** Muestra u oculta el informe Resumen de efectos, que permite actualizar interactivamente los efectos del modelo. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

### Effect Tests

**Sintaxis:** obj << Effect Tests( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene pruebas para los efectos fijos del modelo. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

### Error Specification

**Sintaxis:** obj << Error Specification( "Estimación predeterminada"|"Error puro"|"Especificados" )

**Descripción:** Especifica la varianza del error y los grados de libertad del error que se utilizan para los errores estándar y las pruebas en el informe Ajuste por mínimos cuadrados. Esta opción solo está disponible cuando el modelo no contiene efectos aleatorios.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Error Specification( "Pure Error" );

```

### Expanded  Estimates

**Sintaxis:** obj << Expanded  Estimates( state=0|1 )

**Descripción:** Muestra u oculta las estimaciones de los parámetros para todos los niveles de un efecto nominal del modelo. En el caso de un efecto nominal con k niveles, la tabla Estimaciones de los parámetros contiene coeficientes para los k-1 parámetros, y Estimaciones ampliadas muestra los coeficientes del efecto para todos los k niveles. Esta opción solo está disponible cuando al menos uno de los efectos no es continuo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Expanded Estimates( 1 );

```

### Externally Studentized Residuals

**Sintaxis:** obj << Externally Studentized Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los residuos estudentizados externamente. Son los residuos divididos entre las estimaciones del error estándar que excluyen la fila actual. Hold down the shift key to enter suffix.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Externally Studentized Residuals;

```

### FDR

**Sintaxis:** obj << FDR( state=0|1 )

**Descripción:** Especifica si se ajustan o no los valores de log utilidad y sus valores p correspondientes de la tabla Resumen de efectos utilizando la tasa de falsos descubrimientos (FDR).

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Conditional Formula

**Sintaxis:** obj << Get Conditional Formula

**Descripción:** Devuelve una fórmula de predicción que incluye estimaciones de efectos aleatorios.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Conditional Formula;

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Effect Names

**Sintaxis:** obj << Get Effect Names

**Descripción:** Devuelve los nombres de los efectos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect Names;
Show( G );

```

### Get Effect PValues

**Sintaxis:** obj << Get Effect PValues

**Descripción:** Devuelve los valores p de los efectos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect PValues;
Show( G );

```

### Get Estimates

**Sintaxis:** obj << Get Estimates

**Descripción:** Devuelve las estimaciones.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Estimates;
Show( G );

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

### Get Indiv Confid Limit Formula

**Sintaxis:** obj << Get Indiv Confid Limit Formula

**Descripción:** Devuelve una fórmula para los límites de confianza individuales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Indiv Confid Limit Formula;

```

### Get MM SAS DATA Step

**Sintaxis:** obj << Get MM SAS DATA Step

**Descripción:** Crea un código SAS que puede registrar en el Gestor de modelos SAS.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

### Get Mean Confid Limit Formula

**Sintaxis:** obj << Get Mean Confid Limit Formula

**Descripción:** Devuelve una fórmula para los límites de confianza de la media.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Mean Confid Limit Formula;

```

### Get Measures

**Sintaxis:** obj << Get Measures

**Descripción:** Devuelve medidas de ajuste de resumen del modelo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Get Measures;

```

### Get Parameter Names

**Sintaxis:** obj << Get Parameter Names

**Descripción:** Devuelve los nombres de los parámetros.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Parameter Names;
Show( G );

```

### Get Parameterized Formula

**Sintaxis:** obj << Get Parameterized Formula

**Descripción:** Devuelve una fórmula de predicción que utiliza parámetros en lugar de constantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Parameterized Formula;

```

### Get Prediction Formula

**Sintaxis:** obj << Get Prediction Formula

**Descripción:** Construye un script para crear una columna de fórmula de predicción y la devuelve.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Prediction Formula;

```

### Get Random Effect Names

**Sintaxis:** obj << Get Random Effect Names

**Descripción:** Devuelve los nombres de los efectos aleatorios. Disponible para métodos de análisis de REML.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Random Effect Names;
Show( G );

```

### Get SAS DATA Step

**Sintaxis:** obj << Get SAS DATA Step

**Descripción:** Crea un código SAS que puede utilizar para asignar una puntuación un nuevo conjunto de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SAS Data Step;

```

### Get SQL prediction expression

**Sintaxis:** obj << Get SQL prediction expression

**Descripción:** Crea una expresión SQL que se puede pegar en una instrucción SQL Select para predecir una respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SQL prediction expression;

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Standard Error Formula

**Sintaxis:** obj << Get Standard Error Formula

**Descripción:** Devuelve una fórmula para el error estándar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Standard Error Formula;

```

### Get Std Errors

**Sintaxis:** obj << Get Std Errors

**Descripción:** Devuelve los errores estándar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Std Errors;
Show( G );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

### Get Variance Components

**Sintaxis:** obj << Get Variance Components

**Descripción:** Devuelve los componentes de varianza. Disponible para métodos de análisis de REML.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Variance Components;
Show( G );

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

### Get X Matrix

**Sintaxis:** obj << Get X Matrix

**Descripción:** Devuelve la matriz de diseño.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get X Matrix;
Show( G );

```

### Get XPX Inverse

**Sintaxis:** obj << Get XPX Inverse

**Descripción:** Devuelve la matriz inversa X&apos;X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get XPX Inverse;
Show( G );

```

### Get Y Matrix

**Sintaxis:** obj << Get Y Matrix

**Descripción:** Devuelve la matriz Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Y Matrix;
Show( G );

```

### Hats

**Sintaxis:** obj << Hats

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los valores diagonales de la matriz xInv(x`x)x`. Estos valores también se denominan valores hat o de apalancamiento. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Hats;

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

### Indicator Parameterization Estimates

**Sintaxis:** obj << Indicator Parameterization Estimates( state=0|1 )

**Descripción:** Muestra u oculta el informe Parametrización de la función indicadora, que contiene estimaciones de parámetros con los efectos nominales en el modelo parametrizado utilizando las funciones indicadoras clásicas. Esta opción solo está disponible cuando hay columnas nominales y una constante del modelo entre los efectos del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Indicator Parameterization Estimates( 1 );

```

### Indiv Confidence Interval

**Sintaxis:** obj << Indiv Confidence Interval( <alpha=0.05> )

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen los límites del intervalo de confianza para una realización individual de la respuesta. Engloba la variación tanto en la respuesta como en su estimación. Hold down the shift key to enter alpha level or suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Indiv Confidence Interval( .001 );

```

### Indiv Confidence Limit Formula

**Sintaxis:** obj << Indiv Confidence Limit Formula( <alpha=0.05> )

**Descripción:** Guarda las columnas de la nueva fórmula en la tabla de datos original. Hay columnas para los límites de confianza inferior y superior de una predicción individual que son funciones de los regresores. El nivel predeterminado para alfa es 0,05, que genera límites de confianza al 95%.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
ref = obj << Indiv Confidence Limit Formula( .001 );
Show( ref );

```

### Interaction Plots

**Sintaxis:** obj << Interaction Plots( state=0|1 )

**Descripción:** Muestra u oculta una matriz de gráficos de interacción. Esta opción solo está disponible cuando hay efectos de interacción en el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Interaction Plots( 1 );

```

### Inverse Prediction

**Sintaxis:** obj << Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Descripción:** Genera un valor X predicho y un intervalo de confianza basado en los valores especificados de Y y todos los demás factores.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :RunTime ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

### Joint Factor Tests

**Sintaxis:** obj << Joint Factor Tests( state=0|1 )

**Descripción:** Muestra u oculta una prueba conjunta para cada efecto principal del modelo. La prueba conjunta es para todos los parámetros que impliquen ese efecto principal. Esta opción solo está disponible cuando el modelo contiene interacciones.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Joint Factor Tests( 1 );

```

### Lack of Fit

**Sintaxis:** obj << Lack of Fit( state=0|1 )

**Descripción:** Muestra u oculta una prueba que evalúa si el modelo tiene los efectos adecuados. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Lack Of Fit( 0 ) )
);
Wait( 1 );
obj << Lack Of Fit( 1 );

```

### Least Squares Personality

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage"|"Effect Screening"|"Minimal Report" )

**Descripción:** Ajusta una regresión lineal para una respuesta continua. Algunas de las técnicas son regresión, análisis de varianza, análisis de covarianza, modelos mixtos y análisis de experimentos diseñados. La opción Énfasis le permite especificar el diseño del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
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

### Mean Confidence Interval

**Sintaxis:** obj << Mean Confidence Interval( <alpha=0.05> )

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen los límites del intervalo de confianza para el valor esperado. Engloba la variación en la estimación, pero no en la respuesta. Hold down the shift key to enter alpha level or suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Mean Confidence Interval( .01 );

```

### Mean Confidence Limit Formula

**Sintaxis:** obj << Mean Confidence Limit Formula( <alpha=0.05> )

**Descripción:** Guarda las columnas de la nueva fórmula en la tabla de datos original. Hay columnas para los límites de confianza inferior y superior de la respuesta media que son funciones de los regresores. El nivel predeterminado para alfa es 0,05, que genera límites de confianza al 95%.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
r = obj << Mean Confidence Limit Formula( .01 );
Show( r );

```

### Mixture Profiler

**Sintaxis:** obj << Mixture Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador de mezclas que muestra los contornos de la respuesta en un gráfico ternario. Esta opción solo está disponible si el atributo Efecto de mezcla se aplica a tres o más factores del modelo o la propiedad Mezcla se aplica a tres o más columnas de factores.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Model Dialog;

```

### Multiple Comparisons

**Sintaxis:** obj << Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), <options> )

**Descripción:** Genera estimaciones de las medias de mínimos cuadrados o estimaciones definidas por el usuario. El informe Comparaciones múltiples permite realizar comparaciones con la media global, comparaciones con un control o comparaciones por pares.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Multiple Comparisons( Effect( :Drug ) );

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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

```

### Normal Plot

**Sintaxis:** obj << Normal Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico que identifica las estimaciones de los parámetros que se desvían de la normalidad. Esto ayuda a determinar qué efectos están activos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Normal Plot( 1 );

```

### Parameter Estimates

**Sintaxis:** obj << Parameter Estimates( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las estimaciones de los parámetros y las pruebas t para la hipótesis de que cada parámetro es igual a cero.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Parameter Estimates( 1 );

```

### Parameter Power

**Sintaxis:** obj << Parameter Power( state=0|1 )

**Descripción:** Agrega o elimina columnas del informe Estimaciones de los parámetros. Estas columnas contienen la potencia y otros detalles relacionados con las pruebas de hipótesis correspondientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Parameter Power( 1 );

```

### Parameterized Formula

**Sintaxis:** obj << Parameterized Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene una fórmula de predicción que utiliza parámetros de tabla en lugar de constantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Parameterized Formula;

```

### Pareto Plot

**Sintaxis:** obj << Pareto Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de los valores absolutos de las estimaciones de los parámetros ortogonalizados y estandarizados. Este gráfico muestra su composición relativa a la suma de los valores absolutos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Pareto Plot( 1 );

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

### Plot Actual by Predicted

**Sintaxis:** obj << Plot Actual by Predicted( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Observados frente a predichos, que representa los valores observados de la respuesta frente a los valores predichos de la respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

### Plot Effect Leverage

**Sintaxis:** obj << Plot Effect Leverage( state=0|1 )

**Descripción:** Muestra u oculta el informe Gráfico de apalancamiento para cada efecto del modelo. El gráfico muestra cómo influyen las observaciones en la prueba de ese efecto y ofrece información sobre la multicolinealidad.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run( Plot Effect Leverage( 0 ) )
);
Wait( 1 );
obj << Plot Effect Leverage( 1 );

```

### Plot Regression

**Sintaxis:** obj << Plot Regression( state=0|1 )

**Descripción:** Muestra u oculta el informe Gráfico de regresión, que contiene un gráfico de dispersión de los datos y líneas de regresión para cada nivel del efecto categórico. Esta opción solo está disponible si hay exactamente un efecto continuo y no más de un efecto categórico en el modelo. Si se cumplen estas condiciones, se proporciona el informe Gráfico de regresión de forma predeterminada. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Plot Regression( 0 ) )
);
Wait( 1 );
obj << Plot Regression( 1 );

```

### Plot Residual by Normal Quantiles

**Sintaxis:** obj << Plot Residual by Normal Quantiles( state=0|1 )

**Descripción:** Muestra u oculta un gráfico con los residuos en el eje vertical y los cuantiles normales de los residuos en el eje horizontal. Esta opción no está disponible cuando el método es REML.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Normal Quantiles( 1 );

```

### Plot Residual by Predicted

**Sintaxis:** obj << Plot Residual by Predicted( state=0|1 )

**Descripción:** Muestra u oculta un gráfico con los residuos en el eje vertical y los valores predichos de la respuesta en el eje horizontal. Esta opción solo está disponible para respuestas continuas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Predicted( 1 );

```

### Plot Residual by Row

**Sintaxis:** obj << Plot Residual by Row( state=0|1 )

**Descripción:** Muestra u oculta un gráfico con los residuos en el eje vertical y el número de fila en el eje horizontal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Row( 1 );

```

### Plot Studentized Residuals

**Sintaxis:** obj << Plot Studentized Residuals( state=0|1 )

**Descripción:** Muestra u oculta un gráfico con los residuos estudentizados en el eje vertical y el número de fila en el eje horizontal. Cada punto del gráfico se calcula utilizando una estimación de su desviación estándar obtenida con la observación actual eliminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Studentized Residuals( 1 );

```

### Predicted Values

**Sintaxis:** obj << Predicted Values

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los valores predichos para el modelo ajustado. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Predicted Values;

```

### Prediction Formula

**Sintaxis:** obj << Prediction Formula

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos. La columna nueva contiene la fórmula de predicción para el modelo ajustado. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction Formula;

```

### Prediction and Interval Formulas

**Sintaxis:** obj << Prediction and Interval Formulas( <alpha=0.05> )

**Descripción:** Guarda las columnas nuevas en la tabla de datos. Las columnas contienen fórmulas para las predicciones, límites de confianza y límites de predicción. Las columnas de límites que se crean con esta opción contienen propiedades que utiliza el Perfilador de predicción. Hold down the shift key to enter alpha level or suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction and Interval Formulas;
dt << Profiler(
	Y( :Pred Formula y ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);
Wait( 2 );
obj << Prediction and Interval Formulas( 0.01 );
dt << Profiler(
	Y( :Pred Formula y2 ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);

```

### Press

**Sintaxis:** obj << Press( state=0|1 )

**Descripción:** Muestra u oculta el estadístico de la suma de cuadrados del error de predicción (Press) y su raíz del error cuadrático medio (RMSE). El estadístico Press es útil cuando se comparan varios modelos. Se favorecen los modelos con estadísticos Press más bajos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Press( 1 );

```

### Profiler

**Sintaxis:** obj << Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de predicción, que se utiliza para explorar gráficamente la ecuación de predicción seccionándola factor por factor. El perfilador de predicción contiene funciones de optimización.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

### Publish Conditional Formula

**Sintaxis:** obj << Publish Conditional Formula

**Descripción:** Crea una fórmula de predicción que incluye estimaciones de efectos aleatorios y la publica como script de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Conditional Formula;

```

### Publish Indiv Confid Limit Formula

**Sintaxis:** obj << Publish Indiv Confid Limit Formula

**Descripción:** Crea fórmulas para los límites de confianza individuales y las publica como scripts de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Indiv Confid Limit Formula;

```

### Publish Mean Confid Limit Formula

**Sintaxis:** obj << Publish Mean Confid Limit Formula

**Descripción:** Crea fórmulas para los límites de confianza de la media y las publica como scripts de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Mean Confid Limit Formula;

```

### Publish Parameterized Formula

**Sintaxis:** obj << Publish Parameterized Formula

**Descripción:** Crea una fórmula de predicción que utiliza parámetros en lugar de constantes y la publica como script de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Parameterized Formula;

```

### Publish Prediction Formula

**Sintaxis:** obj << Publish Prediction Formula

**Descripción:** Crea una fórmula de predicción y la publica como script de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Prediction Formula;

```

### Publish Standard Error Formula

**Sintaxis:** obj << Publish Standard Error Formula

**Descripción:** Crea una fórmula de error estándar y la publica como script de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Standard Error Formula;

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Report View( "Summary" );

```

### Residuals

**Sintaxis:** obj << Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los valores residuales para el modelo ajustado. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Residuals;

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Coding Table

**Sintaxis:** obj << Save Coding Table

**Descripción:** Crea una tabla de datos nueva que contiene la codificación JMP para todos los parámetros del modelo. La última columna muestra los valores de la variable de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Save Coding Table;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Script Window;

```

### Scaled Estimates

**Sintaxis:** obj << Scaled Estimates( state=0|1 )

**Descripción:** Muestra u oculta las estimaciones de los parámetros correspondientes a los factores que se escalan para que tengan una media de cero y un rango de dos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Scaled Estimates( 1 );

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

### Sequential Tests

**Sintaxis:** obj << Sequential Tests( state=0|1 )

**Descripción:** Muestra u oculta el informe Pruebas secuenciales (tipo 1), que contiene las sumas de cuadrados a medida que se añaden efectos al modelo secuencialmente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

### Show All Confidence Intervals

**Sintaxis:** obj << Show All Confidence Intervals( state=0|1 )

**Descripción:** Muestra u oculta intervalos de confianza para las estimaciones de los parámetros y las estimaciones de las medias de mínimos cuadrados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show All Confidence Intervals( 1 );

```

### Show Prediction Expression

**Sintaxis:** obj << Show Prediction Expression( state=0|1 )

**Descripción:** Muestra u oculta el informe Expresión de predicción, que contiene la ecuación para el modelo estimado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show Prediction Expression( 1 );

```

### Show Sqrt Variance Component

**Sintaxis:** obj << Show Sqrt Variance Component( state=0|1 )

**Descripción:** Muestra u oculta la columna Componente de varianza de sqrt en el informe Estimaciones de componentes de varianza por REML.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

### Show VIF

**Sintaxis:** obj << Show VIF( state=0|1 )

**Descripción:** Muestra u oculta los valores del factor de inflación de la varianza (VIF) en el informe Estimaciones de los parámetros.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

### Sorted Estimates

**Sintaxis:** obj << Sorted Estimates( state=0|1 )

**Descripción:** Muestra u oculta el informe Estimaciones de los parámetros ordenados, que puede ser útil en situaciones de cribado. Este informe contiene las estimaciones de los parámetros ordenados por el valor absoluto de la razón t de cada estimación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sorted Estimates( 1 );

```

### Std Error of Individual

**Sintaxis:** obj << Std Error of Individual

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene el error estándar de un valor predicho individual. Se utiliza para calcular el intervalo de confianza individual. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Individual;

```

### Std Error of Predicted

**Sintaxis:** obj << Std Error of Predicted

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene el error estándar de los valores predichos. Se utiliza para calcular el intervalo de confianza de la media. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Predicted;

```

### Std Error of Residual

**Sintaxis:** obj << Std Error of Residual

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene el error estándar de los valores residuales. Se utiliza para calcular los residuos estudentizados. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Residual;

```

### StdErr Pred Formula

**Sintaxis:** obj << StdErr Pred Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene la fórmula del error estándar de los valores predichos como función de los regresores. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << StdErr Pred Formula;

```

### Studentized Residuals

**Sintaxis:** obj << Studentized Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene el residuo estudentizado, que es el residuo dividido por su error estándar. Hold down the shift key to enter suffix.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Studentized Residuals;

```

### Summary of Fit

**Sintaxis:** obj << Summary of Fit( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene un resumen de los estadísticos de ajuste del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Summary of Fit( 0 ) )
);
Wait( 1 );
obj << Summary of Fit( 1 );

```

### Surface Profiler

**Sintaxis:** obj << Surface Profiler( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de superficie tridimensional de la superficie de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
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

**Sintaxis:** obj = Least Squares Personality(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Fit LogVariance > Response Fit LogVariance

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Pressure, :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << (:Pressure << Plot Actual By Predicted( 0 ));
Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );
Wait( 1 );
preset = obj << (1 << New Preset);
obj << (2 << Apply Preset( preset ));

```

### Automatic Recalc

**Sintaxis:** obj << Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
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

### Contour Profiler

**Sintaxis:** obj << Contour Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de contorno, que representa gráficamente los contornos de las respuestas de dos factores a la vez.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Data Table Window;

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
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
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
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
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

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
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

### Indiv Confidence Interval

**Sintaxis:** obj << Indiv Confidence Interval

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen límites de confianza para valores de respuesta individuales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Indiv Confidence Interval;

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

### Mean Confidence Interval

**Sintaxis:** obj << Mean Confidence Interval

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen los límites de un intervalo de confianza para la media de predicción.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Mean Confidence Interval;

```

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Model Dialog;

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
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Pressure, :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << (:Pressure << Plot Actual By Predicted( 0 ));
Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );
Wait( 1 );
preset = obj << (1 << New Preset);

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

### Plot Actual by Predicted

**Sintaxis:** obj << Plot Actual by Predicted( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de diagnóstico con los valores reales en el eje vertical y los valores predichos en el eje horizontal. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run( Plot Actual by Predicted( 0 ) )
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

### Plot Studentized Residual by Predicted

**Sintaxis:** obj << Plot Studentized Residual by Predicted( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de diagnóstico con los residuos estudentizados en el eje vertical y los valores predichos en el eje horizontal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Plot Studentized Residual by Predicted( 1 );

```

### Plot Studentized Residual by Row

**Sintaxis:** obj << Plot Studentized Residual by Row( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de diagnóstico con los residuos estudentizados en el eje vertical y el número de fila en el eje horizontal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Plot Studentized Residual by Row( 1 );

```

### Prediction Formula

**Sintaxis:** obj << Prediction Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La nueva columna contiene los valores predichos de la media, calculados por el modelo especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;

```

### Profiler

**Sintaxis:** obj << Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de predicción, que se utiliza para explorar gráficamente la ecuación de predicción seccionándola factor por factor. El perfilador de predicción contiene funciones de optimización.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
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
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Report View( "Summary" );

```

### Residuals

**Sintaxis:** obj << Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los residuos, que son los valores de respuesta observados menos los valores predichos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Residuals;

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
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

### Std Dev Formula

**Sintaxis:** obj << Std Dev Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La nueva columna contiene los valores predichos de la desviación estándar, calculados por el modelo especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Dev Formula;

```

### Std Error of Individual

**Sintaxis:** obj << Std Error of Individual

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los errores estándar de los valores predichos individuales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Error of Individual;

```

### Std Error of Predicted

**Sintaxis:** obj << Std Error of Predicted

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los errores estándar de los valores predichos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Error of Predicted;

```

### Studentized Residuals

**Sintaxis:** obj << Studentized Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. Los valores de la columna nueva son los residuos divididos por su error estándar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Studentized Residuals;

```

### Surface Profiler

**Sintaxis:** obj << Surface Profiler( state=0|1 )

**Descripción:** Muestra u oculta los gráficos de superficie interactivos para la respuesta y la desviación estándar de la respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Surface Profiler( 1 );

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
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
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

### Variance Formula

**Sintaxis:** obj << Variance Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La nueva columna contiene los valores predichos de la varianza, calculados por el modelo especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Variance Formula;

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

**Sintaxis:** obj = Prediction Formula(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Fit LogVariance

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

### Contour Profiler

**Sintaxis:** obj << Contour Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de contorno, que representa gráficamente los contornos de las respuestas de dos factores a la vez.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Data Table Window;

```

### Fit LogVariance

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Loglinear Variance" ) )

**Descripción:** Ajusta un modelo para la media y la varianza de una variable de respuesta continua. Puede especificar distintos conjuntos de efectos para los dos modelos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
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

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
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
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
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

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Model Dialog;

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

### Profiler

**Sintaxis:** obj << Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de predicción, que se utiliza para explorar gráficamente la ecuación de predicción seccionándola factor por factor. El perfilador de predicción contiene funciones de optimización.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Relaunch Analysis;

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
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
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
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
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

### Surface Profiler

**Sintaxis:** obj << Surface Profiler( state=0|1 )

**Descripción:** Muestra u oculta los gráficos de superficie interactivos para la respuesta y la desviación estándar de la respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Surface Profiler( 1 );

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
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
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

## Fit Manova > Effect

### Centroid Plot

**Sintaxis:** obj << (Response[i] << (Effect[j] << Centroid Plot( state=0|1 )))

**Descripción:** Muestra u oculta una tabla de valores centroides y un gráfico de centroides (medias de mínimos cuadrados multivariantes) en las dos primeras variables canónicas formadas a partir del espacio de prueba. Nota: El término de la constante del modelo se especifica como Efecto[0].

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

### Contrast

**Sintaxis:** obj << (Response[i] << (Effect[j] << Contrast( [ l1 l2 l3 ... ] )))

**Descripción:** Ejecuta una prueba F personalizada para los contrastes estadísticos de los niveles de tratamiento para un efecto en el modelo. Especifique los contrastes como argumento vectorial. Nota: El término de la constante del modelo se especifica como Efecto[0].

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[3] << Contrast( [0.5 0.5 -0.5 -0.5] )));

```

### Save Canonical Scores

**Sintaxis:** obj << (Response[i] << (Effect[j] << Save Cannonical Scores

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen las puntuaciones canónicas del efecto especificado. Nota: El término de la constante del modelo se especifica como Efecto[0].

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Save Canonical Scores));

```

### Test Details

**Sintaxis:** obj << (Response[i] << (Effect[j] << Test Details( state=0|1 )))

**Descripción:** Muestra u oculta detalles canónicos sobre la prueba para el efecto especificado. Nota: El término de la constante del modelo se especifica como Efecto[0].

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Test Details( 1 )));

```

## Fit Manova > Response

### Custom Test

**Sintaxis:** obj << (Response[i] << Custom Test( [ l1 l2 l3 ... ], <Label( name )> ))

**Descripción:** Ejecuta una prueba F personalizada que contrasta los distintos efectos del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ), Response Function( "Contrast" ) )
);
Wait( 0 );
obj << (Response[2] << Custom Test( [0 1 0 -1 0], Label( "Test 1" ) ));

```

### Effect

**Sintaxis:** obj << (Response[i] << (Effect[j] << effect options))

**Descripción:** Le permite enviar mensajes a un efecto específico dentro de una respuesta concreta en la ventana de informe. Para obtener más información sobre los mensajes que se pueden enviar a un efecto, seleccione Objetos > Ajuste del modelo > Ajuste por Manova > Efecto en el Índice de scripts. Nota: El término de la constante del modelo se especifica como Efecto[0].

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

## Fit Manova

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
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
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

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Data Table Window;

```

### Fit Manova

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Manova" ) )

**Descripción:** Ajusta un modelo que implica varias variables de respuesta continua. Algunas de las técnicas son análisis de la varianza multivariante, medidas repetidas, análisis discriminante y correlaciones canónicas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
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

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
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

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Model Dialog;

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
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Report View( "Summary" );

```

### Response Function

**Sintaxis:** obj << Response Function( matrix type, <Univariate Tests Also> )

**Descripción:** Especifica el tipo de matriz para la función de respuesta. Esta matriz es la matriz M, cuyas columnas definen un conjunto de variables de transformación para el análisis multivariante. El argumento opcional Pruebas univariantes también especifica que el informe incluya pruebas de medidas repetidas univariantes ajustadas y no ajustadas y pruebas multivariantes.

**Ejemplo básico**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Response Function( "Sum" );

```

**Incluir pruebas univariantes**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
Wait( 0 );
obj << Response Function( "Contrast", Univariate Tests Also );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Discrim

**Sintaxis:** obj << Save Discrim

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen las distancias de Mahalanobis, la probabilidad de la pertenencia en cada nivel del efecto y el nivel predicho con la probabilidad más alta. Esta opción solo está disponible cuando hay un efecto categórico presente en el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Fit Model(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Effects( :Species ),
	Personality( "Manova" ),
	Run
);
obj << Save Discrim;

```

### Save Predicted

**Sintaxis:** obj << Save Predicted

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen los valores predichos para cada respuesta del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Predicted;

```

### Save Residuals

**Sintaxis:** obj << Save Residuals

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen los residuos para cada respuesta del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Residuals;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
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

**Sintaxis:** obj = Fit Manova(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Fit Mixed

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

### Actual by Conditional Predicted Plot

**Sintaxis:** obj << Actual by Conditional Predicted Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de los valores reales frente a los valores predichos por el modelo, mientras se tienen en cuenta los efectos aleatorios. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Actual by Conditional Predicted Plot( 0 ) )
);
Wait( 1 );
obj << Actual by Conditional Predicted Plot( 1 );

```

### Actual by Predicted Plot

**Sintaxis:** obj << Actual by Predicted Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de los valores reales frente a los valores predichos por el modelo, sin tener en cuenta los efectos aleatorios. Esta opción solo está disponible cuando el modelo contiene al menos un efecto fijo. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Actual by Predicted Plot( 0 ) )
);
Wait( 1 );
obj << Actual by Predicted Plot( 1 );

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

### Between-Within Degrees of Freedom

**Sintaxis:** obj << Between-Within Degrees of Freedom( state=0|1)

**Descripción:** Replaces the standard errors with unadjusted estimates and degrees of freedom to between-within based throughout the report. To use between-within degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Run
);
Wait( 1 );
obj << "Between-Within Degrees of Freedom"n( 1 );

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

### Compare Slopes

**Sintaxis:** obj << Compare Slopes( Effect( effect ), <options> )

**Descripción:** Muestra u oculta un informe que permite comparar las pendientes de cada nivel del efecto de interacción en un modelo de análisis de covarianza (ANCOVA). Esta opción solo está disponible cuando hay un término nominal, un término continuo y su efecto de interacción para los efectos fijos.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = dt << Fit Model(
	Y( :Calories ),
	Effects( :Sugars, :Fiber Gr, :Sugars * :Fiber Gr ),
	Random Effects( :Manufacturer ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Sugars * :Fiber Gr ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

### Conditional Contour Profiler

**Sintaxis:** obj << Conditional Contour Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador de contorno de la respuesta condicional gráficamente para dos factores a la vez. Esta opción solo está disponible cuando el modelo contiene al menos dos efectos continuos y al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Contour Profiler( 1 );

```

### Conditional Mean CI

**Sintaxis:** obj << Conditional Mean CI

**Descripción:** Guarda dos nuevas columnas en la tabla de datos. Las nuevas columnas contienen los límites de confianza inferior y superior para el valor esperado de la predicción condicional. Los intervalos de confianza incluyen estimaciones de efectos aleatorios para los modelos que contienen efectos aleatorios. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Mean CI;

```

### Conditional Mixture Profiler

**Sintaxis:** obj << Conditional Mixture Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador de mezclas que muestra los contornos de la respuesta condicional en un gráfico ternario. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio y si el atributo Efecto de mezcla se aplica a tres o más factores del modelo o la propiedad Mezcla se aplica a tres o más columnas de factores.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Mixture Profiler( 1 );

```

### Conditional Prediction Formula

**Sintaxis:** obj << Conditional Prediction Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene la fórmula de predicción de la media condicional. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Prediction Formula;

```

### Conditional Predictions

**Sintaxis:** obj << Conditional Predictions

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los valores predichos para la media condicional. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Predictions;

```

### Conditional Profiler

**Sintaxis:** obj << Conditional Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de predicción, que se utiliza para explorar gráficamente la ecuación de predicción condicional seccionándola factor por factor. El perfilador de predicción contiene funciones de optimización. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Profiler( 1 );

```

### Conditional Residual Plots

**Sintaxis:** obj << Conditional Residual Plots( state=0|1 )

**Descripción:** Muestra u oculta los gráficos de residuos que evalúan el ajuste del modelo, mientras se tienen en cuenta los efectos aleatorios. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Residual Plots( 1 );

```

### Conditional Residuals

**Sintaxis:** obj << Conditional Residuals

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene una fórmula para los residuos condicionales, expresada en forma de los valores de respuesta observados menos la fórmula de predicción.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Residuals;

```

### Conditional Surface Profiler

**Sintaxis:** obj << Conditional Surface Profiler( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de superficie tridimensional de la respuesta condicional. Esta opción solo está disponible cuando el modelo contiene al menos dos efectos y al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Surface Profiler( 1 );

```

### Containment Degrees of Freedom

**Sintaxis:** obj << Containment Degrees of Freedom( state=0|1 )

**Descripción:** Replaces the standard errors with unadjusted estimates and degrees of freedom to containment-based throughout the report. To use containment degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Tests( 0 ) )
);
Wait( 1 );
obj << Containment Degrees of Freedom( 1 );

```

### Contour Profiler

**Sintaxis:** obj << Contour Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador de contorno de la respuesta marginal gráficamente para dos factores a la vez. Esta opción solo está disponible cuando el modelo contiene al menos dos efectos fijos continuos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Copy Script;

```

### Correlation of Fixed Effects

**Sintaxis:** obj << Correlation of Fixed Effects( state=0|1 )

**Descripción:** Muestra u oculta la matriz de correlación de los efectos fijos del modelo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Correlation of Fixed Effects( 1 );

```

### Covariance of All Parameters

**Sintaxis:** obj << Covariance of All Parameters( state=0|1 )

**Descripción:** Muestra u oculta la matriz de covarianza de todos los efectos del modelo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of All Parameters( 1 );

```

### Covariance of Covariance Parameters

**Sintaxis:** obj << Covariance of Covariance Parameters( state=0|1 )

**Descripción:** Muestra u oculta la matriz de covarianza de los efectos aleatorios del modelo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of Covariance Parameters( 1 );

```

### Covariance of Fixed Effects

**Sintaxis:** obj << Covariance of Fixed Effects( state=0|1 )

**Descripción:** Muestra u oculta la matriz de covarianza de los efectos fijos del modelo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of Fixed Effects( 1 );

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Data Table Window;

```

### Dispose Reports

**Sintaxis:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que no se muestra ningún informe de modelo individual y que se han eliminado de la memoria tras el ajuste. Cuando hay muchos miles de respuestas, esta opción reduce el tiempo de cálculo y ahorra espacio en la memoria. Utilícela con la opción Resultados en tablas de datos para recopilar los resultados de los modelos ajustados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

### Empirical Standard Errors

**Sintaxis:** obj << Empirical Standard Errors( state=0|1 )

**Descripción:** Reemplaza los errores estándar por estimaciones de tipo sándwich en todo el informe. Para utilizar estimaciones de tipo sándwich en un informe de comparaciones múltiples, es necesario seleccionar esta opción antes de agregar un informe de comparaciones múltiples.

**JMP Versión agregada:** 19

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Empirical Standard Errors( 1 );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run( Empirical Standard Errors( 1 ) )
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :species ),
	Comparisons with Control( 1, Control Level( "species:COYOTE" ) )
);

```

### Fit Mixed

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Mixed Model" ) )

**Descripción:** Ajusta un modelo mixto lineal para una variedad de estructuras de covarianza complejas usando la REML. Estos modelos pueden utilizarse para coeficientes aleatorios, medidas repetidas, parcelas divididas, datos espaciales y datos con varias respuestas correlacionadas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);

```

### Fit Statistics

**Sintaxis:** obj << Fit Statistics( state=0|1 )

**Descripción:** Muestra u oculta un informe para los estadísticos de ajuste del modelo. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fit Statistics( 0 ) )
);
Wait( 1 );
obj << Fit Statistics( 1 );

```

### Fixed Effects Parameter Estimates

**Sintaxis:** obj << Fixed Effects Parameter Estimates( state=0|1 )

**Descripción:** Muestra u oculta una tabla de estimaciones de parámetros de efectos fijos. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Fixed Effects Parameter Estimates( 1 );

```

### Fixed Effects Tests

**Sintaxis:** obj << Fixed Effects Tests( state=0|1 )

**Descripción:** Muestra u oculta las pruebas de efectos fijos. Esta opción solo está disponible cuando el modelo contiene al menos un efecto fijo. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Tests( 0 ) )
);
Wait( 1 );
obj << Fixed Effects Tests( 1 );

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
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
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
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
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
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
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

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
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

### Homogeneity of Variance Test

**Sintaxis:** obj << Homogeneity of Variance Test( state=0|1 )

**Descripción:** Calcula una prueba de homogeneidad de varianza a través de la variable de agrupación especificada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Repeated Effects( :Tenderizer ),
	Repeated Structure( "Unequal Variances" ),
	Run
);
Wait( 1 );
obj << Homogeneity of Variance Test( 1 );

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

### Indiv Confidence Interval

**Sintaxis:** obj << Indiv Confidence Interval

**Descripción:** Guarda dos nuevas columnas en la tabla de datos. Las columnas nuevas contienen límites de confianza para valores de respuesta individuales.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Indiv Confidence Interval;

```

### Inverse Prediction

**Sintaxis:** obj << Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Descripción:** Genera un valor X predicho y un intervalo de confianza basado en los valores especificados de Y y todos los demás factores.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 75 ), Term Value( Moisture( . ), Variety( All ) ) );

```

### Linear Combination of Variance Components

**Sintaxis:** obj << Linear Combination of Variance Components( [l1, l2, l3, ... ], <Label( text )> )

**Descripción:** Muestra un informe que permite calcular intervalos de confianza para combinaciones lineales de componentes de varianza. Esta opción solo está disponible cuando hay efectos en el lado G.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects,
	Random Effects( :Operator, :Instrument[:Operator], :Part[:Operator, :Instrument] ),
	NoBounds( 0 ),
	Personality( "Mixed Model" ),
	Run(
		Repeated Effects Covariance Parameter Estimates( 0 ),
		Linear Combination of Variance Components( [1 1 0 1], Label( " " ) )
	)
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

### Mean Confidence Interval

**Sintaxis:** obj << Mean Confidence Interval

**Descripción:** Guarda dos nuevas columnas en la tabla de datos. Las columnas nuevas contienen los límites de confianza inferior y superior de la respuesta media.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Mean Confidence Interval;

```

### Mixture Profiler

**Sintaxis:** obj << Mixture Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador de mezclas que muestra los contornos de la respuesta marginal en un gráfico ternario. Esta opción solo está disponible si el atributo Efecto de mezcla se aplica a tres o más factores del modelo o la propiedad Mezcla se aplica a tres o más columnas de factores.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
obj << Model Dialog;

```

### Multiple Comparisons

**Sintaxis:** obj << Multiple Comparisons( Effect( effect ), <options> )

**Descripción:** Genera estimaciones de las medias de mínimos cuadrados o estimaciones definidas por el usuario. Estas estimaciones permiten al usuario realizar comparaciones con la media global, comparaciones con un control o comparaciones por pares. Esta opción solo está disponible cuando el modelo contiene al menos un efecto fijo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n,
		:Month * :"AM/PM"n, :Treatment * :Month * :"AM/PM"n
	),
	Random Effects( :Patient[:Treatment] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Treatment ),
	Comparisons with Control( 1, Control Level( "Treatment:Control" ) )
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

### Prediction Formula

**Sintaxis:** obj << Prediction Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene la fórmula de predicción de la media marginal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Prediction Formula;

```

### Prediction and Interval Formulas

**Sintaxis:** obj << Prediction and Interval Formulas

**Descripción:** Guarda las columnas nuevas en la tabla de datos. Las columnas contienen fórmulas para las predicciones y los límites de confianza. Las columnas de límites que se crean con esta opción contienen propiedades que utiliza el Perfilador de predicción.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Prediction and Interval Formulas;
Wait( 1 );
Profiler( Y( :Pred Formula Yield 2 ) );

```

### Predictions

**Sintaxis:** obj << Predictions

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los valores predichos para la media marginal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Predictions;

```

### Profiler

**Sintaxis:** obj << Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de predicción, que se utiliza para explorar gráficamente la ecuación de predicción marginal seccionándola factor por factor. El perfilador de predicción contiene funciones de optimización. Esta opción solo está disponible cuando el modelo contiene al menos un efecto fijo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

### Random Coefficients

**Sintaxis:** obj << Random Coefficients( state=0|1 )

**Descripción:** Muestra u oculta un informe de las estimaciones de los coeficientes aleatorios. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Random Coefficients( 0 ) )
);
Wait( 1 );
obj << Random Coefficients( 1 );

```

### Random Effects Covariance Parameter Estimates

**Sintaxis:** obj << Random Effects Covariance Parameter Estimates( state=0|1 )

**Descripción:** Muestra u oculta una tabla de estimaciones de parámetros de covarianza de efectos aleatorios. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Random Effects Covariance Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Random Effects Covariance Parameter Estimates( 1 );

```

### Random Effects Predictions

**Sintaxis:** obj << Random Effects Predictions( state=0|1 )

**Descripción:** Muestra u oculta una tabla de predicciones de efectos aleatorios. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Random Effects Predictions( 1 );

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
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

### Repeated Effects Covariance Parameter Estimates

**Sintaxis:** obj << Repeated Effects Covariance Parameter Estimates( state=0|1 )

**Descripción:** Muestra u oculta una tabla de estimaciones de parámetros de covarianza de efectos repetidos. Esta opción solo está disponible cuando el modelo contiene al menos un efecto repetido. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n,
		:Month * :"AM/PM"n, :Treatment * :Month * :"AM/PM"n
	),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Personality( "Mixed Model" ),
	Run( Repeated Effects Covariance Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Repeated Effects Covariance Parameter Estimates( 1 );

```

### Repeated Measures Covariance Diagnostics

**Sintaxis:** obj << Repeated Measures Covariance Diagnostics( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene herramientas de diagnóstico para ayudar a determinar las estructuras de covarianza candidatas para el análisis de medidas repetidas. Esta opción solo está disponible para los modelos que especifiquen una estructura de covarianza repetida no estructurada.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Run
);
Wait( 1 );
obj << Repeated Measures Covariance Diagnostics( 1 );

```

### Report

**Sintaxis:** obj << Report;

Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
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
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Report View( "Summary" );

```

### Residual Plots

**Sintaxis:** obj << Residual Plots( state=0|1 )

**Descripción:** Muestra u oculta los gráficos de residuos que evalúan el ajuste del modelo, sin tener en cuenta los efectos aleatorios. Esta opción solo está disponible cuando el modelo contiene al menos un efecto fijo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Residual Plots( 1 );

```

### Residuals

**Sintaxis:** obj << Residuals

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los residuos, que son los valores de respuesta observados menos los valores predichos de la media marginal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Residuals;

```

### Results in Data Tables

**Sintaxis:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Guarda los resultados del modelo individual de muchas respuestas en tablas de datos. El contenido y el número de tablas de datos de salida dependen del modelo que se esté ajustando.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Run
);

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Script Window;

```

### Save Simulation Formula

**Sintaxis:** obj << Save Simulation Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva se puede utilizar para crear valores de respuesta aleatorios a partir del modelo ajustado. Puede utilizar la columna de fórmulas con la función Simular de JMP Pro. Esta opción no está disponible si se utiliza una variable Por. Utilice tablas de datos de subconjuntos si necesita fórmulas de simulación por grupos.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Save Simulation Formula;

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

### Sequential Tests

**Sintaxis:** obj << Sequential Tests( state=0|1 )

**Descripción:** Muestra u oculta el informe Pruebas secuenciales (tipo 1) que contiene las sumas de cuadrados a medida que se añaden efectos al modelo secuencialmente. Esta opción solo está disponible cuando el modelo contiene al menos un efecto fijo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

### Show Sqrt Variance Component

**Sintaxis:** obj << Show Sqrt Variance Component( state=0|1 )

**Descripción:** Muestra u oculta la columna Componente de varianza de sqrt en el informe Estimaciones de componentes de varianza por REML.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

### Show VIF

**Sintaxis:** obj << Show VIF( state=0|1 )

**Descripción:** Muestra u oculta los valores del factor de inflación de la varianza (VIF) en la pestaña Codificación de los efectos del informe Estimaciones de los parámetros de efectos fijos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

### Stability Analysis

**Sintaxis:** obj << Stability Analysis

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );
obj = dt << Fit Model(
	Y( :"Concentration (mg/Kg)"n ),
	Effects( :Time ),
	Random Effects( :Batch Number, :Batch Number * :Time ),
	NoBounds( 0 ),
	Personality( "Mixed Model" ),
	Run( Repeated Effects Covariance Parameter Estimates( 0 ) )
);
obj << Stability Analysis( Quantile( 0.1 ), Lower Spec Limit( 99 ) );

```

### Standard Error of Conditional Predicted

**Sintaxis:** obj << Standard Error of Conditional Predicted

**Descripción:** Guarda una columna nueva en la tabla de datos. La columna nueva contiene los errores estándar de las predicciones condicionales de la media. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Standard Error of Conditional Predicted;

```

### Standard Error of Predicted

**Sintaxis:** obj << Standard Error of Predicted

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los errores estándar de las predicciones marginales de la media.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Standard Error of Predicted;

```

### Suppress Reports

**Sintaxis:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que se han ocultado los informes de modelos individuales. Cuando hay miles de respuestas, esta opción reduce el tiempo de cálculo. Los objetos de ajuste y algunos elementos de menú siguen estando disponibles. Utilice la opción Resultados en tablas de datos para recopilar los resultados de los informes de modelos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

### Surface Profiler

**Sintaxis:** obj << Surface Profiler( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de superficie tridimensional de la respuesta marginal. Esta opción solo está disponible cuando el modelo contiene al menos dos efectos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

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
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
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

### Variogram

**Sintaxis:** obj << Variogram( <X( columns )>, <Model 1, Model 2, ...> )

**Descripción:** Muestra u oculta un gráfico de variograma que muestra el cambio en la covarianza a medida que aumenta la distancia entre las observaciones. Cuando se selecciona la estructura Residual, se pueden seleccionar las columnas que se utilizarán como coordenadas temporales o espaciales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
obj = dt << Fit Model(
	Y( :Ozone Concentration ),
	Effects,
	Center Polynomials( 0 ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Variogram( X( :month ), Exponential, Exponential with Nugget );

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

**Sintaxis:** obj = Fit Mixed(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Fit Nominal Logistic

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
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
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

### Confidence Intervals

**Sintaxis:** obj << Confidence Intervals( <state=0|1> | <fraction> )

**Descripción:** Muestra u oculta los intervalos de confianza (1 - fracción) % de la verosimilitud del perfil para los parámetros del modelo. El argumento de fracción anula el nivel de alfa establecido al iniciar la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Confidence Intervals( 0.01 );
Wait( 1 );
obj << Confidence Intervals( 0 );

```

### Confusion Matrix

**Sintaxis:** obj << Confusion Matrix( state=0|1 )

**Descripción:** Muestra u oculta una matriz de tabulación cruzada de las respuestas observadas y predichas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Confusion Matrix( 1 );

```

### Contour Profiler

**Sintaxis:** obj << Contour Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de contorno, que representa gráficamente los contornos de las respuestas de dos factores a la vez. Solo está disponible cuando el modelo contiene más de un factor continuo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Fit Model(
	Y( :Species ),
	Effects(
		:Sepal length, :Sepal width, :Petal length, :Petal width,
		:Sepal length * :Petal width, :Petal width * :Petal width
	),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Data Table Window;

```

### Decision Threshold

**Sintaxis:** obj << Decision Threshold( state = 0|1, Set Probability Threshold( number=0.5 ) )

**Descripción:** Muestra u oculta la distribución de probabilidades ajustadas y tablas observadas frente a predichas para cada modelo. Puede cambiar el umbral de probabilidad para explorar cómo afectan los distintos umbrales a los resultados de clasificación.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Decision Threshold( 1, Set Probability Threshold( 0.33 ) );

```

### Dispose Reports

**Sintaxis:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que no se muestra ningún informe de modelo individual y que se han eliminado de la memoria tras el ajuste. Cuando hay muchos miles de respuestas, esta opción reduce el tiempo de cálculo y ahorra espacio en la memoria. Utilícela con la opción Resultados en tablas de datos para recopilar los resultados de los modelos ajustados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

### Effect Summary

**Sintaxis:** obj << Effect Summary( state=0|1 )

**Descripción:** Muestra u oculta el informe Resumen de efectos, que permite actualizar interactivamente los efectos del modelo. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

### FDR

**Sintaxis:** obj << FDR( state=0|1 )

**Descripción:** Especifica si se ajustan o no los valores de log utilidad y sus valores p correspondientes de la tabla Resumen de efectos utilizando la tasa de falsos descubrimientos (FDR).

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

### Fit Nominal Logistic

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Nominal Logistic" ) )

**Descripción:** Ajusta un modelo de regresión logística de categorías de respuesta nominales para los predictores continuos y categóricos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Confusion Matrix Test

**Sintaxis:** obj << Get Confusion Matrix Test

**Descripción:** Devuelve la matriz de confusión para el conjunto de prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :BAD ),
	Effects(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Test;

```

### Get Confusion Matrix Training

**Sintaxis:** obj << Get Confusion Matrix Training

**Descripción:** Devuelve la matriz de confusión para el conjunto de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Training;

```

### Get Confusion Matrix Validation

**Sintaxis:** obj << Get Confusion Matrix Validation

**Descripción:** Devuelve la matriz de confusión para el conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Validation;

```

### Get Confusion Rates Test

**Sintaxis:** obj << Get Confusion Rates Test

**Descripción:** Devuelve las tasas de confusión para el conjunto de prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :BAD ),
	Effects(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Test;

```

### Get Confusion Rates Training

**Sintaxis:** obj << Get Confusion Rates Training

**Descripción:** Devuelve las tasas de confusión para el conjunto de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Training;

```

### Get Confusion Rates Validation

**Sintaxis:** obj << Get Confusion Rates Validation

**Descripción:** Devuelve las tasas de confusión para el conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Validation;

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
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

### Get MM SAS DATA Step

**Sintaxis:** obj << Get MM SAS DATA Step

**Descripción:** Crea un código SAS que puede registrar en el Gestor de modelos SAS.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

### Get Measures

**Sintaxis:** obj << Get Measures

**Descripción:** Devuelve medidas de ajuste de resumen del modelo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Get Measures;

```

### Get Probability Formulas

**Sintaxis:** obj << Get Probability Formulas

**Descripción:** Devuelve un script para crear fórmulas de probabilidad.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Get Probability Formulas;

```

### Get SAS DATA Step

**Sintaxis:** obj << Get SAS DATA Step

**Descripción:** Crea un código SAS que puede utilizar para asignar una puntuación un nuevo conjunto de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
code = obj << Get SAS Data Step;

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
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

### Indicator Parameterization Estimates

**Sintaxis:** obj << Indicator Parameterization Estimates( state=0|1 )

**Descripción:** Muestra u oculta el informe Parametrización de la función indicadora. Este informe contiene estimaciones de parámetros para el modelo en el que las columnas nominales se codifican utilizando la parametrización de indicadores (SAS GLM) y se tratan como continuas.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Detergent.jmp" );
obj = dt << Fit Model(
	Freq( :count ),
	Y( :brand ),
	Effects( :softness, :previous use, :temperature ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Indicator Parameterization Estimates( 1 );

```

### Inverse Prediction

**Sintaxis:** obj << Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Descripción:** Genera un valor X predicho y un intervalo de confianza basado en los valores especificados de Y y todos los demás factores.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Inverse Prediction( Response( 0.5, 0.75, 0.9 ) );

```

### Lift Curve

**Sintaxis:** obj << Lift Curve( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Curva Lift. Una curva lift representa la elevación frente a la porción de las observaciones y proporciona otra visión de la capacidad de predicción de un modelo. Si ha utilizado la validación, se muestra un gráfico para cada uno de los conjuntos, de entrenamiento, validación y prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Lift Curve( 1 );

```

### Likelihood Ratio Tests

**Sintaxis:** obj << Likelihood Ratio Tests( state=0|1 )

**Descripción:** Muestra u oculta las pruebas de la razón de verosimilitud para cada efecto. Cada prueba compara la log-verosimilitud del modelo ajustado con la log-verosimilitud del modelo que quita un efecto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Likelihood Ratio Test( 1 );

```

### Line Color

**Sintaxis:** obj << Line Color( color )

**Descripción:** Le permite seleccionar el color de las curvas del gráfico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Line Color( "Magenta" );

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

### Logistic Plot

**Sintaxis:** obj << Logistic Plot( state=0|1 )

**Descripción:** Muestra u oculta el informe Gráfico logístico. Solo está disponible si el modelo consta de un único efecto continuo. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Logistic Plot( 0 );
Wait( 1 );
obj << Logistic Plot( 1 );

```

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Model Dialog;

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

### Odds Ratios

**Sintaxis:** obj << Odds Ratios( state=0|1 )

**Descripción:** Muestra u oculta un informe de razones de posibilidades que contiene Razones de posibilidades unitarias y Razones de posibilidades por rango. No está disponible para respuestas nominales con más de dos niveles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Odds Ratios( 1 );

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

### Positive Level

**Sintaxis:** obj << Positive Level

**Descripción:** Establece el nivel identificado como positivo para su uso en las curvas ROC.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
obj << ROC Curve( 1 );

```

### Precision Recall Curve

**Sintaxis:** obj << Precision Recall Curve( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Curva de Precisión-Recuperación, que contiene una curva para cada nivel de la variable de respuesta. Una curva de precisión-recuperación representa los valores de precisión frente a los valores de recuperación a distintos umbrales. Si ha utilizado la validación, se muestra un gráfico para cada conjunto de entrenamiento, validación y prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
Wait( 0 );
obj << Precision Recall Curve( 1 );

```

### Profiler

**Sintaxis:** obj << Profiler( state=0|1 )

**Descripción:** Muestra u oculta el Perfilador de predicción, que muestra los valores ajustados para una probabilidad de respuesta especificada a medida que se cambian los valores de los factores del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

### Publish Probability Formulas

**Sintaxis:** obj << Publish Probability Formulas

**Descripción:** Construye fórmulas de probabilidad y las publica como un script de columna de fórmula en el almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Publish Probability Formulas;

```

### ROC Curve

**Sintaxis:** obj << ROC Curve( state=0|1 )

**Descripción:** Muestra u oculta la curva Característica operativa del receptor (ROC) de cada nivel de la variable de respuesta. La curva ROC es un gráfico de sensibilidad frente a (1 - especificidad). Si ha utilizado la validación, se muestra un gráfico para cada conjunto de entrenamiento, validación y prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
Wait( 0 );
obj << ROC Curve( 1 );

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Report View( "Summary" );

```

### Results in Data Tables

**Sintaxis:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Guarda los resultados del modelo individual de muchas respuestas en tablas de datos. El contenido y el número de tablas de datos de salida dependen del modelo que se esté ajustando.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Probability Formula

**Sintaxis:** obj << Save Probability Formula

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen fórmulas para combinaciones lineales de los niveles de respuesta, fórmulas de predicción para los niveles de respuesta y una fórmula de predicción que da la respuesta más probable.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Probability Formula;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
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

### Show Points

**Sintaxis:** obj << Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos del gráfico logístico. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Show Points( 0 );

```

### Show Rate Curve

**Sintaxis:** obj << Show Rate Curve( state=0|1 )

**Descripción:** Muestra u oculta la curva de tasa en el gráfico logístico. La curva de tasa solo es útil si tiene varios puntos para cada valor de la variable X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Show Rate Curve( 1 );

```

### Specify Profit Matrix

**Sintaxis:** obj << Specify Profit Matrix( matrix, level1, level2, ... )

**Descripción:** Le permite especificar los beneficios o costes asociados a decisiones de clasificación correctas o incorrectas.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y Binary ),
	Effects( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Specify Profit Matrix( [0 -1, -1 0, . .], "High", "Low", "Undecided" );

```

### Suppress Reports

**Sintaxis:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que se han ocultado los informes de modelos individuales. Cuando hay miles de respuestas, esta opción reduce el tiempo de cálculo. Los objetos de ajuste y algunos elementos de menú siguen estando disponibles. Utilice la opción Resultados en tablas de datos para recopilar los resultados de los informes de modelos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
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
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
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

### View Web XML

**Sintaxis:** obj << View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Wald Tests

**Sintaxis:** obj << Wald Tests( state=0|1 )

**Descripción:** Muestra u oculta los estadísticos de la prueba de ji cuadrado y los valores p de las pruebas de Wald que determina si cada parámetro es cero.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Wald Tests( 1 );

```

### Window View

**Sintaxis:** obj = Fit Nominal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Fit Ordinal Logistic

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
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
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

### Confidence Intervals

**Sintaxis:** obj << Confidence Intervals( <state=0|1> | <fraction> )

**Descripción:** Muestra u oculta los intervalos de confianza (1 - fracción) % de la verosimilitud del perfil para los parámetros del modelo. El argumento de fracción anula el nivel de alfa establecido al iniciar la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Confidence Intervals( 0.01 );
Wait( 1 );
obj << Confidence Intervals( 0 );

```

### Confusion Matrix

**Sintaxis:** obj << Confusion Matrix( state=0|1 )

**Descripción:** Muestra u oculta una matriz de tabulación cruzada de las respuestas observadas y predichas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Confusion Matrix( 1 );

```

### Contour Profiler

**Sintaxis:** obj << Contour Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de contorno, que representa gráficamente los contornos de las respuestas de dos factores a la vez. Solo está disponible cuando el modelo contiene más de un factor continuo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Job Satisfaction ),
	Effects(
		:Years at Current Employer, :Salary, :Single Status, :Age in Years,
		:Age in Years * :Years at Current Employer
	),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Data Table Window;

```

### Dispose Reports

**Sintaxis:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que no se muestra ningún informe de modelo individual y que se han eliminado de la memoria tras el ajuste. Cuando hay muchos miles de respuestas, esta opción reduce el tiempo de cálculo y ahorra espacio en la memoria. Utilícela con la opción Resultados en tablas de datos para recopilar los resultados de los modelos ajustados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

### Effect Summary

**Sintaxis:** obj << Effect Summary( state=0|1 )

**Descripción:** Muestra u oculta el informe Resumen de efectos, que permite actualizar interactivamente los efectos del modelo. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

### FDR

**Sintaxis:** obj << FDR( state=0|1 )

**Descripción:** Especifica si se ajustan o no los valores de log utilidad y sus valores p correspondientes de la tabla Resumen de efectos utilizando la tasa de falsos descubrimientos (FDR).

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

### Fit Ordinal Logistic

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Ordinal Logistic" ) )

**Descripción:** Ajusta un modelo de regresión logística de categorías de respuesta ordinales para los predictores continuos y categóricos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Confusion Matrix Test

**Sintaxis:** obj << Get Confusion Matrix Test

**Descripción:** Devuelve la matriz de confusión para el conjunto de prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Fit Model(
	Validation( :Validation 2 ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Test;

```

### Get Confusion Matrix Training

**Sintaxis:** obj << Get Confusion Matrix Training

**Descripción:** Devuelve la matriz de confusión para el conjunto de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Training;

```

### Get Confusion Matrix Validation

**Sintaxis:** obj << Get Confusion Matrix Validation

**Descripción:** Devuelve la matriz de confusión para el conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Validation;

```

### Get Confusion Rates Test

**Sintaxis:** obj << Get Confusion Rates Test

**Descripción:** Devuelve las tasas de confusión para el conjunto de prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Fit Model(
	Validation( :Validation 2 ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Test;

```

### Get Confusion Rates Training

**Sintaxis:** obj << Get Confusion Rates Training

**Descripción:** Devuelve las tasas de confusión para el conjunto de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Training;

```

### Get Confusion Rates Validation

**Sintaxis:** obj << Get Confusion Rates Validation

**Descripción:** Devuelve las tasas de confusión para el conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Validation;

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
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

### Get MM SAS DATA Step

**Sintaxis:** obj << Get MM SAS DATA Step

**Descripción:** Crea un código SAS que puede registrar en el Gestor de modelos SAS.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

### Get Measures

**Sintaxis:** obj << Get Measures

**Descripción:** Devuelve medidas de ajuste de resumen del modelo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Get Measures;

```

### Get Probability Formulas

**Sintaxis:** obj << Get Probability Formulas

**Descripción:** Devuelve un script para crear fórmulas de probabilidad.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Get Probability Formulas;

```

### Get SAS DATA Step

**Sintaxis:** obj << Get SAS DATA Step

**Descripción:** Crea un código SAS que puede utilizar para asignar una puntuación un nuevo conjunto de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
code = obj << Get SAS Data Step;

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
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

### Lift Curve

**Sintaxis:** obj << Lift Curve( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Curva Lift. Una curva lift representa la elevación frente a la porción de las observaciones y proporciona otra visión de la capacidad de predicción de un modelo. Si ha utilizado la validación, se muestra un gráfico para cada uno de los conjuntos, de entrenamiento, validación y prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Lift Curve( 1 );

```

### Likelihood Ratio Tests

**Sintaxis:** obj << Likelihood Ratio Tests( state=0|1 )

**Descripción:** Muestra u oculta las pruebas de la razón de verosimilitud para cada efecto. Cada prueba compara la log-verosimilitud del modelo ajustado con la log-verosimilitud del modelo que quita un efecto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Likelihood Ratio Tests( 1 );

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

### Logistic Plot

**Sintaxis:** obj << Logistic Plot( state=0|1 )

**Descripción:** Muestra u oculta el informe Gráfico logístico. Solo está disponible si el modelo consta de un único efecto continuo. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Logistic Plot( 0 );
Wait( 1 );
obj << Logistic Plot( 1 );

```

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Model Dialog;

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

### Odds Ratios

**Sintaxis:** obj << Odds Ratios( state=0|1 )

**Descripción:** Muestra u oculta un informe de razones de posibilidades que contiene Razones de posibilidades unitarias y Razones de posibilidades por rango.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Odds Ratios( 1 );

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

### Precision Recall Curve

**Sintaxis:** obj << Precision Recall Curve( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Curva de Precisión-Recuperación, que contiene una curva para cada nivel de la variable de respuesta. Una curva de precisión-recuperación representa los valores de precisión frente a los valores de recuperación a distintos umbrales. Si ha utilizado la validación, se muestra un gráfico para cada conjunto de entrenamiento, validación y prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Precision Recall Curve( 1 );

```

### Profiler

**Sintaxis:** obj << Profiler( state=0|1 )

**Descripción:** Muestra u oculta el Perfilador de predicción, que muestra los valores ajustados para una probabilidad de respuesta especificada a medida que se cambian los valores de los factores del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

### Publish Probability Formulas

**Sintaxis:** obj << Publish Probability Formulas

**Descripción:** Construye fórmulas de probabilidad y las publica como un script de columna de fórmula en el almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Publish Probability Formulas;

```

### ROC Curve

**Sintaxis:** obj << ROC Curve( state=0|1 )

**Descripción:** Muestra u oculta la curva Característica operativa del receptor (ROC) de cada nivel de la variable de respuesta. La curva ROC es un gráfico de sensibilidad frente a (1 - especificidad). Si ha utilizado la validación, se muestra un gráfico para cada conjunto de entrenamiento, validación y prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << ROC Curve( 1 );

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Report View( "Summary" );

```

### Results in Data Tables

**Sintaxis:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Guarda los resultados del modelo individual de muchas respuestas en tablas de datos. El contenido y el número de tablas de datos de salida dependen del modelo que se esté ajustando.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Expected Value

**Sintaxis:** obj << Save Expected Value

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene la combinación lineal de los valores de respuesta con las probabilidades de respuesta ajustadas para cada fila y da el valor esperado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Expected Value;

```

### Save Probability Formula

**Sintaxis:** obj << Save Probability Formula

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las columnas nuevas contienen fórmulas para combinaciones lineales de los niveles de respuesta, fórmulas de predicción para los niveles de respuesta y una fórmula de predicción que da la respuesta más probable.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Probability Formula;

```

### Save Quantiles

**Sintaxis:** obj << Save Quantiles

**Descripción:** Guarda columnas nuevas en la tabla de datos. Las columnas nuevas se denominan OrdQ.05, OrdQ.50 y OrdQ.95, y contienen valores que se ajustan a los cuantiles de las probabilidades correspondientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Quantiles;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
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

### Suppress Reports

**Sintaxis:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que se han ocultado los informes de modelos individuales. Cuando hay miles de respuestas, esta opción reduce el tiempo de cálculo. Los objetos de ajuste y algunos elementos de menú siguen estando disponibles. Utilice la opción Resultados en tablas de datos para recopilar los resultados de los informes de modelos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
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
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
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

### View Web XML

**Sintaxis:** obj << View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Wald Tests

**Sintaxis:** obj << Wald Tests( state=0|1 )

**Descripción:** Muestra u oculta los estadísticos de la prueba de ji cuadrado y los valores p de las pruebas de Wald que determina si cada parámetro es cero.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Wald Tests( 1 );

```

### Window View

**Sintaxis:** obj = Fit Ordinal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Fit Parametric Survival

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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
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

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Copy Script;

```

### Correlation of Estimates

**Sintaxis:** obj << Correlation of Estimates( state=0|1 )

**Descripción:** Muestra u oculta la matriz de correlaciones entre las estimaciones de los parámetros para el ajuste especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Correlation of Estimates( 1 );

```

### Covariance of Estimates

**Sintaxis:** obj << Covariance of Estimates( state=0|1 )

**Descripción:** Muestra u oculta la matriz de covarianzas entre las estimaciones de los parámetros para el ajuste especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Covariance of Estimates( 1 );

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Data Table Window;

```

### Distribution

**Sintaxis:** obj = Fit Model(...Distribution("Weibull"|"Lognormal"|"Exponential"|"Frechet"|"Loglogistic"|"All Distributions"|"SEV"|"Normal"|"LEV"|"Logistic"...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica la distribución que se utilizará en el modelado de la respuesta Tiempo hasta suceso. La opción "Todas las distribuciones" ajusta todas las distribuciones disponibles.

**Distribución única**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Lognormal" ),
	Censor( :censor ),
	Run Model
);

```

**Todas las distribuciones**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "All Distributions" ),
	Censor( :censor ),
	Run Model
);

```

### Distribution Plot by Level Combinations

**Sintaxis:** obj << Distribution Plot by Level Combinations( state=0|1 )

**Descripción:** Muestra u oculta un informe que compara tres modelos anidados en función de los niveles de la variable X. Este informe contiene tres gráficos de probabilidad para evaluar el ajuste del modelo. Los gráficos muestran líneas diferentes para cada combinación de los niveles X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/reliability/Devalt.jmp" );
dt << Fit Model(
	Censor( :Censor ),
	Censor Code( "1" ),
	Freq( :Weight ),
	Y( :Hours ),
	Effects( :x ),
	Personality( "Parametric Survival" ),
	Distribution( "Lognormal" ),
	Run( Likelihood Ratio Tests( 1 ), Distribution Plot by Level Combinations( 1 ), )
);

```

### Distribution Profiler

**Sintaxis:** obj << Distribution Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador de la función de distribución acumulativa de los predictores y la respuesta. La respuesta se muestra en la celda situada más a la derecha.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Distribution Profiler( 1 );

```

### Effect Summary

**Sintaxis:** obj << Effect Summary( state=0|1 )

**Descripción:** Muestra u oculta el informe Resumen de efectos, que permite actualizar interactivamente los efectos del modelo. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

### Estimate Quantile

**Sintaxis:** obj << Estimate Quantile( x1 = [number, ...], x2 = [number, ...], [p1, p2, ...], Alpha( fraction ) )

**Descripción:** Estima los cuantiles para valores de efecto y probabilidades especificados. Utilice un vector para especificar más de un valor para un efecto o más de un valor de probabilidad.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Estimate Quantile(
	:Age = [55, 60],
	:Diag Time = [8.77],
	[0.5, 0.10, 0.05],
	Alpha( 0.05 )
);

```

### Estimate Survival Probability

**Sintaxis:** obj << Estimate Survival Probability( x1 = [number, ...], x2 = [number, ...], [time1, time2, ...], Alpha( fraction ) )

**Descripción:** Estima las probabilidades de falla y supervivencia para valores de efecto y valores de tiempo especificados. Utilice un vector para especificar más de un valor para un efecto o más de un valor temporal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Estimate Survival Probability(
	:Age = [55, 60],
	:Diag Time = [8.77],
	[50, 100, 150],
	Alpha( 0.05 )
);

```

### FDR

**Sintaxis:** obj << FDR( state=0|1 )

**Descripción:** Especifica si se ajustan o no los valores de log utilidad y sus valores p correspondientes de la tabla Resumen de efectos utilizando la tasa de falsos descubrimientos (FDR).

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

### Fit Parametric Survival

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**Descripción:** Ajusta un modelo de regresión lineal general a tiempos de supervivencia. Estos modelos pueden utilizarse para los tiempos de supervivencia que puedan expresarse como función de una o más variables explicativas. Tiene en cuenta varias distribuciones de supervivencia y censuras.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Effect Names

**Sintaxis:** obj << Get Effect Names

**Descripción:** Devuelve los nombres de los efectos utilizados en el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
n = obj << Get Effect Names;
Show( n );

```

### Get Effect PValues

**Sintaxis:** obj << Get Effect PValues

**Descripción:** Devuelve los valores p de cada efecto del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
p = obj << Get Effect PValues;
Show( p );

```

### Get Estimates

**Sintaxis:** obj << Get Estimates

**Descripción:** Devuelve las estimaciones de los parámetros del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
e = obj << Get Estimates;
Show( e );

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

### Get Parameter Names

**Sintaxis:** obj << Get Parameter Names

**Descripción:** Devuelve los nombres de los parámetros utilizados en el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
n = obj << Get Parameter Names;
Show( n );

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Std Errors

**Sintaxis:** obj << Get Std Errors

**Descripción:** Devuelve los errores estándar de las estimaciones de los parámetros del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
std = obj << Get Std Errors;
Show( std );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
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

### Hazard Profiler

**Sintaxis:** obj << Hazard Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador que muestra la tasa de riesgo como función de los predictores y la respuesta. La respuesta se muestra en la celda situada más a la derecha.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Hazard Profiler( 1 );

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

### Likelihood Confidence Intervals

**Sintaxis:** obj << Likelihood Confidence Intervals( state=0|1 )

**Descripción:** Especifica el tipo de intervalos de confianza que se muestran en la tabla Estimaciones de los parámetros. Cuando se selecciona esta opción, aparece un intervalo de confianza de verosimilitud del perfil. de lo contrario, aparece un intervalo de Wald. Esta opción está activada de forma predeterminada cuando el tiempo de cálculo de los intervalos de confianza de la verosimilitud del perfil no es grande.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Likelihood Confidence Intervals( 1 );

```

### Likelihood Ratio Tests

**Sintaxis:** obj << Likelihood Ratio Tests( state=0|1 )

**Descripción:** Muestra u oculta las pruebas de la razón de verosimilitud para cada efecto. Cada prueba compara la log-verosimilitud del modelo ajustado con la log-verosimilitud del modelo que quita un efecto. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Likelihood Ratio Tests( 1 );

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

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Model Dialog;

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

### Publish Probability Formula

**Sintaxis:** obj << Publish Probability Formula

**Descripción:** Crea una fórmula de probabilidad y la publica como script de columna de fórmula en la plataforma Almacén de fórmulas.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Publish Probability Formula;

```

### Publish Quantile Formula

**Sintaxis:** obj << Publish Quantile Formula( probability )

**Descripción:** Crea una fórmula de cuantil y la publica como script de columna de fórmula en la plataforma Almacén de fórmulas.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Publish Quantile Formula( 0.1 );

```

### Quantile Profiler

**Sintaxis:** obj << Quantile Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador que muestra la respuesta predicha en función de los predictores y el cuantil de la función de distribución acumulativa. El cuantil se denomina Probabilidad de falla y se muestra en la celda situada más a la derecha.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Quantile Profiler( 1 );

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Report View( "Summary" );

```

### Residual Probability Plot

**Sintaxis:** obj << Residual Probability Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de probabilidad de los residuos estandarizados con intervalos de confianza.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Residual Probability Plot( 1 );

```

### Response versus Fitted Median

**Sintaxis:** obj << Response versus Fitted Median( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de las respuestas en el eje vertical y la mediana ajustada en el eje horizontal.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Response versus Fitted Median( 1 );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Probability Formula

**Sintaxis:** obj << Save Probability Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene una fórmula para la probabilidad de falla estimada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Probability Formula;

```

### Save Quantile Formula

**Sintaxis:** obj << Save Quantile Formula( probability )

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene una fórmula para el cuantil estimado del valor de probabilidad especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Quantile Formula( 0.8 );

```

### Save Residuals

**Sintaxis:** obj << Save Residuals

**Descripción:** Guarda una o dos columnas nuevas en la tabla de datos. El número de columnas de residuos coincide con el número de columnas de Tiempo hasta suceso en el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Residuals;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
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

### Standardized Residuals versus Fitted Median

**Sintaxis:** obj << Standardized Residuals versus Fitted Median( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de los residuos estandarizados en el eje vertical y la mediana ajustada en el eje horizontal.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Standardized Residuals versus Fitted Median( 1 );

```

### Survival Profiler

**Sintaxis:** obj << Survival Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador de la función de supervivencia de los predictores y la respuesta. La respuesta se muestra en la celda situada más a la derecha.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Survival Profiler( 1 );

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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
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

### View Web XML

**Sintaxis:** obj << View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Wald Tests

**Sintaxis:** obj << Wald Tests( state=0|1 )

**Descripción:** Muestra u oculta los estadísticos de la prueba de ji cuadrado y los valores p de las pruebas de Wald que determina si cada parámetro es cero.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Wald Tests( 0 );
Wait( 2 );
obj << Wald Tests( 1 );

```

### Window View

**Sintaxis:** obj = Fit Parametric Survival(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Fit Proportional Hazards

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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
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

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Data Table Window;

```

### Effect Summary

**Sintaxis:** obj << Effect Summary( state=0|1 )

**Descripción:** Muestra u oculta el informe Resumen de efectos, que permite actualizar interactivamente los efectos del modelo. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

### FDR

**Sintaxis:** obj << FDR( state=0|1 )

**Descripción:** Especifica si se ajustan o no los valores de log utilidad y sus valores p correspondientes de la tabla Resumen de efectos utilizando la tasa de falsos descubrimientos (FDR).

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

### Fit Proportional Hazards

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**Descripción:** Ajusta un modelo de regresión semiparamétrica (el modelo de Cox de riesgos proporcionales) para valorar el efecto de las variables explicativas en tiempos de supervivencia mientras se tiene en cuenta la censura.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
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

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
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

### Hazard Ratios

**Sintaxis:** obj << Hazard Ratios( state=0|1 )

**Descripción:** Muestra u oculta las razones de peligro de los efectos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Hazard Ratios( 1 );

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

### Likelihood Confidence Intervals

**Sintaxis:** obj << Likelihood Confidence Intervals( state=0|1 )

**Descripción:** Especifica el tipo de intervalos de confianza que se muestran en la tabla Estimaciones de los parámetros. Cuando se selecciona esta opción, aparece un intervalo de confianza de verosimilitud del perfil. de lo contrario, aparece un intervalo de Wald. Esta opción está activada de forma predeterminada cuando el tiempo de cálculo de los intervalos de confianza de la verosimilitud del perfil no es grande.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Likelihood Confidence Intervals( 1 );

```

### Likelihood Ratio Tests

**Sintaxis:** obj << Likelihood Ratio Tests( state=0|1 )

**Descripción:** Muestra u oculta las pruebas de la razón de verosimilitud para cada efecto. Cada prueba compara la log-verosimilitud del modelo ajustado con la log-verosimilitud del modelo que quita un efecto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Likelihood Ratio Tests( 1 );

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

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Model Dialog;

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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
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

### View Web XML

**Sintaxis:** obj << View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Wald Tests

**Sintaxis:** obj << Wald Tests( state=0|1 )

**Descripción:** Muestra u oculta los estadísticos de la prueba de ji cuadrado y los valores p de las pruebas de Wald que determina si cada parámetro es cero. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Wald Tests( 0 );
Wait( 2 );
obj << Wald Tests( 1 );

```

### Window View

**Sintaxis:** obj = Fit Proportional Hazards(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Fit Response Screening

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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
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

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Data Table Window;

```

### Effect Plots

**Sintaxis:** obj << Effect Plots( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Valor p de FDR para efectos y el gráfico Log Utilidad de FDR en función del tamaño del efecto. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Effect Plots( 0 ) )
);
Wait( 1 );
obj << Effect Plots( 1 );

```

### Effect Tests

**Sintaxis:** obj << Effect Tests( state=0|1 )

**Descripción:** Muestra u oculta la tabla Prueba del efecto. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

### Fit Response Screening

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ) )

**Descripción:** Automatiza el proceso de realizar pruebas para los efectos del modelo lineal en un gran número de respuestas. Los resultados de las pruebas y los estadísticos de resumen se presentan en tablas de datos y gráficos. La tasa de falsos descubrimientos (FDR) evita las declaraciones de significación incorrectas. Un método de estimación robusto reduce la sensibilidad de las pruebas a los valores atípicos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);

```

### Force G Side

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force G Side ) )

**Descripción:** Fuerza la estimación de los efectos aleatorios del lado G, incluso si la matriz de efectos aleatorios tiene más columnas que filas.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Response Screening" ),
	Run( Force G Side )
);

```

### Force R Side

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force R Side ) )

**Descripción:** Fuerza la estimación de los efectos aleatorios en el lado R, incluso si la matriz de efectos aleatorios tiene más filas que columnas.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Y( :Trait1 ),
	Run( Force R Side )
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
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

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
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

### Least Squares Means

**Sintaxis:** obj << Least Squares Means( state=0|1 )

**Descripción:** Calcula todas las medias de mínimos cuadrados (marginales).

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Popcorn.jmp" );
obj = dt << Fit Model(
	Y( :yield ),
	Effects(
		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,
		:popcorn * :oil amt * :batch
	),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Least Squares Means( 1 );

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

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Model Dialog;

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

### Overall Plots

**Sintaxis:** obj << Overall Plots( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Valor p de FDR global y el gráfico Log Utilidad de FDR en función de R cuadrado.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Overall Plots( 1 );

```

### Overall Report

**Sintaxis:** obj << Overall Report( state=0|1 )

**Descripción:** Muestra u oculta la tabla Ajuste general.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Overall Report( 1 );

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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Report View( "Summary" );

```

### Save BLUPs

**Sintaxis:** obj << Save BLUPs

**Descripción:** Crea una tabla de datos nueva que contiene los mejores predictores lineales insesgados (BLUP) para los efectos aleatorios del modelo.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save BLUPs;

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Conditional Predicted Values

**Sintaxis:** obj << Save Conditional Predicted Values

**Descripción:** Guarda una nueva columna para cada respuesta en la tabla de datos. La columna nueva contiene los valores predichos condicionales que se calculan utilizando los mejores predictores lineales insesgados (BLUP) para los coeficientes de efectos aleatorios.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Conditional Predicted Values;

```

### Save Conditional Prediction Formula

**Sintaxis:** obj << Save Conditional Prediction Formula

**Descripción:** Guarda una nueva columna de fórmulas para cada respuesta en la tabla de datos. La columna nueva contiene una fórmula que incluye estimaciones de efectos aleatorios para modelos con efectos aleatorios. Esta opción solo está disponible para los métodos de análisis REML.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Conditional Prediction Formula;

```

### Save Effect Tests

**Sintaxis:** obj << Save Effect Tests

**Descripción:** Crea una nueva tabla de datos que contiene una fila para cada prueba de efecto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Effect Tests;

```

### Save Estimates

**Sintaxis:** obj << Save Estimates

**Descripción:** Crea una nueva tabla de datos que contiene una fila para cada variable de respuesta y una columna por cada término del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Estimates;

```

### Save LSMeans Differences

**Sintaxis:** obj << Save LSMeans Differences

**Descripción:** Crea una nueva tabla de datos que contiene todas las diferencias de medias de mínimos cuadrados segmentadas.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
obj = dt << Fit Model(
	Effects( :age, :sex, :age * :sex ),
	Personality( "Response Screening" ),
	Y( :height, :weight ),
	Sliced LSMeans Differences( 1 ),
	Run
);
obj << Save LSMeans Differences;

```

### Save Least Squares Means

**Sintaxis:** obj << Save Least Squares Means

**Descripción:** Crea una nueva tabla de datos que contiene todas las medias de mínimos cuadrados.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height, :weight ),
	Effects( :age, :sex ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Least Squares Means;

```

### Save Overall Fit

**Sintaxis:** obj << Save Overall Fit

**Descripción:** Crea una nueva tabla de datos que contiene una fila por variable de respuesta. Para cada Y, las columnas de la tabla resumen la información sobre el ajuste del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Overall Fit;

```

### Save Predicted Values

**Sintaxis:** obj << Save Predicted Values

**Descripción:** Guarda una nueva columna para cada respuesta en la tabla de datos. Cada columna contiene los valores predichos para la respuesta correspondiente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Save Predicted Values )
);

```

### Save Prediction Formula

**Sintaxis:** obj << Save Prediction Formula

**Descripción:** Guarda una nueva columna de fórmulas para cada respuesta en la tabla de datos. Cada columna contiene una ecuación de predicción para la respuesta correspondiente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Save Prediction Formula )
);

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Script Window;

```

### Select Effects Where

**Sintaxis:** obj << Select Effects Where( condition )

**Descripción:** Abre la ventana Seleccionar dónde, que le permite seleccionar filas en la tabla Pruebas del efecto que coincidan con la condición específica indicada en la ventana Seleccionar dónde.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Select Effects Where( FDR Logworth > 4 );

```

### Select Responses for Selected Effects

**Sintaxis:** obj << Select Responses for Selected Effects

**Descripción:** Selecciona columnas de respuesta en la tabla original que se correspondan con los efectos seleccionados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run()
);
obj << Select Effects Where( FDR Logworth > 4 );
obj << Select Responses for Selected Effects;

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

### Sliced LSMeans Differences

**Sintaxis:** obj << Sliced LSMeans Differences( state=0|1 )

**Descripción:** Calcula pruebas comparando todas las medias de mínimos cuadrados de efectos principales y segmentos de interacciones de 2 y 3 factores.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Popcorn.jmp" );
obj = dt << Fit Model(
	Y( :yield ),
	Effects(
		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,
		:popcorn * :oil amt * :batch
	),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Sliced LSMeans Differences( 1 );

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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
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

### Unthreaded

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Unthreaded ) )

**Descripción:** Suprime los múltiples subprocesos entre las respuestas (y las variables de cambio).

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Y( :Trait1 ),
	Run( Unthreaded )
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

**Sintaxis:** obj = Fit Response Screening(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Fit Stepwise

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

### All Possible Models

**Sintaxis:** obj << All Possible Models( max_terms, max_models, <Heredity Restriction( state=0|1 )> )

**Descripción:** Ajusta todos los modelos posibles hasta los límites especificados y muestra los mejores modelos para cada número de términos. Especifica el número máximo de términos que ajustar en cualquier modelo. Especifica el número máximo de resultados del modelo que mostrar para cada número de términos del modelo. Puede restringir los modelos que aparecen a aquellos que cumplan una fuerte herencia de efectos. La opción Todos los modelos posibles solo está disponible para respuestas continuas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << All Possible Models( 5, 10 );

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
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Backward Step

**Sintaxis:** obj << Backward Step

**Descripción:** Quita el término con el valor p más alto. Si se selecciona la regla de detención Umbral del valor p, ese término no debe ser significativo al nivel especificado por la opción Prob. que dejar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter All;
Wait( 1 );
obj << Backward Step;

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
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;

```

### Clear History

**Sintaxis:** obj << Clear History

**Descripción:** Borra y restablece el historial de pasos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Clear History;

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

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Data Table Window;

```

### Direction

**Sintaxis:** obj << Direction( "Adelante"|"Atrás"|"Mixto" )

**Descripción:** Especifica la dirección que se utiliza para recorrer paso a paso el proceso de selección de términos. La dirección puede ser hacia adelante, hacia atrás o una combinación de ambas. La opción de dirección mixta requiere que esté seleccionada la regla de detención Umbral del valor p.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;

```

### Enter

**Sintaxis:** obj << Enter( term )

**Descripción:** Introduce un término en el modelo. Esta opción no afecta a los términos protegidos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );

```

### Enter All

**Sintaxis:** obj << Enter All

**Descripción:** Introduce todos los términos en el modelo, si es posible.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run( Direction( "Backward" ) )
);
obj << Enter All;

```

### Export Model With Validation

**Sintaxis:** obj << Export Model With Validation( state=0|1 )

**Descripción:** Agrega la columna Validación a la ventana Especificación del modelo cuando selecciona la opción Crear modelo. Esta opción también ejecuta el modelo con la columna Validación cuando selecciona la opción Ejecutar modelo. Esta opción solo está disponible cuando ha especificado una columna de validación. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Validation( :Validation ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Make Model;
Wait( 1 );
obj << Export Model With Validation( 0 );
obj << Make Model;

```

### Finish

**Sintaxis:** obj << Finish

**Descripción:** Finaliza inmediatamente el proceso de selección de términos. En los scripts, se recomienda la opción Finalizar en lugar de la opción Ir.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;

```

### Forward Step

**Sintaxis:** obj << Forward Step

**Descripción:** Introduce el término con el valor p más bajo. Si se selecciona la regla de detención Umbral del valor p, ese término debe ser significativo al nivel especificado por la opción Prob. que introducir.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
Wait( 1 );
obj << Forward Step;

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
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
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
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
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

**Descripción:** Devuelve medidas de ajuste de resumen del modelo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Get Measures;

```

### Get Prospectives

**Sintaxis:** obj << Get Prospectives

**Descripción:** Devuelve una matriz asociativa que contiene estimaciones e intervalos de confianza. Para los términos que están en el modelo, los valores son los obtenidos del modelo actual. Para los términos que no están en el modelo actual, los valores son las estimaciones y los intervalos de confianza de un modelo que incluya el término correspondiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Show(
	obj << Enter( :Runtime );
	obj << Get Prospectives;
);

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
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

### Go

**Sintaxis:** obj << Go

**Descripción:** Inicia una tarea en segundo plano para el proceso de selección de términos. En los scripts, se recomienda la opción Finalizar en lugar de la opción Ir.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Go;

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

### K-Fold Crossvalidation

**Sintaxis:** obj << "K-Fold Crossvalidation"n( <k> )

**Descripción:** Realiza una validación cruzada de k veces en el proceso de selección de variables. Cuando se selecciona, esta opción habilita la regla de detención R cuadrado máx. de k veces en el panel de control. La validación cruzada de K veces en la plataforma Paso a paso divide la muestra en k subconjuntos y utiliza los subconjuntos como conjunto de validación. La opción Validación cruzada de K veces solo está disponible para respuestas continuas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << "K-Fold Crossvalidation"n( 5 );
obj << Finish;

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

### Lock

**Sintaxis:** obj << Lock( term )

**Descripción:** Protege un término dentro o fuera del modelo. No se puede introducir en el modelo un término protegido que no se encuentre dentro de él, y no se puede quitar del modelo un término protegido que se encuentre dentro de él.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );
obj << Lock( :Runtime );

```

### Make Model

**Sintaxis:** obj << Make Model

**Descripción:** Abre una ventana de inicio Ajuste del modelo para el modelo especificado en la tabla Estimaciones actuales. En los casos en los que haya términos nominales u ordinales, la opción Crear modelo crea columnas de transformación temporales que contienen los términos necesarios para el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Make Model;

```

### Model Averaging

**Sintaxis:** obj << Model Averaging( max_terms, AICc_cutoff )

**Descripción:** Le permite promediar los ajustes para un número de modelos, en lugar de seleccionar un único mejor modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Model Averaging( 5, .90 );

```

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Model Dialog;

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

### Plot Criterion History

**Sintaxis:** obj << Plot Criterion History( state=0|1 )

**Descripción:** Crea un gráfico de AICc y BIC frente al número de parámetros.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;
obj << Plot Criterion History( 1 );

```

### Plot RSquare History

**Sintaxis:** obj << Plot RSquare History( state=0|1 )

**Descripción:** Crea un gráfico de R cuadrado de entrenamiento y validación frente al número de parámetros. Esta opción solo está disponible para modelos de respuesta continua que tengan datos de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << "K-Fold Crossvalidation"n( 5 );
obj << Finish;
obj << Plot RSquare History( 1 );

```

### Prob to Enter

**Sintaxis:** obj << Prob to Enter( number )

**Descripción:** Especifica el valor p máximo que debe tener un efecto para introducirlo en el modelo durante un paso hacia delante.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Prob to Enter( .20 );
obj << Finish;

```

### Prob to Leave

**Sintaxis:** obj << Prob to Leave( number )

**Descripción:** Especifica el valor p mínimo que debe tener un efecto para quitarlo del modelo durante un paso hacia atrás.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Prob to Leave( .20 );
obj << Enter All;
obj << Direction( "Backward" );
obj << Finish;

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Relaunch ByGroup;

```

### Remove

**Sintaxis:** obj << Remove( term )

**Descripción:** Quita un término del modelo. Esta opción no afecta a los términos protegidos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Remove( :RunPulse );

```

### Remove All

**Sintaxis:** obj << Remove All

**Descripción:** Quita todos los términos del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Remove All;

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
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Report View( "Summary" );

```

### Rules

**Sintaxis:** obj << Rules( "Combinar"|"Restringir"|"Sin reglas"|"Efectos completos"|"Efectos completos respecto a la herencia" )

**Descripción:** Especifica las reglas que se aplican cuando hay una jerarquía de términos en el modelo. Esta opción solo aparece si su modelo contiene términos jerárquicos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,
		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,
		:RunPulse * :MaxPulse
	),
	Personality( "Stepwise" ),
	Run
);
obj << Rules( "Whole Effects" );
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;

```

### Run Model

**Sintaxis:** obj << Run Model

**Descripción:** Abre un informe de mínimos cuadrados estándar para el modelo especificado en la tabla Estimaciones actuales. En los casos en los que haya términos nominales u ordinales, la opción Ejecutar modelo crea columnas de transformación temporales que contienen los términos necesarios para el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Run Model;

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
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

### Step

**Sintaxis:** obj << Step

**Descripción:** Da el paso siguiente en el proceso de selección de términos. La opción Paso introduce términos uno por uno hacia delante o los elimina uno por uno hacia atrás.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
Wait( 1 );
obj << Step;

```

### Stepwise Personality

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Stepwise" ) )

**Descripción:** Ajusta modelos de regresión por pasos, lo que facilita la selección de variables para los mínimos cuadrados estándar y los modelos logísticos ordinales, así como los modelos logísticos nominales con una respuesta binaria.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;

```

### Stop

**Sintaxis:** obj << Stop

**Descripción:** Detiene el proceso de selección automática iniciado por las opciones Ir o Finalizar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Stop;

```

### Stopping Rule

**Sintaxis:** obj << Stopping Rule( "Umbral del valor p"|"AICc mínimo"|"BIC mínimo"|"R cuadrado máx. de validación"|"R cuadrado máx. de k veces" )

**Descripción:** Especifica la regla que se utiliza para detener el proceso de selección de términos cuando se especifican las opciones Ir o Finalizar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,
		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,
		:RunPulse * :MaxPulse
	),
	Personality( "Stepwise" ),
	Run Model( Stopping Rule( "Minimum AICc" ) )
);
obj << Finish;

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
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
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

### Unlock

**Sintaxis:** obj << Unlock( term )

**Descripción:** Desprotege un término previamente protegido en el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );
obj << Lock( :Runtime );
Wait( 1 );
obj << Unlock( :Runtime );

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

**Sintaxis:** obj = Stepwise Personality(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Fit Varcomp

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
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
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

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Data Table Window;

```

### Estimate Only Variance Components

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Method( "REML" ), Estimate Only Variance Components( 1 ) )

**Descripción:** Ejecuta un análisis REML mediante el modelo especificado y muestra los componentes de varianza del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
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

### Get Random Effect Names

**Sintaxis:** obj << Get Random Effect Names

**Descripción:** Devuelve los nombres de los efectos aleatorios. Disponible para métodos de análisis de REML.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
vn = obj << Get Random Effect Names;
Show( vn );

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

### Get Variance Components

**Sintaxis:** obj << Get Variance Components

**Descripción:** Devuelve los componentes de varianza generados por Ajuste del modelo para un modelo especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
vc = obj << Get Variance Components;
Show( vc );

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
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
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

**Sintaxis:** obj = Estimate Only Variance Components(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Generalized Linear Mixed Model > Fit GLMM

### Between-Within Degrees of Freedom

**Sintaxis:** obj << (fit[number] << Between-Within Degrees of Freedom( state=0|1 ))

**Descripción:** Replaces the standard errors with unadjusted estimates and degrees of freedom to between-within based throughout the report. To use between-within degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Repeated Measures Binomial.jmp" );
fm = Fit Model(
	Y( :No Headache, :Number of Patients ),
	Effects( :Treatment, :Week, :Treatment * :Week ),
	Personality( "Generalized Linear Mixed Model" ),
	Subject( :"Treatment(Clinic)"n ),
	Repeated Effects( :Week Continuous ),
	Repeated Structure( "AR(1)" ),
	Generalized Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run()
);
Wait( 1 );
fm << (Fit[1] << "Between-Within Degrees of Freedom"n( 1 ));

```

### Conditional Contour Profiler

**Sintaxis:** obj << (fit[number] << Conditional Contour Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un perfilador de contorno de la respuesta condicional gráficamente para dos factores a la vez. Esta opción solo está disponible cuando el modelo contiene al menos dos efectos continuos y al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Conditional Contour Profiler( 1 ));

```

### Conditional Diagnostic Bundle

**Sintaxis:** obj << (fit[number] << Conditional Diagnostic Bundle( state=0|1 ))

**Descripción:** Muestra u oculta un grupo de gráficos de diagnóstico útiles para decidir sobre la eficacia del modelo de regresión para ajustar los datos observados. Esta opción no está disponible si se ha seleccionado la distribución binomial o si no hay efectos aleatorios en el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Conditional Diagnostic Bundle( 1 ));

```

### Conditional Mean CI

**Sintaxis:** obj << (fit[number] << Conditional Mean CI)

**Descripción:** Guarda dos nuevas columnas en la tabla de datos. Las nuevas columnas contienen los límites de confianza inferior y superior para el valor esperado de la predicción condicional. Los intervalos de confianza incluyen estimaciones de efectos aleatorios para los modelos que contienen efectos aleatorios. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Mean CI);

```

### Conditional Mixture Profiler

**Sintaxis:** obj << (fit[number] << Conditional Mixture Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un perfilador de mezclas que muestra los contornos de la respuesta condicional en un gráfico ternario. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio y si el atributo Efecto de mezcla se aplica a tres o más factores del modelo o la propiedad Mezcla se aplica a tres o más columnas de factores.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Conditional Mixture Profiler( 1 ));

```

### Conditional Prediction Formula

**Sintaxis:** obj << (fit[number] << Conditional Prediction Formula)

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene la fórmula de predicción de la media condicional. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Prediction Formula);

```

### Conditional Profiler

**Sintaxis:** obj << (fit[number] << Conditional Profiler( state=0|1 ))

**Descripción:** Muestra u oculta el perfilador de predicción, que se utiliza para explorar gráficamente la ecuación de predicción condicional seccionándola factor por factor. El perfilador de predicción contiene funciones de optimización. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Profiler( 1 ));

```

### Conditional Surface Profiler

**Sintaxis:** obj << (fit[number] << Conditional Surface Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico de superficie tridimensional de la respuesta condicional. Esta opción solo está disponible cuando el modelo contiene al menos dos efectos y al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Surface Profiler( 1 ));

```

### Containment Degrees of Freedom

**Sintaxis:** obj << (fit[number] << Containment Degrees of Freedom( state=0|1 ))

**Descripción:** Replaces the standard errors with unadjusted estimates and degrees of freedom to containment-based throughout the report. To use containment degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Containment Degrees of Freedom( 1 ));

```

### Contour Profiler

**Sintaxis:** obj << (fit[number] << Contour Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un perfilador de contorno de la respuesta marginal gráficamente para dos factores a la vez. Esta opción solo está disponible cuando el modelo contiene al menos dos efectos fijos continuos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Contour Profiler( 1 ));

```

### Correlation of Fixed Effects

**Sintaxis:** obj << (fit[number] << Correlation of Fixed Effects( state=0|1 ))

**Descripción:** Muestra u oculta la matriz de correlación de los efectos fijos del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Correlation of Fixed Effects( 1 ));

```

### Covariance of All Parameters

**Sintaxis:** obj << (fit[number] << Covariance of All Parameters( state=0|1 ))

**Descripción:** Muestra u oculta la matriz de covarianza de todos los efectos del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of All Parameters( 1 ));

```

### Covariance of Covariance Parameters

**Sintaxis:** obj << (fit[number] << Covariance of Covariance Parameters( state=0|1 ))

**Descripción:** Muestra u oculta la matriz de covarianza de los efectos aleatorios del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of Covariance Parameters( 1 ));

```

### Covariance of Fixed Effects

**Sintaxis:** obj << (fit[number] << Covariance of Fixed Effects( state=0|1 ))

**Descripción:** Muestra u oculta la matriz de covarianza de los efectos fijos del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of Fixed Effects( 1 ));

```

### Diagnostic Bundle

**Sintaxis:** obj << (fit[number] << Diagnostic Bundle( state=0|1 ))

**Descripción:** Muestra u oculta un grupo de gráficos de diagnóstico que son útiles para decidir la eficacia del modelo de regresión para ajustar los datos observados. Esta opción no está disponible si se selecciona la distribución binomial o si hay efectos aleatorios en el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Diagnostic Bundle( 1 ));

```

### Empirical Standard Errors

**Sintaxis:** obj << (fit[number] << Empirical Standard Errors( state=0|1 ))

**Descripción:** Reemplaza los errores estándar por estimaciones de tipo sándwich en todo el informe. Para utilizar estimaciones de tipo sándwich en un informe de comparaciones múltiples, es necesario seleccionar esta opción antes de agregar un informe de comparaciones múltiples.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Empirical Standard Errors( 1 ));

```

### Fit Statistics

**Sintaxis:** obj << (fit[number] << Fit Statistics( state=0|1 ))

**Descripción:** Muestra u oculta los informes Estadísticos de ajuste y Resumen del modelo que incluyen información sobre la especificación y estadísticos de bondad de ajuste para el modelo. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fit Statistics( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fit Statistics( 1 ));

```

### Fixed Effects Parameter Estimates

**Sintaxis:** obj << (fit[number] << Fixed Effects Parameter Estimates( state=0|1 ))

**Descripción:** Muestra u oculta una tabla de estimaciones de parámetros de efectos fijos. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fixed Effects Parameter Estimates( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fixed Effects Parameter Estimates( 1 ));

```

### Fixed Effects Tests

**Sintaxis:** obj << (fit[number] << Fixed Effects Tests( state=0|1 ))

**Descripción:** Muestra u oculta las pruebas de efectos fijos. Esta opción solo está disponible cuando el modelo contiene al menos un efecto fijo. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fixed Effects Tests( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fixed Effects Tests( 1 ));

```

### Mean Confidence Interval

**Sintaxis:** obj << (fit[number] << Mean Confidence Interval)

**Descripción:** Guarda dos nuevas columnas en la tabla de datos. Las columnas nuevas contienen los límites de confianza inferior y superior de la respuesta media.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Mean Confidence Interval);

```

### Mixture Profiler

**Sintaxis:** obj << (fit[number] << Mixture Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un perfilador de mezclas que muestra los contornos de la respuesta marginal en un gráfico ternario. Esta opción solo está disponible si el atributo Efecto de mezcla se aplica a tres o más factores del modelo o la propiedad Mezcla se aplica a tres o más columnas de factores.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Mixture Profiler( 1 ));

```

### Multiple Comparisons

**Sintaxis:** obj << (fit[number] << Multiple Comparisons( Effect( effect ), <options> ))

**Descripción:** Genera estimaciones de las medias de mínimos cuadrados o estimaciones definidas por el usuario. Estas estimaciones permiten al usuario realizar comparaciones con la media global, comparaciones con un control o comparaciones por pares. Esta opción solo está disponible cuando el modelo contiene al menos un efecto fijo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Target Level( "Pass" ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Multiple Comparisons(
	Effect( :Program ),
	Least Squares Means Plot,
	Student's t( 1 )
));

```

### Odds Ratios

**Sintaxis:** obj << (fit[number] << Odds Ratios( state=0|1 ))

**Descripción:** Muestra u oculta un informe que contiene razones de posibilidades para predictores categóricos, y razones de posibilidades unitarias y razones de posibilidades de rango para predictores continuos.

### Prediction Formula

**Sintaxis:** obj << (fit[number] << Prediction Formula)

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene la fórmula de predicción de la media marginal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Prediction Formula);

```

### Prediction and Interval Formulas

**Sintaxis:** obj << (fit[number] << Prediction and Interval Formulas)

**Descripción:** Guarda las columnas nuevas en la tabla de datos. Las columnas contienen fórmulas para las predicciones y los límites de confianza. Las columnas de límites que se crean con esta opción contienen propiedades que utiliza el Perfilador de predicción.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Prediction and Interval Formulas);

```

### Profiler

**Sintaxis:** obj << (fit[number] << Profiler( state=0|1 ))

**Descripción:** Muestra u oculta el perfilador de predicción, que se utiliza para explorar gráficamente la ecuación de predicción marginal seccionándola factor por factor. El perfilador de predicción contiene funciones de optimización. Esta opción solo está disponible cuando el modelo contiene al menos un efecto fijo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Profiler( 1 ));

```

### Random Coefficients

**Sintaxis:** obj << (fit[number] << Random Coefficients( state=0|1 ))

**Descripción:** Muestra u oculta un informe de las estimaciones de los coeficientes aleatorios. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Random Coefficients( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Random Coefficients( 1 ));
Report( fm )["Random Coefficients"] << Close( 0 );

```

### Random Effects Covariance Parameter Estimates

**Sintaxis:** obj << (fit[number] << Random Effects Covariance Parameter Estimates( state=0|1 ))

**Descripción:** Muestra u oculta una tabla de estimaciones de parámetros de covarianza de efectos aleatorios. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Random Effects Covariance Parameter Estimates( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Random Effects Covariance Parameter Estimates( 1 ));

```

### Random Effects Predictions

**Sintaxis:** obj << (fit[number] << Random Effects Predictions( state=0|1 ))

**Descripción:** Muestra u oculta una tabla de predicciones de efectos aleatorios. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Random Effects Predictions( 1 ));

```

### Save Conditional Residual Formula

**Sintaxis:** obj << (fit[number] << Save Conditional Residual Formula )

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene una fórmula para los residuos condicionales, expresada en la forma Y menos la fórmula de predicción. Esta opción no está disponible si se ha seleccionado la distribución binomial o si hay efectos aleatorios en el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
fm << (fit[1] << Save Conditional Residual Formula);

```

### Save Residual Formula

**Sintaxis:** obj << (fit[number] << Save Residual Formula )

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva contiene una fórmula para los residuos marginales, expresada en la forma Y menos la fórmula de predicción. Esta opción no está disponible si se ha seleccionado la distribución binomial.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
fm << (fit[1] << Save Residual Formula);

```

### Save Simulation Formula

**Sintaxis:** obj << (fit[number] << Save Simulation Formula)

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna nueva se puede utilizar para crear valores de respuesta aleatorios a partir del modelo ajustado. Puede utilizar la columna de fórmulas con la función Simular de JMP Pro. Esta opción no está disponible si se utiliza una variable Por. Utilice tablas de datos de subconjuntos si necesita fórmulas de simulación por grupos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Save Simulation Formula);

```

### Sequential Tests

**Sintaxis:** obj << (fit[number] << Sequential Tests( state=0|1 ))

**Descripción:** Muestra u oculta el informe Pruebas secuenciales (tipo 1) que contiene las sumas de cuadrados a medida que se añaden efectos al modelo secuencialmente. Esta opción solo está disponible cuando el modelo contiene al menos un efecto fijo.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Sequential Tests( 1 ));

```

### Standard Error of Conditional Predicted

**Sintaxis:** obj << (fit[number] << Standard Error of Conditional Predicted)

**Descripción:** Guarda una columna nueva en la tabla de datos. La columna nueva contiene los errores estándar de las predicciones condicionales de la media. Esta opción solo está disponible cuando el modelo contiene al menos un efecto aleatorio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Standard Error of Conditional Predicted);

```

### Standard Error of Predicted

**Sintaxis:** obj << (fit[number] << Standard Error of Predicted)

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna nueva contiene los errores estándar de las predicciones marginales de la media.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Standard Error of Predicted);

```

### Surface Profiler

**Sintaxis:** obj << (fit[number] << Surface Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico de superficie tridimensional de la respuesta marginal. Esta opción solo está disponible cuando el modelo contiene al menos dos efectos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Surface Profiler( 1 ));

```

## Generalized Linear Mixed Model

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
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
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

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Data Table Window;

```

### Fit

**Sintaxis:** Fit Model(...Run( Fit( options ) )...);

obj << Fit( options );

obj << (Fit[number] << option)

**Descripción:** Permite enviar mensajes a la plataforma. Esta opción se puede utilizar en un script de inicio del modelo o para generar un asidero para un modelo específico en el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fit Statistics( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fit Statistics( 1 ));

```

### Fit GLMM Platform

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Generalized Linear Mixed Model" ) )

**Descripción:** Fits a generalized linear mixed model. These models can be used for random coefficients, split-plots, and blocked designs when the response is non-Gaussian. The response distributions can accommodate continuous, categorical, count, and time-to-event response data.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
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

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
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

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << Model Dialog;

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
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
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
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
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
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
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

**Sintaxis:** obj = Fit GLMM Platform(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Generalized Regression > Generalized Regression Fit

### Active Parameter Estimates

**Sintaxis:** obj << (fit[number] << Active Parameter Estimates( state=0|1 ))

**Descripción:** Muestra u oculta una tabla de estimaciones de los parámetros activos, o distintos de cero, para el modelo seleccionado actualmente. Esta opción no está disponible para los modelos de máxima verosimilitud o regresión Ridge.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Active Parameter Estimates( 1 ));

```

### Confusion Matrix

**Sintaxis:** obj << (fit[number] << Confusion Matrix( <probability=0.5> ))

**Descripción:** Genera una matriz de tabulación cruzada de las respuestas observadas y predichas. Utilice el argumento opcional para especificar una probabilidad de umbral distinta de 0,5. Esta opción solo está disponible cuando la distribución especificada es binomial, multinomial o logística ordinal. "0.5" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( "Logistic Regression" ),
			Validation Method( "None" ),
			Confusion Matrix( 0.5 )
		)
	)
);

```

### Cook's D Influence

**Sintaxis:** obj << (fit[number] << Cook&apos;s D Influence)

**Descripción:** Guarda una columna nueva en la tabla de datos original. La columna nueva contiene los valores para el estadístico de influencia de la distancia de Cook. Esta opción solo está disponible si la distribución especificada es normal y el método de estimación especificado es Mínimos cuadrados estándar.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Cook's D Influence);

```

### Correlation of Estimates

**Sintaxis:** obj << (fit[number] << Correlation of Estimates( state=0|1 ))

**Descripción:** Muestra u oculta la matriz de correlaciones entre las estimaciones de los parámetros para el ajuste especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Correlation of Estimates);

```

### Covariance of Estimates

**Sintaxis:** obj << (fit[number] << Covariance Of Estimates( state=0|1 ))

**Descripción:** Muestra u oculta la matriz de covarianzas entre las estimaciones de los parámetros para el ajuste especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Covariance of Estimates);

```

### Custom Test

**Sintaxis:** obj << (fit[number] << Custom Test( [l1, l2, l3, ... ], <Label( text )> ))

**Descripción:** Muestra u oculta un informe de prueba personalizada que le permite verificar una hipótesis personalizada. Si el modelo tiene una ruta de solución, los resultados de la prueba personalizada se actualizan a medida que actualiza la solución.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :BMI, :BP, :LDL, :HDL, :TCH ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Custom Test( [0 0 0 1 -1 0], Label() ));

```

### Decision Threshold

**Sintaxis:** obj << (fit[number] << Decision Threshold( state=0|1, Set Probability Threshold( number=0.5 ))

**Descripción:** Muestra u oculta los informes de umbrales de decisión para los conjuntos de entrenamiento, validación y pruebas, si se especifica. Cada informe contiene un gráfico de la distribución de probabilidades ajustadas para cada modelo, matrices de confusión para cada modelo y gráficos de clasificación para comparar los ajustes del modelo. Esta opción solo está disponible para respuestas categóricas binarias.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << Decision Threshold( 1 ));

```

### Diagnostic Bundle

**Sintaxis:** obj << (fit[number] << Diagnostic Bundle( state=0|1 ))

**Descripción:** Muestra u oculta un grupo de gráficos de diagnóstico que son útiles para decidir en qué medida se ajusta un modelo de regresión a los datos observados. Hay disponible un conjunto de gráficos para el conjunto de entrenamiento y para los conjuntos de validación y pruebas si los utiliza. No está disponible cuando la distribución especificada es binomial, multinomial, logística ordinal o riesgos proporcionales de Cox.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (fit[1] << Diagnostic Bundle( 1 ));

```

### Distribution Profiler

**Sintaxis:** obj << (fit[number] << Distribution Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un perfilador de la función de distribución acumulativa de los predictores y la respuesta. La respuesta se muestra en la celda situada más a la derecha. Esta opción no está disponible cuando la distribución especificada es binomial o regresión por cuantil.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Distribution Profiler( 1 )
		)
	)
);

```

### Effect Tests

**Sintaxis:** obj << (fit[number] << Effect Tests( state=0|1 ))

**Descripción:** Muestra u oculta las pruebas para cada efecto. Cada prueba de efecto verifica la hipótesis nula de que todos los parámetros asociados con ese efecto son cero. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Effect Tests( 0 ));

```

### Get Prediction Formula

**Sintaxis:** obj << (fit[number] << Get Prediction Formula)

**Descripción:** Construye un script para crear una columna de fórmula de predicción y la devuelve.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Get Prediction Formula);

```

### Hats

**Sintaxis:** obj << (fit[number] << Hats)

**Descripción:** Guarda una columna nueva en la tabla de datos original. La columna nueva contiene los elementos diagonales de la matriz hat, que a veces se denominan valores hat. Esta opción solo está disponible si la distribución especificada es normal y el método de estimación especificado es mínimos cuadrados estándar.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Hats);

```

### Hazard Profiler

**Sintaxis:** obj << (fit[number] << Hazard Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un perfilador que muestra la tasa de riesgo como función de los predictores y la respuesta. La respuesta se muestra en la celda situada más a la derecha. Esta opción solo está disponible cuando la distribución especificada es normal, exponencial, Weibull, log-normal o riesgos proporcionales de Cox.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Hazard Profiler( 1 )
		)
	)
);

```

### Hazard Ratios

**Sintaxis:** obj << (fit[number] << Hazard Ratios( state=0|1 ))

**Descripción:** Muestra u oculta un informe que contiene razones de riesgo para predictores categóricos, y razones de riesgo unitarias y razones de riesgo de rango para predictores continuos. Una razón de riesgo es la razón de la tasa de riesgo para dos sucesos. Esta opción solo está disponible cuando la distribución especificada es Riesgos proporcionales de Cox.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Hazard Ratios( 1 )
		)
	)
);

```

### Hide Inactive Paths

**Sintaxis:** obj << (fit[number] << Hide Inactive Paths( state=0|1 ))

**Descripción:** Ajusta la transparencia de las trayectorias inactivas en el gráfico Estimaciones de los parámetros de la trayectoria de solución de modo que las trayectorias que no estén activas actualmente aparezcan atenuadas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Hide Inactive Paths);

```

### Incidence Rate Ratios

**Sintaxis:** obj << (fit[number] << Incidence Rate Ratios( state=0|1 ))

**Descripción:** Muestra u oculta un informe que contiene razones de tasas de incidencia para los predictores categóricos, y razones de tasas de incidencia unitarias y razones de tasas de incidencia por rango para los predictores continuos. Esta opción solo está disponible cuando la distribución especificada es Poisson o binomial negativa y el modelo contiene una constante.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Incidence Rate Ratios( 1 )
		)
	)
);

```

### Inverse Prediction

**Sintaxis:** obj << (fit[number] << Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) ))

**Descripción:** Genera un valor predicho de X y un intervalo de confianza basado en los valores especificados de Y y todos los demás factores. Esta opción no está disponible para modelos que contengan un predictor que tenga el tipo de modelización Vector.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Inverse Prediction(
	Response( 200, 250, 300 ),
	Term Value(
		Age( 48.5181 ),
		Gender( "1" ),
		BMI( . ),
		BP( 94.6470135746607 ),
		Total Cholesterol( 189.140271493213 ),
		LDL( 115.439140271493 ),
		HDL( 49.7884615384615 ),
		TCH( 4.07024886877828 ),
		LTG( 4.64141085972851 ),
		Glucose( 91.2601809954751 )
	)
));

```

### Lift Curve

**Sintaxis:** obj << (fit[number] << Lift Curve( state=0|1 ))

**Descripción:** Muestra u oculta la curva lift del modelo. Si ha utilizado la validación, se muestra una curva lift para cada uno de los conjuntos de entrenamiento, validación y pruebas. Esta opción solo está disponible cuando la distribución especificada es binomial, multinomial o logística ordinal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << Lift Curve( 1 ));

```

### Mean Confidence Interval

**Sintaxis:** obj << (fit[number] << Mean Confidence Interval)

**Descripción:** Guarda dos columnas de fórmulas nuevas en la tabla de datos original. Las columnas nuevas contienen los límites de confianza inferior y superior al 95 % para la respuesta media.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Mean Confidence Interval);

```

### Model Summary

**Sintaxis:** obj << (fit[number] << Model Summary( state=0|1 ))

**Descripción:** Muestra u oculta el informe Resumen del modelo que incluye información sobre la especificación y los estadísticos de bondad de ajuste para el modelo. Esta opción también muestra el informe Detalles de la estimación para los modelos aplicables. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Model Summary( 0 ));

```

### Multiple Comparisons

**Sintaxis:** obj << (fit[number] << Multiple Comparisons( Effect( effect ), <options> ))

**Descripción:** Genera estimaciones de las medias de mínimos cuadrados o estimaciones definidas por el usuario. Estas estimaciones permiten al usuario realizar comparaciones con la media global, comparaciones con un control o comparaciones por pares. Esta opción no está disponible para modelos que contengan un predictor que tenga el tipo de modelización Vector o para modelos que no contengan ningún predictor categórico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );
fm = dt << Fit Model(
	Y( :World Gross ),
	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Gamma" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Multiple Comparisons(
				Effect( :Genre ),
				Comparisons with Overall Average(
					1,
					Comparisons with Overall Average Decision Chart(
						ANOM( 1, Point Options( "Show Needles" ) )
					)
				)
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Parameter Estimates for Original Predictors", OutlineBox, Close( 1 ) )
	)
);

```

### Normal Quantile Plot

**Sintaxis:** obj << (fit[number] << Normal Quantile Plot( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico de cuantiles normales en el eje vertical y residuos estandarizados en el eje horizontal. Si ha utilizado la validación, se muestra un gráfico para cada uno de los conjuntos de entrenamiento, validación y pruebas. Esta opción solo está disponible cuando la distribución especificada es normal y no hay censura.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Normal Quantile Plot);

```

### Odds Ratios

**Sintaxis:** obj << (fit[number] << Odds Ratios( state=0|1 ))

**Descripción:** Muestra u oculta un informe que contiene razones de posibilidades para predictores categóricos, y razones de posibilidades unitarias y razones de posibilidades de rango para predictores continuos. Esta opción solo está disponible cuando la distribución especificada es binomial y el modelo contiene una constante. Esta opción no está disponible para modelos que contengan un predictor que tenga el tipo de modelización Vector.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( "Logistic Regression" ),
			Validation Method( "None" ),
			Odds Ratios( 1 )
		)
	)
);

```

### Parameter Estimates for Centered and Scaled Predictors

**Sintaxis:** obj << (fit[number] << Parameter Estimates for Centered and Scaled Predictors( state=0|1 ))

**Descripción:** Muestra u oculta una tabla de estimaciones de parámetros centradas y escaladas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Parameter Estimates for Centered and Scaled Predictors( 1 ));

```

### Parameter Estimates for Original Predictors

**Sintaxis:** obj << (fit[number] << Parameter Estimates for Original Predictors( state=0|1 ))

**Descripción:** Muestra u oculta una tabla de estimaciones de los parámetros en la escala original de los datos. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Parameter Estimates for Original Predictors( 0 ));

```

### Plot Actual by Predicted

**Sintaxis:** obj << (fit[number] << Plot Actual By Predicted( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico para el conjunto de entrenamiento con los valores observados en el eje vertical y los valores predichos en el eje horizontal. Si ha utilizado la validación, se muestra un gráfico para cada uno de los conjuntos de entrenamiento, validación y pruebas. Esta opción no está disponible cuando la distribución especificada es binomial, multinomial, logística ordinal o riesgos proporcionales de Cox.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Actual by Predicted( 1 ));

```

### Plot Baseline Survival and Hazard

**Sintaxis:** obj << (fit[number] << Plot Baseline Survival and Hazard( state=0|1 ))

**Descripción:** Muestra u oculta los gráficos de supervivencia y riesgo de referencia, que representan las funciones de supervivencia y riesgo para la función de riesgos proporcionales de referencia frente a la variable de respuesta. Debajo de los gráficos, hay una tabla que contiene los valores representados. Esta opción solo está disponible cuando la distribución especificada es Riesgos proporcionales de Cox.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Plot Baseline Survival and Hazard( 1 )
		)
	)
);

```

### Plot Residual by Predicted

**Sintaxis:** obj << (fit[number] << Plot Residual By Predicted( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico para el conjunto de entrenamiento con valores residuales en el eje vertical y valores predichos en el eje horizontal. Si ha utilizado la validación, se muestra un gráfico para cada uno de los conjuntos de entrenamiento, validación y pruebas. Esta opción no está disponible cuando la distribución especificada es binomial, multinomial, logística ordinal o riesgos proporcionales de Cox.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Residual by Predicted( 1 ));

```

### Plot Residual by Predictor

**Sintaxis:** obj << (fit[number] << Plot Actual By Predictor( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico de los valores residuales en el eje vertical y los valores del predictor en el eje horizontal. Si ha utilizado la validación, se muestra un gráfico para cada uno de los conjuntos de entrenamiento, validación y pruebas. Esta opción no está disponible cuando la distribución especificada es binomial, multinomial, logística ordinal o riesgos proporcionales de Cox. Esta opción no está disponible para modelos que contengan un predictor que tenga el tipo de modelización Vector.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Residual by Predictor( 1 ));

```

### Precision Recall Curve

**Sintaxis:** obj << (fit[number] << Precision Recall Curve( state=0|1 ))

**Descripción:** Muestra u oculta el gráfico Curva de Precisión-Recuperación. Una curva de precisión-recuperación representa los valores de precisión frente a los valores de recuperación a distintos umbrales. Si ha utilizado la validación, se muestra un gráfico para cada conjunto de entrenamiento, validación y prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << Precision Recall Curve( 1 ));

```

### Profiler

**Sintaxis:** obj << (fit[number] << Profiler( state=0|1 ))

**Descripción:** Muestra u oculta el perfilador de predicción. Los predictores que tienen estimaciones de los parámetros de cero y que no están implicados en ningún término de interacción con coeficientes distintos de cero no aparecen en el perfilador.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Profiler( 1 )
		)
	)
);

```

### Publish Prediction Formula

**Sintaxis:** obj << (fit[number] << Publish Prediction Formula)

**Descripción:** Crea una fórmula de predicción y la publica como script de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Publish Prediction Formula);

```

### Quantile Profiler

**Sintaxis:** obj << (fit[number] << Quantile Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un perfilador que muestra la respuesta predicha como función de los predictores y el cuantil de la función de distribución acumulativa. El cuantil se denomina Probabilidad y se muestra en la celda situada más a la derecha. Esta opción no está disponible cuando la distribución especificada es binomial o regresión por cuantil.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Quantile Profiler( 1 )
		)
	)
);

```

### ROC Curve

**Sintaxis:** obj << (fit[number] << ROC Curve( state=0|1 ))

**Descripción:** Muestra u oculta la curva Característica operativa del receptor (ROC). Si ha utilizado la validación, se muestra una curva ROC para cada uno de los conjuntos de entrenamiento, validación y pruebas. Esta opción solo está disponible cuando la distribución especificada es binomial, multinomial o logística ordinal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << ROC Curve( 1 ));

```

### Relaunch Active Main Effects and Full Factorial

**Sintaxis:** obj << (fit[number] << Relaunch Active Main Effects and Full Factorial)

**Descripción:** Abre una ventana de inicio Ajuste del modelo en la que la lista Construir efectos del modelo contiene un conjunto de términos basado en los términos que tienen estimaciones de los parámetros distintas de cero. Estos términos son los efectos activos. Todas las demás especificaciones de la ventana de inicio son las que se utilizan en el análisis original. La lista Construir efectos del modelo se rellena con un factorial completo construido con los efectos activos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Full Factorial);

```

### Relaunch Active Main Effects and Response Surface Model

**Sintaxis:** obj << (fit[number] << Relaunch Active Main Effects and Response Surface Model)

**Descripción:** Abre una ventana de inicio Ajuste del modelo en la que la lista Construir efectos del modelo contiene un conjunto de términos basado en los términos que tienen estimaciones de los parámetros distintas de cero. Estos términos son los efectos activos. Todas las demás especificaciones de la ventana de inicio son las que se utilizan en el análisis original. La lista Construir efectos del modelo se rellena con un modelo de superficie de respuesta construido con los efectos activos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Response Surface Model);

```

### Relaunch Active Main Effects and Second Degree Factorial

**Sintaxis:** obj << (fit[number] << Relaunch Active Main Effects and Second Degree Factorial)

**Descripción:** Abre una ventana de inicio Ajuste del modelo en la que la lista Construir efectos del modelo contiene un conjunto de términos basado en los términos que tienen estimaciones de los parámetros distintas de cero. Estos términos son los efectos activos. Todas las demás especificaciones de la ventana de inicio son las que se utilizan en el análisis original. La lista Construir efectos del modelo se rellena con un factorial de segundo grado construido con los efectos activos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Second Degree Factorial);

```

### Relaunch Active Main Effects and Second Degree Polynomial

**Sintaxis:** obj << (fit[number] << Relaunch Active Main Effects and Second Degree Polynomial)

**Descripción:** Abre una ventana de inicio Ajuste del modelo en la que la lista Construir efectos del modelo contiene un conjunto de términos basado en los términos que tienen estimaciones de los parámetros distintas de cero. Estos términos son los efectos activos. Todas las demás especificaciones de la ventana de inicio son las que se utilizan en el análisis original. La lista Construir efectos del modelo se rellena con un polinomio de segundo grado construido con los efectos activos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Second Degree Polynomial);

```

### Relaunch Active Main Effects and Third Degree Factorial

**Sintaxis:** obj << (fit[number] << Relaunch Active Main Effects and Third Degree Factorial)

**Descripción:** Abre una ventana de inicio Ajuste del modelo en la que la lista Construir efectos del modelo contiene un conjunto de términos basado en los términos que tienen estimaciones de los parámetros distintas de cero. Estos términos son los efectos activos. Todas las demás especificaciones de la ventana de inicio son las que se utilizan en el análisis original. La lista Construir efectos del modelo se rellena con un factorial de tercer grado construido con los efectos activos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Third Degree Factorial);

```

### Relaunch Active Main Effects and Third Degree Polynomial

**Sintaxis:** obj << (fit[number] << Relaunch Active Main Effects and Third Degree Polynomial)

**Descripción:** Abre una ventana de inicio Ajuste del modelo en la que la lista Construir efectos del modelo contiene un conjunto de términos basado en los términos que tienen estimaciones de los parámetros distintas de cero. Estos términos son los efectos activos. Todas las demás especificaciones de la ventana de inicio son las que se utilizan en el análisis original. La lista Construir efectos del modelo se rellena con un polinomio de tercer grado construido con los efectos activos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Third Degree Polynomial);

```

### Relaunch with Active Effects

**Sintaxis:** obj << (fit[number] << Relaunch with Active Effects)

**Descripción:** Abre una ventana de inicio Ajuste del modelo en la que la lista Construir efectos del modelo contiene un conjunto de términos basado en los términos que tienen estimaciones de los parámetros distintas de cero. Estos términos son los efectos activos. Todas las demás especificaciones de la ventana de inicio son las que se utilizan en el análisis original. La lista Construir efectos del modelo solo se rellena con los efectos activos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch with Active Effects);

```

### Remove Fit

**Sintaxis:** obj << (fit[number] << Remove Fit)

**Descripción:** Quita el ajuste especificado del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
fm = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,
		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,
		:Runtime * :RstPulse, :Runtime * :MaxPulse, :RunPulse * :RstPulse,
		:RunPulse * :MaxPulse, :RstPulse * :MaxPulse
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
Wait( 2 );
fm << (fit[1] << Remove Fit);

```

### Reset Solution

**Sintaxis:** obj << (fit[number] << Reset Solution)

**Descripción:** Restablece el modelo de la trayectoria de solución al modelo original.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Set Solution ID( 122 ));
Wait( 1 );
fm << (Fit[1] << Reset Solution);

```

### Save Cox Snell Residual Formula

**Sintaxis:** obj << (fit[number] << Save Cox Snell Residual Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene una fórmula para los residuos de Cox-Snell.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Cox Snell Residual Formula);

```

### Save Distribution Formula

**Sintaxis:** obj << (fit[number] << Save Distribution Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene una fórmula para la función de distribución acumulativa.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (Fit[1] << Save Distribution Formula);

```

### Save Functional Prediction Formulas

**Sintaxis:** obj << (fit[number] << Save Functional Prediction Formulas)

**Descripción:** Guarda las columnas nuevas en la tabla de datos original. Se agrega una columna nueva para cada respuesta del componente principal FDE. Cada columna nueva contiene una fórmula de predicción para cada componente principal funcional. Se añade una columna final que contiene una fórmula de predicción del modelo que es una combinación lineal de las fórmulas de predicción y las columnas de funciones propias de la plataforma Explorador de datos funcionales. Esta opción solo está disponible cuando las columnas de respuesta contienen la propiedad de columna Núm. de FPC FDE.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Simple Linear Functional Data.jmp" );
fobj = Functional Data Explorer(
	Y( :Y ),
	X( :T ),
	ID( :ID ),
	Z( :X1, :X2, :X3 ),
	B Splines( 1 )
);
dtsum = (Report( fobj )["Function Summaries"] << get scriptable object) << Save Summaries;
fobj << close window;
fm = dtsum << Fit Model(
	Y( :Y FPC 1, :Y FPC 2 ),
	Effects( :X1, :X2, :X3, :X1 * :X2, :X1 * :X3, :X2 * :X3 ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run(
		Fit(
			Estimation Method( "Best Subset" ),
			Validation Method( "AICc" ),
			Enforce Heredity( 1 )
		)
	)
);
(Report( fm[1] )["Generalized Regression for Y FPC 1"][
"Normal Best Subset with AICc Validation"] << get scriptable object) <<
Save Functional Prediction Formulas;

```

### Save Linear Predictor

**Sintaxis:** obj << (fit[number] << Save Linear Predictor)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene una fórmula para el producto de la matriz de diseño y el vector de estimaciones de los parámetros.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
fm = dt << Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Save Linear Predictor);

```

### Save Martingale Residual Formula

**Sintaxis:** obj << (fit[number] << Save Martingale Residual Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene una fórmula para los residuos de Martingale.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Martingale Residual Formula);

```

### Save Prediction Formula

**Sintaxis:** obj << (fit[number] << Save Prediction Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene la fórmula de predicción, expresada en términos de los valores de datos observados (no estandarizados). La fórmula de predicción no contiene los términos puestos a cero.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Prediction Formula);

```

### Save Resample Formulas

**Sintaxis:** obj << (fit[number] << Save Resample Formulas)

**Descripción:** Guarda varias columnas de fórmulas en la tabla de datos original. Un grupo de columnas denominado Muestras de SVEM contiene una columna de fórmulas por modelo individual. Estas columnas se guardan como columnas ocultas. La siguiente columna es una fórmula de predicción para el modelo de conjunto autovalidado. La siguiente columna contiene la fórmula del error estándar para el modelo de conjunto autovalidado. La columna final contiene la predicción de la mediana del modelo de conjunto autovalidado para cada fila.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( SVEM Forward Selection( Samples( 100 ) ) ) ) )
);
fm << (fit[1] << Save Resample Formulas);

```

### Save Residual Formula

**Sintaxis:** obj << (fit[number] << Save Residual Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene una fórmula para los residuos, expresada en la forma Y menos la fórmula de predicción. La fórmula residual no contiene términos puestos a cero.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Residual Formula);

```

### Save Simulation Formula

**Sintaxis:** obj << (fit[number] << Save Simulation Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene una fórmula que genera valores simulados utilizando los parámetros estimados para el modelo que ajuste. Esta columna se puede utilizar en la utilidad Simular como columna que activar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (fit[1] << Save Simulation Formula);

```

### Save Survival Formula

**Sintaxis:** obj << (fit[number] << Save Survival Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene una fórmula para la probabilidad de supervivencia en el momento observado. La función de supervivencia es igual a 1 menos la función de distribución acumulativa.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Survival Formula);

```

### Save Validation Column

**Sintaxis:** obj << (fit[number] << Save Validation Column)

**Descripción:** Guarda una columna nueva en la tabla de datos original. La columna nueva describe la asignación de filas a plegamientos. Para KFold, la columna muestra el plegamiento al que se asignó la fila. Para Retención, cada fila se identifica como perteneciente al conjunto de entrenamiento o validación. Para dejar uno fuera, el valor de la fila indica el orden en el que se omite.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (fit[1] << Save Validation Column);

```

### Save Variance Formula

**Sintaxis:** obj << (fit[number] << Save Variance Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene una fórmula para la varianza de la predicción.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
fm = dt << Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
fm << (fit[1] << Save Variance Formula);

```

### Select Nonzero Terms

**Sintaxis:** obj << (fit[number] << Select Nonzero Terms)

**Descripción:** Resalta los términos con coeficientes distintos de cero en el informe. También selecciona todas las columnas asociadas en la tabla de datos. Esta opción no está disponible cuando el método de estimación especificado es regresión Ridge.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Select Nonzero Terms);

```

### Select Zeroed Terms

**Sintaxis:** obj << (fit[number] << Select Zeroed Terms)

**Descripción:** Resalta los términos con coeficientes cero en el informe. También selecciona todas las columnas asociadas en la tabla de datos. Esta opción no está disponible cuando el método de estimación especificado es regresión Ridge.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Select Zeroed Terms);

```

### Set Solution ID

**Sintaxis:** obj << (fit[number] << Set Solution ID( number ))

**Descripción:** Cambia el modelo especificado a un modelo distinto en la trayectoria de solución.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Set Solution ID( 122 ));

```

### Show Prediction Expression

**Sintaxis:** obj << (fit[number] << Show Prediction Expression( state=0|1 ))

**Descripción:** Muestra u oculta el informe Expresión de predicción que contiene la ecuación para el modelo estimado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Show Prediction Expression);

```

### Show Solution Path Summary

**Sintaxis:** obj << (fit[number] << Show Solution Path Summary( state=0|1 ))

**Descripción:** Muestra u oculta un informe que contiene una tabla de estadísticos de ajuste para los puntos de los gráficos Trayectoria de solución y Trayectoria de validación en los que cambia el conjunto activo. Los estadísticos disponibles dependen del método de estimación. Esta opción no está disponible para los modelos de máxima verosimilitud o regresión Ridge.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Show Solution Path Summary( 1 ));

```

### Solution Path

**Sintaxis:** obj << (fit[number] << Solution Path( state=0|1 ))

**Descripción:** Muestra u oculta los gráficos de la trayectoria de solución y la trayectoria de validación. Esta opción no está disponible para los modelos de máxima verosimilitud. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Solution Path( 0 ));

```

### Std Error of Predicted

**Sintaxis:** obj << (fit[number] << Std Error of Predicted)

**Descripción:** Guarda una columna nueva en la tabla de datos original. La columna nueva contiene los errores estándar de la respuesta media predicha.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Std Error of Predicted);

```

### Std Error of Predicted Formula

**Sintaxis:** obj << (fit[number] << Std Error of Predicted Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene una fórmula para los errores estándar de la respuesta media predicha.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit( Estimation Method( Lasso( Adaptive ) ), Validation Method( Validation Column ) )
	)
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Std Error of Predicted Formula);

```

### Step Backward

**Sintaxis:** obj << (fit[number] << Step Backward)

**Descripción:** Va al siguiente modelo más pequeño en la trayectoria de solución.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Step Backward);
Wait( 1 );
fm << (Fit[1] << Step Backward);

```

### Step Forward

**Sintaxis:** obj << (fit[number] << Step Forward)

**Descripción:** Va al siguiente modelo mayor en la trayectoria de solución.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Step Forward);
Wait( 1 );
fm << (Fit[1] << Step Forward);

```

### Survival Profiler

**Sintaxis:** obj << (fit[number] << Survival Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un perfilador que muestra la función de supervivencia como función de los predictores y la respuesta. La respuesta se muestra en la celda situada más a la derecha. Esta opción solo está disponible cuando la distribución especificada es normal, exponencial, Weibull, log-normal o riesgos proporcionales de Cox.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Survival Profiler( 1 ));

```

## Generalized Regression

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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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

### By

**Sintaxis:** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
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

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Data Table Window;

```

### Fit

**Sintaxis:** obj << Fit( Estimation Method( Emethod( estim_options ) ), Validation Method( Vmethod( valid_options ) ), <Early Stopping>, <Enforce Heredity>, <Force( vector )> )

**Descripción:** Especifica el Método de estimación y las opciones, el Método de validación y las opciones, así como otras opciones de ajuste para su modelo. Las opciones de estimación disponibles varían en función del método de estimación especificado. Las opciones de validación están disponibles para los métodos KFold y Retención. Las demás opciones de ajuste controlan la detención temprana, reforzando la herencia de términos y forzando términos en el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	SendToReport( Dispatch( {}, "Model Launch", OutlineBox, Close( 0 ) ) )
);

```

### Fit Generalized

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Generalized Regression" ) )

**Descripción:** Ajusta modelos lineales generalizados usando técnicas de regresión penalizada, que ayudan a automatizar la selección de variables de forma que se evite el sobreajuste. Algunas de las técnicas de regresión penalizada son el lasso, el lasso adaptativo, la red elástica, la red elástica adaptativa y la regresión ridge. Las distribuciones de respuesta pueden alojar datos continuos, categóricos, de conteo y de respuesta tiempo hasta suceso. Esta es la personalidad recomendada para la mayoría de configuraciones de regresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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

### Get X Matrix

**Sintaxis:** obj << Get X Matrix

**Descripción:** Devuelve la matriz de diseño (también denominada matriz X).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
As Table( fm << Get X Matrix );

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

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Muestra la ventana de inicio Ajuste del modelo completada para el análisis actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Model Dialog;

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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Coding Table

**Sintaxis:** obj << Save Coding Table

**Descripción:** Crea una tabla de datos nueva que contiene la codificación JMP para todos los parámetros del modelo. La última columna muestra los valores de la variable de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run
);
fm << Save Coding Table;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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

### Set Random Seed

**Sintaxis:** obj = Fit Model(...Run( Set Random Seed( number ) )...)

**Descripción:** Establece la semilla para el proceso de aleatorización que se utiliza para la validación KFold y Retención.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run(
		Set Random Seed( 1111 ),
		Fit( Estimation Method( "Lasso" ), Validation Method( "Holdback", 0.3 ) )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
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

**Sintaxis:** obj = Fit Generalized(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Model Dialog

### Cauchy Fit

**Sintaxis:** obj = Fit Model(...Personality( "Response Screening" ), Cauchy Fit( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Asume que los errores tienen una distribución de Cauchy. Una distribución de Cauchy tiene colas más gruesas que la distribución normal, lo que se traduce en un énfasis reducido en los valores atípicos. Solo está disponible para la personalidad Cribado de respuestas. Este mensaje corresponde a la opción Ajuste muy robusto en la ventana de inicio Ajuste del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Fit Model(
	Effects( :Process, :Site, :Process * :Site ),
	Personality( "Response Screening" ),
	Y( 8 :: 394 ),
	Cauchy Fit( 1 ),
	Run
);

```

### Censor Code

**Sintaxis:** obj = Fit Model(...Censor Code( string )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Identifica el valor de la columna Censura que indica las observaciones censuradas a la derecha.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Censor Code( "1" ),
	Run( Likelihood Ratio Tests( 1 ), Likelihood Confidence Intervals( 1 ) )
);

```

### Center Polynomials

**Sintaxis:** obj = Fit Model(...Center Polynomials( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Centra los efectos de los modelos polinomiales. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SILICA * :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

### Centering

**Sintaxis:** obj = Fit Model(...Personality( "Partial Least Squares" ), Centering( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Centra todas las variables de respuesta y efectos del modelo restando la media de cada columna. Solo está disponible para la personalidad Mínimos cuadrados parciales. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Centering( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

### Choose High Target

**Sintaxis:** obj = Fit Model(...Personality( "Nominal Logistic" ), Choose High Target( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que el valor mayor de una respuesta nominal binaria se utiliza como respuesta objetivo. Solo está disponible para una columna de respuestas binarias en la personalidad Logística nominal. Este mensaje corresponde a la opción Nivel objetivo de la ventana de inicio Ajuste del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Choose High Target( 1 ),
	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) )
);

```

### Convergence Limit

**Sintaxis:** obj = Fit Model(...Convergence Limit( number=0.00000001 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el límite de convergencia para el ajuste del modelo. Si su modelo no converge fácilmente, puede que sea necesario aumentar el límite de convergencia. De forma predeterminada, el límite de convergencia es 0,00000001.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Convergence Limit( 0.0001 ),
	Run
);

```

### Create SAS Job

**Sintaxis:** obj << Create SAS Job

**Descripción:** Guarda el código de SAS para la especificación del modelo actual en una ventana de programa de SAS.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Create SAS Job;

```

### Dispose Reports

**Sintaxis:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

**Descripción:** Especifica que no se muestra ningún informe de modelo individual y que se han eliminado de la memoria tras el ajuste. Cuando hay muchos miles de respuestas, esta opción reduce el tiempo de cálculo y ahorra espacio en la memoria. Utilícela con la opción Resultados en tablas de datos para recopilar los resultados de los modelos ajustados.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

### Effects

**Sintaxis:** obj = Run(...Effects( col, col, ... )...);

obj = Run(...Effects( macro( col, col, ... ) )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Asigna términos explicativos a la función Efectos. Puede especificar los efectos uno a uno o utilizando las macros disponibles en la ventana de inicio de Ajuste del modelo. Encontrará algunos ejemplos a continuación.

**Cúbico de Scheffé**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Scheffe Cubic( :height, :weight ) ) );

```

**Cúbico parcial**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Partial Cubic( :height, :weight ) ) );

```

**Efectos**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( :sex, :age, :weight ) );

```

**Factorial al grado**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Set Degree( 2 ),
	Effects( Factorial to Degree( :sex, :age, :weight ) )
);

```

**Factorial completo**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Full Factorial( :sex, :age, :weight ) ) );

```

**Factorial ordenado**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Factorial Sorted( :sex, :age, :weight ) ) );

```

**Polinomio de grado**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Set Degree( 5 ),
	Effects( Polynomial to Degree( :height, :weight ) )
);

```

**Regresores agrupados**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Grouped Regressors( :height, :weight ) ) );

```

**Superficie de respuesta**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Response Surface( :weight, :age ) ) );

```

**Superficie de respuesta de mezcla**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Effects( Mixture Response Surface( :weight, :age ) )
);

```

### Emphasis

**Sintaxis:** obj = Fit Model(...Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage" | "Effect Screening" | "Minimal Report" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica los tipos de gráficos y estadísticos que aparecen en el informe predeterminado para la personalidad de tipo Mínimos cuadrados estándar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" )
);
obj << Run Model;

```

### Error Specification

**Sintaxis:** obj = Fit Model(...Personality("Standard Least Squares" ), Error Specification( "Default Estimate" | "Pure Error" | "Specified" )...)

**Descripción:** Especifica la varianza del error y los grados de libertad del error que se utilizan para los errores estándar y las pruebas en el informe Ajuste por mínimos cuadrados. Esta opción solo está disponible para la personalidad de tipo Mínimos cuadrados estándar cuando el modelo no contiene efectos aleatorios.

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Error Specification( "Pure Error" ),
	Run
);

```

### Estimate Only Variance Components

**Sintaxis:** obj = Fit Model(...Personality( "Standard Least Squares" ), Estimate Only Variance Components( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Ejecuta un análisis REML utilizando el modelo especificado y muestra un informe que contiene únicamente los componentes de varianza del modelo. Solo está disponible para la personalidad de tipo Mínimos cuadrados estándar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);

```

### Firth Bias-Adjusted Estimates

**Sintaxis:** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que se utiliza el método ajustado por sesgo de Firth para ajustar el modelo. Solo está disponible para la personalidad Modelo lineal generalizado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

### Fit Separately

**Sintaxis:** obj = Fit Model(...Personality( "Standard Least Squares" ), Fit Separately( state=0|1 )...)

**Descripción:** Ajusta un modelo independiente para cada variable Y utilizando todas las filas no faltantes. Esta opción solo está disponible en la personalidad de tipo mínimos cuadrados estándar con modelos que tienen múltiples variables Y y no contienen efectos aleatorios.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Fit Separately( 1 ),
	Run
);

```

### GLM Distribution

**Sintaxis:** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica una distribución de probabilidad para la variable de respuesta. Disponible solo para la personalidad Modelo lineal generalizado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);

```

### Generalized Distribution

**Sintaxis:** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( distribution name )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica la distribución de la probabilidad de respuesta. Solo está disponible para la personalidad Regresión generalizada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Fit Model(
	Y( :height ),
	Effects( :weight, :sex ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Profiler( 1 )
		)
	)
);

```

### ID

**Sintaxis:** obj = Run(...<ID( column )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Columna que identifica la matriz de relaciones genéticas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

### Imputation Method

**Sintaxis:** obj = Fit Model(...Personality( "Partial Least Squares" ), Imputation Method( "Mean" | "EM" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el método para la imputación. De forma predeterminada, se utiliza el método Media. Solo está disponible para la personalidad Mínimos cuadrados parciales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

### Impute Missing Data

**Sintaxis:** obj = Fit Model(...Personality( "Partial Least Squares" ), Impute Missing Data( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Sustituye los valores de datos faltantes en las columnas Y o X con valores no faltantes utilizando el método de imputación especificado. Solo está disponible para la personalidad Mínimos cuadrados parciales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

### Informative Missing

**Sintaxis:** obj = Fit Model(...Informative Missing( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Habilita la codificación e imputación de valores faltantes. Cuando no se selecciona esta opción, se ignoran las filas con valores faltantes.



En el caso de las variables continuas, los valores faltantes se sustituyen por la media de la variable. Además, se crea una variable indicadora de valores faltantes y se incluye en el modelo.



En el caso de las variables categóricas, no se imputan los valores faltantes, pero se tratan como si fueran otro nivel de la variable en el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[3] = dt:age[2] = .;
dt << Fit Model(
	Y( :weight ),
	Effects( :height, :age ),
	Informative Missing( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

### Keep dialog open

**Sintaxis:** obj << Keep dialog open( state=0|1 )

**Descripción:** Especifica si la ventana de inicio de Ajuste del modelo permanece abierta o se cierra después de ejecutar el modelo especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Keep dialog open( 1 ),
	Run
);

```

### Link Function

**Sintaxis:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica la función de enlace para el modelo. Solo está disponible para la personalidad Modelo lineal generalizado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

### Max Iterations

**Sintaxis:** obj = Fit Model(...Personality( "Partial Least Squares" ), Max Iterations( number=1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el número máximo de iteraciones que debe utilizar el algoritmo. El algoritmo finaliza si la diferencia máxima entre las estimaciones actuales y anteriores de los valores faltantes están delimitadas por 10^-8. Solo está disponible para la personalidad Mínimos cuadrados parciales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Max Iterations( 5 ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

### Maximum Iterations

**Sintaxis:** obj = Fit Model(...Maximum Iterations( number=100 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el número máximo de iteraciones que se utilizan en el ajuste del modelo. De forma predeterminada, el número máximo de iteraciones es 100.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Maximum Iterations( 150 ),
	Run
);

```

### Method

**Sintaxis:** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el método que se utiliza para ajustar los modelos mixtos en la personalidad de tipo mínimos cuadrados estándar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

### No Intercept

**Sintaxis:** obj = Fit Model(...No Intercept( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece la constante a cero para el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	No Intercept( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

### NoBounds

**Sintaxis:** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Elimina los límites de las estimaciones de varianza. Cuando esta opción está desactivada, se establece el límite inferior de las estimaciones de varianza con el valor cero. Solo está disponible para la personalidad de tipo mínimos cuadrados estándar. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 0 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

### Nominal Coding

**Sintaxis:** obj = Fit Model(...Nominal Coding( "Average Level" | "Last Level" )...)

**Descripción:** Especifica si la codificación de las diferencias de las estimaciones de los efectos nominales se realiza desde la media de todos los niveles (la opción predeterminada) o desde el último nivel.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tablet Production.jmp" );
dt << Fit Model(
	Y( :Disso ),
	Effects(
		:Mill Time, :Screen Size, :Blend Time, :Blend Speed, :Compressor, :Coating Viscosity,
		:Spray Rate
	),
	Personality( "Standard Least Squares" ),
	Nominal Coding( "Last Level" ),
	Emphasis( "Effect Leverage" ),
	Run
);

```

### Overdispersion Tests and Intervals

**Sintaxis:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que debe incluirse un parámetro de sobredispersión en el modelo. Solo está disponible para la personalidad Modelo lineal generalizado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

### Personality

**Sintaxis:** obj = Fit Model(...Personality( "Standard Least Sqaures" | "Stepwise" | "Generalized Regression" | "Mixed Model" | "Generalized Linear Mixed Model" | "Manova" | "Loglinear Variance" | "Nominal Logistic" | "Ordinal Logistic" | "Proportional Hazard" | "Parametric Survival" | "Generalized Linear Model" | "Partial Least Squares" | "Response Screening" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el tipo de análisis que se utiliza para el ajuste del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Run Model;

```

### Power Link Parameter

**Sintaxis:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el parámetro para la función de enlace de la potencia. Solo está disponible cuando se especifica Potencia como función de enlace en la personalidad Modelo lineal generalizado. "1" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Power" ),
	Power Link Parameter( 0.5 ),
	Run
);

```

### Quantile

**Sintaxis:** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( "Quantile Regression" ), Quantile( q=0.5 )...)

**Descripción:** Especifica el cuantil de la respuesta que se va a modelar. Solo está disponible para la personalidad Regresión generalizada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Fit Model(
	Y( :height ),
	Effects( :weight, :sex ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Quantile Regression" ),
	Quantile( 0.75 ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Profiler( 1 )
		)
	)
);

```

### Results in Data Tables

**Sintaxis:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

**Descripción:** Guarda los resultados del modelo individual de muchas respuestas en tablas de datos. El contenido y el número de tablas de datos de salida dependen del modelo que se esté ajustando.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

### Robust Fit

**Sintaxis:** obj = Fit Model(...Personality( "Response Screening" ), Robust Fit( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Utiliza la estimación (de Huber) robusta para reducir el peso de los valores atípicos. Si no hay valores atípicos, estas estimaciones son cercanas a las estimaciones por mínimos cuadrados. Solo está disponible para la personalidad Cribado de respuestas. Este mensaje corresponde a la opción Ajuste robusto de la ventana de inicio Ajuste del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Fit Model(
	Effects( :Process, :Site, :Process * :Site ),
	Personality( "Response Screening" ),
	Y( 8 :: 394 ),
	Robust Fit( 1 ),
	Run
);

```

### Run

**Sintaxis:** obj = Fit Model(...Run( <options> )...);

obj << Run( <options> )

**Descripción:** Ejecuta el modelo especificado en la ventana de inicio de Ajuste del modelo y, a continuación, cierra esa ventana.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Run;

```

### Run Model

**Sintaxis:** obj << Run Model

**Descripción:** Ejecuta el modelo especificado en la ventana de inicio de Ajuste del modelo y mantiene abierta esa ventana.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Run Model;

```

### Save to Data Table

**Sintaxis:** obj << Save to Data Table

**Descripción:** Guarda el modelo como JSL en la tabla de datos actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Save to DataTable;

```

### Save to Script Window

**Sintaxis:** obj << Save to Script Window

**Descripción:** Guarda el modelo como JSL en la ventana de scripts.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Save to Script Window;

```

### Scaling

**Sintaxis:** obj = Fit Model(...Personality( "Partial Least Squares" ), Scaling( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Escala todas las variables de respuesta y efectos del modelo dividiendo cada columna por su desviación estándar. Solo está disponible para la personalidad Mínimos cuadrados parciales. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Scaling( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

### Set Alpha Level

**Sintaxis:** obj = Fit Model(...Set Alpha Level( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el nivel alfa para los intervalos de confianza en los informes del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Set Alpha Level( 0.01 ),
	Run
);

```

### Standardize X

**Sintaxis:** obj = Fit Model(...Personality( "Partial Least Squares" ), Standardize X( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Centra y escala todas las columnas que se utilizan en la construcción de efectos del modelo. Si no se selecciona esta opción, los efectos de orden superior se construyen con las columnas de la tabla de datos original. A continuación, se centra o escala cada efecto de orden superior, en función de las opciones de centrado y escalado seleccionadas. Tenga en cuenta que Estandarizar X no centra ni escala variables Y. Solo está disponible para la personalidad Mínimos cuadrados parciales. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Standardize X( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

### Subgroup

**Sintaxis:** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica una o más variables de subgrupo. Cuando se define una variable de subgrupo, se realizan ajustes adicionales para cada categoría de la variable de subgrupo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Fit Model(
	Y( :age ),
	Effects( :sex, :type ),
	Subgroup( :country, :marital status ),
	Personality( "Response Screening" ),
	Subgroup Twoway( 1 ),
	Run
);

```

### Subgroup Twoway

**Sintaxis:** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) ), Subgroup Twoway( state=0|1 )...)

**Descripción:** Ajusta todas las combinaciones de subgrupos bidireccionales. Esta opción solo está disponible cuando hay al menos una variable de subgrupo definida en la personalidad Cribado de respuestas.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Fit Model(
	Y( :age ),
	Effects( :sex, :type ),
	Subgroup( :country, :marital status ),
	Personality( "Response Screening" ),
	Subgroup Twoway( 1 ),
	Run
);

```

### Suppress Coding

**Sintaxis:** obj = Fit Model(...Suppress Coding( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Suprime cualquier propiedad de la columna Codificación para que las estimaciones hagan referencia a la escala original. La propiedad de columna Codificación le permite comparar más fácilmente las estimaciones y contribuye a que las pruebas de efectos de orden inferior tengan sentido. No se recomienda usar la opción Suprimir codificación a menos que la necesite.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
obj = dt << Fit Model(
	Y( :Stretch ),
	Effects( :Silica, :Sulfur, :Silane ),
	Suppress Coding( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

### Suppress Reports

**Sintaxis:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

**Descripción:** Especifica que se han ocultado los informes de modelos individuales. Cuando hay miles de respuestas, esta opción reduce el tiempo de cálculo. Los objetos de ajuste y algunos elementos de menú siguen estando disponibles. Utilice la opción Resultados en tablas de datos para recopilar los resultados de los informes de modelos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

### Suppress Warning for Missing Effects

**Sintaxis:** obj = Fit Model(...Suppress Warning for Missing Effects( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Suprime las alertas de advertencia de que los efectos de orden inferior implícitos en los efectos de orden superior no están en el modelo. Esta opción es útil cuando se experimenta con muchos modelos de subconjuntos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
obj = dt << Fit Model(
	Y( :Stretch ),
	Effects( :Silica, :Sulfur * :Silane ),
	Suppress Warning for Missing Effects( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

### Switch

**Sintaxis:** obj = Fit Model(...Switch( column(s) )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica las columnas que se pueden cambiar, de una en una, en el modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

### Target Level

**Sintaxis:** obj = Fit Model(...Target Level( level )...)

**Descripción:** Especifica el nivel cuya probabilidad quiera modelar. El valor predeterminado es el mayor de los dos niveles según el orden de los niveles. Solo está disponible en determinadas personalidades y cuando la variable Y es binaria y tiene un tipo de modelización nominal.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Target Level( "Cured" ),
	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) )
);

```

