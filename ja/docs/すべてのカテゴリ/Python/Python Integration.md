# Python Integration



## 関数

### ALL_HOME

**構文:** jmp.ALL_HOME

**説明:** JSLの$ALL_HOMEディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.ALL_HOME)

```

### BUILTIN_SCRIPTS

**構文:** jmp.BUILTIN_SCRIPTS

**説明:** JSLの$BUILTIN_SCRIPTSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.BUILTIN_SCRIPTS)

```

### DESKTOP

**構文:** jmp.DESKTOP

**説明:** JSLの$DESKTOPディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.DESKTOP)

```

### DOCUMENTS

**構文:** jmp.DOCUMENTS

**説明:** JSLの$DOCUMENTSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.DOCUMENTS)

```

### DOWNLOADS

**構文:** jmp.DOWNLOADS

**説明:** JSLの$DOWNLOADSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.DOWNLOADS)

```

### DataType

**構文:** jmp.DataType.enum_value

**説明:** jmp.DataTypeは、JMP列のデータタイプを示すリスト。デフォルトのNumeric(数値)タイプ以外の列を作成する場合に、jmp.DataTable.new_column()関数でこれらのデータタイプを使用する。

**JMP追加されたバージョン:** 18

```python

import jmp

# for the sake of typing
from jmp import DataType as dType
print('jmp.DataType members:')
print( list(map(lambda c: c.name, dType)) )

```

### Enum

### HOME

**構文:** jmp.HOME

**説明:** JSLの$HOMEディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.HOME)

```

### JMPPRJ

**構文:** jmp.JMPPRJ

**説明:** プロジェクトの一時ディレクトリの物理パスを戻す。現在の作業ディレクトリを戻すか、スクリプトがプロジェクト内で実行されていない場合は、None (なし)を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp
print(jmp.JMPPRJ)

```

### ModelingType

**構文:** jmp.ModelingType.enum_value

**説明:** jmp.ModelingTypeは、JMP列の尺度を示すリスト。デフォルトのContinuous(連続尺度)以外の列を作成する場合に、jmp.DataTable.new_column()関数でこれらの尺度を使用する。NoneはPythonのキーワードであるため、TypeNoneはJMPの尺度である「None」(なし)と違う名前になっている。

**JMP追加されたバージョン:** 18

```python

import jmp

# for the sake of typing
from jmp import ModelingType as mType
print('jmp.ModleingType members:')
print( list(map(lambda c: c.name, mType)) )

```

### PYTHONW_EXE

**構文:** jmp.PYTHONW_EXE

**説明:** JMPでインストールされた非コンソールPython実行ファイルのパス(Windowsのみ)。

**JMP追加されたバージョン:** 19

```python

import jmp

import platform
if platform.system() == "Windows":
    print(jmp.PYTHONW_EXE)

```

### PYTHON_EXE

**構文:** jmp.PYTHON_EXE

**説明:** JMPでインストールされたPython実行ファイルのパス。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.PYTHON_EXE)

```

### PY_USER_APPDIR

**構文:** jmp.PY_USER_APPDIR

**説明:** JMPによるPythonサポートの基礎となるユーザディレクトリのパス。site-packagesディレクトリは、このディレクトリ階層に含まれる。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.PY_USER_APPDIR)

```

### SAMPLE_APPS

**構文:** jmp.SAMPLE_APPS

**説明:** JSLの$SAMPLE_APPSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_APPS)

```

### SAMPLE_DASHBOARDS

**構文:** jmp.SAMPLE_DASHBOARDS

**説明:** JSLの$SAMPLE_DASHBOARDSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_DASHBOARDS)

```

### SAMPLE_DATA

**構文:** jmp.SAMPLE_DATA

**説明:** JSLの$SAMPLE_DATAディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_DATA)

```

### SAMPLE_IMAGES

**構文:** jmp.SAMPLE_IMAGES

**説明:** JSLの$SAMPLE_IMAGESディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_IMAGES)

```

### SAMPLE_IMPORT_DATA

**構文:** jmp.SAMPLE_IMPORT_DATA

**説明:** JSLの$SAMPLE_IMPORT_DATAディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_IMPORT_DATA)

```

### SAMPLE_PROJECTS

**構文:** jmp.SAMPLE_PROJECTS

**説明:** JSLの$SAMPLE_PROJECTSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_PROJECTS)

```

### SAMPLE_SCRIPTS

**構文:** jmp.SAMPLE_SCRIPTS

**説明:** JSLの$SAMPLE_SCRIPTSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_SCRIPTS)

```

### TEMP

**構文:** jmp.TEMP

**説明:** JSLの$TEMPディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.TEMP)

```

### USER_APPDATA

**構文:** jmp.USER_APPDATA

**説明:** JSLの$USER_APPDATAディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.USER_APPDATA)

```

### __jmp_version__

**構文:** jmp.__jmp_version__

**説明:** JMP実行ファイルのバージョン番号。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.__jmp_version__)

```

### __version__

**構文:** jmp.__version__

**説明:** インポートした「jmp」パッケージのバージョン番号。JMPそのもののバージョンではない。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.__version__)

```

### current

**構文:** dt = jmp.current()

**説明:** 現在のJMPデータテーブルのDataTableオブジェクトを戻す。

**JMP追加されたバージョン:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(jmp.current())

```

### eval

**構文:** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**説明:** 引数を評価し、その結果を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

from jmp import eval, Expression
expression = Expression("2 + 2")
result = eval(expression)
print(result)

```

### from_dataframe

**構文:** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;)

**説明:** プロトコルに準拠したライブラリのデータフレームからjmp.DataTableオブジェクトを戻す。

**JMP追加されたバージョン:** 19

#### CSV Fallback

```python

import jmp

import jmputils
jmputils.jpip('install --upgrade', 'pip setuptools')
jmputils.jpip('install', 'pandas')

import pandas as pd

# Object columns are unsupported with jmp.from_dataframe() 
df = pd.DataFrame({
    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),
})

dt = jmp.from_dataframe(df)
print(dt)

```

#### Ibis to JMP

```python

import jmp

import jmputils
jmputils.jpip('install --upgrade', 'pip setuptools')
jmputils.jpip('install', 'pandas ibis-framework[duckdb,examples]')

import pandas as pd
import ibis

pandas_df = pd.DataFrame(
    [["a", 1, 2], ["b", 3, 4]],
    columns=["one", "two", "three"],
)
t = ibis.memtable(pandas_df, name="t")
print(t)
dt = jmp.from_dataframe(t)
print(dt)

```

#### JMP to Pandas

```python

import jmp

import jmputils
jmputils.jpip('install --upgrade', 'pip setuptools')
jmputils.jpip('install', 'pandas')

import pandas as pd

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
pandas_df = (pd.api.interchange.from_dataframe(dt))
print(pandas_df)

```

#### JMP to Polars

```python

import jmp

import jmputils
jmputils.jpip('install --upgrade', 'pip setuptools')
jmputils.jpip('install', 'polars')
 
import polars as pl

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
polars_df = pl.from_dataframe(dt)
print(polars_df)

```

#### Pandas to JMP

```python

import jmp

import jmputils
jmputils.jpip('install --upgrade', 'pip setuptools')
jmputils.jpip('install', 'numpy pandas')

import pandas as pd
import numpy as np

pandas_df = pd.DataFrame(
    {
        "A": 1.0,
        "B": pd.Timestamp("20130102"),
        "C": pd.Series(1, index=list(range(4)), dtype="float32"),
        "D": np.array([3] * 4, dtype="int32"),
        "E": pd.Categorical(["test", "train", "test", "train"]),
        "F": "foo",
    }
)
print(pandas_df)

dt = jmp.from_dataframe(pandas_df)
print(dt)

```

#### Polars to JMP

```python

import jmp

import jmputils
jmputils.jpip('install --upgrade', 'pip setuptools')
jmputils.jpip('install', 'polars')

import polars as pl
from datetime import date

polars_df = pl.DataFrame(
    {
        "foo": [1, 2, 3],
        "bar": [6.0, 7.0, 8.0],
        "ham": [date(2020, 1, 2), date(2021, 3, 4), date(2022, 5, 6)],
    }
)
print(polars_df)
dt = jmp.from_dataframe(polars_df)
print(dt)

```

### from_dataframe_using_csv

**構文:** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;)

**説明:** 指定されたCSV変換メソッドを使って、ライブラリのデータフレームからjmp.DataTableオブジェクトを戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

import jmputils
jmputils.jpip('install', 'pandas')

import pandas as pd

# Object columns are unsupported with jmp.from_dataframe() 
df = pd.DataFrame({
    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),
})

try:
    # Try converting object without CSV fallback
    dt = jmp.from_dataframe(df, True, False)
    print("Converted using jmp.from_dataframe()")
except: 
    # Explicitly convert using CSV
    dt = jmp.from_dataframe_using_csv(df)
    print("Converted using jmp.from_dataframe_using_csv()")

print(dt)

```

### open

**構文:** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**説明:** file_pathにあるファイルを開く。.jmpファイル、またはJMPデータテーブルに読み込まれるファイルである場合は、DataTableオブジェクトが戻される。それ以外の場合は、成功(True)または失敗(False)が戻される。オプションのvisibilityパラメータは、開いたファイルをビューに表示するかどうかを制御する。invisible(非表示)にすると、ビューには表示されないが、[最近使ったファイル]メニューやホームウィンドウには表示される。Privateのテーブルの場合、戻される参照がそのテーブルへの唯一の参照となり、どのファイルリストにも表示されない。

**JMP追加されたバージョン:** 18

#### Excel

```python

import jmp

obj = jmp.open(jmp.SAMPLE_IMPORT_DATA + 'Bigclass.xlsx')
print(obj)

```

#### Invisible

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Invisible')
dt = jmp.current()
print(dt)  # success
dt = jmp.table('Animals')
print(dt)  # success
# Select and run the above first if you want to see that even though
# there is no window, Animals.jmp appears in recent files and
# home window's list of files
dt.close(save=False);
del dt

```

#### JMP

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(dt)

```

#### JSLスクリプト

```python

import jmp

obj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')
print(obj)

```

#### Private

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')
dt = jmp.current()
print(dt)  # => None
try:
  dt = jmp.table('Animals')
except FileNotFoundError:
  print('Requested table not found')
dt = jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')
print(dt)
dt.close(save=False)
del dt

```

### path_variable

**構文:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**説明:** たとえば、SAMPLE_DATAのような名前のパス変数を戻す。パス変数は、パスを指定した場合、設定された文字列に置換される。

**JMP追加されたバージョン:** 19

```python

import jmp

path_value = jmp.path_variable('SAMPLE_DATA')
if not path_value:
    print('Invalid path variable.')
else:
    print(path_value)

```

### r_name

**構文:** dt = jmp.r_name(jsl_var)

**説明:** R変数の命名規則に従い、JMP変数名をR変数名に変換する。

**JMP追加されたバージョン:** 19

```python

import jmp

rName = jmp.r_name('c d e')
print(rName)

```

### reset

**構文:** jmp.reset()

**説明:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP追加されたバージョン:** 19

```python

import jmp

pi = 3.1415927
print(pi)
jmp.reset()
print(pi)

```

### run_jsl

**構文:** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**説明:** Python環境の中からJSLスクリプト(JSLのPythonインターフェース関数を含む)を実行する。オプションのecho=パラメータがFalse (偽)またはNone (なし)に設定されている場合、指定されたJSLソースコードによるログへのエコーを停止する。Python Send() / Get()でサポートされるのと同じJSLオブジェクトタイプに対して結果を戻す。スクリプトのエラーまたはサポートされていないJSLオブジェクトタイプの場合、None (なし)を戻す。

**JMP追加されたバージョン:** 18

#### バージョンの取得

```python

import jmp

jmp.run_jsl('Python Get Version();')

```

#### 列プロパティ

```python

import jmp

# Create a data table
# dt = jmp.DataTable(name='table_name', rows=n)
pbp = jmp.DataTable(rows=5)
pbp.name = 'Powered by Python'
pbp.new_column('Name', jmp.DataType.Character)
pbp.new_column('Hourly Rate')
#
pbp['Name'] = ['Janet', 'James', 'Jerry', 'Jenny', 'Jill']
pbp[1] = [ 14.25, 9.75, 15.0, 12.35, '17.25']  # last value bad => becomes missing
pbp[1][4] = 17.25
#
# Change column format: Hourly Rate
jmp.run_jsl('''
Data Table( "Powered by Python" ):Hourly Rate << Format( "Currency", "USD", 17, 2 );
Data Table( "Powered by Python" ):Name << Set Display Width( 75 );
''')

```

#### 戻り値

```python

import jmp

value = jmp.run_jsl('''
Names default to here(1);
an A = 1.5;
x = 5 * anA;
''')
print( f'{value} = jmp.run_jsl()')

```

### table

**構文:** dt = jmp.table(&apos;table_name&apos;)

**説明:** table_nameで指定した名前の、開いているテーブルのDataTableオブジェクトを戻す。

**JMP追加されたバージョン:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( jmp.table('Big Class') )

```

### 定数

### 関数

## jmp > DataConnector

### 関数

#### Ability to copy with copy.copy

**説明:** DataConnector objects support shallow copying with the standard copy.copy function.



Changing the copying behavior in subclasses is not supported, so subclasses should not add additional instance attributes because they will not be copied.

**JMP追加されたバージョン:** 19

```python

import jmp

import copy

class ExampleConnectorType(jmp.DataConnectorType):
    fields = {'My Option': int}

class ExampleConnector(jmp.DataConnector):
    def _do_as_data_source(self):
        return ExampleDataSource(copy.copy(self))

jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)

class ExampleDataSource(jmp.DataSource):
    def __init__(self, config):
        self._config = config
        print("Connecting to data source")

    def get_tables(self, schema):
        return ['example']

    def open_table(self, schema, table):
        dt = jmp.DataTable(rows=1, visibility='private')
        dt.new_column('column')
        dt['column'] = [self._config['My Option']]
        return dt

jmp.run_jsl(r"""
New SQL Query(
    Connection(
        New Data Connector(
            Type( "Python:__main__:ExampleConnectorType" ),
            My Option( 42 )
        )
    ),
    QueryName( "example" ),
    Select( Star ),
    From( Table( "example", Alias( "t1" ) ) )
) << Run;
""", echo=False)

```

#### __getitem__

**構文:** value = dc["FIELD NAME"]

**説明:** フィールドの値を取得する。

**JMP追加されたバージョン:** 19

```python

import jmp


class ExampleConnectorType(jmp.DataConnectorType):
    fields = {"Example Field": str}

class ExampleConnector(jmp.DataConnector):
    ...

    def _do_as_data_source(self):
        ef = self["Example Field"]
        # When running the JSL below, ef will be "example value"
        print(f"{ef=}")
        ...

jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)

# This will fail but only after printing the value
jmp.run_jsl("""
    New SQL Query( Connection(
        New Data Connector(
            Type("Python:__main__:ExampleConnectorType"),
            Example Field("example value")
        )
    ) ) << Modify
""", echo=False)

```

#### _do_as_data_source

**構文:** def _do_as_data_source(self) -&gt; jmp.DataSource:

**説明:** Subclasses should override this function to create a connection. The returned connection, in the form of a subclass of jmp.DataSource, enables integration with Query Builder.



Avoid storing and using a reference to the connector instance (self) in the returned data source. Other code might also hold a reference and change configuration values unexpectedly. Instead, consider using copy.copy to make an independent copy to refer to, like "self_copy = copy.copy(self)".

**JMP追加されたバージョン:** 19

```python

import jmp


class ExampleConnectorType(jmp.DataConnectorType):
    fields = {'My Option': int}

class ExampleConnector(jmp.DataConnector):
    def _do_as_data_source(self):
        return ExampleDataSource(self['My Option'])

jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)

class ExampleDataSource(jmp.DataSource):
    def __init__(self, my_option):
        self._my_option = my_option
        print("Connecting to data source")

    def get_tables(self, schema):
        return ['example']

    def open_table(self, schema, table):
        dt = jmp.DataTable(rows=1, visibility='private')
        dt.new_column('column')
        dt['column'] = [self._my_option]
        return dt

jmp.run_jsl(r"""
New SQL Query(
    Connection(
        New Data Connector(
            Type( "Python:__main__:ExampleConnectorType" ),
            My Option( 42 )
        )
    ),
    QueryName( "example" ),
    Select( Star ),
    From( Table( "example", Alias( "t1" ) ) )
) << Run;
""", echo=False)

```

#### _do_open

**構文:** def _do_open(self) -&gt; jmp.DataTable:

**説明:** Subclasses can override this function to open a table directly. This function implements the Open message in JSL (New Data Connector(...) << Open()).



If both this function and _do_as_data_source are implemented, they should be able to open the same set of tables.

**JMP追加されたバージョン:** 19

```python

import jmp


class ExampleConnectorType(jmp.DataConnectorType):
    fields = {'My Option': int}

class ExampleConnector(jmp.DataConnector):
    def _do_open(self):
        dt = jmp.DataTable(rows=1)
        dt.new_column('column')
        dt['column'] = [self['My Option']]
        return dt

jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)

jmp.run_jsl(r"""
New Data Connector(
    Type( "Python:__main__:ExampleConnectorType" ),
    My Option( 42 )
) << Open();
""", echo=False)

```

#### tie

**構文:** jmp.DataConnector.tie(DataConnectorTypeClass, DataConnectorClass)

**説明:** Associates a jmp.DataConnectorType subclass and a jmp.DataConnector subclass, "tying" them together and completing the definitions of both classes. This association gives the jmp.DataConnector subclass access to the jmp.DataConnectorType subclass and its field definitions. It also ensures that the jmp.DataConnectorType subclass creates jmp.DataConnector instances using the specified subclass.



This function creates the association by setting attributes on the subclasses.

**JMP追加されたバージョン:** 19

```python

import jmp


class ExampleConnectorType(jmp.DataConnectorType):
    fields = {'My Option': int}

class ExampleConnector(jmp.DataConnector):
    def _do_open(self):
        dt = jmp.DataTable(rows=1)
        dt.new_column('column')
        dt['column'] = [self['My Option']]
        return dt

jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)

jmp.run_jsl(r"""
New Data Connector(
    Type( "Python:__main__:ExampleConnectorType" ),
    My Option( 42 )
) << Open();
""", echo=False)

```

#### コンセプト

#### メソッド

#### 特殊アイテム

#### 関数

## jmp > DataConnectorField

### 関数

#### __init__

**構文:** field = jmp.DataConnectorField(type, &lt;default=DEFAULT_VALUE,&gt; &lt;tooltip="TOOLTIP" | None,&gt; &lt;ui_name="UI NAME" | None,&gt; &lt;credential="CREDENTIAL TYPE" | None,&gt; &lt;sensitive=True | False,&gt; &lt;mask_input=True | False&gt;)

**説明:** DataConnectorField defines a field.



Base arguments:



type: The type of the field, such as int (see jmp.DataConnectorType.fields for more information).



default: The default value for the field, such as 42. If not provided, the default value depends on the type. The default value is None if that is supported, for example, if the type is "int | None". Otherwise, it is the "empty" value for the type: "" for str, 0 for int, and False for bool.



tooltip: If provided and not None, it is used as a tooltip for the field in the data connector editor.



ui_name: If provided and not None, it is used as the name of the field in the data connector editor instead of the actual name of the field.



Extra arguments when type is "str" or "str | None":



credential: If provided and not None, the type of credential stored by this field. The valid values are "username" and "password". JMP uses this information to enable placeholder support.



sensitive: When true, this field is considered to hold sensitive information and as such its values are not written out in plain text. Defaults to true if "credential" is set and false otherwise.



mask_input: When true, the value is obscured and shown with dots in the Data Connector Editor. Defaults to true if "credential" is "password" or "sensitive" is true and credential is not set.

**JMP追加されたバージョン:** 19

```python

import jmp


class ExampleConnectorType(jmp.DataConnectorType):
    _DCF = jmp.DataConnectorField
    fields = {
        "Field 1": int,
        # Same as Field 1 but uses jmp.DataConnectorField instead of a bare type
        "Field 2": _DCF(int),
        # Like Field 1 and Field 2 but adds a tooltip
        "Field 3": _DCF(int, tooltip="The third field."),
        # Like Field 1 and Field 2 but adds a default value and a tooltip
        "Field 4": _DCF(int, default=42, tooltip="The fourth field."),
        # ui_name is useful for JSL-unfriendly names or localization
        "JSL Unfriendly Field": _DCF(int, ui_name="JSL-Unfriendly Field"),
        # credential (and sensitive and mask_input) are useful for usernames,
        # passwords, and other sorts of credentials
        "Password Field": _DCF(str, credential="password"),
    }

class ExampleConnector(jmp.DataConnector):
    def _do_open(self):
        # Show the values then error
        print(f"{self["Field 1"] = }")
        print(f"{self["Field 2"] = }")
        print(f"{self["Field 3"] = }")
        print(f"{self["Field 4"] = }")
        print(f"{self["JSL Unfriendly Field"] = }")
        print(f"{self["Password Field"] = }")
        raise NotImplementedError

jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)

# To see the tooltips, the UI name, and the masking triggered by credential,
# you'll need to launch the Data Connector Editor and set the type to
# Python:__main__:ExampleConnectorType.
jmp.run_jsl(r"""
New Data Connector(
    Type( "Python:__main__:ExampleConnectorType" ),
    Field 1( 4 ),
    Field 2( 19 ),
    Field 3( 23 ),
    Field 4( 42 ),
    JSL Unfriendly Field( 65 ),
    // This encodes the string "107":
    Password Field( "0173AEE42BA6B646CBE03941DD25153DAAFDF2ED3039A9E64296808E53DA110CDE45733216E9B2A3F82AA052F370443F231C8B1D83E2AA68B6D19DD4B6BB0CE08F635C07162E3E13B2AF77D25DF8DDD1DB" )
) << Open();
""", echo=False)

```

#### コンストラクタ

## jmp > DataConnectorGroupedFields

### 関数

#### __init__

**構文:** fields = jmp.DataConnectorGroupedFields([("Group 1 Name", GROUP_1_FIELDS), ("Group 2 Name", GROUP_2_FIELDS), ...])

**説明:** jmp.DataConnectorGroupedFields defines fields in named groups. The groups are passed as a list of pairs. The first element of each pair is the name of the group, and the second is a dictionary with the fields. This dictionary has the same format as one used directly as the value for jmp.DataConnectorType.fields.



The use of groups affects the fields&apos; presentation in the data connector editor but not their programmatic access. The group name is used only in the UI, so the advice for field names to avoid characters that should not be used in JSL names does not apply.

**JMP追加されたバージョン:** 19

```python

import jmp


class ExampleConnectorType(jmp.DataConnectorType):
    fields = jmp.DataConnectorGroupedFields([
        # Specify a first group named "Route" that has "Destination" and
        # "Origin" fields.
        ("Route", {
            "Destination": str,
            "Origin": str,
        }),
        # Specify a second group named "Vehicle" that has "Passengers" and
        # "Range" fields.
        ("Vehicle", {
            "Passengers": int,
            "Range": int,
        }),
    ])

class ExampleConnector(jmp.DataConnector):
    def _do_open(self):
        # Show the values then error
        print(f"{self["Destination"] = }")
        print(f"{self["Origin"] = }")
        print(f"{self["Passengers"] = }")
        print(f"{self["Range"] = }")
        raise NotImplementedError

jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)

# To see the groups you'll need to launch the Data Connector Editor
# and set the type to Python:__main__:ExampleConnectorType.
jmp.run_jsl(r"""
New Data Connector(
    Type( "Python:__main__:ExampleConnectorType" ),
    Destination( "JMP" ),
    Origin( "RDU" ),
    Passengers( 5 ),
    Range( 254 )
) << Open();
""")

```

#### コンストラクタ

## jmp > DataConnectorType

### 関数

#### fields

**構文:** fields = {"Name 1": TYPE_1 | jmp.DataConnectorField(...), "Name 2": TYPE_2 | jmp.DataConnectorField(...), ...} | jmp.DataConnectorGroupedFields(...)

**説明:** Subclasses must define a class-level variable named "fields" that specifies the configuration options for this type. It should be a dict or a jmp.DataConnectorGroupedFields object.



The keys of the dict are the names of the configuration options, which are exposed in JSL and the editor. They should be formatted like JSL identifiers. The value corresponding to each key is the type of the field, such as str or int, or a jmp.DataConnectorField object.



The supported types include bool, int, and str. Optional versions of these, such as typing.Optional[bool] or bool | None for bool, are also supported. A missing value is represented by None.

**JMP追加されたバージョン:** 19

```python

import jmp

import typing

class ExampleConnectorType(jmp.DataConnectorType):
    _DCF = jmp.DataConnectorField
    fields = {
        "Basic Int Field": int,
        "Optional Int Field": int | None,
        "Alternative Optional Int Field": typing.Optional[int],
        "Int Field With Default And Tooltip": _DCF(int, default=42, tooltip=(
            "Tooltip for complicated int field."
        )),
        "Catalog": _DCF(str, default="main", tooltip=(
            "Database catalog in which to access schemas and tables."
        )),
    }

class ExampleConnector(jmp.DataConnector):
    def _do_open(self):
        # Show values for demo purposes and then error out
        print(f"{self["Basic Int Field"] = }")
        print(f"{self["Optional Int Field"] = }")
        print(f"{self["Alternative Optional Int Field"] = }")
        print(f"{self["Int Field With Default And Tooltip"] = }")
        print(f"{self["Catalog"] = }")
        raise NotImplementedError

jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)

# To see the tooltips you'll need to launch the Data Connector Editor
# and set the type to Python:__main__:ExampleConnectorType.
jmp.run_jsl(r"""
New Data Connector( Type( "Python:__main__:ExampleConnectorType" ) ) << Open();
""")

```

#### プロパティ

## jmp > DataSource

### 関数

#### get_schemas

**構文:** def get_schemas(self) -&gt; Sequence[str] | None:

**説明:** Subclasses can override this function to provide a list of the schemas in the data source. If this function is not overridden or it returns None, the data source is assumed to not support schemas.

**JMP追加されたバージョン:** 19

```python

import jmp


class ExampleConnectorType(jmp.DataConnectorType):
    fields = {}

class ExampleConnector(jmp.DataConnector):
    def _do_as_data_source(self):
        return ExampleDataSource()

jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)

# Pretend our data source has two schemas, each with a table
class ExampleDataSource(jmp.DataSource):
    def get_schemas(self):
        # Normally you would get this dynamically instead of hard-coding it.
        return ['schema1', 'schema2']

    def get_tables(self, schema):
        return ['example']

    def open_table(self, schema, table):
        dt = jmp.DataTable(rows=1, visibility='private')
        dt.new_column('column', jmp.DataType.Character)
        dt['column'] = [f'{schema}.{table}']
        return dt

jmp.run_jsl(r"""
New SQL Query(
    Connection(
        New Data Connector(
            Type( "Python:__main__:ExampleConnectorType" )
        )
    ),
    QueryName( "example" ),
    Select( Star ),
    From( Table( "example", Schema( "schema1" ), Alias( "t1" ) ) )
) << Run;
""", echo=False)

```

#### get_tables

**構文:** def get_tables(self, schema: str) -&gt; Sequence[str]:

**説明:** Subclasses should override this function to provide a list of the tables in the data source. If schemas are supported, this list should include only the tables under the schema that is passed. If schemas are not supported, the schema parameter should be ignored.

**JMP追加されたバージョン:** 19

```python

import jmp


class ExampleConnectorType(jmp.DataConnectorType):
    fields = {}

class ExampleConnector(jmp.DataConnector):
    def _do_as_data_source(self):
        return ExampleDataSource()

jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)

class ExampleDataSource(jmp.DataSource):
    def get_tables(self, schema):
        # Normally you would get this dynamically instead of hard-coding it.
        return ['example1', 'example2']

    def open_table(self, schema, table):
        dt = jmp.DataTable(rows=1, visibility='private')
        dt.new_column('column', jmp.DataType.Character)
        dt['column'] = [table]
        return dt

jmp.run_jsl(r"""
New SQL Query(
    Connection(
        New Data Connector(
            Type( "Python:__main__:ExampleConnectorType" )
        )
    ),
    QueryName( "A" ),
    Select( Star ),
    From( Table( "example1", Alias( "t1" ) ) )
) << Run;
""", echo=False)

```

#### open_table

**構文:** def open_table(self, schema: str, table: str) -&gt; jmp.DataTable | str:

**説明:** Subclasses should override this function to get the table data for the named table. If schemas are not supported, the value of the schema argument can be ignored. The function should return a jmp.DataTable or a string containing a path to a file in a data format supported by JMP.



If returning a data table directly, the table should be created privately. If returning a path string, JMP opens the table itself and captures the settings that it used, preserving them in Query Builder scripts.

**JMP追加されたバージョン:** 19

**Create the table directly**

```python

import jmp


class ExampleConnectorType(jmp.DataConnectorType):
    fields = {}

class ExampleConnector(jmp.DataConnector):
    def _do_as_data_source(self):
        return ExampleDataSource()

jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)

class ExampleDataSource(jmp.DataSource):
    def get_tables(self, schema):
        return ['example']

    def open_table(self, schema, table):
        # Normally you would use schema and table.
        dt = jmp.DataTable(rows=1, visibility='private')
        dt.new_column('Hello', jmp.DataType.Character)
        dt['Hello'] = ['world!']
        return dt

jmp.run_jsl(r"""
New SQL Query(
    Connection(
        New Data Connector(
            Type( "Python:__main__:ExampleConnectorType" )
        )
    ),
    QueryName( "example" ),
    Select( Star ),
    From( Table( "example", Alias( "t1" ) ) )
) << Run;
""", echo=False)

```

**Return a file path**

```python

import jmp


class ExampleConnectorType(jmp.DataConnectorType):
    fields = {}

class ExampleConnector(jmp.DataConnector):
    def _do_as_data_source(self):
        return ExampleDataSource()

jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)

class ExampleDataSource(jmp.DataSource):
    def get_tables(self, schema):
        return ['example']

    def open_table(self, schema, table):
        # Normally you would use schema and table.
        return jmp.SAMPLE_IMPORT_DATA + 'Bigclass_L.txt'

jmp.run_jsl(r"""
New SQL Query(
    Connection(
        New Data Connector(
            Type( "Python:__main__:ExampleConnectorType" )
        )
    ),
    QueryName( "example" ),
    Select( Star ),
    From( Table( "example", Alias( "t1" ) ) )
) << Run;
""", echo=False)

```

#### open_table_with_settings

**構文:** def open_table_with_settings(self, schema: str, table: str, settings: str | None) -&gt; (jmp.DataTable, str | None):

**説明:** サブクラスは、open_tableの代わりにこの関数をオーバーライドして、テーブルを開く設定のカスタム処理を指定する。この関数は、open_tableに似ているが、既存の設定とともに呼び出すこともできる。データテーブルを戻すが、新しい設定がある場合はそれも戻す。欠けている設定は、Noneと表される。

**JMP追加されたバージョン:** 19

```python

import jmp


class ExampleConnectorType(jmp.DataConnectorType):
    fields = {}

class ExampleConnector(jmp.DataConnector):
    def _do_as_data_source(self):
        return ExampleDataSource()

jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)

class ExampleDataSource(jmp.DataSource):
    def get_tables(self, schema):
        return ['example']

    def open_table_with_settings(self, schema, table, settings):
        print(f"Input settings: {settings!r}")
        if settings is None:
            # In practice settings are something you prompt the user
            # for, but here we hard-code it.
            settings = f'settings for {table}'
        dt = jmp.DataTable(visibility='private')
        dt.new_column()
        print(f"Output settings: {settings!r}")
        return dt, settings

jmp.run_jsl(r"""
Write( ( New SQL Query(
    Connection(
        New Data Connector(
            Type( "Python:__main__:ExampleConnectorType" )
        )
    ),
    QueryName( "example" ),
    Select( Star ),
    From( Table( "example", Alias( "t1" ) ) )
) << Run Foreground ) << Get Property( "Source" ) );
""", echo=False)

```

#### メソッド

## jmp > DataTable > Column

### 関数

#### Equality

**説明:** Columnオブジェクトでは、等しいか、等しくないかのチェックをサポートしている。DataTable.Columnは実際のデータテーブル列への参照であるため、複数のオブジェクトが同じ列を指す場合がある。等しいことのチェック(==)と等しくないことのチェック(!=)では、内容は比較されない。2つのDataTable.Columnオブジェクトが同一の列を指しているかどうかがチェックされる。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
col1 = dt[0]
col2 = dt['name']
col3 = dt['age']
print( col1 == col2 )
print( col1 == col3 )
print( col1 != col2 )
print( col1 != col3 )

```

#### Mapping

**説明:** DataTable.ColumnオブジェクトはPythonのマップ型プロトコルをサポートする。配列の演算子[]に行のインデックスの数値を指定する。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.DataTable('Names', 5)
dt.new_column('First Name', jmp.DataType.Character)
dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]
for i in range(0, dt.nrows):
    print( dt[0][i] )

```

#### Sequence

**説明:** DataTable.Columnは、Pythonのシーケンスと同様に振る舞う。列の値を繰り返し処理することができる。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.DataTable('Names', 5)
dt.new_column('First Name', jmp.DataType.Character)
dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]
for n in dt[0]:
    print( n )

```

#### Slice

**説明:** スライス演算子は、[ ]のパラメータとして項目を取得するのに使用し、start:stop:stepで構成される。パラメータの指定は任意。戻り値は、start 値で始まってstep値を増分とした値のリスト。stop値は含まれない。startまたはstopに負の数値を指定した場合、それはシーケンスの最後から割り振った、1から始まるインデックスとみなされる。stepに負の数値を指定した場合、それは増分ではなく減分として扱われる。値が空の場合はデフォルト値が使われる。[::-1]は、リスト全体を逆の順序で戻す。[:]は、リスト全体をそのままの順序で戻す。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( [c.name for c in dt[:]] )         # print list of column names default step = 1
reverse_cols = dt[::-1]                  # list of column names in reverse order
print( [c.name for c in reverse_cols] )  # print reversed column name list
print( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### __eq__

**構文:** column1 == column2

**説明:** 2つのjmp.DataTable.Columnオブジェクトが同じかどうかをテストし、同じJMPデータテーブル列を指している場合にtrue(真)を戻す。列の内容が一致するかどうかではなく、2つの変数が同じ列を指すものであるかをチェックする。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
col1 = dt[0]
col2 = dt['name']
col3 = dt['age']
print( col1 == col2 )
print( col1 == col3 )

```

#### __getitem__

**構文:** value = column[ index ]

**説明:** jmp.DataTable.Columnオブジェクトの列に、0から始まるインデックスを含む[]演算子を指定して、値を取得する。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
col = dt[0]
for i in range ( len(col) ):
    print( col[i] )

```

#### __init__

**構文:** Column( dt_obj, name | index)

**説明:** データテーブル内の特定の列を指す新しい列オブジェクトを作成する。dt_objパラメータに指定するjmp.DataTableオブジェクトと、有効な列名または列インデックスが必須。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
col = jmp.DataTable.Column(dt, 'name')
print(col)

# Note: it's simpler to just let Python create one for you through assignment.
col2 = dt['name'];
print(col2)

```

#### __len__

**構文:** count = len( column )

**説明:** テーブルの列数を戻す。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
print( len( dt['name'] ) )

```

#### __ne__

**構文:** column1 != column2

**説明:** 2つのjmp.DataTable.Columnオブジェクトが異なるものかどうかをテストし、同じJMPデータテーブル列を指していない場合にtrue(真)を戻す。内容が一致するかどうかではなく、2つのオブジェクトが別の列を指すものであるかをチェックする。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
col1 = dt[0]
col2 = dt['name']
col3 = dt['age']
print( col1 != col2 )
print( col1 != col3 )

```

#### __setitem__

**構文:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**説明:** []演算子に列名、または0から始まるインデックスを指定したjmp.DataTable.Columnオブジェクトの列に、値を設定する。

**JMP追加されたバージョン:** 18

**datetime.date**

```python

import jmp

from datetime import date
dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt.new_column('birthday', jmp.DataType.Numeric)
dt['birthday'].format = "m/d/y"
dt['birthday'][0] = date.today()

```

**datetime.datetime**

```python

import jmp

from datetime import datetime
dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt.new_column('birthday', jmp.DataType.Numeric)
dt['birthday'].format = "m/d/y h:m:s"
dt['birthday'][0] = datetime.now()

```

**Expression**

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt.new_column("expressions", jmp.DataType.Expression)
dt['expressions'][0] = jmp.Expression('1 + 1')
print(dt['expressions'][0])
result = jmp.eval(dt['expressions'][0])
print(result)

```

**Image**

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt.new_column("images", jmp.DataType.Expression)
for i in range( len( dt["images"] ) ):
    dt['images'][i] = jmp.Image(jmp.SAMPLE_IMAGES + "tile.jpg")
print(dt['images'][0])

```

**Row State**

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt.new_column("rs", jmp.DataType.RowState)
dt['rs'][0] = jmp.RowState(selected=True, marker=3, color=4)
print(dt['rs'][0])

```

**Standard**

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
column = dt[0]
column2 = dt['age']
print(column)
print(column2)

```

**time.struct_time**

```python

import jmp

import time
dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt.new_column('birthday', jmp.DataType.Numeric)
dt['birthday'].format = "h:m:s"
dt['birthday'][0] = time.localtime()

```

#### __str__

**構文:** str( column_obj )

**説明:** データテーブルの列の要約情報を含む文字列を戻す。

**JMP追加されたバージョン:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(dt[0])

```

#### data_length

**構文:** col_obj.data_length

**説明:** 列フィールドのデータの長さを戻すプロパティ。値は、0, 1, 2, 4, 8バイトのいずれか。0はデフォルトを表し、データテーブルの数値フィールドに8バイトが使用されていることを意味する。

**JMP追加されたバージョン:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f'Data length of dt[-1] (weight column): {dt[-1].data_length}')

```

#### display_width

**構文:** col_obj.display_widthcol_obj.display_width = &lt;int&gt;

**説明:** 列の表示幅を変更する。

**JMP追加されたバージョン:** 19

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
jmp.run_jsl('Wait( 0 );')
print(dt[0].display_width)
dt[0].display_width = 100
print(dt[0].display_width)

```

#### dtype

**構文:** col_obj.dtype

**説明:** 列のデータタイプの列挙値を戻すプロパティ。

**JMP追加されたバージョン:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f"Data Type of dt['age']: {dt['age'].dtype}")
dt['age'].dtype = jmp.DataType.Character 
print(f"Updated Data Type of dt['age']: {dt['age'].dtype}")

```

#### format

**構文:** col_obj.formatcol_obj.format = tuple&lt; &lt;string&gt;|&lt;int&gt;, ... &gt;

**説明:** 形式の取得

**JMP追加されたバージョン:** 19

**Different Variations**

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + "XYZ Stock Averages (plots).jmp")
dt[0].format = ("ddMonyyyy", 9)
dt[1].format = "Currency"
dt[2].format = (
    "best",
    "Use Thousands Separator",
    10,
    0)
dt[3].format = (
    "Fixed Dec",
    "Use Thousands Separator",
    10,
    2
)

```

**Tuple Assignment**

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
print(dt[3].format)
dt[3].format = ('Fixed Dec', 6, 3)
print(dt[3].format)

```

#### formula

**構文:** col_obj.formulacol_obj.formula = &lt;Expression | string&gt;

**説明:** Expressionオブジェクトまたは有効なJSLを表す文字列で列の計算式を設定する。

**JMP追加されたバージョン:** 19

**Expression**

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt.new_column('ratio', jmp.DataType.Numeric)
dt['ratio'].formula = jmp.Expression(':Height / :Weight')
print(dt['ratio'].formula)

```

**String**

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt.new_column('ratio', jmp.DataType.Numeric)
dt['ratio'].formula = ':Height / :Weight'
print(dt['ratio'].formula)

```

#### mtype

**構文:** col_obj.mtype

**説明:** 列の尺度の列挙値を戻すプロパティ。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f"Modeling Type of dt['age']: {dt['age'].mtype}") 
dt['age'].mtype = jmp.ModelingType.Nominal
print(f"Updated Modeling Type of dt['age']: {dt['age'].mtype}")

```

#### name

**構文:** col_obj.namecol_obj.name = &lt;string&gt;

**説明:** 列名のプロパティ。読み取りと設定が可能。

**JMP追加されたバージョン:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
print(dt[0].name)
dt[0].name = 'First Name'

```

#### コンストラクタ

#### コンセプト

#### プロパティ

#### 特殊アイテム

## jmp > DataTable

### 関数

#### Equality

**説明:** DataTableオブジェクトでは、等しいか、等しくないかのをチェックをサポートしている。DataTableは実際のデータテーブルへの参照であるため、複数のオブジェクトが同じJMPテーブルを指す場合がある。等しいことのチェック(==)および等しくないことのチェック(!=)では、内容は比較されない。2つのDataTableオブジェクトが同一のJMPテーブルを指しているかどうかがチェックされる。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt2 = jmp.current()
iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")
print( dt == dt2 )
print( dt == iris)
print( dt != dt2 )
print( dt != iris )

```

#### Mapping

**説明:** DataTableオブジェクトはPythonのマップ型プロトコルをサポートする。配列の演算子[]に列名または列のインデックスとしての数値を指定する。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( f'Column name: {dt[1].name}' )
print( f"Column name: {dt['age'].name}" )

```

#### Sequence

**説明:** DataTableオブジェクトは、Pythonのシーケンスと同様に振る舞う。テーブルの列を繰り返し処理することができる。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
for n in dt:
    print( n.name )

```

#### Slice

**説明:** スライス演算子は、[]のパラメータとして項目を取得するのに使用し、start:stop:stepで構成される。パラメータの指定は任意。戻り値は、start値で始まってstep値を増分とした値のリスト。stop値は含まれない。startまたはstopに負の数値を指定した場合、それはシーケンスの最後から割り振った、1から始まるインデックスとみなされる。stepに負の数値を指定した場合、それは増分ではなく減分として扱われる。値が空の場合はデフォルト値が使われる。[::-1]は、リスト全体を逆の順序で戻す。[:]は、リスト全体をそのままの順序で戻す。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( [c.name for c in dt[:]] )         # print list of column names default step = 1
reverse_cols = dt[::-1]                  # list of column names in reverse order
print( [c.name for c in reverse_cols] )  # print reversed column name list
print( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### __eq__

**構文:** table1 == table2

**説明:** 2つのjmp.DataTableオブジェクトが同じかどうかをテストし、同じJMPデータテーブルを指している場合にtrue(真)を戻す。データテーブルの内容が一致するかどうかではなく、2つの変数が同じテーブルを指すものであるかをチェックする。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt2 = jmp.current()
iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")
print( dt == dt2 )
print( dt == iris)

```

#### __getitem__

**構文:** column = dt[&apos;name&apos; | index]

**説明:** []演算子に列名、または0から始まるインデックスを指定し、テーブルからjmp.DataTable.Columnオブジェクトを取得する。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
column = dt[0]
column2 = dt['age']
print(column)
print(column2)

```

#### __init__

**構文:** dt = jmp.DataTable(&lt;name=&apos;table_name&apos;&gt;, &lt;rows=n&gt;, &lt;visibility=&apos;Invisible&apos; | &apos;Private&apos; )

**説明:** table_nameの名前とn個の行を持つ新しいデータテーブルを作成する。行数だけを指定したり、キーワード付きのパラメータで順番を逆にして指定することも可能。

**JMP追加されたバージョン:** 18

**Invisible**

```python

import jmp
dt = jmp.DataTable('Powered By Python', 40, visibility='Invisible')

```

**Private**

```python

import jmp
dt = jmp.DataTable('Powered By Python', 40, visibility='private')

```

**キーワードで指定**

```python

import jmp
dt = jmp.DataTable(rows=40, name='Powered By Python')

```

**名前と行数を指定**

```python

import jmp
dt = jmp.DataTable('Powered By Python', 40)

```

**名前を指定した空のテーブル**

```python

import jmp
dt = jmp.DataTable('Powered By Python')

```

**空のテーブル**

```python

import jmp
dt = jmp.DataTable()

```

#### __len__

**構文:** count = len(dt)

**説明:** テーブルの列数を戻す。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
print( len(dt) )

```

#### __ne__

**構文:** table1 != table2

**説明:** 2つのjmp.DataTableオブジェクトが異なるものかどうかをテストし、同じJMPデータテーブルを指していない場合にtrue(真)を戻す。内容が一致するかどうかではなく、2つのオブジェクトが別のテーブルを指すものであるかをチェックする。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt2 = jmp.current()
iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")
print( dt != dt2 )
print( dt != iris)

```

#### __setitem__

**構文:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**説明:** []演算子に列名、または0から始まるインデックスを指定したjmp.DataTable.Columnオブジェクトの列に、値を設定する。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.DataTable('Names', 5)
dt.new_column('First Name', jmp.DataType.Character)
dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]
print( dt[0][:] )

```

#### __str__

**構文:** str( data_table )

**説明:** データテーブルオブジェクトの要約情報を含む文字列を戻す。

**JMP追加されたバージョン:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(dt)

```

#### add_rows

**構文:** add_rows(rows, &lt;at=-1&gt;)

**説明:** DataTableに行を追加する。rowsは必須。atは任意。atが0の場合はテーブルの先頭に行を挿入する。<0の場合はテーブルの末尾に追加する。atがmの場合は、 m 行目(0から始まるインデックス)に挿入する。

**JMP追加されたバージョン:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.add_rows(5)
dt.add_rows(1, at=0)
dt.add_rows(2, at=12) # 0-based indexing

```

#### cell_height

**構文:** dt.cell_heightdt.cell_height = &lt;int&gt;

**説明:** データテーブルにおける各セルの縦幅を設定する。

**JMP追加されたバージョン:** 19

```python

import jmp
dt = jmp.DataTable()
jmp.run_jsl('Wait(0)')
print(dt.cell_height)
dt.cell_height = 40
print(dt.cell_height)

```

#### close

**構文:** dt.close( &lt;save= True | False&gt;)

**説明:** DataTableオブジェクトのCloseメソッド。JSLと同様に、パラメータなしで呼び出された場合は、ファイルとして保存しようとする。一時テーブルとして作成されたものなど、保存せずに破棄したい場合は、dt.close(False)、またはdt.close(save=False)を使用する。

**JMP追加されたバージョン:** 18

```python

import jmp

import os

# To remove the wow.jmp file uncomment then run the 2 lines below,
# if os.path.isfile('wow.jmp'):
#    os.unlink('wow.jmp')

dt = jmp.DataTable('wow', 5)
dt.new_column('one')
dt.close()                # saves and closes file

dt = jmp.open('wow.jmp')
dt.new_column('two')
dt.close(save=False)      # closes without saving

```

#### delete_columns

**構文:** delete_columns(&apos;name&apos;, ..., &apos;name&apos;)

**説明:** delete_columms()メソッドは、JSLのDelete Columns()メッセージと同様に動作する。使用できる引数は、引数なし、列名、カンマで区切った複数の列名、列名のPythonリスト。引数なしにした場合、選択されている列が削除される。

**JMP追加されたバージョン:** 19

```python

import jmp


dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')

dt.select_columns('weight')     # JSL:  dt << Select Columns( {:weight})
r = dt.delete_columns()                  # delete by selected column(s)
print(r)

r = dt.delete_columns('name', 'sex')     # delete by name
print(r)

r = dt.delete_columns(['age', 'height']) # delete with list of column names
print(r)

```

#### name

**構文:** dt.namedt.name = &apos;string&apos;

**説明:** nameプロパティは、データテーブル名の設定と取得のどちらにも使用できる。

**JMP追加されたバージョン:** 18

```python

import jmp
dt = jmp.DataTable()
print(dt.name)
dt.name = 'Powered by Python'

```

#### ncols

**構文:** dt.ncols

**説明:** テーブルの列数を戻す読み取り専用のプロパティ。

**JMP追加されたバージョン:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f'Number of columns: {dt.ncols}')

```

#### new_column

**構文:** dt.new_column( name=&apos;column_name&apos;, dtype=jmp.Numeric | .Character | .RowState | .Expression, mtype=jmp.ModelingType.Continuous | ... | TypeNone dlen=len cell type&apos;s data length especially for numeric 8(double),4(int32),2(int16),1(int8) where=n insert column after column n

**説明:** 新しいデータテーブル列を作成する。オプションで、名前、列のタイプ、データの長さ、尺度を指定できる。

**JMP追加されたバージョン:** 18

**New Class**

```python

import jmp

from jmp import DataTable as Dt
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
nc = jmp.DataTable('New Class', dt.nrows)
nc.new_column('name', jmp.DataType.Character)
# populate column from a list
nc[0] = ['Fred','Kimi','Amanda','Courtney','Paul','Theresa','Erika','Blake','Joseph','Amber',
    'Daphne','Robert','James','Richard', 'Eric','Mark','Coleen','Brian','Bryan','Emily',
    'Bonnie','Georgia','Terrance','Carmen','Hunter','Samantha','Kay','Tamara','Brett','David',
    'Chandler','Siebela','Judy','Hui','Drew','Russ','Megan','Evan','Alex','Travis'
]
col = nc.new_column('age', jmp.DataType.Numeric)
# populate column from another column
nc['age'] = dt['age']
print(nc['age'][::])
print(col.__class__)

```

**Small Class**

```python

import jmp

dt = jmp.DataTable('Names', 5)
dt.new_column('First Name', jmp.DataType.Character)
dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]
print( dt[0][:] )
print( list( dt['First Name'] ) )
dt.new_column('Distance (km)', jmp.DataType.Numeric, jmp.ModelingType.Continuous)
dt[1] = [ 1239.2, 12266.4, 15.75, 35.0, 10.6 ]

```

#### nrows

**構文:** dt.nrows

**説明:** テーブルの行数を戻す読み取り専用のプロパティ。

**JMP追加されたバージョン:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f'Number of rows: {dt.nrows}')

```

#### row_states

**構文:** dt.row_statesdt.row_states = [state1, state2, ..., stateN]

**説明:** データテーブルのすべての行に行属性を設定する。

**JMP追加されたバージョン:** 19

**General Use**

```python

import jmp
from jmp import RowState, DataType
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.row_states = [RowState(value=33), RowState(marker=2, selected=True), 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
print(dt.row_states)

rs_col = dt.new_column('rs', DataType.RowState)
dt['rs'] = dt.row_states

row_state = RowState(color=4, selected=False)
dt['rs'][0] = row_state
row_state.marker = 9
dt['rs'][1] = row_state

print(dt.row_states)
dt.row_states = dt['rs']
print(dt.row_states)

```

**List of Integers**

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.row_states = [33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
print(dt.row_states)

```

**List of Tuples (<index>, <RowState | int>)**

```python

import jmp
from jmp import RowState
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.row_states = [(2, RowState(marker=2, selected=True)), (5, 97)]
print(dt.row_states)

```

#### save

**構文:** dt.save( &lt; path=&apos;file_path&apos; &gt; )

**説明:** テーブル名を使ってデータテーブルを現在のディレクトリに保存する。オプションのパス引数を指定すると、別の場所または名前で保存できる。

**JMP追加されたバージョン:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt[0][0] = 'Katie'
dt.save('BC_lowercase.jmp')

```

#### scripts

**構文:** dt.scriptsdt.scripts = &lt;dict&lt;str : &lt;str | Expression&gt;&gt;&gt;

**説明:** scriptsプロパティは、データテーブルスクリプトの読み取りと書き込みに対応している。

**JMP追加されたバージョン:** 19

**Deleting Scripts**

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')

# Reassigning of scripts removes all other scripts
dt.scripts = {
    "Example": 'Print("Foo")',
    "Example 2": jmp.Expression('Print("Bar")')
}

print("Distribution" in dt.scripts)   # False
print("Example" in dt.scripts)        # True
print("Example 2" in dt.scripts)      # True

# Deleting a script
# Note: If the script editing window is open, the script will not be deleted. 
del dt.scripts["Example"]
dt.scripts["Example 2"] = None

print("Example" in dt.scripts)        # False
print("Example 2" in dt.scripts)      # False

dt.scripts = {
    "Example": 'Print("FooBar")',
}

# Deleting all scripts
dt.scripts = {}

```

**Get/Set Scripts**

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')

# Getting a script
print(dt.scripts["Distribution"])

# Adding a script
dt.scripts["Example"] = 'Print("Foo")'
dt.scripts["Example 2"] = jmp.Expression('Print("Bar")')

# Getting all scripts
print(dt.scripts)

```

**Multiple Scripts**

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')

# Concatenation
dt.scripts |= {
    "Example": 'Print("Foo")',
    "Example 2": jmp.Expression('Print("Bar")')
}

print("Distribution" in dt.scripts)
print("Example" in dt.scripts)
print("Example 2" in dt.scripts)

# Reassigning of scripts removes all other scripts
dt.scripts = {
    "Example": 'Print("FooBar")',
}
print(dt.scripts)

# Iteration
for name, value in dt.scripts.items():
    print(name, value)

for name in dt.scripts:
    print(name, dt.scripts[name])

```

#### select_columns

**構文:** select_columns(&apos;name&apos;, ..., &apos;name&apos;)

**説明:** select_columms()メソッドは、JSLのSelect Columns()メッセージと同様に動作する。使用できる引数は、列名、カンマで区切った複数の列名、列名のPythonリスト。

**JMP追加されたバージョン:** 19

**すべて**

```python

import jmp


dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.select_columns([col.name for col in dt])
# all columns should be selected.

```

**例 1**

```python

import jmp


dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.select_columns('weight')
dt.select_columns('name', 'sex')
dt.select_columns(['age', 'height'])
# all columns should be selected.

```

#### コンストラクタ

#### コンセプト

#### プロパティ

#### メソッド

#### 特殊アイテム

## jmp > Expression

### 関数

#### Equality

**説明:** Expressionオブジェクトでは、等しいか、等しくないかのチェックをサポートしている。2つのExpressionオブジェクトが等しいかどうかをチェックする場合、値を比較し、等しいかどうかを戻す。これは、Expressionオブジェクトの値の比較であり、値の評価ではない。

**JMP追加されたバージョン:** 19

```python

import jmp

expr1 = jmp.Expression('1 + 1')
expr2 = jmp.Expression('2 + 0')
expr3 = jmp.Expression('1 + 1')
print(expr1 == expr2)
print(expr1 == expr3)
print(expr1 != expr2)
print(expr1 != expr3)

```

#### __eq__

**構文:** expression1 == expression2

**説明:** 等しいかどうかのテストは、Expressionオブジェクトの内容がもう一方のExpressionオブジェクトと同じである場合に真(true)を戻し、同じでない場合に偽(false)を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

expr1 = jmp.Expression('1 + 1')
expr2 = jmp.Expression('2 + 0')
expr3 = jmp.Expression('1 + 1')
print(expr1 == expr2)
print(expr1 == expr3)

```

#### __init__

**構文:** Expression(jsl=&lt;string&gt;)

**説明:** 新しいExpressionオブジェクトを作成する。

**JMP追加されたバージョン:** 19

```python

import jmp

from jmp import Expression, eval
expr = Expression(jsl="2 + 2")
print(f'Expression: {expr}')
print(f'Result: {eval(expr)}')
expr.jsl = '1 + 1'
print(f'Expression Adjusted: {eval(expr)}')

```

#### __ne__

**構文:** expression1 != expression2

**説明:** 異なるかどうかのテストは、Expressionオブジェクトの内容がもう一方のExpressionオブジェクトと異なる場合に真(true)を戻し、異ならない場合に偽(false)を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

expr1 = jmp.Expression('1 + 1')
expr2 = jmp.Expression('2 + 0')
expr3 = jmp.Expression('1 + 1')
print(expr1 != expr2)
print(expr1 != expr3)

```

#### __str__

**構文:** str( expr_obj )

**説明:** Expressionオブジェクトに関するすべての情報を含んだ文字列を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp
expr = jmp.Expression(':Height / :Weight')
print(expr)

```

#### jsl

**構文:** expr_obj.jslexpr_obj.jsl = &lt;string&gt;

**説明:** Expression jslプロパティは読み込みと設定が可能。

**JMP追加されたバージョン:** 19

```python

import jmp

expr = jmp.Expression(jsl='0 + 0')
print(expr)
expr.jsl = '2 + 2'
print(expr)

```

#### コンストラクタ

#### コンセプト

#### プロパティ

#### 特殊アイテム

## jmp > Image

### 関数

#### Equality

**説明:** Imageオブジェクトでは、等しいか、等しくないかのチェックをサポートしている。2つのImageオブジェクトが等しいかどうかをチェックする場合、値を比較し、等しいかどうかを戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

image1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')
image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')
print(image1 == image2)
print(image1 == image3)
print(image1 != image2)
print(image1 != image3)

```

#### __eq__

**構文:** image1 == image2

**説明:** 等しいかどうかのテストは、Imageオブジェクトの内容がもう一方のImageオブジェクトと同じである場合に真(true)を戻し、同じでない場合に偽(false)を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

image1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')
image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')
print(image1 == image2)
print(image1 == image3)

```

#### __init__

**構文:** jmp.Image(path=&lt;string&gt;)

**説明:** 新しいImageオブジェクトを作成する。

**JMP追加されたバージョン:** 19

```python

import jmp

image = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
print(f'Image: {image}')
jmp.open(image)

```

#### __ne__

**構文:** image1 != image2

**説明:** 異なるかどうかのテストは、Imageオブジェクトの内容がもう一方のImageオブジェクトと異なる場合に真(true)を戻し、異ならない場合に偽(false)を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

image1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')
image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')
print(image1 != image2)
print(image1 != image3)

```

#### __str__

**構文:** str( image_obj )

**説明:** Imageオブジェクトに関するすべての情報を含んだ文字列を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp
image = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
print(image)

```

#### コンストラクタ

#### コンセプト

#### 特殊アイテム

## jmp > Project

### 関数

#### __init__

**構文:** prj = jmp.Project(&lt;name=&apos;Project name&apos;&gt;)

**説明:** JMPのプロジェクトとそのファイルにアクセスできる新しいProjectオブジェクトを作成する。

**JMP追加されたバージョン:** 19

**プロジェクトの名前**

```python

import jmp

prj = jmp.Project()
print(prj.name)

```

**名前を指定した空のプロジェクト**

```python

import jmp
prj = jmp.Project('My Project')

```

**空のプロジェクト**

```python

import jmp
prj = jmp.Project()

```

#### __str__

**構文:** str( project )

**説明:** プロジェクトを表す文字列を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

prj = jmp.Project()
print( prj )

```

#### contents

**構文:** prj.name

**説明:** プロジェクトに含まれているファイル名のリストを戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

prj = jmp.Project()
print(prj.contents)

```

#### exists

**構文:** prj.exists(&apos;file_name&apos;)

**説明:** 指定された名前のファイルがプロジェクト内に存在するかどうかを確認する。

**JMP追加されたバージョン:** 19

```python

import jmp

prj = jmp.Project()
print( prj.exists('myfile.data') )

```

#### extract

**構文:** prj.extract(&apos;file_name&apos;)

**説明:** 指定された名前のファイルをプロジェクトからプロジェクトの一時ディレクトリに展開する。

**JMP追加されたバージョン:** 19

```python

import jmp

prj = jmp.Project()
success = prj.extract('myfile.data')

```

#### extract_all

**構文:** prj.extract_all()

**説明:** すべてのプロジェクトファイルをプロジェクトの一時ディレクトリに展開する。

**JMP追加されたバージョン:** 19

```python

import jmp

prj = jmp.Project()
success = prj.extract_all()

```

#### is_extracted

**構文:** prj.is_extracted(&apos;file_name&apos;)

**説明:** 指定された名前のファイルがすでにプロジェクトアーカイブから展開されているかどうかを確認する。

**JMP追加されたバージョン:** 19

```python

import jmp

prj = jmp.Project()
print( prj.is_extracted('myfile.data') )

```

#### name

**構文:** prj.name

**説明:** プロジェクトのnameプロパティは読み取り専用。

**JMP追加されたバージョン:** 19

```python

import jmp

prj = jmp.Project()
print(prj.name)

```

#### コンストラクタ

#### プロパティ

#### 特殊アイテム

#### 関数

## jmp > RowState

### 関数

#### Equality

**説明:** RowStateオブジェクトでは、等しいか、等しくないかのチェックをサポートしている。2つのRowStateオブジェクトが等しいかどうかをチェックする場合、値を比較し、等しいかどうかを戻す。2つのRowStateオブジェクトの内容が等しいときは、初期状態が異なる場合でも真(true)を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

rs1 = jmp.RowState(color=4, marker=2, selected=True)
rs2 = jmp.RowState(color=11, excluded=True, labeled=True)
rs3 = jmp.RowState(value=1057)
print(rs1 == rs2)
print(rs1 == rs3)
print(rs1 != rs2)
print(rs1 != rs3)

```

#### __eq__

**構文:** rs1 == rs2

**説明:** 等しいかどうかのテストは、RowStateオブジェクトの内容がもう一方のRowStateオブジェクトと同じである場合に真(true)を戻し、同じでない場合に偽(false)を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

rs1 = jmp.RowState(color=4, marker=2, selected=True)
rs2 = jmp.RowState(color=11, excluded=True, labeled=True)
rs3 = jmp.RowState(value=1057)
print(rs1 == rs2)
print(rs1 == rs3)

```

#### __init__

**構文:** jmp.RowState(selected?=&lt;boolean&gt;, hidden?=&lt;booleane&gt;, labeled?=&lt;boolean&gt;, excluded?=&lt;boolean&gt;, color?=&lt;int&gt;, marker?=&lt;int&gt;)jmp.RowState(value=&lt;int&gt;)

**説明:** 新しいRowStateオブジェクトを作成する。RowStateは、JMPデータテーブルの行が持ち得る6つの特性(選択、表示、除外、ラベル、色、マーカー)を保持したオブジェクト。

**JMP追加されたバージョン:** 19

```python

import jmp

from jmp import RowState
rs = RowState(color=4, marker=2, selected=True)
print(f'Row State: {rs}')

rs_from_value = RowState(value=33)
print(f'Row State from Value: {rs_from_value}')

```

#### __ne__

**構文:** image1 != image2

**説明:** 異なるかどうかのテストは、RowStateオブジェクトの内容がもう一方のRowStateオブジェクトと異なる場合に真(true)を戻し、異ならない場合に偽(false)を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

rs1 = jmp.RowState(color=4, marker=2, selected=True)
rs2 = jmp.RowState(color=11, excluded=True, labeled=True)
rs3 = jmp.RowState(value=1057)
print(rs1 != rs2)
print(rs1 != rs3)

```

#### __str__

**構文:** str( rs_obj )

**説明:** RowStateオブジェクトに関するすべての情報を含んだ文字列を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp
rs = jmp.RowState(color=11, excluded=True, labeled=True)
print(rs)

```

#### color

**構文:** rs_obj.colorrs_obj.color = &lt;int&gt;

**説明:** RowStateのcolorプロパティは、読み込みと設定が可能。色は0～84から選択する。(0～15は基本色、16～31はやや暗い、32～47はやや明るい、48～63は暗い、64～79は明るい、80～84はグレー)

**JMP追加されたバージョン:** 19

```python

import jmp

rs = jmp.RowState(color=5)
print(rs)
rs.color = 0
print(rs)

```

#### excluded

**構文:** rs_obj.excludedrs_obj.excluded = &lt;boolean&gt;

**説明:** RowStateのexcludedプロパティは、読み込みと設定が可能。

**JMP追加されたバージョン:** 19

```python

import jmp

rs = jmp.RowState(excluded=True)
print(rs)
rs.excluded = False 
print(rs)

```

#### hidden

**構文:** rs_obj.hiddenrs_obj.hidden = &lt;boolean&gt;

**説明:** RowStateのhiddenプロパティは、読み込みと設定が可能。

**JMP追加されたバージョン:** 19

```python

import jmp

rs = jmp.RowState(hidden=True)
print(rs)
rs.hidden = False 
print(rs)

```

#### labeled

**構文:** rs_obj.labeledrs_obj.labeled = &lt;boolean&gt;

**説明:** RowStateのlabeledプロパティは、読み込みと設定が可能。

**JMP追加されたバージョン:** 19

```python

import jmp

rs = jmp.RowState(labeled=True)
print(rs)
rs.labeled = False 
print(rs)

```

#### marker

**構文:** rs_obj.markerrs_obj.marker = &lt;int&gt;

**説明:** RowStateのmarkerプロパティは、読み込みと設定が可能。マーカーは0～31から選択する。

**JMP追加されたバージョン:** 19

```python

import jmp

rs = jmp.RowState(marker=3)
print(rs)
rs.marker = 0
print(rs)

```

#### selected

**構文:** rs_obj.selectedrs_obj.selected = &lt;boolean&gt;

**説明:** RowStateのselectedプロパティは、読み込みと設定が可能。

**JMP追加されたバージョン:** 19

```python

import jmp

rs = jmp.RowState(selected=True)
print(rs)
rs.selected = False 
print(rs)

```

#### コンストラクタ

#### コンセプト

#### プロパティ

#### 特殊アイテム

## jmp > globals

### 関数

#### Iteration

**説明:** globalsプロパティにより値のセットの反復処理が行える。

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['e'] = 2.718
jmp.run_jsl('''
    show(::pi)
''')

for x in jmp.globals:
    print( x )

```

#### __getitem__

**構文:** value = jmp.globals[&apos;name&apos;]

**説明:** JSLグローバル変数をPythonオブジェクトとして取得する。オブジェクトが見つからない場合は、None (なし)、処理できないデータタイプである場合は、不透明な(opaque)タイプを戻す。Python Send()やPython Get()と同じ種類のオブジェクトを転送できる。

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.run_jsl('''
    pi = 3.1415929
''')
print( jmp.globals['pi'] )

```

#### __len__

**構文:** length = len( jmp.globals )

**説明:** JSLグローバル環境のシンボルの数を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

print( len( jmp.globals ) )
jmp.globals['pi'] = 3.1415927
print( len( jmp.globals ) )
jmp.globals['e'] =  2.7182818
print( len( jmp.globals ) )

```

#### __setitem__

**構文:** jmp.globals[&apos;name&apos;] = value

**説明:** Due to Python scoping and the design of Python Get(), only variables in the Python global scope are accessible with Python Get(). The jmp.globals dictionary provides the capacity to directly set or create a JSL variable from Python code. The value type can be any Python type currently supported by Python Get().

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.run_jsl('''
    show(pi)
''')

```

#### __str__

**構文:** str(jmp.globals)

**説明:** グローバルの内容をディクショナリに表示する。globals のディクショナリはJMP自身が使用するもので、追加のエントリがある場合もある。

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['e'] =  2.7182818
jmp.globals['Bb'] = 'bumble bee'
print( jmp.globals )
d = str(jmp.globals)
print(d)

```

#### get

**構文:** value = jmp.globals.get(&apos;name&apos;)

**説明:** get()関数は、与えられたキーの値を戻す。JSLと同様に、キーはファジーマッチ。

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['an A'] = 'Annie'
print( jmp.globals.get('pi') )                        
print( jmp.globals.get('ana') )

```

#### items

**構文:** item_list = jmp.globals.items()

**説明:** 名前空間のキーと値のペアのリストを戻す。globals のディクショナリはJMP自身が使用するもので、追加のエントリがある場合もある。

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['bB'] = 'Bumble Bee'
print( jmp.globals.items() )

```

#### keys

**構文:** key_list = jmp.globals.keys()

**説明:** 名前空間のキーのリストを戻す。globalsのディクショナリは JMP自身が使用するもので、追加のエントリがある場合もある。

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['bB'] = 'Bumble Bee'
print( jmp.globals.keys() )

```

#### values

**構文:** value_list = jmp.globals.values()

**説明:** 名前空間の値のリストを戻す。globals のディクショナリはJMP自身が使用するもので、追加のエントリがある場合もある。

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['bB'] = 'Bumble Bee'
print( jmp.globals.values() )

```

#### コンセプト

#### メソッド

#### 特殊アイテム

## jmp > here

### 関数

#### Iteration

**説明:** hereプロパティにより、&apos;here&apos;名前空間における値の反復処理が行える。

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.globals['e'] = 2.718
jmp.run_jsl('''
    Names Default to Here(1);
    show(pi)
''')

for x in jmp.here:
    print( x )
print([x for x in jmp.globals])

```

#### __getitem__

**構文:** value = jmp.here[&apos;name&apos;]

**説明:** Gets a JSL variable from the current &apos;here&apos; namespace as a Python object. Returns None if the object cannot be found, or an opaque type for data types that cannot yet be handled. Providing direct retrieval of a JSL variable into the local Python scope. Supports transfers of the same types of objects as Python Send(). Note that in JSL namespace scoping, the &apos;here&apos; namespace is local to script submission, and code submitted from different script windows will have separate &apos;here&apos; namespaces. Code that includes another script has a single &apos;here&apos; namespace. This shared namespace also exists for a JSL script running Python via Submit() or Execute(), Python scripts calling run_jsl().

**JMP追加されたバージョン:** 19

**Scope**

```python

import jmp

jmp.run_jsl('''
Names Default to Here(1);
here_v = "here";
Show(here_v);
''')
print( f'temporary: {jmp.here['here_v']}' )
try:    
    print(here_v)
except:
    print('here_v is not in Python globals().')
def scoped():
    v = jmp.here['here_v']
    print(f'scoped: {v}')
    
scoped()
try:    
    print(v)
except:
    print('v is local to scoped().')

```

**例 1**

```python

import jmp

jmp.globals['e'] = 2.71828
jmp.run_jsl('''
    Names Default to Here(1);
    pi = 3.1415929;
    show(::e);
''')
print( jmp.here['pi'] )

```

#### __len__

**構文:** length = len( jmp.here )

**説明:** JSL &apos;here&apos;名前空間のシンボルの数を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

print( len( jmp.here ) )
jmp.here['pi'] = 3.1415927
print( len( jmp.here ) )
jmp.here['e'] =  2.7182818
print( len( jmp.here ) )

```

#### __setitem__

**構文:** jmp.here[&apos;name&apos;] = value

**説明:** Provides the means to set a value into the JSL script&apos;s &apos;here&apos; namespace. This allows sending back a value that could not be reached by Python Get(). Only variables in the Python global scope can be seen by Python Get(). Supports same object types as Python Get(). Note on JSL namespace scoping, the &apos;here&apos; namespace is local to the script submission.  Code submitted from different script windows will have separate &apos;here&apos; namespaces. Code including another script will have a single &apos;here&apos; namespace. This holds true for a JSL script running Python via Submit() or Execute(), Python scripts calling run_jsl().

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.run_jsl('''
    Names Default to Here(1);
    show(pi)
''')

```

#### __str__

**構文:** str(jmp.here)

**説明:** Hereの内容をディクショナリ形式で表示する。

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['e'] =  2.7182818
jmp.here['Bb'] = 'bumble bee'
print( jmp.here )
d = str(jmp.here)
print(d)

```

#### get

**構文:** value = jmp.here.get(&apos;name&apos;)

**説明:** get()関数は、与えられたキーの値を戻す。JSLと同様に、キーはファジーマッチ。

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.get('pi') )                        
print( jmp.here.get('b  b') )

```

#### items

**構文:** item_list = jmp.here.items()

**説明:** 名前空間のキーと値のペアのリストを戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.items() )

```

#### keys

**構文:** key_list = jmp.here.keys()

**説明:** 名前空間のキーのリストを戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.keys() )

```

#### values

**構文:** value_list = jmp.here.values()

**説明:** 名前空間の値を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.values() )

```

#### コンセプト

#### メソッド

#### 特殊アイテム

## jmp > live

### 関数

#### get_credentials()

**構文:** jmp.live.get_credentials(&lt;credential_name&gt;)

**説明:** JMP Liveのデータリフレッシュスクリプトの中で、指定した名前のログイン情報(名前を指定しない場合はデフォルトのログイン情報)を戻す。戻り値は、ユーザ名(username)、パスワード(password)、キーファイルパス(key_file_path)を含んだ辞書型のデータ。

**JMP追加されたバージョン:** 19

```python

import jmp

dt = jmp.DataTable()

credentials = jmp.live.get_credentials()

# login to external data source using credentials['username'] and credentials['password']
# create dt using obtained data

jmp.live.set_result(dt)

```

#### get_import_file_path()

**構文:** jmp.live.get_import_file_path()

**説明:** JMP Liveのデータ読み込みスクリプトで、アップロードされた読み込みファイルへのパスを戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

dt = jmp.DataTable()

importPath = jmp.live.get_import_file_path()
with open(importPath) as importFile:
    # [import data from importFile to dt]

jmp.live.set_result(dt)

```

#### set_result()

**構文:** jmp.live.set_result()

**説明:** JMP Liveのデータリフレッシュスクリプトと読み込みスクリプトにおいて、結果のテーブルを設定する。更新をキャンセルするには、結果をNone (なし)に設定する。

**JMP追加されたバージョン:** 19

```python

import jmp

dt = jmp.DataTable()
shouldUpdate = True

# add data to dt, or set shouldUpdate to False

if shouldUpdate:
    jmp.live.set_result(dt)
else:
    jmp.live.set_result(None)

```

#### 関数

## jmp > log

### 関数

#### flush

**構文:** jmp.log.flush()

**説明:** log.flush()関数とlog.write()関数は、Pythonのstdioおよびstderrのflush()およびwrite()関数をオーバーロードする。これらの関数は、Pythonの出力をJMPのログウィンドウやスクリプトウィンドウ内のログに向けるためのものであり、多くはJMP内部で使用される。jmp.log.flush()はNOPで、空の文字列を戻す。

**JMP追加されたバージョン:** 18

```python

import jmp

import jmp.log
jmp.log.flush()

```

#### write

**構文:** jmp.log.write(&apos;message&apos;)

**説明:** log.flush()関数とlog.write()関数は、Pythonのstdioおよびstderrのflush()およびwrite()関数をオーバーロードする。これらの関数は、Pythonの出力をJMPのログウィンドウやスクリプトウィンドウ内のログに向けるためのものであり、多くはJMP内部で使用される。プログラムは、jmp.log.write(&apos;message&apos;)を呼び出して、メッセージを明示的にJMPログウィンドウまたはスクリプトウィンドウ内のログに送ることができる。

**JMP追加されたバージョン:** 18

```python

import jmp

import jmp.log
jmp.log.write('I am a log message.')

```

#### 関数

## jmp

### 関数

#### ALL_HOME

**構文:** jmp.ALL_HOME

**説明:** JSLの$ALL_HOMEディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.ALL_HOME)

```

#### BUILTIN_SCRIPTS

**構文:** jmp.BUILTIN_SCRIPTS

**説明:** JSLの$BUILTIN_SCRIPTSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.BUILTIN_SCRIPTS)

```

#### DESKTOP

**構文:** jmp.DESKTOP

**説明:** JSLの$DESKTOPディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.DESKTOP)

```

#### DOCUMENTS

**構文:** jmp.DOCUMENTS

**説明:** JSLの$DOCUMENTSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.DOCUMENTS)

```

#### DOWNLOADS

**構文:** jmp.DOWNLOADS

**説明:** JSLの$DOWNLOADSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.DOWNLOADS)

```

#### DataType

**構文:** jmp.DataType.enum_value

**説明:** jmp.DataTypeは、JMP列のデータタイプを示すリスト。デフォルトのNumeric(数値)タイプ以外の列を作成する場合に、jmp.DataTable.new_column()関数でこれらのデータタイプを使用する。

**JMP追加されたバージョン:** 18

```python

import jmp

# for the sake of typing
from jmp import DataType as dType
print('jmp.DataType members:')
print( list(map(lambda c: c.name, dType)) )

```

#### Enum

#### HOME

**構文:** jmp.HOME

**説明:** JSLの$HOMEディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.HOME)

```

#### JMPPRJ

**構文:** jmp.JMPPRJ

**説明:** プロジェクトの一時ディレクトリの物理パスを戻す。現在の作業ディレクトリを戻すか、スクリプトがプロジェクト内で実行されていない場合は、None (なし)を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp
print(jmp.JMPPRJ)

```

#### ModelingType

**構文:** jmp.ModelingType.enum_value

**説明:** jmp.ModelingTypeは、JMP列の尺度を示すリスト。デフォルトのContinuous(連続尺度)以外の列を作成する場合に、jmp.DataTable.new_column()関数でこれらの尺度を使用する。NoneはPythonのキーワードであるため、TypeNoneはJMPの尺度である「None」(なし)と違う名前になっている。

**JMP追加されたバージョン:** 18

```python

import jmp

# for the sake of typing
from jmp import ModelingType as mType
print('jmp.ModleingType members:')
print( list(map(lambda c: c.name, mType)) )

```

#### PYTHONW_EXE

**構文:** jmp.PYTHONW_EXE

**説明:** JMPでインストールされた非コンソールPython実行ファイルのパス(Windowsのみ)。

**JMP追加されたバージョン:** 19

```python

import jmp

import platform
if platform.system() == "Windows":
    print(jmp.PYTHONW_EXE)

```

#### PYTHON_EXE

**構文:** jmp.PYTHON_EXE

**説明:** JMPでインストールされたPython実行ファイルのパス。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.PYTHON_EXE)

```

#### PY_USER_APPDIR

**構文:** jmp.PY_USER_APPDIR

**説明:** JMPによるPythonサポートの基礎となるユーザディレクトリのパス。site-packagesディレクトリは、このディレクトリ階層に含まれる。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.PY_USER_APPDIR)

```

#### SAMPLE_APPS

**構文:** jmp.SAMPLE_APPS

**説明:** JSLの$SAMPLE_APPSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_APPS)

```

#### SAMPLE_DASHBOARDS

**構文:** jmp.SAMPLE_DASHBOARDS

**説明:** JSLの$SAMPLE_DASHBOARDSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_DASHBOARDS)

```

#### SAMPLE_DATA

**構文:** jmp.SAMPLE_DATA

**説明:** JSLの$SAMPLE_DATAディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_DATA)

```

#### SAMPLE_IMAGES

**構文:** jmp.SAMPLE_IMAGES

**説明:** JSLの$SAMPLE_IMAGESディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_IMAGES)

```

#### SAMPLE_IMPORT_DATA

**構文:** jmp.SAMPLE_IMPORT_DATA

**説明:** JSLの$SAMPLE_IMPORT_DATAディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_IMPORT_DATA)

```

#### SAMPLE_PROJECTS

**構文:** jmp.SAMPLE_PROJECTS

**説明:** JSLの$SAMPLE_PROJECTSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_PROJECTS)

```

#### SAMPLE_SCRIPTS

**構文:** jmp.SAMPLE_SCRIPTS

**説明:** JSLの$SAMPLE_SCRIPTSディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.SAMPLE_SCRIPTS)

```

#### TEMP

**構文:** jmp.TEMP

**説明:** JSLの$TEMPディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.TEMP)

```

#### USER_APPDATA

**構文:** jmp.USER_APPDATA

**説明:** JSLの$USER_APPDATAディレクトリに対応する値。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.USER_APPDATA)

```

#### __jmp_version__

**構文:** jmp.__jmp_version__

**説明:** JMP実行ファイルのバージョン番号。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.__jmp_version__)

```

#### __version__

**構文:** jmp.__version__

**説明:** インポートした「jmp」パッケージのバージョン番号。JMPそのもののバージョンではない。

**JMP追加されたバージョン:** 18

```python

import jmp
print(jmp.__version__)

```

#### current

**構文:** dt = jmp.current()

**説明:** 現在のJMPデータテーブルのDataTableオブジェクトを戻す。

**JMP追加されたバージョン:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(jmp.current())

```

#### eval

**構文:** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**説明:** 引数を評価し、その結果を戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

from jmp import eval, Expression
expression = Expression("2 + 2")
result = eval(expression)
print(result)

```

#### from_dataframe

**構文:** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;)

**説明:** プロトコルに準拠したライブラリのデータフレームからjmp.DataTableオブジェクトを戻す。

**JMP追加されたバージョン:** 19

**CSV Fallback**

```python

import jmp

import jmputils
jmputils.jpip('install --upgrade', 'pip setuptools')
jmputils.jpip('install', 'pandas')

import pandas as pd

# Object columns are unsupported with jmp.from_dataframe() 
df = pd.DataFrame({
    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),
})

dt = jmp.from_dataframe(df)
print(dt)

```

**Ibis to JMP**

```python

import jmp

import jmputils
jmputils.jpip('install --upgrade', 'pip setuptools')
jmputils.jpip('install', 'pandas ibis-framework[duckdb,examples]')

import pandas as pd
import ibis

pandas_df = pd.DataFrame(
    [["a", 1, 2], ["b", 3, 4]],
    columns=["one", "two", "three"],
)
t = ibis.memtable(pandas_df, name="t")
print(t)
dt = jmp.from_dataframe(t)
print(dt)

```

**JMP to Pandas**

```python

import jmp

import jmputils
jmputils.jpip('install --upgrade', 'pip setuptools')
jmputils.jpip('install', 'pandas')

import pandas as pd

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
pandas_df = (pd.api.interchange.from_dataframe(dt))
print(pandas_df)

```

**JMP to Polars**

```python

import jmp

import jmputils
jmputils.jpip('install --upgrade', 'pip setuptools')
jmputils.jpip('install', 'polars')
 
import polars as pl

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
polars_df = pl.from_dataframe(dt)
print(polars_df)

```

**Pandas to JMP**

```python

import jmp

import jmputils
jmputils.jpip('install --upgrade', 'pip setuptools')
jmputils.jpip('install', 'numpy pandas')

import pandas as pd
import numpy as np

pandas_df = pd.DataFrame(
    {
        "A": 1.0,
        "B": pd.Timestamp("20130102"),
        "C": pd.Series(1, index=list(range(4)), dtype="float32"),
        "D": np.array([3] * 4, dtype="int32"),
        "E": pd.Categorical(["test", "train", "test", "train"]),
        "F": "foo",
    }
)
print(pandas_df)

dt = jmp.from_dataframe(pandas_df)
print(dt)

```

**Polars to JMP**

```python

import jmp

import jmputils
jmputils.jpip('install --upgrade', 'pip setuptools')
jmputils.jpip('install', 'polars')

import polars as pl
from datetime import date

polars_df = pl.DataFrame(
    {
        "foo": [1, 2, 3],
        "bar": [6.0, 7.0, 8.0],
        "ham": [date(2020, 1, 2), date(2021, 3, 4), date(2022, 5, 6)],
    }
)
print(polars_df)
dt = jmp.from_dataframe(polars_df)
print(dt)

```

#### from_dataframe_using_csv

**構文:** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;)

**説明:** 指定されたCSV変換メソッドを使って、ライブラリのデータフレームからjmp.DataTableオブジェクトを戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

import jmputils
jmputils.jpip('install', 'pandas')

import pandas as pd

# Object columns are unsupported with jmp.from_dataframe() 
df = pd.DataFrame({
    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),
})

try:
    # Try converting object without CSV fallback
    dt = jmp.from_dataframe(df, True, False)
    print("Converted using jmp.from_dataframe()")
except: 
    # Explicitly convert using CSV
    dt = jmp.from_dataframe_using_csv(df)
    print("Converted using jmp.from_dataframe_using_csv()")

print(dt)

```

#### open

**構文:** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**説明:** file_pathにあるファイルを開く。.jmpファイル、またはJMPデータテーブルに読み込まれるファイルである場合は、DataTableオブジェクトが戻される。それ以外の場合は、成功(True)または失敗(False)が戻される。オプションのvisibilityパラメータは、開いたファイルをビューに表示するかどうかを制御する。invisible(非表示)にすると、ビューには表示されないが、[最近使ったファイル]メニューやホームウィンドウには表示される。Privateのテーブルの場合、戻される参照がそのテーブルへの唯一の参照となり、どのファイルリストにも表示されない。

**JMP追加されたバージョン:** 18

**Excel**

```python

import jmp

obj = jmp.open(jmp.SAMPLE_IMPORT_DATA + 'Bigclass.xlsx')
print(obj)

```

**Invisible**

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Invisible')
dt = jmp.current()
print(dt)  # success
dt = jmp.table('Animals')
print(dt)  # success
# Select and run the above first if you want to see that even though
# there is no window, Animals.jmp appears in recent files and
# home window's list of files
dt.close(save=False);
del dt

```

**JMP**

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(dt)

```

**JSLスクリプト**

```python

import jmp

obj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')
print(obj)

```

**Private**

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')
dt = jmp.current()
print(dt)  # => None
try:
  dt = jmp.table('Animals')
except FileNotFoundError:
  print('Requested table not found')
dt = jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')
print(dt)
dt.close(save=False)
del dt

```

#### path_variable

**構文:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**説明:** たとえば、SAMPLE_DATAのような名前のパス変数を戻す。パス変数は、パスを指定した場合、設定された文字列に置換される。

**JMP追加されたバージョン:** 19

```python

import jmp

path_value = jmp.path_variable('SAMPLE_DATA')
if not path_value:
    print('Invalid path variable.')
else:
    print(path_value)

```

#### r_name

**構文:** dt = jmp.r_name(jsl_var)

**説明:** R変数の命名規則に従い、JMP変数名をR変数名に変換する。

**JMP追加されたバージョン:** 19

```python

import jmp

rName = jmp.r_name('c d e')
print(rName)

```

#### reset

**構文:** jmp.reset()

**説明:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP追加されたバージョン:** 19

```python

import jmp

pi = 3.1415927
print(pi)
jmp.reset()
print(pi)

```

#### run_jsl

**構文:** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**説明:** Python環境の中からJSLスクリプト(JSLのPythonインターフェース関数を含む)を実行する。オプションのecho=パラメータがFalse (偽)またはNone (なし)に設定されている場合、指定されたJSLソースコードによるログへのエコーを停止する。Python Send() / Get()でサポートされるのと同じJSLオブジェクトタイプに対して結果を戻す。スクリプトのエラーまたはサポートされていないJSLオブジェクトタイプの場合、None (なし)を戻す。

**JMP追加されたバージョン:** 18

**バージョンの取得**

```python

import jmp

jmp.run_jsl('Python Get Version();')

```

**列プロパティ**

```python

import jmp

# Create a data table
# dt = jmp.DataTable(name='table_name', rows=n)
pbp = jmp.DataTable(rows=5)
pbp.name = 'Powered by Python'
pbp.new_column('Name', jmp.DataType.Character)
pbp.new_column('Hourly Rate')
#
pbp['Name'] = ['Janet', 'James', 'Jerry', 'Jenny', 'Jill']
pbp[1] = [ 14.25, 9.75, 15.0, 12.35, '17.25']  # last value bad => becomes missing
pbp[1][4] = 17.25
#
# Change column format: Hourly Rate
jmp.run_jsl('''
Data Table( "Powered by Python" ):Hourly Rate << Format( "Currency", "USD", 17, 2 );
Data Table( "Powered by Python" ):Name << Set Display Width( 75 );
''')

```

**戻り値**

```python

import jmp

value = jmp.run_jsl('''
Names default to here(1);
an A = 1.5;
x = 5 * anA;
''')
print( f'{value} = jmp.run_jsl()')

```

#### table

**構文:** dt = jmp.table(&apos;table_name&apos;)

**説明:** table_nameで指定した名前の、開いているテーブルのDataTableオブジェクトを戻す。

**JMP追加されたバージョン:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( jmp.table('Big Class') )

```

#### 定数

#### 関数

## jmpex > R - module > R - class

### 関数

#### __init__

**構文:** jmpex.R.R( &lt;&apos;rpy2&apos;&gt; )

**説明:** R拡張クラスオブジェクトを作成する関数。オプションのパラメータでRサポートのバックエンドを指定する。現在サポートされているのは、rpy2のみ。引数が指定されなかった場合は、これがデフォルトとして使用される。

**JMP追加されたバージョン:** 19

```python

import jmp

from jmpex.R import R

jr = R()
print(jr.r_version())

```

#### __version__

**構文:** ver = jmpex.R.R().__version__

**説明:** The jmpex package&apos;s R support version.

**JMP追加されたバージョン:** 19

```python

import jmp

from jmpex.R import R

jr = R()
print(jr.__version__)

```

#### get

**構文:** pyobj = jmpex.R.R.get( &apos;name&apos; )

**説明:** R環境から指定された名前の変数を取得し、r2obj()関数を使ってPythonに戻す。R DataFrameはpandas.DataFrameとして戻される。

**JMP追加されたバージョン:** 19

**データテーブルの設定**

```python

import jmp

from jmpex.R import R
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')

jr = R()

d = jr.set( dt , 'rdt' )   # as_name required from Python
print(d.__class__)
print(d)
# A R DataFrame is returned to Python as a pandas.DataFrame
rdt = jr.get('rdt')
print( rdt.__class__ )
print( rdt )

```

**列の設定**

```python

import jmp

from jmpex.R import R
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')

jr = R()

a = jr.set( dt['age'], 'rage' )   # as_name required from Python

print(a.__class__)
print(a)
ra = jr.get('rage')
print( ra.__class__ )
print( ra )

```

**数値ベクトル**

```python

import jmp

from jmpex.R import R
import numpy as np
import rpy2.robjects as ro

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')

# initialize jmpex.R.R class
jr = R()

a = dt['age']
nar = np.array( a )
print(nar.__class__)
print(nar)
rv = ro.vectors.FloatVector(nar)
print(rv.__class__)
print(rv)

```

**文字列ベクトル**

```python

import jmp

from jmpex.R import R
import numpy as np
import rpy2.robjects as ro

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')

jr = R()

s = dt['name']
nas = np.array(s)
print(nas.__class__)
print(nas)
rv = ro.vectors.StrVector(nas)
print(rv.__class__)
print(rv)

```

#### is_connected

**構文:** jmpex.R.R.is_connected( )

**説明:** R()インスタンスオブジェクトの有無に関わらず使用できる静的な関数。Rサブシステムが初期化されたことを示す。

**JMP追加されたバージョン:** 19

```python

import jmp

from jmpex.R import R

print(f'R initialized: {R.is_connected()}')
jr = R()
print(f'R initialized: {R.is_connected()}')

```

#### obj2r

**構文:** jmpex.R.R.obj2r( var )

**説明:** PythonオブジェクトからRオブジェクトを作成する。

**JMP追加されたバージョン:** 19

```python

import jmp

from jmpex.R import R

jr = R()
d = { "canine": ["poodle", "dalmation", "wolf"], 
      "ages": [ 1, 3, 5], 
      "vet bill": [200.0, 300.57, 2000.99] }
      
r_obj = jr.obj2r( d )
p_obj = jr.r2obj( r_obj )

print(r_obj.__class__)
print(r_obj)

print(p_obj.__class__)
print(p_obj)

```

#### r2obj

**構文:** jmpex.R.R.r2obj( var )

**説明:** Rオブジェクトから通常のPythonオブジェクトを作成する。

**JMP追加されたバージョン:** 19

```python

import jmp

from jmpex.R import R

jr = R()
d = { "canine": ["poodle", "dalmation", "wolf"], 
      "ages": [ 1, 3, 5], 
      "vet bill": [200.0, 300.57, 2000.99] }
      
r_obj = jr.obj2r( d )
p_obj = jr.r2obj( r_obj )

print(r_obj.__class__)
print(r_obj)

print(p_obj.__class__)
print(p_obj)

```

#### r_version

**構文:** ver = jmpex.R.R.r_version( )

**説明:** Rのバージョンを戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

from jmpex.R import R

jr = R()
print(f'R Version: {jr.r_version()}')

```

#### set

**構文:** jmpex.R.R.set( var, as_name )

**説明:** Python変数を、as_nameパラメータを名前としたR環境に設定する。Rオブジェクトは、obj2r()関数を使って内部的に作成される。名前は、有効なR変数名になるように、適切なname -> R Name()関数を通して渡される。

**JMP追加されたバージョン:** 19

**データテーブルの設定**

```python

import jmp

from jmpex.R import R
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')

jr = R()

# R DataFrame can be jmp.DataTable, pandas.DataFrame, ...
d = jr.set( dt , 'Big.Class' )   # becomes 'Big.Class'
jr.submit('Big.Class')           # see: JSL R Send File(); R Submit();

print(d.__class__)
print(d)
bc = jr.get('Big.Class')
print( bc.__class__ )
print( bc )

```

**列の設定**

```python

import jmp

from jmpex.R import R
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')

jr = R()

a = jr.set( dt['age'], 'rage' )   # as_name required from Python

print(a.__class__)
print(a)
ra = jr.get('rage')
print( ra.__class__ )
print( ra )

```

**数値ベクトル**

```python

import jmp

from jmpex.R import R
import numpy as np
import rpy2.robjects as ro

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')

# initialize jmpex.R
jr = R()

a = dt['age']
nar = np.array( a )
print(nar.__class__)
print(nar)
rv = ro.vectors.FloatVector(nar)
print(rv.__class__)
print(rv)

```

**文字列ベクトル**

```python

import jmp

from jmpex.R import R
import numpy as np
import rpy2.robjects as ro

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')

jr = R()

s = dt['name']
nas = np.array(s)
print(nas.__class__)
print(nas)
rv = ro.vectors.StrVector(nas)
print(rv.__class__)
print(rv)

```

#### submit

**構文:** jmpex.R.R.submit( &apos;R script&apos; )

**説明:** 評価対象のRプログラムコードを送信する。可能な場合は、結果をPythonオブジェクトとして戻す。

**JMP追加されたバージョン:** 19

**スクリプト**

```python

import jmp

from jmpex.R import R

jr = R()
jr.submit('''
x <- rnorm (100)
y <- x**2 + rnorm (100)
''')

```

**データテーブルの設定**

```python

import jmp

from jmpex.R import R
           
jr = R()
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')

# R DataFrame can be jmp.DataTable, pandas.DataFrame, ...
d = jr.set( dt , 'Big.Class' )   # becomes 'Big.Class'
df = jr.submit('Big.Class')           # see: JSL R Send File(); R Submit();
print(f'DataFrame:\n{df}')

print(d.__class__)
print(d)
bc = jr.get('Big.Class')
print( bc.__class__ )
print( bc )

```

#### submit_file

**構文:** jmpex.R.R.submit_file(&apos;path_to_R_script&apos;)

**説明:** 評価対象のRスクリプトファイルを送信する。可能な場合は、結果をPythonオブジェクトとして戻す。

**JMP追加されたバージョン:** 19

```python

import jmp

import os
from jmpex.R import R

jr = R()
result = jr.submit_file( os.path.join(jmp.SAMPLE_SCRIPTS, 'R', 'SI_example.R') )
print(result)
print(result.__class__)

po = jr.r2obj(result)
print(po)
print(po.__class__)

```

#### コンストラクタ

#### 定数

#### 関数

## jmpex > R - module

### 関数

#### R

**説明:** Rモジュールは、PythonのクラスRを含むjmpex.Rを表す。クラスjmpex.R.Rは、インターフェース機能を実装する。

**JMP追加されたバージョン:** 19

#### コンセプト

## jmpex

### 関数

#### jmpex - package

**説明:** The jmpex package contains extension interfaces supported by JMP. Currently it contains only an R support module.

**JMP追加されたバージョン:** 19

#### コンセプト

## jmputils

### 関数

#### create_jpip

**構文:** create_jpip( &apos;directory_path&apos; )

**説明:** 指定したディレクトリ内にあるjpipスクリプトのターミナル/コマンドシェルバージョンを作成する関数。jpipスクリプトは、Pythonのpipコマンドのラッパーで、適切な環境変数が構成されるようにしたもの。jpipによってインストールされたパッケージは、JMPのsite-packagesディレクトリに入れられる。

**JMP追加されたバージョン:** 18

```python

import jmp

import jmputils
jmp.run_jsl('''
dest_path = Pick Directory("Directory location to save jpip script.");
// Pick Directory on windows returns a leading / use Convert File Path()
If( Host is("Windows"),
    dest_path = Convert File Path( dest_path, windows )
);
Python Send(dest_path);
''')
jmputils.create_jpip(dest_path)

```

#### jpip

**構文:** jpip( &apos;pip_cmd&apos;, packages=&apos;&apos; )

**説明:** JMP内から呼び出し可能な、Pythonのpipコマンドのラッパーとなっている関数。この関数にpipコマンドを文字列として渡す。オプションで、インストールする複数のパッケージをスペースで区切った文字列で指定することができる。各引数を含んだリストも使用できる。packages引数のデフォルト値は空の文字列。&apos;jmputils&apos;パッケージは、組み込みのPython標準ライブラリファイルと同じ場所にある。jmputils内の関数はすべて、Pythonの標準ライブラリ関数またはJMPのビルトイン機能のみを使用する。

**JMP追加されたバージョン:** 18

**install**

```python

import jmp

from jmputils import jpip
# update to latest version of pip and setuptools then install numpy & pandas
jpip('install --upgrade', 'pip setuptools certifi')
jpip('install', 'numpy pandas')

```

**install (list arguments)**

```python

import jmp

from jmputils import jpip
# update to latest version of pip and setuptools then install numpy & pandas
jpip(['install', '--upgrade'], ['pip', 'setuptools', 'certifi'])
jpip(['install'], ['numpy', 'pandas'])

```

**jmpex**

```python

import jmp

import os
from jmputils import jpip
# Install jmpex package 
jpip('install', [ os.path.join(jmp.SAMPLE_SCRIPTS, 'Python', 'jmpex.zip') ] )

```

**list**

```python

import jmp

from jmputils import jpip
jpip('list')

```

**Local Package**

```python

import jmp

from jmputils import jpip
jmp.run_jsl('''
dest_path = Pick Directory("Directory location of local package directory to install.");
// Pick Directory on windows returns a leading / use Convert File Path()
If( Host is("Windows"),
    dest_path = Convert File Path( dest_path, windows )
);
Python Send(dest_path);
''')
print(dest_path)
jpip('install', dest_path)

```

**Requirements file**

```python

import jmp

from jmputils import jpip

jmp.run_jsl('''

src_path = Pick File(
    "Select requirements.txt File",
    "$DOCUMENTS",
    {"TXT Files|txt", "All Files|*"},
    0,
    0,
    "requirements.txt"
);
show(src_path);
If( Host is("Windows"),
    src_path = Convert File Path( src_path, windows )
);
show(src_path);
Python Send(src_path);
''')
jpip('install', f'-r {src_path}')

```

**uninstall**

```python

import jmp

from jmputils import jpip
# R support package jmpex uninstalled like any other Python package. 
jpip('uninstall', 'jmpex')

```

#### 関数

