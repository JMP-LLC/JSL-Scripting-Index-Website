# JMP App Module



## 项消息

### Create Instance

**语法:** instance = obj &lt;&lt; Create Instance( &lt;parameters&gt; )

**说明:** 创建模块的实例。参数传递到模块脚本中定义的 OnModuleLoad() 函数。

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run Application;modules = app << Get Modules;modules[1] << Create Instance;

```

### Get Application

**语法:** app = obj &lt;&lt; Get Application

**说明:** 返回拥有模块的应用程序。

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run Application;modules = app << Get Modules;modules[1] << Get Application;

```

