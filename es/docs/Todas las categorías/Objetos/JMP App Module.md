# JMP App Module



## Mensajes del elemento

### Create Instance

**Sintaxis:** instance = obj &lt;&lt; Create Instance( &lt;parameters&gt; )

**Descripción:** Crea una instancia del módulo.  Los parámetros se pasan a la función OnModuleLoad() definida en el script del módulo.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Create Instance;

```

### Get Application

**Sintaxis:** app = obj &lt;&lt; Get Application

**Descripción:** Obtiene la aplicación a la que pertenece el módulo.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Get Application;

```

