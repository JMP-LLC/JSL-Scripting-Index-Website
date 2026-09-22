# Python Integration



## 函数

### ALL_HOME

**语法:** jmp.ALL_HOME

**说明:** 对应于 JSL 的 $ALL_HOME 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.ALL_HOME)

```

### BUILTIN_SCRIPTS

**语法:** jmp.BUILTIN_SCRIPTS

**说明:** 对应于 JSL 的 $BUILTIN_SCRIPTS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.BUILTIN_SCRIPTS)

```

### DESKTOP

**语法:** jmp.DESKTOP

**说明:** 对应于 JSL 的 $DESKTOP 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.DESKTOP)

```

### DOCUMENTS

**语法:** jmp.DOCUMENTS

**说明:** 对应于 JSL 的 $DOCUMENTS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.DOCUMENTS)

```

### DOWNLOADS

**语法:** jmp.DOWNLOADS

**说明:** 对应于 JSL 的 $DOWNLOADS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.DOWNLOADS)

```

### DataType

**语法:** jmp.DataType.enum_value

**说明:** jmp.DataType 是表示 JMP 列的数据类型的枚举。这些与 jmp.DataTable.new_column() 函数一起使用，以创建除默认“数值”类型以外的列。

**JMP添加的版本:** 18

```python

import jmp# for the sake of typingfrom jmp import DataType as dTypeprint('jmp.DataType members:')print( list(map(lambda c: c.name, dType)) )

```

### HOME

**语法:** jmp.HOME

**说明:** 对应于 JSL 的 $HOME 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.HOME)

```

### JMPPRJ

**语法:** jmp.JMPPRJ

**说明:** 返回项目的临时目录的物理路径。返回当前工作目录，若项目中没有运行脚本，则返回“无”。

**JMP添加的版本:** 19

```python

import jmpprint(jmp.JMPPRJ)

```

### ModelingType

**语法:** jmp.ModelingType.enum_value

**说明:** jmp.ModelingType 是表示 JMP 列的建模或分析类型的枚举。这些与 jmp.DataTable.new_column() 函数一起使用，以创建除默认“连续”建模类型以外的列。请注意，TypeNone 不同于 JMP 的建模类型“无”，因为“无”是 Python 关键字。

**JMP添加的版本:** 18

```python

import jmp# for the sake of typingfrom jmp import ModelingType as mTypeprint('jmp.ModleingType members:')print( list(map(lambda c: c.name, mType)) )

```

### PYTHONW_EXE

**语法:** jmp.PYTHONW_EXE

**说明:** JMP 安装的无控制台 Python 可执行文件的路径（仅 Windows）。

**JMP添加的版本:** 19

```python

import jmpimport platformif platform.system() == "Windows":    print(jmp.PYTHONW_EXE)

```

### PYTHON_EXE

**语法:** jmp.PYTHON_EXE

**说明:** JMP 安装的 Python 可执行文件的路径。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.PYTHON_EXE)

```

### PY_USER_APPDIR

**语法:** jmp.PY_USER_APPDIR

**说明:** 作为 JMP 的 Python 支持基础的用户目录位置的路径。软件安装点包目录位于该目录层次中。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.PY_USER_APPDIR)

```

### SAMPLE_APPS

**语法:** jmp.SAMPLE_APPS

**说明:** 对应于 JSL 的 $SAMPLE_APPS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_APPS)

```

### SAMPLE_DASHBOARDS

**语法:** jmp.SAMPLE_DASHBOARDS

**说明:** 对应于 JSL 的 $SAMPLE_DASHBOARDS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_DASHBOARDS)

```

### SAMPLE_DATA

**语法:** jmp.SAMPLE_DATA

**说明:** 对应于 JSL 的 $SAMPLE_DATA 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_DATA)

```

### SAMPLE_IMAGES

**语法:** jmp.SAMPLE_IMAGES

**说明:** 对应于 JSL 的 $SAMPLE_IMAGES 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_IMAGES)

```

### SAMPLE_IMPORT_DATA

**语法:** jmp.SAMPLE_IMPORT_DATA

**说明:** 对应于 JSL 的 $SAMPLE_IMPORT_DATA 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_IMPORT_DATA)

```

### SAMPLE_PROJECTS

**语法:** jmp.SAMPLE_PROJECTS

**说明:** 对应于 JSL 的 $SAMPLE_PROJECTS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_PROJECTS)

```

### SAMPLE_SCRIPTS

**语法:** jmp.SAMPLE_SCRIPTS

**说明:** 对应于 JSL 的 $SAMPLE_SCRIPTS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_SCRIPTS)

```

### TEMP

**语法:** jmp.TEMP

**说明:** 对应于 JSL 的 $TEMP 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.TEMP)

```

### USER_APPDATA

**语法:** jmp.USER_APPDATA

**说明:** 对应于 JSL 的 $USER_APPDATA 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.USER_APPDATA)

```

### __jmp_version__

**语法:** jmp.__jmp_version__

**说明:** JMP 可执行文件的版本号。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.__jmp_version__)

```

### __version__

**语法:** jmp.__version__

**说明:** “jmp”导入包的版本号。这不是 JMP 版本。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.__version__)

```

### current

**语法:** dt = jmp.current()

**说明:** 返回当前 JMP 数据表的 DataTable 对象。

**JMP添加的版本:** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(jmp.current())

```

### eval

**语法:** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**说明:** 计算参数并返回结果。

**JMP添加的版本:** 19

```python

import jmpfrom jmp import eval, Expressionexpression = Expression("2 + 2")result = eval(expression)print(result)

```

### from_dataframe

**语法:** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;, visibility=&lt;string&gt;)

**说明:** 从协议兼容逻辑库的数据框返回一个 jmp.DataTable 对象。

**JMP添加的版本:** 19

#### CSV 回退

```python

import jmpimport jmputils        try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe(df)print(dt)

```

#### Ibis 转 JMP

```python

import jmpimport jmputils try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)    jmputils.jpip('install', 'ibis-framework[duckdb,examples]') except Exception as e:    print(f'Install failed with exception: {e}')          import pandas as pd import ibis  pandas_df = pd.DataFrame(     [["a", 1, 2], ["b", 3, 4]],     columns=["one", "two", "three"], ) t = ibis.memtable(pandas_df, name="t") print(t) dt = jmp.from_dataframe(t) print(dt)

```

#### JMP 转 Pandas

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pddt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")pandas_df = (pd.api.interchange.from_dataframe(dt))print(pandas_df)

```

#### JMP 转 Polars

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as pldt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")polars_df = pl.from_dataframe(dt)print(polars_df)

```

#### Pandas 转 JMP

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df)print(dt)

```

#### Polars 转 JMP

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as plfrom datetime import datepolars_df = pl.DataFrame( {    "foo": [1, 2, 3],    "bar": [6.0, 7.0, 8.0],    "ham": [date(2020, 1, 2), date(2021, 3, 4), date(2022, 5, 6)],  } ) print(polars_df) dt = jmp.from_dataframe(polars_df) print(dt)

```

#### Visibility

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df, visibility="invisible")#dt = jmp.from_dataframe(pandas_df, visibility="private")print(dt)

```

### from_dataframe_using_csv

**语法:** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;, visibility=&lt;string&gt;)

**说明:** 使用提供的 CSV 转换方法从逻辑库的数据框返回一个 jmp.DataTable 对象。

**JMP添加的版本:** 19

#### General

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})try:    # Try converting object without CSV fallback    dt = jmp.from_dataframe(df, True, False)    print("Converted using jmp.from_dataframe()")except:     # Explicitly convert using CSV    dt = jmp.from_dataframe_using_csv(df)    print("Converted using jmp.from_dataframe_using_csv()")print(dt)

```

#### Visibility

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe_using_csv(df, visibility="invisible")#dt = jmp.from_dataframe_using_csv(df, visibility="private")print(dt)

```

### open

**语法:** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**说明:** 打开位于 file_path 的文件。若该文件是 .jmp 文件或导入到 JMP 数据表的文件，则返回的对象将是 DataTable 对象。否则将返回 True 或 False 来表示成功或失败。可选的可见性参数将控制打开的文件是否在视图中隐藏。“不可见”仅是在视图中隐藏，而仍然出现在最近使用的文件菜单和主窗口中。对于“私有”表，返回的引用是对表的唯一引用，它不会出现在任何文件列表中。

**JMP添加的版本:** 18

#### Excel

```python

import jmpobj = jmp.open(jmp.SAMPLE_IMPORT_DATA + 'Bigclass.xlsx')print(obj)

```

#### JMP

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt)

```

#### JSL 脚本

```python

import jmpobj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')print(obj)

```

#### 不可见

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Invisible')dt = jmp.current()print(dt)  # successdt = jmp.table('Animals')print(dt)  # success# Select and run the above first if you want to see that even though# there is no window, Animals.jmp appears in recent files and# home window's list of filesdt.close(save=False);del dt

```

#### 私有

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')dt = jmp.current()print(dt)  # => Nonetry:  dt = jmp.table('Animals')except FileNotFoundError:  print('Requested table not found')dt = jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')print(dt)dt.close(save=False)del dt

```

### path_variable

**语法:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**说明:** 返回路径变量的值，路径变量是在路径名中要替换的比如 SAMPLE_DATA 这样的名称。

**JMP添加的版本:** 19

```python

import jmppath_value = jmp.path_variable('SAMPLE_DATA')if not path_value:    print('Invalid path variable.')else:    print(path_value)

```

### r_name

**语法:** dt = jmp.r_name(jsl_var)

**说明:** 使用 R 变量命名规则将 JMP 变量名称映射到 R 变量名称。

**JMP添加的版本:** 19

```python

import jmprName = jmp.r_name('c d e')print(rName)

```

### reset

**语法:** jmp.reset()

**说明:** 重置共享 Python 环境，主要清除针对对象的所有引用。这不会更改已导入模块的导入缓存。这是 Python 环境本身的局限性。正在运行的进程无法卸载加载共享逻辑库的模块。要重新加载纯 Python 代码，请参见 Python.org 文档中关于 importlib reload() 的说明。

**JMP添加的版本:** 19

```python

import jmppi = 3.1415927print(pi)jmp.reset()print(pi)

```

### run_jsl

**语法:** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**说明:** 从 Python 环境中运行 JSL 脚本，包括 JSL Python 接口函数。可选的 echo= 参数（设置为 False 或 None 时）会停止显示的 JSL 源代码回显至日志。对于 Python Send() / Get() 支持的相同 JSL 对象类型，将返回结果。脚本失败或不支持的 JSL 对象类型将返回 None。

**JMP添加的版本:** 18

#### 列属性

```python

import jmp# Create a data table# dt = jmp.DataTable(name='table_name', rows=n)pbp = jmp.DataTable(rows=5)pbp.name = 'Powered by Python'pbp.new_column('Name', jmp.DataType.Character)pbp.new_column('Hourly Rate')#pbp['Name'] = ['Janet', 'James', 'Jerry', 'Jenny', 'Jill']pbp[1] = [ 14.25, 9.75, 15.0, 12.35, '17.25']  # last value bad => becomes missingpbp[1][4] = 17.25## Change column format: Hourly Ratejmp.run_jsl('''Data Table( "Powered by Python" ):Hourly Rate << Format( "Currency", "USD", 17, 2 );Data Table( "Powered by Python" ):Name << Set Display Width( 75 );''')

```

#### 获取版本

```python

import jmpjmp.run_jsl('Python Get Version();')

```

#### 返回的值

```python

import jmpvalue = jmp.run_jsl('''Names default to here(1);an A = 1.5;x = 5 * anA;''')print( f'{value} = jmp.run_jsl()')

```

### table

**语法:** dt = jmp.table(&apos;table_name&apos;)

**说明:** 为已打开的具有“table_name”的表返回一个 DataTable 对象

**JMP添加的版本:** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( jmp.table('Big Class') )

```

### 函数

### 常数

### 枚举

## jmp > DataConnector

### 函数

#### __getitem__

**语法:** value = dc["FIELD NAME"]

**说明:** 获取与字段关联的值。

**JMP添加的版本:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {"Example Field": str}class ExampleConnector(jmp.DataConnector):    ...    def _do_as_data_source(self):        ef = self["Example Field"]        # When running the JSL below, ef will be "example value"        print(f"{ef=}")        ...jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# This will fail but only after printing the valuejmp.run_jsl("""    New SQL Query( Connection(        New Data Connector(            Type("Python:__main__:ExampleConnectorType"),            Example Field("example value")        )    ) ) << Modify""", echo=False)

```

#### _do_as_data_source

**语法:** def _do_as_data_source(self) -&gt; jmp.DataSource:

**说明:** 子类应覆盖该函数以创建连接。以 jmp.DataSource 子类的形式返回的连接支持使用“查询生成器”的集成。



避免在返回的数据源中存储和使用对连接器实例（自身）的引用。其他代码也可能包含某个引用，并意外更改配置值。可考虑改用 copy.copy 制作一个独立副本进行引用，如“self_copy = copy.copy(self)”。

**JMP添加的版本:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource(self['My Option'])jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def __init__(self, my_option):        self._my_option = my_option        print("Connecting to data source")    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column')        dt['column'] = [self._my_option]        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" ),            My Option( 42 )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### _do_open

**语法:** def _do_open(self) -&gt; jmp.DataTable:

**说明:** 子类可覆盖该函数以直接打开表。该函数用于在 JSL 中实现 Open 消息 (New Data Connector(...) << Open())。



若同时实现该函数和 _do_as_data_source，则它们应该能够打开同一组表。

**JMP添加的版本:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_open(self):        dt = jmp.DataTable(rows=1)        dt.new_column('column')        dt['column'] = [self['My Option']]        return dtjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    My Option( 42 )) << Open();""", echo=False)

```

#### tie

**语法:** jmp.DataConnector.tie(DataConnectorTypeClass, DataConnectorClass)

**说明:** 将 jmp.DataConnectorType 子类与 jmp.DataConnector 子类关联，将它们“绑定”在一起并完成这两个类的定义。该关联授予 jmp.DataConnector 子类访问 jmp.DataConnectorType 子类及其字段定义的权限。它还确保 jmp.DataConnectorType 子类使用指定的子类创建 jmp.DataConnector 实例。



该函数通过对子类设置属性来创建关联。

**JMP添加的版本:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_open(self):        dt = jmp.DataTable(rows=1)        dt.new_column('column')        dt['column'] = [self['My Option']]        return dtjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    My Option( 42 )) << Open();""", echo=False)

```

#### 使用 copy.copy 进行复制的能力

**说明:** DataConnector 对象使用标准的 copy.copy 函数支持浅复制。



不支持更改子类中的复制行为，因此子类不应添加额外的实例属性，因为这些属性不会被复制。

**JMP添加的版本:** 19

```python

import jmpimport copyclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource(copy.copy(self))jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def __init__(self, config):        self._config = config        print("Connecting to data source")    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column')        dt['column'] = [self._config['My Option']]        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" ),            My Option( 42 )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### 函数

#### 方法

#### 概念

#### 特殊项

## jmp > DataConnectorField

### 函数

#### __init__

**语法:** field = jmp.DataConnectorField(type, &lt;default=DEFAULT_VALUE,&gt; &lt;tooltip="TOOLTIP" | None,&gt; &lt;ui_name="UI NAME" | None,&gt; &lt;credential="CREDENTIAL TYPE" | None,&gt; &lt;sensitive=True | False,&gt; &lt;mask_input=True | False&gt;)

**说明:** DataConnectorField 定义一个字段。



基本参数:



type（类型）: 该字段的类型，例如 int（请参见 jmp.DataConnectorType.fields 了解更多信息）。



default（默认值）: 字段的默认值，例如 42。若未提供，该默认值取决于类型。若类型支持 None，则默认值为 None（例如，若类型为“int | None”）。否则，它将返回该类型的"空"值: 字符串 (str) 为""，整数 (int) 为 0，布尔值 (bool) 为 False。



tooltip（工具提示）: 若提供了且不为 None，该值将在数据连接器编辑器中用作该字段的工具提示。



ui_name: 若提供了且不为 None，该值将用作该字段在数据连接器编辑器中的名称，而非使用该字段的实际名称。



类型为“str”或“str | None”时的额外参数:



若提供了且不为 None，则表示该字段存储的凭证的类型。有效值为“username”和“password”。JMP 使用该信息启用占位符支持。



sensitive（敏感）:‌ 若为 true，则该字段被视为包含敏感信息，因此其值不会以明文形式输出。若设置了“credential”则默认为 true，否则为 false。



mask_input: 当为 true 时，将对值进行模糊处理并在“数据连接器编辑器”中以圆点显示。若“credential”为“password”，或是“sensitive”为 true 且未设置凭证，则默认为 true。

**JMP添加的版本:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    _DCF = jmp.DataConnectorField    fields = {        "Field 1": int,        # Same as Field 1 but uses jmp.DataConnectorField instead of a bare type        "Field 2": _DCF(int),        # Like Field 1 and Field 2 but adds a tooltip        "Field 3": _DCF(int, tooltip="The third field."),        # Like Field 1 and Field 2 but adds a default value and a tooltip        "Field 4": _DCF(int, default=42, tooltip="The fourth field."),        # ui_name is useful for JSL-unfriendly names or localization        "JSL Unfriendly Field": _DCF(int, ui_name="JSL-Unfriendly Field"),        # credential (and sensitive and mask_input) are useful for usernames,        # passwords, and other sorts of credentials        "Password Field": _DCF(str, credential="password"),    }class ExampleConnector(jmp.DataConnector):    def _do_open(self):        # Show the values then error        print(f"{self["Field 1"] = }")        print(f"{self["Field 2"] = }")        print(f"{self["Field 3"] = }")        print(f"{self["Field 4"] = }")        print(f"{self["JSL Unfriendly Field"] = }")        print(f"{self["Password Field"] = }")        raise NotImplementedErrorjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# To see the tooltips, the UI name, and the masking triggered by credential,# you'll need to launch the Data Connector Editor and set the type to# Python:__main__:ExampleConnectorType.jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    Field 1( 4 ),    Field 2( 19 ),    Field 3( 23 ),    Field 4( 42 ),    JSL Unfriendly Field( 65 ),    // This encodes the string "107":    Password Field( "0173AEE42BA6B646CBE03941DD25153DAAFDF2ED3039A9E64296808E53DA110CDE45733216E9B2A3F82AA052F370443F231C8B1D83E2AA68B6D19DD4B6BB0CE08F635C07162E3E13B2AF77D25DF8DDD1DB" )) << Open();""", echo=False)

```

#### 构造函数

## jmp > DataConnectorGroupedFields

### 函数

#### __init__

**语法:** fields = jmp.DataConnectorGroupedFields([("Group 1 Name", GROUP_1_FIELDS), ("Group 2 Name", GROUP_2_FIELDS), ...])

**说明:** jmp.DataConnectorGroupedFields 定义命名组中的字段。各组以成对元素的列表形式传递。每对中的第一个元素是组名称，第二个元素是包含字段的词典。该词典的格式与直接用作 jmp.DataConnectorType.fields 的值的词典格式完全相同。



分组使用会影响字段在数据连接器编辑器中的显示方式，但不影响其程序访问方式。组名仅用于用户界面，因此"字段命名需避免 JSL 禁用字符"的建议不适用于组名。

**JMP添加的版本:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = jmp.DataConnectorGroupedFields([        # Specify a first group named "Route" that has "Destination" and        # "Origin" fields.        ("Route", {            "Destination": str,            "Origin": str,        }),        # Specify a second group named "Vehicle" that has "Passengers" and        # "Range" fields.        ("Vehicle", {            "Passengers": int,            "Range": int,        }),    ])class ExampleConnector(jmp.DataConnector):    def _do_open(self):        # Show the values then error        print(f"{self["Destination"] = }")        print(f"{self["Origin"] = }")        print(f"{self["Passengers"] = }")        print(f"{self["Range"] = }")        raise NotImplementedErrorjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# To see the groups you'll need to launch the Data Connector Editor# and set the type to Python:__main__:ExampleConnectorType.jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    Destination( "JMP" ),    Origin( "RDU" ),    Passengers( 5 ),    Range( 254 )) << Open();""")

```

#### 构造函数

## jmp > DataConnectorType

### 函数

#### fields

**语法:** fields = {"Name 1": TYPE_1 | jmp.DataConnectorField(...), "Name 2": TYPE_2 | jmp.DataConnectorField(...), ...} | jmp.DataConnectorGroupedFields(...)

**说明:** 子类必须定义一个名为“fields”的类级变量，该变量用于指定该类型的配置选项。它应该是一个 dict 或 jmp.DataConnectorGroupedFields 对象。



dict 的键即配置选项的名称，这些名称会在 JSL 和编辑器中公开。这些名称的格式应该设置为类似 JSL 标识符的格式。与每个键对应的值即该字段的类型，例如 str 或 int，或是 jmp.DataConnectorField 对象。



支持的类型包括: bool、int 和 str。同时支持这些类型的可选版本，例如针对 bool 类型的 typing.Optional[bool] 或 bool | None。缺失值由 None 表示。

**JMP添加的版本:** 19

```python

import jmpimport typingclass ExampleConnectorType(jmp.DataConnectorType):    _DCF = jmp.DataConnectorField    fields = {        "Basic Int Field": int,        "Optional Int Field": int | None,        "Alternative Optional Int Field": typing.Optional[int],        "Int Field With Default And Tooltip": _DCF(int, default=42, tooltip=(            "Tooltip for complicated int field."        )),        "Catalog": _DCF(str, default="main", tooltip=(            "Database catalog in which to access schemas and tables."        )),    }class ExampleConnector(jmp.DataConnector):    def _do_open(self):        # Show values for demo purposes and then error out        print(f"{self["Basic Int Field"] = }")        print(f"{self["Optional Int Field"] = }")        print(f"{self["Alternative Optional Int Field"] = }")        print(f"{self["Int Field With Default And Tooltip"] = }")        print(f"{self["Catalog"] = }")        raise NotImplementedErrorjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# To see the tooltips you'll need to launch the Data Connector Editor# and set the type to Python:__main__:ExampleConnectorType.jmp.run_jsl(r"""New Data Connector( Type( "Python:__main__:ExampleConnectorType" ) ) << Open();""")

```

#### 属性

## jmp > DataSource

### 函数

#### get_schemas

**语法:** def get_schemas(self) -&gt; Sequence[str] | None:

**说明:** 子类可以覆盖该函数以提供数据源中的架构列表。若未覆盖该函数或是该函数返回 None，则认为该数据源不支持架构。

**JMP添加的版本:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# Pretend our data source has two schemas, each with a tableclass ExampleDataSource(jmp.DataSource):    def get_schemas(self):        # Normally you would get this dynamically instead of hard-coding it.        return ['schema1', 'schema2']    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column', jmp.DataType.Character)        dt['column'] = [f'{schema}.{table}']        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Schema( "schema1" ), Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### get_tables

**语法:** def get_tables(self, schema: str) -&gt; Sequence[str]:

**说明:** 子类应覆盖该函数以提供数据源中的表列表。若支持架构，则该列表应只包含所传递的架构下的表。若不支持架构，则应忽略架构参数。

**JMP添加的版本:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        # Normally you would get this dynamically instead of hard-coding it.        return ['example1', 'example2']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column', jmp.DataType.Character)        dt['column'] = [table]        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "A" ),    Select( Star ),    From( Table( "example1", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### open_table

**语法:** def open_table(self, schema: str, table: str) -&gt; jmp.DataTable | str:

**说明:** 子类应覆盖该函数以获取命名表的表数据。若不支持架构，则可以忽略架构参数的值。该函数应该返回一个 jmp.DataTable 或字符串（其中包含采用 JMP 支持的数据格式的文件路径）。



若直接返回一个数据表，则应以私有方式创建该表。若返回一个路径字符串，JMP 会打开该表本身并捕获它使用的设置，并将其保留在“查询生成器”脚本中。

**JMP添加的版本:** 19

**直接创建该表**

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        # Normally you would use schema and table.        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('Hello', jmp.DataType.Character)        dt['Hello'] = ['world!']        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

**返回文件路径**

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        # Normally you would use schema and table.        return jmp.SAMPLE_IMPORT_DATA + 'Bigclass_L.txt'jmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### open_table_with_settings

**语法:** def open_table_with_settings(self, schema: str, table: str, settings: str | None) -&gt; (jmp.DataTable, str | None):

**说明:** 子类可覆盖该函数而不是 open_table 以提供表的打开设置的自定义处理方式。该函数与 open_table 类似，但也会在调用时带有现有配置（若存在）。它必须返回一个数据表，同时还必须返回新配置（若有）；缺失的设置用 None 表示。

**JMP添加的版本:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        return ['example']    def open_table_with_settings(self, schema, table, settings):        print(f"Input settings: {settings!r}")        if settings is None:            # In practice settings are something you prompt the user            # for, but here we hard-code it.            settings = f'settings for {table}'        dt = jmp.DataTable(visibility='private')        dt.new_column()        print(f"Output settings: {settings!r}")        return dt, settingsjmp.run_jsl(r"""Write( ( New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run Foreground ) << Get Property( "Source" ) );""", echo=False)

```

#### 方法

## jmp > DataTable > Column

### 函数

#### __eq__

**语法:** column1 == column2

**说明:** 当两个 jmp.DataTable.Column 对象指向相同的 JMP 数据表列时，相等性检验返回 true。这不会检查内容是否匹配，但两个变量指向完全相同的列。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col1 = dt[0]col2 = dt['name']col3 = dt['age']print( col1 == col2 )print( col1 == col3 )

```

#### __getitem__

**语法:** value = column[ index ]

**说明:** 提供 [] 运算符，用于从基于 0 的索引的列中获取 jmp.DataTable.Column 对象的值。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col = dt[0]for i in range ( len(col) ):    print( col[i] )

```

#### __init__

**语法:** Column( dt_obj, name | index)

**说明:** 创建指向数据表中特定列的新列对象。jmp.DataTable 对象是 dt_obj 参数所必需的，并且需要一个有效的列名或索引。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col = jmp.DataTable.Column(dt, 'name')print(col)# Note: it's simpler to just let Python create one for you through assignment.col2 = dt['name'];print(col2)

```

#### __len__

**语法:** count = len( column )

**说明:** 返回表中的列数。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print( len( dt['name'] ) )

```

#### __ne__

**语法:** column1 != column2

**说明:** 当两个 jmp.DataTable.Column 对象不指向相同的数据表列时，不等性检验返回 true。这不会检查内容是否匹配，但两个对象不会指向完全相同的列。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col1 = dt[0]col2 = dt['name']col3 = dt['age']print( col1 != col2 )print( col1 != col3 )

```

#### __setitem__

**语法:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**说明:** 提供 [] 运算符，用于设置列中的值，按列名或基于 0 的索引从表中获取 jmp.DataTable.Column 对象。

**JMP添加的版本:** 18

**datetime.date**

```python

import jmpfrom datetime import datedt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('birthday', jmp.DataType.Numeric)dt['birthday'].format = "m/d/y"dt['birthday'][0] = date.today()

```

**datetime.datetime**

```python

import jmpfrom datetime import datetimedt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('birthday', jmp.DataType.Numeric)dt['birthday'].format = "m/d/y h:m:s"dt['birthday'][0] = datetime.now()

```

**time.struct_time**

```python

import jmpimport timedt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('birthday', jmp.DataType.Numeric)dt['birthday'].format = "h:m:s"dt['birthday'][0] = time.localtime()

```

**图像**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column("images", jmp.DataType.Expression)for i in range( len( dt["images"] ) ):    dt['images'][i] = jmp.Image(jmp.SAMPLE_IMAGES + "tile.jpg")print(dt['images'][0])

```

**标准**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")column = dt[0]column2 = dt['age']print(column)print(column2)

```

**行状态**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column("rs", jmp.DataType.RowState)dt['rs'][0] = jmp.RowState(selected=True, marker=3, color=4)print(dt['rs'][0])

```

**表达式**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column("expressions", jmp.DataType.Expression)dt['expressions'][0] = jmp.Expression('1 + 1')print(dt['expressions'][0])result = jmp.eval(dt['expressions'][0])print(result)

```

#### __str__

**语法:** str( column_obj )

**说明:** 返回包含有关数据表列的汇总信息的字符串表示。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt[0])

```

#### data_length

**语法:** col_obj.data_length

**说明:** 返回列字段的数据长度的属性。该值可以为 0、1、2、4 或 8 个字节。0 是默认值，并且表示 8 个字节用于数据表数值字段。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f'Data length of dt[-1] (weight column): {dt[-1].data_length}')

```

#### display_width

**语法:** col_obj.display_width col_obj.display_width = &lt;int&gt;

**说明:** 更改列的显示宽度。

**JMP添加的版本:** 19

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")jmp.run_jsl('Wait( 0 );')print(dt[0].display_width)dt[0].display_width = 100print(dt[0].display_width)

```

#### dtype

**语法:** col_obj.dtype

**说明:** 返回列的数据类型的枚举值的属性。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f"Data Type of dt['age']: {dt['age'].dtype}")dt['age'].dtype = jmp.DataType.Character print(f"Updated Data Type of dt['age']: {dt['age'].dtype}")

```

#### format

**语法:** col_obj.format col_obj.format = tuple&lt; &lt;string&gt;|&lt;int&gt;, ... &gt;

**说明:** 获取格式

**JMP添加的版本:** 19

**不同变化形式**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "XYZ Stock Averages (plots).jmp")dt[0].format = ("ddMonyyyy", 9)dt[1].format = "Currency"dt[2].format = (    "best",    "Use Thousands Separator",    10,    0)dt[3].format = (    "Fixed Dec",    "Use Thousands Separator",    10,    2)

```

**元组赋值**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print(dt[3].format)dt[3].format = ('Fixed Dec', 6, 3)print(dt[3].format)

```

#### formula

**语法:** col_obj.formula col_obj.formula = &lt;Expression | string&gt;

**说明:** 在给定 Expression 对象或表示有效 JSL 的字符串的情况下，设置列公式。

**JMP添加的版本:** 19

**字符串**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('ratio', jmp.DataType.Numeric)dt['ratio'].formula = ':Height / :Weight'print(dt['ratio'].formula)

```

**表达式**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('ratio', jmp.DataType.Numeric)dt['ratio'].formula = jmp.Expression(':Height / :Weight')print(dt['ratio'].formula)

```

#### mtype

**语法:** col_obj.mtype

**说明:** 返回列的建模类型的枚举值的属性。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f"Modeling Type of dt['age']: {dt['age'].mtype}") dt['age'].mtype = jmp.ModelingType.Nominalprint(f"Updated Modeling Type of dt['age']: {dt['age'].mtype}")

```

#### name

**语法:** col_obj.name col_obj.name = &lt;string&gt;

**说明:** 列名称属性，可读且可设置。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print(dt[0].name)dt[0].name = 'First Name'

```

#### 切片

**说明:** 切片运算符用作 [ ] 获取项操作的参数。它由 start:stop:step 组成。这些参数是可选的。返回值为值列表，从 start 值开始，不包括 stop 值，以 step 值为增量递增。start 或 stop 的负值是从序列结尾开始的基于 1 的索引。负 [step] 值递减 step 计数，而不是递增。空值具有适当的默认值。[::-1] 将以相反的顺序返回完整的列表。[:] 将按当前项的顺序返回整个数组。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( [c.name for c in dt[:]] )         # print list of column names default step = 1reverse_cols = dt[::-1]                  # list of column names in reverse orderprint( [c.name for c in reverse_cols] )  # print reversed column name listprint( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### 属性

#### 序列

**说明:** DataTable.Column 行为类似于 Python 序列。这允许对列的值进行迭代。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]for n in dt[0]:    print( n )

```

#### 映射

**说明:** DataTable.Column 对象支持 Python 映射协议。提供使用数值行索引的 array [] 运算符。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]for i in range(0, dt.nrows):    print( dt[0][i] )

```

#### 构造函数

#### 概念

#### 特殊项

#### 相等

**说明:** Column 对象支持相等和不等检查。因为 DataTable.Column 实际上是对实时数据表列的引用，因此多个 Column 对象可以指向相同的实际列。相等 == 和不等 != 检验的检查不比较内容。反而它们检查两个 DataTable.Column 对象是否指向列。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col1 = dt[0]col2 = dt['name']col3 = dt['age']print( col1 == col2 )print( col1 == col3 )print( col1 != col2 )print( col1 != col3 )

```

## jmp > DataTable

### 函数

#### __eq__

**语法:** table1 == table2

**说明:** 当两个 jmp.DataTable 对象指向相同的 JMP 数据表时，相等性检验返回 true。这不会检查内容是否匹配，但两个变量指向完全相同的表。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt2 = jmp.current()iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")print( dt == dt2 )print( dt == iris)

```

#### __getitem__

**语法:** column = dt[&apos;name&apos; | index]

**说明:** 提供 [] 运算符，用于按列名或基于 0 的索引从表中获取 jmp.DataTable.Column 对象。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")column = dt[0]column2 = dt['age']print(column)print(column2)

```

#### __init__

**语法:** dt = jmp.DataTable(&lt;name=&apos;table_name&apos;&gt;, &lt;rows=n&gt;, &lt;visibility=&apos;Invisible&apos; | &apos;Private&apos; )

**说明:** 创建具有 n 行名称为“table_name”的新数据表。参数和关键字是可选的，除非仅指定了行或参数顺序被颠倒。

**JMP添加的版本:** 18

**不可见**

```python

import jmpdt = jmp.DataTable('Powered By Python', 40, visibility='Invisible')

```

**以行命名**

```python

import jmpdt = jmp.DataTable('Powered By Python', 40)

```

**命名的空表**

```python

import jmpdt = jmp.DataTable('Powered By Python')

```

**带关键字**

```python

import jmpdt = jmp.DataTable(rows=40, name='Powered By Python')

```

**私有**

```python

import jmpdt = jmp.DataTable('Powered By Python', 40, visibility='private')

```

**空表**

```python

import jmpdt = jmp.DataTable()

```

#### __len__

**语法:** count = len(dt)

**说明:** 返回表中的列数。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print( len(dt) )

```

#### __ne__

**语法:** table1 != table2

**说明:** 当两个 jmp.DataTable 对象不指向相同的数据表时，不等性检验返回 true。这不会检查内容是否匹配，但两个对象不会指向完全相同的表。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt2 = jmp.current()iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")print( dt != dt2 )print( dt != iris)

```

#### __setitem__

**语法:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**说明:** 提供 [] 运算符，用于设置列中的值，按列名或基于 0 的索引从表中获取 jmp.DataTable.Column 对象。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]print( dt[0][:] )

```

#### __str__

**语法:** str( data_table )

**说明:** 返回有关数据表对象的汇总信息的字符串表示。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt)

```

#### add_rows

**语法:** add_rows(rows, &lt;at=-1&gt;)

**说明:** 将行添加至 DataTable。rows 是必需的。at 是可选的。若 at 是 0，则在表的开始处插入。若它是 <0，则在表的结尾处插入。否则，若 at 是 m，则在第 m 行（基于 0 的索引）插入。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.add_rows(5)dt.add_rows(1, at=0)dt.add_rows(2, at=12) # 0-based indexing

```

#### begin_update

**语法:** dt.begin_update() # added JMP 19.1

**说明:** Small tables update rapidly, but for large tables, having to update the user interface while making mass changes to a column is very time consuming. The begin_update() method stops the GUI updates to the data table until a corresponding end_update().

**JMP添加的版本:** 19

```python

import jmpimport randomimport timedt = jmp.open(jmp.SAMPLE_DATA + "Wafer Stacked.jmp")print(dt.nrows)start_time = time.perf_counter()dt.begin_update()try:    for x in range(dt.nrows):        dt[5][x] = random.randint(1,1000)finally:    dt.end_update()end_time = time.perf_counter()elapsed = end_time - start_timeprint(f'Elapsed time: {elapsed:.3f}')

```

#### cell_height

**语法:** dt.cell_height dt.cell_height = &lt;int&gt;

**说明:** 设置每个数据表单元格的显示高度。

**JMP添加的版本:** 19

```python

import jmpdt = jmp.DataTable()jmp.run_jsl('Wait(0)')print(dt.cell_height)dt.cell_height = 40print(dt.cell_height)

```

#### close

**语法:** dt.close( &lt;save= True | False&gt;)

**说明:** 关闭 DataTable 对象上的方法。与 JSL 类似，若不带参数调用，则默认保存该文件。要放弃文件（例如创建为临时表的文件），为了更清楚，可以使用 dt.close(False) 或 dt.close(save=False)。

**JMP添加的版本:** 18

```python

import jmpimport os# To remove the wow.jmp file uncomment then run the 2 lines below,# if os.path.isfile('wow.jmp'):#    os.unlink('wow.jmp')dt = jmp.DataTable('wow', 5)dt.new_column('one')dt.close()                # saves and closes filedt = jmp.open('wow.jmp')dt.new_column('two')dt.close(save=False)      # closes without saving

```

#### delete_columns

**语法:** delete_columns(&apos;name&apos;, ..., &apos;name&apos;)

**说明:** delete_columms() 方法的工作方式类似于 JSL 中等效的 Delete Columns() 消息。可接受的参数包括: 无参数；列名或逗号分隔的名称；Python 列名列表。不使用参数表示删除选定列。

**JMP添加的版本:** 19

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.select_columns('weight')     # JSL:  dt << Select Columns( {:weight})r = dt.delete_columns()                  # delete by selected column(s)print(r)r = dt.delete_columns('name', 'sex')     # delete by nameprint(r)r = dt.delete_columns(['age', 'height']) # delete with list of column namesprint(r)

```

#### end_update

**语法:** dt.end_update() # added JMP 19.1

**说明:** Restores the data table GUI update processing.

**JMP添加的版本:** 19

```python

import jmpimport randomimport timedt = jmp.open(jmp.SAMPLE_DATA + "Wafer Stacked.jmp")print(dt.nrows)start_time = time.perf_counter()dt.begin_update()try:    for x in range(dt.nrows):        dt[5][x] = random.randint(1,1000)finally:    dt.end_update()end_time = time.perf_counter()elapsed = end_time - start_timeprint(f'Elapsed time: {elapsed:.3f}')

```

#### name

**语法:** dt.name dt.name = &apos;string&apos;

**说明:** name 属性同时是数据表名称的 setter 和 getter。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.DataTable()print(dt.name)dt.name = 'Powered by Python'

```

#### ncols

**语法:** dt.ncols

**说明:** 一个只读的属性，返回表中的列数。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f'Number of columns: {dt.ncols}')

```

#### new_column

**语法:** dt.new_column( name=&apos;column_name&apos;, dtype=jmp.Numeric | .Character | .RowState | .Expression, mtype=jmp.ModelingType.Continuous | ... | TypeNone dlen=len cell type&apos;s data length especially for numeric 8(double),4(int32),2(int16),1(int8) where=n insert column after column n

**说明:** 创建新的数据表列，可选地指定名称、列类型、数据长度和建模类型

**JMP添加的版本:** 18

**小类**

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]print( dt[0][:] )print( list( dt['First Name'] ) )dt.new_column('Distance (km)', jmp.DataType.Numeric, jmp.ModelingType.Continuous)dt[1] = [ 1239.2, 12266.4, 15.75, 35.0, 10.6 ]

```

**新类**

```python

import jmpfrom jmp import DataTable as Dtdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')nc = jmp.DataTable('New Class', dt.nrows)nc.new_column('name', jmp.DataType.Character)# populate column from a listnc[0] = ['Fred','Kimi','Amanda','Courtney','Paul','Theresa','Erika','Blake','Joseph','Amber',    'Daphne','Robert','James','Richard', 'Eric','Mark','Coleen','Brian','Bryan','Emily',    'Bonnie','Georgia','Terrance','Carmen','Hunter','Samantha','Kay','Tamara','Brett','David',    'Chandler','Siebela','Judy','Hui','Drew','Russ','Megan','Evan','Alex','Travis']col = nc.new_column('age', jmp.DataType.Numeric)# populate column from another columnnc['age'] = dt['age']print(nc['age'][::])print(col.__class__)

```

#### nrows

**语法:** dt.nrows

**说明:** 一个只读的属性，返回表中的行数。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f'Number of rows: {dt.nrows}')

```

#### row_states

**语法:** dt.row_states dt.row_states = [state1, state2, ..., stateN]

**说明:** 为数据表中的所有行设置行状态。

**JMP添加的版本:** 19

**元组列表（<索引>, <行状态 | int>）**

```python

import jmpfrom jmp import RowStatedt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states = [(2, RowState(marker=2, selected=True)), (5, 97)]print(dt.row_states)

```

**常规用法**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states[0] = jmp.RowState(marker=4, color=3)print(dt.row_states)dt.row_states[0].selected = Truedt.row_states[1] = jmp.RowState(value=22)print(dt.row_states)

```

**整数列表**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states = [33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]print(dt.row_states)

```

**行状态列**

```python

import jmpfrom jmp import DataTypedt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')rs_col = dt.new_column('rs', DataType.RowState)dt['rs'] = dt.row_statesdt['rs'][0] = jmp.RowState(value=33)dt['rs'][1] = jmp.RowState(color=2, marker=3)row_state = jmp.RowState(color=4, selected=False)dt['rs'][3] = row_staterow_state.marker = 9dt['rs'][4] = row_statedt.row_states = dt['rs']print(dt.row_states)

```

**迭代**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')for i in range(len(dt.row_states)):    if dt['age'][i] % 2:        dt.row_states[i].selected = Trueprint(dt.row_states)

```

**重置行状态**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states = [33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]print(dt.row_states)dt.row_states = [0] * dt.nrowsprint(dt.row_states)

```

#### save

**语法:** dt.save( &lt; path=&apos;file_path&apos; &gt; )

**说明:** 使用表名将数据表保存到当前目录。可选的路径参数允许保存到其他位置或名称。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt[0][0] = 'Katie'dt.save('BC_lowercase.jmp')

```

#### scripts

**语法:** dt.scripts dt.scripts = &lt;dict&lt;str : &lt;str | Expression&gt;&gt;&gt;

**说明:** 脚本属性允许读写数据表脚本。

**JMP添加的版本:** 19

**多个脚本**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# Concatenationdt.scripts |= {    "Example": 'Print("Foo")',    "Example 2": jmp.Expression('Print("Bar")')}print("Distribution" in dt.scripts)print("Example" in dt.scripts)print("Example 2" in dt.scripts)# Reassigning of scripts removes all other scriptsdt.scripts = {    "Example": 'Print("FooBar")',}print(dt.scripts)# Iterationfor name, value in dt.scripts.items():    print(name, value)for name in dt.scripts:    print(name, dt.scripts[name])

```

**正在删除脚本**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# Reassigning of scripts removes all other scriptsdt.scripts = {    "Example": 'Print("Foo")',    "Example 2": jmp.Expression('Print("Bar")')}print("Distribution" in dt.scripts)   # Falseprint("Example" in dt.scripts)        # Trueprint("Example 2" in dt.scripts)      # True# Deleting a script# Note: If the script editing window is open, the script will not be deleted. del dt.scripts["Example"]dt.scripts["Example 2"] = Noneprint("Example" in dt.scripts)        # Falseprint("Example 2" in dt.scripts)      # Falsedt.scripts = {    "Example": 'Print("FooBar")',}# Deleting all scriptsdt.scripts = {}

```

**获取/设置脚本**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# Getting a scriptprint(dt.scripts["Distribution"])# Adding a scriptdt.scripts["Example"] = 'Print("Foo")'dt.scripts["Example 2"] = jmp.Expression('Print("Bar")')# Getting all scriptsprint(dt.scripts)

```

#### select_columns

**语法:** select_columns(&apos;name&apos;, ..., &apos;name&apos;)

**说明:** select_columms() 方法的工作方式类似于 JSL 中等效的 Select Columns() 消息。可接受的参数包括: 列名或逗号分隔的名称；Python 列名列表。

**JMP添加的版本:** 19

**全部**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.select_columns([col.name for col in dt])# all columns should be selected.

```

**示例 1**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.select_columns('weight')dt.select_columns('name', 'sex')dt.select_columns(['age', 'height'])# all columns should be selected.

```

#### 切片

**说明:** 切片运算符用作 [ ] 获取项操作的参数。它由 start:stop:step 组成。这些参数是可选的。返回值为值列表，从 start 值开始，不包括 stop 值，以 step 值为增量递增。start 或 stop 的负值是从序列结尾开始的基于 1 的索引。负“step”值递减 step 计数，而不是递增。空值具有适当的默认值。[::-1] 将以相反的顺序返回完整的列表。[:] 将按当前项的顺序返回整个数组。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( [c.name for c in dt[:]] )         # print list of column names default step = 1reverse_cols = dt[::-1]                  # list of column names in reverse orderprint( [c.name for c in reverse_cols] )  # print reversed column name listprint( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### 属性

#### 序列

**说明:** DataTable 对象行为类似 Python序列。这允许对表列进行迭代。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")for n in dt:    print( n.name )

```

#### 方法

#### 映射

**说明:** DataTable 对象支持 Python 映射协议。提供 array [] 运算符，使用列名或数值作为列索引。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( f'Column name: {dt[1].name}' )print( f"Column name: {dt['age'].name}" )

```

#### 构造函数

#### 概念

#### 特殊项

#### 相等

**说明:** DataTable 对象支持相等和不等检查。因为 DataTable 实际上是对实时数据表的引用，因此多个对象可以指向相同的 JMP 表。相等 == 和不等 != 检验的检查不比较内容。它们检查两个 DataTable 对象是否指向相同的 JMP 表。

**JMP添加的版本:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt2 = jmp.current()iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")print( dt == dt2 )print( dt == iris)print( dt != dt2 )print( dt != iris )

```

## jmp > Expression

### 函数

#### __eq__

**语法:** expression1 == expression2

**说明:** 若 Expression 对象与另一个 Expression 对象具有相同的内容，则相等性检验返回 true，否则返回 false。

**JMP添加的版本:** 19

```python

import jmpexpr1 = jmp.Expression('1 + 1')expr2 = jmp.Expression('2 + 0')expr3 = jmp.Expression('1 + 1')print(expr1 == expr2)print(expr1 == expr3)

```

#### __init__

**语法:** Expression(jsl=&lt;string&gt;)

**说明:** 创建新的 Expression 对象。

**JMP添加的版本:** 19

```python

import jmpfrom jmp import Expression, evalexpr = Expression(jsl="2 + 2")print(f'Expression: {expr}')print(f'Result: {eval(expr)}')expr.jsl = '1 + 1'print(f'Expression Adjusted: {eval(expr)}')

```

#### __ne__

**语法:** expression1 != expression2

**说明:** 若 Expression 对象与另一个 Expression 对象具有不同的内容，则不等性检验返回 true，否则返回 false。

**JMP添加的版本:** 19

```python

import jmpexpr1 = jmp.Expression('1 + 1')expr2 = jmp.Expression('2 + 0')expr3 = jmp.Expression('1 + 1')print(expr1 != expr2)print(expr1 != expr3)

```

#### __str__

**语法:** str( expr_obj )

**说明:** 返回包含有关 Expression 对象的所有信息的字符串表示。

**JMP添加的版本:** 19

```python

import jmpexpr = jmp.Expression(':Height / :Weight')print(expr)

```

#### jsl

**语法:** expr_obj.jsl expr_obj.jsl = &lt;string&gt;

**说明:** Expression jsl 属性，是可读并且可设置的。

**JMP添加的版本:** 19

```python

import jmpexpr = jmp.Expression(jsl='0 + 0')print(expr)expr.jsl = '2 + 2'print(expr)

```

#### 属性

#### 构造函数

#### 概念

#### 特殊项

#### 相等

**说明:** Expression 对象支持相等性和不等性检查。当比较两个 Expression 对象之间的相等性时，将比较值并且返回它们是否相等。这是 Expression 对象值的比较，而不是值的求值。

**JMP添加的版本:** 19

```python

import jmpexpr1 = jmp.Expression('1 + 1')expr2 = jmp.Expression('2 + 0')expr3 = jmp.Expression('1 + 1')print(expr1 == expr2)print(expr1 == expr3)print(expr1 != expr2)print(expr1 != expr3)

```

## jmp > Image

### 函数

#### __eq__

**语法:** image1 == image2

**说明:** 若 Image 对象与另一个 Image 对象具有相同的内容，则相等性检验返回 true，否则返回 false。

**JMP添加的版本:** 19

```python

import jmpimage1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')print(image1 == image2)print(image1 == image3)

```

#### __init__

**语法:** jmp.Image(path=&lt;string&gt;)

**说明:** 创建新的 Image 对象。

**JMP添加的版本:** 19

```python

import jmpimage = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')print(f'Image: {image}')jmp.open(image)

```

#### __ne__

**语法:** image1 != image2

**说明:** 若 Image 对象与另一个 Image 对象具有不同的内容，则不等性检验返回 true，否则返回 false。

**JMP添加的版本:** 19

```python

import jmpimage1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')print(image1 != image2)print(image1 != image3)

```

#### __str__

**语法:** str( image_obj )

**说明:** 返回包含有关 Image 对象的所有信息的字符串表示。

**JMP添加的版本:** 19

```python

import jmpimage = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')print(image)

```

#### 构造函数

#### 概念

#### 特殊项

#### 相等

**说明:** Image 对象支持相等性和不等性检查。当比较两个 Image 对象之间的相等性时，将比较值并且返回它们是否相等。

**JMP添加的版本:** 19

```python

import jmpimage1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')print(image1 == image2)print(image1 == image3)print(image1 != image2)print(image1 != image3)

```

## jmp > Project

### 函数

#### __init__

**语法:** prj = jmp.Project(&lt;name=&apos;Project name&apos;&gt;)

**说明:** 创建新的 Project 对象以供访问 JMP 项目和文件。

**JMP添加的版本:** 19

**命名的空项目**

```python

import jmpprj = jmp.Project('My Project')

```

**空项目**

```python

import jmpprj = jmp.Project()

```

**项目名**

```python

import jmpprj = jmp.Project()print(prj.name)

```

#### __str__

**语法:** str( project )

**说明:** 返回项目的字符串表示

**JMP添加的版本:** 19

```python

import jmpprj = jmp.Project()print( prj )

```

#### contents

**语法:** prj.name

**说明:** 返回项目中包含的文件名列表。

**JMP添加的版本:** 19

```python

import jmpprj = jmp.Project()print(prj.contents)

```

#### exists

**语法:** prj.exists(&apos;file_name&apos;)

**说明:** 接受一个文件名，并验证该文件是否存在于项目中。

**JMP添加的版本:** 19

```python

import jmpprj = jmp.Project()print( prj.exists('myfile.data') )

```

#### extract

**语法:** prj.extract(&apos;file_name&apos;)

**说明:** 接受一个文件名，并将该文件从项目提取到项目的临时目录。

**JMP添加的版本:** 19

```python

import jmpprj = jmp.Project()success = prj.extract('myfile.data')

```

#### extract_all

**语法:** prj.extract_all()

**说明:** 将所有项目文件提取到项目的临时目录。

**JMP添加的版本:** 19

```python

import jmpprj = jmp.Project()success = prj.extract_all()

```

#### is_extracted

**语法:** prj.is_extracted(&apos;file_name&apos;)

**说明:** 接受一个文件名，并检查该文件是否已从项目存档中提取。

**JMP添加的版本:** 19

```python

import jmpprj = jmp.Project()print( prj.is_extracted('myfile.data') )

```

#### name

**语法:** prj.name

**说明:** 项目名属性是只读的

**JMP添加的版本:** 19

```python

import jmpprj = jmp.Project()print(prj.name)

```

#### 函数

#### 属性

#### 构造函数

#### 特殊项

## jmp > RowState

### 函数

#### __eq__

**语法:** rs1 == rs2

**说明:** 若 RowState 对象与另一个 RowState 对象具有相同的内容，则相等性检验返回 true，否则返回 false。

**JMP添加的版本:** 19

```python

import jmprs1 = jmp.RowState(color=4, marker=2, selected=True)rs2 = jmp.RowState(color=11, excluded=True, labeled=True)rs3 = jmp.RowState(value=1057)print(rs1 == rs2)print(rs1 == rs3)

```

#### __init__

**语法:** jmp.RowState(selected?=&lt;boolean&gt;, hidden?=&lt;booleane&gt;, labeled?=&lt;boolean&gt;, excluded?=&lt;boolean&gt;, color?=&lt;int&gt;, marker?=&lt;int&gt;) jmp.RowState(value=&lt;int&gt;)

**说明:** 创建新的 RowState 对象。RowState 是一个对象，它包含 JMP 数据表中的行可以具有的六种特征中的任何一种: 已选定、已隐藏、已排除、已添加标签、已着色和已标记。

**JMP添加的版本:** 19

```python

import jmpfrom jmp import RowStaters = RowState(color=4, marker=2, selected=True)print(f'Row State: {rs}')rs_from_value = RowState(value=33)print(f'Row State from Value: {rs_from_value}')

```

#### __ne__

**语法:** image1 != image2

**说明:** 若 RowState 对象与另一个 RowState 对象具有不同的内容，则不等性检验返回 true，否则返回 false。

**JMP添加的版本:** 19

```python

import jmprs1 = jmp.RowState(color=4, marker=2, selected=True)rs2 = jmp.RowState(color=11, excluded=True, labeled=True)rs3 = jmp.RowState(value=1057)print(rs1 != rs2)print(rs1 != rs3)

```

#### __str__

**语法:** str( rs_obj )

**说明:** 返回包含有关 RowState 对象的所有信息的字符串表示。

**JMP添加的版本:** 19

```python

import jmprs = jmp.RowState(color=11, excluded=True, labeled=True)print(rs)

```

#### color

**语法:** rs_obj.color rs_obj.color = &lt;int&gt;

**说明:** RowState 着色属性，是可读和可设置的。颜色从 0 到 84 之间选择。（0-15 基本色，16-31 深色，32-47 浅色，48-63 极深色，64-79 极浅色，80-84 灰色）

**JMP添加的版本:** 19

```python

import jmprs = jmp.RowState(color=5)print(rs)rs.color = 0print(rs)

```

#### excluded

**语法:** rs_obj.excluded rs_obj.excluded = &lt;boolean&gt;

**说明:** RowState 已排除属性，是可读和可设置的。

**JMP添加的版本:** 19

```python

import jmprs = jmp.RowState(excluded=True)print(rs)rs.excluded = False print(rs)

```

#### hidden

**语法:** rs_obj.hidden rs_obj.hidden = &lt;boolean&gt;

**说明:** RowState 已隐藏属性，是可读和可设置的。

**JMP添加的版本:** 19

```python

import jmprs = jmp.RowState(hidden=True)print(rs)rs.hidden = False print(rs)

```

#### labeled

**语法:** rs_obj.labeled rs_obj.labeled = &lt;boolean&gt;

**说明:** RowState 已添加标签属性，是可读和可设置的。

**JMP添加的版本:** 19

```python

import jmprs = jmp.RowState(labeled=True)print(rs)rs.labeled = False print(rs)

```

#### marker

**语法:** rs_obj.marker rs_obj.marker = &lt;int&gt;

**说明:** RowState 标记属性，是可读和可设置的。标记从 0 到 31 之间选择

**JMP添加的版本:** 19

```python

import jmprs = jmp.RowState(marker=3)print(rs)rs.marker = 0print(rs)

```

#### selected

**语法:** rs_obj.selected rs_obj.selected = &lt;boolean&gt;

**说明:** RowState 已选定属性，是可读和可设置的。

**JMP添加的版本:** 19

```python

import jmprs = jmp.RowState(selected=True)print(rs)rs.selected = False print(rs)

```

#### 属性

#### 构造函数

#### 概念

#### 特殊项

#### 相等

**说明:** RowState 对象支持相等性和不等性检查。当比较两个 RowState 对象之间的相等性时，将比较值并且返回它们是否相等。若两个 RowStates 具有相同的内容，但初始化方式不同，它们仍返回 true。

**JMP添加的版本:** 19

```python

import jmprs1 = jmp.RowState(color=4, marker=2, selected=True)rs2 = jmp.RowState(color=11, excluded=True, labeled=True)rs3 = jmp.RowState(value=1057)print(rs1 == rs2)print(rs1 == rs3)print(rs1 != rs2)print(rs1 != rs3)

```

## jmp > globals

### 函数

#### Iteration

**说明:** 全局属性支持在一组值中进行迭代。

**JMP添加的版本:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['e'] = 2.718jmp.run_jsl('''    show(::pi)''')for x in jmp.globals:    print( x )

```

#### __getitem__

**语法:** value = jmp.globals[&apos;name&apos;]

**说明:** 获取 JSL 全局变量作为 Python 对象。若无法找到该对象则返回 None。为无法处理的数据类型返回不透明类型。能够传输与 Python Send() 和 Python Get() 相同类型的对象。

**JMP添加的版本:** 19

```python

import jmpjmp.run_jsl('''    pi = 3.1415929''')print( jmp.globals['pi'] )

```

#### __len__

**语法:** length = len( jmp.globals )

**说明:** 返回 JSL 全局环境中的符号数。

**JMP添加的版本:** 19

```python

import jmpprint( len( jmp.globals ) )jmp.globals['pi'] = 3.1415927print( len( jmp.globals ) )jmp.globals['e'] =  2.7182818print( len( jmp.globals ) )

```

#### __setitem__

**语法:** jmp.globals[&apos;name&apos;] = 值

**说明:** 由于 Python 作用域和 Python Get() 设计的原因，只有 Python 全局作用域中的变量可通过 Python Get() 访问。jmp.globals 词典提供了直接从 Python 代码设置或创建 JSL 变量的能力。值类型可以是 Python Get() 当前支持的任何 Python 类型。

**JMP添加的版本:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.run_jsl('''    show(pi)''')

```

#### __str__

**语法:** str(jmp.globals)

**说明:** 以词典表示形式显示全局变量的内容。请注意，全局变量词典由 JMP 本身使用，因此可能会有其他条目。

**JMP添加的版本:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['e'] =  2.7182818jmp.globals['Bb'] = 'bumble bee'print( jmp.globals )d = str(jmp.globals)print(d)

```

#### get

**语法:** value = jmp.globals.get(&apos;name&apos;)

**说明:** get() 函数返回给定键的值。与 JSL 一样，该键是一个模糊匹配。

**JMP添加的版本:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['an A'] = 'Annie'print( jmp.globals.get('pi') )                        print( jmp.globals.get('ana') )

```

#### items

**语法:** item_list = jmp.globals.items()

**说明:** 返回命名空间中的键值对列表。请注意，全局变量词典由 JMP 本身使用，因此可能会有其他条目。

**JMP添加的版本:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['bB'] = 'Bumble Bee'print( jmp.globals.items() )

```

#### keys

**语法:** key_list = jmp.globals.keys()

**说明:** 返回命名空间中的键列表。请注意，全局变量词典由 JMP 本身使用，因此可能会有其他条目。

**JMP添加的版本:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['bB'] = 'Bumble Bee'print( jmp.globals.keys() )

```

#### values

**语法:** value_list = jmp.globals.values()

**说明:** 返回命名空间中的值。请注意，全局变量词典由 JMP 本身使用，因此可能会有其他条目。

**JMP添加的版本:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['bB'] = 'Bumble Bee'print( jmp.globals.values() )

```

#### 方法

#### 概念

#### 特殊项

## jmp > here

### 函数

#### Iteration

**说明:** here 属性支持在“here”命名空间的值中进行迭代。

**JMP添加的版本:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.globals['e'] = 2.718jmp.run_jsl('''    Names Default to Here(1);    show(pi)''')for x in jmp.here:    print( x )print([x for x in jmp.globals])

```

#### __getitem__

**语法:** value = jmp.here[&apos;name&apos;]

**说明:** 从当前的“here”命名空间获取一个 JSL 变量作为 Python 对象。若无法找到该对象则返回 None，或者对于尚无法处理的数据类型则返回不透明类型。提供在本地 Python 作用域中直接检索 JSL 变量的功能。支持传输与 Python Send() 相同类型的对象。请注意，在 JSL 命名空间作用域中，“here”命名空间仅限于脚本提交过程本地访问，从不同脚本窗口提交的代码将具有不同的“here”名称空间。包含另一个脚本的代码只有一个“here”命名空间。该共享命名空间也适用于通过 Submit() 或 Execute() 运行 Python 的 JSL 脚本，以及调用 run_jsl() 的 Python 脚本。

**JMP添加的版本:** 19

**Scope**

```python

import jmpjmp.run_jsl('''Names Default to Here(1);here_v = "here";Show(here_v);''')print( f'temporary: {jmp.here['here_v']}' )try:        print(here_v)except:    print('here_v is not in Python globals().')def scoped():    v = jmp.here['here_v']    print(f'scoped: {v}')    scoped()try:        print(v)except:    print('v is local to scoped().')

```

**示例 1**

```python

import jmpjmp.globals['e'] = 2.71828jmp.run_jsl('''    Names Default to Here(1);    pi = 3.1415929;    show(::e);''')print( jmp.here['pi'] )

```

#### __len__

**语法:** length = len( jmp.here )

**说明:** 返回 JSL“here”命名空间中的符号数。

**JMP添加的版本:** 19

```python

import jmpprint( len( jmp.here ) )jmp.here['pi'] = 3.1415927print( len( jmp.here ) )jmp.here['e'] =  2.7182818print( len( jmp.here ) )

```

#### __setitem__

**语法:** jmp.here[&apos;name&apos;] = value

**说明:** 提供在 JSL 脚本的“here”命名空间中设置值的方法。这允许发回 Python Get() 无法到达的值。Python Get() 只能看到 Python 全局作用域内的变量。支持与 Python Get() 相同的对象类型。请注意，在 JSL 命名空间作用域中，“here”命名空间仅限于脚本提交的本地访问。从不同脚本窗口提交的代码将具有不同的“here”名称空间。包含另一个脚本的代码只有一个“here”命名空间。这同样适用于通过 Submit() 或 Execute() 运行 Python 的 JSL 脚本，以及调用 run_jsl() 的 Python 脚本。

**JMP添加的版本:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.run_jsl('''    Names Default to Here(1);    show(pi)''')

```

#### __str__

**语法:** str(jmp.here)

**说明:** 以词典表示形式显示 here 的内容。

**JMP添加的版本:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['e'] =  2.7182818jmp.here['Bb'] = 'bumble bee'print( jmp.here )d = str(jmp.here)print(d)

```

#### get

**语法:** value = jmp.here.get(&apos;name&apos;)

**说明:** get() 函数返回给定键的值。与 JSL 一样，该键是一个模糊匹配。

**JMP添加的版本:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.get('pi') )                        print( jmp.here.get('b  b') )

```

#### items

**语法:** item_list = jmp.here.items()

**说明:** 返回命名空间中的键值对列表。

**JMP添加的版本:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.items() )

```

#### keys

**语法:** key_list = jmp.here.keys()

**说明:** 返回命名空间中的键列表。

**JMP添加的版本:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.keys() )

```

#### values

**语法:** value_list = jmp.here.values()

**说明:** 返回命名空间中的值。

**JMP添加的版本:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.values() )

```

#### 方法

#### 概念

#### 特殊项

## jmp > live

### 函数

#### get_credentials()

**语法:** jmp.live.get_credentials(&lt;credential_name&gt;)

**说明:** 在 JMP Live 数据刷新脚本中，返回分配给脚本的具有给定名称的凭证（若未提供名称，则为默认凭证）。返回值是具有“username”、“password”和“key_file_path”键的词典。

**JMP添加的版本:** 19

```python

import jmpdt = jmp.DataTable()credentials = jmp.live.get_credentials()# login to external data source using credentials['username'] and credentials['password']# create dt using obtained datajmp.live.set_result(dt)

```

#### get_import_file_path()

**语法:** jmp.live.get_import_file_path()

**说明:** 在 JMP Live 数据导入脚本中，返回已上传的导入文件的路径。

**JMP添加的版本:** 19

```python

import jmpdt = jmp.DataTable()importPath = jmp.live.get_import_file_path()with open(importPath) as importFile:    # [import data from importFile to dt]jmp.live.set_result(dt)

```

#### set_result()

**语法:** jmp.live.set_result()

**说明:** 在 JMP Live 数据刷新和导入脚本中，设置结果表。将结果设置为“无”可取消更新。

**JMP添加的版本:** 19

```python

import jmpdt = jmp.DataTable()shouldUpdate = True# add data to dt, or set shouldUpdate to Falseif shouldUpdate:    jmp.live.set_result(dt)else:    jmp.live.set_result(None)

```

#### 函数

## jmp > log

### 函数

#### flush

**语法:** jmp.log.flush()

**说明:** log.flush() 和 log.write() 函数重载了 Python 的 stdio 以及 stderr flush() 和 write() 函数。这些主要供 JMP 内部使用，因为它们将 Python 的输出定向到 JMP 日志和嵌入式日志窗口。jmp.log.flush() 是 NOP，并且返回空字符串。

**JMP添加的版本:** 18

```python

import jmpimport jmp.logjmp.log.flush()

```

#### write

**语法:** jmp.log.write(&apos;message&apos;)

**说明:** log.flush() 和 log.write() 函数重载 Python 的 stdio 以及 stderr flush() 和 write() 函数。这些主要供 JMP 内部使用，因为它们将 Python 的输出定向到 JMP 日志和嵌入式日志窗口。程序可以调用 jmp.log.write(&apos;message&apos;) 将消息显式发送至 JMP 日志或嵌入式日志窗口。

**JMP添加的版本:** 18

```python

import jmpimport jmp.logjmp.log.write('I am a log message.')

```

#### 函数

## jmp

### 函数

#### ALL_HOME

**语法:** jmp.ALL_HOME

**说明:** 对应于 JSL 的 $ALL_HOME 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.ALL_HOME)

```

#### BUILTIN_SCRIPTS

**语法:** jmp.BUILTIN_SCRIPTS

**说明:** 对应于 JSL 的 $BUILTIN_SCRIPTS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.BUILTIN_SCRIPTS)

```

#### DESKTOP

**语法:** jmp.DESKTOP

**说明:** 对应于 JSL 的 $DESKTOP 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.DESKTOP)

```

#### DOCUMENTS

**语法:** jmp.DOCUMENTS

**说明:** 对应于 JSL 的 $DOCUMENTS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.DOCUMENTS)

```

#### DOWNLOADS

**语法:** jmp.DOWNLOADS

**说明:** 对应于 JSL 的 $DOWNLOADS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.DOWNLOADS)

```

#### DataType

**语法:** jmp.DataType.enum_value

**说明:** jmp.DataType 是表示 JMP 列的数据类型的枚举。这些与 jmp.DataTable.new_column() 函数一起使用，以创建除默认“数值”类型以外的列。

**JMP添加的版本:** 18

```python

import jmp# for the sake of typingfrom jmp import DataType as dTypeprint('jmp.DataType members:')print( list(map(lambda c: c.name, dType)) )

```

#### HOME

**语法:** jmp.HOME

**说明:** 对应于 JSL 的 $HOME 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.HOME)

```

#### JMPPRJ

**语法:** jmp.JMPPRJ

**说明:** 返回项目的临时目录的物理路径。返回当前工作目录，若项目中没有运行脚本，则返回“无”。

**JMP添加的版本:** 19

```python

import jmpprint(jmp.JMPPRJ)

```

#### ModelingType

**语法:** jmp.ModelingType.enum_value

**说明:** jmp.ModelingType 是表示 JMP 列的建模或分析类型的枚举。这些与 jmp.DataTable.new_column() 函数一起使用，以创建除默认“连续”建模类型以外的列。请注意，TypeNone 不同于 JMP 的建模类型“无”，因为“无”是 Python 关键字。

**JMP添加的版本:** 18

```python

import jmp# for the sake of typingfrom jmp import ModelingType as mTypeprint('jmp.ModleingType members:')print( list(map(lambda c: c.name, mType)) )

```

#### PYTHONW_EXE

**语法:** jmp.PYTHONW_EXE

**说明:** JMP 安装的无控制台 Python 可执行文件的路径（仅 Windows）。

**JMP添加的版本:** 19

```python

import jmpimport platformif platform.system() == "Windows":    print(jmp.PYTHONW_EXE)

```

#### PYTHON_EXE

**语法:** jmp.PYTHON_EXE

**说明:** JMP 安装的 Python 可执行文件的路径。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.PYTHON_EXE)

```

#### PY_USER_APPDIR

**语法:** jmp.PY_USER_APPDIR

**说明:** 作为 JMP 的 Python 支持基础的用户目录位置的路径。软件安装点包目录位于该目录层次中。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.PY_USER_APPDIR)

```

#### SAMPLE_APPS

**语法:** jmp.SAMPLE_APPS

**说明:** 对应于 JSL 的 $SAMPLE_APPS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_APPS)

```

#### SAMPLE_DASHBOARDS

**语法:** jmp.SAMPLE_DASHBOARDS

**说明:** 对应于 JSL 的 $SAMPLE_DASHBOARDS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_DASHBOARDS)

```

#### SAMPLE_DATA

**语法:** jmp.SAMPLE_DATA

**说明:** 对应于 JSL 的 $SAMPLE_DATA 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_DATA)

```

#### SAMPLE_IMAGES

**语法:** jmp.SAMPLE_IMAGES

**说明:** 对应于 JSL 的 $SAMPLE_IMAGES 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_IMAGES)

```

#### SAMPLE_IMPORT_DATA

**语法:** jmp.SAMPLE_IMPORT_DATA

**说明:** 对应于 JSL 的 $SAMPLE_IMPORT_DATA 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_IMPORT_DATA)

```

#### SAMPLE_PROJECTS

**语法:** jmp.SAMPLE_PROJECTS

**说明:** 对应于 JSL 的 $SAMPLE_PROJECTS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_PROJECTS)

```

#### SAMPLE_SCRIPTS

**语法:** jmp.SAMPLE_SCRIPTS

**说明:** 对应于 JSL 的 $SAMPLE_SCRIPTS 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.SAMPLE_SCRIPTS)

```

#### TEMP

**语法:** jmp.TEMP

**说明:** 对应于 JSL 的 $TEMP 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.TEMP)

```

#### USER_APPDATA

**语法:** jmp.USER_APPDATA

**说明:** 对应于 JSL 的 $USER_APPDATA 目录的值。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.USER_APPDATA)

```

#### __jmp_version__

**语法:** jmp.__jmp_version__

**说明:** JMP 可执行文件的版本号。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.__jmp_version__)

```

#### __version__

**语法:** jmp.__version__

**说明:** “jmp”导入包的版本号。这不是 JMP 版本。

**JMP添加的版本:** 18

```python

import jmpprint(jmp.__version__)

```

#### current

**语法:** dt = jmp.current()

**说明:** 返回当前 JMP 数据表的 DataTable 对象。

**JMP添加的版本:** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(jmp.current())

```

#### eval

**语法:** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**说明:** 计算参数并返回结果。

**JMP添加的版本:** 19

```python

import jmpfrom jmp import eval, Expressionexpression = Expression("2 + 2")result = eval(expression)print(result)

```

#### from_dataframe

**语法:** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;, visibility=&lt;string&gt;)

**说明:** 从协议兼容逻辑库的数据框返回一个 jmp.DataTable 对象。

**JMP添加的版本:** 19

**CSV 回退**

```python

import jmpimport jmputils        try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe(df)print(dt)

```

**Ibis 转 JMP**

```python

import jmpimport jmputils try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)    jmputils.jpip('install', 'ibis-framework[duckdb,examples]') except Exception as e:    print(f'Install failed with exception: {e}')          import pandas as pd import ibis  pandas_df = pd.DataFrame(     [["a", 1, 2], ["b", 3, 4]],     columns=["one", "two", "three"], ) t = ibis.memtable(pandas_df, name="t") print(t) dt = jmp.from_dataframe(t) print(dt)

```

**JMP 转 Pandas**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pddt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")pandas_df = (pd.api.interchange.from_dataframe(dt))print(pandas_df)

```

**JMP 转 Polars**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as pldt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")polars_df = pl.from_dataframe(dt)print(polars_df)

```

**Pandas 转 JMP**

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df)print(dt)

```

**Polars 转 JMP**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as plfrom datetime import datepolars_df = pl.DataFrame( {    "foo": [1, 2, 3],    "bar": [6.0, 7.0, 8.0],    "ham": [date(2020, 1, 2), date(2021, 3, 4), date(2022, 5, 6)],  } ) print(polars_df) dt = jmp.from_dataframe(polars_df) print(dt)

```

**Visibility**

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df, visibility="invisible")#dt = jmp.from_dataframe(pandas_df, visibility="private")print(dt)

```

#### from_dataframe_using_csv

**语法:** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;, visibility=&lt;string&gt;)

**说明:** 使用提供的 CSV 转换方法从逻辑库的数据框返回一个 jmp.DataTable 对象。

**JMP添加的版本:** 19

**General**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})try:    # Try converting object without CSV fallback    dt = jmp.from_dataframe(df, True, False)    print("Converted using jmp.from_dataframe()")except:     # Explicitly convert using CSV    dt = jmp.from_dataframe_using_csv(df)    print("Converted using jmp.from_dataframe_using_csv()")print(dt)

```

**Visibility**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe_using_csv(df, visibility="invisible")#dt = jmp.from_dataframe_using_csv(df, visibility="private")print(dt)

```

#### open

**语法:** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**说明:** 打开位于 file_path 的文件。若该文件是 .jmp 文件或导入到 JMP 数据表的文件，则返回的对象将是 DataTable 对象。否则将返回 True 或 False 来表示成功或失败。可选的可见性参数将控制打开的文件是否在视图中隐藏。“不可见”仅是在视图中隐藏，而仍然出现在最近使用的文件菜单和主窗口中。对于“私有”表，返回的引用是对表的唯一引用，它不会出现在任何文件列表中。

**JMP添加的版本:** 18

**Excel**

```python

import jmpobj = jmp.open(jmp.SAMPLE_IMPORT_DATA + 'Bigclass.xlsx')print(obj)

```

**JMP**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt)

```

**JSL 脚本**

```python

import jmpobj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')print(obj)

```

**不可见**

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Invisible')dt = jmp.current()print(dt)  # successdt = jmp.table('Animals')print(dt)  # success# Select and run the above first if you want to see that even though# there is no window, Animals.jmp appears in recent files and# home window's list of filesdt.close(save=False);del dt

```

**私有**

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')dt = jmp.current()print(dt)  # => Nonetry:  dt = jmp.table('Animals')except FileNotFoundError:  print('Requested table not found')dt = jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')print(dt)dt.close(save=False)del dt

```

#### path_variable

**语法:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**说明:** 返回路径变量的值，路径变量是在路径名中要替换的比如 SAMPLE_DATA 这样的名称。

**JMP添加的版本:** 19

```python

import jmppath_value = jmp.path_variable('SAMPLE_DATA')if not path_value:    print('Invalid path variable.')else:    print(path_value)

```

#### r_name

**语法:** dt = jmp.r_name(jsl_var)

**说明:** 使用 R 变量命名规则将 JMP 变量名称映射到 R 变量名称。

**JMP添加的版本:** 19

```python

import jmprName = jmp.r_name('c d e')print(rName)

```

#### reset

**语法:** jmp.reset()

**说明:** 重置共享 Python 环境，主要清除针对对象的所有引用。这不会更改已导入模块的导入缓存。这是 Python 环境本身的局限性。正在运行的进程无法卸载加载共享逻辑库的模块。要重新加载纯 Python 代码，请参见 Python.org 文档中关于 importlib reload() 的说明。

**JMP添加的版本:** 19

```python

import jmppi = 3.1415927print(pi)jmp.reset()print(pi)

```

#### run_jsl

**语法:** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**说明:** 从 Python 环境中运行 JSL 脚本，包括 JSL Python 接口函数。可选的 echo= 参数（设置为 False 或 None 时）会停止显示的 JSL 源代码回显至日志。对于 Python Send() / Get() 支持的相同 JSL 对象类型，将返回结果。脚本失败或不支持的 JSL 对象类型将返回 None。

**JMP添加的版本:** 18

**列属性**

```python

import jmp# Create a data table# dt = jmp.DataTable(name='table_name', rows=n)pbp = jmp.DataTable(rows=5)pbp.name = 'Powered by Python'pbp.new_column('Name', jmp.DataType.Character)pbp.new_column('Hourly Rate')#pbp['Name'] = ['Janet', 'James', 'Jerry', 'Jenny', 'Jill']pbp[1] = [ 14.25, 9.75, 15.0, 12.35, '17.25']  # last value bad => becomes missingpbp[1][4] = 17.25## Change column format: Hourly Ratejmp.run_jsl('''Data Table( "Powered by Python" ):Hourly Rate << Format( "Currency", "USD", 17, 2 );Data Table( "Powered by Python" ):Name << Set Display Width( 75 );''')

```

**获取版本**

```python

import jmpjmp.run_jsl('Python Get Version();')

```

**返回的值**

```python

import jmpvalue = jmp.run_jsl('''Names default to here(1);an A = 1.5;x = 5 * anA;''')print( f'{value} = jmp.run_jsl()')

```

#### table

**语法:** dt = jmp.table(&apos;table_name&apos;)

**说明:** 为已打开的具有“table_name”的表返回一个 DataTable 对象

**JMP添加的版本:** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( jmp.table('Big Class') )

```

#### 函数

#### 常数

#### 枚举

## jmpex > R - module > R - class

### 函数

#### __init__

**语法:** jmpex.R.R( &lt;&apos;rpy2&apos;&gt; )

**说明:** 用于创建 R 扩展类对象的函数。用于指定 R 支持后端的可选参数。目前仅支持“rpy2”。若未指定参数，则这是默认值。

**JMP添加的版本:** 19

```python

import jmpfrom jmpex.R import Rjr = R()print(jr.r_version())

```

#### __version__

**语法:** ver = jmpex.R.R().__version__

**说明:** jmpex 包的 R 支持版本。

**JMP添加的版本:** 19

```python

import jmpfrom jmpex.R import Rjr = R()print(jr.__version__)

```

#### get

**语法:** pyobj = jmpex.R.R.get( &apos;name&apos; )

**说明:** 从 R 环境中获取命名变量，并使用 r2obj() 函数将其返回给 Python。R DataFrame 作为 pandas.DataFrame 返回。

**JMP添加的版本:** 19

**字符串向量**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()s = dt['name']nas = np.array(s)print(nas.__class__)print(nas)rv = ro.vectors.StrVector(nas)print(rv.__class__)print(rv)

```

**数值型向量**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# initialize jmpex.R.R classjr = R()a = dt['age']nar = np.array( a )print(nar.__class__)print(nar)rv = ro.vectors.FloatVector(nar)print(rv.__class__)print(rv)

```

**设置列**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()a = jr.set( dt['age'], 'rage' )   # as_name required from Pythonprint(a.__class__)print(a)ra = jr.get('rage')print( ra.__class__ )print( ra )

```

**设置数据表**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()d = jr.set( dt , 'rdt' )   # as_name required from Pythonprint(d.__class__)print(d)# A R DataFrame is returned to Python as a pandas.DataFramerdt = jr.get('rdt')print( rdt.__class__ )print( rdt )

```

#### is_connected

**语法:** jmpex.R.R.is_connected( )

**说明:** 无论 R() 实例对象是否存在都可用的静态函数。指示 R 子系统已初始化。

**JMP添加的版本:** 19

```python

import jmpfrom jmpex.R import Rprint(f'R initialized: {R.is_connected()}')jr = R()print(f'R initialized: {R.is_connected()}')

```

#### obj2r

**语法:** jmpex.R.R.obj2r( var )

**说明:** 从 Python 对象创建 R 对象。

**JMP添加的版本:** 19

```python

import jmpfrom jmpex.R import Rjr = R()d = { "canine": ["poodle", "dalmation", "wolf"],       "ages": [ 1, 3, 5],       "vet bill": [200.0, 300.57, 2000.99] }      r_obj = jr.obj2r( d )p_obj = jr.r2obj( r_obj )print(r_obj.__class__)print(r_obj)print(p_obj.__class__)print(p_obj)

```

#### r2obj

**语法:** jmpex.R.R.r2obj( var )

**说明:** 从 R 对象创建常规 Python 对象。

**JMP添加的版本:** 19

```python

import jmpfrom jmpex.R import Rjr = R()d = { "canine": ["poodle", "dalmation", "wolf"],       "ages": [ 1, 3, 5],       "vet bill": [200.0, 300.57, 2000.99] }      r_obj = jr.obj2r( d )p_obj = jr.r2obj( r_obj )print(r_obj.__class__)print(r_obj)print(p_obj.__class__)print(p_obj)

```

#### r_version

**语法:** ver = jmpex.R.R.r_version( )

**说明:** 返回 R 的版本。

**JMP添加的版本:** 19

```python

import jmpfrom jmpex.R import Rjr = R()print(f'R Version: {jr.r_version()}')

```

#### set

**语法:** jmpex.R.R.set( var, as_name )

**说明:** 将 Python 变量设置到由“as_name”参数命名的 R 环境中。R 对象是在内部使用 obj2r() 函数创建的。name 已通过相应的 name -> R Name() 函数传递，以确保 name 是有效的 R 变量名。

**JMP添加的版本:** 19

**字符串向量**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()s = dt['name']nas = np.array(s)print(nas.__class__)print(nas)rv = ro.vectors.StrVector(nas)print(rv.__class__)print(rv)

```

**数值型向量**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# initialize jmpex.Rjr = R()a = dt['age']nar = np.array( a )print(nar.__class__)print(nar)rv = ro.vectors.FloatVector(nar)print(rv.__class__)print(rv)

```

**设置列**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()a = jr.set( dt['age'], 'rage' )   # as_name required from Pythonprint(a.__class__)print(a)ra = jr.get('rage')print( ra.__class__ )print( ra )

```

**设置数据表**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()# R DataFrame can be jmp.DataTable, pandas.DataFrame, ...d = jr.set( dt , 'Big.Class' )   # becomes 'Big.Class'jr.submit('Big.Class')           # see: JSL R Send File(); R Submit();print(d.__class__)print(d)bc = jr.get('Big.Class')print( bc.__class__ )print( bc )

```

#### submit

**语法:** jmpex.R.R.submit( &apos;R script&apos; )

**说明:** 提交 R 程序代码进行评估。将结果作为 Python 对象返回（若可用）。

**JMP添加的版本:** 19

**脚本**

```python

import jmpfrom jmpex.R import Rjr = R()jr.submit('''x <- rnorm (100)y <- x**2 + rnorm (100)''')

```

**设置数据表**

```python

import jmpfrom jmpex.R import R           jr = R()dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# R DataFrame can be jmp.DataTable, pandas.DataFrame, ...d = jr.set( dt , 'Big.Class' )   # becomes 'Big.Class'df = jr.submit('Big.Class')           # see: JSL R Send File(); R Submit();print(f'DataFrame:\n{df}')print(d.__class__)print(d)bc = jr.get('Big.Class')print( bc.__class__ )print( bc )

```

#### submit_file

**语法:** jmpex.R.R.submit_file(&apos;path_to_R_script&apos;)

**说明:** 提交 R 脚本文件进行评估。将结果作为 Python 对象返回（若可用）。

**JMP添加的版本:** 19

```python

import jmpimport osfrom jmpex.R import Rjr = R()result = jr.submit_file( os.path.join(jmp.SAMPLE_SCRIPTS, 'R', 'SI_example.R') )print(result)print(result.__class__)po = jr.r2obj(result)print(po)print(po.__class__)

```

#### 函数

#### 常数

#### 构造函数

## jmpex > R - module

### 函数

#### R

**说明:** R 模块表示包含 Python 类 R 的 jmpex.R。类 jmpex.R.R 实施接口功能。

**JMP添加的版本:** 19

#### 概念

## jmpex

### 函数

#### jmpex - package

**说明:** jmpex 包中包含 JMP 支持的扩展接口。当前它仅包含一个 R 支持模块。

**JMP添加的版本:** 19

#### 概念

## jmputils

### 函数

#### __version__

**说明:** jmputils 包的版本号。

**JMP添加的版本:** 19

```python

import jmpimport jmputilsprint( jmputils.__version__ )

```

#### create_jpip

**语法:** create_jpip( &apos;directory_path&apos; )

**说明:** 用于在指定的目录中创建 jpip 脚本的终端/命令 shell 版本的函数。jpip 脚本封装 Python pip 命令，确保配置了适当的环境变量。这确保 jpip 安装的包安装在 JMP 安装点包目录中。

**JMP添加的版本:** 18

```python

import jmpimport jmputilsjmp.run_jsl('''dest_path = Pick Directory("Directory location to save jpip script.");// Pick Directory on windows returns a leading / use Convert File Path()If( Host is("Windows"),    dest_path = Convert File Path( dest_path, windows ));Python Send(dest_path);''')jmputils.create_jpip(dest_path)

```

#### is_installed

**语法:** success = is_installed(package_name)

**说明:** 若安装了 package_name 则返回 True | False。

**JMP添加的版本:** 19

**包未找到**

```python

import jmpimport jmputilsif jmputils.is_installed('invalidjmppackage'):    print("Surprise!")else:    print('Package not found.')

```

**示例 1**

```python

import jmpimport jmputilsif not jmputils.is_installed('certifi'):    result = jmputils.jpip('install', 'certifi', echo=False)    try:        result.check_returncode()        print( jmputils.package_version('certifi') )    except Exception as e:        print(f'jpip install failed with reason: {e}')else:    print( jmputils.package_version('certifi') )

```

#### jpip

**语法:** result = jpip( &apos;pip_cmd&apos;, packages=&apos;&apos;, echo=True )

**说明:** 该函数可从 JMP 内部调用，用于封装 Python pip 命令。该函数返回一个 subprocess.CompletedProcess 对象。向该函数传递一个字符串形式的 pip 命令参数，以及可选的用空格分隔的待安装包字符串。更可靠的替代方案是使用包含单独参数的列表。该列表方法即使在目录路径包含空格时也能正常工作。packages 参数默认为空字符串。“jmputils”包是 JMP 嵌入式 Python 标准逻辑库的一部分。jmputils 中的函数仅利用 Python 标准逻辑库调用或 JMP 内置功能。

**JMP添加的版本:** 18

**jmpex**

```python

import jmpimport osfrom jmputils import jpip# Install jmpex package jpip('install', [ os.path.join(jmp.SAMPLE_SCRIPTS, 'Python', 'jmpex.zip') ] )

```

**列表**

```python

import jmpfrom jmputils import jpipjpip('list')

```

**卸载**

```python

import jmpfrom jmputils import jpip# R support package jmpex uninstalled like any other Python package. jpip('uninstall', 'jmpex')

```

**安装**

```python

import jmpfrom jmputils import jpip# update to latest version of pip and setuptools then install numpy & pandasjpip('install --upgrade', 'pip setuptools certifi')jpip('install', 'numpy pandas')

```

**安装（列表参数）**

```python

import jmpfrom jmputils import jpip# update to latest version of pip and setuptools then install numpy & pandasjpip(['install', '--upgrade'], ['pip', 'setuptools', 'certifi'])jpip(['install'], ['numpy', 'pandas'])

```

**本地包**

```python

import jmpfrom jmputils import jpipjmp.run_jsl('''dest_path = Pick Directory("Directory location of local package directory to install.");// Pick Directory on windows returns a leading / use Convert File Path()If( Host is("Windows"),    dest_path = Convert File Path( dest_path, windows ));Python Send(dest_path);''')print(dest_path)jpip('install', dest_path)

```

**要求文件**

```python

import jmpfrom jmputils import jpipjmp.run_jsl('''src_path = Pick File(    "Select requirements.txt File",    "$DOCUMENTS",    {"TXT Files|txt", "All Files|*"},    0,    0,    "requirements.txt");show(src_path);If( Host is("Windows"),    src_path = Convert File Path( src_path, windows ));show(src_path);Python Send(src_path);''')jpip('install', f'-r {src_path}')

```

#### package_version

**语法:** package_version(package_name)

**说明:** 已命名包（若已安装）的版本号

**JMP添加的版本:** 19

```python

import jmpimport jmputils# package_version() internally calls is_installed()print( jmputils.package_version('certifi') )

```

#### packages

**语法:** pkgs_dict = packages()

**说明:** 返回包含已安装包列表的 Python 词典。

**JMP添加的版本:** 19

```python

import jmpimport jmputilspkgs = jmputils.packages()print('Package,', 'Version')for key, value in pkgs.items():    print(f'{key}: {value}')

```

#### 函数

#### 常数

