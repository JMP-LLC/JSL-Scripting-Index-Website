# JMP App Module



### Create Instance

**Syntax:** instance = obj << Create Instance( <parameters> )

**Description:** Create an instance of the module.  The parameters are passed to the OnModuleLoad() function defined in the module script.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Create Instance;

```

### Get Application

**Syntax:** app = obj << Get Application

**Description:** Returns the application that owns the module.

```js

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Get Application;

```

