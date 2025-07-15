# Python Integration



## Funciones

### ALL_HOME

**Sintaxis:** jmp.ALL_HOME

**Descripción:** El valor correspondiente al directorio $ALL_HOME de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.ALL_HOME)

```

### BUILTIN_SCRIPTS

**Sintaxis:** jmp.BUILTIN_SCRIPTS

**Descripción:** El valor correspondiente al directorio $BUILTIN_SCRIPTS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.BUILTIN_SCRIPTS)

```

### Constantes

### DESKTOP

**Sintaxis:** jmp.DESKTOP

**Descripción:** El valor correspondiente al directorio $DESKTOP de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.DESKTOP)

```

### DOCUMENTS

**Sintaxis:** jmp.DOCUMENTS

**Descripción:** El valor correspondiente al directorio $DOCUMENTS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.DOCUMENTS)

```

### DOWNLOADS

**Sintaxis:** jmp.DOWNLOADS

**Descripción:** El valor correspondiente al directorio $DOWNLOADS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.DOWNLOADS)

```

### DataType

**Sintaxis:** jmp.DataType.enum_value

**Descripción:** jmp.DataType es una enumeración que representa los tipos de datos de una columna de JMP. Se utilizan con la función jmp.DataTable.new_column() para crear columnas que no sean las predeterminadas de tipo Numérico.

**JMP Versión agregada:** 18

```python

import jmp

# for the sake of typing
from jmp import DataType as dType
print('jmp.DataType members:')
print( list(map(lambda c: c.name, dType)) )

```

### Enumeraciones

### Funciones

### HOME

**Sintaxis:** jmp.HOME

**Descripción:** El valor correspondiente al directorio $HOME de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.HOME)

```

### JMPPRJ

**Sintaxis:** jmp.JMPPRJ

**Descripción:** Devuelve la ruta física del directorio temporal del proyecto. Devuelve el directorio de trabajo actual, o None si el script no se está ejecutando dentro de un proyecto.

**JMP Versión agregada:** 19

```python

import jmp
print(jmp.JMPPRJ)

```

### ModelingType

**Sintaxis:** jmp.ModelingType.enum_value

**Descripción:** jmp.ModelingType es una enumeración que representa el tipo de modelización o análisis de una columna del PDM. Se utiliza con la función jmp.DataTable.new_column() para crear columnas que no sean las predeterminadas de tipo de modelización Continuo. Tenga en cuenta que TypeNone difiere del tipo de modelización Ninguno de JMP, ya que "None" es una palabra clave de Python.

**JMP Versión agregada:** 18

```python

import jmp

# for the sake of typing
from jmp import ModelingType as mType
print('jmp.ModleingType members:')
print( list(map(lambda c: c.name, mType)) )

```

### PYTHONW_EXE

**Sintaxis:** jmp.PYTHONW_EXE

**Descripción:** Ruta al ejecutable de Python sin consola instalado en JMP (solo para Windows).

**JMP Versión agregada:** 19

```python

import jmp

import platform
if platform.system() == "Windows":
    print(jmp.PYTHONW_EXE)

```

### PYTHON_EXE

**Sintaxis:** jmp.PYTHON_EXE

**Descripción:** La ruta del ejecutable de Python instalado en JMP.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.PYTHON_EXE)

```

### PY_USER_APPDIR

**Sintaxis:** jmp.PY_USER_APPDIR

**Descripción:** La ruta de la ubicación del directorio de usuario que actúa como base del soporte de Python en JMP. El directorio de paquetes del sitio está dentro de esta jerarquía de directorios.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.PY_USER_APPDIR)

```

### SAMPLE_APPS

**Sintaxis:** jmp.SAMPLE_APPS

**Descripción:** El valor correspondiente al directorio $SAMPLE_APPS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_APPS)

```

### SAMPLE_DASHBOARDS

**Sintaxis:** jmp.SAMPLE_DASHBOARDS

**Descripción:** El valor correspondiente al directorio $SAMPLE_DASHBOARDS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_DASHBOARDS)

```

### SAMPLE_DATA

**Sintaxis:** jmp.SAMPLE_DATA

**Descripción:** El valor correspondiente al directorio $SAMPLE_DATA de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_DATA)

```

### SAMPLE_IMAGES

**Sintaxis:** jmp.SAMPLE_IMAGES

**Descripción:** El valor correspondiente al directorio $SAMPLE_IMAGES de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_IMAGES)

```

### SAMPLE_IMPORT_DATA

**Sintaxis:** jmp.SAMPLE_IMPORT_DATA

**Descripción:** El valor correspondiente al directorio $SAMPLE_IMPORT_DATA de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_IMPORT_DATA)

```

### SAMPLE_PROJECTS

**Sintaxis:** jmp.SAMPLE_PROJECTS

**Descripción:** El valor correspondiente al directorio $SAMPLE_PROJECTS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_PROJECTS)

```

### SAMPLE_SCRIPTS

**Sintaxis:** jmp.SAMPLE_SCRIPTS

**Descripción:** El valor correspondiente al directorio $SAMPLE_SCRIPTS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_SCRIPTS)

```

### TEMP

**Sintaxis:** jmp.TEMP

**Descripción:** El valor correspondiente al directorio $TEMP de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.TEMP)

```

### USER_APPDATA

**Sintaxis:** jmp.USER_APPDATA

**Descripción:** El valor correspondiente al directorio $USER_APPDATA de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.USER_APPDATA)

```

### __jmp_version__

**Sintaxis:** jmp.__jmp_version__

**Descripción:** El número de versión del ejecutable de JMP.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.__jmp_version__)

```

### __version__

**Sintaxis:** jmp.__version__

**Descripción:** El número de versión del paquete de importación de "jmp". No es la versión de JMP.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.__version__)

```

### current

**Sintaxis:** dt = jmp.current()

**Descripción:** Devuelve un objeto DataTable para la tabla de datos JMP actual.

**JMP Versión agregada:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(jmp.current())

```

### eval

**Sintaxis:** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**Descripción:** Evalúa el argumento y devuelve el resultado.

**JMP Versión agregada:** 19

```python

import jmp

from jmp import eval, Expression
expression = Expression("2 + 2")
result = eval(expression)
print(result)

```

### from_dataframe

**Sintaxis:** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;)

**Descripción:** Devuelve un objeto jmp.DataTable desde el marco de datos de una biblioteca compatible con el protocolo.

**JMP Versión agregada:** 19

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

**Sintaxis:** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;)

**Descripción:** Devuelve un objeto jmp.DataTable desde el marco de datos de una biblioteca utilizando el método de conversión de CSV proporcionado.

**JMP Versión agregada:** 19

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

**Sintaxis:** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**Descripción:** Abre un archivo ubicado en file_path. Si el archivo es un archivo .jmp o un archivo que se importa en una tabla de datos de JMP, el objeto devuelto será un objeto DataTable. De lo contrario, devolverá True o False según si la acción es correcta o falla. El parámetro opcional de visibilidad controla si el archivo abierto está oculto y no se puede ver. Invisible es simplemente que está oculto y no se puede ver, aunque sigue apareciendo en el menú de archivos recientes y en la ventana de inicio. Si la tabla es Privada, la referencia devuelta es la única referencia a la tabla, y no aparece en ninguna de las listas de archivos.

**JMP Versión agregada:** 18

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

**Privada**

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

**Script JSL**

```python

import jmp

obj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')
print(obj)

```

### path_variable

**Sintaxis:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**Descripción:** Devuelve el valor de una variable de ruta, que es un nombre como SAMPLE_DATA, que se sustituye cuando se encuentra en nombres de rutas.

**JMP Versión agregada:** 19

```python

import jmp

path_value = jmp.path_variable('SAMPLE_DATA')
if not path_value:
    print('Invalid path variable.')
else:
    print(path_value)

```

### r_name

**Sintaxis:** dt = jmp.r_name(jsl_var)

**Descripción:** Establece una correspondencia entre un nombre de variable de JMP y uno de R usando las reglas de denominación de variables de R.

**JMP Versión agregada:** 19

```python

import jmp

rName = jmp.r_name('c d e')
print(rName)

```

### reset

**Sintaxis:** jmp.reset()

**Descripción:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP Versión agregada:** 19

```python

import jmp

pi = 3.1415927
print(pi)
jmp.reset()
print(pi)

```

### run_jsl

**Sintaxis:** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**Descripción:** Ejecute secuencias de comandos JSL desde el entorno de Python, incluidas las funciones de interfaz JSL de Python. Cuando el parámetro opcional echo= es False o None impide que el código fuente JSL presentado envíe un eco al registro. Se devuelve un resultado para los mismos tipos de objetos de JSL soportados por Python Send() / Get(). Los fallos de script o los tipos de objeto de JSL no admitidos devuelven None.

**JMP Versión agregada:** 18

**Obtener versión**

```python

import jmp

jmp.run_jsl('Python Get Version();')

```

**Propiedades de columna**

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

**Valor devuelto**

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

**Sintaxis:** dt = jmp.table(&apos;table_name&apos;)

**Descripción:** Devuelve un objeto DataTable para la tabla abierta cuyo nombre sea "table_name".

**JMP Versión agregada:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( jmp.table('Big Class') )

```

## jmp > DataConnector

### Funciones

#### Ability to copy with copy.copy

**Descripción:** DataConnector objects support shallow copying with the standard copy.copy function.



Changing the copying behavior in subclasses is not supported, so subclasses should not add additional instance attributes because they will not be copied.

**JMP Versión agregada:** 19

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

#### Conceptos

#### Elementos especiales

#### Funciones

#### Métodos

#### __getitem__

**Sintaxis:** value = dc["FIELD NAME"]

**Descripción:** Obtiene el valor asociado a un campo.

**JMP Versión agregada:** 19

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

**Sintaxis:** def _do_as_data_source(self) -&gt; jmp.DataSource:

**Descripción:** Subclasses should override this function to create a connection. The returned connection, in the form of a subclass of jmp.DataSource, enables integration with Query Builder.



Avoid storing and using a reference to the connector instance (self) in the returned data source. Other code might also hold a reference and change configuration values unexpectedly. Instead, consider using copy.copy to make an independent copy to refer to, like "self_copy = copy.copy(self)".

**JMP Versión agregada:** 19

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

**Sintaxis:** def _do_open(self) -&gt; jmp.DataTable:

**Descripción:** Subclasses can override this function to open a table directly. This function implements the Open message in JSL (New Data Connector(...) << Open()).



If both this function and _do_as_data_source are implemented, they should be able to open the same set of tables.

**JMP Versión agregada:** 19

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

**Sintaxis:** jmp.DataConnector.tie(DataConnectorTypeClass, DataConnectorClass)

**Descripción:** Associates a jmp.DataConnectorType subclass and a jmp.DataConnector subclass, "tying" them together and completing the definitions of both classes. This association gives the jmp.DataConnector subclass access to the jmp.DataConnectorType subclass and its field definitions. It also ensures that the jmp.DataConnectorType subclass creates jmp.DataConnector instances using the specified subclass.



This function creates the association by setting attributes on the subclasses.

**JMP Versión agregada:** 19

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

### Funciones

#### Constructores

#### __init__

**Sintaxis:** field = jmp.DataConnectorField(type, &lt;default=DEFAULT_VALUE,&gt; &lt;tooltip="TOOLTIP" | None,&gt; &lt;ui_name="UI NAME" | None,&gt; &lt;credential="CREDENTIAL TYPE" | None,&gt; &lt;sensitive=True | False,&gt; &lt;mask_input=True | False&gt;)

**Descripción:** DataConnectorField defines a field.



Base arguments:



type: The type of the field, such as int (see jmp.DataConnectorType.fields for more information).



default: The default value for the field, such as 42. If not provided, the default value depends on the type. The default value is None if that is supported, for example, if the type is "int | None". Otherwise, it is the "empty" value for the type: "" for str, 0 for int, and False for bool.



tooltip: If provided and not None, it is used as a tooltip for the field in the data connector editor.



ui_name: If provided and not None, it is used as the name of the field in the data connector editor instead of the actual name of the field.



Extra arguments when type is "str" or "str | None":



credential: If provided and not None, the type of credential stored by this field. The valid values are "username" and "password". JMP uses this information to enable placeholder support.



sensitive: When true, this field is considered to hold sensitive information and as such its values are not written out in plain text. Defaults to true if "credential" is set and false otherwise.



mask_input: When true, the value is obscured and shown with dots in the Data Connector Editor. Defaults to true if "credential" is "password" or "sensitive" is true and credential is not set.

**JMP Versión agregada:** 19

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

### Funciones

#### Constructores

#### __init__

**Sintaxis:** fields = jmp.DataConnectorGroupedFields([("Group 1 Name", GROUP_1_FIELDS), ("Group 2 Name", GROUP_2_FIELDS), ...])

**Descripción:** jmp.DataConnectorGroupedFields defines fields in named groups. The groups are passed as a list of pairs. The first element of each pair is the name of the group, and the second is a dictionary with the fields. This dictionary has the same format as one used directly as the value for jmp.DataConnectorType.fields.



The use of groups affects the fields&apos; presentation in the data connector editor but not their programmatic access. The group name is used only in the UI, so the advice for field names to avoid characters that should not be used in JSL names does not apply.

**JMP Versión agregada:** 19

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

### Funciones

#### Propiedades

#### fields

**Sintaxis:** fields = {"Name 1": TYPE_1 | jmp.DataConnectorField(...), "Name 2": TYPE_2 | jmp.DataConnectorField(...), ...} | jmp.DataConnectorGroupedFields(...)

**Descripción:** Subclasses must define a class-level variable named "fields" that specifies the configuration options for this type. It should be a dict or a jmp.DataConnectorGroupedFields object.



The keys of the dict are the names of the configuration options, which are exposed in JSL and the editor. They should be formatted like JSL identifiers. The value corresponding to each key is the type of the field, such as str or int, or a jmp.DataConnectorField object.



The supported types include bool, int, and str. Optional versions of these, such as typing.Optional[bool] or bool | None for bool, are also supported. A missing value is represented by None.

**JMP Versión agregada:** 19

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

### Funciones

#### Métodos

#### get_schemas

**Sintaxis:** def get_schemas(self) -&gt; Sequence[str] | None:

**Descripción:** Subclasses can override this function to provide a list of the schemas in the data source. If this function is not overridden or it returns None, the data source is assumed to not support schemas.

**JMP Versión agregada:** 19

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

**Sintaxis:** def get_tables(self, schema: str) -&gt; Sequence[str]:

**Descripción:** Subclasses should override this function to provide a list of the tables in the data source. If schemas are supported, this list should include only the tables under the schema that is passed. If schemas are not supported, the schema parameter should be ignored.

**JMP Versión agregada:** 19

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

**Sintaxis:** def open_table(self, schema: str, table: str) -&gt; jmp.DataTable | str:

**Descripción:** Subclasses should override this function to get the table data for the named table. If schemas are not supported, the value of the schema argument can be ignored. The function should return a jmp.DataTable or a string containing a path to a file in a data format supported by JMP.



If returning a data table directly, the table should be created privately. If returning a path string, JMP opens the table itself and captures the settings that it used, preserving them in Query Builder scripts.

**JMP Versión agregada:** 19

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

**Sintaxis:** def open_table_with_settings(self, schema: str, table: str, settings: str | None) -&gt; (jmp.DataTable, str | None):

**Descripción:** Las subclases pueden sobrescribir esta función en lugar de open_table para gestionar la configuración de apertura de la tabla de forma personalizada. Esta función es similar a open_table, pero también se invoca con la configuración existente, si la hay. Debe devolver una tabla de datos, y también debe devolver la nueva configuración, si la hay. La configuración faltante se indica mediante None.

**JMP Versión agregada:** 19

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

### Funciones

#### Asignación

**Descripción:** El objeto DataTable.Column es compatible con el protocolo de asignación de Python. Proporciona los operadores de arreglo [] usando el índice numérico de fila.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.DataTable('Names', 5)
dt.new_column('First Name', jmp.DataType.Character)
dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]
for i in range(0, dt.nrows):
    print( dt[0][i] )

```

#### Conceptos

#### Constructores

#### Elementos especiales

#### Igualdad

**Descripción:** El objeto Column es compatible con las comprobaciones de igualdad y desigualdad. Dado que un objeto DataTable.Column es en realidad una referencia a una columna de una tabla de datos dinámica, varios objetos Column podrían apuntar a la misma columna activa. Las comprobaciones de la prueba de igualdad == y desigualdad != no comparan el contenido, sino que comprueban si dos objetos DataTable.Column apuntan a la misma columna.

**JMP Versión agregada:** 18

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

#### Propiedades

#### Secuencia

**Descripción:** DataTable.Column se comporta como una secuencia de Python. Esto permite iterar sobre los valores de la columna.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.DataTable('Names', 5)
dt.new_column('First Name', jmp.DataType.Character)
dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]
for n in dt[0]:
    print( n )

```

#### Segmento

**Descripción:** El operador de segmento se utiliza como parámetro de la operación [ ] obtener elemento y está compuesto por start:stop:step. Estos parámetros son opcionales. El valor devuelto será una lista de valores, empezando por el valor start, sin incluir el valor stop incrementado por el valor step. Los números negativos para start o stop, son índices basados en 1 desde el final de la secuencia. Un valor negativo de [step] disminuye el recuento de pasos, en lugar de incrementarlo. Los valores vacíos tienen valores predeterminados apropiados. [::-1] devolverá la lista completa en orden inverso, y [:] devolverá el arreglo completo en el orden actual de los elementos.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( [c.name for c in dt[:]] )         # print list of column names default step = 1
reverse_cols = dt[::-1]                  # list of column names in reverse order
print( [c.name for c in reverse_cols] )  # print reversed column name list
print( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### __eq__

**Sintaxis:** column1 == column2

**Descripción:** Prueba de igualdad, devuelve verdadero cuando dos objetos jmp.DataTable.Column apuntan a la misma columna de una tabla de datos JMP. Esto no comprueba que el contenido coincida, sino que las dos variables apunten exactamente a la misma columna.

**JMP Versión agregada:** 18

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

**Sintaxis:** value = column[ index ]

**Descripción:** Proporciona el operador [] para obtener el valor de un objeto jmp.DataTable.Column de la columna con el índice basado en 0.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
col = dt[0]
for i in range ( len(col) ):
    print( col[i] )

```

#### __init__

**Sintaxis:** Column( dt_obj, name | index)

**Descripción:** Crea un objeto de columna nuevo que apunta a una columna específica de una tabla de datos. Se requiere un objeto jmp.DataTable para el parámetro dt_obj y un nombre o índice de columna válidos.

**JMP Versión agregada:** 18

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

**Sintaxis:** count = len( column )

**Descripción:** Devuelve el número de columnas de la tabla.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
print( len( dt['name'] ) )

```

#### __ne__

**Sintaxis:** column1 != column2

**Descripción:** Prueba de desigualdad, devuelve verdadero cuando dos objetos jmp.DataTable.Column no apuntan a la misma columna de una tabla de datos. Esto no comprueba que el contenido coincida, sino que los dos objetos no apunten exactamente a la misma columna.

**JMP Versión agregada:** 18

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

**Sintaxis:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**Descripción:** Proporciona el operador [] para establecer valores en una columna que obtenga un objeto jmp.DataTable.Column de la tabla en función del nombre de columna o el índice basado en 0.

**JMP Versión agregada:** 18

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

**Sintaxis:** str( column_obj )

**Descripción:** Devuelve una representación en forma de cadena que contiene información de resumen acerca de la columna de la tabla de datos.

**JMP Versión agregada:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(dt[0])

```

#### data_length

**Sintaxis:** col_obj.data_length

**Descripción:** Propiedad que devuelve la longitud de los datos del campo de columna. Este valor puede ser 0, 1, 2, 4 u 8 bytes. 0 es el valor predeterminado e implica que se han utilizado 8 bytes para los campos numéricos de la tabla de datos.

**JMP Versión agregada:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f'Data length of dt[-1] (weight column): {dt[-1].data_length}')

```

#### display_width

**Sintaxis:** col_obj.display_widthcol_obj.display_width = &lt;int&gt;

**Descripción:** Cambia el ancho de visualización de la columna.

**JMP Versión agregada:** 19

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
jmp.run_jsl('Wait( 0 );')
print(dt[0].display_width)
dt[0].display_width = 100
print(dt[0].display_width)

```

#### dtype

**Sintaxis:** col_obj.dtype

**Descripción:** Propiedad que devuelve el valor de enumeración del tipo de datos de la columna.

**JMP Versión agregada:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f"Data Type of dt['age']: {dt['age'].dtype}")
dt['age'].dtype = jmp.DataType.Character 
print(f"Updated Data Type of dt['age']: {dt['age'].dtype}")

```

#### format

**Sintaxis:** col_obj.formatcol_obj.format = tuple&lt; &lt;string&gt;|&lt;int&gt;, ... &gt;

**Descripción:** Obtener formato

**JMP Versión agregada:** 19

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

**Sintaxis:** col_obj.formulacol_obj.formula = &lt;Expression | string&gt;

**Descripción:** Establece una fórmula de columnas dado un objeto Expression o una cadena de caracteres que representa un JSL válido.

**JMP Versión agregada:** 19

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

**Sintaxis:** col_obj.mtype

**Descripción:** Propiedad que devuelve el valor de enumeración del tipo de modelización de la columna.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f"Modeling Type of dt['age']: {dt['age'].mtype}") 
dt['age'].mtype = jmp.ModelingType.Nominal
print(f"Updated Modeling Type of dt['age']: {dt['age'].mtype}")

```

#### name

**Sintaxis:** col_obj.namecol_obj.name = &lt;string&gt;

**Descripción:** Propiedad del nombre de columna, que se puede leer y establecer.

**JMP Versión agregada:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
print(dt[0].name)
dt[0].name = 'First Name'

```

## jmp > DataTable

### Funciones

#### Asignación

**Descripción:** El objeto DataTable es compatible con el protocolo de asignación de Python. Proporciona los operadores de arreglo [], y el uso de un nombre de columna o un valor numérico como índice de columna.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( f'Column name: {dt[1].name}' )
print( f"Column name: {dt['age'].name}" )

```

#### Conceptos

#### Constructores

#### Elementos especiales

#### Igualdad

**Descripción:** El objeto DataTable es compatible con las comprobaciones de igualdad y desigualdad. Dado que un objeto DataTable es en realidad una referencia a una tabla de datos dinámica, varios objetos podrían apuntar a la misma tabla de JMP. Las comprobaciones de la prueba de igualdad == y desigualdad != no comparan el contenido, sino que comprueban si dos objetos DataTable apuntan a la misma tabla de JMP.

**JMP Versión agregada:** 18

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

#### Métodos

#### Propiedades

#### Secuencia

**Descripción:** El objeto DataTable se comporta como una secuencia de Python. Esto permite iterar en las columnas de la tabla.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
for n in dt:
    print( n.name )

```

#### Segmento

**Descripción:** El operador de segmento se utiliza como parámetro de la operación [ ] obtener elemento y está compuesto por start:stop:step. Estos parámetros son opcionales. El valor devuelto será una lista de valores, empezando por el valor start, sin incluir el valor stop incrementado por el valor step. Los números negativos para "start" o "stop", son índices basados en 1 desde el final de la secuencia. Un valor negativo de "step" disminuye el recuento de pasos, en lugar de incrementarlo. Los valores vacíos tienen valores predeterminados apropiados. [::-1] devolverá la lista completa en orden inverso, y [:] devolverá el arreglo completo en el orden actual de los elementos.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( [c.name for c in dt[:]] )         # print list of column names default step = 1
reverse_cols = dt[::-1]                  # list of column names in reverse order
print( [c.name for c in reverse_cols] )  # print reversed column name list
print( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### __eq__

**Sintaxis:** table1 == table2

**Descripción:** Prueba de igualdad, devuelve verdadero cuando dos objetos jmp.DataTable apuntan a la misma tabla de datos JMP. Esto no comprueba que el contenido coincida, sino que las dos variables apunten exactamente a la misma tabla.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt2 = jmp.current()
iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")
print( dt == dt2 )
print( dt == iris)

```

#### __getitem__

**Sintaxis:** column = dt[&apos;name&apos; | index]

**Descripción:** Proporciona el operador [] para obtener un objeto jmp.DataTable.Column de la tabla en función del nombre de columna o el índice basado en 0.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
column = dt[0]
column2 = dt['age']
print(column)
print(column2)

```

#### __init__

**Sintaxis:** dt = jmp.DataTable(&lt;name=&apos;table_name&apos;&gt;, &lt;rows=n&gt;, &lt;visibility=&apos;Invisible&apos; | &apos;Private&apos; )

**Descripción:** Crea una tabla de datos nueva con el nombre "table_name" y n filas. Los parámetros y las palabras clave son opcionales, a menos que solo se especifiquen filas o se invierta el orden de los parámetros.

**JMP Versión agregada:** 18

**Con nombre y filas**

```python

import jmp
dt = jmp.DataTable('Powered By Python', 40)

```

**Con palabras clave**

```python

import jmp
dt = jmp.DataTable(rows=40, name='Powered By Python')

```

**Invisible**

```python

import jmp
dt = jmp.DataTable('Powered By Python', 40, visibility='Invisible')

```

**Privada**

```python

import jmp
dt = jmp.DataTable('Powered By Python', 40, visibility='private')

```

**Tabla vacía**

```python

import jmp
dt = jmp.DataTable()

```

**Tabla vacía con nombre**

```python

import jmp
dt = jmp.DataTable('Powered By Python')

```

#### __len__

**Sintaxis:** count = len(dt)

**Descripción:** Devuelve el número de columnas de la tabla.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
print( len(dt) )

```

#### __ne__

**Sintaxis:** table1 != table2

**Descripción:** Prueba de desigualdad, devuelve verdadero cuando dos objetos jmp.DataTable no apuntan a la misma tabla de datos. Esto no comprueba que el contenido coincida, sino que los dos objetos no apunten exactamente a la misma tabla.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt2 = jmp.current()
iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")
print( dt != dt2 )
print( dt != iris)

```

#### __setitem__

**Sintaxis:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**Descripción:** Proporciona el operador [] para establecer valores en una columna que obtenga un objeto jmp.DataTable.Column de la tabla en función del nombre de columna o el índice basado en 0.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.DataTable('Names', 5)
dt.new_column('First Name', jmp.DataType.Character)
dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]
print( dt[0][:] )

```

#### __str__

**Sintaxis:** str( data_table )

**Descripción:** Devuelve una representación en forma de cadena de la información de resumen acerca del objeto de tabla de datos.

**JMP Versión agregada:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(dt)

```

#### add_rows

**Sintaxis:** add_rows(rows, &lt;at=-1&gt;)

**Descripción:** Añade filas al objeto DataTable. rows es obligatorio. at es opcional. Si at es 0, insértelo al principio de la tabla. Si es <0, insértelo al final de la tabla. De lo contrario, si at es m, insértelo en la fila m (indexación basada en 0).

**JMP Versión agregada:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.add_rows(5)
dt.add_rows(1, at=0)
dt.add_rows(2, at=12) # 0-based indexing

```

#### cell_height

**Sintaxis:** dt.cell_heightdt.cell_height = &lt;int&gt;

**Descripción:** Establece la altura de visualización de cada celda de la tabla de datos.

**JMP Versión agregada:** 19

```python

import jmp
dt = jmp.DataTable()
jmp.run_jsl('Wait(0)')
print(dt.cell_height)
dt.cell_height = 40
print(dt.cell_height)

```

#### close

**Sintaxis:** dt.close( &lt;save= True | False&gt;)

**Descripción:** Cierra el método en el objeto DataTable. Al igual que JSL, guarda el archivo de forma predeterminada si la llamada no contiene parámetros. Para abandonar un archivo como el creado a modo de tabla temporal, utilice dt.close(False) o dt.close(save=False) para mayor claridad.

**JMP Versión agregada:** 18

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

**Sintaxis:** delete_columns(&apos;name&apos;, ..., &apos;name&apos;)

**Descripción:** El método delete_columms() funciona como el mensaje de JSL equivalente Delete Columns(). Los argumentos aceptables son: sin argumentos, nombre de columna o nombres separados por comas y una lista de Python con nombres de columna. Si no se utilizan argumentos, se eliminan las columnas seleccionadas.

**JMP Versión agregada:** 19

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

**Sintaxis:** dt.namedt.name = &apos;string&apos;

**Descripción:** La propiedad name sirve tanto para establecer como para obtener el nombre de la tabla de datos.

**JMP Versión agregada:** 18

```python

import jmp
dt = jmp.DataTable()
print(dt.name)
dt.name = 'Powered by Python'

```

#### ncols

**Sintaxis:** dt.ncols

**Descripción:** Propiedad de solo lectura que devuelve el número de columnas de la tabla.

**JMP Versión agregada:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f'Number of columns: {dt.ncols}')

```

#### new_column

**Sintaxis:** dt.new_column( name=&apos;column_name&apos;, dtype=jmp.Numeric | .Character | .RowState | .Expression, mtype=jmp.ModelingType.Continuous | ... | TypeNone dlen=len cell type&apos;s data length especially for numeric 8(double),4(int32),2(int16),1(int8) where=n insert column after column n

**Descripción:** Cree una nueva columna de tabla de datos, especificando opcionalmente el nombre, el tipo de columna, la longitud de los datos y el tipo de modelización.

**JMP Versión agregada:** 18

**Clase nueva**

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

**Clase pequeña**

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

**Sintaxis:** dt.nrows

**Descripción:** Propiedad de solo lectura que devuelve el número de filas de la tabla.

**JMP Versión agregada:** 18

```python

import jmp
dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(f'Number of rows: {dt.nrows}')

```

#### row_states

**Sintaxis:** dt.row_statesdt.row_states = [state1, state2, ..., stateN]

**Descripción:** Establece los estados de fila de todas las filas de la tabla de datos.

**JMP Versión agregada:** 19

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

**Sintaxis:** dt.save( &lt; path=&apos;file_path&apos; &gt; )

**Descripción:** Guarde la tabla de datos con el nombre de la tabla en el directorio actual. El argumento de ruta opcional permite guardarla en una ubicación distinta o con un nombre diferente.

**JMP Versión agregada:** 18

```python

import jmp

dt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")
dt[0][0] = 'Katie'
dt.save('BC_lowercase.jmp')

```

#### scripts

**Sintaxis:** dt.scriptsdt.scripts = &lt;dict&lt;str : &lt;str | Expression&gt;&gt;&gt;

**Descripción:** La propiedad de scripts permite leer y escribir scripts de tablas de datos.

**JMP Versión agregada:** 19

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

**Sintaxis:** select_columns(&apos;name&apos;, ..., &apos;name&apos;)

**Descripción:** El método select_columms() funciona como el mensaje Select Columns() equivalente de JSL. Los argumentos aceptables son: nombre de columna o nombres separados por comas; una lista de Python con los nombres de columna.

**JMP Versión agregada:** 19

**Ejemplo 1**

```python

import jmp


dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.select_columns('weight')
dt.select_columns('name', 'sex')
dt.select_columns(['age', 'height'])
# all columns should be selected.

```

**Todo**

```python

import jmp


dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
dt.select_columns([col.name for col in dt])
# all columns should be selected.

```

## jmp > Expression

### Funciones

#### Conceptos

#### Constructores

#### Elementos especiales

#### Igualdad

**Descripción:** El objeto Expression admite comprobaciones de igualdad y desigualdad. Cuando se comprueba la igualdad entre dos objetos Expression, se comparan los valores y se devuelve si son iguales o no. Se trata de una comparación de los valores del objeto Expression y no de la evaluación de los valores.

**JMP Versión agregada:** 19

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

#### Propiedades

#### __eq__

**Sintaxis:** expression1 == expression2

**Descripción:** La prueba de igualdad devuelve true si el objeto Expression tiene el mismo contenido que otro objeto Expression y devuelve false en caso contrario.

**JMP Versión agregada:** 19

```python

import jmp

expr1 = jmp.Expression('1 + 1')
expr2 = jmp.Expression('2 + 0')
expr3 = jmp.Expression('1 + 1')
print(expr1 == expr2)
print(expr1 == expr3)

```

#### __init__

**Sintaxis:** Expression(jsl=&lt;string&gt;)

**Descripción:** Crea un nuevo objeto Expression.

**JMP Versión agregada:** 19

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

**Sintaxis:** expression1 != expression2

**Descripción:** La prueba de desigualdad devuelve true si el objeto Expression tiene un contenido distinto al de otro objeto Expresión y devuelve false en caso contrario.

**JMP Versión agregada:** 19

```python

import jmp

expr1 = jmp.Expression('1 + 1')
expr2 = jmp.Expression('2 + 0')
expr3 = jmp.Expression('1 + 1')
print(expr1 != expr2)
print(expr1 != expr3)

```

#### __str__

**Sintaxis:** str( expr_obj )

**Descripción:** Devuelve una representación en forma de cadena que contiene toda la información sobre el objeto Expression.

**JMP Versión agregada:** 19

```python

import jmp
expr = jmp.Expression(':Height / :Weight')
print(expr)

```

#### jsl

**Sintaxis:** expr_obj.jslexpr_obj.jsl = &lt;string&gt;

**Descripción:** La propiedad Expression de JSL, es legible y configurable.

**JMP Versión agregada:** 19

```python

import jmp

expr = jmp.Expression(jsl='0 + 0')
print(expr)
expr.jsl = '2 + 2'
print(expr)

```

## jmp > Image

### Funciones

#### Conceptos

#### Constructores

#### Elementos especiales

#### Igualdad

**Descripción:** El objeto Image admite comprobaciones de igualdad y desigualdad. Al comparar la igualdad entre dos objetos Image, se comparan los valores y se devuelve si son iguales o no.

**JMP Versión agregada:** 19

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

**Sintaxis:** image1 == image2

**Descripción:** La prueba de igualdad devuelve true si el objeto Image tiene el mismo contenido que otro objeto Image y devuelve false en caso contrario.

**JMP Versión agregada:** 19

```python

import jmp

image1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')
image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')
print(image1 == image2)
print(image1 == image3)

```

#### __init__

**Sintaxis:** jmp.Image(path=&lt;string&gt;)

**Descripción:** Crea un nuevo objeto Image.

**JMP Versión agregada:** 19

```python

import jmp

image = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
print(f'Image: {image}')
jmp.open(image)

```

#### __ne__

**Sintaxis:** image1 != image2

**Descripción:** La prueba de desigualdad devuelve true si el objeto Image tiene un contenido distinto al de otro objeto Image y devuelve false en caso contrario.

**JMP Versión agregada:** 19

```python

import jmp

image1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')
image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')
print(image1 != image2)
print(image1 != image3)

```

#### __str__

**Sintaxis:** str( image_obj )

**Descripción:** Devuelve una representación en forma de cadena que contiene toda la información sobre el objeto Image.

**JMP Versión agregada:** 19

```python

import jmp
image = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')
print(image)

```

## jmp > Project

### Funciones

#### Constructores

#### Elementos especiales

#### Funciones

#### Propiedades

#### __init__

**Sintaxis:** prj = jmp.Project(&lt;name=&apos;Project name&apos;&gt;)

**Descripción:** Crear un nuevo objeto Project para acceder a los proyectos y archivos de JMP.

**JMP Versión agregada:** 19

**Nombre del proyecto**

```python

import jmp

prj = jmp.Project()
print(prj.name)

```

**Proyecto vacío**

```python

import jmp
prj = jmp.Project()

```

**Proyecto vacío con nombre**

```python

import jmp
prj = jmp.Project('My Project')

```

#### __str__

**Sintaxis:** str( project )

**Descripción:** Devuelve la representación del proyecto en forma de cadena de caracteres.

**JMP Versión agregada:** 19

```python

import jmp

prj = jmp.Project()
print( prj )

```

#### contents

**Sintaxis:** prj.name

**Descripción:** Devuelve una lista de los nombres de archivo que contiene el proyecto.

**JMP Versión agregada:** 19

```python

import jmp

prj = jmp.Project()
print(prj.contents)

```

#### exists

**Sintaxis:** prj.exists(&apos;file_name&apos;)

**Descripción:** Toma un nombre de archivo y valida si el archivo existe dentro del proyecto.

**JMP Versión agregada:** 19

```python

import jmp

prj = jmp.Project()
print( prj.exists('myfile.data') )

```

#### extract

**Sintaxis:** prj.extract(&apos;file_name&apos;)

**Descripción:** Toma un nombre de archivo y extrae el archivo del proyecto en el directorio temporal del proyecto.

**JMP Versión agregada:** 19

```python

import jmp

prj = jmp.Project()
success = prj.extract('myfile.data')

```

#### extract_all

**Sintaxis:** prj.extract_all()

**Descripción:** Extrae todos los archivos del proyecto en el directorio temporal del proyecto.

**JMP Versión agregada:** 19

```python

import jmp

prj = jmp.Project()
success = prj.extract_all()

```

#### is_extracted

**Sintaxis:** prj.is_extracted(&apos;file_name&apos;)

**Descripción:** Toma un nombre de archivo y comprueba si el archivo ya se ha extraído del archivo del proyecto.

**JMP Versión agregada:** 19

```python

import jmp

prj = jmp.Project()
print( prj.is_extracted('myfile.data') )

```

#### name

**Sintaxis:** prj.name

**Descripción:** La propiedad nombre del proyecto es de solo lectura.

**JMP Versión agregada:** 19

```python

import jmp

prj = jmp.Project()
print(prj.name)

```

## jmp > RowState

### Funciones

#### Conceptos

#### Constructores

#### Elementos especiales

#### Igualdad

**Descripción:** El objeto RowState admite comprobaciones de igualdad y desigualdad. Cuando se compara la igualdad entre dos objetos RowState, se comparan los valores y se devuelve si son iguales o no. Si dos RowStates tienen el mismo contenido, aunque se hayan inicializado de forma distinta, se seguirá devolviendo true.

**JMP Versión agregada:** 19

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

#### Propiedades

#### __eq__

**Sintaxis:** rs1 == rs2

**Descripción:** La prueba de igualdad devuelve true si el objeto RowState tiene el mismo contenido que otro objeto RowState y devuelve false en caso contrario.

**JMP Versión agregada:** 19

```python

import jmp

rs1 = jmp.RowState(color=4, marker=2, selected=True)
rs2 = jmp.RowState(color=11, excluded=True, labeled=True)
rs3 = jmp.RowState(value=1057)
print(rs1 == rs2)
print(rs1 == rs3)

```

#### __init__

**Sintaxis:** jmp.RowState(selected?=&lt;boolean&gt;, hidden?=&lt;booleane&gt;, labeled?=&lt;boolean&gt;, excluded?=&lt;boolean&gt;, color?=&lt;int&gt;, marker?=&lt;int&gt;)jmp.RowState(value=&lt;int&gt;)

**Descripción:** Crea un nuevo objeto RowState. RowState es un objeto que contiene cualquiera de las seis características que pueden tener las filas de una tabla de datos de JMP: seleccionadas, ocultas, excluidas, etiquetadas, coloreadas y marcadas.

**JMP Versión agregada:** 19

```python

import jmp

from jmp import RowState
rs = RowState(color=4, marker=2, selected=True)
print(f'Row State: {rs}')

rs_from_value = RowState(value=33)
print(f'Row State from Value: {rs_from_value}')

```

#### __ne__

**Sintaxis:** image1 != image2

**Descripción:** La prueba de desigualdad devuelve true si el objeto RowState tiene un contenido distinto al de otro objeto RowState y devuelve false en caso contrario.

**JMP Versión agregada:** 19

```python

import jmp

rs1 = jmp.RowState(color=4, marker=2, selected=True)
rs2 = jmp.RowState(color=11, excluded=True, labeled=True)
rs3 = jmp.RowState(value=1057)
print(rs1 != rs2)
print(rs1 != rs3)

```

#### __str__

**Sintaxis:** str( rs_obj )

**Descripción:** Devuelve una representación en forma de cadena que contiene toda la información sobre el objeto RowState.

**JMP Versión agregada:** 19

```python

import jmp
rs = jmp.RowState(color=11, excluded=True, labeled=True)
print(rs)

```

#### color

**Sintaxis:** rs_obj.colorrs_obj.color = &lt;int&gt;

**Descripción:** La propiedad RowState de color; se puede leer y configurar. Los colores se eligen de 0 a 84. (0-15 básicos, 16-31 oscuros, 32-47 claros, 48-63 muy oscuros, 64-79 muy claros y 80-84 grises).

**JMP Versión agregada:** 19

```python

import jmp

rs = jmp.RowState(color=5)
print(rs)
rs.color = 0
print(rs)

```

#### excluded

**Sintaxis:** rs_obj.excludedrs_obj.excluded = &lt;boolean&gt;

**Descripción:** La propiedad RowState excluida; se puede leer y configurar.

**JMP Versión agregada:** 19

```python

import jmp

rs = jmp.RowState(excluded=True)
print(rs)
rs.excluded = False 
print(rs)

```

#### hidden

**Sintaxis:** rs_obj.hiddenrs_obj.hidden = &lt;boolean&gt;

**Descripción:** La propiedad RowState oculta; se puede leer y configurar.

**JMP Versión agregada:** 19

```python

import jmp

rs = jmp.RowState(hidden=True)
print(rs)
rs.hidden = False 
print(rs)

```

#### labeled

**Sintaxis:** rs_obj.labeledrs_obj.labeled = &lt;boolean&gt;

**Descripción:** La propiedad RowState etiquetada; se puede leer y configurar.

**JMP Versión agregada:** 19

```python

import jmp

rs = jmp.RowState(labeled=True)
print(rs)
rs.labeled = False 
print(rs)

```

#### marker

**Sintaxis:** rs_obj.markerrs_obj.marker = &lt;int&gt;

**Descripción:** La propiedad RowState de marcador; se puede leer y configurar. Los marcadores se eligen de 0 a 31.

**JMP Versión agregada:** 19

```python

import jmp

rs = jmp.RowState(marker=3)
print(rs)
rs.marker = 0
print(rs)

```

#### selected

**Sintaxis:** rs_obj.selectedrs_obj.selected = &lt;boolean&gt;

**Descripción:** La propiedad RowState seleccionada; se puede leer y configurar.

**JMP Versión agregada:** 19

```python

import jmp

rs = jmp.RowState(selected=True)
print(rs)
rs.selected = False 
print(rs)

```

## jmp > globals

### Funciones

#### Conceptos

#### Elementos especiales

#### Iteration

**Descripción:** La propiedad global permite iterar sobre el conjunto de valores.

**JMP Versión agregada:** 19

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

#### Métodos

#### __getitem__

**Sintaxis:** value = jmp.globals[&apos;name&apos;]

**Descripción:** Obtiene una variable global de JSL como objeto de Python. Devuelve None si no es posible encontrar el objeto. Devuelve un tipo opaco para los tipos de datos que no se pueden entregar. Puede transferir los mismos tipos de objetos que Python Send() y Python Get().

**JMP Versión agregada:** 19

```python

import jmp

jmp.run_jsl('''
    pi = 3.1415929
''')
print( jmp.globals['pi'] )

```

#### __len__

**Sintaxis:** length = len( jmp.globals )

**Descripción:** Devuelve el número de símbolos en el entorno de JSL global.

**JMP Versión agregada:** 19

```python

import jmp

print( len( jmp.globals ) )
jmp.globals['pi'] = 3.1415927
print( len( jmp.globals ) )
jmp.globals['e'] =  2.7182818
print( len( jmp.globals ) )

```

#### __setitem__

**Sintaxis:** jmp.globals[&apos;name&apos;] = value

**Descripción:** Due to Python scoping and the design of Python Get(), only variables in the Python global scope are accessible with Python Get(). The jmp.globals dictionary provides the capacity to directly set or create a JSL variable from Python code. The value type can be any Python type currently supported by Python Get().

**JMP Versión agregada:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.run_jsl('''
    show(pi)
''')

```

#### __str__

**Sintaxis:** str(jmp.globals)

**Descripción:** Muestra el contenido de los globales en una representación de diccionario. Tenga en cuenta que el diccionario de globales lo utiliza el propio JMP, por lo que puede haber entradas adicionales.

**JMP Versión agregada:** 19

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

**Sintaxis:** value = jmp.globals.get(&apos;name&apos;)

**Descripción:** La función get() devuelve el valor de la clave proporcionada. Al igual que con JSL, la clave es una coincidencia aproximada.

**JMP Versión agregada:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['an A'] = 'Annie'
print( jmp.globals.get('pi') )                        
print( jmp.globals.get('ana') )

```

#### items

**Sintaxis:** item_list = jmp.globals.items()

**Descripción:** Devuelve una lista de pares clave-valor en el espacio de nombres. Tenga en cuenta que el diccionario de globales lo utiliza el propio JMP, por lo que puede haber entradas adicionales.

**JMP Versión agregada:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['bB'] = 'Bumble Bee'
print( jmp.globals.items() )

```

#### keys

**Sintaxis:** key_list = jmp.globals.keys()

**Descripción:** Devuelve una lista de claves en el espacio de nombres. Tenga en cuenta que el diccionario de globales lo utiliza el propio JMP, por lo que puede haber entradas adicionales.

**JMP Versión agregada:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['bB'] = 'Bumble Bee'
print( jmp.globals.keys() )

```

#### values

**Sintaxis:** value_list = jmp.globals.values()

**Descripción:** Devuelve los valores en el espacio de nombres. Tenga en cuenta que el diccionario de globales lo utiliza el propio JMP, por lo que puede haber entradas adicionales.

**JMP Versión agregada:** 19

```python

import jmp

jmp.globals['pi'] = 3.1415927
jmp.globals['bB'] = 'Bumble Bee'
print( jmp.globals.values() )

```

## jmp > here

### Funciones

#### Conceptos

#### Elementos especiales

#### Iteration

**Descripción:** La propiedad here permite iterar sobre los valores del espacio de nombres "here".

**JMP Versión agregada:** 19

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

#### Métodos

#### __getitem__

**Sintaxis:** value = jmp.here[&apos;name&apos;]

**Descripción:** Gets a JSL variable from the current &apos;here&apos; namespace as a Python object. Returns None if the object cannot be found, or an opaque type for data types that cannot yet be handled. Providing direct retrieval of a JSL variable into the local Python scope. Supports transfers of the same types of objects as Python Send(). Note that in JSL namespace scoping, the &apos;here&apos; namespace is local to script submission, and code submitted from different script windows will have separate &apos;here&apos; namespaces. Code that includes another script has a single &apos;here&apos; namespace. This shared namespace also exists for a JSL script running Python via Submit() or Execute(), Python scripts calling run_jsl().

**JMP Versión agregada:** 19

**Ejemplo 1**

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

**Sintaxis:** length = len( jmp.here )

**Descripción:** Devuelve el número de símbolos en el espacio de nombres "here" de JSL.

**JMP Versión agregada:** 19

```python

import jmp

print( len( jmp.here ) )
jmp.here['pi'] = 3.1415927
print( len( jmp.here ) )
jmp.here['e'] =  2.7182818
print( len( jmp.here ) )

```

#### __setitem__

**Sintaxis:** jmp.here[&apos;name&apos;] = value

**Descripción:** Provides the means to set a value into the JSL script&apos;s &apos;here&apos; namespace. This allows sending back a value that could not be reached by Python Get(). Only variables in the Python global scope can be seen by Python Get(). Supports same object types as Python Get(). Note on JSL namespace scoping, the &apos;here&apos; namespace is local to the script submission.  Code submitted from different script windows will have separate &apos;here&apos; namespaces. Code including another script will have a single &apos;here&apos; namespace. This holds true for a JSL script running Python via Submit() or Execute(), Python scripts calling run_jsl().

**JMP Versión agregada:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.run_jsl('''
    Names Default to Here(1);
    show(pi)
''')

```

#### __str__

**Sintaxis:** str(jmp.here)

**Descripción:** Muestra el contenido de &apos;here&apos; en una representación de diccionario.

**JMP Versión agregada:** 19

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

**Sintaxis:** value = jmp.here.get(&apos;name&apos;)

**Descripción:** La función get() devuelve el valor de la clave proporcionada. Al igual que con JSL, la clave es una coincidencia aproximada.

**JMP Versión agregada:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.get('pi') )                        
print( jmp.here.get('b  b') )

```

#### items

**Sintaxis:** item_list = jmp.here.items()

**Descripción:** Devuelve una lista de pares clave-valor en el espacio de nombres.

**JMP Versión agregada:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.items() )

```

#### keys

**Sintaxis:** key_list = jmp.here.keys()

**Descripción:** Devuelve una lista de las claves en el espacio de nombres.

**JMP Versión agregada:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.keys() )

```

#### values

**Sintaxis:** value_list = jmp.here.values()

**Descripción:** Devuelve los valores en el espacio de nombres.

**JMP Versión agregada:** 19

```python

import jmp

jmp.here['pi'] = 3.1415927
jmp.here['bB'] = 'Bumble Bee'
print( jmp.here.values() )

```

## jmp > live

### Funciones

#### Funciones

#### get_credentials()

**Sintaxis:** jmp.live.get_credentials(&lt;credential_name&gt;)

**Descripción:** En los scripts de actualización de datos de JMP Live, devuelve las credenciales con el nombre dado (o, si no se proporciona ningún nombre, las credenciales predeterminadas) asignadas al script. El valor devuelto es un diccionario con las claves "username", "password" y "key_file_path".

**JMP Versión agregada:** 19

```python

import jmp

dt = jmp.DataTable()

credentials = jmp.live.get_credentials()

# login to external data source using credentials['username'] and credentials['password']
# create dt using obtained data

jmp.live.set_result(dt)

```

#### get_import_file_path()

**Sintaxis:** jmp.live.get_import_file_path()

**Descripción:** En los scripts de importación de datos de JMP Live, devuelve la ruta del archivo de importación cargado.

**JMP Versión agregada:** 19

```python

import jmp

dt = jmp.DataTable()

importPath = jmp.live.get_import_file_path()
with open(importPath) as importFile:
    # [import data from importFile to dt]

jmp.live.set_result(dt)

```

#### set_result()

**Sintaxis:** jmp.live.set_result()

**Descripción:** En los scripts de actualización e importación de datos de JMP Live, establece la tabla de resultados. Establezca el resultado en None para cancelar la actualización.

**JMP Versión agregada:** 19

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

### Funciones

#### Funciones

#### flush

**Sintaxis:** jmp.log.flush()

**Descripción:** Las funciones log.flush() y log.write() sobrecargan las funciones de flush() y write() stdio y stderr de Python, que en JMP se destinan en gran medida al uso interno, ya que dirigen la salida de Python a las ventanas de registro de JMP y registro incrustado. jmp.log.flush() es una instrucción NOP, y devuelve una cadena vacía.

**JMP Versión agregada:** 18

```python

import jmp

import jmp.log
jmp.log.flush()

```

#### write

**Sintaxis:** jmp.log.write(&apos;message&apos;)

**Descripción:** Las funciones log.flush() y log.write() sobrecargan las funciones de flush() y write() stdio y stderr de Python, que en JMP se destinan en gran medida al uso interno, ya que dirigen la salida de Python a las ventanas de registro de JMP y registro incrustado. Los programas pueden llamar a jmp.log.write(&apos;message&apos;) para enviar explícitamente el mensaje a las ventanas de registro de JMP y registro incrustado.

**JMP Versión agregada:** 18

```python

import jmp

import jmp.log
jmp.log.write('I am a log message.')

```

## jmp

### Funciones

#### ALL_HOME

**Sintaxis:** jmp.ALL_HOME

**Descripción:** El valor correspondiente al directorio $ALL_HOME de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.ALL_HOME)

```

#### BUILTIN_SCRIPTS

**Sintaxis:** jmp.BUILTIN_SCRIPTS

**Descripción:** El valor correspondiente al directorio $BUILTIN_SCRIPTS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.BUILTIN_SCRIPTS)

```

#### Constantes

#### DESKTOP

**Sintaxis:** jmp.DESKTOP

**Descripción:** El valor correspondiente al directorio $DESKTOP de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.DESKTOP)

```

#### DOCUMENTS

**Sintaxis:** jmp.DOCUMENTS

**Descripción:** El valor correspondiente al directorio $DOCUMENTS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.DOCUMENTS)

```

#### DOWNLOADS

**Sintaxis:** jmp.DOWNLOADS

**Descripción:** El valor correspondiente al directorio $DOWNLOADS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.DOWNLOADS)

```

#### DataType

**Sintaxis:** jmp.DataType.enum_value

**Descripción:** jmp.DataType es una enumeración que representa los tipos de datos de una columna de JMP. Se utilizan con la función jmp.DataTable.new_column() para crear columnas que no sean las predeterminadas de tipo Numérico.

**JMP Versión agregada:** 18

```python

import jmp

# for the sake of typing
from jmp import DataType as dType
print('jmp.DataType members:')
print( list(map(lambda c: c.name, dType)) )

```

#### Enumeraciones

#### Funciones

#### HOME

**Sintaxis:** jmp.HOME

**Descripción:** El valor correspondiente al directorio $HOME de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.HOME)

```

#### JMPPRJ

**Sintaxis:** jmp.JMPPRJ

**Descripción:** Devuelve la ruta física del directorio temporal del proyecto. Devuelve el directorio de trabajo actual, o None si el script no se está ejecutando dentro de un proyecto.

**JMP Versión agregada:** 19

```python

import jmp
print(jmp.JMPPRJ)

```

#### ModelingType

**Sintaxis:** jmp.ModelingType.enum_value

**Descripción:** jmp.ModelingType es una enumeración que representa el tipo de modelización o análisis de una columna del PDM. Se utiliza con la función jmp.DataTable.new_column() para crear columnas que no sean las predeterminadas de tipo de modelización Continuo. Tenga en cuenta que TypeNone difiere del tipo de modelización Ninguno de JMP, ya que "None" es una palabra clave de Python.

**JMP Versión agregada:** 18

```python

import jmp

# for the sake of typing
from jmp import ModelingType as mType
print('jmp.ModleingType members:')
print( list(map(lambda c: c.name, mType)) )

```

#### PYTHONW_EXE

**Sintaxis:** jmp.PYTHONW_EXE

**Descripción:** Ruta al ejecutable de Python sin consola instalado en JMP (solo para Windows).

**JMP Versión agregada:** 19

```python

import jmp

import platform
if platform.system() == "Windows":
    print(jmp.PYTHONW_EXE)

```

#### PYTHON_EXE

**Sintaxis:** jmp.PYTHON_EXE

**Descripción:** La ruta del ejecutable de Python instalado en JMP.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.PYTHON_EXE)

```

#### PY_USER_APPDIR

**Sintaxis:** jmp.PY_USER_APPDIR

**Descripción:** La ruta de la ubicación del directorio de usuario que actúa como base del soporte de Python en JMP. El directorio de paquetes del sitio está dentro de esta jerarquía de directorios.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.PY_USER_APPDIR)

```

#### SAMPLE_APPS

**Sintaxis:** jmp.SAMPLE_APPS

**Descripción:** El valor correspondiente al directorio $SAMPLE_APPS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_APPS)

```

#### SAMPLE_DASHBOARDS

**Sintaxis:** jmp.SAMPLE_DASHBOARDS

**Descripción:** El valor correspondiente al directorio $SAMPLE_DASHBOARDS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_DASHBOARDS)

```

#### SAMPLE_DATA

**Sintaxis:** jmp.SAMPLE_DATA

**Descripción:** El valor correspondiente al directorio $SAMPLE_DATA de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_DATA)

```

#### SAMPLE_IMAGES

**Sintaxis:** jmp.SAMPLE_IMAGES

**Descripción:** El valor correspondiente al directorio $SAMPLE_IMAGES de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_IMAGES)

```

#### SAMPLE_IMPORT_DATA

**Sintaxis:** jmp.SAMPLE_IMPORT_DATA

**Descripción:** El valor correspondiente al directorio $SAMPLE_IMPORT_DATA de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_IMPORT_DATA)

```

#### SAMPLE_PROJECTS

**Sintaxis:** jmp.SAMPLE_PROJECTS

**Descripción:** El valor correspondiente al directorio $SAMPLE_PROJECTS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_PROJECTS)

```

#### SAMPLE_SCRIPTS

**Sintaxis:** jmp.SAMPLE_SCRIPTS

**Descripción:** El valor correspondiente al directorio $SAMPLE_SCRIPTS de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.SAMPLE_SCRIPTS)

```

#### TEMP

**Sintaxis:** jmp.TEMP

**Descripción:** El valor correspondiente al directorio $TEMP de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.TEMP)

```

#### USER_APPDATA

**Sintaxis:** jmp.USER_APPDATA

**Descripción:** El valor correspondiente al directorio $USER_APPDATA de JSL.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.USER_APPDATA)

```

#### __jmp_version__

**Sintaxis:** jmp.__jmp_version__

**Descripción:** El número de versión del ejecutable de JMP.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.__jmp_version__)

```

#### __version__

**Sintaxis:** jmp.__version__

**Descripción:** El número de versión del paquete de importación de "jmp". No es la versión de JMP.

**JMP Versión agregada:** 18

```python

import jmp
print(jmp.__version__)

```

#### current

**Sintaxis:** dt = jmp.current()

**Descripción:** Devuelve un objeto DataTable para la tabla de datos JMP actual.

**JMP Versión agregada:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print(jmp.current())

```

#### eval

**Sintaxis:** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**Descripción:** Evalúa el argumento y devuelve el resultado.

**JMP Versión agregada:** 19

```python

import jmp

from jmp import eval, Expression
expression = Expression("2 + 2")
result = eval(expression)
print(result)

```

#### from_dataframe

**Sintaxis:** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;)

**Descripción:** Devuelve un objeto jmp.DataTable desde el marco de datos de una biblioteca compatible con el protocolo.

**JMP Versión agregada:** 19

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

**Sintaxis:** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;)

**Descripción:** Devuelve un objeto jmp.DataTable desde el marco de datos de una biblioteca utilizando el método de conversión de CSV proporcionado.

**JMP Versión agregada:** 19

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

**Sintaxis:** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**Descripción:** Abre un archivo ubicado en file_path. Si el archivo es un archivo .jmp o un archivo que se importa en una tabla de datos de JMP, el objeto devuelto será un objeto DataTable. De lo contrario, devolverá True o False según si la acción es correcta o falla. El parámetro opcional de visibilidad controla si el archivo abierto está oculto y no se puede ver. Invisible es simplemente que está oculto y no se puede ver, aunque sigue apareciendo en el menú de archivos recientes y en la ventana de inicio. Si la tabla es Privada, la referencia devuelta es la única referencia a la tabla, y no aparece en ninguna de las listas de archivos.

**JMP Versión agregada:** 18

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

**Privada**

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

**Script JSL**

```python

import jmp

obj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')
print(obj)

```

#### path_variable

**Sintaxis:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**Descripción:** Devuelve el valor de una variable de ruta, que es un nombre como SAMPLE_DATA, que se sustituye cuando se encuentra en nombres de rutas.

**JMP Versión agregada:** 19

```python

import jmp

path_value = jmp.path_variable('SAMPLE_DATA')
if not path_value:
    print('Invalid path variable.')
else:
    print(path_value)

```

#### r_name

**Sintaxis:** dt = jmp.r_name(jsl_var)

**Descripción:** Establece una correspondencia entre un nombre de variable de JMP y uno de R usando las reglas de denominación de variables de R.

**JMP Versión agregada:** 19

```python

import jmp

rName = jmp.r_name('c d e')
print(rName)

```

#### reset

**Sintaxis:** jmp.reset()

**Descripción:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP Versión agregada:** 19

```python

import jmp

pi = 3.1415927
print(pi)
jmp.reset()
print(pi)

```

#### run_jsl

**Sintaxis:** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**Descripción:** Ejecute secuencias de comandos JSL desde el entorno de Python, incluidas las funciones de interfaz JSL de Python. Cuando el parámetro opcional echo= es False o None impide que el código fuente JSL presentado envíe un eco al registro. Se devuelve un resultado para los mismos tipos de objetos de JSL soportados por Python Send() / Get(). Los fallos de script o los tipos de objeto de JSL no admitidos devuelven None.

**JMP Versión agregada:** 18

**Obtener versión**

```python

import jmp

jmp.run_jsl('Python Get Version();')

```

**Propiedades de columna**

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

**Valor devuelto**

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

**Sintaxis:** dt = jmp.table(&apos;table_name&apos;)

**Descripción:** Devuelve un objeto DataTable para la tabla abierta cuyo nombre sea "table_name".

**JMP Versión agregada:** 18

```python

import jmp

jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')
print( jmp.table('Big Class') )

```

## jmpex > R - module > R - class

### Funciones

#### Constantes

#### Constructores

#### Funciones

#### __init__

**Sintaxis:** jmpex.R.R( &lt;&apos;rpy2&apos;&gt; )

**Descripción:** Función para crear un objeto de clase de extensión de R. Parámetro opcional para especificar el backend para la compatibilidad con R. Actualmente solo se admite &apos;rpy2&apos;. Este es el valor predeterminado si no se especifica ningún argumento.

**JMP Versión agregada:** 19

```python

import jmp

from jmpex.R import R

jr = R()
print(jr.r_version())

```

#### __version__

**Sintaxis:** ver = jmpex.R.R().__version__

**Descripción:** The jmpex package&apos;s R support version.

**JMP Versión agregada:** 19

```python

import jmp

from jmpex.R import R

jr = R()
print(jr.__version__)

```

#### get

**Sintaxis:** pyobj = jmpex.R.R.get( &apos;name&apos; )

**Descripción:** Obtiene la variable con nombre del entorno R y la devuelve a Python utilizando la función r2obj(). Se devuelve un DataFrame de R como pandas.DataFrame.

**JMP Versión agregada:** 19

**Establecer columna**

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

**Establecer tabla de datos**

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

**Vector de cadenas**

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

**Vector numérico**

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

#### is_connected

**Sintaxis:** jmpex.R.R.is_connected( )

**Descripción:** Función estática que está disponible exista o no un objeto de instancia R(). Indica que se ha inicializado el subsistema R.

**JMP Versión agregada:** 19

```python

import jmp

from jmpex.R import R

print(f'R initialized: {R.is_connected()}')
jr = R()
print(f'R initialized: {R.is_connected()}')

```

#### obj2r

**Sintaxis:** jmpex.R.R.obj2r( var )

**Descripción:** Crea un objeto R a partir de un objeto de Python.

**JMP Versión agregada:** 19

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

**Sintaxis:** jmpex.R.R.r2obj( var )

**Descripción:** Crea un objeto de Python normal a partir de un objeto R.

**JMP Versión agregada:** 19

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

**Sintaxis:** ver = jmpex.R.R.r_version( )

**Descripción:** Devuelve la versión de R.

**JMP Versión agregada:** 19

```python

import jmp

from jmpex.R import R

jr = R()
print(f'R Version: {jr.r_version()}')

```

#### set

**Sintaxis:** jmpex.R.R.set( var, as_name )

**Descripción:** Establece la variable Python en el entorno R nombrada por el parámetro &apos;as_name&apos;. El objeto de R se crea utilizando internamente la función obj2r(). El nombre pasa mediante la función de nombre correspondiente -> R Name() para garantizar que el nombre sea un nombre de variable de R válido.

**JMP Versión agregada:** 19

**Establecer columna**

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

**Establecer tabla de datos**

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

**Vector de cadenas**

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

**Vector numérico**

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

#### submit

**Sintaxis:** jmpex.R.R.submit( &apos;R script&apos; )

**Descripción:** Envía el código del programa R para su evaluación. Devuelve el resultado como objeto de Python si está disponible.

**JMP Versión agregada:** 19

**Establecer tabla de datos**

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

#### submit_file

**Sintaxis:** jmpex.R.R.submit_file(&apos;path_to_R_script&apos;)

**Descripción:** Envía un archivo del script R para su evaluación. Devuelve el resultado como objeto de Python si está disponible.

**JMP Versión agregada:** 19

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

### Funciones

#### Conceptos

#### R

**Descripción:** El módulo R representa jmpex.R que contiene la clase R de Python. La clase jmpex.R.R implementa la funcionalidad de la interfaz.

**JMP Versión agregada:** 19

## jmpex

### Funciones

#### Conceptos

#### jmpex - package

**Descripción:** The jmpex package contains extension interfaces supported by JMP. Currently it contains only an R support module.

**JMP Versión agregada:** 19

## jmputils

### Funciones

#### Funciones

#### create_jpip

**Sintaxis:** create_jpip( &apos;directory_path&apos; )

**Descripción:** Función para crear la versión de shell de comandos o terminal del script jpip en el directorio especificado. El script jpip envuelve el comando pip de Python para garantizar que se configuren las variables de entorno apropiadas. Esto asegura que los paquetes instalados por jpip se instalen en el directorio de paquetes del sitio de JMP.

**JMP Versión agregada:** 18

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

**Sintaxis:** jpip( &apos;pip_cmd&apos;, packages=&apos;&apos; )

**Descripción:** Esta función, invocable desde JMP, envuelve el comando pip de Python. Pase el comando pip de esta función como cadena de caracteres y, si quiere, una cadena delimitada por espacios de los paquetes que va a instalar. También se aceptan listas de argumentos individuales. De forma predeterminada, el argumento packages es una cadena de caracteres vacía. El paquete "jmputils" se encuentra en la misma ubicación que los archivos de la biblioteca estándar de Python. Todas las funciones que estén en jmputils utilizan únicamente funciones de la biblioteca estándar de Python o la funcionalidad integrada de JMP.

**JMP Versión agregada:** 18

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

