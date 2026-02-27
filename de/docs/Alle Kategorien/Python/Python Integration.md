# Python Integration



## Funktionen

### ALL_HOME

**Syntax:** jmp.ALL_HOME

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $ALL_HOME.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.ALL_HOME)

```

### Aufzählungen

### BUILTIN_SCRIPTS

**Syntax:** jmp.BUILTIN_SCRIPTS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $BUILTIN_SCRIPTS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.BUILTIN_SCRIPTS)

```

### DESKTOP

**Syntax:** jmp.DESKTOP

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $DESKTOP.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.DESKTOP)

```

### DOCUMENTS

**Syntax:** jmp.DOCUMENTS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $DOCUMENTS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.DOCUMENTS)

```

### DOWNLOADS

**Syntax:** jmp.DOWNLOADS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $DOWNLOADS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.DOWNLOADS)

```

### DataType

**Syntax:** jmp.DataType.enum_value

**Beschreibung:** jmp.DataType ist eine Aufzählung, die die Datentypen einer JMP-Spalte darstellt. Diese werden mit der Funktion jmp.DataTable.new_column() verwendet, um andere Spalten als den Standardtyp Numerisch zu erstellen.

**JMP Version hinzugefügt:** 18

```python

import jmp# for the sake of typingfrom jmp import DataType as dTypeprint('jmp.DataType members:')print( list(map(lambda c: c.name, dType)) )

```

### Funktionen

### HOME

**Syntax:** jmp.HOME

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $HOME.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.HOME)

```

### JMPPRJ

**Syntax:** jmp.JMPPRJ

**Beschreibung:** Gibt den physischen Pfad des temporären Verzeichnisses des Projekts zurück. Gibt das aktuelle Arbeitsverzeichnis zurück, oder None, wenn das Skript nicht in einem Projekt läuft.

**JMP Version hinzugefügt:** 19

```python

import jmpprint(jmp.JMPPRJ)

```

### Konstanten

### ModelingType

**Syntax:** jmp.ModelingType.enum_value

**Beschreibung:** jmp.ModelingType ist eine Aufzählung, die den Modellierungs- oder Analysetyp einer JMP-Spalte darstellt. Diese werden mit der Funktion jmp.DataTable.new_column() verwendet, um andere Spalten als den Standardtyp-Modellierungstyp Stetig zu erstellen. Beachten Sie, dass sich TypeNone vom JMP-Modellierungstyp None unterscheidet, da „None“ ein Python-Schlüsselwort ist.

**JMP Version hinzugefügt:** 18

```python

import jmp# for the sake of typingfrom jmp import ModelingType as mTypeprint('jmp.ModleingType members:')print( list(map(lambda c: c.name, mType)) )

```

### PYTHONW_EXE

**Syntax:** jmp.PYTHONW_EXE

**Beschreibung:** Pfad zu der von JMP installierten ausführbaren Python-Datei ohne Konsole (nur Windows).

**JMP Version hinzugefügt:** 19

```python

import jmpimport platformif platform.system() == "Windows":    print(jmp.PYTHONW_EXE)

```

### PYTHON_EXE

**Syntax:** jmp.PYTHON_EXE

**Beschreibung:** Pfad zu der von JMP installierten ausführbaren Python-Datei.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.PYTHON_EXE)

```

### PY_USER_APPDIR

**Syntax:** jmp.PY_USER_APPDIR

**Beschreibung:** Pfad zum Benutzerverzeichnis, das als Basis für die Python-Unterstützung von JMP dient. Das Verzeichnis site-packages befindet sich innerhalb dieser Verzeichnishierarchie.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.PY_USER_APPDIR)

```

### SAMPLE_APPS

**Syntax:** jmp.SAMPLE_APPS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_APPS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_APPS)

```

### SAMPLE_DASHBOARDS

**Syntax:** jmp.SAMPLE_DASHBOARDS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_DASHBOARDS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_DASHBOARDS)

```

### SAMPLE_DATA

**Syntax:** jmp.SAMPLE_DATA

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_DATA.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_DATA)

```

### SAMPLE_IMAGES

**Syntax:** jmp.SAMPLE_IMAGES

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_IMAGES.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_IMAGES)

```

### SAMPLE_IMPORT_DATA

**Syntax:** jmp.SAMPLE_IMPORT_DATA

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_IMPORT_DATA.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_IMPORT_DATA)

```

### SAMPLE_PROJECTS

**Syntax:** jmp.SAMPLE_PROJECTS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_PROJECTS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_PROJECTS)

```

### SAMPLE_SCRIPTS

**Syntax:** jmp.SAMPLE_SCRIPTS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_SCRIPTS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_SCRIPTS)

```

### TEMP

**Syntax:** jmp.TEMP

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $TEMP.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.TEMP)

```

### USER_APPDATA

**Syntax:** jmp.USER_APPDATA

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $USER_APPDATA.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.USER_APPDATA)

```

### __jmp_version__

**Syntax:** jmp.__jmp_version__

**Beschreibung:** Versionsnummer der ausführbaren JMP-Datei.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.__jmp_version__)

```

### __version__

**Syntax:** jmp.__version__

**Beschreibung:** Versionsnummer der JMP-Importpakete. Dies ist nicht die JMP-Version.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.__version__)

```

### current

**Syntax:** dt = jmp.current()

**Beschreibung:** Gibt ein Datentabellenobjekt für die aktuelle JMP-Datentabelle zurück.

**JMP Version hinzugefügt:** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(jmp.current())

```

### eval

**Syntax:** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**Beschreibung:** Wertet das Argument aus und gibt das Ergebnis zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpfrom jmp import eval, Expressionexpression = Expression("2 + 2")result = eval(expression)print(result)

```

### from_dataframe

**Syntax:** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;, visibility=&lt;string&gt;)

**Beschreibung:** Gibt ein jmp.DataTable-Objekt aus einem Datenrahmen einer protokollkonformen Bibliothek zurück.

**JMP Version hinzugefügt:** 19

#### CSV-Fallback

```python

import jmpimport jmputils        try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe(df)print(dt)

```

#### Ibis nach JMP

```python

import jmpimport jmputils try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)    jmputils.jpip('install', 'ibis-framework[duckdb,examples]') except Exception as e:    print(f'Install failed with exception: {e}')          import pandas as pd import ibis  pandas_df = pd.DataFrame(     [["a", 1, 2], ["b", 3, 4]],     columns=["one", "two", "three"], ) t = ibis.memtable(pandas_df, name="t") print(t) dt = jmp.from_dataframe(t) print(dt)

```

#### JMP nach Pandas

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pddt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")pandas_df = (pd.api.interchange.from_dataframe(dt))print(pandas_df)

```

#### JMP nach Polars

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as pldt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")polars_df = pl.from_dataframe(dt)print(polars_df)

```

#### Pandas nach JMP

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df)print(dt)

```

#### Polars nach JMP

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as plfrom datetime import datepolars_df = pl.DataFrame( {    "foo": [1, 2, 3],    "bar": [6.0, 7.0, 8.0],    "ham": [date(2020, 1, 2), date(2021, 3, 4), date(2022, 5, 6)],  } ) print(polars_df) dt = jmp.from_dataframe(polars_df) print(dt)

```

#### Visibility

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df, visibility="invisible")#dt = jmp.from_dataframe(pandas_df, visibility="private")print(dt)

```

### from_dataframe_using_csv

**Syntax:** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;, visibility=&lt;string&gt;)

**Beschreibung:** Gibt ein jmp.DataTable-Objekt aus dem Datenrahmen einer Bibliothek unter Verwendung der bereitgestellten CSV-Konvertierungsmethode zurück.

**JMP Version hinzugefügt:** 19

#### General

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})try:    # Try converting object without CSV fallback    dt = jmp.from_dataframe(df, True, False)    print("Converted using jmp.from_dataframe()")except:     # Explicitly convert using CSV    dt = jmp.from_dataframe_using_csv(df)    print("Converted using jmp.from_dataframe_using_csv()")print(dt)

```

#### Visibility

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe_using_csv(df, visibility="invisible")#dt = jmp.from_dataframe_using_csv(df, visibility="private")print(dt)

```

### open

**Syntax:** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**Beschreibung:** Öffnet eine Datei, die sich unter file_path befindet. Handelt es sich bei der Datei um eine .jmp-Datei oder eine Datei, die in eine JMP-Datentabelle importiert wird, ist das zurückgegebene Objekt ein DataTable-Objekt. Andernfalls wird „wahr“ oder „falsch“ für Erfolg oder Misserfolg zurückgegeben. Der optionale Parameter visibility bestimmt, ob die geöffnete Datei ausgeblendet wird. Unsichtbar bedeutet, dass die Datei nicht angezeigt wird, aber dennoch im Menü „Zuletzt geöffnete Dateien“ und im Hauptfenster erscheint. Bei einer privaten Tabelle ist die zurückgegebene Referenz die einzige Referenz auf die Tabelle, und sie erscheint in keiner der Dateilisten.

**JMP Version hinzugefügt:** 18

#### Excel

```python

import jmpobj = jmp.open(jmp.SAMPLE_IMPORT_DATA + 'Bigclass.xlsx')print(obj)

```

#### JMP

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt)

```

#### JSL-Skript

```python

import jmpobj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')print(obj)

```

#### Privat

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')dt = jmp.current()print(dt)  # => Nonetry:  dt = jmp.table('Animals')except FileNotFoundError:  print('Requested table not found')dt = jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')print(dt)dt.close(save=False)del dt

```

#### Unsichtbar

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Invisible')dt = jmp.current()print(dt)  # successdt = jmp.table('Animals')print(dt)  # success# Select and run the above first if you want to see that even though# there is no window, Animals.jmp appears in recent files and# home window's list of filesdt.close(save=False);del dt

```

### path_variable

**Syntax:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**Beschreibung:** Gibt den Wert einer Pfadvariablen zurück, z. B. einen Namen wie SAMPLE_DATA, der, wenn er in Pfadnamen gefunden wird, ersetzt wird.

**JMP Version hinzugefügt:** 19

```python

import jmppath_value = jmp.path_variable('SAMPLE_DATA')if not path_value:    print('Invalid path variable.')else:    print(path_value)

```

### r_name

**Syntax:** dt = jmp.r_name(jsl_var)

**Beschreibung:** Ordnet einen JMP-Variablennamen einem R-Variablennamen zu und verwendet Namensregeln von R-Variablen.

**JMP Version hinzugefügt:** 19

```python

import jmprName = jmp.r_name('c d e')print(rName)

```

### reset

**Syntax:** jmp.reset()

**Beschreibung:** Setzt die freigegebene Python-Umgebung zurück, wobei in erster Linie alle Verweise auf Objekte gelöscht werden. Der Import-Cache von importierten Modulen wird dabei nicht verändert. Dies ist eine Einschränkung der Python-Umgebung selbst. Module, die freigegebene Bibliotheken laden, können von dem laufenden Prozess nicht entladen werden. Wie Sie reinen Python-Code neu laden, erfahren Sie in der Python.org-Dokumentation zu importlib reload().

**JMP Version hinzugefügt:** 19

```python

import jmppi = 3.1415927print(pi)jmp.reset()print(pi)

```

### run_jsl

**Syntax:** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**Beschreibung:** Ausführen von JSL-Skripten in der Python-Umgebung, einschließlich der JSL-Python-Schnittstellenfunktionen. Der optionale Parameter echo=, wenn er auf False oder None gesetzt ist, verhindert, dass der dargestellte JSL-Quellcode als Echo in das Protokoll geschrieben wird. Es wird ein Ergebnis für die gleichen JSL-Objekttypen zurückgegeben, die von Python Send() / Get() unterstützt werden. Bei Skriptfehlern oder nicht unterstützten JSL-Objekttypen wird None zurückgegeben.

**JMP Version hinzugefügt:** 18

#### Rückgabewert

```python

import jmpvalue = jmp.run_jsl('''Names default to here(1);an A = 1.5;x = 5 * anA;''')print( f'{value} = jmp.run_jsl()')

```

#### Spalteneigenschaften

```python

import jmp# Create a data table# dt = jmp.DataTable(name='table_name', rows=n)pbp = jmp.DataTable(rows=5)pbp.name = 'Powered by Python'pbp.new_column('Name', jmp.DataType.Character)pbp.new_column('Hourly Rate')#pbp['Name'] = ['Janet', 'James', 'Jerry', 'Jenny', 'Jill']pbp[1] = [ 14.25, 9.75, 15.0, 12.35, '17.25']  # last value bad => becomes missingpbp[1][4] = 17.25## Change column format: Hourly Ratejmp.run_jsl('''Data Table( "Powered by Python" ):Hourly Rate << Format( "Currency", "USD", 17, 2 );Data Table( "Powered by Python" ):Name << Set Display Width( 75 );''')

```

#### Version abrufen

```python

import jmpjmp.run_jsl('Python Get Version();')

```

### table

**Syntax:** dt = jmp.table(&apos;table_name&apos;)

**Beschreibung:** Gibt ein DataTable-Objekt für die geöffnete Tabelle mit &apos;table_name&apos; zurück.

**JMP Version hinzugefügt:** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( jmp.table('Big Class') )

```

## jmp > DataConnector

### Funktionen

#### Besondere Elemente

#### Funktionen

#### Fähigkeit, mit copy.copy zu kopieren

**Beschreibung:** DataConnector-Objekte unterstützen flaches Kopieren mit der Standardfunktion copy.copy.



Eine Änderung des Kopierverhaltens in Unterklassen wird nicht unterstützt, deshalb sollten Unterklassen keine zusätzlichen Instanzattribute hinzufügen, da diese nicht kopiert werden.

**JMP Version hinzugefügt:** 19

```python

import jmpimport copyclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource(copy.copy(self))jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def __init__(self, config):        self._config = config        print("Connecting to data source")    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column')        dt['column'] = [self._config['My Option']]        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" ),            My Option( 42 )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### Konzepte

#### Methoden

#### __getitem__

**Syntax:** value = dc["FIELD NAME"]

**Beschreibung:** Ruft den einem Feld zugehörigen Wert ab.

**JMP Version hinzugefügt:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {"Example Field": str}class ExampleConnector(jmp.DataConnector):    ...    def _do_as_data_source(self):        ef = self["Example Field"]        # When running the JSL below, ef will be "example value"        print(f"{ef=}")        ...jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# This will fail but only after printing the valuejmp.run_jsl("""    New SQL Query( Connection(        New Data Connector(            Type("Python:__main__:ExampleConnectorType"),            Example Field("example value")        )    ) ) << Modify""", echo=False)

```

#### _do_as_data_source

**Syntax:** def _do_as_data_source(self) -&gt; jmp.DataSource:

**Beschreibung:** Unterklassen sollten diese Funktion überschreiben, um eine Verbindung zu erstellen. Die zurückgegebene Verbindung in Form einer Unterklasse von jmp.DataSource ermöglicht die Integration in die Funktion „Abfrage erstellen“.



Vermeiden Sie das Speichern und Verwenden einer Referenz auf die Konnektorinstanz (self) in der zurückgegebenen Datenquelle. Anderer Code könnte ebenfalls eine Referenz enthalten und Konfigurationswerte unerwartet ändern. Verwenden Sie stattdessen copy.copy, um eine unabhängige Kopie zu erstellen, auf die Sie verweisen können, etwa „self_copy = copy.copy(self)“.

**JMP Version hinzugefügt:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource(self['My Option'])jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def __init__(self, my_option):        self._my_option = my_option        print("Connecting to data source")    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column')        dt['column'] = [self._my_option]        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" ),            My Option( 42 )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### _do_open

**Syntax:** def _do_open(self) -&gt; jmp.DataTable:

**Beschreibung:** Unterklassen können diese Funktion überschreiben, um eine Tabelle direkt zu öffnen. Diese Funktion implementiert die Open-Nachricht in JSL (New Data Connector(...) << Open()).



Wenn sowohl diese Funktion als auch _do_as_data_source implementiert sind, sollten sie denselben Satz von Tabellen öffnen können.

**JMP Version hinzugefügt:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_open(self):        dt = jmp.DataTable(rows=1)        dt.new_column('column')        dt['column'] = [self['My Option']]        return dtjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    My Option( 42 )) << Open();""", echo=False)

```

#### tie

**Syntax:** jmp.DataConnector.tie(DataConnectorTypeClass, DataConnectorClass)

**Beschreibung:** Ordnet eine jmp.DataConnectorType-Unterklasse und eine jmp.DataConnector-Unterklasse zu, „bindet“ sie aneinander und vervollständigt die Definitionen beider Klassen. Durch diese Zuordnung erhält die Unterklasse jmp.DataConnector Zugriff auf die Unterklasse jmp.DataConnectorType und deren Felddefinitionen. Sie stellt auch sicher, dass die Unterklasse jmp.DataConnectorType Instanzen vom Typ jmp.DataConnector mithilfe der angegebenen Unterklasse erstellt.



Diese Funktion erstellt die Zuordnung, indem sie Attribute für die Unterklassen festlegt.

**JMP Version hinzugefügt:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_open(self):        dt = jmp.DataTable(rows=1)        dt.new_column('column')        dt['column'] = [self['My Option']]        return dtjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    My Option( 42 )) << Open();""", echo=False)

```

## jmp > DataConnectorField

### Funktionen

#### Konstruktoren

#### __init__

**Syntax:** field = jmp.DataConnectorField(type, &lt;default=DEFAULT_VALUE,&gt; &lt;tooltip="TOOLTIP" | None,&gt; &lt;ui_name="UI NAME" | None,&gt; &lt;credential="CREDENTIAL TYPE" | None,&gt; &lt;sensitive=True | False,&gt; &lt;mask_input=True | False&gt;)

**Beschreibung:** DataConnectorField definiert ein Feld.



Base arguments:



type: Der Typ des Felds, z. B. int (siehe jmp.DataConnectorType.fields für weitere Informationen).



default: Der Standardwert für das Feld, z. B. 42. Wenn er nicht angegeben wird, hängt der Standardwert vom Typ ab. Der Standardwert ist None, wenn dies unterstützt wird, z. B. wenn der Typ „int | None“ ist. Andernfalls ist es der „leere“ Wert für den Typ: „“ für str, 0 für int und False für bool.



tooltip: Wenn angegeben und nicht None, wird er als Tooltipp für das Feld im Datenkonnektor-Editor verwendet.



ui_name: Wenn angegeben und nicht None, wird er als Name des Felds im Datenkonnektor-Editor anstelle des tatsächlichen Feldnamens verwendet.



Zusätzliche Argumente, wenn type „str“ oder „str | None“ ist:



credential: Wenn angegeben und nicht None, der Typ der in diesem Feld gespeicherten Benutzerdaten. Die gültigen Werte sind „username“ und „password“. JMP verwendet diese Information, um die Unterstützung von Platzhaltern zu aktivieren.



sensitive: Wenn „true“, gilt dieses Feld als sensibel und seine Werte werden nicht im Klartext ausgegeben. Standardwert ist „true“, wenn „credential“ gesetzt ist, andernfalls „false“.



mask_input: Wenn „true“, wird der Wert unkenntlich gemacht und im Datenkonnektor-Editor mit Punkten angezeigt. Der Standardwert ist „true“, wenn „credential“ „password“ oder „sensitive“ „true“ ist und „credential“ nicht festgelegt ist.

**JMP Version hinzugefügt:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    _DCF = jmp.DataConnectorField    fields = {        "Field 1": int,        # Same as Field 1 but uses jmp.DataConnectorField instead of a bare type        "Field 2": _DCF(int),        # Like Field 1 and Field 2 but adds a tooltip        "Field 3": _DCF(int, tooltip="The third field."),        # Like Field 1 and Field 2 but adds a default value and a tooltip        "Field 4": _DCF(int, default=42, tooltip="The fourth field."),        # ui_name is useful for JSL-unfriendly names or localization        "JSL Unfriendly Field": _DCF(int, ui_name="JSL-Unfriendly Field"),        # credential (and sensitive and mask_input) are useful for usernames,        # passwords, and other sorts of credentials        "Password Field": _DCF(str, credential="password"),    }class ExampleConnector(jmp.DataConnector):    def _do_open(self):        # Show the values then error        print(f"{self["Field 1"] = }")        print(f"{self["Field 2"] = }")        print(f"{self["Field 3"] = }")        print(f"{self["Field 4"] = }")        print(f"{self["JSL Unfriendly Field"] = }")        print(f"{self["Password Field"] = }")        raise NotImplementedErrorjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# To see the tooltips, the UI name, and the masking triggered by credential,# you'll need to launch the Data Connector Editor and set the type to# Python:__main__:ExampleConnectorType.jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    Field 1( 4 ),    Field 2( 19 ),    Field 3( 23 ),    Field 4( 42 ),    JSL Unfriendly Field( 65 ),    // This encodes the string "107":    Password Field( "0173AEE42BA6B646CBE03941DD25153DAAFDF2ED3039A9E64296808E53DA110CDE45733216E9B2A3F82AA052F370443F231C8B1D83E2AA68B6D19DD4B6BB0CE08F635C07162E3E13B2AF77D25DF8DDD1DB" )) << Open();""", echo=False)

```

## jmp > DataConnectorGroupedFields

### Funktionen

#### Konstruktoren

#### __init__

**Syntax:** fields = jmp.DataConnectorGroupedFields([("Group 1 Name", GROUP_1_FIELDS), ("Group 2 Name", GROUP_2_FIELDS), ...])

**Beschreibung:** jmp.DataConnectorGroupedFields definiert Felder in benannten Gruppen. Die Gruppen werden als eine Liste von Paaren übergeben. Das erste Element jedes Paares ist der Name der Gruppe, das zweite ist ein Wörterbuch mit den Feldern. Dieses Wörterbuch hat das gleiche Format wie dasjenige, das direkt als Wert für jmp.DataConnectorType.fields verwendet wird.



Die Verwendung von Gruppen wirkt sich auf die Darstellung der Felder im Datenkonnektor-Editor aus, nicht aber auf ihren programmatischen Zugriff. Der Gruppenname wird nur in der Benutzeroberfläche verwendet, so dass die Empfehlung, in Feldnamen Zeichen zu vermeiden, die nicht in JSL-Namen verwendet werden sollten, nicht gilt.

**JMP Version hinzugefügt:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = jmp.DataConnectorGroupedFields([        # Specify a first group named "Route" that has "Destination" and        # "Origin" fields.        ("Route", {            "Destination": str,            "Origin": str,        }),        # Specify a second group named "Vehicle" that has "Passengers" and        # "Range" fields.        ("Vehicle", {            "Passengers": int,            "Range": int,        }),    ])class ExampleConnector(jmp.DataConnector):    def _do_open(self):        # Show the values then error        print(f"{self["Destination"] = }")        print(f"{self["Origin"] = }")        print(f"{self["Passengers"] = }")        print(f"{self["Range"] = }")        raise NotImplementedErrorjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# To see the groups you'll need to launch the Data Connector Editor# and set the type to Python:__main__:ExampleConnectorType.jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    Destination( "JMP" ),    Origin( "RDU" ),    Passengers( 5 ),    Range( 254 )) << Open();""")

```

## jmp > DataConnectorType

### Funktionen

#### Eigenschaften

#### fields

**Syntax:** fields = {"Name 1": TYPE_1 | jmp.DataConnectorField(...), "Name 2": TYPE_2 | jmp.DataConnectorField(...), ...} | jmp.DataConnectorGroupedFields(...)

**Beschreibung:** Unterklassen müssen eine Variable namens „fields“ auf Klassenebene definieren, die die Konfigurationsoptionen für diesen Typ angibt. Es sollte sich um ein Objekt dict oder jmp.DataConnectorGroupedFields handeln.



Die Schlüssel des dict sind die Namen der Konfigurationsoptionen, die in JSL und im Editor angezeigt werden. Sie sollten wie JSL-Identifikatoren formatiert sein. Der Wert, der jedem Schlüssel entspricht, ist der Typ des Felds, wie str oder int, oder ein jmp.DataConnectorField-Objekt.



Zu den unterstützten Typen gehören bool, int, str. Optionale Versionen davon, wie typing.Optional[bool] oder bool | None für bool werden ebenfalls unterstützt. Ein fehlender Wert wird durch None dargestellt.

**JMP Version hinzugefügt:** 19

```python

import jmpimport typingclass ExampleConnectorType(jmp.DataConnectorType):    _DCF = jmp.DataConnectorField    fields = {        "Basic Int Field": int,        "Optional Int Field": int | None,        "Alternative Optional Int Field": typing.Optional[int],        "Int Field With Default And Tooltip": _DCF(int, default=42, tooltip=(            "Tooltip for complicated int field."        )),        "Catalog": _DCF(str, default="main", tooltip=(            "Database catalog in which to access schemas and tables."        )),    }class ExampleConnector(jmp.DataConnector):    def _do_open(self):        # Show values for demo purposes and then error out        print(f"{self["Basic Int Field"] = }")        print(f"{self["Optional Int Field"] = }")        print(f"{self["Alternative Optional Int Field"] = }")        print(f"{self["Int Field With Default And Tooltip"] = }")        print(f"{self["Catalog"] = }")        raise NotImplementedErrorjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# To see the tooltips you'll need to launch the Data Connector Editor# and set the type to Python:__main__:ExampleConnectorType.jmp.run_jsl(r"""New Data Connector( Type( "Python:__main__:ExampleConnectorType" ) ) << Open();""")

```

## jmp > DataSource

### Funktionen

#### Methoden

#### get_schemas

**Syntax:** def get_schemas(self) -&gt; Sequence[str] | None:

**Beschreibung:** Unterklassen können diese Funktion überschreiben, um eine Liste der Schemata in der Datenquelle bereitzustellen. Wird diese Funktion nicht überschrieben oder gibt sie None zurück, wird davon ausgegangen, dass die Datenquelle keine Schemata unterstützt.

**JMP Version hinzugefügt:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# Pretend our data source has two schemas, each with a tableclass ExampleDataSource(jmp.DataSource):    def get_schemas(self):        # Normally you would get this dynamically instead of hard-coding it.        return ['schema1', 'schema2']    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column', jmp.DataType.Character)        dt['column'] = [f'{schema}.{table}']        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Schema( "schema1" ), Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### get_tables

**Syntax:** def get_tables(self, schema: str) -&gt; Sequence[str]:

**Beschreibung:** Unterklassen sollten diese Funktion überschreiben, um eine Liste der Tabellen in der Datenquelle bereitzustellen. Wenn Schemata unterstützt werden, sollte diese Liste nur die Tabellen unter dem Schema enthalten, dessen Name übergeben wird. Wenn Schemata nicht unterstützt werden, sollte der Schema-Parameter ignoriert werden.

**JMP Version hinzugefügt:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        # Normally you would get this dynamically instead of hard-coding it.        return ['example1', 'example2']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column', jmp.DataType.Character)        dt['column'] = [table]        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "A" ),    Select( Star ),    From( Table( "example1", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### open_table

**Syntax:** def open_table(self, schema: str, table: str) -&gt; jmp.DataTable | str:

**Beschreibung:** Unterklassen sollten diese Funktion überschreiben, um die Tabellendaten für die benannte Tabelle zu erhalten. Wenn Schemata nicht unterstützt werden, kann der Wert des Schema-Arguments ignoriert werden. Die Funktion sollte eine jmp.DataTable oder eine Zeichenkette zurückgeben, die einen Pfad zu einer Datei in einem von JMP unterstützten Datenformat enthält.



Wird eine Datentabelle direkt zurückgegeben, sollte die Tabelle privat erstellt werden. Bei der Rückgabe einer Pfadzeichenkette öffnet JMP die Tabelle selbst und erfasst die verwendeten Einstellungen, um sie in den Skripten der Funktion „Abfrage erstellen“ zu speichern.

**JMP Version hinzugefügt:** 19

**Dateipfad zurückgeben**

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        # Normally you would use schema and table.        return jmp.SAMPLE_IMPORT_DATA + 'Bigclass_L.txt'jmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

**Tabelle direkt erstellen**

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        # Normally you would use schema and table.        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('Hello', jmp.DataType.Character)        dt['Hello'] = ['world!']        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### open_table_with_settings

**Syntax:** def open_table_with_settings(self, schema: str, table: str, settings: str | None) -&gt; (jmp.DataTable, str | None):

**Beschreibung:** Unterklassen können diese Funktion anstelle von open_table überschreiben, um benutzerdefinierte Einstellungen für das Öffnen von Tabellen bereitzustellen. Diese Funktion ist wie open_table, wird aber auch mit den vorhandenen Einstellungen aufgerufen, sofern vorhanden. Sie muss eine Datentabelle zurückgeben, und sie muss auch die neuen Einstellungen zurückgeben, sofern vorhanden. Fehlende Einstellungen werden durch None angezeigt.

**JMP Version hinzugefügt:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        return ['example']    def open_table_with_settings(self, schema, table, settings):        print(f"Input settings: {settings!r}")        if settings is None:            # In practice settings are something you prompt the user            # for, but here we hard-code it.            settings = f'settings for {table}'        dt = jmp.DataTable(visibility='private')        dt.new_column()        print(f"Output settings: {settings!r}")        return dt, settingsjmp.run_jsl(r"""Write( ( New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run Foreground ) << Get Property( "Source" ) );""", echo=False)

```

## jmp > DataTable > Column

### Funktionen

#### Besondere Elemente

#### Eigenschaften

#### Gleichheit

**Beschreibung:** Das Column-Objekt unterstützt Gleichheits- und Ungleichheitsprüfungen. Da eine DataTable.Column eigentlich eine Referenz auf eine Live-Datentabellenspalte ist, können mehrere Column-Objekte auf dieselbe tatsächliche Spalte zeigen. Die Prüfungen auf Gleichheit == und Ungleichheit != vergleichen nicht den Inhalt. Sie prüfen stattdessen, ob zwei DataTable.Column-Objekte auf dieselbe Spalte verweisen.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col1 = dt[0]col2 = dt['name']col3 = dt['age']print( col1 == col2 )print( col1 == col3 )print( col1 != col2 )print( col1 != col3 )

```

#### Konstruktoren

#### Konzepte

#### Sequenz

**Beschreibung:** DataTable.Column verhält sich wie eine Python-Sequenz. Dies ermöglicht die Iteration über die Werte der Spalte.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]for n in dt[0]:    print( n )

```

#### Slice

**Beschreibung:** Der Slice-Operator wird als Parameter für die Operation [ ] get item verwendet. Dieser besteht aus start:stop:step. Diese Parameter sind optional. Der Rückgabewert ist eine Liste von Werten, beginnend mit dem Wert start ohne den Wert stop, inkrementiert um den Wert step. Negative Zahlen für start oder stop sind 1-basierte Indizes vom Ende der Sequenz. Ein negativer [step]-Wert dekrementiert die Schrittanzahl, anstatt sie zu inkrementieren. Für leere Werte gibt es entsprechende Standardwerte. [::-1] gibt die gesamte Liste in umgekehrter Reihenfolge zurück. Und [:] gibt das gesamte Array in der aktuellen Reihenfolge der Elemente zurück.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( [c.name for c in dt[:]] )         # print list of column names default step = 1reverse_cols = dt[::-1]                  # list of column names in reverse orderprint( [c.name for c in reverse_cols] )  # print reversed column name listprint( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### Zuordnung

**Beschreibung:** Das DataTable.Column-Objekt unterstützt das Python-Zuordnungsprotokoll. Es bietet die Array-Operatoren [] unter Verwendung des numerischen Zeilenindex.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]for i in range(0, dt.nrows):    print( dt[0][i] )

```

#### __eq__

**Syntax:** column1 == column2

**Beschreibung:** Gleichheitstest, gibt wahr zurück, wenn zwei jmp.DataTable.Column-Objekte auf die gleiche JMP-Datentabellenspalte zeigen. Dabei wird nicht geprüft, ob der Inhalt übereinstimmt, sondern ob die beiden Variablen auf genau dieselbe Spalte verweisen.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col1 = dt[0]col2 = dt['name']col3 = dt['age']print( col1 == col2 )print( col1 == col3 )

```

#### __getitem__

**Syntax:** value = column[ index ]

**Beschreibung:** Stellt den Operator [] zur Verfügung, um den Wert eines jmp.DataTable.Column-Objekts aus der Spalte mit 0-basiertem Index abzurufen.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col = dt[0]for i in range ( len(col) ):    print( col[i] )

```

#### __init__

**Syntax:** Column( dt_obj, name | index)

**Beschreibung:** Erzeugt ein neues Spaltenobjekt, das auf eine bestimmte Spalte in einer Datentabelle verweist. Für den Parameter dt_obj ist ein jmp.DataTable-Objekt erforderlich, und es muss ein gültiger Spaltenname oder Index angegeben werden.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col = jmp.DataTable.Column(dt, 'name')print(col)# Note: it's simpler to just let Python create one for you through assignment.col2 = dt['name'];print(col2)

```

#### __len__

**Syntax:** count = len( column )

**Beschreibung:** Gibt die Anzahl der Spalten in der Tabelle zurück.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print( len( dt['name'] ) )

```

#### __ne__

**Syntax:** column1 != column2

**Beschreibung:** Ungleichheitstest, gibt wahr zurück, wenn zwei jmp.DataTable.Column-Objekte nicht auf die gleiche Datentabellenspalte zeigen. Dabei wird nicht geprüft, ob der Inhalt übereinstimmt, sondern ob die beiden Objekte nicht auf genau dieselbe Spalte verweisen.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col1 = dt[0]col2 = dt['name']col3 = dt['age']print( col1 != col2 )print( col1 != col3 )

```

#### __setitem__

**Syntax:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**Beschreibung:** Stellt den Operator [] zum Setzen von Werten in einer Spalte zur Verfügung, um ein jmp.DataTable.Column-Objekt aus der Tabelle nach Spaltenname oder 0-basiertem Index abzurufen.

**JMP Version hinzugefügt:** 18

**Ausdruck**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column("expressions", jmp.DataType.Expression)dt['expressions'][0] = jmp.Expression('1 + 1')print(dt['expressions'][0])result = jmp.eval(dt['expressions'][0])print(result)

```

**Bild**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column("images", jmp.DataType.Expression)for i in range( len( dt["images"] ) ):    dt['images'][i] = jmp.Image(jmp.SAMPLE_IMAGES + "tile.jpg")print(dt['images'][0])

```

**datetime.date**

```python

import jmpfrom datetime import datedt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('birthday', jmp.DataType.Numeric)dt['birthday'].format = "m/d/y"dt['birthday'][0] = date.today()

```

**datetime.datetime**

```python

import jmpfrom datetime import datetimedt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('birthday', jmp.DataType.Numeric)dt['birthday'].format = "m/d/y h:m:s"dt['birthday'][0] = datetime.now()

```

**Standard**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")column = dt[0]column2 = dt['age']print(column)print(column2)

```

**time.struct_time**

```python

import jmpimport timedt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('birthday', jmp.DataType.Numeric)dt['birthday'].format = "h:m:s"dt['birthday'][0] = time.localtime()

```

**Zeileneigenschaft**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column("rs", jmp.DataType.RowState)dt['rs'][0] = jmp.RowState(selected=True, marker=3, color=4)print(dt['rs'][0])

```

#### __str__

**Syntax:** str( column_obj )

**Beschreibung:** Gibt eine String-Darstellung von enthaltenen Zusammenfassungsinformationen über die Spalte der Datentabelle zurück.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt[0])

```

#### data_length

**Syntax:** col_obj.data_length

**Beschreibung:** Eigenschaft, die die Datenlänge des Spaltenfelds zurückgibt. Dieser Wert kann 0, 1, 2, 4 oder 8 Bytes haben. 0 ist der Standardwert und bedeutet, dass 8 Bytes für numerische Felder der Datentabelle verwendet werden.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f'Data length of dt[-1] (weight column): {dt[-1].data_length}')

```

#### display_width

**Syntax:** col_obj.display_width col_obj.display_width = &lt;int&gt;

**Beschreibung:** Anzeigebreite der Spalte ändern.

**JMP Version hinzugefügt:** 19

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")jmp.run_jsl('Wait( 0 );')print(dt[0].display_width)dt[0].display_width = 100print(dt[0].display_width)

```

#### dtype

**Syntax:** col_obj.dtype

**Beschreibung:** Eigenschaft, die den Aufzählungswert für den Datentyp der Spalte zurückgibt.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f"Data Type of dt['age']: {dt['age'].dtype}")dt['age'].dtype = jmp.DataType.Character print(f"Updated Data Type of dt['age']: {dt['age'].dtype}")

```

#### format

**Syntax:** col_obj.format col_obj.format = tuple&lt; &lt;string&gt;|&lt;int&gt;, ... &gt;

**Beschreibung:** Format abrufen

**JMP Version hinzugefügt:** 19

**Tupelzuweisung**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print(dt[3].format)dt[3].format = ('Fixed Dec', 6, 3)print(dt[3].format)

```

**Unterschiedliche Variationen**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "XYZ Stock Averages (plots).jmp")dt[0].format = ("ddMonyyyy", 9)dt[1].format = "Currency"dt[2].format = (    "best",    "Use Thousands Separator",    10,    0)dt[3].format = (    "Fixed Dec",    "Use Thousands Separator",    10,    2)

```

#### formula

**Syntax:** col_obj.formula col_obj.formula = &lt;Expression | string&gt;

**Beschreibung:** Legt eine Spaltenformel fest aus einem Expression-Objekt oder einem String, der eine gültige JSL darstellt.

**JMP Version hinzugefügt:** 19

**Ausdruck**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('ratio', jmp.DataType.Numeric)dt['ratio'].formula = jmp.Expression(':Height / :Weight')print(dt['ratio'].formula)

```

**Zeichenkette**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('ratio', jmp.DataType.Numeric)dt['ratio'].formula = ':Height / :Weight'print(dt['ratio'].formula)

```

#### mtype

**Syntax:** col_obj.mtype

**Beschreibung:** Eigenschaft, die den Aufzählungswert für den Modellierungstyp der Spalte zurückgibt.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f"Modeling Type of dt['age']: {dt['age'].mtype}") dt['age'].mtype = jmp.ModelingType.Nominalprint(f"Updated Modeling Type of dt['age']: {dt['age'].mtype}")

```

#### name

**Syntax:** col_obj.name col_obj.name = &lt;string&gt;

**Beschreibung:** Eigenschaft Spaltenname, kann sowohl gelesen als auch festgelegt werden.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print(dt[0].name)dt[0].name = 'First Name'

```

## jmp > DataTable

### Funktionen

#### Besondere Elemente

#### Eigenschaften

#### Gleichheit

**Beschreibung:** Das DataTable-Objekt unterstützt Gleichheits- und Ungleichheitsprüfungen. Da eine DataTable eigentlich eine Referenz auf eine Live-Datentabelle ist, können mehrere Objekte auf dieselbe JMP-Tabelle zeigen. Die Prüfungen auf Gleichheit == und Ungleichheit != vergleichen nicht den Inhalt. Sie prüfen, ob zwei DataTable-Objekte auf dieselbe JMP-Tabelle verweisen.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt2 = jmp.current()iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")print( dt == dt2 )print( dt == iris)print( dt != dt2 )print( dt != iris )

```

#### Konstruktoren

#### Konzepte

#### Methoden

#### Sequenz

**Beschreibung:** Das DataTable-Objekt verhält sich wie eine Python-Sequenz. Dies ermöglicht die Iteration über die Spalten der Tabelle.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")for n in dt:    print( n.name )

```

#### Slice

**Beschreibung:** Der Slice-Operator wird als Parameter für die Operation [ ] get item verwendet. Dieser besteht aus start:stop:step. Diese Parameter sind optional. Der Rückgabewert ist eine Liste von Werten, beginnend mit dem Wert start ohne den Wert stop, inkrementiert um den Wert step. Negative Zahlen für start oder stop sind 1-basierte Indizes vom Ende der Sequenz. Ein negativer „step“-Wert dekrementiert die Schrittanzahl, anstatt sie zu inkrementieren. Für leere Werte gibt es entsprechende Standardwerte. [::-1] gibt die gesamte Liste in umgekehrter Reihenfolge zurück. Und [:] gibt das gesamte Array in der aktuellen Reihenfolge der Elemente zurück.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( [c.name for c in dt[:]] )         # print list of column names default step = 1reverse_cols = dt[::-1]                  # list of column names in reverse orderprint( [c.name for c in reverse_cols] )  # print reversed column name listprint( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### Zuordnung

**Beschreibung:** Das DataTable-Objekt unterstützt das Python-Zuordnungsprotokoll. Es stellt die Array-Operatoren [] zur Verfügung und verwendet entweder einen Spaltennamen oder einen numerischen Wert als Spaltenindex.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( f'Column name: {dt[1].name}' )print( f"Column name: {dt['age'].name}" )

```

#### __eq__

**Syntax:** table1 == table2

**Beschreibung:** Gleichheitstest, gibt wahr zurück, wenn zwei jmp.DataTable-Objekte auf die gleiche JMP-Datentabelle zeigen. Dabei wird nicht geprüft, ob der Inhalt übereinstimmt, sondern ob die beiden Variablen auf genau dieselbe Tabelle verweisen.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt2 = jmp.current()iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")print( dt == dt2 )print( dt == iris)

```

#### __getitem__

**Syntax:** column = dt[&apos;name&apos; | index]

**Beschreibung:** Stellt den Operator [] zur Verfügung, um ein jmp.DataTable.Column-Objekt aus der Tabelle nach Spaltenname oder 0-basiertem Index abzurufen.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")column = dt[0]column2 = dt['age']print(column)print(column2)

```

#### __init__

**Syntax:** dt = jmp.DataTable(&lt;name=&apos;table_name&apos;&gt;, &lt;rows=n&gt;, &lt;visibility=&apos;Invisible&apos; | &apos;Private&apos; )

**Beschreibung:** Erstellt eine neue Datentabelle mit dem Namen „table_name“ mit n Zeilen. Parameter und Schlüsselwörter sind optional, es sei denn, es werden nur Zeilen angegeben oder die Reihenfolge der Parameter ist umgekehrt.

**JMP Version hinzugefügt:** 18

**Benannt mit Zeilen**

```python

import jmpdt = jmp.DataTable('Powered By Python', 40)

```

**Benannte leere Tabelle**

```python

import jmpdt = jmp.DataTable('Powered By Python')

```

**Leere Tabelle**

```python

import jmpdt = jmp.DataTable()

```

**Mit Schlüsselwörtern**

```python

import jmpdt = jmp.DataTable(rows=40, name='Powered By Python')

```

**Privat**

```python

import jmpdt = jmp.DataTable('Powered By Python', 40, visibility='private')

```

**Unsichtbar**

```python

import jmpdt = jmp.DataTable('Powered By Python', 40, visibility='Invisible')

```

#### __len__

**Syntax:** count = len(dt)

**Beschreibung:** Gibt die Anzahl der Spalten in der Tabelle zurück.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print( len(dt) )

```

#### __ne__

**Syntax:** table1 != table2

**Beschreibung:** Ungleichheitstest, gibt wahr zurück, wenn zwei jmp.DataTable-Objekte nicht auf die gleiche Datentabelle zeigen. Dabei wird nicht geprüft, ob der Inhalt übereinstimmt, sondern ob die beiden Objekte nicht auf genau dieselbe Tabelle verweisen.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt2 = jmp.current()iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")print( dt != dt2 )print( dt != iris)

```

#### __setitem__

**Syntax:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**Beschreibung:** Stellt den Operator [] zum Setzen von Werten in einer Spalte zur Verfügung, um ein jmp.DataTable.Column-Objekt aus der Tabelle nach Spaltenname oder 0-basiertem Index abzurufen.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]print( dt[0][:] )

```

#### __str__

**Syntax:** str( data_table )

**Beschreibung:** Gibt eine String-Darstellung von Zusammenfassungsinformationen über das Datentabellenobjekt zurück.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt)

```

#### add_rows

**Syntax:** add_rows(rows, &lt;at=-1&gt;)

**Beschreibung:** Fügt der Datentabelle Zeilen hinzu. rows ist erforderlich. at ist optional. Wenn at gleich 0 ist, geschieht das Einfügen am Anfang der Tabelle. Bei <0 geschieht das Einfügen am Ende der Tabelle. Ansonsten, wenn at gleich m ist, wird in Zeile m eingefügt (0-basierte Indexierung).

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.add_rows(5)dt.add_rows(1, at=0)dt.add_rows(2, at=12) # 0-based indexing

```

#### begin_update

**Syntax:** dt.begin_update() # added JMP 19.1

**Beschreibung:** Small tables update rapidly, but for large tables, having to update the user interface while making mass changes to a column is very time consuming. The begin_update() method stops the GUI updates to the data table until a corresponding end_update().

**JMP Version hinzugefügt:** 19

```python

import jmpimport randomimport timedt = jmp.open(jmp.SAMPLE_DATA + "Wafer Stacked.jmp")print(dt.nrows)start_time = time.perf_counter()dt.begin_update()try:    for x in range(dt.nrows):        dt[5][x] = random.randint(1,1000)finally:    dt.end_update()end_time = time.perf_counter()elapsed = end_time - start_timeprint(f'Elapsed time: {elapsed:.3f}')

```

#### cell_height

**Syntax:** dt.cell_height dt.cell_height = &lt;int&gt;

**Beschreibung:** Anzeigehöhe jeder Zelle in der Datentabelle festlegen.

**JMP Version hinzugefügt:** 19

```python

import jmpdt = jmp.DataTable()jmp.run_jsl('Wait(0)')print(dt.cell_height)dt.cell_height = 40print(dt.cell_height)

```

#### close

**Syntax:** dt.close( &lt;save= True | False&gt;)

**Beschreibung:** Close-Methode für das DataTable-Objekt. Wie bei JSL wird standardmäßig die Datei gespeichert, wenn der Aufruf ohne Parameter erfolgt. Um eine Datei aufzugeben, z. B. eine als temporäre Tabelle erstellte Datei, verwenden Sie dt.close(False) oder dt.close(save=False), für eine klarere Angabe.

**JMP Version hinzugefügt:** 18

```python

import jmpimport os# To remove the wow.jmp file uncomment then run the 2 lines below,# if os.path.isfile('wow.jmp'):#    os.unlink('wow.jmp')dt = jmp.DataTable('wow', 5)dt.new_column('one')dt.close()                # saves and closes filedt = jmp.open('wow.jmp')dt.new_column('two')dt.close(save=False)      # closes without saving

```

#### delete_columns

**Syntax:** delete_columns(&apos;name&apos;, ..., &apos;name&apos;)

**Beschreibung:** Die Methode delete_columms() funktioniert wie das JSL-Äquivalent, die Meldung Delete Columns(). Akzeptierte Argumente sind: keine Argumente; Spaltenname oder durch Komma getrennte Namen; eine Python-Liste von Spaltennamen. Werden keine Argumente verwendet, bedeutet das, dass die ausgewählten Spalten gelöscht werden.

**JMP Version hinzugefügt:** 19

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.select_columns('weight')     # JSL:  dt << Select Columns( {:weight})r = dt.delete_columns()                  # delete by selected column(s)print(r)r = dt.delete_columns('name', 'sex')     # delete by nameprint(r)r = dt.delete_columns(['age', 'height']) # delete with list of column namesprint(r)

```

#### end_update

**Syntax:** dt.end_update() # added JMP 19.1

**Beschreibung:** Restores the data table GUI update processing.

**JMP Version hinzugefügt:** 19

```python

import jmpimport randomimport timedt = jmp.open(jmp.SAMPLE_DATA + "Wafer Stacked.jmp")print(dt.nrows)start_time = time.perf_counter()dt.begin_update()try:    for x in range(dt.nrows):        dt[5][x] = random.randint(1,1000)finally:    dt.end_update()end_time = time.perf_counter()elapsed = end_time - start_timeprint(f'Elapsed time: {elapsed:.3f}')

```

#### name

**Syntax:** dt.name dt.name = &apos;string&apos;

**Beschreibung:** Die name kann den Namen der Datentabelle sowohl festlegen als auch abrufen.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.DataTable()print(dt.name)dt.name = 'Powered by Python'

```

#### ncols

**Syntax:** dt.ncols

**Beschreibung:** Eine schreibgeschützte Eigenschaft, die die Anzahl der Spalten in der Tabelle zurückgibt.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f'Number of columns: {dt.ncols}')

```

#### new_column

**Syntax:** dt.new_column( name=&apos;column_name&apos;, dtype=jmp.Numeric | .Character | .RowState | .Expression, mtype=jmp.ModelingType.Continuous | ... | TypeNone dlen=len cell type&apos;s data length especially for numeric 8(double),4(int32),2(int16),1(int8) where=n insert column after column n

**Beschreibung:** Neue Datentabellenspalte erstellen, optional mit Angabe von Name, Spaltentyp, Datenlänge und Modellierungstyp

**JMP Version hinzugefügt:** 18

**Kleine Klasse**

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]print( dt[0][:] )print( list( dt['First Name'] ) )dt.new_column('Distance (km)', jmp.DataType.Numeric, jmp.ModelingType.Continuous)dt[1] = [ 1239.2, 12266.4, 15.75, 35.0, 10.6 ]

```

**Neue Klasse**

```python

import jmpfrom jmp import DataTable as Dtdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')nc = jmp.DataTable('New Class', dt.nrows)nc.new_column('name', jmp.DataType.Character)# populate column from a listnc[0] = ['Fred','Kimi','Amanda','Courtney','Paul','Theresa','Erika','Blake','Joseph','Amber',    'Daphne','Robert','James','Richard', 'Eric','Mark','Coleen','Brian','Bryan','Emily',    'Bonnie','Georgia','Terrance','Carmen','Hunter','Samantha','Kay','Tamara','Brett','David',    'Chandler','Siebela','Judy','Hui','Drew','Russ','Megan','Evan','Alex','Travis']col = nc.new_column('age', jmp.DataType.Numeric)# populate column from another columnnc['age'] = dt['age']print(nc['age'][::])print(col.__class__)

```

#### nrows

**Syntax:** dt.nrows

**Beschreibung:** Eine schreibgeschützte Eigenschaft, die die Anzahl der Zeilen in der Tabelle zurückgibt.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f'Number of rows: {dt.nrows}')

```

#### row_states

**Syntax:** dt.row_states dt.row_states = [state1, state2, ..., stateN]

**Beschreibung:** Legt die Zeileneigenschaft für alle Zeilen in der Datentabelle fest.

**JMP Version hinzugefügt:** 19

**Allgemeine Verwendung**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states[0] = jmp.RowState(marker=4, color=3)print(dt.row_states)dt.row_states[0].selected = Truedt.row_states[1] = jmp.RowState(value=22)print(dt.row_states)

```

**Iteration**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')for i in range(len(dt.row_states)):    if dt['age'][i] % 2:        dt.row_states[i].selected = Trueprint(dt.row_states)

```

**Liste der ganzen Zahlen**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states = [33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]print(dt.row_states)

```

**Liste der Tupel (<Index>, <Zeileneigenschaft | Int>)**

```python

import jmpfrom jmp import RowStatedt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states = [(2, RowState(marker=2, selected=True)), (5, 97)]print(dt.row_states)

```

**Spalte mit Zeileneigenschaften**

```python

import jmpfrom jmp import DataTypedt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')rs_col = dt.new_column('rs', DataType.RowState)dt['rs'] = dt.row_statesdt['rs'][0] = jmp.RowState(value=33)dt['rs'][1] = jmp.RowState(color=2, marker=3)row_state = jmp.RowState(color=4, selected=False)dt['rs'][3] = row_staterow_state.marker = 9dt['rs'][4] = row_statedt.row_states = dt['rs']print(dt.row_states)

```

**Zeileneigenschaften zurücksetzen**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states = [33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]print(dt.row_states)dt.row_states = [0] * dt.nrowsprint(dt.row_states)

```

#### save

**Syntax:** dt.save( &lt; path=&apos;file_path&apos; &gt; )

**Beschreibung:** Datentabelle unter dem Tabellennamen im aktuellen Verzeichnis speichern. Das optionale Pfadargument ermöglicht das Speichern an einem anderen Ort oder unter einem anderen Namen.

**JMP Version hinzugefügt:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt[0][0] = 'Katie'dt.save('BC_lowercase.jmp')

```

#### scripts

**Syntax:** dt.scripts dt.scripts = &lt;dict&lt;str : &lt;str | Expression&gt;&gt;&gt;

**Beschreibung:** Die Eigenschaft Skripte ermöglicht das Lesen und Schreiben von Datentabellenskripten.

**JMP Version hinzugefügt:** 19

**Mehrere Skripte**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# Concatenationdt.scripts |= {    "Example": 'Print("Foo")',    "Example 2": jmp.Expression('Print("Bar")')}print("Distribution" in dt.scripts)print("Example" in dt.scripts)print("Example 2" in dt.scripts)# Reassigning of scripts removes all other scriptsdt.scripts = {    "Example": 'Print("FooBar")',}print(dt.scripts)# Iterationfor name, value in dt.scripts.items():    print(name, value)for name in dt.scripts:    print(name, dt.scripts[name])

```

**Skripte abrufen/festlegen**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# Getting a scriptprint(dt.scripts["Distribution"])# Adding a scriptdt.scripts["Example"] = 'Print("Foo")'dt.scripts["Example 2"] = jmp.Expression('Print("Bar")')# Getting all scriptsprint(dt.scripts)

```

**Skripte löschen**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# Reassigning of scripts removes all other scriptsdt.scripts = {    "Example": 'Print("Foo")',    "Example 2": jmp.Expression('Print("Bar")')}print("Distribution" in dt.scripts)   # Falseprint("Example" in dt.scripts)        # Trueprint("Example 2" in dt.scripts)      # True# Deleting a script# Note: If the script editing window is open, the script will not be deleted. del dt.scripts["Example"]dt.scripts["Example 2"] = Noneprint("Example" in dt.scripts)        # Falseprint("Example 2" in dt.scripts)      # Falsedt.scripts = {    "Example": 'Print("FooBar")',}# Deleting all scriptsdt.scripts = {}

```

#### select_columns

**Syntax:** select_columns(&apos;name&apos;, ..., &apos;name&apos;)

**Beschreibung:** Die Methode select_columms() funktioniert wie die äquivalente JSL-Nachricht Select Columns(). Akzeptierte Argumente sind: Spaltenname oder durch Kommata getrennte Namen; eine Python-Liste von Spaltennamen.

**JMP Version hinzugefügt:** 19

**Alle**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.select_columns([col.name for col in dt])# all columns should be selected.

```

**Beispiel 1**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.select_columns('weight')dt.select_columns('name', 'sex')dt.select_columns(['age', 'height'])# all columns should be selected.

```

## jmp > Expression

### Funktionen

#### Besondere Elemente

#### Eigenschaften

#### Gleichheit

**Beschreibung:** Das Expression-Objekt unterstützt Prüfungen auf Gleichheit und Ungleichheit. Beim Vergleich der Gleichheit zwischen zwei Expression-Objekten werden die Werte verglichen und zurückgegeben, ob sie gleich sind oder nicht. Dabei handelt es sich um einen Vergleich der Werte des Expression-Objekts und nicht um die Auswertung der Werte.

**JMP Version hinzugefügt:** 19

```python

import jmpexpr1 = jmp.Expression('1 + 1')expr2 = jmp.Expression('2 + 0')expr3 = jmp.Expression('1 + 1')print(expr1 == expr2)print(expr1 == expr3)print(expr1 != expr2)print(expr1 != expr3)

```

#### Konstruktoren

#### Konzepte

#### __eq__

**Syntax:** expression1 == expression2

**Beschreibung:** Der Test auf Gleichheit gibt „wahr“ zurück, wenn das Expression-Objekt denselben Inhalt wie ein anderes Expression-Objekt hat. Andernfalls gibt er „falsch“ zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpexpr1 = jmp.Expression('1 + 1')expr2 = jmp.Expression('2 + 0')expr3 = jmp.Expression('1 + 1')print(expr1 == expr2)print(expr1 == expr3)

```

#### __init__

**Syntax:** Expression(jsl=&lt;string&gt;)

**Beschreibung:** Erstellt ein neues Expression-Objekt.

**JMP Version hinzugefügt:** 19

```python

import jmpfrom jmp import Expression, evalexpr = Expression(jsl="2 + 2")print(f'Expression: {expr}')print(f'Result: {eval(expr)}')expr.jsl = '1 + 1'print(f'Expression Adjusted: {eval(expr)}')

```

#### __ne__

**Syntax:** expression1 != expression2

**Beschreibung:** Der Test auf Ungleichheit gibt „wahr“ zurück, wenn das Expression-Objekt einen anderen Inhalt als ein anderes Expression-Objekt hat. Andernfalls gibt er „falsch“ zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpexpr1 = jmp.Expression('1 + 1')expr2 = jmp.Expression('2 + 0')expr3 = jmp.Expression('1 + 1')print(expr1 != expr2)print(expr1 != expr3)

```

#### __str__

**Syntax:** str( expr_obj )

**Beschreibung:** Gibt eine String-Darstellung zurück, die alle Informationen über das Expression-Objekt enthält.

**JMP Version hinzugefügt:** 19

```python

import jmpexpr = jmp.Expression(':Height / :Weight')print(expr)

```

#### jsl

**Syntax:** expr_obj.jsl expr_obj.jsl = &lt;string&gt;

**Beschreibung:** Die JSL-Eigenschaft Expression ist lesbar und einstellbar.

**JMP Version hinzugefügt:** 19

```python

import jmpexpr = jmp.Expression(jsl='0 + 0')print(expr)expr.jsl = '2 + 2'print(expr)

```

## jmp > Image

### Funktionen

#### Besondere Elemente

#### Gleichheit

**Beschreibung:** Das Image-Objekt unterstützt Prüfungen auf Gleichheit und Ungleichheit. Beim Vergleich der Gleichheit zwischen zwei Image-Objekten werden die Werte verglichen und zurückgegeben, ob sie gleich sind oder nicht.

**JMP Version hinzugefügt:** 19

```python

import jmpimage1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')print(image1 == image2)print(image1 == image3)print(image1 != image2)print(image1 != image3)

```

#### Konstruktoren

#### Konzepte

#### __eq__

**Syntax:** image1 == image2

**Beschreibung:** Der Test auf Gleichheit gibt „wahr“ zurück, wenn das Image-Objekt denselben Inhalt wie ein anderes Image-Objekt hat. Andernfalls gibt er „falsch“ zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpimage1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')print(image1 == image2)print(image1 == image3)

```

#### __init__

**Syntax:** jmp.Image(path=&lt;string&gt;)

**Beschreibung:** Erstellt ein neues Image-Objekt.

**JMP Version hinzugefügt:** 19

```python

import jmpimage = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')print(f'Image: {image}')jmp.open(image)

```

#### __ne__

**Syntax:** image1 != image2

**Beschreibung:** Der Test auf Ungleichheit gibt „wahr“ zurück, wenn das Image-Objekt einen anderen Inhalt als ein anderes Image-Objekt hat. Andernfalls gibt er „falsch“ zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpimage1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')print(image1 != image2)print(image1 != image3)

```

#### __str__

**Syntax:** str( image_obj )

**Beschreibung:** Gibt eine String-Darstellung zurück, die alle Informationen über das Image-Objekt enthält.

**JMP Version hinzugefügt:** 19

```python

import jmpimage = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')print(image)

```

## jmp > Project

### Funktionen

#### Besondere Elemente

#### Eigenschaften

#### Funktionen

#### Konstruktoren

#### __init__

**Syntax:** prj = jmp.Project(&lt;name=&apos;Project name&apos;&gt;)

**Beschreibung:** Ein neues Projektobjekt für den Zugriff auf JMP-Projekte und -Dateien erzeugen.

**JMP Version hinzugefügt:** 19

**Benanntes leeres Projekt**

```python

import jmpprj = jmp.Project('My Project')

```

**Leeres Projekt**

```python

import jmpprj = jmp.Project()

```

**Projektname**

```python

import jmpprj = jmp.Project()print(prj.name)

```

#### __str__

**Syntax:** str( project )

**Beschreibung:** Gibt die String-Darstellung des Projekts zurück

**JMP Version hinzugefügt:** 19

```python

import jmpprj = jmp.Project()print( prj )

```

#### contents

**Syntax:** prj.name

**Beschreibung:** Gibt eine Liste der Dateinamen im Projekt zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpprj = jmp.Project()print(prj.contents)

```

#### exists

**Syntax:** prj.exists(&apos;file_name&apos;)

**Beschreibung:** Prüft einen Dateinamen daraufhin, ob die Datei im Projekt vorhanden ist.

**JMP Version hinzugefügt:** 19

```python

import jmpprj = jmp.Project()print( prj.exists('myfile.data') )

```

#### extract

**Syntax:** prj.extract(&apos;file_name&apos;)

**Beschreibung:** Extrahiert eine Datei anhand des Dateinamens aus dem Projekt in das temporäre Verzeichnis des Projekts.

**JMP Version hinzugefügt:** 19

```python

import jmpprj = jmp.Project()success = prj.extract('myfile.data')

```

#### extract_all

**Syntax:** prj.extract_all()

**Beschreibung:** Extrahiert alle Projektdateien in das temporäre Verzeichnis des Projekts.

**JMP Version hinzugefügt:** 19

```python

import jmpprj = jmp.Project()success = prj.extract_all()

```

#### is_extracted

**Syntax:** prj.is_extracted(&apos;file_name&apos;)

**Beschreibung:** Prüft einen Dateinamen daraufhin, ob die Datei bereits aus dem Projektarchiv extrahiert wurde.

**JMP Version hinzugefügt:** 19

```python

import jmpprj = jmp.Project()print( prj.is_extracted('myfile.data') )

```

#### name

**Syntax:** prj.name

**Beschreibung:** Die Eigenschaft Projektname ist schreibgeschützt

**JMP Version hinzugefügt:** 19

```python

import jmpprj = jmp.Project()print(prj.name)

```

## jmp > RowState

### Funktionen

#### Besondere Elemente

#### Eigenschaften

#### Gleichheit

**Beschreibung:** Das RowState-Objekt unterstützt Prüfungen auf Gleichheit und Ungleichheit. Beim Vergleich der Gleichheit zwischen zwei RowState-Objekten werden die Werte verglichen und zurückgegeben, ob sie gleich sind oder nicht. Wenn zwei RowState-Objekte den gleichen Inhalt haben, aber unterschiedlich initialisiert sind, wird für sie trotzdem „wahr“ zurückgegeben.

**JMP Version hinzugefügt:** 19

```python

import jmprs1 = jmp.RowState(color=4, marker=2, selected=True)rs2 = jmp.RowState(color=11, excluded=True, labeled=True)rs3 = jmp.RowState(value=1057)print(rs1 == rs2)print(rs1 == rs3)print(rs1 != rs2)print(rs1 != rs3)

```

#### Konstruktoren

#### Konzepte

#### __eq__

**Syntax:** rs1 == rs2

**Beschreibung:** Der Test auf Gleichheit gibt „wahr“ zurück, wenn das RowState-Objekt denselben Inhalt wie ein anderes RowState-Objekt hat. Andernfalls gibt er „falsch“ zurück.

**JMP Version hinzugefügt:** 19

```python

import jmprs1 = jmp.RowState(color=4, marker=2, selected=True)rs2 = jmp.RowState(color=11, excluded=True, labeled=True)rs3 = jmp.RowState(value=1057)print(rs1 == rs2)print(rs1 == rs3)

```

#### __init__

**Syntax:** jmp.RowState(selected?=&lt;boolean&gt;, hidden?=&lt;booleane&gt;, labeled?=&lt;boolean&gt;, excluded?=&lt;boolean&gt;, color?=&lt;int&gt;, marker?=&lt;int&gt;) jmp.RowState(value=&lt;int&gt;)

**Beschreibung:** Erzeugt ein neues RowState-Objekt. RowState ist ein Objekt, das eine der sechs Eigenschaften enthält, die Zeilen in einer JMP-Datentabelle haben können: ausgewählt, ausgeblendet, ausgeschlossen, beschriftet, gefärbt oder Symbol.

**JMP Version hinzugefügt:** 19

```python

import jmpfrom jmp import RowStaters = RowState(color=4, marker=2, selected=True)print(f'Row State: {rs}')rs_from_value = RowState(value=33)print(f'Row State from Value: {rs_from_value}')

```

#### __ne__

**Syntax:** image1 != image2

**Beschreibung:** Der Test auf Ungleichheit gibt „wahr“ zurück, wenn das RowState-Objekt einen anderen Inhalt als ein anderes RowState-Objekt hat. Andernfalls gibt er „falsch“ zurück.

**JMP Version hinzugefügt:** 19

```python

import jmprs1 = jmp.RowState(color=4, marker=2, selected=True)rs2 = jmp.RowState(color=11, excluded=True, labeled=True)rs3 = jmp.RowState(value=1057)print(rs1 != rs2)print(rs1 != rs3)

```

#### __str__

**Syntax:** str( rs_obj )

**Beschreibung:** Gibt eine String-Darstellung zurück, die alle Informationen über das RowState-Objekt enthält.

**JMP Version hinzugefügt:** 19

```python

import jmprs = jmp.RowState(color=11, excluded=True, labeled=True)print(rs)

```

#### color

**Syntax:** rs_obj.color rs_obj.color = &lt;int&gt;

**Beschreibung:** RowState-Eigenschaft „gefärbt“ ist lesbar und einstellbar. Die Farben werden von 0 bis 84 gewählt (0-15 Basis, 16-31 dunkel, 32-47 hell, 48-63 sehr dunkel, 64-79 sehr hell, 80-84 Grautöne).

**JMP Version hinzugefügt:** 19

```python

import jmprs = jmp.RowState(color=5)print(rs)rs.color = 0print(rs)

```

#### excluded

**Syntax:** rs_obj.excluded rs_obj.excluded = &lt;boolean&gt;

**Beschreibung:** RowState-Eigenschaft „ausgeschlossen“ ist lesbar und einstellbar.

**JMP Version hinzugefügt:** 19

```python

import jmprs = jmp.RowState(excluded=True)print(rs)rs.excluded = False print(rs)

```

#### hidden

**Syntax:** rs_obj.hidden rs_obj.hidden = &lt;boolean&gt;

**Beschreibung:** RowState-Eigenschaft „ausgeblendet“ ist lesbar und einstellbar.

**JMP Version hinzugefügt:** 19

```python

import jmprs = jmp.RowState(hidden=True)print(rs)rs.hidden = False print(rs)

```

#### labeled

**Syntax:** rs_obj.labeled rs_obj.labeled = &lt;boolean&gt;

**Beschreibung:** RowState-Eigenschaft „beschriftet“ ist lesbar und einstellbar.

**JMP Version hinzugefügt:** 19

```python

import jmprs = jmp.RowState(labeled=True)print(rs)rs.labeled = False print(rs)

```

#### marker

**Syntax:** rs_obj.marker rs_obj.marker = &lt;int&gt;

**Beschreibung:** RowState-Eigenschaft „Symbol“ ist lesbar und einstellbar. Symbole werden von 0 bis 31 gewählt.

**JMP Version hinzugefügt:** 19

```python

import jmprs = jmp.RowState(marker=3)print(rs)rs.marker = 0print(rs)

```

#### selected

**Syntax:** rs_obj.selected rs_obj.selected = &lt;boolean&gt;

**Beschreibung:** RowState-Eigenschaft „ausgewählt“ ist lesbar und einstellbar.

**JMP Version hinzugefügt:** 19

```python

import jmprs = jmp.RowState(selected=True)print(rs)rs.selected = False print(rs)

```

## jmp > globals

### Funktionen

#### Besondere Elemente

#### Iteration

**Beschreibung:** Die Eigenschaft „globals“ unterstützt die Iteration über den Wertesatz.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['e'] = 2.718jmp.run_jsl('''    show(::pi)''')for x in jmp.globals:    print( x )

```

#### Konzepte

#### Methoden

#### __getitem__

**Syntax:** value = jmp.globals[&apos;name&apos;]

**Beschreibung:** Ruft eine globale JSL-Variable als Python-Objekt ab. Gibt None zurück, wenn das Objekt nicht gefunden werden kann. Gibt einen maskierten Typ für den Datentyp zurück, der nicht verarbeitet werden kann. Kann die gleichen Objekttypen übertragen wie Python Send() und Python Get().

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.run_jsl('''    pi = 3.1415929''')print( jmp.globals['pi'] )

```

#### __len__

**Syntax:** length = len( jmp.globals )

**Beschreibung:** Gibt die Anzahl von Symbolen in der globalen JSL-Umgebung zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpprint( len( jmp.globals ) )jmp.globals['pi'] = 3.1415927print( len( jmp.globals ) )jmp.globals['e'] =  2.7182818print( len( jmp.globals ) )

```

#### __setitem__

**Syntax:** jmp.globals[&apos;name&apos;] = value

**Beschreibung:** Aufgrund des Python-Namensraums und der Gestaltung von Python Get() sind nur Variablen im globalen Python-Namensraum mit Python Get() zugänglich. Das Wörterbuch jmp.globals bietet die Möglichkeit, eine JSL-Variable direkt aus Python-Code festzulegen oder zu erstellen. Der Wertetyp kann jeder Python-Typ sein, der derzeit von Python Get() unterstützt wird.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.run_jsl('''    show(pi)''')

```

#### __str__

**Syntax:** str(jmp.globals)

**Beschreibung:** Zeigt den Inhalt von globalen Variablen in Form eines Wörterbuchs an. Beachten Sie, dass das Wörterbuch der globalen Variablen von JMP selbst verwendet wird, deshalb können zusätzliche Einträge vorhanden sein.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['e'] =  2.7182818jmp.globals['Bb'] = 'bumble bee'print( jmp.globals )d = str(jmp.globals)print(d)

```

#### get

**Syntax:** value = jmp.globals.get(&apos;name&apos;)

**Beschreibung:** Die Funktion get() gibt den Wert für den angegebenen Schlüssel zurück. Wie bei JSL ist der Schlüssel eine Fuzzy-Übereinstimmung.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['an A'] = 'Annie'print( jmp.globals.get('pi') )                        print( jmp.globals.get('ana') )

```

#### items

**Syntax:** item_list = jmp.globals.items()

**Beschreibung:** Gibt eine Liste von Schlüssel-Wert-Paaren im Namensraum zurück. Beachten Sie, dass das Wörterbuch der globalen Variablen von JMP selbst verwendet wird, deshalb kann es zusätzliche Einträge geben.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['bB'] = 'Bumble Bee'print( jmp.globals.items() )

```

#### keys

**Syntax:** key_list = jmp.globals.keys()

**Beschreibung:** Gibt eine Liste von Schlüsseln im Namensraum zurück. Beachten Sie, dass das Wörterbuch der globalen Variablen von JMP selbst verwendet wird, deshalb kann es zusätzliche Einträge geben.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['bB'] = 'Bumble Bee'print( jmp.globals.keys() )

```

#### values

**Syntax:** value_list = jmp.globals.values()

**Beschreibung:** Gibt die Werte im Namensraum zurück. Beachten Sie, dass das Wörterbuch der globalen Variablen von JMP selbst verwendet wird, deshalb kann es zusätzliche Einträge geben.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['bB'] = 'Bumble Bee'print( jmp.globals.values() )

```

## jmp > here

### Funktionen

#### Besondere Elemente

#### Iteration

**Beschreibung:** Die Eigenschaft „here“ unterstützt die Iteration über die Werte im Namensraum „here“.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.globals['e'] = 2.718jmp.run_jsl('''    Names Default to Here(1);    show(pi)''')for x in jmp.here:    print( x )print([x for x in jmp.globals])

```

#### Konzepte

#### Methoden

#### __getitem__

**Syntax:** value = jmp.here[&apos;name&apos;]

**Beschreibung:** Ruft eine JSL-Variable aus dem aktuellen Namensraum „here“ als Python-Objekt ab. Gibt None zurück, wenn das Objekt nicht gefunden werden kann, oder einen undurchsichtigen Typ für Datentypen, die noch nicht verarbeitet werden können. Ermöglicht den direkten Abruf einer JSL-Variablen im lokalen Python-Bereich. Unterstützt die Übertragung der gleichen Objekttypen wie Python Send(). Beachten Sie, dass bei der JSL-Namensraumzuordnung der „here“-Namensraum lokal für die Skriptübermittlung ist, und dass Code, der aus verschiedenen Skriptfenstern übermittelt wird, separate „here“-Namensräume hat. Code, der ein anderes Skript enthält, hat einen einzigen „here“-Namensraum. Dieser freigegebene Namensraum existiert auch für ein JSL-Skript, das Python über Submit() oder Execute() ausführt, sowie für Python-Skripte, die run_jsl() aufrufen.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```python

import jmpjmp.globals['e'] = 2.71828jmp.run_jsl('''    Names Default to Here(1);    pi = 3.1415929;    show(::e);''')print( jmp.here['pi'] )

```

**Scope**

```python

import jmpjmp.run_jsl('''Names Default to Here(1);here_v = "here";Show(here_v);''')print( f'temporary: {jmp.here['here_v']}' )try:        print(here_v)except:    print('here_v is not in Python globals().')def scoped():    v = jmp.here['here_v']    print(f'scoped: {v}')    scoped()try:        print(v)except:    print('v is local to scoped().')

```

#### __len__

**Syntax:** length = len( jmp.here )

**Beschreibung:** Gibt die Anzahl von Symbolen im JSL-Namensraum „here“ zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpprint( len( jmp.here ) )jmp.here['pi'] = 3.1415927print( len( jmp.here ) )jmp.here['e'] =  2.7182818print( len( jmp.here ) )

```

#### __setitem__

**Syntax:** jmp.here[&apos;name&apos;] = value

**Beschreibung:** Bietet die Möglichkeit, einen Wert im „here“-Namensraum des JSL-Skripts zu festzulegen. Dies ermöglicht das Zurücksenden eines Werts, der mit Python Get() nicht erreicht werden konnte. Nur Variablen im globalen Bereich von Python können von Python Get() gesehen werden. Unterstützt dieselben Objekttypen wie Python Get(). Hinweis zum JSL-Namensraumbereich: der Namensraum „here“ ist lokal für die Skriptübermittlung. Code, der aus verschiedenen Skriptfenstern eingereicht wird, hat separate „here“-Namensräume. Code, der ein anderes Skript einschließt, hat einen einzigen „here“-Namensraum. Das gilt für ein JSL-Skript, das Python über Submit() oder Execute() ausführt, sowie für Python-Skripte, die run_jsl() aufrufen.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.run_jsl('''    Names Default to Here(1);    show(pi)''')

```

#### __str__

**Syntax:** str(jmp.here)

**Beschreibung:** Zeigt den Inhalt von „here“ in Form eines Wörterbuchs an.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['e'] =  2.7182818jmp.here['Bb'] = 'bumble bee'print( jmp.here )d = str(jmp.here)print(d)

```

#### get

**Syntax:** value = jmp.here.get(&apos;name&apos;)

**Beschreibung:** Die Funktion get() gibt den Wert für den angegebenen Schlüssel zurück. Wie bei JSL ist der Schlüssel eine Fuzzy-Übereinstimmung.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.get('pi') )                        print( jmp.here.get('b  b') )

```

#### items

**Syntax:** item_list = jmp.here.items()

**Beschreibung:** Gibt eine Liste von Schlüssel-Wert-Paaren im Namensraum zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.items() )

```

#### keys

**Syntax:** key_list = jmp.here.keys()

**Beschreibung:** Gibt eine Liste der Schlüssel im Namensraum zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.keys() )

```

#### values

**Syntax:** value_list = jmp.here.values()

**Beschreibung:** Gibt die Werte im Namensraum zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.values() )

```

## jmp > live

### Funktionen

#### Funktionen

#### get_credentials()

**Syntax:** jmp.live.get_credentials(&lt;credential_name&gt;)

**Beschreibung:** Gibt in JMP Live-Datenaktualisierungsskripten die dem Skript zugewiesenen Benutzerdaten mit dem vorgegebenen Namen (oder, falls kein Name angegeben wird, die Standard-Benutzerdaten) zurück. Der zurückgegebene Wert ist ein Wörterbuch mit den Schlüsseln „username“, „password“ und „key_file_path“.

**JMP Version hinzugefügt:** 19

```python

import jmpdt = jmp.DataTable()credentials = jmp.live.get_credentials()# login to external data source using credentials['username'] and credentials['password']# create dt using obtained datajmp.live.set_result(dt)

```

#### get_import_file_path()

**Syntax:** jmp.live.get_import_file_path()

**Beschreibung:** Gibt in JMP Live-Datenimportskripten den Pfad zur hochgeladenen Importdatei zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpdt = jmp.DataTable()importPath = jmp.live.get_import_file_path()with open(importPath) as importFile:    # [import data from importFile to dt]jmp.live.set_result(dt)

```

#### set_result()

**Syntax:** jmp.live.set_result()

**Beschreibung:** Legt in JMP Live-Datenaktualisierungs- und Importskripten die Ergebnistabelle fest. Legen Sie „none“ fest, um die Aktualisierung abzubrechen.

**JMP Version hinzugefügt:** 19

```python

import jmpdt = jmp.DataTable()shouldUpdate = True# add data to dt, or set shouldUpdate to Falseif shouldUpdate:    jmp.live.set_result(dt)else:    jmp.live.set_result(None)

```

## jmp > log

### Funktionen

#### Funktionen

#### flush

**Syntax:** jmp.log.flush()

**Beschreibung:** Die Funktionen log.flush() und log.write() überladen die Funktionen stdio und stderr flush() und write() von Python. Diese Funktionen sind hauptsächlich für die interne Verwendung von JMP gedacht, da sie die Ausgabe von Python zum JMP-Protokoll und den eingebetteten Protokollfenstern leiten. jmp.log.flush() ist ein NOP und gibt einen leeren String zurück.

**JMP Version hinzugefügt:** 18

```python

import jmpimport jmp.logjmp.log.flush()

```

#### write

**Syntax:** jmp.log.write(&apos;message&apos;)

**Beschreibung:** Die Funktionen log.flush() und log.write() überladen die Funktionen stdio und stderr flush() und write() von Python. Diese Funktionen sind hauptsächlich für die interne Verwendung von JMP gedacht, da sie die Ausgabe von Python zum JMP-Protokoll und den eingebetteten Protokollfenstern leiten. Programme können jmp.log.write(&apos;message&apos;) aufrufen, um die Meldung explizit an das JMP-Protokoll oder an eingebettete Protokollfenster zu senden.

**JMP Version hinzugefügt:** 18

```python

import jmpimport jmp.logjmp.log.write('I am a log message.')

```

## jmp

### Funktionen

#### ALL_HOME

**Syntax:** jmp.ALL_HOME

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $ALL_HOME.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.ALL_HOME)

```

#### Aufzählungen

#### BUILTIN_SCRIPTS

**Syntax:** jmp.BUILTIN_SCRIPTS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $BUILTIN_SCRIPTS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.BUILTIN_SCRIPTS)

```

#### DESKTOP

**Syntax:** jmp.DESKTOP

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $DESKTOP.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.DESKTOP)

```

#### DOCUMENTS

**Syntax:** jmp.DOCUMENTS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $DOCUMENTS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.DOCUMENTS)

```

#### DOWNLOADS

**Syntax:** jmp.DOWNLOADS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $DOWNLOADS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.DOWNLOADS)

```

#### DataType

**Syntax:** jmp.DataType.enum_value

**Beschreibung:** jmp.DataType ist eine Aufzählung, die die Datentypen einer JMP-Spalte darstellt. Diese werden mit der Funktion jmp.DataTable.new_column() verwendet, um andere Spalten als den Standardtyp Numerisch zu erstellen.

**JMP Version hinzugefügt:** 18

```python

import jmp# for the sake of typingfrom jmp import DataType as dTypeprint('jmp.DataType members:')print( list(map(lambda c: c.name, dType)) )

```

#### Funktionen

#### HOME

**Syntax:** jmp.HOME

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $HOME.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.HOME)

```

#### JMPPRJ

**Syntax:** jmp.JMPPRJ

**Beschreibung:** Gibt den physischen Pfad des temporären Verzeichnisses des Projekts zurück. Gibt das aktuelle Arbeitsverzeichnis zurück, oder None, wenn das Skript nicht in einem Projekt läuft.

**JMP Version hinzugefügt:** 19

```python

import jmpprint(jmp.JMPPRJ)

```

#### Konstanten

#### ModelingType

**Syntax:** jmp.ModelingType.enum_value

**Beschreibung:** jmp.ModelingType ist eine Aufzählung, die den Modellierungs- oder Analysetyp einer JMP-Spalte darstellt. Diese werden mit der Funktion jmp.DataTable.new_column() verwendet, um andere Spalten als den Standardtyp-Modellierungstyp Stetig zu erstellen. Beachten Sie, dass sich TypeNone vom JMP-Modellierungstyp None unterscheidet, da „None“ ein Python-Schlüsselwort ist.

**JMP Version hinzugefügt:** 18

```python

import jmp# for the sake of typingfrom jmp import ModelingType as mTypeprint('jmp.ModleingType members:')print( list(map(lambda c: c.name, mType)) )

```

#### PYTHONW_EXE

**Syntax:** jmp.PYTHONW_EXE

**Beschreibung:** Pfad zu der von JMP installierten ausführbaren Python-Datei ohne Konsole (nur Windows).

**JMP Version hinzugefügt:** 19

```python

import jmpimport platformif platform.system() == "Windows":    print(jmp.PYTHONW_EXE)

```

#### PYTHON_EXE

**Syntax:** jmp.PYTHON_EXE

**Beschreibung:** Pfad zu der von JMP installierten ausführbaren Python-Datei.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.PYTHON_EXE)

```

#### PY_USER_APPDIR

**Syntax:** jmp.PY_USER_APPDIR

**Beschreibung:** Pfad zum Benutzerverzeichnis, das als Basis für die Python-Unterstützung von JMP dient. Das Verzeichnis site-packages befindet sich innerhalb dieser Verzeichnishierarchie.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.PY_USER_APPDIR)

```

#### SAMPLE_APPS

**Syntax:** jmp.SAMPLE_APPS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_APPS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_APPS)

```

#### SAMPLE_DASHBOARDS

**Syntax:** jmp.SAMPLE_DASHBOARDS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_DASHBOARDS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_DASHBOARDS)

```

#### SAMPLE_DATA

**Syntax:** jmp.SAMPLE_DATA

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_DATA.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_DATA)

```

#### SAMPLE_IMAGES

**Syntax:** jmp.SAMPLE_IMAGES

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_IMAGES.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_IMAGES)

```

#### SAMPLE_IMPORT_DATA

**Syntax:** jmp.SAMPLE_IMPORT_DATA

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_IMPORT_DATA.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_IMPORT_DATA)

```

#### SAMPLE_PROJECTS

**Syntax:** jmp.SAMPLE_PROJECTS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_PROJECTS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_PROJECTS)

```

#### SAMPLE_SCRIPTS

**Syntax:** jmp.SAMPLE_SCRIPTS

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $SAMPLE_SCRIPTS.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.SAMPLE_SCRIPTS)

```

#### TEMP

**Syntax:** jmp.TEMP

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $TEMP.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.TEMP)

```

#### USER_APPDATA

**Syntax:** jmp.USER_APPDATA

**Beschreibung:** Wert entspricht dem JSL-Verzeichnis $USER_APPDATA.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.USER_APPDATA)

```

#### __jmp_version__

**Syntax:** jmp.__jmp_version__

**Beschreibung:** Versionsnummer der ausführbaren JMP-Datei.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.__jmp_version__)

```

#### __version__

**Syntax:** jmp.__version__

**Beschreibung:** Versionsnummer der JMP-Importpakete. Dies ist nicht die JMP-Version.

**JMP Version hinzugefügt:** 18

```python

import jmpprint(jmp.__version__)

```

#### current

**Syntax:** dt = jmp.current()

**Beschreibung:** Gibt ein Datentabellenobjekt für die aktuelle JMP-Datentabelle zurück.

**JMP Version hinzugefügt:** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(jmp.current())

```

#### eval

**Syntax:** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**Beschreibung:** Wertet das Argument aus und gibt das Ergebnis zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpfrom jmp import eval, Expressionexpression = Expression("2 + 2")result = eval(expression)print(result)

```

#### from_dataframe

**Syntax:** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;, visibility=&lt;string&gt;)

**Beschreibung:** Gibt ein jmp.DataTable-Objekt aus einem Datenrahmen einer protokollkonformen Bibliothek zurück.

**JMP Version hinzugefügt:** 19

**CSV-Fallback**

```python

import jmpimport jmputils        try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe(df)print(dt)

```

**Ibis nach JMP**

```python

import jmpimport jmputils try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)    jmputils.jpip('install', 'ibis-framework[duckdb,examples]') except Exception as e:    print(f'Install failed with exception: {e}')          import pandas as pd import ibis  pandas_df = pd.DataFrame(     [["a", 1, 2], ["b", 3, 4]],     columns=["one", "two", "three"], ) t = ibis.memtable(pandas_df, name="t") print(t) dt = jmp.from_dataframe(t) print(dt)

```

**JMP nach Pandas**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pddt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")pandas_df = (pd.api.interchange.from_dataframe(dt))print(pandas_df)

```

**JMP nach Polars**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as pldt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")polars_df = pl.from_dataframe(dt)print(polars_df)

```

**Pandas nach JMP**

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df)print(dt)

```

**Polars nach JMP**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as plfrom datetime import datepolars_df = pl.DataFrame( {    "foo": [1, 2, 3],    "bar": [6.0, 7.0, 8.0],    "ham": [date(2020, 1, 2), date(2021, 3, 4), date(2022, 5, 6)],  } ) print(polars_df) dt = jmp.from_dataframe(polars_df) print(dt)

```

**Visibility**

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df, visibility="invisible")#dt = jmp.from_dataframe(pandas_df, visibility="private")print(dt)

```

#### from_dataframe_using_csv

**Syntax:** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;, visibility=&lt;string&gt;)

**Beschreibung:** Gibt ein jmp.DataTable-Objekt aus dem Datenrahmen einer Bibliothek unter Verwendung der bereitgestellten CSV-Konvertierungsmethode zurück.

**JMP Version hinzugefügt:** 19

**General**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})try:    # Try converting object without CSV fallback    dt = jmp.from_dataframe(df, True, False)    print("Converted using jmp.from_dataframe()")except:     # Explicitly convert using CSV    dt = jmp.from_dataframe_using_csv(df)    print("Converted using jmp.from_dataframe_using_csv()")print(dt)

```

**Visibility**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe_using_csv(df, visibility="invisible")#dt = jmp.from_dataframe_using_csv(df, visibility="private")print(dt)

```

#### open

**Syntax:** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**Beschreibung:** Öffnet eine Datei, die sich unter file_path befindet. Handelt es sich bei der Datei um eine .jmp-Datei oder eine Datei, die in eine JMP-Datentabelle importiert wird, ist das zurückgegebene Objekt ein DataTable-Objekt. Andernfalls wird „wahr“ oder „falsch“ für Erfolg oder Misserfolg zurückgegeben. Der optionale Parameter visibility bestimmt, ob die geöffnete Datei ausgeblendet wird. Unsichtbar bedeutet, dass die Datei nicht angezeigt wird, aber dennoch im Menü „Zuletzt geöffnete Dateien“ und im Hauptfenster erscheint. Bei einer privaten Tabelle ist die zurückgegebene Referenz die einzige Referenz auf die Tabelle, und sie erscheint in keiner der Dateilisten.

**JMP Version hinzugefügt:** 18

**Excel**

```python

import jmpobj = jmp.open(jmp.SAMPLE_IMPORT_DATA + 'Bigclass.xlsx')print(obj)

```

**JMP**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt)

```

**JSL-Skript**

```python

import jmpobj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')print(obj)

```

**Privat**

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')dt = jmp.current()print(dt)  # => Nonetry:  dt = jmp.table('Animals')except FileNotFoundError:  print('Requested table not found')dt = jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')print(dt)dt.close(save=False)del dt

```

**Unsichtbar**

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Invisible')dt = jmp.current()print(dt)  # successdt = jmp.table('Animals')print(dt)  # success# Select and run the above first if you want to see that even though# there is no window, Animals.jmp appears in recent files and# home window's list of filesdt.close(save=False);del dt

```

#### path_variable

**Syntax:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**Beschreibung:** Gibt den Wert einer Pfadvariablen zurück, z. B. einen Namen wie SAMPLE_DATA, der, wenn er in Pfadnamen gefunden wird, ersetzt wird.

**JMP Version hinzugefügt:** 19

```python

import jmppath_value = jmp.path_variable('SAMPLE_DATA')if not path_value:    print('Invalid path variable.')else:    print(path_value)

```

#### r_name

**Syntax:** dt = jmp.r_name(jsl_var)

**Beschreibung:** Ordnet einen JMP-Variablennamen einem R-Variablennamen zu und verwendet Namensregeln von R-Variablen.

**JMP Version hinzugefügt:** 19

```python

import jmprName = jmp.r_name('c d e')print(rName)

```

#### reset

**Syntax:** jmp.reset()

**Beschreibung:** Setzt die freigegebene Python-Umgebung zurück, wobei in erster Linie alle Verweise auf Objekte gelöscht werden. Der Import-Cache von importierten Modulen wird dabei nicht verändert. Dies ist eine Einschränkung der Python-Umgebung selbst. Module, die freigegebene Bibliotheken laden, können von dem laufenden Prozess nicht entladen werden. Wie Sie reinen Python-Code neu laden, erfahren Sie in der Python.org-Dokumentation zu importlib reload().

**JMP Version hinzugefügt:** 19

```python

import jmppi = 3.1415927print(pi)jmp.reset()print(pi)

```

#### run_jsl

**Syntax:** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**Beschreibung:** Ausführen von JSL-Skripten in der Python-Umgebung, einschließlich der JSL-Python-Schnittstellenfunktionen. Der optionale Parameter echo=, wenn er auf False oder None gesetzt ist, verhindert, dass der dargestellte JSL-Quellcode als Echo in das Protokoll geschrieben wird. Es wird ein Ergebnis für die gleichen JSL-Objekttypen zurückgegeben, die von Python Send() / Get() unterstützt werden. Bei Skriptfehlern oder nicht unterstützten JSL-Objekttypen wird None zurückgegeben.

**JMP Version hinzugefügt:** 18

**Rückgabewert**

```python

import jmpvalue = jmp.run_jsl('''Names default to here(1);an A = 1.5;x = 5 * anA;''')print( f'{value} = jmp.run_jsl()')

```

**Spalteneigenschaften**

```python

import jmp# Create a data table# dt = jmp.DataTable(name='table_name', rows=n)pbp = jmp.DataTable(rows=5)pbp.name = 'Powered by Python'pbp.new_column('Name', jmp.DataType.Character)pbp.new_column('Hourly Rate')#pbp['Name'] = ['Janet', 'James', 'Jerry', 'Jenny', 'Jill']pbp[1] = [ 14.25, 9.75, 15.0, 12.35, '17.25']  # last value bad => becomes missingpbp[1][4] = 17.25## Change column format: Hourly Ratejmp.run_jsl('''Data Table( "Powered by Python" ):Hourly Rate << Format( "Currency", "USD", 17, 2 );Data Table( "Powered by Python" ):Name << Set Display Width( 75 );''')

```

**Version abrufen**

```python

import jmpjmp.run_jsl('Python Get Version();')

```

#### table

**Syntax:** dt = jmp.table(&apos;table_name&apos;)

**Beschreibung:** Gibt ein DataTable-Objekt für die geöffnete Tabelle mit &apos;table_name&apos; zurück.

**JMP Version hinzugefügt:** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( jmp.table('Big Class') )

```

## jmpex > R - module > R - class

### Funktionen

#### Funktionen

#### Konstanten

#### Konstruktoren

#### __init__

**Syntax:** jmpex.R.R( &lt;&apos;rpy2&apos;&gt; )

**Beschreibung:** Funktion zur Erstellung eines R-Erweiterungsklassenobjekts. Optionaler Parameter zur Angabe des Backends für die R-Unterstützung. Derzeit wird nur „rpy2“ unterstützt. Dies ist der Standard, wenn kein Argument angegeben wird.

**JMP Version hinzugefügt:** 19

```python

import jmpfrom jmpex.R import Rjr = R()print(jr.r_version())

```

#### __version__

**Syntax:** ver = jmpex.R.R().__version__

**Beschreibung:** Die R-Supportversion des jmpex-Pakets

**JMP Version hinzugefügt:** 19

```python

import jmpfrom jmpex.R import Rjr = R()print(jr.__version__)

```

#### get

**Syntax:** pyobj = jmpex.R.R.get( &apos;name&apos; )

**Beschreibung:** Ruft die benannte Variable aus der R-Umgebung ab und gibt sie mit der Funktion r2obj() an Python zurück. Ein R DataFrame wird als ein pandas.DataFrame zurückgegeben.

**JMP Version hinzugefügt:** 19

**Datentabelle festlegen**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()d = jr.set( dt , 'rdt' )   # as_name required from Pythonprint(d.__class__)print(d)# A R DataFrame is returned to Python as a pandas.DataFramerdt = jr.get('rdt')print( rdt.__class__ )print( rdt )

```

**Numerischer Vektor**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# initialize jmpex.R.R classjr = R()a = dt['age']nar = np.array( a )print(nar.__class__)print(nar)rv = ro.vectors.FloatVector(nar)print(rv.__class__)print(rv)

```

**Spalte festlegen**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()a = jr.set( dt['age'], 'rage' )   # as_name required from Pythonprint(a.__class__)print(a)ra = jr.get('rage')print( ra.__class__ )print( ra )

```

**Zeichenkettenvektor**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()s = dt['name']nas = np.array(s)print(nas.__class__)print(nas)rv = ro.vectors.StrVector(nas)print(rv.__class__)print(rv)

```

#### is_connected

**Syntax:** jmpex.R.R.is_connected( )

**Beschreibung:** Statische Funktion, die unabhängig davon verfügbar ist, ob ein R()-Instanzobjekt vorhanden ist oder nicht. Zeigt an, dass das R-Subsystem initialisiert wurde.

**JMP Version hinzugefügt:** 19

```python

import jmpfrom jmpex.R import Rprint(f'R initialized: {R.is_connected()}')jr = R()print(f'R initialized: {R.is_connected()}')

```

#### obj2r

**Syntax:** jmpex.R.R.obj2r( var )

**Beschreibung:** Erstellt ein R-Objekt aus einem Python-Objekt.

**JMP Version hinzugefügt:** 19

```python

import jmpfrom jmpex.R import Rjr = R()d = { "canine": ["poodle", "dalmation", "wolf"],       "ages": [ 1, 3, 5],       "vet bill": [200.0, 300.57, 2000.99] }      r_obj = jr.obj2r( d )p_obj = jr.r2obj( r_obj )print(r_obj.__class__)print(r_obj)print(p_obj.__class__)print(p_obj)

```

#### r2obj

**Syntax:** jmpex.R.R.r2obj( var )

**Beschreibung:** Erstellt ein reguläres Python-Objekt aus dem R-Objekt.

**JMP Version hinzugefügt:** 19

```python

import jmpfrom jmpex.R import Rjr = R()d = { "canine": ["poodle", "dalmation", "wolf"],       "ages": [ 1, 3, 5],       "vet bill": [200.0, 300.57, 2000.99] }      r_obj = jr.obj2r( d )p_obj = jr.r2obj( r_obj )print(r_obj.__class__)print(r_obj)print(p_obj.__class__)print(p_obj)

```

#### r_version

**Syntax:** ver = jmpex.R.R.r_version( )

**Beschreibung:** Gibt die Version von R zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpfrom jmpex.R import Rjr = R()print(f'R Version: {jr.r_version()}')

```

#### set

**Syntax:** jmpex.R.R.set( var, as_name )

**Beschreibung:** Setzt eine Python-Variable in die R-Umgebung, die durch den Parameter „as_name“ benannt ist. Das R-Objekt wird intern mit der Funktion obj2r() erstellt. Name wurde über die entsprechende Funktion name -> R Name() übergeben, um sicherzustellen, dass name ein gültiger R-Variablenname ist.

**JMP Version hinzugefügt:** 19

**Datentabelle festlegen**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()# R DataFrame can be jmp.DataTable, pandas.DataFrame, ...d = jr.set( dt , 'Big.Class' )   # becomes 'Big.Class'jr.submit('Big.Class')           # see: JSL R Send File(); R Submit();print(d.__class__)print(d)bc = jr.get('Big.Class')print( bc.__class__ )print( bc )

```

**Numerischer Vektor**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# initialize jmpex.Rjr = R()a = dt['age']nar = np.array( a )print(nar.__class__)print(nar)rv = ro.vectors.FloatVector(nar)print(rv.__class__)print(rv)

```

**Spalte festlegen**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()a = jr.set( dt['age'], 'rage' )   # as_name required from Pythonprint(a.__class__)print(a)ra = jr.get('rage')print( ra.__class__ )print( ra )

```

**Zeichenkettenvektor**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()s = dt['name']nas = np.array(s)print(nas.__class__)print(nas)rv = ro.vectors.StrVector(nas)print(rv.__class__)print(rv)

```

#### submit

**Syntax:** jmpex.R.R.submit( &apos;R script&apos; )

**Beschreibung:** Übermittelt R-Programmcode zur Auswertung. Gibt das Ergebnis als Python-Objekt zurück, sofern vorhanden.

**JMP Version hinzugefügt:** 19

**Datentabelle festlegen**

```python

import jmpfrom jmpex.R import R           jr = R()dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# R DataFrame can be jmp.DataTable, pandas.DataFrame, ...d = jr.set( dt , 'Big.Class' )   # becomes 'Big.Class'df = jr.submit('Big.Class')           # see: JSL R Send File(); R Submit();print(f'DataFrame:\n{df}')print(d.__class__)print(d)bc = jr.get('Big.Class')print( bc.__class__ )print( bc )

```

**Skript**

```python

import jmpfrom jmpex.R import Rjr = R()jr.submit('''x <- rnorm (100)y <- x**2 + rnorm (100)''')

```

#### submit_file

**Syntax:** jmpex.R.R.submit_file(&apos;path_to_R_script&apos;)

**Beschreibung:** Übermittelt eine R-Skriptdatei zur Auswertung. Gibt das Ergebnis als Python-Objekt zurück, sofern vorhanden.

**JMP Version hinzugefügt:** 19

```python

import jmpimport osfrom jmpex.R import Rjr = R()result = jr.submit_file( os.path.join(jmp.SAMPLE_SCRIPTS, 'R', 'SI_example.R') )print(result)print(result.__class__)po = jr.r2obj(result)print(po)print(po.__class__)

```

## jmpex > R - module

### Funktionen

#### Konzepte

#### R

**Beschreibung:** Das R-Modul stellt jmpex.R dar, das die Python-Klasse R enthält. Die Klasse jmpex.R.R implementiert die Schnittstellenfunktionalität.

**JMP Version hinzugefügt:** 19

## jmpex

### Funktionen

#### Konzepte

#### jmpex - package

**Beschreibung:** Das jmpex-Paket enthält Erweiterungsschnittstellen, die von JMP unterstützt werden. Derzeit enthält es nur ein R-Supportmodul.

**JMP Version hinzugefügt:** 19

## jmputils

### Funktionen

#### Funktionen

#### Konstanten

#### __version__

**Beschreibung:** Versionsnummer des jmputils-Paket.

**JMP Version hinzugefügt:** 19

```python

import jmpimport jmputilsprint( jmputils.__version__ )

```

#### create_jpip

**Syntax:** create_jpip( &apos;directory_path&apos; )

**Beschreibung:** Funktion zum Erzeugen der Terminal-/Befehlsshell-Version des jpip-Skripts im angegebenen Verzeichnis. Das jpip-Skript umhüllt den Python-Befehl pip und stellt sicher, dass die entsprechenden Umgebungsvariablen konfiguriert sind. Dadurch wird sichergestellt, dass die von jpip installierten Pakete im JMP-Verzeichnis der Website-Pakete landen.

**JMP Version hinzugefügt:** 18

```python

import jmpimport jmputilsjmp.run_jsl('''dest_path = Pick Directory("Directory location to save jpip script.");// Pick Directory on windows returns a leading / use Convert File Path()If( Host is("Windows"),    dest_path = Convert File Path( dest_path, windows ));Python Send(dest_path);''')jmputils.create_jpip(dest_path)

```

#### is_installed

**Syntax:** success = is_installed(package_name)

**Beschreibung:** Gibt Wahr | Falsch zurück, wenn package_name installiert ist.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

```python

import jmpimport jmputilsif not jmputils.is_installed('certifi'):    result = jmputils.jpip('install', 'certifi', echo=False)    try:        result.check_returncode()        print( jmputils.package_version('certifi') )    except Exception as e:        print(f'jpip install failed with reason: {e}')else:    print( jmputils.package_version('certifi') )

```

**Paket nicht gefunden**

```python

import jmpimport jmputilsif jmputils.is_installed('invalidjmppackage'):    print("Surprise!")else:    print('Package not found.')

```

#### jpip

**Syntax:** result = jpip( &apos;pip_cmd&apos;, packages=&apos;&apos;, echo=True )

**Beschreibung:** Diese Funktion kann aus JMP heraus aufgerufen werden und umschließt den Python-Befehl pip. Gibt ein subprocess.CompletedProcess-Objekt zurück. Übergeben Sie dieser Funktion ein pip-Befehlsargument als Zeichenkette mit einer optionalen, durch Leerzeichen getrennten Zeichenkette der zu installierenden Pakete. Eine zuverlässigere Alternative ist die Verwendung von Listen mit einzelnen Argumenten. Die Listenmethode funktioniert auch dann, wenn die Verzeichnispfade Leerzeichen enthalten. Das Argument packages ist standardmäßig eine leere Zeichenkette. Das Paket „jmputils“ ist Teil der in JMP eingebetteten Python-Standardbibliothek. Funktionen innerhalb von jmputils verwenden nur Python-Standardbibliotheksaufrufe oder in JMP integrierte Funktionen.

**JMP Version hinzugefügt:** 18

**Datei den Anforderungen**

```python

import jmpfrom jmputils import jpipjmp.run_jsl('''src_path = Pick File(    "Select requirements.txt File",    "$DOCUMENTS",    {"TXT Files|txt", "All Files|*"},    0,    0,    "requirements.txt");show(src_path);If( Host is("Windows"),    src_path = Convert File Path( src_path, windows ));show(src_path);Python Send(src_path);''')jpip('install', f'-r {src_path}')

```

**deinstallieren**

```python

import jmpfrom jmputils import jpip# R support package jmpex uninstalled like any other Python package. jpip('uninstall', 'jmpex')

```

**installieren**

```python

import jmpfrom jmputils import jpip# update to latest version of pip and setuptools then install numpy & pandasjpip('install --upgrade', 'pip setuptools certifi')jpip('install', 'numpy pandas')

```

**installieren (Argumente auflisten)**

```python

import jmpfrom jmputils import jpip# update to latest version of pip and setuptools then install numpy & pandasjpip(['install', '--upgrade'], ['pip', 'setuptools', 'certifi'])jpip(['install'], ['numpy', 'pandas'])

```

**jmpex**

```python

import jmpimport osfrom jmputils import jpip# Install jmpex package jpip('install', [ os.path.join(jmp.SAMPLE_SCRIPTS, 'Python', 'jmpex.zip') ] )

```

**Liste**

```python

import jmpfrom jmputils import jpipjpip('list')

```

**Lokales Paket**

```python

import jmpfrom jmputils import jpipjmp.run_jsl('''dest_path = Pick Directory("Directory location of local package directory to install.");// Pick Directory on windows returns a leading / use Convert File Path()If( Host is("Windows"),    dest_path = Convert File Path( dest_path, windows ));Python Send(dest_path);''')print(dest_path)jpip('install', dest_path)

```

#### package_version

**Syntax:** package_version(package_name)

**Beschreibung:** Versionsnummer des benannten Pakets, sofern installiert.

**JMP Version hinzugefügt:** 19

```python

import jmpimport jmputils# package_version() internally calls is_installed()print( jmputils.package_version('certifi') )

```

#### packages

**Syntax:** pkgs_dict = packages()

**Beschreibung:** Gibt ein Python-Wörterbuch mit der Liste der installierten Pakete zurück.

**JMP Version hinzugefügt:** 19

```python

import jmpimport jmputilspkgs = jmputils.packages()print('Package,', 'Version')for key, value in pkgs.items():    print(f'{key}: {value}')

```

