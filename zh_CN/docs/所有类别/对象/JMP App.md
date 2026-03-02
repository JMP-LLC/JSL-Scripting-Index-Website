# JMP App



## 项消息

### Combine Windows

**语法:** obj &lt;&lt; Combine Windows( {list of reports or data tables}, {...} )

**说明:** 将平台报表或数据表的给定列表组合到新模块中。应用程序当前不能运行或处于编辑状态。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));biv = Bivariate( Y( :weight ), X( :height ) );app = JMP App();app << Set Name( "Instant App" );app << Combine Windows( {dist << Report, biv << Report} );(app << Get Modules)[1] << Set Window Title( "My Report" );app << Run;

```

### Debug

**语法:** obj &lt;&lt; Debug

**说明:** 在调试器中运行应用程序。

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Launcher with Report.jmpappsource" );app << Debug;

```

### Edit

**语法:** obj &lt;&lt; Edit

**说明:** 在生成器中编辑应用程序或仪表板。

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;

```

### Get Modules

**语法:** list = obj &lt;&lt; Get Modules

**说明:** 获取在应用程序中定义的模块列表。

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit Application;app << Get Modules();

```

### Get Namespace

**语法:** obj &lt;&lt; Get Namespace

**说明:** 获取模块实例的命名空间。

```jsl

app = JMP App();(app << Get Namespace) << Show Contents;

```

### Get Windows

**语法:** obj &lt;&lt; Get Windows

**说明:** 返回创建为应用程序模块实例的打开窗口的列表。请注意，将不包括使用 New Window() 或其他函数由应用程序脚本创建的其他窗口。

**JMP添加的版本:** 14

**示例 1**

```jsl

app = JMP App();Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Historical.jmp" );app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run;app << Get Windows();

```

**示例 2**

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Graph Launcher.jmpappsource" );app << Run;launcher = (app << Get Windows())[1];launcher[Button Box( 1 )] << Click;launcher[Button Box( 1 )] << Click;app << Get Windows();

```

### Open File

**语法:** obj &lt;&lt; Open File( &lt;path&gt; )

**说明:** 从指定文件加载应用程序。

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );box = app << Edit Application;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 重新启动“仪表板”或“应用程序”，以便创建“应用程序”正在运行的新副本。

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Relaunch Analysis;

```

### Run

**语法:** obj &lt;&lt; Run

**说明:** 运行应用程序或仪表板。

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Save a New Window() script

```jsl

app = Include( "$SAMPLE_DASHBOARDS/Six Quality Graphs Dashboard.jmpappsource" );app << Run;app << Save Script for All Objects;

```

### Save Script to Add-In

**语法:** obj &lt;&lt; Save Script to Add-In

**说明:** 创建生成该分析的脚本 (JSL) 并将它加载到插件生成器中

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << "Save Script to Add-In";

```

### Save Script to Data Table

**语法:** app &lt;&lt; Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Data Table;

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Journal;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Script Window;

```

