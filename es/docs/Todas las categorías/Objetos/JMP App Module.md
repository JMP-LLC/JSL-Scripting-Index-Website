# JMP App Module



## Mensajes del elemento

### Create Instance

**Sintaxis:** instance = obj << Create Instance( <parameters> )

**Descripción:** Crea una instancia del módulo.  Los parámetros se pasan a la función OnModuleLoad() definida en el script del módulo.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Create Instance;

```

### Get Application

**Sintaxis:** app = obj << Get Application

**Descripción:** Obtiene la aplicación a la que pertenece el módulo.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Get Application;

```

