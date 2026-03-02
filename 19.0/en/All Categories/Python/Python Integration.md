# Python Integration



## Functions

### ALL_HOME

**Syntax:** jmp.ALL_HOME

**Description:** Value corresponding to JSL&apos;s $ALL_HOME directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.ALL_HOME)

```

### BUILTIN_SCRIPTS

**Syntax:** jmp.BUILTIN_SCRIPTS

**Description:** Value corresponding to JSL&apos;s $BUILTIN_SCRIPTS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.BUILTIN_SCRIPTS)

```

### Constants

### DESKTOP

**Syntax:** jmp.DESKTOP

**Description:** Value corresponding to JSL&apos;s $DESKTOP directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.DESKTOP)

```

### DOCUMENTS

**Syntax:** jmp.DOCUMENTS

**Description:** Value corresponding to JSL&apos;s $DOCUMENTS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.DOCUMENTS)

```

### DOWNLOADS

**Syntax:** jmp.DOWNLOADS

**Description:** Value corresponding to JSL&apos;s $DOWNLOADS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.DOWNLOADS)

```

### DataType

**Syntax:** jmp.DataType.enum_value

**Description:** jmp.DataType is an enumeration representing a JMP column&apos;s data types. These are used with the jmp.DataTable.new_column() function to create columns other than the default Numeric type.

**JMP Version Added:** 18

```python

import jmp

# for the sake of typing
from jmp import DataType as dType
print('jmp.DataType members:')
print( list(map(lambda c: c.name, dType)) )

```

### Enums

### Functions

### HOME

**Syntax:** jmp.HOME

**Description:** Value corresponding to JSL&apos;s $HOME directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.HOME)

```

### JMPPRJ

**Syntax:** jmp.JMPPRJ

**Description:** Returns the physical path of the project&apos;s temporary directory. Returns the current working directory, or None if script is not running within a project.

**JMP Version Added:** 19

```python

import jmp
print(jmp.JMPPRJ)

```

### ModelingType

**Syntax:** jmp.ModelingType.enum_value

**Description:** jmp.ModelingType is an enumeration representing a JMP column&apos;s modeling or analysis type. These are used with the jmp.DataTable.new_column() function to create columns other than the default Continuous modeling type. Note TypeNone differs from JMP&apos;s modeling type None as &apos;None&apos; is a Python keyword.

**JMP Version Added:** 18

```python

import jmp

# for the sake of typing
from jmp import ModelingType as mType
print('jmp.ModleingType members:')
print( list(map(lambda c: c.name, mType)) )

```

### PYTHONW_EXE

**Syntax:** jmp.PYTHONW_EXE

**Description:** Path to the JMP installed no-console Python executable (Windows only).

**JMP Version Added:** 19

```python

import jmp

import platform
if platform.system() == "Windows":
    print(jmp.PYTHONW_EXE)

```

### PYTHON_EXE

**Syntax:** jmp.PYTHON_EXE

**Description:** Path to the JMP installed Python executable.

**JMP Version Added:** 18

```python

import jmp
print(jmp.PYTHON_EXE)

```

### PY_USER_APPDIR

**Syntax:** jmp.PY_USER_APPDIR

**Description:** Path to the user directory location acting as the base of JMP&apos;s Python support. The site-packages directory is within this directory hierarchy.

**JMP Version Added:** 18

```python

import jmp
print(jmp.PY_USER_APPDIR)

```

### SAMPLE_APPS

**Syntax:** jmp.SAMPLE_APPS

**Description:** Value corresponding to JSL&apos;s $SAMPLE_APPS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_APPS)

```

### SAMPLE_DASHBOARDS

**Syntax:** jmp.SAMPLE_DASHBOARDS

**Description:** Value corresponding to JSL&apos;s $SAMPLE_DASHBOARDS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_DASHBOARDS)

```

### SAMPLE_DATA

**Syntax:** jmp.SAMPLE_DATA

**Description:** Value corresponding to JSL&apos;s $SAMPLE_DATA directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_DATA)

```

### SAMPLE_IMAGES

**Syntax:** jmp.SAMPLE_IMAGES

**Description:** Value corresponding to JSL&apos;s $SAMPLE_IMAGES directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_IMAGES)

```

### SAMPLE_IMPORT_DATA

**Syntax:** jmp.SAMPLE_IMPORT_DATA

**Description:** Value corresponding to JSL&apos;s $SAMPLE_IMPORT_DATA directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_IMPORT_DATA)

```

### SAMPLE_PROJECTS

**Syntax:** jmp.SAMPLE_PROJECTS

**Description:** Value corresponding to JSL&apos;s $SAMPLE_PROJECTS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_PROJECTS)

```

### SAMPLE_SCRIPTS

**Syntax:** jmp.SAMPLE_SCRIPTS

**Description:** Value corresponding to JSL&apos;s $SAMPLE_SCRIPTS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_SCRIPTS)

```

### TEMP

**Syntax:** jmp.TEMP

**Description:** Value corresponding to JSL&apos;s $TEMP directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.TEMP)

```

### USER_APPDATA

**Syntax:** jmp.USER_APPDATA

**Description:** Value corresponding to JSL&apos;s $USER_APPDATA directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.USER_APPDATA)

```

### __jmp_version__

**Syntax:** jmp.__jmp_version__

**Description:** Version number of the JMP executable.

**JMP Version Added:** 18

```python

import jmp
print(jmp.__jmp_version__)

```

### __version__

**Syntax:** jmp.__version__

**Description:** Version number of the &apos;jmp&apos; import package. This is not the JMP version.

**JMP Version Added:** 18

```python

import jmp
print(jmp.__version__)

```

### current

**Syntax:** dt = jmp.current()

**Description:** Returns a DataTable object for the current JMP data table.

**JMP Version Added:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(jmp.current())

```

### eval

**Syntax:** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**Description:** Evaluates the argument and returns the result.

**JMP Version Added:** 19

```python

import jmp

from jmp import eval, Expression
expression = Expression("2 + 2")
result = eval(expression)
print(result)

```

### from_dataframe

**Syntax:** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;)

**Description:** Returns a jmp.DataTable object from a protocol compliant library&apos;s dataframe.

**JMP Version Added:** 19

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

**Syntax:** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;)

**Description:** Returns a jmp.DataTable object from a library&apos;s dataframe using the provided CSV conversion method.

**JMP Version Added:** 19

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

**Syntax:** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**Description:** Opens a file located at file_path. If the file is a .jmp file or a file that imports into a JMP data table, the object returned will be a DataTable object.  Otherwise will return True or False for success or failure. The optional visibility parameter controls whether the opened file is hidden from view.  Invisible is just hidden from view, while still showing up in the recent files menu and home window.  With a Private table, the reference returned is the only reference to the table, and it does not appear in any of the file lists.

**JMP Version Added:** 18

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

#### JSL Script

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

**Syntax:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**Description:** Returns the value of a path variable, which is a name like SAMPLE_DATA that is substituted for when found in pathnames.

**JMP Version Added:** 19

```python

import jmp

path_value = jmp.path_variable('SAMPLE_DATA')
if not path_value:
    print('Invalid path variable.')
else:
    print(path_value)

```

### r_name

**Syntax:** dt = jmp.r_name(jsl_var)

**Description:** Maps a JMP variable name to an R variable name using R variable naming rules.

**JMP Version Added:** 19

```python

import jmp

rName = jmp.r_name('c d e')
print(rName)

```

### reset

**Syntax:** jmp.reset()

**Description:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP Version Added:** 19

```python

import jmp

pi = 3.1415927
print(pi)
jmp.reset()
print(pi)

```

### run_jsl

**Syntax:** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**Description:** Run JSL scripting from within the Python environment, including the JSL Python interface functions. Optional echo= parameter when set to False or None stops the presented JSL source code from echoing to the log. A result will be returned for the same JSL object types that are supported by Python Send() / Get().  Script failure or unsupported JSL object types will return None.

**JMP Version Added:** 18

#### Column Properties

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

#### Get Version

```python

import jmp

jmp.run_jsl('Python Get Version();')

```

#### Returned value

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

**Syntax:** dt = jmp.table(&apos;table_name&apos;)

**Description:** Returns a DataTable object for the opened table having &apos;table_name&apos;

**JMP Version Added:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( jmp.table('Big Class') )

```

## jmp > DataConnector

### Functions

#### Ability to copy with copy.copy

**Description:** DataConnector objects support shallow copying with the standard copy.copy function.



Changing the copying behavior in subclasses is not supported, so subclasses should not add additional instance attributes because they will not be copied.

**JMP Version Added:** 19

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

#### Concepts

#### Functions

#### Methods

#### Special Items

#### __getitem__

**Syntax:** value = dc["FIELD NAME"]

**Description:** Gets the value associated with a field.

**JMP Version Added:** 19

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

**Syntax:** def _do_as_data_source(self) -&gt; jmp.DataSource:

**Description:** Subclasses should override this function to create a connection. The returned connection, in the form of a subclass of jmp.DataSource, enables integration with Query Builder.



Avoid storing and using a reference to the connector instance (self) in the returned data source. Other code might also hold a reference and change configuration values unexpectedly. Instead, consider using copy.copy to make an independent copy to refer to, like "self_copy = copy.copy(self)".

**JMP Version Added:** 19

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

**Syntax:** def _do_open(self) -&gt; jmp.DataTable:

**Description:** Subclasses can override this function to open a table directly. This function implements the Open message in JSL (New Data Connector(...) << Open()).



If both this function and _do_as_data_source are implemented, they should be able to open the same set of tables.

**JMP Version Added:** 19

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

**Syntax:** jmp.DataConnector.tie(DataConnectorTypeClass, DataConnectorClass)

**Description:** Associates a jmp.DataConnectorType subclass and a jmp.DataConnector subclass, "tying" them together and completing the definitions of both classes. This association gives the jmp.DataConnector subclass access to the jmp.DataConnectorType subclass and its field definitions. It also ensures that the jmp.DataConnectorType subclass creates jmp.DataConnector instances using the specified subclass.



This function creates the association by setting attributes on the subclasses.

**JMP Version Added:** 19

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

## jmp > DataConnectorField

### Functions

#### Constructors

#### __init__

**Syntax:** field = jmp.DataConnectorField(type, &lt;default=DEFAULT_VALUE,&gt; &lt;tooltip="TOOLTIP" | None,&gt; &lt;ui_name="UI NAME" | None,&gt; &lt;credential="CREDENTIAL TYPE" | None,&gt; &lt;sensitive=True | False,&gt; &lt;mask_input=True | False&gt;)

**Description:** DataConnectorField defines a field.



Base arguments:



type: The type of the field, such as int (see jmp.DataConnectorType.fields for more information).



default: The default value for the field, such as 42. If not provided, the default value depends on the type. The default value is None if that is supported, for example, if the type is "int | None". Otherwise, it is the "empty" value for the type: "" for str, 0 for int, and False for bool.



tooltip: If provided and not None, it is used as a tooltip for the field in the data connector editor.



ui_name: If provided and not None, it is used as the name of the field in the data connector editor instead of the actual name of the field.



Extra arguments when type is "str" or "str | None":



credential: If provided and not None, the type of credential stored by this field. The valid values are "username" and "password". JMP uses this information to enable placeholder support.



sensitive: When true, this field is considered to hold sensitive information and as such its values are not written out in plain text. Defaults to true if "credential" is set and false otherwise.



mask_input: When true, the value is obscured and shown with dots in the Data Connector Editor. Defaults to true if "credential" is "password" or "sensitive" is true and credential is not set.

**JMP Version Added:** 19

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

## jmp > DataConnectorGroupedFields

### Functions

#### Constructors

#### __init__

**Syntax:** fields = jmp.DataConnectorGroupedFields([("Group 1 Name", GROUP_1_FIELDS), ("Group 2 Name", GROUP_2_FIELDS), ...])

**Description:** jmp.DataConnectorGroupedFields defines fields in named groups. The groups are passed as a list of pairs. The first element of each pair is the name of the group, and the second is a dictionary with the fields. This dictionary has the same format as one used directly as the value for jmp.DataConnectorType.fields.



The use of groups affects the fields&apos; presentation in the data connector editor but not their programmatic access. The group name is used only in the UI, so the advice for field names to avoid characters that should not be used in JSL names does not apply.

**JMP Version Added:** 19

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

## jmp > DataConnectorType

### Functions

#### Properties

#### fields

**Syntax:** fields = {"Name 1": TYPE_1 | jmp.DataConnectorField(...), "Name 2": TYPE_2 | jmp.DataConnectorField(...), ...} | jmp.DataConnectorGroupedFields(...)

**Description:** Subclasses must define a class-level variable named "fields" that specifies the configuration options for this type. It should be a dict or a jmp.DataConnectorGroupedFields object.



The keys of the dict are the names of the configuration options, which are exposed in JSL and the editor. They should be formatted like JSL identifiers. The value corresponding to each key is the type of the field, such as str or int, or a jmp.DataConnectorField object.



The supported types include bool, int, and str. Optional versions of these, such as typing.Optional[bool] or bool | None for bool, are also supported. A missing value is represented by None.

**JMP Version Added:** 19

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

## jmp > DataSource

### Functions

#### Methods

#### get_schemas

**Syntax:** def get_schemas(self) -&gt; Sequence[str] | None:

**Description:** Subclasses can override this function to provide a list of the schemas in the data source. If this function is not overridden or it returns None, the data source is assumed to not support schemas.

**JMP Version Added:** 19

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

**Syntax:** def get_tables(self, schema: str) -&gt; Sequence[str]:

**Description:** Subclasses should override this function to provide a list of the tables in the data source. If schemas are supported, this list should include only the tables under the schema that is passed. If schemas are not supported, the schema parameter should be ignored.

**JMP Version Added:** 19

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

**Syntax:** def open_table(self, schema: str, table: str) -&gt; jmp.DataTable | str:

**Description:** Subclasses should override this function to get the table data for the named table. If schemas are not supported, the value of the schema argument can be ignored. The function should return a jmp.DataTable or a string containing a path to a file in a data format supported by JMP.



If returning a data table directly, the table should be created privately. If returning a path string, JMP opens the table itself and captures the settings that it used, preserving them in Query Builder scripts.

**JMP Version Added:** 19

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

**Syntax:** def open_table_with_settings(self, schema: str, table: str, settings: str | None) -&gt; (jmp.DataTable, str | None):

**Description:** Subclasses can override this function instead of open_table to provide custom handling of table open settings. This function is like open_table but is also called with the existing settings, if any. It must return a data table, and it must also return the new settings, if any. Missing settings are indicated by None.

**JMP Version Added:** 19

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

## jmp > DataTable > Column

### Functions

#### Concepts

#### Constructors

#### Equality

**Description:** The Column object supports equality and inequality checks. Since a DataTable.Column is actually a reference to a live data table column, multiple Column objects could point to the same actual column. The checks for equality == and inequality != test do not compare content. Instead they check whether two DataTable.Column objects point to the column.

**JMP Version Added:** 18

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

**Description:** The DataTable.Column object supports the Python mapping protocol. Providing the array [] operators utilizing the numeric row index.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.DataTable('Names', 5)
dt.new_column('First Name', jmp.DataType.Character)
dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]
for i in range(0, dt.nrows):
    print( dt[0][i] )

```

#### Properties

#### Sequence

**Description:** The DataTable.Column behaves like a Python sequence.  This allows iterating on the values of the column.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.DataTable('Names', 5)
dt.new_column('First Name', jmp.DataType.Character)
dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]
for n in dt[0]:
    print( n )

```

#### Slice

**Description:** The slice operator is used as a parameter to the [ ] get item operation. This consists of start:stop:step.  These parameters are optional.  The returned value will be a list of values, beginning with the start value not including the stop value incremented by the step value.  Negative numbers for start or stop, are 1-based indexes from the end of the sequence.  A negative [step] value decrements the step count, rather than incrementing.  Empty values have appropriate defaults.  [::-1] will return the complete list in reverse order. And [:] will return the entire array in current item order.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( [c.name for c in dt[:]] )         # print list of column names default step = 1
reverse_cols = dt[::-1]                  # list of column names in reverse order
print( [c.name for c in reverse_cols] )  # print reversed column name list
print( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### Special Items

#### __eq__

**Syntax:** column1 == column2

**Description:** Equality test, returns true when two jmp.DataTable.Column objects point to the same JMP data table column. This does not check that content matches, but the two variables point to exactly the same column.

**JMP Version Added:** 18

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

**Syntax:** value = column[ index ]

**Description:** Provides the [] operator for getting a jmp.DataTable.Column object&apos;s value from the column with 0-based index.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
col = dt[0]
for i in range ( len(col) ):
    print( col[i] )

```

#### __init__

**Syntax:** Column( dt_obj, name | index)

**Description:** Creates a new column object that points to a specific column in a data table.  A jmp.DataTable object is required for the dt_obj parameter and a valid column name or index is required.

**JMP Version Added:** 18

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

**Syntax:** count = len( column )

**Description:** Returns the number of columns in the table.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
print( len( dt['name'] ) )

```

#### __ne__

**Syntax:** column1 != column2

**Description:** Inequality test, returns true when two jmp.DataTable.Column objects do not point to the same data table column. This does not check that content matches, but the two objects do not point to exactly the same column.

**JMP Version Added:** 18

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

**Syntax:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**Description:** Provides the [] operator for setting values in a column getting a jmp.DataTable.Column object from the table by column name or 0-based index.

**JMP Version Added:** 18

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

**Syntax:** str( column_obj )

**Description:** Returns a sting representation of containing summary information about the data table&apos;s column.

**JMP Version Added:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(dt[0])

```

#### data_length

**Syntax:** col_obj.data_length

**Description:** Property returning the column field&apos;s data length. This value can be 0, 1, 2, 4 or 8 bytes.  0 is the default and implies 8 bytes used for data table numeric fields.

**JMP Version Added:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f'Data length of dt[-1] (weight column): {dt[-1].data_length}')

```

#### display_width

**Syntax:** col_obj.display_widthcol_obj.display_width = &lt;int&gt;

**Description:** Change column&apos;s display width.

**JMP Version Added:** 19

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
jmp.run_jsl('Wait( 0 );')
print(dt[0].display_width)
dt[0].display_width = 100
print(dt[0].display_width)

```

#### dtype

**Syntax:** col_obj.dtype

**Description:** Property returning the enumeration value for the column&apos;s data type.

**JMP Version Added:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f"Data Type of dt['age']: {dt['age'].dtype}")
dt['age'].dtype = jmp.DataType.Character 
print(f"Updated Data Type of dt['age']: {dt['age'].dtype}")

```

#### format

**Syntax:** col_obj.formatcol_obj.format = tuple&lt; &lt;string&gt;|&lt;int&gt;, ... &gt;

**Description:** Get Format

**JMP Version Added:** 19

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

**Syntax:** col_obj.formulacol_obj.formula = &lt;Expression | string&gt;

**Description:** Sets a columns formula given an Expression object or a string representing valid JSL.

**JMP Version Added:** 19

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

**Syntax:** col_obj.mtype

**Description:** Property returning the enumeration value for the column&apos;s modeling type.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f"Modeling Type of dt['age']: {dt['age'].mtype}") 
dt['age'].mtype = jmp.ModelingType.Nominal
print(f"Updated Modeling Type of dt['age']: {dt['age'].mtype}")

```

#### name

**Syntax:** col_obj.namecol_obj.name = &lt;string&gt;

**Description:** Column name property, is both readable and settable.

**JMP Version Added:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
print(dt[0].name)
dt[0].name = 'First Name'

```

## jmp > DataTable

### Functions

#### Concepts

#### Constructors

#### Equality

**Description:** The DataTable object supports equality and inequality checks. Since a DataTable is actually a reference to a live data table, multiple objects could point to the same JMP table. The checks for equality == and inequality != test do not compare content. They check whether two DataTable objects point to the same JMP table.

**JMP Version Added:** 18

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

**Description:** The DataTable object supports the Python mapping protocol. Providing the array [] operators, and use of either a column name or numeric value as the column index.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( f'Column name: {dt[1].name}' )
print( f"Column name: {dt['age'].name}" )

```

#### Methods

#### Properties

#### Sequence

**Description:** The DataTable object behaves like a Python sequence. This allows iterating on the columns of the table.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
for n in dt:
    print( n.name )

```

#### Slice

**Description:** The slice operator is used as a parameter to the [ ] get item operation. This consists of start:stop:step.  These parameters are optional.  The returned value will be a list of values, beginning with the start value not including the stop value incremented by the step value.  Negative numbers for start or stop, are 1-based indexes from the end of the sequence.  A negative &apos;step&apos; value decrements the step count, rather than incrementing.  Empty values have appropriate defaults.  [::-1] will return the complete list in reverse order. And [:] will return the entire array in current item order.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( [c.name for c in dt[:]] )         # print list of column names default step = 1
reverse_cols = dt[::-1]                  # list of column names in reverse order
print( [c.name for c in reverse_cols] )  # print reversed column name list
print( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### Special Items

#### __eq__

**Syntax:** table1 == table2

**Description:** Equality test, returns true when two jmp.DataTable objects point to the same JMP data table.  This does not check that content matches, but the two variables point to exactly the same table.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt2 = jmp.current()
iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")
print( dt == dt2 )
print( dt == iris)

```

#### __getitem__

**Syntax:** column = dt[&apos;name&apos; | index]

**Description:** Provides the [] operator for getting a jmp.DataTable.Column object from the table by column name or 0-based index.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
column = dt[0]
column2 = dt['age']
print(column)
print(column2)

```

#### __init__

**Syntax:** dt = jmp.DataTable(&lt;name=&apos;table_name&apos;&gt;, &lt;rows=n&gt;, &lt;visibility=&apos;Invisible&apos; | &apos;Private&apos; )

**Description:** Create a new data table having name &apos;table_name&apos; with n rows. Parameters and keywords are optional, unless only rows are specified or order of parmeters is reversed.

**JMP Version Added:** 18

**Empty Table**

```python

import jmp
dt = jmp.DataTable()

```

**Invisible**

```python

import jmp
dt = jmp.DataTable('Powered By Python', 40, visibility='Invisible')

```

**Named Empty Table**

```python

import jmp
dt = jmp.DataTable('Powered By Python')

```

**Named with rows**

```python

import jmp
dt = jmp.DataTable('Powered By Python', 40)

```

**Private**

```python

import jmp
dt = jmp.DataTable('Powered By Python', 40, visibility='private')

```

**With keywords**

```python

import jmp
dt = jmp.DataTable(rows=40, name='Powered By Python')

```

#### __len__

**Syntax:** count = len(dt)

**Description:** Returns the number of columns in the table.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
print( len(dt) )

```

#### __ne__

**Syntax:** table1 != table2

**Description:** Inequality test, returns true when two jmp.DataTable objects do not point to the same data table.  This does not check that content matches, but the two objects do not point to exactly the same table.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt2 = jmp.current()
iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")
print( dt != dt2 )
print( dt != iris)

```

#### __setitem__

**Syntax:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**Description:** Provides the [] operator for setting values in a column getting a jmp.DataTable.Column object from the table by column name or 0-based index.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.DataTable('Names', 5)
dt.new_column('First Name', jmp.DataType.Character)
dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]
print( dt[0][:] )

```

#### __str__

**Syntax:** str( data_table )

**Description:** Returns a sting representation of summary information about the data table object.

**JMP Version Added:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(dt)

```

#### add_rows

**Syntax:** add_rows(rows, &lt;at=-1&gt;)

**Description:** Adds rows to the DataTable. rows is required. at is optional. If at is 0, insert at the beginning of the table. If it is <0, insert at the end of the table. Otherwise, if at is m, insert at row m (0-based indexing).

**JMP Version Added:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.add_rows(5)
dt.add_rows(1, at=0)
dt.add_rows(2, at=12) # 0-based indexing

```

#### cell_height

**Syntax:** dt.cell_heightdt.cell_height = &lt;int&gt;

**Description:** Set the display height of each data table cell.

**JMP Version Added:** 19

```python

import jmp
dt = jmp.DataTable()
jmp.run_jsl('Wait(0)')
print(dt.cell_height)
dt.cell_height = 40
print(dt.cell_height)

```

#### close

**Syntax:** dt.close( &lt;save= True | False&gt;)

**Description:** Close method on DataTable object.  Like JSL, defaults to saving the file if called without parameters.  To abandon a file such as a one created as a temporary table use dt.close(False) or dt.close(save=False) for more clarity.

**JMP Version Added:** 18

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

**Syntax:** delete_columns(&apos;name&apos;, ..., &apos;name&apos;)

**Description:** The delete_columms() method works like the JSL equivalent Delete Columns() message. Acceptable arguments are: no arguments; column name or comma separated names; a Python list of column names. Using no arguments means delete the selected columns.

**JMP Version Added:** 19

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

**Syntax:** dt.namedt.name = &apos;string&apos;

**Description:** The name property is both a setter and a getter for the data table&apos;s name.

**JMP Version Added:** 18

```python

import jmp
dt = jmp.DataTable()
print(dt.name)
dt.name = 'Powered by Python'

```

#### ncols

**Syntax:** dt.ncols

**Description:** A read-only property returning the number of columns in the table.

**JMP Version Added:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f'Number of columns: {dt.ncols}')

```

#### new_column

**Syntax:** dt.new_column( name=&apos;column_name&apos;, dtype=jmp.Numeric | .Character | .RowState | .Expression, mtype=jmp.ModelingType.Continuous | ... | TypeNone dlen=len cell type&apos;s data length especially for numeric 8(double),4(int32),2(int16),1(int8) where=n insert column after column n

**Description:** Create a new data table column, optionally specifying name, column type, data length, and modeling type

**JMP Version Added:** 18

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

**Syntax:** dt.nrows

**Description:** A read-only property returning the number of rows in the table.

**JMP Version Added:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f'Number of rows: {dt.nrows}')

```

#### row_states

**Syntax:** dt.row_statesdt.row_states = [state1, state2, ..., stateN]

**Description:** Sets the Row States for all rows in the data table.

**JMP Version Added:** 19

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

**Syntax:** dt.save( &lt; path=&apos;file_path&apos; &gt; )

**Description:** Save data table using table name to current directory. Optional path argument allows saving to a different location or name.

**JMP Version Added:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt[0][0] = 'Katie'
dt.save('BC_lowercase.jmp')

```

#### scripts

**Syntax:** dt.scriptsdt.scripts = &lt;dict&lt;str : &lt;str | Expression&gt;&gt;&gt;

**Description:** The scripts property allows for reading and writing of data table scripts.

**JMP Version Added:** 19

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

**Syntax:** select_columns(&apos;name&apos;, ..., &apos;name&apos;)

**Description:** The select_columms() method works like the JSL equivalent Select Columns() message. Acceptable arguments are: column name or comma separated names; a Python list of column names.

**JMP Version Added:** 19

**All**

```python

import jmp


dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.select_columns([col.name for col in dt])
# all columns should be selected.

```

**Example 1**

```python

import jmp


dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.select_columns('weight')
dt.select_columns('name', 'sex')
dt.select_columns(['age', 'height'])
# all columns should be selected.

```

## jmp > Expression

### Functions

#### Concepts

#### Constructors

#### Equality

**Description:** The Expression object supports equality and inequality checks. When comparing equality between two Expression objects, the values are compared and returned if they are equal or not. This is a comparison of the values of the Expression object and not the evaluation of the values.

**JMP Version Added:** 19

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

#### Properties

#### Special Items

#### __eq__

**Syntax:** expression1 == expression2

**Description:** The equality test returns true if the Expression object has the same content as another Expression object and returns false otherwise.

**JMP Version Added:** 19

```python

import jmp

expr1 = jmp.Expression('1 + 1')
expr2 = jmp.Expression('2 + 0')
expr3 = jmp.Expression('1 + 1')
print(expr1 == expr2)
print(expr1 == expr3)

```

#### __init__

**Syntax:** Expression(jsl=&lt;string&gt;)

**Description:** Creates a new Expression object.

**JMP Version Added:** 19

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

**Syntax:** expression1 != expression2

**Description:** The inequality test returns true if the Expression object has different content as another Expression object and returns false otherwise.

**JMP Version Added:** 19

```python

import jmp

expr1 = jmp.Expression('1 + 1')
expr2 = jmp.Expression('2 + 0')
expr3 = jmp.Expression('1 + 1')
print(expr1 != expr2)
print(expr1 != expr3)

```

#### __str__

**Syntax:** str( expr_obj )

**Description:** Returns a sting representation of containing all information about the Expression object.

**JMP Version Added:** 19

```python

import jmp
expr = jmp.Expression(':Height / :Weight')
print(expr)

```

#### jsl

**Syntax:** expr_obj.jslexpr_obj.jsl = &lt;string&gt;

**Description:** Expression jsl property, is readable and settable.

**JMP Version Added:** 19

```python

import jmp

expr = jmp.Expression(jsl='0 + 0')
print(expr)
expr.jsl = '2 + 2'
print(expr)

```

## jmp > Image

### Functions

#### Concepts

#### Constructors

#### Equality

**Description:** The Image object supports equality and inequality checks. When comparing equality between two Image objects, the values are compared and returned if they are equal or not.

**JMP Version Added:** 19

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

#### Special Items

#### __eq__

**Syntax:** image1 == image2

**Description:** The equality test returns true if the Image object has the same content as another Image object and returns false otherwise.

**JMP Version Added:** 19

```python

import jmp

image1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')
image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')
print(image1 == image2)
print(image1 == image3)

```

#### __init__

**Syntax:** jmp.Image(path=&lt;string&gt;)

**Description:** Creates a new Image object.

**JMP Version Added:** 19

```python

import jmp

image = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
print(f'Image: {image}')
jmp.open(image)

```

#### __ne__

**Syntax:** image1 != image2

**Description:** The inequality test returns true if the Image object has different content as another Image object and returns false otherwise.

**JMP Version Added:** 19

```python

import jmp

image1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')
image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')
print(image1 != image2)
print(image1 != image3)

```

#### __str__

**Syntax:** str( image_obj )

**Description:** Returns a sting representation of containing all information about the Image object.

**JMP Version Added:** 19

```python

import jmp
image = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
print(image)

```

## jmp > Project

### Functions

#### Constructors

#### Functions

#### Properties

#### Special Items

#### __init__

**Syntax:** prj = jmp.Project(&lt;name=&apos;Project name&apos;&gt;)

**Description:** Create a new Project object for accessing JMP projects and files.

**JMP Version Added:** 19

**Empty Project**

```python

import jmp
prj = jmp.Project()

```

**Named Empty Project**

```python

import jmp
prj = jmp.Project('My Project')

```

**Project Name**

```python

import jmp

prj = jmp.Project()
print(prj.name)

```

#### __str__

**Syntax:** str( project )

**Description:** Returns the string representation of the project

**JMP Version Added:** 19

```python

import jmp

prj = jmp.Project()
print( prj )

```

#### contents

**Syntax:** prj.name

**Description:** Returns a list of the file names contained within the project.

**JMP Version Added:** 19

```python

import jmp

prj = jmp.Project()
print(prj.contents)

```

#### exists

**Syntax:** prj.exists(&apos;file_name&apos;)

**Description:** Takes a file name and validates if the file exists within the project.

**JMP Version Added:** 19

```python

import jmp

prj = jmp.Project()
print( prj.exists('myfile.data') )

```

#### extract

**Syntax:** prj.extract(&apos;file_name&apos;)

**Description:** Takes a file name and extracts the file from to project to the project&apos;s temporary directory.

**JMP Version Added:** 19

```python

import jmp

prj = jmp.Project()
success = prj.extract('myfile.data')

```

#### extract_all

**Syntax:** prj.extract_all()

**Description:** Extracts all project files to the project&apos;s temporary directory.

**JMP Version Added:** 19

```python

import jmp

prj = jmp.Project()
success = prj.extract_all()

```

#### is_extracted

**Syntax:** prj.is_extracted(&apos;file_name&apos;)

**Description:** Takes a file name and checks if the file as already been extracted from the project archive.

**JMP Version Added:** 19

```python

import jmp

prj = jmp.Project()
print( prj.is_extracted('myfile.data') )

```

#### name

**Syntax:** prj.name

**Description:** The project name property is read only

**JMP Version Added:** 19

```python

import jmp

prj = jmp.Project()
print(prj.name)

```

## jmp > RowState

### Functions

#### Concepts

#### Constructors

#### Equality

**Description:** The RowState object supports equality and inequality checks. When comparing equality between two RowState objects, the values are compared and returned if they are equal or not. If two RowStates have the same content yet are intialized differently, they will still return true.

**JMP Version Added:** 19

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

#### Properties

#### Special Items

#### __eq__

**Syntax:** rs1 == rs2

**Description:** The equality test returns true if the RowState object has the same content as another RowState object and returns false otherwise.

**JMP Version Added:** 19

```python

import jmp

rs1 = jmp.RowState(color=4, marker=2, selected=True)
rs2 = jmp.RowState(color=11, excluded=True, labeled=True)
rs3 = jmp.RowState(value=1057)
print(rs1 == rs2)
print(rs1 == rs3)

```

#### __init__

**Syntax:** jmp.RowState(selected?=&lt;boolean&gt;, hidden?=&lt;booleane&gt;, labeled?=&lt;boolean&gt;, excluded?=&lt;boolean&gt;, color?=&lt;int&gt;, marker?=&lt;int&gt;)jmp.RowState(value=&lt;int&gt;)

**Description:** Creates a new RowState object. RowState is an object holding any of the six characteristics that rows in a JMP data table can have: selected, hidden, excluded, labeled, colored, and marked.

**JMP Version Added:** 19

```python

import jmp

from jmp import RowState
rs = RowState(color=4, marker=2, selected=True)
print(f'Row State: {rs}')

rs_from_value = RowState(value=33)
print(f'Row State from Value: {rs_from_value}')

```

#### __ne__

**Syntax:** image1 != image2

**Description:** The inequality test returns true if the RowState object has different content as another RowState object and returns false otherwise.

**JMP Version Added:** 19

```python

import jmp

rs1 = jmp.RowState(color=4, marker=2, selected=True)
rs2 = jmp.RowState(color=11, excluded=True, labeled=True)
rs3 = jmp.RowState(value=1057)
print(rs1 != rs2)
print(rs1 != rs3)

```

#### __str__

**Syntax:** str( rs_obj )

**Description:** Returns a sting representation of containing all information about the RowState object.

**JMP Version Added:** 19

```python

import jmp
rs = jmp.RowState(color=11, excluded=True, labeled=True)
print(rs)

```

#### color

**Syntax:** rs_obj.colorrs_obj.color = &lt;int&gt;

**Description:** RowState color property, is readable and settable. Colors are chosen from 0 to 84. (0-15 basics, 16-31 dark, 32-47 light, 48-63 very dark, 64-79 very light, 80-84 grays)

**JMP Version Added:** 19

```python

import jmp

rs = jmp.RowState(color=5)
print(rs)
rs.color = 0
print(rs)

```

#### excluded

**Syntax:** rs_obj.excludedrs_obj.excluded = &lt;boolean&gt;

**Description:** RowState excluded property, is readable and settable.

**JMP Version Added:** 19

```python

import jmp

rs = jmp.RowState(excluded=True)
print(rs)
rs.excluded = False 
print(rs)

```

#### hidden

**Syntax:** rs_obj.hiddenrs_obj.hidden = &lt;boolean&gt;

**Description:** RowState hidden property, is readable and settable.

**JMP Version Added:** 19

```python

import jmp

rs = jmp.RowState(hidden=True)
print(rs)
rs.hidden = False 
print(rs)

```

#### labeled

**Syntax:** rs_obj.labeledrs_obj.labeled = &lt;boolean&gt;

**Description:** RowState labeled property, is readable and settable.

**JMP Version Added:** 19

```python

import jmp

rs = jmp.RowState(labeled=True)
print(rs)
rs.labeled = False 
print(rs)

```

#### marker

**Syntax:** rs_obj.markerrs_obj.marker = &lt;int&gt;

**Description:** RowState marker property, is readable and settable. Markers are chosen from 0 to 31

**JMP Version Added:** 19

```python

import jmp

rs = jmp.RowState(marker=3)
print(rs)
rs.marker = 0
print(rs)

```

#### selected

**Syntax:** rs_obj.selectedrs_obj.selected = &lt;boolean&gt;

**Description:** RowState selected property, is readable and settable.

**JMP Version Added:** 19

```python

import jmp

rs = jmp.RowState(selected=True)
print(rs)
rs.selected = False 
print(rs)

```

## jmp > globals

### Functions

#### Concepts

#### Iteration

**Description:** The globals property supports iterating across the set of values.

**JMP Version Added:** 19

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

#### Methods

#### Special Items

#### __getitem__

**Syntax:** value = jmp.globals[&apos;name&apos;]

**Description:** Gets a JSL global variable as a Python object. Returns None if the object cannot be found. Returns an opaque type for data types that cannot be handed. Capable of transferring the same types of objects as Python Send() and Python Get().

**JMP Version Added:** 19

```python

import jmp

jmp.run_jsl('''
    pi = 3.1415929
''')
print( jmp.globals['pi'] )

```

#### __len__

**Syntax:** length = len( jmp.globals )

**Description:** Returns the number of symbols in the JSL global environment.

**JMP Version Added:** 19

```python

import jmp

print( len( jmp.globals ) )
jmp.globals['pi'] = 3.1415927
print( len( jmp.globals ) )
jmp.globals['e'] =  2.7182818
print( len( jmp.globals ) )

```

#### __setitem__

**Syntax:** jmp.globals[&apos;name&apos;] = value

**Description:** Due to Python scoping and the design of Python Get(), only variables in the Python global scope are accessible with Python Get(). The jmp.globals dictionary provides the capacity to directly set or create a JSL variable from Python code. The value type can be any Python type currently supported by Python Get().

**JMP Version Added:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.run_jsl('''
    show(pi)
''')

```

#### __str__

**Syntax:** str(jmp.globals)

**Description:** Display the contents of globals in a dictionary representation. Note that the globals dictionary is utilized by JMP itself so there may be additional entries.

**JMP Version Added:** 19

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

**Syntax:** value = jmp.globals.get(&apos;name&apos;)

**Description:** The get() function returns the value for the given key. Like JSL, the key is a fuzzy match.

**JMP Version Added:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['an A'] = 'Annie'
print( jmp.globals.get('pi') )                        
print( jmp.globals.get('ana') )

```

#### items

**Syntax:** item_list = jmp.globals.items()

**Description:** Returns a list of key-value pairs in the namespace. Note that the globals dictionary is utilized by JMP itself so there may be additional entries.

**JMP Version Added:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['bB'] = 'Bumble Bee'
print( jmp.globals.items() )

```

#### keys

**Syntax:** key_list = jmp.globals.keys()

**Description:** Returns a list of the keys in the namespace. Note that the globals dictionary is utilized by JMP itself so there may be additional entries.

**JMP Version Added:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['bB'] = 'Bumble Bee'
print( jmp.globals.keys() )

```

#### values

**Syntax:** value_list = jmp.globals.values()

**Description:** Returns the values in the namespace. Note that the globals dictionary is utilized by JMP itself so there may be additional entries.

**JMP Version Added:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['bB'] = 'Bumble Bee'
print( jmp.globals.values() )

```

## jmp > here

### Functions

#### Concepts

#### Iteration

**Description:** The here property supports iterating across the values in the &apos;here&apos; namespace.

**JMP Version Added:** 19

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

#### Methods

#### Special Items

#### __getitem__

**Syntax:** value = jmp.here[&apos;name&apos;]

**Description:** Gets a JSL variable from the current &apos;here&apos; namespace as a Python object. Returns None if the object cannot be found, or an opaque type for data types that cannot yet be handled. Providing direct retrieval of a JSL variable into the local Python scope. Supports transfers of the same types of objects as Python Send(). Note that in JSL namespace scoping, the &apos;here&apos; namespace is local to script submission, and code submitted from different script windows will have separate &apos;here&apos; namespaces. Code that includes another script has a single &apos;here&apos; namespace. This shared namespace also exists for a JSL script running Python via Submit() or Execute(), Python scripts calling run_jsl().

**JMP Version Added:** 19

**Example 1**

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

#### __len__

**Syntax:** length = len( jmp.here )

**Description:** Returns the number of symbols in the JSL &apos;here&apos; namespace.

**JMP Version Added:** 19

```python

import jmp

print( len( jmp.here ) )
jmp.here['pi'] = 3.1415927
print( len( jmp.here ) )
jmp.here['e'] =  2.7182818
print( len( jmp.here ) )

```

#### __setitem__

**Syntax:** jmp.here[&apos;name&apos;] = value

**Description:** Provides the means to set a value into the JSL script&apos;s &apos;here&apos; namespace. This allows sending back a value that could not be reached by Python Get(). Only variables in the Python global scope can be seen by Python Get(). Supports same object types as Python Get(). Note on JSL namespace scoping, the &apos;here&apos; namespace is local to the script submission.  Code submitted from different script windows will have separate &apos;here&apos; namespaces. Code including another script will have a single &apos;here&apos; namespace. This holds true for a JSL script running Python via Submit() or Execute(), Python scripts calling run_jsl().

**JMP Version Added:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.run_jsl('''
    Names Default to Here(1);
    show(pi)
''')

```

#### __str__

**Syntax:** str(jmp.here)

**Description:** Display the contents of here in a dictionary representation.

**JMP Version Added:** 19

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

**Syntax:** value = jmp.here.get(&apos;name&apos;)

**Description:** The get() function returns the value for the given key. Like JSL, the key is a fuzzy match.

**JMP Version Added:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.get('pi') )                        
print( jmp.here.get('b  b') )

```

#### items

**Syntax:** item_list = jmp.here.items()

**Description:** Returns a list of key-value pairs in the namespace.

**JMP Version Added:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.items() )

```

#### keys

**Syntax:** key_list = jmp.here.keys()

**Description:** Returns a list of the keys in the namespace.

**JMP Version Added:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.keys() )

```

#### values

**Syntax:** value_list = jmp.here.values()

**Description:** Returns the values in the namespace.

**JMP Version Added:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.values() )

```

## jmp > live

### Functions

#### Functions

#### get_credentials()

**Syntax:** jmp.live.get_credentials(&lt;credential_name&gt;)

**Description:** In JMP Live data refresh scripts, returns the credentials with the given name (or, if no name is provided, the default credentials) assigned to the script. Returned value is a dictionary with "username", "password", and "key_file_path" keys.

**JMP Version Added:** 19

```python

import jmp

dt = jmp.DataTable()

credentials = jmp.live.get_credentials()

# login to external data source using credentials['username'] and credentials['password']
# create dt using obtained data

jmp.live.set_result(dt)

```

#### get_import_file_path()

**Syntax:** jmp.live.get_import_file_path()

**Description:** In JMP Live data import scripts, returns the path to the uploaded import file.

**JMP Version Added:** 19

```python

import jmp

dt = jmp.DataTable()

importPath = jmp.live.get_import_file_path()
with open(importPath) as importFile:
    # [import data from importFile to dt]

jmp.live.set_result(dt)

```

#### set_result()

**Syntax:** jmp.live.set_result()

**Description:** In JMP Live data refresh and import scripts, sets the result table. Set the result to None to cancel the update.

**JMP Version Added:** 19

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

## jmp > log

### Functions

#### Functions

#### flush

**Syntax:** jmp.log.flush()

**Description:** The log.flush() and log.write() functions overload Python&apos;s stdio and stderr flush() and write() functions. These are largely for JMP&apos;s internal use as they direct the Python&apos;s output to the JMP log and embedded log windows. jmp.log.flush() is a NOP, and returns and empty string.

**JMP Version Added:** 18

```python

import jmp

import jmp.log
jmp.log.flush()

```

#### write

**Syntax:** jmp.log.write(&apos;message&apos;)

**Description:** The log.flush() and log.write() functions overload Python&apos;s stdio and stderr flush() and write() functions. These are largely for JMP&apos;s internal use as they direct the Python&apos;s output to the JMP log and embedded log windows.  Programs can call jmp.log.write(&apos;message&apos;) to explicitly send the message to the JMP log or embedded log windows.

**JMP Version Added:** 18

```python

import jmp

import jmp.log
jmp.log.write('I am a log message.')

```

## jmp

### Functions

#### ALL_HOME

**Syntax:** jmp.ALL_HOME

**Description:** Value corresponding to JSL&apos;s $ALL_HOME directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.ALL_HOME)

```

#### BUILTIN_SCRIPTS

**Syntax:** jmp.BUILTIN_SCRIPTS

**Description:** Value corresponding to JSL&apos;s $BUILTIN_SCRIPTS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.BUILTIN_SCRIPTS)

```

#### Constants

#### DESKTOP

**Syntax:** jmp.DESKTOP

**Description:** Value corresponding to JSL&apos;s $DESKTOP directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.DESKTOP)

```

#### DOCUMENTS

**Syntax:** jmp.DOCUMENTS

**Description:** Value corresponding to JSL&apos;s $DOCUMENTS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.DOCUMENTS)

```

#### DOWNLOADS

**Syntax:** jmp.DOWNLOADS

**Description:** Value corresponding to JSL&apos;s $DOWNLOADS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.DOWNLOADS)

```

#### DataType

**Syntax:** jmp.DataType.enum_value

**Description:** jmp.DataType is an enumeration representing a JMP column&apos;s data types. These are used with the jmp.DataTable.new_column() function to create columns other than the default Numeric type.

**JMP Version Added:** 18

```python

import jmp

# for the sake of typing
from jmp import DataType as dType
print('jmp.DataType members:')
print( list(map(lambda c: c.name, dType)) )

```

#### Enums

#### Functions

#### HOME

**Syntax:** jmp.HOME

**Description:** Value corresponding to JSL&apos;s $HOME directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.HOME)

```

#### JMPPRJ

**Syntax:** jmp.JMPPRJ

**Description:** Returns the physical path of the project&apos;s temporary directory. Returns the current working directory, or None if script is not running within a project.

**JMP Version Added:** 19

```python

import jmp
print(jmp.JMPPRJ)

```

#### ModelingType

**Syntax:** jmp.ModelingType.enum_value

**Description:** jmp.ModelingType is an enumeration representing a JMP column&apos;s modeling or analysis type. These are used with the jmp.DataTable.new_column() function to create columns other than the default Continuous modeling type. Note TypeNone differs from JMP&apos;s modeling type None as &apos;None&apos; is a Python keyword.

**JMP Version Added:** 18

```python

import jmp

# for the sake of typing
from jmp import ModelingType as mType
print('jmp.ModleingType members:')
print( list(map(lambda c: c.name, mType)) )

```

#### PYTHONW_EXE

**Syntax:** jmp.PYTHONW_EXE

**Description:** Path to the JMP installed no-console Python executable (Windows only).

**JMP Version Added:** 19

```python

import jmp

import platform
if platform.system() == "Windows":
    print(jmp.PYTHONW_EXE)

```

#### PYTHON_EXE

**Syntax:** jmp.PYTHON_EXE

**Description:** Path to the JMP installed Python executable.

**JMP Version Added:** 18

```python

import jmp
print(jmp.PYTHON_EXE)

```

#### PY_USER_APPDIR

**Syntax:** jmp.PY_USER_APPDIR

**Description:** Path to the user directory location acting as the base of JMP&apos;s Python support. The site-packages directory is within this directory hierarchy.

**JMP Version Added:** 18

```python

import jmp
print(jmp.PY_USER_APPDIR)

```

#### SAMPLE_APPS

**Syntax:** jmp.SAMPLE_APPS

**Description:** Value corresponding to JSL&apos;s $SAMPLE_APPS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_APPS)

```

#### SAMPLE_DASHBOARDS

**Syntax:** jmp.SAMPLE_DASHBOARDS

**Description:** Value corresponding to JSL&apos;s $SAMPLE_DASHBOARDS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_DASHBOARDS)

```

#### SAMPLE_DATA

**Syntax:** jmp.SAMPLE_DATA

**Description:** Value corresponding to JSL&apos;s $SAMPLE_DATA directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_DATA)

```

#### SAMPLE_IMAGES

**Syntax:** jmp.SAMPLE_IMAGES

**Description:** Value corresponding to JSL&apos;s $SAMPLE_IMAGES directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_IMAGES)

```

#### SAMPLE_IMPORT_DATA

**Syntax:** jmp.SAMPLE_IMPORT_DATA

**Description:** Value corresponding to JSL&apos;s $SAMPLE_IMPORT_DATA directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_IMPORT_DATA)

```

#### SAMPLE_PROJECTS

**Syntax:** jmp.SAMPLE_PROJECTS

**Description:** Value corresponding to JSL&apos;s $SAMPLE_PROJECTS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_PROJECTS)

```

#### SAMPLE_SCRIPTS

**Syntax:** jmp.SAMPLE_SCRIPTS

**Description:** Value corresponding to JSL&apos;s $SAMPLE_SCRIPTS directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.SAMPLE_SCRIPTS)

```

#### TEMP

**Syntax:** jmp.TEMP

**Description:** Value corresponding to JSL&apos;s $TEMP directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.TEMP)

```

#### USER_APPDATA

**Syntax:** jmp.USER_APPDATA

**Description:** Value corresponding to JSL&apos;s $USER_APPDATA directory.

**JMP Version Added:** 18

```python

import jmp
print(jmp.USER_APPDATA)

```

#### __jmp_version__

**Syntax:** jmp.__jmp_version__

**Description:** Version number of the JMP executable.

**JMP Version Added:** 18

```python

import jmp
print(jmp.__jmp_version__)

```

#### __version__

**Syntax:** jmp.__version__

**Description:** Version number of the &apos;jmp&apos; import package. This is not the JMP version.

**JMP Version Added:** 18

```python

import jmp
print(jmp.__version__)

```

#### current

**Syntax:** dt = jmp.current()

**Description:** Returns a DataTable object for the current JMP data table.

**JMP Version Added:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(jmp.current())

```

#### eval

**Syntax:** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**Description:** Evaluates the argument and returns the result.

**JMP Version Added:** 19

```python

import jmp

from jmp import eval, Expression
expression = Expression("2 + 2")
result = eval(expression)
print(result)

```

#### from_dataframe

**Syntax:** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;)

**Description:** Returns a jmp.DataTable object from a protocol compliant library&apos;s dataframe.

**JMP Version Added:** 19

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

**Syntax:** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;)

**Description:** Returns a jmp.DataTable object from a library&apos;s dataframe using the provided CSV conversion method.

**JMP Version Added:** 19

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

**Syntax:** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**Description:** Opens a file located at file_path. If the file is a .jmp file or a file that imports into a JMP data table, the object returned will be a DataTable object.  Otherwise will return True or False for success or failure. The optional visibility parameter controls whether the opened file is hidden from view.  Invisible is just hidden from view, while still showing up in the recent files menu and home window.  With a Private table, the reference returned is the only reference to the table, and it does not appear in any of the file lists.

**JMP Version Added:** 18

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

**JSL Script**

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

**Syntax:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**Description:** Returns the value of a path variable, which is a name like SAMPLE_DATA that is substituted for when found in pathnames.

**JMP Version Added:** 19

```python

import jmp

path_value = jmp.path_variable('SAMPLE_DATA')
if not path_value:
    print('Invalid path variable.')
else:
    print(path_value)

```

#### r_name

**Syntax:** dt = jmp.r_name(jsl_var)

**Description:** Maps a JMP variable name to an R variable name using R variable naming rules.

**JMP Version Added:** 19

```python

import jmp

rName = jmp.r_name('c d e')
print(rName)

```

#### reset

**Syntax:** jmp.reset()

**Description:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP Version Added:** 19

```python

import jmp

pi = 3.1415927
print(pi)
jmp.reset()
print(pi)

```

#### run_jsl

**Syntax:** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**Description:** Run JSL scripting from within the Python environment, including the JSL Python interface functions. Optional echo= parameter when set to False or None stops the presented JSL source code from echoing to the log. A result will be returned for the same JSL object types that are supported by Python Send() / Get().  Script failure or unsupported JSL object types will return None.

**JMP Version Added:** 18

**Column Properties**

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

**Get Version**

```python

import jmp

jmp.run_jsl('Python Get Version();')

```

**Returned value**

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

**Syntax:** dt = jmp.table(&apos;table_name&apos;)

**Description:** Returns a DataTable object for the opened table having &apos;table_name&apos;

**JMP Version Added:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( jmp.table('Big Class') )

```

## jmpex > R - module > R - class

### Functions

#### Constants

#### Constructors

#### Functions

#### __init__

**Syntax:** jmpex.R.R( &lt;&apos;rpy2&apos;&gt; )

**Description:** Function to create R extension class object. Optional parameter to specify backend  for R support. Currently only &apos;rpy2&apos; is supported. This is the default if no argument is specified.

**JMP Version Added:** 19

```python

import jmp

from jmpex.R import R

jr = R()
print(jr.r_version())

```

#### __version__

**Syntax:** ver = jmpex.R.R().__version__

**Description:** The jmpex package&apos;s R support version.

**JMP Version Added:** 19

```python

import jmp

from jmpex.R import R

jr = R()
print(jr.__version__)

```

#### get

**Syntax:** pyobj = jmpex.R.R.get( &apos;name&apos; )

**Description:** Gets the named variable from the R environment and returns it to Python using the r2obj() function. An R DataFrame is returned as a pandas.DataFrame.

**JMP Version Added:** 19

**Numeric Vector**

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

**Set Column**

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

**Set Data Table**

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

**String Vector**

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

**Syntax:** jmpex.R.R.is_connected( )

**Description:** Static function which is available whether or not an R() instance object exists. Indicates R subsystem has been initialized.

**JMP Version Added:** 19

```python

import jmp

from jmpex.R import R

print(f'R initialized: {R.is_connected()}')
jr = R()
print(f'R initialized: {R.is_connected()}')

```

#### obj2r

**Syntax:** jmpex.R.R.obj2r( var )

**Description:** Create an R object from Python object.

**JMP Version Added:** 19

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

**Syntax:** jmpex.R.R.r2obj( var )

**Description:** Create a regular Python object from R object.

**JMP Version Added:** 19

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

**Syntax:** ver = jmpex.R.R.r_version( )

**Description:** Returns the version of R.

**JMP Version Added:** 19

```python

import jmp

from jmpex.R import R

jr = R()
print(f'R Version: {jr.r_version()}')

```

#### set

**Syntax:** jmpex.R.R.set( var, as_name )

**Description:** Set Python variable into R environment named by the &apos;as_name&apos; parameter. The R object is created using the obj2r() function internally. Name has been passed through the appropriate name -> R Name() function to ensure name is a valid R variable name.

**JMP Version Added:** 19

**Numeric Vector**

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

**Set Column**

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

**Set Data Table**

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

**String Vector**

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

**Syntax:** jmpex.R.R.submit( &apos;R script&apos; )

**Description:** Submit R program code for evaluation. Returns result as Python object if available.

**JMP Version Added:** 19

**Script**

```python

import jmp

from jmpex.R import R

jr = R()
jr.submit('''
x <- rnorm (100)
y <- x**2 + rnorm (100)
''')

```

**Set Data Table**

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

**Syntax:** jmpex.R.R.submit_file(&apos;path_to_R_script&apos;)

**Description:** Submit an R script file for evaluation. Returns result as Python object if available.

**JMP Version Added:** 19

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

## jmpex > R - module

### Functions

#### Concepts

#### R

**Description:** The R module represents jmpex.R which contains the Python Class R. The class jmpex.R.R implements the interface functionality.

**JMP Version Added:** 19

## jmpex

### Functions

#### Concepts

#### jmpex - package

**Description:** The jmpex package contains extension interfaces supported by JMP. Currently it contains only an R support module.

**JMP Version Added:** 19

## jmputils

### Functions

#### Functions

#### create_jpip

**Syntax:** create_jpip( &apos;directory_path&apos; )

**Description:** Function to create the terminal/command shell version of the jpip script within the specified directory. The jpip script wraps the Python pip command ensuring the appropriate environment variables are configured. This ensures that packages installed by jpip are installed in the JMP site-packages directory.

**JMP Version Added:** 18

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

**Syntax:** jpip( &apos;pip_cmd&apos;, packages=&apos;&apos; )

**Description:** Callable from within JMP, this function wraps the Python pip command. Pass this function pip command as a string, and optionally a space-delimited string of packages to install. Lists of individual arguments are also accepted. The packages argument defaults to an empty string. The &apos;jmputils&apos; package resides in the same location as the embedded Python standard library files. All functions within jmputils utilize only Python standard library functions or JMP built-in functionality.

**JMP Version Added:** 18

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

