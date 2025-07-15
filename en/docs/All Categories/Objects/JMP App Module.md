# JMP App Module



## Item Messages

### Create Instance

**Syntax:** instance = obj &lt;&lt; Create Instance( &lt;parameters&gt; )

**Description:** Create an instance of the module.  The parameters are passed to the OnModuleLoad() function defined in the module script.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Create Instance;

```

### Get Application

**Syntax:** app = obj &lt;&lt; Get Application

**Description:** Returns the application that owns the module.

```jsl

Names Default To Here( 1 );
app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
modules[1] << Get Application;

```

