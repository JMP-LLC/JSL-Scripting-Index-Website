# Python Integration



## 함수

### ALL_HOME

**구문:** jmp.ALL_HOME

**설명:** JSL의 $ALL_HOME 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.ALL_HOME)

```

### BUILTIN_SCRIPTS

**구문:** jmp.BUILTIN_SCRIPTS

**설명:** JSL의 $BUILTIN_SCRIPTS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.BUILTIN_SCRIPTS)

```

### DESKTOP

**구문:** jmp.DESKTOP

**설명:** JSL의 $DESKTOP 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.DESKTOP)

```

### DOCUMENTS

**구문:** jmp.DOCUMENTS

**설명:** JSL의 $DOCUMENTS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.DOCUMENTS)

```

### DOWNLOADS

**구문:** jmp.DOWNLOADS

**설명:** JSL의 $DOWNLOADS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.DOWNLOADS)

```

### DataType

**구문:** jmp.DataType.enum_value

**설명:** jmp.DataType은 JMP 열의 데이터 유형을 나타내는 열거형이며, 숫자(기본값) 유형 이외의 열을 생성하기 위해 jmp.DataTable.new_column() 함수와 함께 사용됩니다.

**JMP추가된 버전:** 18

```python

import jmp

# for the sake of typing
from jmp import DataType as dType
print('jmp.DataType members:')
print( list(map(lambda c: c.name, dType)) )

```

### HOME

**구문:** jmp.HOME

**설명:** JSL의 $HOME 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.HOME)

```

### JMPPRJ

**구문:** jmp.JMPPRJ

**설명:** 프로젝트 임시 디렉터리의 실제 경로를 반환합니다. 현재 작업 디렉터리를 반환하거나, 스크립트가 프로젝트 내에서 실행되고 있지 않으면 &apos;None&apos;을 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp
print(jmp.JMPPRJ)

```

### ModelingType

**구문:** jmp.ModelingType.enum_value

**설명:** jmp.ModelingType은 JMP 열의 모델링 유형 또는 분석 유형을 나타내는 열거형이며, 연속형(기본값) 모델링 유형 이외의 열을 생성하기 위해 jmp.DataTable.new_column() 함수와 함께 사용됩니다. &apos;None&apos;은 Python 키워드이므로 TypeNone은 JMP의 &apos;없음&apos; 모델링 유형과 다릅니다.

**JMP추가된 버전:** 18

```python

import jmp

# for the sake of typing
from jmp import ModelingType as mType
print('jmp.ModleingType members:')
print( list(map(lambda c: c.name, mType)) )

```

### PYTHONW_EXE

**구문:** jmp.PYTHONW_EXE

**설명:** JMP에 설치된 no-console Python 실행 파일의 경로입니다(Windows에만 해당).

**JMP추가된 버전:** 19

```python

import jmp

import platform
if platform.system() == "Windows":
    print(jmp.PYTHONW_EXE)

```

### PYTHON_EXE

**구문:** jmp.PYTHON_EXE

**설명:** JMP에 설치된 Python 실행 파일의 경로입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.PYTHON_EXE)

```

### PY_USER_APPDIR

**구문:** jmp.PY_USER_APPDIR

**설명:** JMP의 Python 지원을 위한 기반이 되는 사용자 디렉터리 위치 경로입니다. site-packages 디렉터리는 이 디렉터리 계층 내에 있습니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.PY_USER_APPDIR)

```

### SAMPLE_APPS

**구문:** jmp.SAMPLE_APPS

**설명:** JSL의 $SAMPLE_APPS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_APPS)

```

### SAMPLE_DASHBOARDS

**구문:** jmp.SAMPLE_DASHBOARDS

**설명:** JSL의 $SAMPLE_DASHBOARDS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_DASHBOARDS)

```

### SAMPLE_DATA

**구문:** jmp.SAMPLE_DATA

**설명:** JSL의 $SAMPLE_DATA 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_DATA)

```

### SAMPLE_IMAGES

**구문:** jmp.SAMPLE_IMAGES

**설명:** JSL의 $SAMPLE_IMAGES 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_IMAGES)

```

### SAMPLE_IMPORT_DATA

**구문:** jmp.SAMPLE_IMPORT_DATA

**설명:** JSL의 $SAMPLE_IMPORT_DATA 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_IMPORT_DATA)

```

### SAMPLE_PROJECTS

**구문:** jmp.SAMPLE_PROJECTS

**설명:** JSL의 $SAMPLE_PROJECTS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_PROJECTS)

```

### SAMPLE_SCRIPTS

**구문:** jmp.SAMPLE_SCRIPTS

**설명:** JSL의 $SAMPLE_SCRIPTS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_SCRIPTS)

```

### TEMP

**구문:** jmp.TEMP

**설명:** JSL의 $TEMP 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.TEMP)

```

### USER_APPDATA

**구문:** jmp.USER_APPDATA

**설명:** JSL의 $USER_APPDATA 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.USER_APPDATA)

```

### __jmp_version__

**구문:** jmp.__jmp_version__

**설명:** JMP 실행 파일의 버전 번호입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.__jmp_version__)

```

### __version__

**구문:** jmp.__version__

**설명:** &apos;jmp&apos; 가져오기 패키지의 버전 번호입니다. 이 번호는 JMP 버전이 아닙니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.__version__)

```

### current

**구문:** dt = jmp.current()

**설명:** 현재 JMP 데이터 테이블에 대한 DataTable 개체를 반환합니다.

**JMP추가된 버전:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(jmp.current())

```

### eval

**구문:** result = eval(<string>|<Expression>)

**설명:** 인수를 실행하고 결과를 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

from jmp import eval, Expression
expression = Expression("2 + 2")
result = eval(expression)
print(result)

```

### from_dataframe

**구문:** result = jmp.from_dataframe(<library.Dataframe>, allow_copy=<boolean>, allow_csv_fallback=<boolean>)

**설명:** 프로토콜 호환 라이브러리의 데이터 프레임에서 jmp.DataTable 개체를 반환합니다.

**JMP추가된 버전:** 19

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

### from_dataframe_using_csv

**구문:** result = jmp.from_dataframe_using_csv(<library.Dataframe>)

**설명:** 제공된 CSV 변환 방법을 사용하여 라이브러리의 데이터 프레임에서 jmp.DataTable 개체를 반환합니다.

**JMP추가된 버전:** 19

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

**구문:** obj = jmp.open(&apos;file_path&apos; < , visibility=&apos;Invisible | Private&apos; )

**설명:** file_path에 있는 파일을 엽니다. 파일이 .jmp 파일이거나, JMP 데이터 테이블로 가져오는 파일이면 DataTable 개체가 반환됩니다. 그렇지 않으면 True(성공) 또는 False(실패)가 반환됩니다. 선택적 visibility 파라미터는 열린 파일을 보기에서 숨길지 여부를 제어합니다. &apos;Invisible&apos;을 선택하면 파일이 보기에서만 숨겨지고 최근 파일 메뉴와 홈 창에는 계속 표시됩니다. &apos;Private&apos; 테이블을 사용하면 테이블에 대한 참조만 반환되고 파일 목록에는 나타나지 않습니다.

**JMP추가된 버전:** 18

**Excel**

```python

import jmp

obj = jmp.open(jmp.SAMPLE_IMPORT_DATA + 'Bigclass.xlsx')
print(obj)

```

**JMP**

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(dt)

```

**JSL 스크립트**

```python

import jmp

obj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')
print(obj)

```

**비공개**

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

**숨김**

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

### path_variable

**구문:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**설명:** 경로 변수를 반환합니다. 경로 변수는 SAMPLE_DATA와 같은 이름입니다.

**JMP추가된 버전:** 19

```python

import jmp

path_value = jmp.path_variable('SAMPLE_DATA')
if not path_value:
    print('Invalid path variable.')
else:
    print(path_value)

```

### r_name

**구문:** dt = jmp.r_name(jsl_var)

**설명:** R 변수 명명 규칙을 사용하여 JMP 변수 이름을 R 변수 이름에 매핑합니다.

**JMP추가된 버전:** 19

```python

import jmp

rName = jmp.r_name('c d e')
print(rName)

```

### reset

**구문:** jmp.reset()

**설명:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP추가된 버전:** 19

```python

import jmp

pi = 3.1415927
print(pi)
jmp.reset()
print(pi)

```

### run_jsl

**구문:** result = jmp.run_jsl(&apos;JSL script contents&apos; <, echo = True | False | None > )

**설명:** JSL Python 인터페이스 함수를 포함하여 Python 환경 내에서 JSL 스크립트를 실행합니다. 선택적 echo= 파라미터를 &apos;False&apos; 또는 &apos;None&apos;으로 설정하면 제공된 JSL 소스 코드가 로그에 출력되지 않으며 Python Send()/Get()에서 지원하는 동일한 JSL 개체 유형에 대한 결과가 반환됩니다. 스크립트 오류 또는 지원되지 않는 JSL 개체 유형은 &apos;None&apos;을 반환합니다.

**JMP추가된 버전:** 18

**반환된 값**

```python

import jmp

value = jmp.run_jsl('''
Names default to here(1);
an A = 1.5;
x = 5 * anA;
''')
print( f'{value} = jmp.run_jsl()')

```

**버전 가져오기**

```python

import jmp

jmp.run_jsl('Python Get Version();')

```

**열 특성**

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

### table

**구문:** dt = jmp.table(&apos;table_name&apos;)

**설명:** &apos;table_name&apos;을 가진 열린 테이블에 대한 DataTable 개체를 반환합니다.

**JMP추가된 버전:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( jmp.table('Big Class') )

```

### 상수

### 열거

### 함수

## jmp > DataConnector

### 함수

#### Ability to copy with copy.copy

**설명:** DataConnector objects support shallow copying with the standard copy.copy function.



Changing the copying behavior in subclasses is not supported, so subclasses should not add additional instance attributes because they will not be copied.

**JMP추가된 버전:** 19

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

**구문:** value = dc["FIELD NAME"]

**설명:** 필드와 연결된 값을 가져옵니다.

**JMP추가된 버전:** 19

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

**구문:** def _do_as_data_source(self) -> jmp.DataSource:

**설명:** Subclasses should override this function to create a connection. The returned connection, in the form of a subclass of jmp.DataSource, enables integration with Query Builder.



Avoid storing and using a reference to the connector instance (self) in the returned data source. Other code might also hold a reference and change configuration values unexpectedly. Instead, consider using copy.copy to make an independent copy to refer to, like "self_copy = copy.copy(self)".

**JMP추가된 버전:** 19

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

**구문:** def _do_open(self) -> jmp.DataTable:

**설명:** Subclasses can override this function to open a table directly. This function implements the Open message in JSL (New Data Connector(...) << Open()).



If both this function and _do_as_data_source are implemented, they should be able to open the same set of tables.

**JMP추가된 버전:** 19

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

**구문:** jmp.DataConnector.tie(DataConnectorTypeClass, DataConnectorClass)

**설명:** Associates a jmp.DataConnectorType subclass and a jmp.DataConnector subclass, "tying" them together and completing the definitions of both classes. This association gives the jmp.DataConnector subclass access to the jmp.DataConnectorType subclass and its field definitions. It also ensures that the jmp.DataConnectorType subclass creates jmp.DataConnector instances using the specified subclass.



This function creates the association by setting attributes on the subclasses.

**JMP추가된 버전:** 19

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

#### 개념

#### 메서드

#### 특수 항목

#### 함수

## jmp > DataConnectorField

### 함수

#### __init__

**구문:** field = jmp.DataConnectorField(type, <default=DEFAULT_VALUE,> <tooltip="TOOLTIP" | None,> <ui_name="UI NAME" | None,> <credential="CREDENTIAL TYPE" | None,> <sensitive=True | False,> <mask_input=True | False>)

**설명:** DataConnectorField defines a field.



Base arguments:



type: The type of the field, such as int (see jmp.DataConnectorType.fields for more information).



default: The default value for the field, such as 42. If not provided, the default value depends on the type. The default value is None if that is supported, for example, if the type is "int | None". Otherwise, it is the "empty" value for the type: "" for str, 0 for int, and False for bool.



tooltip: If provided and not None, it is used as a tooltip for the field in the data connector editor.



ui_name: If provided and not None, it is used as the name of the field in the data connector editor instead of the actual name of the field.



Extra arguments when type is "str" or "str | None":



credential: If provided and not None, the type of credential stored by this field. The valid values are "username" and "password". JMP uses this information to enable placeholder support.



sensitive: When true, this field is considered to hold sensitive information and as such its values are not written out in plain text. Defaults to true if "credential" is set and false otherwise.



mask_input: When true, the value is obscured and shown with dots in the Data Connector Editor. Defaults to true if "credential" is "password" or "sensitive" is true and credential is not set.

**JMP추가된 버전:** 19

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

#### 생성자

## jmp > DataConnectorGroupedFields

### 함수

#### __init__

**구문:** fields = jmp.DataConnectorGroupedFields([("Group 1 Name", GROUP_1_FIELDS), ("Group 2 Name", GROUP_2_FIELDS), ...])

**설명:** jmp.DataConnectorGroupedFields defines fields in named groups. The groups are passed as a list of pairs. The first element of each pair is the name of the group, and the second is a dictionary with the fields. This dictionary has the same format as one used directly as the value for jmp.DataConnectorType.fields.



The use of groups affects the fields&apos; presentation in the data connector editor but not their programmatic access. The group name is used only in the UI, so the advice for field names to avoid characters that should not be used in JSL names does not apply.

**JMP추가된 버전:** 19

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

#### 생성자

## jmp > DataConnectorType

### 함수

#### fields

**구문:** fields = {"Name 1": TYPE_1 | jmp.DataConnectorField(...), "Name 2": TYPE_2 | jmp.DataConnectorField(...), ...} | jmp.DataConnectorGroupedFields(...)

**설명:** Subclasses must define a class-level variable named "fields" that specifies the configuration options for this type. It should be a dict or a jmp.DataConnectorGroupedFields object.



The keys of the dict are the names of the configuration options, which are exposed in JSL and the editor. They should be formatted like JSL identifiers. The value corresponding to each key is the type of the field, such as str or int, or a jmp.DataConnectorField object.



The supported types include bool, int, and str. Optional versions of these, such as typing.Optional[bool] or bool | None for bool, are also supported. A missing value is represented by None.

**JMP추가된 버전:** 19

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

#### 특성

## jmp > DataSource

### 함수

#### get_schemas

**구문:** def get_schemas(self) -> Sequence[str] | None:

**설명:** Subclasses can override this function to provide a list of the schemas in the data source. If this function is not overridden or it returns None, the data source is assumed to not support schemas.

**JMP추가된 버전:** 19

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

**구문:** def get_tables(self, schema: str) -> Sequence[str]:

**설명:** Subclasses should override this function to provide a list of the tables in the data source. If schemas are supported, this list should include only the tables under the schema that is passed. If schemas are not supported, the schema parameter should be ignored.

**JMP추가된 버전:** 19

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

**구문:** def open_table(self, schema: str, table: str) -> jmp.DataTable | str:

**설명:** Subclasses should override this function to get the table data for the named table. If schemas are not supported, the value of the schema argument can be ignored. The function should return a jmp.DataTable or a string containing a path to a file in a data format supported by JMP.



If returning a data table directly, the table should be created privately. If returning a path string, JMP opens the table itself and captures the settings that it used, preserving them in Query Builder scripts.

**JMP추가된 버전:** 19

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

**구문:** def open_table_with_settings(self, schema: str, table: str, settings: str | None) -> (jmp.DataTable, str | None):

**설명:** 하위 클래스에서 open_table 대신 이 함수를 재정의하여 테이블 열기 설정을 사용자 정의 방식으로 처리할 수 있습니다. 이 함수는 open_table과 비슷하지만 기존 설정(있는 경우)과 함께 호출됩니다. 또한 데이터 테이블을 반환해야 하며 새 설정(있는 경우)도 반환해야 합니다. 결측 설정은 &apos;None&apos;으로 표시됩니다.

**JMP추가된 버전:** 19

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

#### 메서드

## jmp > DataTable > Column

### 함수

#### Equality

**설명:** Column 개체는 등식 및 부등식 검사를 지원합니다. 실제로 DataTable.Column은 라이브 데이터 테이블 열에 대한 참조이므로 여러 Column 개체가 동일한 실제 열을 가리킬 수 있습니다. 등식 == 및 부등식 != 테스트는 내용을 비교하지 않습니다. 대신 두 DataTable.Column 개체가 열을 가리키는지 여부를 확인합니다.

**JMP추가된 버전:** 18

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

**설명:** DataTable.Column 개체는 Python 매핑 프로토콜을 지원합니다. 숫자 행 인덱스를 사용하는 배열 [] 연산자를 제공합니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.DataTable('Names', 5)
dt.new_column('First Name', jmp.DataType.Character)
dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]
for i in range(0, dt.nrows):
    print( dt[0][i] )

```

#### Sequence

**설명:** DataTable.Column은 Python 시퀀스처럼 작동합니다. 따라서 열의 값을 반복할 수 있습니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.DataTable('Names', 5)
dt.new_column('First Name', jmp.DataType.Character)
dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]
for n in dt[0]:
    print( n )

```

#### Slice

**설명:** slice 연산자는 [ ] get item 연산에 대한 파라미터로 사용되며 start:stop:step으로 구성됩니다. 이러한 파라미터는 선택적입니다. 반환되는 값은 start 값으로 시작하여 step 값 단위로 증가하고 stop 값을 포함하지 않는 값 목록입니다. 음수 start 또는 stop 값은 시퀀스 끝에서부터 1에서 시작하는 인덱스입니다. [step] 값이 음수이면 step 수가 증가하지 않고 감소합니다. 빈 값은 적절한 기본값으로 지정됩니다. [::-1]은 전체 목록을 역순으로 반환합니다. [:]은 전체 배열을 현재 항목 순서대로 반환합니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( [c.name for c in dt[:]] )         # print list of column names default step = 1
reverse_cols = dt[::-1]                  # list of column names in reverse order
print( [c.name for c in reverse_cols] )  # print reversed column name list
print( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### __eq__

**구문:** column1 == column2

**설명:** 두 개의 jmp.DataTable.Column 개체가 동일한 JMP 데이터 테이블 열을 가리킬 때 true를 반환하는 등식 테스트입니다. 내용이 일치하는지는 확인하지 않지만 두 변수가 정확히 동일한 열을 가리켜야 합니다.

**JMP추가된 버전:** 18

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

**구문:** value = column[ index ]

**설명:** 0에서 시작하는 인덱스를 사용하여 열에서 jmp.DataTable.Column 개체의 값을 가져오기 위한 [] 연산자를 제공합니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
col = dt[0]
for i in range ( len(col) ):
    print( col[i] )

```

#### __init__

**구문:** Column( dt_obj, name | index)

**설명:** 데이터 테이블의 특정 열을 가리키는 새 열 개체를 생성합니다. dt_obj 파라미터에 jmp.DataTable 개체가 필요하고, 올바른 열 이름 또는 인덱스가 필요합니다.

**JMP추가된 버전:** 18

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

**구문:** count = len( column )

**설명:** 테이블의 열 수를 반환합니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
print( len( dt['name'] ) )

```

#### __ne__

**구문:** column1 != column2

**설명:** 두 개의 jmp.DataTable.Column 개체가 동일한 데이터 테이블 열을 가리키지 않을 때 true를 반환하는 부등식 테스트입니다. 내용이 일치하는지는 확인하지 않지만 두 개체가 정확히 동일한 열을 가리키지 않아야 합니다.

**JMP추가된 버전:** 18

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

**구문:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**설명:** 열 이름 또는 0에서 시작하는 인덱스를 사용하여 테이블에서 jmp.DataTable.Column 개체를 가져오는 열의 값을 설정하기 위한 [] 연산자를 제공합니다.

**JMP추가된 버전:** 18

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

**구문:** str( column_obj )

**설명:** 데이터 테이블 열에 대한 요약 정보를 포함하는 문자열 표현을 반환합니다.

**JMP추가된 버전:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(dt[0])

```

#### data_length

**구문:** col_obj.data_length

**설명:** 열 필드의 데이터 길이를 반환하는 특성입니다. 이 값은 0, 1, 2, 4 또는 8바이트일 수 있습니다. 0은 기본값이며, 데이터 테이블 숫자 필드에 사용되는 8바이트를 의미합니다.

**JMP추가된 버전:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f'Data length of dt[-1] (weight column): {dt[-1].data_length}')

```

#### display_width

**구문:** col_obj.display_width

col_obj.display_width = <int>

**설명:** 열 표시 너비를 변경합니다.

**JMP추가된 버전:** 19

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
jmp.run_jsl('Wait( 0 );')
print(dt[0].display_width)
dt[0].display_width = 100
print(dt[0].display_width)

```

#### dtype

**구문:** col_obj.dtype

**설명:** 열의 데이터 유형에 대한 열거형 값을 반환하는 특성입니다.

**JMP추가된 버전:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f"Data Type of dt['age']: {dt['age'].dtype}")
dt['age'].dtype = jmp.DataType.Character 
print(f"Updated Data Type of dt['age']: {dt['age'].dtype}")

```

#### format

**구문:** col_obj.format

col_obj.format = tuple< <string>|<int>, ... >

**설명:** 형식 가져오기

**JMP추가된 버전:** 19

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

**구문:** col_obj.formula

col_obj.formula = <Expression | string>

**설명:** 유효한 JSL을 나타내는 문자열 또는 Expression 개체가 주어지면 열 계산식을 설정합니다.

**JMP추가된 버전:** 19

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

**구문:** col_obj.mtype

**설명:** 열의 모델링 유형에 대한 열거형 값을 반환하는 특성입니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f"Modeling Type of dt['age']: {dt['age'].mtype}") 
dt['age'].mtype = jmp.ModelingType.Nominal
print(f"Updated Modeling Type of dt['age']: {dt['age'].mtype}")

```

#### name

**구문:** col_obj.name

col_obj.name = <string>

**설명:** 읽기 및 설정 가능한 열 이름 특성입니다.

**JMP추가된 버전:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
print(dt[0].name)
dt[0].name = 'First Name'

```

#### 개념

#### 생성자

#### 특성

#### 특수 항목

## jmp > DataTable

### 함수

#### Equality

**설명:** DataTable 개체는 등식 및 부등식 검사를 지원합니다. 실제로 DataTable은 라이브 데이터 테이블에 대한 참조이므로 여러 개체가 동일한 JMP 테이블을 가리킬 수 있습니다. 등식 == 및 부등식 != 테스트는 내용을 비교하지 않습니다. 두 DataTable 개체가 동일한 JMP 테이블을 가리키는지 여부를 확인합니다.

**JMP추가된 버전:** 18

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

**설명:** DataTable 개체는 Python 매핑 프로토콜을 지원합니다. 배열 [] 연산자를 제공하고 열 이름 또는 숫자 값을 열 인덱스로 사용할 수 있습니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( f'Column name: {dt[1].name}' )
print( f"Column name: {dt['age'].name}" )

```

#### Sequence

**설명:** DataTable 개체는 Python 시퀀스처럼 작동합니다. 따라서 테이블의 열을 반복할 수 있습니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
for n in dt:
    print( n.name )

```

#### Slice

**설명:** slice 연산자는 [ ] get item 연산에 대한 파라미터로 사용되며 start:stop:step으로 구성됩니다. 이러한 파라미터는 선택적입니다. 반환되는 값은 start 값으로 시작하여 step 값 단위로 증가하고 stop 값을 포함하지 않는 값 목록입니다. 음수 start 또는 stop 값은 시퀀스 끝에서부터 1에서 시작하는 인덱스입니다. &apos;step&apos; 값이 음수이면 step 수가 증가하지 않고 감소합니다. 빈 값은 적절한 기본값으로 지정됩니다. [::-1]은 전체 목록을 역순으로 반환합니다. [:]은 전체 배열을 현재 항목 순서대로 반환합니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( [c.name for c in dt[:]] )         # print list of column names default step = 1
reverse_cols = dt[::-1]                  # list of column names in reverse order
print( [c.name for c in reverse_cols] )  # print reversed column name list
print( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### __eq__

**구문:** table1 == table2

**설명:** 두 개의 jmp.DataTable 개체가 동일한 JMP 데이터 테이블을 가리킬 때 true를 반환하는 등식 테스트입니다. 내용이 일치하는지는 확인하지 않지만 두 변수가 정확히 동일한 테이블을 가리켜야 합니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt2 = jmp.current()
iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")
print( dt == dt2 )
print( dt == iris)

```

#### __getitem__

**구문:** column = dt[&apos;name&apos; | index]

**설명:** 열 이름 또는 0에서 시작하는 인덱스를 사용하여 테이블에서 jmp.DataTable.Column 개체를 가져오기 위한 [] 연산자를 제공합니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
column = dt[0]
column2 = dt['age']
print(column)
print(column2)

```

#### __init__

**구문:** dt = jmp.DataTable(<name=&apos;table_name&apos;>, <rows=n>, <visibility=&apos;Invisible&apos; | &apos;Private&apos; )

**설명:** n개 행과 &apos;table_name&apos; 이름을 가진 새 데이터 테이블을 생성합니다. 파라미터와 키워드는 행만 지정하거나 파라미터 순서가 반대인 경우 외에는 선택적입니다.

**JMP추가된 버전:** 18

**비공개**

```python

import jmp
dt = jmp.DataTable('Powered By Python', 40, visibility='private')

```

**빈 테이블**

```python

import jmp
dt = jmp.DataTable()

```

**빈 테이블(열 이름 포함)**

```python

import jmp
dt = jmp.DataTable('Powered By Python')

```

**빈 테이블(행 포함)**

```python

import jmp
dt = jmp.DataTable('Powered By Python', 40)

```

**숨김**

```python

import jmp
dt = jmp.DataTable('Powered By Python', 40, visibility='Invisible')

```

**키워드 사용**

```python

import jmp
dt = jmp.DataTable(rows=40, name='Powered By Python')

```

#### __len__

**구문:** count = len(dt)

**설명:** 테이블의 열 수를 반환합니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
print( len(dt) )

```

#### __ne__

**구문:** table1 != table2

**설명:** 두 개의 jmp.DataTable 개체가 동일한 데이터 테이블을 가리키지 않을 때 true를 반환하는 부등식 테스트입니다. 내용이 일치하는지는 확인하지 않지만 두 개체가 정확히 동일한 테이블을 가리키지 않아야 합니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt2 = jmp.current()
iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")
print( dt != dt2 )
print( dt != iris)

```

#### __setitem__

**구문:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**설명:** 열 이름 또는 0에서 시작하는 인덱스를 사용하여 테이블에서 jmp.DataTable.Column 개체를 가져오는 열의 값을 설정하기 위한 [] 연산자를 제공합니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.DataTable('Names', 5)
dt.new_column('First Name', jmp.DataType.Character)
dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]
print( dt[0][:] )

```

#### __str__

**구문:** str( data_table )

**설명:** 데이터 테이블 개체에 대한 요약 정보의 문자열 표현을 반환합니다.

**JMP추가된 버전:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(dt)

```

#### add_rows

**구문:** add_rows(rows, <at=-1>)

**설명:** 데이터 테이블에 행을 추가합니다. rows는 필수이고, at은 선택적입니다. at이 0이면 테이블 맨 앞에 삽입하고, <0이면 테이블 맨 끝에 삽입합니다. 그렇지 않은 경우 at이 m이면 m행에 삽입합니다(0에서 시작하는 인덱스).

**JMP추가된 버전:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.add_rows(5)
dt.add_rows(1, at=0)
dt.add_rows(2, at=12) # 0-based indexing

```

#### cell_height

**구문:** dt.cell_height

dt.cell_height = <int>

**설명:** 각 데이터 테이블 셀의 표시 높이를 설정합니다.

**JMP추가된 버전:** 19

```python

import jmp
dt = jmp.DataTable()
jmp.run_jsl('Wait(0)')
print(dt.cell_height)
dt.cell_height = 40
print(dt.cell_height)

```

#### close

**구문:** dt.close( <save= True | False>)

**설명:** DataTable 개체에 대한 Close 메서드입니다. JSL과 마찬가지로 파라미터 없이 호출하면 기본적으로 파일을 저장합니다. 예를 들어 임시 테이블로 생성한 파일을 취소하려면 dt.close(False)를 사용합니다. dt.close(save=False)를 사용하면 더 명확합니다.

**JMP추가된 버전:** 18

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

**구문:** delete_columns(&apos;name&apos;, ..., &apos;name&apos;)

**설명:** delete_columms() 메서드는 JSL의 Delete Columns() 메시지와 동일한 방식으로 동작합니다. 허용되는 인수는 인수 없음, 열 이름 또는 쉼표로 구분된 이름, Python 열 이름 목록입니다. 인수 없음을 사용하면 선택한 열이 삭제됩니다.

**JMP추가된 버전:** 19

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

**구문:** dt.name

dt.name = &apos;string&apos;

**설명:** name 특성은 데이터 테이블 이름을 설정하고 가져올 수 있는 setter이자 getter입니다.

**JMP추가된 버전:** 18

```python

import jmp
dt = jmp.DataTable()
print(dt.name)
dt.name = 'Powered by Python'

```

#### ncols

**구문:** dt.ncols

**설명:** 테이블의 열 수를 반환하는 읽기 전용 특성입니다.

**JMP추가된 버전:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f'Number of columns: {dt.ncols}')

```

#### new_column

**구문:** dt.new_column(  name=&apos;column_name&apos;,

                            dtype=jmp.Numeric | .Character | .RowState | .Expression,

                            mtype=jmp.ModelingType.Continuous | ... | TypeNone

                            dlen=len   cell type&apos;s data length especially for numeric

                                    8(double),4(int32),2(int16),1(int8)

                            where=n insert column after column n

**설명:** 이름, 열 유형, 데이터 길이 및 모델링 유형을 선택적으로 지정하여 새 데이터 테이블 열을 생성합니다.

**JMP추가된 버전:** 18

**New 클래스**

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

**Small 클래스**

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

**구문:** dt.nrows

**설명:** 테이블의 행 수를 반환하는 읽기 전용 특성입니다.

**JMP추가된 버전:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f'Number of rows: {dt.nrows}')

```

#### row_states

**구문:** dt.row_states

dt.row_states = [state1, state2, ..., stateN]

**설명:** 데이터 테이블의 모든 행에 대한 행 상태를 설정합니다.

**JMP추가된 버전:** 19

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

**구문:** dt.save( < path=&apos;file_path&apos; > )

**설명:** 테이블 이름을 사용하여 데이터 테이블을 현재 디렉터리에 저장합니다. 선택적 path 인수를 사용하면 다른 위치 또는 이름으로 저장할 수 있습니다.

**JMP추가된 버전:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt[0][0] = 'Katie'
dt.save('BC_lowercase.jmp')

```

#### scripts

**구문:** dt.scripts

dt.scripts = <dict<str : <str | Expression>>>

**설명:** scripts 특성은 데이터 테이블 스크립트의 읽기 및 쓰기를 허용합니다.

**JMP추가된 버전:** 19

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

**구문:** select_columns(&apos;name&apos;, ..., &apos;name&apos;)

**설명:** select_columms() 메서드는 JSL의 Select Columns() 메시지와 동일한 방식으로 동작합니다. 허용되는 인수는 열 이름 또는 쉼표로 구분된 이름, Python 열 이름 목록입니다.

**JMP추가된 버전:** 19

**All**

```python

import jmp


dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.select_columns([col.name for col in dt])
# all columns should be selected.

```

**예제 1**

```python

import jmp


dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.select_columns('weight')
dt.select_columns('name', 'sex')
dt.select_columns(['age', 'height'])
# all columns should be selected.

```

#### 개념

#### 메서드

#### 생성자

#### 특성

#### 특수 항목

## jmp > Expression

### 함수

#### Equality

**설명:** Expression 개체는 등식 및 부등식 검사를 지원합니다. 두 Expression 개체의 동등성을 비교하는 경우 값을 비교하여 같은지 여부를 반환합니다. Expression 개체의 값을 평가하는 것이 아니라 비교합니다.

**JMP추가된 버전:** 19

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

**구문:** expression1 == expression2

**설명:** 등식 테스트는 Expression 개체의 내용이 다른 Expression 개체와 동일하면 true를 반환하고 그렇지 않으면 false를 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

expr1 = jmp.Expression('1 + 1')
expr2 = jmp.Expression('2 + 0')
expr3 = jmp.Expression('1 + 1')
print(expr1 == expr2)
print(expr1 == expr3)

```

#### __init__

**구문:** Expression(jsl=<string>)

**설명:** 새 Expression 개체를 생성합니다.

**JMP추가된 버전:** 19

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

**구문:** expression1 != expression2

**설명:** 부등식 테스트는 Expression 개체의 내용이 다른 Expression 개체와 다르면 true를 반환하고 그렇지 않으면 false를 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

expr1 = jmp.Expression('1 + 1')
expr2 = jmp.Expression('2 + 0')
expr3 = jmp.Expression('1 + 1')
print(expr1 != expr2)
print(expr1 != expr3)

```

#### __str__

**구문:** str( expr_obj )

**설명:** Expression 개체에 대한 모든 정보를 포함하는 문자열 표현을 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp
expr = jmp.Expression(':Height / :Weight')
print(expr)

```

#### jsl

**구문:** expr_obj.jsl

expr_obj.jsl = <string>

**설명:** Expression jsl 특성은 읽기 및 설정이 가능합니다.

**JMP추가된 버전:** 19

```python

import jmp

expr = jmp.Expression(jsl='0 + 0')
print(expr)
expr.jsl = '2 + 2'
print(expr)

```

#### 개념

#### 생성자

#### 특성

#### 특수 항목

## jmp > Image

### 함수

#### Equality

**설명:** Image 개체는 등식 및 부등식 검사를 지원합니다. 두 Image 개체의 동등성을 비교하는 경우 값을 비교하여 같은지 여부를 반환합니다.

**JMP추가된 버전:** 19

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

**구문:** image1 == image2

**설명:** 등식 테스트는 Image 개체의 내용이 다른 Image 개체와 동일하면 true를 반환하고 그렇지 않으면 false를 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

image1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')
image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')
print(image1 == image2)
print(image1 == image3)

```

#### __init__

**구문:** jmp.Image(path=<string>)

**설명:** 새 Image 개체를 생성합니다.

**JMP추가된 버전:** 19

```python

import jmp

image = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
print(f'Image: {image}')
jmp.open(image)

```

#### __ne__

**구문:** image1 != image2

**설명:** 부등식 테스트는 Image 개체의 내용이 다른 Image 개체와 다르면 true를 반환하고 그렇지 않으면 false를 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

image1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')
image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')
print(image1 != image2)
print(image1 != image3)

```

#### __str__

**구문:** str( image_obj )

**설명:** Image 개체에 대한 모든 정보를 포함하는 문자열 표현을 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp
image = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
print(image)

```

#### 개념

#### 생성자

#### 특수 항목

## jmp > Project

### 함수

#### __init__

**구문:** prj = jmp.Project(<name=&apos;Project name&apos;>)

**설명:** JMP 프로젝트 및 파일에 액세스하기 위한 새 Project 개체를 생성합니다.

**JMP추가된 버전:** 19

**명명된 빈 프로젝트**

```python

import jmp
prj = jmp.Project('My Project')

```

**빈 프로젝트**

```python

import jmp
prj = jmp.Project()

```

**프로젝트 이름**

```python

import jmp

prj = jmp.Project()
print(prj.name)

```

#### __str__

**구문:** str( project )

**설명:** 프로젝트의 문자열 표현을 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

prj = jmp.Project()
print( prj )

```

#### contents

**구문:** prj.name

**설명:** 프로젝트에 포함된 파일 이름 목록을 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

prj = jmp.Project()
print(prj.contents)

```

#### exists

**구문:** prj.exists(&apos;file_name&apos;)

**설명:** 파일 이름을 가져와 프로젝트 내에 해당 파일이 있는지 확인합니다.

**JMP추가된 버전:** 19

```python

import jmp

prj = jmp.Project()
print( prj.exists('myfile.data') )

```

#### extract

**구문:** prj.extract(&apos;file_name&apos;)

**설명:** 파일 이름을 가져와 해당 파일을 프로젝트의 임시 디렉터리에 추출합니다.

**JMP추가된 버전:** 19

```python

import jmp

prj = jmp.Project()
success = prj.extract('myfile.data')

```

#### extract_all

**구문:** prj.extract_all()

**설명:** 모든 프로젝트 파일을 프로젝트의 임시 디렉터리에 추출합니다.

**JMP추가된 버전:** 19

```python

import jmp

prj = jmp.Project()
success = prj.extract_all()

```

#### is_extracted

**구문:** prj.is_extracted(&apos;file_name&apos;)

**설명:** 파일 이름을 가져와 프로젝트 보관 항목에서 해당 파일이 이미 추출되었는지 확인합니다.

**JMP추가된 버전:** 19

```python

import jmp

prj = jmp.Project()
print( prj.is_extracted('myfile.data') )

```

#### name

**구문:** prj.name

**설명:** 프로젝트 name 특성은 읽기 전용입니다.

**JMP추가된 버전:** 19

```python

import jmp

prj = jmp.Project()
print(prj.name)

```

#### 생성자

#### 특성

#### 특수 항목

#### 함수

## jmp > RowState

### 함수

#### Equality

**설명:** RowState 개체는 등식 및 부등식 검사를 지원합니다. 두 RowState 개체의 동등성을 비교하는 경우 값을 비교하여 같은지 여부를 반환합니다. 두 RowStates의 내용이 같지만 다르게 초기화된 경우에도 true를 반환합니다.

**JMP추가된 버전:** 19

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

**구문:** rs1 == rs2

**설명:** 등식 테스트는 RowState 개체의 내용이 다른 RowState 개체와 동일하면 true를 반환하고 그렇지 않으면 false를 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

rs1 = jmp.RowState(color=4, marker=2, selected=True)
rs2 = jmp.RowState(color=11, excluded=True, labeled=True)
rs3 = jmp.RowState(value=1057)
print(rs1 == rs2)
print(rs1 == rs3)

```

#### __init__

**구문:** jmp.RowState(selected?=<boolean>, hidden?=<booleane>, labeled?=<boolean>, excluded?=<boolean>, color?=<int>, marker?=<int>)

jmp.RowState(value=<int>)

**설명:** 새 RowState 개체를 생성합니다. RowState는 JMP 데이터 테이블의 행이 가질 수 있는 여섯 가지 특성(선택됨, 숨김, 제외됨, 라벨 지정, 색상 적용, 표식 적용)을 보유한 개체입니다.

**JMP추가된 버전:** 19

```python

import jmp

from jmp import RowState
rs = RowState(color=4, marker=2, selected=True)
print(f'Row State: {rs}')

rs_from_value = RowState(value=33)
print(f'Row State from Value: {rs_from_value}')

```

#### __ne__

**구문:** image1 != image2

**설명:** 부등식 테스트는 RowState 개체의 내용이 다른 RowState 개체와 다르면 true를 반환하고 그렇지 않으면 false를 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

rs1 = jmp.RowState(color=4, marker=2, selected=True)
rs2 = jmp.RowState(color=11, excluded=True, labeled=True)
rs3 = jmp.RowState(value=1057)
print(rs1 != rs2)
print(rs1 != rs3)

```

#### __str__

**구문:** str( rs_obj )

**설명:** RowState 개체에 대한 모든 정보를 포함하는 문자열 표현을 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp
rs = jmp.RowState(color=11, excluded=True, labeled=True)
print(rs)

```

#### color

**구문:** rs_obj.color

rs_obj.color = <int>

**설명:** RowState color 특성은 읽기 및 설정이 가능합니다. 색상은 0 ~ 84 중에서 선택할 수 있습니다(0 ~ 15 기본 색, 16 ~ 31 진한 색, 32 ~ 47 연한 색, 48 ~ 63 매우 진한 색, 64 ~ 79 매우 연한 색, 80 ~ 84 회색).

**JMP추가된 버전:** 19

```python

import jmp

rs = jmp.RowState(color=5)
print(rs)
rs.color = 0
print(rs)

```

#### excluded

**구문:** rs_obj.excluded

rs_obj.excluded = <boolean>

**설명:** RowState excluded 특성은 읽기 및 설정이 가능합니다.

**JMP추가된 버전:** 19

```python

import jmp

rs = jmp.RowState(excluded=True)
print(rs)
rs.excluded = False 
print(rs)

```

#### hidden

**구문:** rs_obj.hidden

rs_obj.hidden = <boolean>

**설명:** RowState hidden 특성은 읽기 및 설정이 가능합니다.

**JMP추가된 버전:** 19

```python

import jmp

rs = jmp.RowState(hidden=True)
print(rs)
rs.hidden = False 
print(rs)

```

#### labeled

**구문:** rs_obj.labeled

rs_obj.labeled = <boolean>

**설명:** RowState labeled 특성은 읽기 및 설정이 가능합니다.

**JMP추가된 버전:** 19

```python

import jmp

rs = jmp.RowState(labeled=True)
print(rs)
rs.labeled = False 
print(rs)

```

#### marker

**구문:** rs_obj.marker

rs_obj.marker = <int>

**설명:** RowState marker 특성은 읽기 및 설정이 가능합니다. 표식은 0 ~ 31 중에서 선택할 수 있습니다.

**JMP추가된 버전:** 19

```python

import jmp

rs = jmp.RowState(marker=3)
print(rs)
rs.marker = 0
print(rs)

```

#### selected

**구문:** rs_obj.selected

rs_obj.selected = <boolean>

**설명:** RowState selected 특성은 읽기 및 설정이 가능합니다.

**JMP추가된 버전:** 19

```python

import jmp

rs = jmp.RowState(selected=True)
print(rs)
rs.selected = False 
print(rs)

```

#### 개념

#### 생성자

#### 특성

#### 특수 항목

## jmp > globals

### 함수

#### Iteration

**설명:** globals 특성은 전체 값 집합에 대한 반복을 지원합니다.

**JMP추가된 버전:** 19

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

**구문:** value = jmp.globals[&apos;name&apos;]

**설명:** JSL 전역 변수를 Python 개체로 가져옵니다. 개체를 찾을 수 없으면 &apos;None&apos;을 반환하고 데이터 유형을 처리할 수 없으면 불투명(opaque) 유형을 반환합니다. Python Send() 및 Python Get()과 동일한 유형의 개체를 전송할 수 있습니다.

**JMP추가된 버전:** 19

```python

import jmp

jmp.run_jsl('''
    pi = 3.1415929
''')
print( jmp.globals['pi'] )

```

#### __len__

**구문:** length = len( jmp.globals )

**설명:** JSL 전역 환경의 기호 개수를 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

print( len( jmp.globals ) )
jmp.globals['pi'] = 3.1415927
print( len( jmp.globals ) )
jmp.globals['e'] =  2.7182818
print( len( jmp.globals ) )

```

#### __setitem__

**구문:** jmp.globals[&apos;name&apos;] = value

**설명:** Due to Python scoping and the design of Python Get(), only variables in the Python global scope are accessible with Python Get(). The jmp.globals dictionary provides the capacity to directly set or create a JSL variable from Python code. The value type can be any Python type currently supported by Python Get().

**JMP추가된 버전:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.run_jsl('''
    show(pi)
''')

```

#### __str__

**구문:** str(jmp.globals)

**설명:** globals의 내용을 사전 형태로 표시합니다. JMP 자체에서 globals 사전이 사용되므로 추가 항목이 있을 수 있습니다.

**JMP추가된 버전:** 19

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

**구문:** value = jmp.globals.get(&apos;name&apos;)

**설명:** get() 함수는 주어진 키의 값을 반환합니다. JSL과 마찬가지로 키는 퍼지 매칭입니다.

**JMP추가된 버전:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['an A'] = 'Annie'
print( jmp.globals.get('pi') )                        
print( jmp.globals.get('ana') )

```

#### items

**구문:** item_list = jmp.globals.items()

**설명:** 네임스페이스의 키-값 쌍 목록을 반환합니다. JMP 자체에서 globals 사전이 사용되므로 추가 항목이 있을 수 있습니다.

**JMP추가된 버전:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['bB'] = 'Bumble Bee'
print( jmp.globals.items() )

```

#### keys

**구문:** key_list = jmp.globals.keys()

**설명:** 네임스페이스의 키 목록을 반환합니다. JMP 자체에서 globals 사전이 사용되므로 추가 항목이 있을 수 있습니다.

**JMP추가된 버전:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['bB'] = 'Bumble Bee'
print( jmp.globals.keys() )

```

#### values

**구문:** value_list = jmp.globals.values()

**설명:** 네임스페이스의 값을 반환합니다. JMP 자체에서 globals 사전이 사용되므로 추가 항목이 있을 수 있습니다.

**JMP추가된 버전:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['bB'] = 'Bumble Bee'
print( jmp.globals.values() )

```

#### 개념

#### 메서드

#### 특수 항목

## jmp > here

### 함수

#### Iteration

**설명:** here 특성은 &apos;here&apos; 네임스페이스의 값에 대한 반복을 지원합니다.

**JMP추가된 버전:** 19

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

**구문:** value = jmp.here[&apos;name&apos;]

**설명:** Gets a JSL variable from the current &apos;here&apos; namespace as a Python object. Returns None if the object cannot be found, or an opaque type for data types that cannot yet be handled. Providing direct retrieval of a JSL variable into the local Python scope. Supports transfers of the same types of objects as Python Send(). Note that in JSL namespace scoping, the &apos;here&apos; namespace is local to script submission, and code submitted from different script windows will have separate &apos;here&apos; namespaces. Code that includes another script has a single &apos;here&apos; namespace. This shared namespace also exists for a JSL script running Python via Submit() or Execute(), Python scripts calling run_jsl().

**JMP추가된 버전:** 19

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

**예제 1**

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

**구문:** length = len( jmp.here )

**설명:** JSL &apos;here&apos; 네임스페이스의 기호 개수를 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

print( len( jmp.here ) )
jmp.here['pi'] = 3.1415927
print( len( jmp.here ) )
jmp.here['e'] =  2.7182818
print( len( jmp.here ) )

```

#### __setitem__

**구문:** jmp.here[&apos;name&apos;] = value

**설명:** Provides the means to set a value into the JSL script&apos;s &apos;here&apos; namespace. This allows sending back a value that could not be reached by Python Get(). Only variables in the Python global scope can be seen by Python Get(). Supports same object types as Python Get(). Note on JSL namespace scoping, the &apos;here&apos; namespace is local to the script submission.  Code submitted from different script windows will have separate &apos;here&apos; namespaces. Code including another script will have a single &apos;here&apos; namespace. This holds true for a JSL script running Python via Submit() or Execute(), Python scripts calling run_jsl().

**JMP추가된 버전:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.run_jsl('''
    Names Default to Here(1);
    show(pi)
''')

```

#### __str__

**구문:** str(jmp.here)

**설명:** here의 내용을 사전 형태로 표시합니다.

**JMP추가된 버전:** 19

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

**구문:** value = jmp.here.get(&apos;name&apos;)

**설명:** get() 함수는 주어진 키의 값을 반환합니다. JSL과 마찬가지로 키는 퍼지 매칭입니다.

**JMP추가된 버전:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.get('pi') )                        
print( jmp.here.get('b  b') )

```

#### items

**구문:** item_list = jmp.here.items()

**설명:** 네임스페이스의 키-값 쌍 목록을 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.items() )

```

#### keys

**구문:** key_list = jmp.here.keys()

**설명:** 네임스페이스의 키 목록을 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.keys() )

```

#### values

**구문:** value_list = jmp.here.values()

**설명:** 네임스페이스의 값을 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.values() )

```

#### 개념

#### 메서드

#### 특수 항목

## jmp > live

### 함수

#### get_credentials()

**구문:** jmp.live.get_credentials(<credential_name>)

**설명:** JMP Live 데이터 새로 고침 스크립트에서 스크립트에 할당된 특정 이름을 가진 자격 증명을 반환합니다(이름이 제공되지 않은 경우 기본 자격 증명 반환). 반환되는 값은 "username", "password", "key_file_path" 키가 있는 사전입니다.

**JMP추가된 버전:** 19

```python

import jmp

dt = jmp.DataTable()

credentials = jmp.live.get_credentials()

# login to external data source using credentials['username'] and credentials['password']
# create dt using obtained data

jmp.live.set_result(dt)

```

#### get_import_file_path()

**구문:** jmp.live.get_import_file_path()

**설명:** JMP Live 데이터 가져오기 스크립트에서 업로드된 가져오기 파일의 경로를 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

dt = jmp.DataTable()

importPath = jmp.live.get_import_file_path()
with open(importPath) as importFile:
    # [import data from importFile to dt]

jmp.live.set_result(dt)

```

#### set_result()

**구문:** jmp.live.set_result()

**설명:** JMP Live 데이터 새로 고침 스크립트와 가져오기 스크립트에서 결과 테이블을 설정합니다. 업데이트를 취소하려면 결과를 &apos;None&apos;으로 설정합니다.

**JMP추가된 버전:** 19

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

#### 함수

## jmp > log

### 함수

#### flush

**구문:** jmp.log.flush()

**설명:** log.flush() 및 log.write() 함수는 Python의 stdio 및 stderr flush() 함수와 write() 함수를 오버로드합니다. 이러한 함수는 Python 출력을 JMP 로그 및 포함된 로그 창으로 전달하므로 주로 JMP 내부에서 사용됩니다. jmp.log.flush()는 NOP이며, 빈 문자열을 반환합니다.

**JMP추가된 버전:** 18

```python

import jmp

import jmp.log
jmp.log.flush()

```

#### write

**구문:** jmp.log.write(&apos;message&apos;)

**설명:** log.flush() 및 log.write() 함수는 Python의 stdio 및 stderr flush() 함수와 write() 함수를 오버로드합니다. 이러한 함수는 Python 출력을 JMP 로그 및 포함된 로그 창으로 전달하므로 주로 JMP 내부에서 사용됩니다. 프로그램은 jmp.log.write(&apos;message&apos;)를 호출하여 메시지를 JMP 로그 또는 포함된 로그 창에 명시적으로 보낼 수 있습니다.

**JMP추가된 버전:** 18

```python

import jmp

import jmp.log
jmp.log.write('I am a log message.')

```

#### 함수

## jmp

### 함수

#### ALL_HOME

**구문:** jmp.ALL_HOME

**설명:** JSL의 $ALL_HOME 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.ALL_HOME)

```

#### BUILTIN_SCRIPTS

**구문:** jmp.BUILTIN_SCRIPTS

**설명:** JSL의 $BUILTIN_SCRIPTS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.BUILTIN_SCRIPTS)

```

#### DESKTOP

**구문:** jmp.DESKTOP

**설명:** JSL의 $DESKTOP 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.DESKTOP)

```

#### DOCUMENTS

**구문:** jmp.DOCUMENTS

**설명:** JSL의 $DOCUMENTS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.DOCUMENTS)

```

#### DOWNLOADS

**구문:** jmp.DOWNLOADS

**설명:** JSL의 $DOWNLOADS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.DOWNLOADS)

```

#### DataType

**구문:** jmp.DataType.enum_value

**설명:** jmp.DataType은 JMP 열의 데이터 유형을 나타내는 열거형이며, 숫자(기본값) 유형 이외의 열을 생성하기 위해 jmp.DataTable.new_column() 함수와 함께 사용됩니다.

**JMP추가된 버전:** 18

```python

import jmp

# for the sake of typing
from jmp import DataType as dType
print('jmp.DataType members:')
print( list(map(lambda c: c.name, dType)) )

```

#### HOME

**구문:** jmp.HOME

**설명:** JSL의 $HOME 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.HOME)

```

#### JMPPRJ

**구문:** jmp.JMPPRJ

**설명:** 프로젝트 임시 디렉터리의 실제 경로를 반환합니다. 현재 작업 디렉터리를 반환하거나, 스크립트가 프로젝트 내에서 실행되고 있지 않으면 &apos;None&apos;을 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp
print(jmp.JMPPRJ)

```

#### ModelingType

**구문:** jmp.ModelingType.enum_value

**설명:** jmp.ModelingType은 JMP 열의 모델링 유형 또는 분석 유형을 나타내는 열거형이며, 연속형(기본값) 모델링 유형 이외의 열을 생성하기 위해 jmp.DataTable.new_column() 함수와 함께 사용됩니다. &apos;None&apos;은 Python 키워드이므로 TypeNone은 JMP의 &apos;없음&apos; 모델링 유형과 다릅니다.

**JMP추가된 버전:** 18

```python

import jmp

# for the sake of typing
from jmp import ModelingType as mType
print('jmp.ModleingType members:')
print( list(map(lambda c: c.name, mType)) )

```

#### PYTHONW_EXE

**구문:** jmp.PYTHONW_EXE

**설명:** JMP에 설치된 no-console Python 실행 파일의 경로입니다(Windows에만 해당).

**JMP추가된 버전:** 19

```python

import jmp

import platform
if platform.system() == "Windows":
    print(jmp.PYTHONW_EXE)

```

#### PYTHON_EXE

**구문:** jmp.PYTHON_EXE

**설명:** JMP에 설치된 Python 실행 파일의 경로입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.PYTHON_EXE)

```

#### PY_USER_APPDIR

**구문:** jmp.PY_USER_APPDIR

**설명:** JMP의 Python 지원을 위한 기반이 되는 사용자 디렉터리 위치 경로입니다. site-packages 디렉터리는 이 디렉터리 계층 내에 있습니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.PY_USER_APPDIR)

```

#### SAMPLE_APPS

**구문:** jmp.SAMPLE_APPS

**설명:** JSL의 $SAMPLE_APPS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_APPS)

```

#### SAMPLE_DASHBOARDS

**구문:** jmp.SAMPLE_DASHBOARDS

**설명:** JSL의 $SAMPLE_DASHBOARDS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_DASHBOARDS)

```

#### SAMPLE_DATA

**구문:** jmp.SAMPLE_DATA

**설명:** JSL의 $SAMPLE_DATA 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_DATA)

```

#### SAMPLE_IMAGES

**구문:** jmp.SAMPLE_IMAGES

**설명:** JSL의 $SAMPLE_IMAGES 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_IMAGES)

```

#### SAMPLE_IMPORT_DATA

**구문:** jmp.SAMPLE_IMPORT_DATA

**설명:** JSL의 $SAMPLE_IMPORT_DATA 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_IMPORT_DATA)

```

#### SAMPLE_PROJECTS

**구문:** jmp.SAMPLE_PROJECTS

**설명:** JSL의 $SAMPLE_PROJECTS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_PROJECTS)

```

#### SAMPLE_SCRIPTS

**구문:** jmp.SAMPLE_SCRIPTS

**설명:** JSL의 $SAMPLE_SCRIPTS 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.SAMPLE_SCRIPTS)

```

#### TEMP

**구문:** jmp.TEMP

**설명:** JSL의 $TEMP 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.TEMP)

```

#### USER_APPDATA

**구문:** jmp.USER_APPDATA

**설명:** JSL의 $USER_APPDATA 디렉터리에 해당하는 값입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.USER_APPDATA)

```

#### __jmp_version__

**구문:** jmp.__jmp_version__

**설명:** JMP 실행 파일의 버전 번호입니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.__jmp_version__)

```

#### __version__

**구문:** jmp.__version__

**설명:** &apos;jmp&apos; 가져오기 패키지의 버전 번호입니다. 이 번호는 JMP 버전이 아닙니다.

**JMP추가된 버전:** 18

```python

import jmp
print(jmp.__version__)

```

#### current

**구문:** dt = jmp.current()

**설명:** 현재 JMP 데이터 테이블에 대한 DataTable 개체를 반환합니다.

**JMP추가된 버전:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(jmp.current())

```

#### eval

**구문:** result = eval(<string>|<Expression>)

**설명:** 인수를 실행하고 결과를 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

from jmp import eval, Expression
expression = Expression("2 + 2")
result = eval(expression)
print(result)

```

#### from_dataframe

**구문:** result = jmp.from_dataframe(<library.Dataframe>, allow_copy=<boolean>, allow_csv_fallback=<boolean>)

**설명:** 프로토콜 호환 라이브러리의 데이터 프레임에서 jmp.DataTable 개체를 반환합니다.

**JMP추가된 버전:** 19

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

**구문:** result = jmp.from_dataframe_using_csv(<library.Dataframe>)

**설명:** 제공된 CSV 변환 방법을 사용하여 라이브러리의 데이터 프레임에서 jmp.DataTable 개체를 반환합니다.

**JMP추가된 버전:** 19

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

**구문:** obj = jmp.open(&apos;file_path&apos; < , visibility=&apos;Invisible | Private&apos; )

**설명:** file_path에 있는 파일을 엽니다. 파일이 .jmp 파일이거나, JMP 데이터 테이블로 가져오는 파일이면 DataTable 개체가 반환됩니다. 그렇지 않으면 True(성공) 또는 False(실패)가 반환됩니다. 선택적 visibility 파라미터는 열린 파일을 보기에서 숨길지 여부를 제어합니다. &apos;Invisible&apos;을 선택하면 파일이 보기에서만 숨겨지고 최근 파일 메뉴와 홈 창에는 계속 표시됩니다. &apos;Private&apos; 테이블을 사용하면 테이블에 대한 참조만 반환되고 파일 목록에는 나타나지 않습니다.

**JMP추가된 버전:** 18

**Excel**

```python

import jmp

obj = jmp.open(jmp.SAMPLE_IMPORT_DATA + 'Bigclass.xlsx')
print(obj)

```

**JMP**

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(dt)

```

**JSL 스크립트**

```python

import jmp

obj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')
print(obj)

```

**비공개**

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

**숨김**

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

#### path_variable

**구문:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**설명:** 경로 변수를 반환합니다. 경로 변수는 SAMPLE_DATA와 같은 이름입니다.

**JMP추가된 버전:** 19

```python

import jmp

path_value = jmp.path_variable('SAMPLE_DATA')
if not path_value:
    print('Invalid path variable.')
else:
    print(path_value)

```

#### r_name

**구문:** dt = jmp.r_name(jsl_var)

**설명:** R 변수 명명 규칙을 사용하여 JMP 변수 이름을 R 변수 이름에 매핑합니다.

**JMP추가된 버전:** 19

```python

import jmp

rName = jmp.r_name('c d e')
print(rName)

```

#### reset

**구문:** jmp.reset()

**설명:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP추가된 버전:** 19

```python

import jmp

pi = 3.1415927
print(pi)
jmp.reset()
print(pi)

```

#### run_jsl

**구문:** result = jmp.run_jsl(&apos;JSL script contents&apos; <, echo = True | False | None > )

**설명:** JSL Python 인터페이스 함수를 포함하여 Python 환경 내에서 JSL 스크립트를 실행합니다. 선택적 echo= 파라미터를 &apos;False&apos; 또는 &apos;None&apos;으로 설정하면 제공된 JSL 소스 코드가 로그에 출력되지 않으며 Python Send()/Get()에서 지원하는 동일한 JSL 개체 유형에 대한 결과가 반환됩니다. 스크립트 오류 또는 지원되지 않는 JSL 개체 유형은 &apos;None&apos;을 반환합니다.

**JMP추가된 버전:** 18

**반환된 값**

```python

import jmp

value = jmp.run_jsl('''
Names default to here(1);
an A = 1.5;
x = 5 * anA;
''')
print( f'{value} = jmp.run_jsl()')

```

**버전 가져오기**

```python

import jmp

jmp.run_jsl('Python Get Version();')

```

**열 특성**

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

#### table

**구문:** dt = jmp.table(&apos;table_name&apos;)

**설명:** &apos;table_name&apos;을 가진 열린 테이블에 대한 DataTable 개체를 반환합니다.

**JMP추가된 버전:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( jmp.table('Big Class') )

```

#### 상수

#### 열거

#### 함수

## jmpex > R - module > R - class

### 함수

#### __init__

**구문:** jmpex.R.R( <&apos;rpy2&apos;> )

**설명:** R 확장 클래스 개체를 생성하는 함수입니다. R 지원을 위한 백엔드를 지정할 수 있는 선택적 파라미터가 있으며 현재는 &apos;rpy2&apos;만 지원됩니다. 인수를 지정하지 않으면 이 값이 기본값입니다.

**JMP추가된 버전:** 19

```python

import jmp

from jmpex.R import R

jr = R()
print(jr.r_version())

```

#### __version__

**구문:** ver = jmpex.R.R().__version__

**설명:** The jmpex package&apos;s R support version.

**JMP추가된 버전:** 19

```python

import jmp

from jmpex.R import R

jr = R()
print(jr.__version__)

```

#### get

**구문:** pyobj = jmpex.R.R.get( &apos;name&apos; )

**설명:** R 환경에서 명명된 변수를 가져와 r2obj() 함수를 사용하여 Python에 반환합니다. R DataFrame은 pandas.DataFrame으로 반환됩니다.

**JMP추가된 버전:** 19

**데이터 테이블 설정**

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

**문자열 벡터**

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

**수치형 벡터**

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

**열 설정**

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

#### is_connected

**구문:** jmpex.R.R.is_connected( )

**설명:** R() 인스턴스 개체가 있는지에 관계없이 사용할 수 있는 정적 함수입니다. R 부시스템이 초기화되었음을 나타냅니다.

**JMP추가된 버전:** 19

```python

import jmp

from jmpex.R import R

print(f'R initialized: {R.is_connected()}')
jr = R()
print(f'R initialized: {R.is_connected()}')

```

#### obj2r

**구문:** jmpex.R.R.obj2r( var )

**설명:** Python 개체에서 R 개체를 생성합니다.

**JMP추가된 버전:** 19

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

**구문:** jmpex.R.R.r2obj( var )

**설명:** R 개체에서 일반 Python 개체를 생성합니다.

**JMP추가된 버전:** 19

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

**구문:** ver = jmpex.R.R.r_version( )

**설명:** R 버전을 반환합니다.

**JMP추가된 버전:** 19

```python

import jmp

from jmpex.R import R

jr = R()
print(f'R Version: {jr.r_version()}')

```

#### set

**구문:** jmpex.R.R.set( var, as_name )

**설명:** &apos;as_name&apos; 파라미터로 명명된 Python 변수를 R 환경에 설정합니다. R 개체는 내부적으로 obj2r() 함수를 사용하여 생성되며 이름은 유효한 R 변수 이름이 되도록 name -> R Name() 함수를 통해 변환되었습니다.

**JMP추가된 버전:** 19

**데이터 테이블 설정**

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

**문자열 벡터**

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

**수치형 벡터**

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

**열 설정**

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

#### submit

**구문:** jmpex.R.R.submit( &apos;R script&apos; )

**설명:** 실행할 R 프로그램 코드를 전송하고 가능한 경우 결과를 Python 개체로 반환합니다.

**JMP추가된 버전:** 19

**데이터 테이블 설정**

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

**스크립트**

```python

import jmp

from jmpex.R import R

jr = R()
jr.submit('''
x <- rnorm (100)
y <- x**2 + rnorm (100)
''')

```

#### submit_file

**구문:** jmpex.R.R.submit_file(&apos;path_to_R_script&apos;)

**설명:** 실행할 R 스크립트 파일을 전송하고 가능한 경우 결과를 Python 개체로 반환합니다.

**JMP추가된 버전:** 19

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

#### 상수

#### 생성자

#### 함수

## jmpex > R - module

### 함수

#### R

**설명:** R 모듈은 Python 클래스 R을 포함하는 jmpex.R을 나타내며 jmpex.R.R 클래스는 인터페이스 기능을 구현합니다.

**JMP추가된 버전:** 19

#### 개념

## jmpex

### 함수

#### jmpex - package

**설명:** The jmpex package contains extension interfaces supported by JMP. Currently it contains only an R support module.

**JMP추가된 버전:** 19

#### 개념

## jmputils

### 함수

#### create_jpip

**구문:** create_jpip( &apos;directory_path&apos; )

**설명:** 지정된 디렉터리 내에서 jpip 스크립트의 터미널/명령 셸 버전을 생성하는 함수입니다. jpip 스크립트는 적절한 환경 변수가 구성되도록 Python pip 명령을 래핑합니다. 이렇게 하면 jpip에서 설치한 패키지가 JMP site-packages 디렉터리에 설치됩니다.

**JMP추가된 버전:** 18

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

**구문:** jpip( &apos;pip_cmd&apos;, packages=&apos;&apos; )

**설명:** 이 함수는 JMP 내에서 호출할 수 있으며 Python pip 명령을 래핑합니다. 이 함수 pip 명령을 문자열로 전달하고, 원하는 경우 설치할 패키지의 문자열(공백으로 구분됨)로 전달할 수 있습니다. 개별 인수 목록도 허용됩니다. packages 인수는 기본적으로 빈 문자열입니다. &apos;jmputils&apos; 패키지는 포함된 Python 표준 라이브러리 파일과 같은 위치에 있습니다. jmputils 내의 모든 함수는 Python 표준 라이브러리 함수 또는 JMP 기본 제공 기능만 활용합니다.

**JMP추가된 버전:** 18

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
Names Default To Here( 1 );

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

#### 함수

