# JMP App



## Mensajes del elemento

### Combine Windows

**Sintaxis:** obj << Combine Windows( {list of reports or data tables}, {...} )

**Descripción:** Combina la lista indicada de informes de plataforma o de tablas de datos en un módulo nuevo. La aplicación no debe estar ejecutándose ni en estado de edición simultáneamente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
biv = Bivariate( Y( :weight ), X( :height ) );
app = JMP App();
app << Set Name( "Instant App" );
app << Combine Windows( {dist << Report, biv << Report} );
(app << Get Modules)[1] << Set Window Title( "My Report" );
app << Run;

```

### Debug

**Sintaxis:** obj << Debug

**Descripción:** Ejecuta la aplicación en el depurador.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Launcher with Report.jmpappsource" );
app << Debug;

```

### Edit

**Sintaxis:** obj << Edit

**Descripción:** Edita la aplicación o el panel de información en el constructor.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;

```

### Get Modules

**Sintaxis:** list = obj << Get Modules

**Descripción:** Obtiene una lista de los módulos definidos en la aplicación.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit Application;
app << Get Modules();

```

### Get Namespace

**Sintaxis:** obj << Get Namespace

**Descripción:** Obtiene el espacio de nombres para la instancia del módulo.

```jsl

Names Default To Here( 1 );
app = JMP App();
(app << Get Namespace) << Show Contents;

```

### Get Windows

**Sintaxis:** obj << Get Windows

**Descripción:** Devuelve una lista de ventanas abiertas creada como instancias de módulos de aplicación. Tenga en cuenta que no se incluirán otras ventanas creadas por scripts de aplicación, mediante New Window() u otras funciones.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
app = JMP App();
Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Historical.jmp" );
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run;
app << Get Windows();

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Graph Launcher.jmpappsource" );
app << Run;
launcher = (app << Get Windows())[1];
launcher[Button Box( 1 )] << Click;
launcher[Button Box( 1 )] << Click;
app << Get Windows();

```

### Open File

**Sintaxis:** obj << Open File( <path> )

**Descripción:** Carga la aplicación desde el archivo indicado.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
box = app << Edit Application;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Reinicia el Panel de información o la aplicación, creando una nueva copia en ejecución de la aplicación.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Relaunch Analysis;

```

### Run

**Sintaxis:** obj << Run

**Descripción:** Ejecuta la aplicación o el panel de información.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Save a New Window() script

```jsl

Names Default To Here( 1 );
app = Include( "$SAMPLE_DASHBOARDS/Six Quality Graphs Dashboard.jmpappsource" );
app << Run;
app << Save Script for All Objects;

```

### Save Script to Add-In

**Sintaxis:** obj << Save Script to Add-In

**Descripción:** Crea un script (JSL) para producir este análisis y lo carga en el Constructor de complementos

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << "Save Script to Add-In";

```

### Save Script to Data Table

**Sintaxis:** app << Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Save Script to Data Table;

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Save Script to Journal;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Edit;
app << Save Script to Script Window;

```

