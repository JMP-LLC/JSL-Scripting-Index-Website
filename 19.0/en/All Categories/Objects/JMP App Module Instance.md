# JMP App Module Instance



## Item Messages

### Create Objects

**Syntax:** obj &lt;&lt; Create Objects

**Description:** Create the objects of the module instance.  This can be called only within the script for a JMP App Module.

```jsl

// This command is only valid within a JMP App Module Script

```

### Get Box

**Syntax:** obj &lt;&lt; Get Box

**Description:** Get the display box for the module instance.

```jsl

app = JMP App();
app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );
app << Run Application;
modules = app << Get Modules;
inst = modules[1] << Create Instance;
inst << Get Box;

```

### Get Namespace

**Syntax:** obj &lt;&lt; Get Namespace

**Description:** Get the namespace for the module instance.

```jsl

app = JMP App();
(app << Get Namespace) << Show Contents;

```

### Get User Data

**Syntax:** obj &lt;&lt; Get User Data

**Description:** Returns the user data associated with the module instance.

```jsl

// This command is only valid within a JMP App Module Script

```

### Set User Data

**Syntax:** inst &lt;&lt; Set User Data(expr)

**Description:** Stores a JSL value in the JMP app module instance; the value could be a number, string, list, associative array, or other JSL type.

```jsl

// This command is only valid within a JMP App Module Script

```

