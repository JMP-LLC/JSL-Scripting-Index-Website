# Python Integration



## Funzioni

### ALL_HOME

**Sintassi:** jmp.ALL_HOME

**Descrizione:** Valore corrispondente alla directory $ALL_HOME di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.ALL_HOME)

```

### BUILTIN_SCRIPTS

**Sintassi:** jmp.BUILTIN_SCRIPTS

**Descrizione:** Valore corrispondente alla directory $BUILTIN_SCRIPTS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.BUILTIN_SCRIPTS)

```

### Costanti

### DESKTOP

**Sintassi:** jmp.DESKTOP

**Descrizione:** Valore corrispondente alla directory $DESKTOP di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.DESKTOP)

```

### DOCUMENTS

**Sintassi:** jmp.DOCUMENTS

**Descrizione:** Valore corrispondente alla directory $DOCUMENTS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.DOCUMENTS)

```

### DOWNLOADS

**Sintassi:** jmp.DOWNLOADS

**Descrizione:** Valore corrispondente alla directory $DOWNLOADS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.DOWNLOADS)

```

### DataType

**Sintassi:** jmp.DataType.enum_value

**Descrizione:** jmp.DataType è un&apos;enumerazione che rappresenta i tipi di dati di una colonna di JMP. Sono utilizzati con la funzione jmp.DataTable.new_column() per creare colonne diverse dal tipo Numerico di default.

**JMP Versione aggiunta:** 18

```python

import jmp# for the sake of typingfrom jmp import DataType as dTypeprint('jmp.DataType members:')print( list(map(lambda c: c.name, dType)) )

```

### Enumeratori

### Funzioni

### HOME

**Sintassi:** jmp.HOME

**Descrizione:** Valore corrispondente alla directory $HOME di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.HOME)

```

### JMPPRJ

**Sintassi:** jmp.JMPPRJ

**Descrizione:** Restituisce il percorso fisico della directory temporanea del progetto. Restituisce la directory di lavoro corrente o Nessuna se lo script non è in esecuzione all&apos;interno di un progetto.

**JMP Versione aggiunta:** 19

```python

import jmpprint(jmp.JMPPRJ)

```

### ModelingType

**Sintassi:** jmp.ModelingType.enum_value

**Descrizione:** jmp.ModelingType è un&apos;enumerazione che rappresenta il tipo di modellizzazione o analisi di una colonna JMP. Si usa con la funzione jmp.DataTable.new_column() per creare colonne diverse dal tipo di modellizzazione di default Continuous. TypeNone differisce dal tipo di modellizzazione None di JMP, poiché &apos;None&apos; è una parola chiave di Python.

**JMP Versione aggiunta:** 18

```python

import jmp# for the sake of typingfrom jmp import ModelingType as mTypeprint('jmp.ModleingType members:')print( list(map(lambda c: c.name, mType)) )

```

### PYTHONW_EXE

**Sintassi:** jmp.PYTHONW_EXE

**Descrizione:** Percorso dell&apos;eseguibile Python no-console installato da JMP (solo Windows).

**JMP Versione aggiunta:** 19

```python

import jmpimport platformif platform.system() == "Windows":    print(jmp.PYTHONW_EXE)

```

### PYTHON_EXE

**Sintassi:** jmp.PYTHON_EXE

**Descrizione:** Percorso dell&apos;eseguibile di Python installato in JMP.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.PYTHON_EXE)

```

### PY_USER_APPDIR

**Sintassi:** jmp.PY_USER_APPDIR

**Descrizione:** Percorso alla directory utente che funge da base per il supporto a Python di JMP. La directory dei pacchetti del sito si trova all&apos;interno di questa gerarchia di directory.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.PY_USER_APPDIR)

```

### SAMPLE_APPS

**Sintassi:** jmp.SAMPLE_APPS

**Descrizione:** Valore corrispondente alla directory $SAMPLE_APPS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_APPS)

```

### SAMPLE_DASHBOARDS

**Sintassi:** jmp.SAMPLE_DASHBOARDS

**Descrizione:** Valore corrispondente alla directory $SAMPLE_DASHBOARDS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_DASHBOARDS)

```

### SAMPLE_DATA

**Sintassi:** jmp.SAMPLE_DATA

**Descrizione:** Valore corrispondente alla directory $SAMPLE_DATA di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_DATA)

```

### SAMPLE_IMAGES

**Sintassi:** jmp.SAMPLE_IMAGES

**Descrizione:** Valore corrispondente alla directory $SAMPLE_IMAGES di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_IMAGES)

```

### SAMPLE_IMPORT_DATA

**Sintassi:** jmp.SAMPLE_IMPORT_DATA

**Descrizione:** Valore corrispondente alla directory $SAMPLE_IMPORT_DATA di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_IMPORT_DATA)

```

### SAMPLE_PROJECTS

**Sintassi:** jmp.SAMPLE_PROJECTS

**Descrizione:** Valore corrispondente alla directory $SAMPLE_PROJECTS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_PROJECTS)

```

### SAMPLE_SCRIPTS

**Sintassi:** jmp.SAMPLE_SCRIPTS

**Descrizione:** Valore corrispondente alla directory $SAMPLE_SCRIPTS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_SCRIPTS)

```

### TEMP

**Sintassi:** jmp.TEMP

**Descrizione:** Valore corrispondente alla directory $TEMP di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.TEMP)

```

### USER_APPDATA

**Sintassi:** jmp.USER_APPDATA

**Descrizione:** Valore corrispondente alla directory $USER_APPDATA di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.USER_APPDATA)

```

### __jmp_version__

**Sintassi:** jmp.__jmp_version__

**Descrizione:** Numero di versione dell&apos;eseguibile di JMP.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.__jmp_version__)

```

### __version__

**Sintassi:** jmp.__version__

**Descrizione:** Numero di versione del pacchetto di importazione &apos;jmp&apos;. Non si tratta della versione di JMP.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.__version__)

```

### current

**Sintassi:** dt = jmp.current()

**Descrizione:** Restituisce un oggetto DataTable per la tabella di dati JMP corrente.

**JMP Versione aggiunta:** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(jmp.current())

```

### eval

**Sintassi:** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**Descrizione:** Valuta l&apos;argomento e restituisce il risultato.

**JMP Versione aggiunta:** 19

```python

import jmpfrom jmp import eval, Expressionexpression = Expression("2 + 2")result = eval(expression)print(result)

```

### from_dataframe

**Sintassi:** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;, visibility=&lt;string&gt;)

**Descrizione:** Restituisce un oggetto jmp.DataTable dal dataframe di una libreria conforme al protocollo.

**JMP Versione aggiunta:** 19

#### Da Ibis a JMP

```python

import jmpimport jmputils try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)    jmputils.jpip('install', 'ibis-framework[duckdb,examples]') except Exception as e:    print(f'Install failed with exception: {e}')          import pandas as pd import ibis  pandas_df = pd.DataFrame(     [["a", 1, 2], ["b", 3, 4]],     columns=["one", "two", "three"], ) t = ibis.memtable(pandas_df, name="t") print(t) dt = jmp.from_dataframe(t) print(dt)

```

#### Da JMP a Pandas

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pddt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")pandas_df = (pd.api.interchange.from_dataframe(dt))print(pandas_df)

```

#### Da JMP a Polars

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as pldt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")polars_df = pl.from_dataframe(dt)print(polars_df)

```

#### Da Pandas a JMP

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df)print(dt)

```

#### Da Polars a JMP

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as plfrom datetime import datepolars_df = pl.DataFrame( {    "foo": [1, 2, 3],    "bar": [6.0, 7.0, 8.0],    "ham": [date(2020, 1, 2), date(2021, 3, 4), date(2022, 5, 6)],  } ) print(polars_df) dt = jmp.from_dataframe(polars_df) print(dt)

```

#### Fallback CSV

```python

import jmpimport jmputils        try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe(df)print(dt)

```

#### Visibility

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df, visibility="invisible")#dt = jmp.from_dataframe(pandas_df, visibility="private")print(dt)

```

### from_dataframe_using_csv

**Sintassi:** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;, visibility=&lt;string&gt;)

**Descrizione:** Restituisce un oggetto jmp.DataTable da un dataframe della libreria, utilizzando il metodo di conversione CSV fornito.

**JMP Versione aggiunta:** 19

#### General

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})try:    # Try converting object without CSV fallback    dt = jmp.from_dataframe(df, True, False)    print("Converted using jmp.from_dataframe()")except:     # Explicitly convert using CSV    dt = jmp.from_dataframe_using_csv(df)    print("Converted using jmp.from_dataframe_using_csv()")print(dt)

```

#### Visibility

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe_using_csv(df, visibility="invisible")#dt = jmp.from_dataframe_using_csv(df, visibility="private")print(dt)

```

### open

**Sintassi:** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**Descrizione:** Apre un file situato in percorso_file. Se il file è un file .jmp o un file che importa in una tabella di dati JMP, l&apos;oggetto restituito sarà un oggetto Tabella di dati. Altrimenti restituirà Vero o Falso per la riuscita o meno. Il parametro facoltativo di visibilità controlla se il file aperto è nascosto alla vista. Invisibile significa che è semplicemente nascosto alla vista, ma viene comunque visualizzato nel menu dei file recenti e nella finestra Home. Con una tabella privata, il riferimento restituito è l&apos;unico riferimento alla tabella e non compare in alcuno degli elenchi di file.

**JMP Versione aggiunta:** 18

#### Excel

```python

import jmpobj = jmp.open(jmp.SAMPLE_IMPORT_DATA + 'Bigclass.xlsx')print(obj)

```

#### Invisibile

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Invisible')dt = jmp.current()print(dt)  # successdt = jmp.table('Animals')print(dt)  # success# Select and run the above first if you want to see that even though# there is no window, Animals.jmp appears in recent files and# home window's list of filesdt.close(save=False);del dt

```

#### JMP

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt)

```

#### Privato

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')dt = jmp.current()print(dt)  # => Nonetry:  dt = jmp.table('Animals')except FileNotFoundError:  print('Requested table not found')dt = jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')print(dt)dt.close(save=False)del dt

```

#### Script JSL

```python

import jmpobj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')print(obj)

```

### path_variable

**Sintassi:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**Descrizione:** Restituisce il valore di una variabile di percorso con un nome del tipo SAMPLE_DATA che viene sostituita se trovata nei nomi di percorso.

**JMP Versione aggiunta:** 19

```python

import jmppath_value = jmp.path_variable('SAMPLE_DATA')if not path_value:    print('Invalid path variable.')else:    print(path_value)

```

### r_name

**Sintassi:** dt = jmp.r_name(jsl_var)

**Descrizione:** Associa il nome di una variabile JMP a un nome di variabile R utilizzando le regole di assegnazione dei nomi alle variabili R.

**JMP Versione aggiunta:** 19

```python

import jmprName = jmp.r_name('c d e')print(rName)

```

### reset

**Sintassi:** jmp.reset()

**Descrizione:** Reimposta l&apos;ambiente Python condiviso, cancellando principalmente tutti i riferimenti agli oggetti. Questo non modifica la cache di importazione dei moduli importati. Si tratta di una limitazione dell&apos;ambiente Python stesso. I moduli che caricano librerie condivise non possono essere scaricati dal processo in esecuzione. Per ricaricare il codice Python puro, vedere la documentazione di Python.org su importlib reload().

**JMP Versione aggiunta:** 19

```python

import jmppi = 3.1415927print(pi)jmp.reset()print(pi)

```

### run_jsl

**Sintassi:** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**Descrizione:** Esegue lo script JSL dall&apos;ambiente Python, comprese le funzioni dell&apos;interfaccia JSL Python. Il parametro facoltativo eco=, se impostato su Falso o Nessuno, impedisce al codice sorgente JSL presentato di essere riportato nel log. Verrà restituito un risultato per gli stessi tipi di oggetti JSL supportati dalle funzioni Python Send()/Get(). In caso di non riuscita dello script o di tipi di oggetti JSL non supportati, verrà restituito Nessuno.

**JMP Versione aggiunta:** 18

#### Ottieni versione

```python

import jmpjmp.run_jsl('Python Get Version();')

```

#### Proprietà della colonna

```python

import jmp# Create a data table# dt = jmp.DataTable(name='table_name', rows=n)pbp = jmp.DataTable(rows=5)pbp.name = 'Powered by Python'pbp.new_column('Name', jmp.DataType.Character)pbp.new_column('Hourly Rate')#pbp['Name'] = ['Janet', 'James', 'Jerry', 'Jenny', 'Jill']pbp[1] = [ 14.25, 9.75, 15.0, 12.35, '17.25']  # last value bad => becomes missingpbp[1][4] = 17.25## Change column format: Hourly Ratejmp.run_jsl('''Data Table( "Powered by Python" ):Hourly Rate << Format( "Currency", "USD", 17, 2 );Data Table( "Powered by Python" ):Name << Set Display Width( 75 );''')

```

#### Valore restituito

```python

import jmpvalue = jmp.run_jsl('''Names default to here(1);an A = 1.5;x = 5 * anA;''')print( f'{value} = jmp.run_jsl()')

```

### table

**Sintassi:** dt = jmp.table(&apos;table_name&apos;)

**Descrizione:** Restituisce un oggetto DataTable per la tabella aperta con &apos;nome_tabella&apos;

**JMP Versione aggiunta:** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( jmp.table('Big Class') )

```

## jmp > DataConnector

### Funzioni

#### Capacità di copiare con copy.copy

**Descrizione:** Gli oggetti ConnettoreDati supportano la copia superficiale con la funzione standard copy.copy.



La modifica del comportamento di copia nelle sottoclassi non è supportata e pertanto le sottoclassi non dovrebbero aggiungere attributi di istanza supplementari, poiché non saranno copiati.

**JMP Versione aggiunta:** 19

```python

import jmpimport copyclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource(copy.copy(self))jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def __init__(self, config):        self._config = config        print("Connecting to data source")    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column')        dt['column'] = [self._config['My Option']]        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" ),            My Option( 42 )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### Concetti

#### Elementi speciali

#### Funzioni

#### Metodi

#### __getitem__

**Sintassi:** value = dc["FIELD NAME"]

**Descrizione:** Ottiene il valore associato a un campo.

**JMP Versione aggiunta:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {"Example Field": str}class ExampleConnector(jmp.DataConnector):    ...    def _do_as_data_source(self):        ef = self["Example Field"]        # When running the JSL below, ef will be "example value"        print(f"{ef=}")        ...jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# This will fail but only after printing the valuejmp.run_jsl("""    New SQL Query( Connection(        New Data Connector(            Type("Python:__main__:ExampleConnectorType"),            Example Field("example value")        )    ) ) << Modify""", echo=False)

```

#### _do_as_data_source

**Sintassi:** def _do_as_data_source(self) -&gt; jmp.DataSource:

**Descrizione:** Le sottoclassi dovrebbero sovrascrivere questa funzione per creare una connessione. La connessione restituita, sotto forma di sottoclasse di jmp.DataSource, consente l&apos;integrazione con Query Builder.



Evitare di memorizzare e utilizzare un riferimento all&apos;istanza del connettore (self) nell&apos;origine dati restituita. Anche altro codice potrebbe conservare un riferimento e modificare inaspettatamente i valori di configurazione. Si consiglia invece di usare copy.copy per creare una copia indipendente a cui fare riferimento, come "self_copy = copy.copy(self)".

**JMP Versione aggiunta:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource(self['My Option'])jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def __init__(self, my_option):        self._my_option = my_option        print("Connecting to data source")    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column')        dt['column'] = [self._my_option]        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" ),            My Option( 42 )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### _do_open

**Sintassi:** def _do_open(self) -&gt; jmp.DataTable:

**Descrizione:** Le sottoclassi possono sovrascrivere questa funzione per aprire direttamente una tabella. Questa funzione implementa il messaggio Open in JSL (New Data Connector(...) << Open()).



Se questa funzione e _do_as_data_source sono entrambe implementate, dovrebbero essere in grado di aprire lo stesso insieme di tabelle.

**JMP Versione aggiunta:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_open(self):        dt = jmp.DataTable(rows=1)        dt.new_column('column')        dt['column'] = [self['My Option']]        return dtjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    My Option( 42 )) << Open();""", echo=False)

```

#### tie

**Sintassi:** jmp.DataConnector.tie(DataConnectorTypeClass, DataConnectorClass)

**Descrizione:** Associa una sottoclasse jmp.DataConnectorType e una sottoclasse jmp.DataConnector, "legandole" insieme e completando le definizioni di entrambe le classi. Questa associazione consente alla sottoclasse jmp.DataConnector di accedere alla sottoclasse jmp.DataConnectorType e alle definizioni dei suoi campi. Assicura inoltre che la sottoclasse jmp.DataConnectorType crei istanze jmp.DataConnector utilizzando la sottoclasse specificata.



Questa funzione crea l&apos;associazione impostando gli attributi sulle sottoclassi.

**JMP Versione aggiunta:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_open(self):        dt = jmp.DataTable(rows=1)        dt.new_column('column')        dt['column'] = [self['My Option']]        return dtjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    My Option( 42 )) << Open();""", echo=False)

```

## jmp > DataConnectorField

### Funzioni

#### Costruttori

#### __init__

**Sintassi:** field = jmp.DataConnectorField(type, &lt;default=DEFAULT_VALUE,&gt; &lt;tooltip="TOOLTIP" | None,&gt; &lt;ui_name="UI NAME" | None,&gt; &lt;credential="CREDENTIAL TYPE" | None,&gt; &lt;sensitive=True | False,&gt; &lt;mask_input=True | False&gt;)

**Descrizione:** DataConnectorField definisce un campo.



Argomenti di base:



type: il tipo di campo, ad esempio int (vedere jmp.DataConnectorType.fields per ulteriori informazioni).



default: il valore predefinito per il campo, ad esempio 42. Se non viene fornito, il valore predefinito dipende dal tipo. Il valore predefinito è Nessuno se è supportato, ad esempio se il tipo è "int | Nessuno". Altrimenti, è il valore "vuoto" per il tipo: "" per str, 0 per int e False per bool.



descrizione comando: se fornito e non Nessuno, viene usato come descrizione comando per il campo nell&apos;editor del connettore dati.



ui_name: se fornito e non Nessuno, viene usato come nome del campo nell&apos;editor del connettore dati invece del nome effettivo del campo.



Argomenti extra quando il tipo è "str" o "str | Nessuno":



credenziale: se fornito e non Nessuno, il tipo di credenziale memorizzata da questo campo. I valori validi sono "nome utente" e "password". JMP utilizza questa informazione per abilitare il supporto dei segnaposti.



sensibile: quando è vero, questo campo viene considerato per contenere informazioni sensibili e quindi i suoi valori non vengono scritti in chiaro. L&apos;impostazione di default è true se "credenziale" è impostato e false altrimenti.



mask_input: quando è vero, il valore viene oscurato e mostrato con dei punti nell&apos;editor del connettore dati. L&apos;impostazione di default è vero se "credenziale" è "password" o "sensibile" è vero e la credenziale non è impostata.

**JMP Versione aggiunta:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    _DCF = jmp.DataConnectorField    fields = {        "Field 1": int,        # Same as Field 1 but uses jmp.DataConnectorField instead of a bare type        "Field 2": _DCF(int),        # Like Field 1 and Field 2 but adds a tooltip        "Field 3": _DCF(int, tooltip="The third field."),        # Like Field 1 and Field 2 but adds a default value and a tooltip        "Field 4": _DCF(int, default=42, tooltip="The fourth field."),        # ui_name is useful for JSL-unfriendly names or localization        "JSL Unfriendly Field": _DCF(int, ui_name="JSL-Unfriendly Field"),        # credential (and sensitive and mask_input) are useful for usernames,        # passwords, and other sorts of credentials        "Password Field": _DCF(str, credential="password"),    }class ExampleConnector(jmp.DataConnector):    def _do_open(self):        # Show the values then error        print(f"{self["Field 1"] = }")        print(f"{self["Field 2"] = }")        print(f"{self["Field 3"] = }")        print(f"{self["Field 4"] = }")        print(f"{self["JSL Unfriendly Field"] = }")        print(f"{self["Password Field"] = }")        raise NotImplementedErrorjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# To see the tooltips, the UI name, and the masking triggered by credential,# you'll need to launch the Data Connector Editor and set the type to# Python:__main__:ExampleConnectorType.jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    Field 1( 4 ),    Field 2( 19 ),    Field 3( 23 ),    Field 4( 42 ),    JSL Unfriendly Field( 65 ),    // This encodes the string "107":    Password Field( "0173AEE42BA6B646CBE03941DD25153DAAFDF2ED3039A9E64296808E53DA110CDE45733216E9B2A3F82AA052F370443F231C8B1D83E2AA68B6D19DD4B6BB0CE08F635C07162E3E13B2AF77D25DF8DDD1DB" )) << Open();""", echo=False)

```

## jmp > DataConnectorGroupedFields

### Funzioni

#### Costruttori

#### __init__

**Sintassi:** fields = jmp.DataConnectorGroupedFields([("Group 1 Name", GROUP_1_FIELDS), ("Group 2 Name", GROUP_2_FIELDS), ...])

**Descrizione:** jmp.DataConnectorGroupedFields definisce i campi in gruppi denominati. I gruppi vengono passati come un elenco di coppie. Il primo elemento di ogni coppia è il nome del gruppo e il secondo è un dizionario con i campi. Questo dizionario ha lo stesso formato di quello usato direttamente come valore per jmp.DataConnectorType.fields.



L&apos;uso dei gruppi influenza la presentazione dei campi nell&apos;editor del connettore dati, ma non il loro accesso programmatico. Il nome del gruppo viene usato solo nell&apos;interfaccia utente, quindi il consiglio per i nomi dei campi di evitare i caratteri che non dovrebbero essere usati nei nomi JSL, non si applica.

**JMP Versione aggiunta:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = jmp.DataConnectorGroupedFields([        # Specify a first group named "Route" that has "Destination" and        # "Origin" fields.        ("Route", {            "Destination": str,            "Origin": str,        }),        # Specify a second group named "Vehicle" that has "Passengers" and        # "Range" fields.        ("Vehicle", {            "Passengers": int,            "Range": int,        }),    ])class ExampleConnector(jmp.DataConnector):    def _do_open(self):        # Show the values then error        print(f"{self["Destination"] = }")        print(f"{self["Origin"] = }")        print(f"{self["Passengers"] = }")        print(f"{self["Range"] = }")        raise NotImplementedErrorjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# To see the groups you'll need to launch the Data Connector Editor# and set the type to Python:__main__:ExampleConnectorType.jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    Destination( "JMP" ),    Origin( "RDU" ),    Passengers( 5 ),    Range( 254 )) << Open();""")

```

## jmp > DataConnectorType

### Funzioni

#### Proprietà

#### fields

**Sintassi:** fields = {"Name 1": TYPE_1 | jmp.DataConnectorField(...), "Name 2": TYPE_2 | jmp.DataConnectorField(...), ...} | jmp.DataConnectorGroupedFields(...)

**Descrizione:** Le sottoclassi devono definire una variabile di livello classe denominata "fields" che specifichi le opzioni di configurazione, per questo tipo. Dovrebbe essere un dizionario o un oggetto jmp.DataConnectorGroupedFields.



Le chiavi del dizionario sono i nomi delle opzioni di configurazione, che sono esposti in JSL e nell&apos;editor. Devono essere formattati come identificatori JSL. Il valore corrispondente a ciascuna chiave è il tipo di campo, come str o int, o un oggetto jmp.DataConnectorField.



I tipi supportati includono: bool, int, str. Sono anche supportate le versioni opzionali di questi, come typing.Optional[bool] o bool | None for bool. Un valore mancante è rappresentato da None.

**JMP Versione aggiunta:** 19

```python

import jmpimport typingclass ExampleConnectorType(jmp.DataConnectorType):    _DCF = jmp.DataConnectorField    fields = {        "Basic Int Field": int,        "Optional Int Field": int | None,        "Alternative Optional Int Field": typing.Optional[int],        "Int Field With Default And Tooltip": _DCF(int, default=42, tooltip=(            "Tooltip for complicated int field."        )),        "Catalog": _DCF(str, default="main", tooltip=(            "Database catalog in which to access schemas and tables."        )),    }class ExampleConnector(jmp.DataConnector):    def _do_open(self):        # Show values for demo purposes and then error out        print(f"{self["Basic Int Field"] = }")        print(f"{self["Optional Int Field"] = }")        print(f"{self["Alternative Optional Int Field"] = }")        print(f"{self["Int Field With Default And Tooltip"] = }")        print(f"{self["Catalog"] = }")        raise NotImplementedErrorjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# To see the tooltips you'll need to launch the Data Connector Editor# and set the type to Python:__main__:ExampleConnectorType.jmp.run_jsl(r"""New Data Connector( Type( "Python:__main__:ExampleConnectorType" ) ) << Open();""")

```

## jmp > DataSource

### Funzioni

#### Metodi

#### get_schemas

**Sintassi:** def get_schemas(self) -&gt; Sequence[str] | None:

**Descrizione:** Le sottoclassi possono sovrascrivere questa funzione per fornire un elenco degli schemi presenti nell&apos;origine dati. Se questa funzione non viene sovrascritta o restituisce None, si presume che l&apos;origine dati non supporti gli schemi.

**JMP Versione aggiunta:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# Pretend our data source has two schemas, each with a tableclass ExampleDataSource(jmp.DataSource):    def get_schemas(self):        # Normally you would get this dynamically instead of hard-coding it.        return ['schema1', 'schema2']    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column', jmp.DataType.Character)        dt['column'] = [f'{schema}.{table}']        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Schema( "schema1" ), Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### get_tables

**Sintassi:** def get_tables(self, schema: str) -&gt; Sequence[str]:

**Descrizione:** Le sottoclassi devono sovrascrivere questa funzione per fornire un elenco delle tabelle nell&apos;origine dei dati. Se gli schemi sono supportati, questo elenco deve includere solo le tabelle dello schema passato. Se gli schemi non sono supportati, il parametro schema deve essere ignorato.

**JMP Versione aggiunta:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        # Normally you would get this dynamically instead of hard-coding it.        return ['example1', 'example2']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column', jmp.DataType.Character)        dt['column'] = [table]        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "A" ),    Select( Star ),    From( Table( "example1", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### open_table

**Sintassi:** def open_table(self, schema: str, table: str) -&gt; jmp.DataTable | str:

**Descrizione:** Le sottoclassi devono sovrascrivere questa funzione per ottenere i dati della tabella per la tabella indicata. Se gli schemi non sono supportati, il valore dell&apos;argomento schema può essere ignorato. La funzione dovrebbe restituire un oggetto jmp.DataTable o una stringa contenente un percorso a un file in un formato di dati supportato da JMP.



Se si restituisce direttamente una tabella di dati, la tabella deve essere creata privatamente. Se si restituisce una stringa di percorso, JMP apre la tabella stessa e cattura le impostazioni utilizzate, conservandole negli script del Costruttore di query.

**JMP Versione aggiunta:** 19

**Crea tabella direttamente**

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        # Normally you would use schema and table.        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('Hello', jmp.DataType.Character)        dt['Hello'] = ['world!']        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

**Restituisci un percorso del file**

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        # Normally you would use schema and table.        return jmp.SAMPLE_IMPORT_DATA + 'Bigclass_L.txt'jmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### open_table_with_settings

**Sintassi:** def open_table_with_settings(self, schema: str, table: str, settings: str | None) -&gt; (jmp.DataTable, str | None):

**Descrizione:** Le sottoclassi possono sovrascrivere questa funzione invece di open_table per fornire una gestione personalizzata delle impostazioni di apertura delle tabelle. Questa funzione è come open_table, ma viene richiamata anche con le impostazioni esistenti, se presenti. Deve restituire una tabella di dati e anche le nuove impostazioni, se presenti. Le impostazioni mancanti sono indicate con Nessuno.

**JMP Versione aggiunta:** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        return ['example']    def open_table_with_settings(self, schema, table, settings):        print(f"Input settings: {settings!r}")        if settings is None:            # In practice settings are something you prompt the user            # for, but here we hard-code it.            settings = f'settings for {table}'        dt = jmp.DataTable(visibility='private')        dt.new_column()        print(f"Output settings: {settings!r}")        return dt, settingsjmp.run_jsl(r"""Write( ( New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run Foreground ) << Get Property( "Source" ) );""", echo=False)

```

## jmp > DataTable > Column

### Funzioni

#### Concetti

#### Costruttori

#### Elementi speciali

#### Mappatura

**Descrizione:** L&apos;oggetto DataTable.Column supporta il protocollo di mappatura Python. Fornisce gli operatori array [] che utilizzano l&apos;indice numerico della riga.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]for i in range(0, dt.nrows):    print( dt[0][i] )

```

#### Proprietà

#### Sequenza

**Descrizione:** DataTable.Column si comporta come una sequenza Python. Ciò consente di iterare sui valori della colonna.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]for n in dt[0]:    print( n )

```

#### Sezione

**Descrizione:** L&apos;operatore Sezione viene utilizzato come parametro dell&apos;operazione [ ] carica elemento. Consiste in start:stop:step. Questi parametri sono facoltativi.  Il valore restituito sarà un elenco di valori, a partire dal valore start senza includere il valore stop incrementato dal valore step.  I numeri negativi per start o stop sono indici su base 1 a partire dalla fine della sequenza. Un valore di [step] negativo decrementa il conteggio dei passi, anziché incrementarlo. I valori vuoti hanno valori di default appropriati. [::-1] restituirà l&apos;elenco completo in ordine inverso. E [:] restituirà l&apos;intero array nell&apos;ordine corrente degli elementi.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( [c.name for c in dt[:]] )         # print list of column names default step = 1reverse_cols = dt[::-1]                  # list of column names in reverse orderprint( [c.name for c in reverse_cols] )  # print reversed column name listprint( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### Uguaglianza

**Descrizione:** L&apos;oggetto Column supporta i controlli di uguaglianza e disuguaglianza. Dato che DataTable.Column è in realtà un riferimento a una colonna di una tabella di dati reale, più oggetti Column possono puntare alla stessa colonna effettiva. I controlli di uguaglianza == e disuguaglianza != non confrontano il contenuto. Verificano se due oggetti DataTable.Column puntano alla stessa colonna.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col1 = dt[0]col2 = dt['name']col3 = dt['age']print( col1 == col2 )print( col1 == col3 )print( col1 != col2 )print( col1 != col3 )

```

#### __eq__

**Sintassi:** column1 == column2

**Descrizione:** Test di uguaglianza, restituisce vero quando due oggetti jmp.DataTable.Column puntano alla stessa colonna della tabella di dati di JMP. Non viene verificata la corrispondenza del contenuto, ma le due variabili puntano esattamente alla stessa colonna.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col1 = dt[0]col2 = dt['name']col3 = dt['age']print( col1 == col2 )print( col1 == col3 )

```

#### __getitem__

**Sintassi:** value = column[ index ]

**Descrizione:** Fornisce l&apos;operatore [] per ottenere il valore di un oggetto jmp.DataTable.Column dalla colonna con indice su base 0.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col = dt[0]for i in range ( len(col) ):    print( col[i] )

```

#### __init__

**Sintassi:** Column( dt_obj, name | index)

**Descrizione:** Crea un nuovo oggetto colonna che punta a una colonna specifica di una tabella di dati. Per il parametro dt_obj è necessario un oggetto jmp.DataTable e un nome di colonna o un indice valido.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col = jmp.DataTable.Column(dt, 'name')print(col)# Note: it's simpler to just let Python create one for you through assignment.col2 = dt['name'];print(col2)

```

#### __len__

**Sintassi:** count = len( column )

**Descrizione:** Restituisce il numero di colonne nella tabella.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print( len( dt['name'] ) )

```

#### __ne__

**Sintassi:** column1 != column2

**Descrizione:** Test di disuguaglianza, restituisce vero quando due oggetti jmp.DataTable.Column non puntano alla stessa colonna della tabella di dati. Non viene verificata la corrispondenza del contenuto, ma i due oggetti non puntano esattamente alla stessa colonna.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col1 = dt[0]col2 = dt['name']col3 = dt['age']print( col1 != col2 )print( col1 != col3 )

```

#### __setitem__

**Sintassi:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**Descrizione:** Fornisce l&apos;operatore [] per impostare i valori in una colonna per ottenere un oggetto jmp.DataTable.Column dalla tabella in base al nome della colonna o all&apos;indice su base 0.

**JMP Versione aggiunta:** 18

**datetime.date**

```python

import jmpfrom datetime import datedt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('birthday', jmp.DataType.Numeric)dt['birthday'].format = "m/d/y"dt['birthday'][0] = date.today()

```

**datetime.datetime**

```python

import jmpfrom datetime import datetimedt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('birthday', jmp.DataType.Numeric)dt['birthday'].format = "m/d/y h:m:s"dt['birthday'][0] = datetime.now()

```

**Espressione**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column("expressions", jmp.DataType.Expression)dt['expressions'][0] = jmp.Expression('1 + 1')print(dt['expressions'][0])result = jmp.eval(dt['expressions'][0])print(result)

```

**Immagine**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column("images", jmp.DataType.Expression)for i in range( len( dt["images"] ) ):    dt['images'][i] = jmp.Image(jmp.SAMPLE_IMAGES + "tile.jpg")print(dt['images'][0])

```

**Standard**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")column = dt[0]column2 = dt['age']print(column)print(column2)

```

**Stato della riga**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column("rs", jmp.DataType.RowState)dt['rs'][0] = jmp.RowState(selected=True, marker=3, color=4)print(dt['rs'][0])

```

**time.struct_time**

```python

import jmpimport timedt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('birthday', jmp.DataType.Numeric)dt['birthday'].format = "h:m:s"dt['birthday'][0] = time.localtime()

```

#### __str__

**Sintassi:** str( column_obj )

**Descrizione:** Restituisce una rappresentazione sintetica contenente informazioni di riepilogo sulla colonna della tabella di dati.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt[0])

```

#### data_length

**Sintassi:** col_obj.data_length

**Descrizione:** Proprietà che restituisce la lunghezza dei dati del campo della colonna. Questo valore può essere 0, 1, 2, 4 o 8 byte. 0 è il valore di default e implica 8 byte utilizzati per i campi numerici della tabella di dati.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f'Data length of dt[-1] (weight column): {dt[-1].data_length}')

```

#### display_width

**Sintassi:** col_obj.display_width col_obj.display_width = &lt;int&gt;

**Descrizione:** Modifica la larghezza di visualizzazione della colonna.

**JMP Versione aggiunta:** 19

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")jmp.run_jsl('Wait( 0 );')print(dt[0].display_width)dt[0].display_width = 100print(dt[0].display_width)

```

#### dtype

**Sintassi:** col_obj.dtype

**Descrizione:** Proprietà che restituisce il valore dell&apos;enumerazione per il tipo di dati della colonna.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f"Data Type of dt['age']: {dt['age'].dtype}")dt['age'].dtype = jmp.DataType.Character print(f"Updated Data Type of dt['age']: {dt['age'].dtype}")

```

#### format

**Sintassi:** col_obj.format col_obj.format = tuple&lt; &lt;string&gt;|&lt;int&gt;, ... &gt;

**Descrizione:** Ottieni formato

**JMP Versione aggiunta:** 19

**Assegnazione tupla**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print(dt[3].format)dt[3].format = ('Fixed Dec', 6, 3)print(dt[3].format)

```

**Diverse varianti**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "XYZ Stock Averages (plots).jmp")dt[0].format = ("ddMonyyyy", 9)dt[1].format = "Currency"dt[2].format = (    "best",    "Use Thousands Separator",    10,    0)dt[3].format = (    "Fixed Dec",    "Use Thousands Separator",    10,    2)

```

#### formula

**Sintassi:** col_obj.formula col_obj.formula = &lt;Expression | string&gt;

**Descrizione:** Imposta una formula per le colonne specificato un oggetto Espressione o una stringa che rappresenta un JSL valido.

**JMP Versione aggiunta:** 19

**Espressione**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('ratio', jmp.DataType.Numeric)dt['ratio'].formula = jmp.Expression(':Height / :Weight')print(dt['ratio'].formula)

```

**Stringa**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('ratio', jmp.DataType.Numeric)dt['ratio'].formula = ':Height / :Weight'print(dt['ratio'].formula)

```

#### mtype

**Sintassi:** col_obj.mtype

**Descrizione:** Proprietà che restituisce il valore dell&apos;enumerazione per il tipo di modellizzazione della colonna.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f"Modeling Type of dt['age']: {dt['age'].mtype}") dt['age'].mtype = jmp.ModelingType.Nominalprint(f"Updated Modeling Type of dt['age']: {dt['age'].mtype}")

```

#### name

**Sintassi:** col_obj.name col_obj.name = &lt;string&gt;

**Descrizione:** La proprietà Nome della colonna è leggibile e impostabile.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print(dt[0].name)dt[0].name = 'First Name'

```

## jmp > DataTable

### Funzioni

#### Concetti

#### Costruttori

#### Elementi speciali

#### Mappatura

**Descrizione:** L&apos;oggetto DataTable supporta il protocollo di mappatura Python. Fornisce gli operatori array [] e l&apos;uso di un nome di colonna o di un valore numerico come indice di colonna.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( f'Column name: {dt[1].name}' )print( f"Column name: {dt['age'].name}" )

```

#### Metodi

#### Proprietà

#### Sequenza

**Descrizione:** L&apos;oggetto DataTable si comporta come una sequenza Python. Ciò consente di iterare sulle colonne della tabella.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")for n in dt:    print( n.name )

```

#### Sezione

**Descrizione:** L&apos;operatore Sezione viene utilizzato come parametro dell&apos;operazione [ ] carica elemento. Consiste in start:stop:step. Questi parametri sono facoltativi. Il valore restituito sarà un elenco di valori, a partire dal valore start senza includere il valore stop incrementato dal valore step. I numeri negativi per start o stop sono indici su base 1 a partire dalla fine della sequenza. Un valore "step" negativo decrementa il conteggio dei passi, anziché incrementarlo. I valori vuoti hanno valori di default appropriati. [::-1] restituirà l&apos;elenco completo in ordine inverso. E [:] restituirà l&apos;intero array nell&apos;ordine corrente degli elementi.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( [c.name for c in dt[:]] )         # print list of column names default step = 1reverse_cols = dt[::-1]                  # list of column names in reverse orderprint( [c.name for c in reverse_cols] )  # print reversed column name listprint( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### Uguaglianza

**Descrizione:** L&apos;oggetto DataTable supporta i controlli di uguaglianza e disuguaglianza. Dato che DataTable è in realtà un riferimento a una tabella di dati reale, più oggetti possono puntare alla stessa tabella di JMP. I controlli di uguaglianza == e disuguaglianza != non confrontano il contenuto. Verificano se due oggetti DataTable puntano alla stessa tabella di JMP.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt2 = jmp.current()iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")print( dt == dt2 )print( dt == iris)print( dt != dt2 )print( dt != iris )

```

#### __eq__

**Sintassi:** table1 == table2

**Descrizione:** Test di uguaglianza, restituisce vero quando due oggetti jmp.DataTable puntano alla stessa tabella di dati JMP. Non viene verificata la corrispondenza del contenuto, ma le due variabili puntano esattamente alla stessa tabella.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt2 = jmp.current()iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")print( dt == dt2 )print( dt == iris)

```

#### __getitem__

**Sintassi:** column = dt[&apos;name&apos; | index]

**Descrizione:** Fornisce l&apos;operatore [] per ottenere un oggetto jmp.DataTable.Column dalla tabella in base al nome della colonna o all&apos;indice su base 0.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")column = dt[0]column2 = dt['age']print(column)print(column2)

```

#### __init__

**Sintassi:** dt = jmp.DataTable(&lt;name=&apos;table_name&apos;&gt;, &lt;rows=n&gt;, &lt;visibility=&apos;Invisible&apos; | &apos;Private&apos; )

**Descrizione:** Crea una nuova tabella di dati con il nome &apos;nome_tabella&apos; e n righe. I parametri e le parole chiave sono opzionali, a meno che non siano specificate solo le righe o l&apos;ordine dei parametri sia invertito.

**JMP Versione aggiunta:** 18

**Con parole chiave**

```python

import jmpdt = jmp.DataTable(rows=40, name='Powered By Python')

```

**Invisibile**

```python

import jmpdt = jmp.DataTable('Powered By Python', 40, visibility='Invisible')

```

**Nominata con righe**

```python

import jmpdt = jmp.DataTable('Powered By Python', 40)

```

**Privato**

```python

import jmpdt = jmp.DataTable('Powered By Python', 40, visibility='private')

```

**Tabella vuota**

```python

import jmpdt = jmp.DataTable()

```

**Tabella vuota nominata**

```python

import jmpdt = jmp.DataTable('Powered By Python')

```

#### __len__

**Sintassi:** count = len(dt)

**Descrizione:** Restituisce il numero di colonne nella tabella.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print( len(dt) )

```

#### __ne__

**Sintassi:** table1 != table2

**Descrizione:** Test di disuguaglianza, restituisce vero quando due oggetti jmp.DataTable non puntano alla stessa tabella di dati JMP. Non viene verificata la corrispondenza del contenuto, ma i due oggetti non puntano esattamente alla stessa tabella.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt2 = jmp.current()iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")print( dt != dt2 )print( dt != iris)

```

#### __setitem__

**Sintassi:** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**Descrizione:** Fornisce l&apos;operatore [] per impostare i valori in una colonna per ottenere un oggetto jmp.DataTable.Column dalla tabella in base al nome della colonna o all&apos;indice su base 0.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]print( dt[0][:] )

```

#### __str__

**Sintassi:** str( data_table )

**Descrizione:** Restituisce una rappresentazione di informazioni sintetiche sull&apos;oggetto tabella di dati.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt)

```

#### add_rows

**Sintassi:** add_rows(rows, &lt;at=-1&gt;)

**Descrizione:** Aggiunge righe alla tabella di dati. rows è obbligatorio. at è facoltativo. Se at è 0, le inserisce all&apos;inizio della tabella. Se è <0, le inserisce alla fine della tabella. Altrimenti, se at è m, le inserisce alla riga m (indicizzazione basata su 0).

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.add_rows(5)dt.add_rows(1, at=0)dt.add_rows(2, at=12) # 0-based indexing

```

#### begin_update

**Sintassi:** dt.begin_update() # added JMP 19.1

**Descrizione:** Small tables update rapidly, but for large tables, having to update the user interface while making mass changes to a column is very time consuming. The begin_update() method stops the GUI updates to the data table until a corresponding end_update().

**JMP Versione aggiunta:** 19

```python

import jmpimport randomimport timedt = jmp.open(jmp.SAMPLE_DATA + "Wafer Stacked.jmp")print(dt.nrows)start_time = time.perf_counter()dt.begin_update()try:    for x in range(dt.nrows):        dt[5][x] = random.randint(1,1000)finally:    dt.end_update()end_time = time.perf_counter()elapsed = end_time - start_timeprint(f'Elapsed time: {elapsed:.3f}')

```

#### cell_height

**Sintassi:** dt.cell_height dt.cell_height = &lt;int&gt;

**Descrizione:** Imposta l’altezza di visualizzazione di ogni cella della tabella di dati.

**JMP Versione aggiunta:** 19

```python

import jmpdt = jmp.DataTable()jmp.run_jsl('Wait(0)')print(dt.cell_height)dt.cell_height = 40print(dt.cell_height)

```

#### close

**Sintassi:** dt.close( &lt;save= True | False&gt;)

**Descrizione:** Metodo di chiusura dell&apos;oggetto DataTable. Analogamente a JSL, di default viene salvato il file se chiamato senza parametri. Per abbandonare un file, come ad esempio uno creato come tabella temporanea, si usa dt.close(False) o dt.close(save=False), per maggiore chiarezza.

**JMP Versione aggiunta:** 18

```python

import jmpimport os# To remove the wow.jmp file uncomment then run the 2 lines below,# if os.path.isfile('wow.jmp'):#    os.unlink('wow.jmp')dt = jmp.DataTable('wow', 5)dt.new_column('one')dt.close()                # saves and closes filedt = jmp.open('wow.jmp')dt.new_column('two')dt.close(save=False)      # closes without saving

```

#### delete_columns

**Sintassi:** delete_columns(&apos;name&apos;, ..., &apos;name&apos;)

**Descrizione:** Il metodo elimina_colonne() funziona come il messaggio equivalente JSL Elimina colonne(). Gli argomenti accettabili sono: nessun argomento; nome della colonna o nomi separati da virgole; un elenco Python di nomi di colonne. L&apos;uso di nessun argomento significa eliminare le colonne selezionate.

**JMP Versione aggiunta:** 19

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.select_columns('weight')     # JSL:  dt << Select Columns( {:weight})r = dt.delete_columns()                  # delete by selected column(s)print(r)r = dt.delete_columns('name', 'sex')     # delete by nameprint(r)r = dt.delete_columns(['age', 'height']) # delete with list of column namesprint(r)

```

#### end_update

**Sintassi:** dt.end_update() # added JMP 19.1

**Descrizione:** Restores the data table GUI update processing.

**JMP Versione aggiunta:** 19

```python

import jmpimport randomimport timedt = jmp.open(jmp.SAMPLE_DATA + "Wafer Stacked.jmp")print(dt.nrows)start_time = time.perf_counter()dt.begin_update()try:    for x in range(dt.nrows):        dt[5][x] = random.randint(1,1000)finally:    dt.end_update()end_time = time.perf_counter()elapsed = end_time - start_timeprint(f'Elapsed time: {elapsed:.3f}')

```

#### name

**Sintassi:** dt.name dt.name = &apos;string&apos;

**Descrizione:** La proprietà name è sia un elemento da impostare sia un elemento da ottenere per il nome della tabella di dati.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.DataTable()print(dt.name)dt.name = 'Powered by Python'

```

#### ncols

**Sintassi:** dt.ncols

**Descrizione:** Una proprietà di sola lettura che restituisce il numero di colonne nella tabella.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f'Number of columns: {dt.ncols}')

```

#### new_column

**Sintassi:** dt.new_column( name=&apos;column_name&apos;, dtype=jmp.Numeric | .Character | .RowState | .Expression, mtype=jmp.ModelingType.Continuous | ... | TypeNone dlen=len cell type&apos;s data length especially for numeric 8(double),4(int32),2(int16),1(int8) where=n insert column after column n

**Descrizione:** Crea una nuova colonna della tabella di dati, specificando facoltativamente il nome, il tipo di colonna, la lunghezza dei dati e il tipo di modellizzazione

**JMP Versione aggiunta:** 18

**Classe piccola**

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]print( dt[0][:] )print( list( dt['First Name'] ) )dt.new_column('Distance (km)', jmp.DataType.Numeric, jmp.ModelingType.Continuous)dt[1] = [ 1239.2, 12266.4, 15.75, 35.0, 10.6 ]

```

**Nuova classe**

```python

import jmpfrom jmp import DataTable as Dtdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')nc = jmp.DataTable('New Class', dt.nrows)nc.new_column('name', jmp.DataType.Character)# populate column from a listnc[0] = ['Fred','Kimi','Amanda','Courtney','Paul','Theresa','Erika','Blake','Joseph','Amber',    'Daphne','Robert','James','Richard', 'Eric','Mark','Coleen','Brian','Bryan','Emily',    'Bonnie','Georgia','Terrance','Carmen','Hunter','Samantha','Kay','Tamara','Brett','David',    'Chandler','Siebela','Judy','Hui','Drew','Russ','Megan','Evan','Alex','Travis']col = nc.new_column('age', jmp.DataType.Numeric)# populate column from another columnnc['age'] = dt['age']print(nc['age'][::])print(col.__class__)

```

#### nrows

**Sintassi:** dt.nrows

**Descrizione:** Una proprietà di sola lettura che restituisce il numero di righe nella tabella.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f'Number of rows: {dt.nrows}')

```

#### row_states

**Sintassi:** dt.row_states dt.row_states = [state1, state2, ..., stateN]

**Descrizione:** Imposta gli stati delle righe per tutte le righe nella tabella di dati.

**JMP Versione aggiunta:** 19

**Colonna di stato delle righe**

```python

import jmpfrom jmp import DataTypedt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')rs_col = dt.new_column('rs', DataType.RowState)dt['rs'] = dt.row_statesdt['rs'][0] = jmp.RowState(value=33)dt['rs'][1] = jmp.RowState(color=2, marker=3)row_state = jmp.RowState(color=4, selected=False)dt['rs'][3] = row_staterow_state.marker = 9dt['rs'][4] = row_statedt.row_states = dt['rs']print(dt.row_states)

```

**Elenco di numeri interi**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states = [33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]print(dt.row_states)

```

**Elenco di tuple (<index>, <RowState | int>)**

```python

import jmpfrom jmp import RowStatedt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states = [(2, RowState(marker=2, selected=True)), (5, 97)]print(dt.row_states)

```

**Iterazione**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')for i in range(len(dt.row_states)):    if dt['age'][i] % 2:        dt.row_states[i].selected = Trueprint(dt.row_states)

```

**Reimposta stati delle righe**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states = [33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]print(dt.row_states)dt.row_states = [0] * dt.nrowsprint(dt.row_states)

```

**Uso generale**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states[0] = jmp.RowState(marker=4, color=3)print(dt.row_states)dt.row_states[0].selected = Truedt.row_states[1] = jmp.RowState(value=22)print(dt.row_states)

```

#### save

**Sintassi:** dt.save( &lt; path=&apos;file_path&apos; &gt; )

**Descrizione:** Salva la tabella di dati utilizzando il nome della tabella nella directory corrente. L&apos;argomento facoltativo path consente di salvare in un percorso o con un nome differenti.

**JMP Versione aggiunta:** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt[0][0] = 'Katie'dt.save('BC_lowercase.jmp')

```

#### scripts

**Sintassi:** dt.scripts dt.scripts = &lt;dict&lt;str : &lt;str | Expression&gt;&gt;&gt;

**Descrizione:** La proprietà degli script consente di leggere e scrivere gli script della tabella dati.

**JMP Versione aggiunta:** 19

**Eliminazione script**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# Reassigning of scripts removes all other scriptsdt.scripts = {    "Example": 'Print("Foo")',    "Example 2": jmp.Expression('Print("Bar")')}print("Distribution" in dt.scripts)   # Falseprint("Example" in dt.scripts)        # Trueprint("Example 2" in dt.scripts)      # True# Deleting a script# Note: If the script editing window is open, the script will not be deleted. del dt.scripts["Example"]dt.scripts["Example 2"] = Noneprint("Example" in dt.scripts)        # Falseprint("Example 2" in dt.scripts)      # Falsedt.scripts = {    "Example": 'Print("FooBar")',}# Deleting all scriptsdt.scripts = {}

```

**Ottieni/Imposta script**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# Getting a scriptprint(dt.scripts["Distribution"])# Adding a scriptdt.scripts["Example"] = 'Print("Foo")'dt.scripts["Example 2"] = jmp.Expression('Print("Bar")')# Getting all scriptsprint(dt.scripts)

```

**Script multipli**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# Concatenationdt.scripts |= {    "Example": 'Print("Foo")',    "Example 2": jmp.Expression('Print("Bar")')}print("Distribution" in dt.scripts)print("Example" in dt.scripts)print("Example 2" in dt.scripts)# Reassigning of scripts removes all other scriptsdt.scripts = {    "Example": 'Print("FooBar")',}print(dt.scripts)# Iterationfor name, value in dt.scripts.items():    print(name, value)for name in dt.scripts:    print(name, dt.scripts[name])

```

#### select_columns

**Sintassi:** select_columns(&apos;name&apos;, ..., &apos;name&apos;)

**Descrizione:** Il metodo seleziona_colonne() funziona come l&apos;equivalente messaggio JSL Seleziona colonne(). Gli argomenti accettabili sono: nome della colonna o nomi separati da virgole; un elenco Python di nomi di colonne.

**JMP Versione aggiunta:** 19

**Esempio 1**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.select_columns('weight')dt.select_columns('name', 'sex')dt.select_columns(['age', 'height'])# all columns should be selected.

```

**Tutto**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.select_columns([col.name for col in dt])# all columns should be selected.

```

## jmp > Expression

### Funzioni

#### Concetti

#### Costruttori

#### Elementi speciali

#### Proprietà

#### Uguaglianza

**Descrizione:** L&apos;oggetto Espressione supporta i controlli di uguaglianza e disuguaglianza. Quando si confronta l&apos;uguaglianza tra due oggetti Espressione, i valori vengono confrontati e restituiti se sono uguali o meno. Si tratta di un confronto dei valori dell&apos;oggetto Espressione e non della valutazione dei valori.

**JMP Versione aggiunta:** 19

```python

import jmpexpr1 = jmp.Expression('1 + 1')expr2 = jmp.Expression('2 + 0')expr3 = jmp.Expression('1 + 1')print(expr1 == expr2)print(expr1 == expr3)print(expr1 != expr2)print(expr1 != expr3)

```

#### __eq__

**Sintassi:** expression1 == expression2

**Descrizione:** Il test di uguaglianza restituisce Vero se l&apos;oggetto Espressione ha lo stesso contenuto di un altro oggetto Espressione e restituisce Falso in caso contrario.

**JMP Versione aggiunta:** 19

```python

import jmpexpr1 = jmp.Expression('1 + 1')expr2 = jmp.Expression('2 + 0')expr3 = jmp.Expression('1 + 1')print(expr1 == expr2)print(expr1 == expr3)

```

#### __init__

**Sintassi:** Expression(jsl=&lt;string&gt;)

**Descrizione:** Crea un nuovo oggetto Espressione.

**JMP Versione aggiunta:** 19

```python

import jmpfrom jmp import Expression, evalexpr = Expression(jsl="2 + 2")print(f'Expression: {expr}')print(f'Result: {eval(expr)}')expr.jsl = '1 + 1'print(f'Expression Adjusted: {eval(expr)}')

```

#### __ne__

**Sintassi:** expression1 != expression2

**Descrizione:** Il test di disuguaglianza restituisce Vero se l&apos;oggetto Espressione ha un contenuto diverso di un altro oggetto Espressione e restituisce Falso in caso contrario.

**JMP Versione aggiunta:** 19

```python

import jmpexpr1 = jmp.Expression('1 + 1')expr2 = jmp.Expression('2 + 0')expr3 = jmp.Expression('1 + 1')print(expr1 != expr2)print(expr1 != expr3)

```

#### __str__

**Sintassi:** str( expr_obj )

**Descrizione:** Restituisce una rappresentazione di informazioni sintetiche sull&apos;oggetto Espressione.

**JMP Versione aggiunta:** 19

```python

import jmpexpr = jmp.Expression(':Height / :Weight')print(expr)

```

#### jsl

**Sintassi:** expr_obj.jsl expr_obj.jsl = &lt;string&gt;

**Descrizione:** La proprietà jsl Espressione è leggibile e impostabile.

**JMP Versione aggiunta:** 19

```python

import jmpexpr = jmp.Expression(jsl='0 + 0')print(expr)expr.jsl = '2 + 2'print(expr)

```

## jmp > Image

### Funzioni

#### Concetti

#### Costruttori

#### Elementi speciali

#### Uguaglianza

**Descrizione:** L&apos;oggetto Immagine supporta i controlli di uguaglianza e disuguaglianza. Quando si confronta l&apos;uguaglianza tra due oggetti Immagine, i valori vengono confrontati e restituiti se sono uguali o meno.

**JMP Versione aggiunta:** 19

```python

import jmpimage1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')print(image1 == image2)print(image1 == image3)print(image1 != image2)print(image1 != image3)

```

#### __eq__

**Sintassi:** image1 == image2

**Descrizione:** Il test di uguaglianza restituisce Vero se l&apos;oggetto Immagine ha lo stesso contenuto di un altro oggetto Immagine e restituisce Falso in caso contrario.

**JMP Versione aggiunta:** 19

```python

import jmpimage1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')print(image1 == image2)print(image1 == image3)

```

#### __init__

**Sintassi:** jmp.Image(path=&lt;string&gt;)

**Descrizione:** Crea un nuovo oggetto Immagine.

**JMP Versione aggiunta:** 19

```python

import jmpimage = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')print(f'Image: {image}')jmp.open(image)

```

#### __ne__

**Sintassi:** image1 != image2

**Descrizione:** Il test di disuguaglianza restituisce Vero se l&apos;oggetto Immagine ha un contenuto diverso di un altro oggetto Immagine e restituisce Falso in caso contrario.

**JMP Versione aggiunta:** 19

```python

import jmpimage1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')print(image1 != image2)print(image1 != image3)

```

#### __str__

**Sintassi:** str( image_obj )

**Descrizione:** Restituisce una rappresentazione di informazioni sintetiche sull&apos;oggetto Immagine.

**JMP Versione aggiunta:** 19

```python

import jmpimage = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')print(image)

```

## jmp > Project

### Funzioni

#### Costruttori

#### Elementi speciali

#### Funzioni

#### Proprietà

#### __init__

**Sintassi:** prj = jmp.Project(&lt;name=&apos;Project name&apos;&gt;)

**Descrizione:** Crea un nuovo oggetto Progetto per accedere ai progetti e ai file JMP.

**JMP Versione aggiunta:** 19

**Nome del progetto**

```python

import jmpprj = jmp.Project()print(prj.name)

```

**Progetto vuoto**

```python

import jmpprj = jmp.Project()

```

**Progetto vuoto con nome**

```python

import jmpprj = jmp.Project('My Project')

```

#### __str__

**Sintassi:** str( project )

**Descrizione:** Restituisce la rappresentazione del progetto in forma di stringa

**JMP Versione aggiunta:** 19

```python

import jmpprj = jmp.Project()print( prj )

```

#### contents

**Sintassi:** prj.name

**Descrizione:** Restituisce un elenco dei nomi dei file contenuti nel progetto.

**JMP Versione aggiunta:** 19

```python

import jmpprj = jmp.Project()print(prj.contents)

```

#### exists

**Sintassi:** prj.exists(&apos;file_name&apos;)

**Descrizione:** Prende un nome file e convalida l&apos;esistenza del file all&apos;interno del progetto.

**JMP Versione aggiunta:** 19

```python

import jmpprj = jmp.Project()print( prj.exists('myfile.data') )

```

#### extract

**Sintassi:** prj.extract(&apos;file_name&apos;)

**Descrizione:** Prende un nome file ed estrae il file dal progetto nella directory temporanea del progetto.

**JMP Versione aggiunta:** 19

```python

import jmpprj = jmp.Project()success = prj.extract('myfile.data')

```

#### extract_all

**Sintassi:** prj.extract_all()

**Descrizione:** Estrae tutti i file del progetto nella directory temporanea del progetto.

**JMP Versione aggiunta:** 19

```python

import jmpprj = jmp.Project()success = prj.extract_all()

```

#### is_extracted

**Sintassi:** prj.is_extracted(&apos;file_name&apos;)

**Descrizione:** Prende un nome file e controlla se il file è già stato estratto dall&apos;archivio del progetto.

**JMP Versione aggiunta:** 19

```python

import jmpprj = jmp.Project()print( prj.is_extracted('myfile.data') )

```

#### name

**Sintassi:** prj.name

**Descrizione:** La proprietà nome del progetto è in sola lettura

**JMP Versione aggiunta:** 19

```python

import jmpprj = jmp.Project()print(prj.name)

```

## jmp > RowState

### Funzioni

#### Concetti

#### Costruttori

#### Elementi speciali

#### Proprietà

#### Uguaglianza

**Descrizione:** L&apos;oggetto Stato della riga supporta i controlli di uguaglianza e disuguaglianza. Quando si confronta l&apos;uguaglianza tra due oggetti Stato della riga, i valori vengono confrontati e restituiti se sono uguali o meno. Se due Stati delle righe hanno lo stesso contenuto ma sono inizializzati in modo diverso, restituiranno comunque Vero.

**JMP Versione aggiunta:** 19

```python

import jmprs1 = jmp.RowState(color=4, marker=2, selected=True)rs2 = jmp.RowState(color=11, excluded=True, labeled=True)rs3 = jmp.RowState(value=1057)print(rs1 == rs2)print(rs1 == rs3)print(rs1 != rs2)print(rs1 != rs3)

```

#### __eq__

**Sintassi:** rs1 == rs2

**Descrizione:** Il test di uguaglianza restituisce Vero se l&apos;oggetto Stato della riga ha lo stesso contenuto di un altro oggetto Stato della riga e restituisce Falso in caso contrario.

**JMP Versione aggiunta:** 19

```python

import jmprs1 = jmp.RowState(color=4, marker=2, selected=True)rs2 = jmp.RowState(color=11, excluded=True, labeled=True)rs3 = jmp.RowState(value=1057)print(rs1 == rs2)print(rs1 == rs3)

```

#### __init__

**Sintassi:** jmp.RowState(selected?=&lt;boolean&gt;, hidden?=&lt;booleane&gt;, labeled?=&lt;boolean&gt;, excluded?=&lt;boolean&gt;, color?=&lt;int&gt;, marker?=&lt;int&gt;) jmp.RowState(value=&lt;int&gt;)

**Descrizione:** Crea un nuovo oggetto Stato della riga. Stato della riga è un oggetto che contiene una qualsiasi delle sei caratteristiche che possono avere le righe in una tabella di dati JMP: selezionate, nascoste, escluse, con etichetta, colorate e contrassegnate.

**JMP Versione aggiunta:** 19

```python

import jmpfrom jmp import RowStaters = RowState(color=4, marker=2, selected=True)print(f'Row State: {rs}')rs_from_value = RowState(value=33)print(f'Row State from Value: {rs_from_value}')

```

#### __ne__

**Sintassi:** image1 != image2

**Descrizione:** Il test di disuguaglianza restituisce Vero se l&apos;oggetto Stato della riga ha un contenuto diverso di un altro oggetto Stato della riga e restituisce Falso in caso contrario.

**JMP Versione aggiunta:** 19

```python

import jmprs1 = jmp.RowState(color=4, marker=2, selected=True)rs2 = jmp.RowState(color=11, excluded=True, labeled=True)rs3 = jmp.RowState(value=1057)print(rs1 != rs2)print(rs1 != rs3)

```

#### __str__

**Sintassi:** str( rs_obj )

**Descrizione:** Restituisce una rappresentazione di informazioni sintetiche sull&apos;oggetto Stato della riga.

**JMP Versione aggiunta:** 19

```python

import jmprs = jmp.RowState(color=11, excluded=True, labeled=True)print(rs)

```

#### color

**Sintassi:** rs_obj.color rs_obj.color = &lt;int&gt;

**Descrizione:** La proprietà colore Stato della riga è leggibile e impostabile. I colori sono scelti da 0 a 84 (0-15 base, 16-31 scuri, 32-47 chiari, 48-63 molto scuri, 64-79 molto chiari, 80-84 grigi).

**JMP Versione aggiunta:** 19

```python

import jmprs = jmp.RowState(color=5)print(rs)rs.color = 0print(rs)

```

#### excluded

**Sintassi:** rs_obj.excluded rs_obj.excluded = &lt;boolean&gt;

**Descrizione:** La proprietà Stato della riga esclusa è leggibile e impostabile.

**JMP Versione aggiunta:** 19

```python

import jmprs = jmp.RowState(excluded=True)print(rs)rs.excluded = False print(rs)

```

#### hidden

**Sintassi:** rs_obj.hidden rs_obj.hidden = &lt;boolean&gt;

**Descrizione:** La proprietà Stato della riga nascosta è leggibile e impostabile.

**JMP Versione aggiunta:** 19

```python

import jmprs = jmp.RowState(hidden=True)print(rs)rs.hidden = False print(rs)

```

#### labeled

**Sintassi:** rs_obj.labeled rs_obj.labeled = &lt;boolean&gt;

**Descrizione:** La proprietà Stato della riga con etichetta è leggibile e impostabile.

**JMP Versione aggiunta:** 19

```python

import jmprs = jmp.RowState(labeled=True)print(rs)rs.labeled = False print(rs)

```

#### marker

**Sintassi:** rs_obj.marker rs_obj.marker = &lt;int&gt;

**Descrizione:** La proprietà dell&apos;indicatore Stato della riga è leggibile e impostabile. Gli indicatori sono scelti da 0 a 31

**JMP Versione aggiunta:** 19

```python

import jmprs = jmp.RowState(marker=3)print(rs)rs.marker = 0print(rs)

```

#### selected

**Sintassi:** rs_obj.selected rs_obj.selected = &lt;boolean&gt;

**Descrizione:** La proprietà Stato della riga selezionata è leggibile e impostabile.

**JMP Versione aggiunta:** 19

```python

import jmprs = jmp.RowState(selected=True)print(rs)rs.selected = False print(rs)

```

## jmp > globals

### Funzioni

#### Concetti

#### Elementi speciali

#### Iteration

**Descrizione:** La proprietà globale supporta l&apos;iterazione dell&apos;insieme di valori.

**JMP Versione aggiunta:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['e'] = 2.718jmp.run_jsl('''    show(::pi)''')for x in jmp.globals:    print( x )

```

#### Metodi

#### __getitem__

**Sintassi:** value = jmp.globals[&apos;name&apos;]

**Descrizione:** Ottiene una variabile globale JSL come oggetto Python. Restituisce Nessuno se non è stato possibile trovare l&apos;oggetto. Restituisce un tipo opaco per i tipi di dati che non possono essere gestiti. È in grado di trasferire gli stessi tipi di oggetti come Python Send() e Python Get().

**JMP Versione aggiunta:** 19

```python

import jmpjmp.run_jsl('''    pi = 3.1415929''')print( jmp.globals['pi'] )

```

#### __len__

**Sintassi:** length = len( jmp.globals )

**Descrizione:** Restituisce il numero di simboli nell&apos;ambiente globale JSL.

**JMP Versione aggiunta:** 19

```python

import jmpprint( len( jmp.globals ) )jmp.globals['pi'] = 3.1415927print( len( jmp.globals ) )jmp.globals['e'] =  2.7182818print( len( jmp.globals ) )

```

#### __setitem__

**Sintassi:** jmp.globals[&apos;name&apos;] = valore

**Descrizione:** A causa dell&apos;ambito di Python e del design di Python Get(), solo le variabili nell&apos;ambito globale di Python sono accessibili con Python Get(). Il dizionario jmp.globals consente di impostare o creare direttamente una variabile JSL dal codice Python. Il tipo di valore può essere qualsiasi tipo Python attualmente supportato da Python Get().

**JMP Versione aggiunta:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.run_jsl('''    show(pi)''')

```

#### __str__

**Sintassi:** str(jmp.globals)

**Descrizione:** Visualizza il contenuto dei globali in una rappresentazione di dizionario. Si noti che il dizionario dei globali è utilizzato da JMP stesso, quindi potrebbero esserci voci aggiuntive.

**JMP Versione aggiunta:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['e'] =  2.7182818jmp.globals['Bb'] = 'bumble bee'print( jmp.globals )d = str(jmp.globals)print(d)

```

#### get

**Sintassi:** value = jmp.globals.get(&apos;name&apos;)

**Descrizione:** La funzione get() restituisce il valore per la chiave data. Come in JSL, la chiave è un fuzzy match.

**JMP Versione aggiunta:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['an A'] = 'Annie'print( jmp.globals.get('pi') )                        print( jmp.globals.get('ana') )

```

#### items

**Sintassi:** item_list = jmp.globals.items()

**Descrizione:** Restituisce un elenco di coppie chiave-valore nello spazio dei nomi. Si noti che il dizionario dei globali è utilizzato da JMP stesso, quindi potrebbero esserci voci aggiuntive.

**JMP Versione aggiunta:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['bB'] = 'Bumble Bee'print( jmp.globals.items() )

```

#### keys

**Sintassi:** key_list = jmp.globals.keys()

**Descrizione:** Restituisce un elenco delle chiavi nello spazio dei nomi. Si noti che il dizionario dei globali è utilizzato da JMP stesso, quindi potrebbero esserci voci aggiuntive.

**JMP Versione aggiunta:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['bB'] = 'Bumble Bee'print( jmp.globals.keys() )

```

#### values

**Sintassi:** value_list = jmp.globals.values()

**Descrizione:** Restituisce i valori nello spazio dei nomi. Si noti che il dizionario dei globali è utilizzato da JMP stesso, quindi potrebbero esserci voci aggiuntive.

**JMP Versione aggiunta:** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['bB'] = 'Bumble Bee'print( jmp.globals.values() )

```

## jmp > here

### Funzioni

#### Concetti

#### Elementi speciali

#### Iteration

**Descrizione:** La proprietà qui supporta l&apos;iterazione dei valori nello spazio dei nomi "qui".

**JMP Versione aggiunta:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.globals['e'] = 2.718jmp.run_jsl('''    Names Default to Here(1);    show(pi)''')for x in jmp.here:    print( x )print([x for x in jmp.globals])

```

#### Metodi

#### __getitem__

**Sintassi:** value = jmp.here[&apos;name&apos;]

**Descrizione:** Ottiene una variabile JSL dallo spazio dei nomi &apos;here&apos; corrente come oggetto Python. Restituisce None se non è possibile trovare l&apos;oggetto, oppure un tipo opaco per i tipi di dati che non possono ancora essere gestiti. Fornisce il recupero diretto di una variabile JSL nell&apos;ambito locale di Python. Supporta il trasferimento degli stessi tipi di oggetti di Python Send(). Si noti che nell&apos;ambito dello spazio dei nomi JSL, lo spazio dei nomi "here" è locale all&apos;invio dello script e il codice inviato da finestre di script diverse avrà spazi dei nomi "here" separati. Il codice che include un altro script ha un unico spazio dei nomi &apos;here&apos;. Questo spazio dei nomi condiviso esiste anche per uno script JSL che esegue Python tramite Submit() o Execute(), script Python che richiamano run_jsl().

**JMP Versione aggiunta:** 19

**Esempio 1**

```python

import jmpjmp.globals['e'] = 2.71828jmp.run_jsl('''    Names Default to Here(1);    pi = 3.1415929;    show(::e);''')print( jmp.here['pi'] )

```

**Scope**

```python

import jmpjmp.run_jsl('''Names Default to Here(1);here_v = "here";Show(here_v);''')print( f'temporary: {jmp.here['here_v']}' )try:        print(here_v)except:    print('here_v is not in Python globals().')def scoped():    v = jmp.here['here_v']    print(f'scoped: {v}')    scoped()try:        print(v)except:    print('v is local to scoped().')

```

#### __len__

**Sintassi:** length = len( jmp.here )

**Descrizione:** Restituisce il numero di simboli nello spazio dei nomi "qui" JSL.

**JMP Versione aggiunta:** 19

```python

import jmpprint( len( jmp.here ) )jmp.here['pi'] = 3.1415927print( len( jmp.here ) )jmp.here['e'] =  2.7182818print( len( jmp.here ) )

```

#### __setitem__

**Sintassi:** jmp.here[&apos;name&apos;] = value

**Descrizione:** Fornisce i mezzi per impostare un valore nello spazio dei nomi &apos;here&apos; dello script JSL. Ciò consente di inviare un valore che non può essere raggiunto da Python Get(). Solo le variabili nell&apos;ambito globale di Python possono essere viste da Python Get(). Supporta gli stessi tipi di oggetti di Python Get(). Nota sull&apos;ambito dello spazio dei nomi JSL: lo spazio dei nomi "here" è locale all&apos;invio dello script. Il codice inviato da finestre di script diverse avrà spazi dei nomi &apos;here&apos; separati. Il codice che include un altro script avrà un unico spazio dei nomi &apos;here&apos;. Questo vale per uno script JSL che esegue Python tramite Submit() o Execute() e per gli script Python che richiamano run_jsl().

**JMP Versione aggiunta:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.run_jsl('''    Names Default to Here(1);    show(pi)''')

```

#### __str__

**Sintassi:** str(jmp.here)

**Descrizione:** Visualizza il contenuto di "qui" in una rappresentazione di dizionario.

**JMP Versione aggiunta:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['e'] =  2.7182818jmp.here['Bb'] = 'bumble bee'print( jmp.here )d = str(jmp.here)print(d)

```

#### get

**Sintassi:** value = jmp.here.get(&apos;name&apos;)

**Descrizione:** La funzione get() restituisce il valore per la chiave data. Come in JSL, la chiave è un fuzzy match.

**JMP Versione aggiunta:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.get('pi') )                        print( jmp.here.get('b  b') )

```

#### items

**Sintassi:** item_list = jmp.here.items()

**Descrizione:** Restituisce un elenco di coppie chiave-valore nello spazio dei nomi.

**JMP Versione aggiunta:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.items() )

```

#### keys

**Sintassi:** key_list = jmp.here.keys()

**Descrizione:** Restituisce un elenco delle chiavi nello spazio dei nomi.

**JMP Versione aggiunta:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.keys() )

```

#### values

**Sintassi:** value_list = jmp.here.values()

**Descrizione:** Restituisce i valori nello spazio dei nomi.

**JMP Versione aggiunta:** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.values() )

```

## jmp > live

### Funzioni

#### Funzioni

#### get_credentials()

**Sintassi:** jmp.live.get_credentials(&lt;credential_name&gt;)

**Descrizione:** Negli script di aggiornamento dei dati di JMP Live, restituisce le credenziali con il nome specificato (o, se non viene fornito alcun nome, le credenziali di default) assegnate allo script. Il valore restituito è un dizionario con le chiavi "nome utente", "password" e "percorso_file_chiave".

**JMP Versione aggiunta:** 19

```python

import jmpdt = jmp.DataTable()credentials = jmp.live.get_credentials()# login to external data source using credentials['username'] and credentials['password']# create dt using obtained datajmp.live.set_result(dt)

```

#### get_import_file_path()

**Sintassi:** jmp.live.get_import_file_path()

**Descrizione:** Negli script di importazione dati di JMP Live, restituisce il percorso del file di importazione caricato.

**JMP Versione aggiunta:** 19

```python

import jmpdt = jmp.DataTable()importPath = jmp.live.get_import_file_path()with open(importPath) as importFile:    # [import data from importFile to dt]jmp.live.set_result(dt)

```

#### set_result()

**Sintassi:** jmp.live.set_result()

**Descrizione:** Negli script di aggiornamento e importazione dei dati di JMP Live, imposta la tabella dei risultati. Impostare il risultato su Nessuno per annullare l&apos;aggiornamento.

**JMP Versione aggiunta:** 19

```python

import jmpdt = jmp.DataTable()shouldUpdate = True# add data to dt, or set shouldUpdate to Falseif shouldUpdate:    jmp.live.set_result(dt)else:    jmp.live.set_result(None)

```

## jmp > log

### Funzioni

#### Funzioni

#### flush

**Sintassi:** jmp.log.flush()

**Descrizione:** Le funzioni log.flush() e log.write() sovraccaricano le funzioni stdio e stderr flush() e write() di Python. Queste sono in gran parte per uso interno di JMP, in quanto indirizzano l&apos;output di Python al log di JMP e alle finestre di log integrate. jmp.log.flush() è una NOP e restituisce una stringa vuota.

**JMP Versione aggiunta:** 18

```python

import jmpimport jmp.logjmp.log.flush()

```

#### write

**Sintassi:** jmp.log.write(&apos;message&apos;)

**Descrizione:** Le funzioni log.flush() e log.write() sovraccaricano le funzioni stdio e stderr flush() e write() di Python. Queste sono in gran parte per uso interno di JMP, in quanto indirizzano l&apos;output di Python al log di JMP e alle finestre di log integrate. I programmi possono chiamare jmp.log.write(&apos;message&apos;) per inviare esplicitamente il messaggio al log di JMP o alle finestre di log integrate.

**JMP Versione aggiunta:** 18

```python

import jmpimport jmp.logjmp.log.write('I am a log message.')

```

## jmp

### Funzioni

#### ALL_HOME

**Sintassi:** jmp.ALL_HOME

**Descrizione:** Valore corrispondente alla directory $ALL_HOME di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.ALL_HOME)

```

#### BUILTIN_SCRIPTS

**Sintassi:** jmp.BUILTIN_SCRIPTS

**Descrizione:** Valore corrispondente alla directory $BUILTIN_SCRIPTS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.BUILTIN_SCRIPTS)

```

#### Costanti

#### DESKTOP

**Sintassi:** jmp.DESKTOP

**Descrizione:** Valore corrispondente alla directory $DESKTOP di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.DESKTOP)

```

#### DOCUMENTS

**Sintassi:** jmp.DOCUMENTS

**Descrizione:** Valore corrispondente alla directory $DOCUMENTS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.DOCUMENTS)

```

#### DOWNLOADS

**Sintassi:** jmp.DOWNLOADS

**Descrizione:** Valore corrispondente alla directory $DOWNLOADS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.DOWNLOADS)

```

#### DataType

**Sintassi:** jmp.DataType.enum_value

**Descrizione:** jmp.DataType è un&apos;enumerazione che rappresenta i tipi di dati di una colonna di JMP. Sono utilizzati con la funzione jmp.DataTable.new_column() per creare colonne diverse dal tipo Numerico di default.

**JMP Versione aggiunta:** 18

```python

import jmp# for the sake of typingfrom jmp import DataType as dTypeprint('jmp.DataType members:')print( list(map(lambda c: c.name, dType)) )

```

#### Enumeratori

#### Funzioni

#### HOME

**Sintassi:** jmp.HOME

**Descrizione:** Valore corrispondente alla directory $HOME di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.HOME)

```

#### JMPPRJ

**Sintassi:** jmp.JMPPRJ

**Descrizione:** Restituisce il percorso fisico della directory temporanea del progetto. Restituisce la directory di lavoro corrente o Nessuna se lo script non è in esecuzione all&apos;interno di un progetto.

**JMP Versione aggiunta:** 19

```python

import jmpprint(jmp.JMPPRJ)

```

#### ModelingType

**Sintassi:** jmp.ModelingType.enum_value

**Descrizione:** jmp.ModelingType è un&apos;enumerazione che rappresenta il tipo di modellizzazione o analisi di una colonna JMP. Si usa con la funzione jmp.DataTable.new_column() per creare colonne diverse dal tipo di modellizzazione di default Continuous. TypeNone differisce dal tipo di modellizzazione None di JMP, poiché &apos;None&apos; è una parola chiave di Python.

**JMP Versione aggiunta:** 18

```python

import jmp# for the sake of typingfrom jmp import ModelingType as mTypeprint('jmp.ModleingType members:')print( list(map(lambda c: c.name, mType)) )

```

#### PYTHONW_EXE

**Sintassi:** jmp.PYTHONW_EXE

**Descrizione:** Percorso dell&apos;eseguibile Python no-console installato da JMP (solo Windows).

**JMP Versione aggiunta:** 19

```python

import jmpimport platformif platform.system() == "Windows":    print(jmp.PYTHONW_EXE)

```

#### PYTHON_EXE

**Sintassi:** jmp.PYTHON_EXE

**Descrizione:** Percorso dell&apos;eseguibile di Python installato in JMP.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.PYTHON_EXE)

```

#### PY_USER_APPDIR

**Sintassi:** jmp.PY_USER_APPDIR

**Descrizione:** Percorso alla directory utente che funge da base per il supporto a Python di JMP. La directory dei pacchetti del sito si trova all&apos;interno di questa gerarchia di directory.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.PY_USER_APPDIR)

```

#### SAMPLE_APPS

**Sintassi:** jmp.SAMPLE_APPS

**Descrizione:** Valore corrispondente alla directory $SAMPLE_APPS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_APPS)

```

#### SAMPLE_DASHBOARDS

**Sintassi:** jmp.SAMPLE_DASHBOARDS

**Descrizione:** Valore corrispondente alla directory $SAMPLE_DASHBOARDS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_DASHBOARDS)

```

#### SAMPLE_DATA

**Sintassi:** jmp.SAMPLE_DATA

**Descrizione:** Valore corrispondente alla directory $SAMPLE_DATA di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_DATA)

```

#### SAMPLE_IMAGES

**Sintassi:** jmp.SAMPLE_IMAGES

**Descrizione:** Valore corrispondente alla directory $SAMPLE_IMAGES di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_IMAGES)

```

#### SAMPLE_IMPORT_DATA

**Sintassi:** jmp.SAMPLE_IMPORT_DATA

**Descrizione:** Valore corrispondente alla directory $SAMPLE_IMPORT_DATA di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_IMPORT_DATA)

```

#### SAMPLE_PROJECTS

**Sintassi:** jmp.SAMPLE_PROJECTS

**Descrizione:** Valore corrispondente alla directory $SAMPLE_PROJECTS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_PROJECTS)

```

#### SAMPLE_SCRIPTS

**Sintassi:** jmp.SAMPLE_SCRIPTS

**Descrizione:** Valore corrispondente alla directory $SAMPLE_SCRIPTS di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.SAMPLE_SCRIPTS)

```

#### TEMP

**Sintassi:** jmp.TEMP

**Descrizione:** Valore corrispondente alla directory $TEMP di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.TEMP)

```

#### USER_APPDATA

**Sintassi:** jmp.USER_APPDATA

**Descrizione:** Valore corrispondente alla directory $USER_APPDATA di JSL.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.USER_APPDATA)

```

#### __jmp_version__

**Sintassi:** jmp.__jmp_version__

**Descrizione:** Numero di versione dell&apos;eseguibile di JMP.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.__jmp_version__)

```

#### __version__

**Sintassi:** jmp.__version__

**Descrizione:** Numero di versione del pacchetto di importazione &apos;jmp&apos;. Non si tratta della versione di JMP.

**JMP Versione aggiunta:** 18

```python

import jmpprint(jmp.__version__)

```

#### current

**Sintassi:** dt = jmp.current()

**Descrizione:** Restituisce un oggetto DataTable per la tabella di dati JMP corrente.

**JMP Versione aggiunta:** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(jmp.current())

```

#### eval

**Sintassi:** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**Descrizione:** Valuta l&apos;argomento e restituisce il risultato.

**JMP Versione aggiunta:** 19

```python

import jmpfrom jmp import eval, Expressionexpression = Expression("2 + 2")result = eval(expression)print(result)

```

#### from_dataframe

**Sintassi:** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;, visibility=&lt;string&gt;)

**Descrizione:** Restituisce un oggetto jmp.DataTable dal dataframe di una libreria conforme al protocollo.

**JMP Versione aggiunta:** 19

**Da Ibis a JMP**

```python

import jmpimport jmputils try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)    jmputils.jpip('install', 'ibis-framework[duckdb,examples]') except Exception as e:    print(f'Install failed with exception: {e}')          import pandas as pd import ibis  pandas_df = pd.DataFrame(     [["a", 1, 2], ["b", 3, 4]],     columns=["one", "two", "three"], ) t = ibis.memtable(pandas_df, name="t") print(t) dt = jmp.from_dataframe(t) print(dt)

```

**Da JMP a Pandas**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pddt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")pandas_df = (pd.api.interchange.from_dataframe(dt))print(pandas_df)

```

**Da JMP a Polars**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as pldt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")polars_df = pl.from_dataframe(dt)print(polars_df)

```

**Da Pandas a JMP**

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df)print(dt)

```

**Da Polars a JMP**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as plfrom datetime import datepolars_df = pl.DataFrame( {    "foo": [1, 2, 3],    "bar": [6.0, 7.0, 8.0],    "ham": [date(2020, 1, 2), date(2021, 3, 4), date(2022, 5, 6)],  } ) print(polars_df) dt = jmp.from_dataframe(polars_df) print(dt)

```

**Fallback CSV**

```python

import jmpimport jmputils        try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe(df)print(dt)

```

**Visibility**

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df, visibility="invisible")#dt = jmp.from_dataframe(pandas_df, visibility="private")print(dt)

```

#### from_dataframe_using_csv

**Sintassi:** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;, visibility=&lt;string&gt;)

**Descrizione:** Restituisce un oggetto jmp.DataTable da un dataframe della libreria, utilizzando il metodo di conversione CSV fornito.

**JMP Versione aggiunta:** 19

**General**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})try:    # Try converting object without CSV fallback    dt = jmp.from_dataframe(df, True, False)    print("Converted using jmp.from_dataframe()")except:     # Explicitly convert using CSV    dt = jmp.from_dataframe_using_csv(df)    print("Converted using jmp.from_dataframe_using_csv()")print(dt)

```

**Visibility**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe_using_csv(df, visibility="invisible")#dt = jmp.from_dataframe_using_csv(df, visibility="private")print(dt)

```

#### open

**Sintassi:** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**Descrizione:** Apre un file situato in percorso_file. Se il file è un file .jmp o un file che importa in una tabella di dati JMP, l&apos;oggetto restituito sarà un oggetto Tabella di dati. Altrimenti restituirà Vero o Falso per la riuscita o meno. Il parametro facoltativo di visibilità controlla se il file aperto è nascosto alla vista. Invisibile significa che è semplicemente nascosto alla vista, ma viene comunque visualizzato nel menu dei file recenti e nella finestra Home. Con una tabella privata, il riferimento restituito è l&apos;unico riferimento alla tabella e non compare in alcuno degli elenchi di file.

**JMP Versione aggiunta:** 18

**Excel**

```python

import jmpobj = jmp.open(jmp.SAMPLE_IMPORT_DATA + 'Bigclass.xlsx')print(obj)

```

**Invisibile**

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Invisible')dt = jmp.current()print(dt)  # successdt = jmp.table('Animals')print(dt)  # success# Select and run the above first if you want to see that even though# there is no window, Animals.jmp appears in recent files and# home window's list of filesdt.close(save=False);del dt

```

**JMP**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt)

```

**Privato**

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')dt = jmp.current()print(dt)  # => Nonetry:  dt = jmp.table('Animals')except FileNotFoundError:  print('Requested table not found')dt = jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')print(dt)dt.close(save=False)del dt

```

**Script JSL**

```python

import jmpobj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')print(obj)

```

#### path_variable

**Sintassi:** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**Descrizione:** Restituisce il valore di una variabile di percorso con un nome del tipo SAMPLE_DATA che viene sostituita se trovata nei nomi di percorso.

**JMP Versione aggiunta:** 19

```python

import jmppath_value = jmp.path_variable('SAMPLE_DATA')if not path_value:    print('Invalid path variable.')else:    print(path_value)

```

#### r_name

**Sintassi:** dt = jmp.r_name(jsl_var)

**Descrizione:** Associa il nome di una variabile JMP a un nome di variabile R utilizzando le regole di assegnazione dei nomi alle variabili R.

**JMP Versione aggiunta:** 19

```python

import jmprName = jmp.r_name('c d e')print(rName)

```

#### reset

**Sintassi:** jmp.reset()

**Descrizione:** Reimposta l&apos;ambiente Python condiviso, cancellando principalmente tutti i riferimenti agli oggetti. Questo non modifica la cache di importazione dei moduli importati. Si tratta di una limitazione dell&apos;ambiente Python stesso. I moduli che caricano librerie condivise non possono essere scaricati dal processo in esecuzione. Per ricaricare il codice Python puro, vedere la documentazione di Python.org su importlib reload().

**JMP Versione aggiunta:** 19

```python

import jmppi = 3.1415927print(pi)jmp.reset()print(pi)

```

#### run_jsl

**Sintassi:** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**Descrizione:** Esegue lo script JSL dall&apos;ambiente Python, comprese le funzioni dell&apos;interfaccia JSL Python. Il parametro facoltativo eco=, se impostato su Falso o Nessuno, impedisce al codice sorgente JSL presentato di essere riportato nel log. Verrà restituito un risultato per gli stessi tipi di oggetti JSL supportati dalle funzioni Python Send()/Get(). In caso di non riuscita dello script o di tipi di oggetti JSL non supportati, verrà restituito Nessuno.

**JMP Versione aggiunta:** 18

**Ottieni versione**

```python

import jmpjmp.run_jsl('Python Get Version();')

```

**Proprietà della colonna**

```python

import jmp# Create a data table# dt = jmp.DataTable(name='table_name', rows=n)pbp = jmp.DataTable(rows=5)pbp.name = 'Powered by Python'pbp.new_column('Name', jmp.DataType.Character)pbp.new_column('Hourly Rate')#pbp['Name'] = ['Janet', 'James', 'Jerry', 'Jenny', 'Jill']pbp[1] = [ 14.25, 9.75, 15.0, 12.35, '17.25']  # last value bad => becomes missingpbp[1][4] = 17.25## Change column format: Hourly Ratejmp.run_jsl('''Data Table( "Powered by Python" ):Hourly Rate << Format( "Currency", "USD", 17, 2 );Data Table( "Powered by Python" ):Name << Set Display Width( 75 );''')

```

**Valore restituito**

```python

import jmpvalue = jmp.run_jsl('''Names default to here(1);an A = 1.5;x = 5 * anA;''')print( f'{value} = jmp.run_jsl()')

```

#### table

**Sintassi:** dt = jmp.table(&apos;table_name&apos;)

**Descrizione:** Restituisce un oggetto DataTable per la tabella aperta con &apos;nome_tabella&apos;

**JMP Versione aggiunta:** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( jmp.table('Big Class') )

```

## jmpex > R - module > R - class

### Funzioni

#### Costanti

#### Costruttori

#### Funzioni

#### __init__

**Sintassi:** jmpex.R.R( &lt;&apos;rpy2&apos;&gt; )

**Descrizione:** Funzione per creare un oggetto classe di estensione R. Parametro opzionale per specificare il backend per il supporto a R. Attualmente è supportato solo &apos;rpy2&apos;. Questo è il valore di default se non viene specificato alcun parametro.

**JMP Versione aggiunta:** 19

```python

import jmpfrom jmpex.R import Rjr = R()print(jr.r_version())

```

#### __version__

**Sintassi:** ver = jmpex.R.R().__version__

**Descrizione:** La versione di supporto R del pacchetto jmpex.

**JMP Versione aggiunta:** 19

```python

import jmpfrom jmpex.R import Rjr = R()print(jr.__version__)

```

#### get

**Sintassi:** pyobj = jmpex.R.R.get( &apos;name&apos; )

**Descrizione:** Ottiene la variabile denominata dall&apos;ambiente R e la restituisce a Python usando la funzione r2obj(). Un DataFrame R viene restituito come un pandas.DataFrame.

**JMP Versione aggiunta:** 19

**Imposta colonna**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()a = jr.set( dt['age'], 'rage' )   # as_name required from Pythonprint(a.__class__)print(a)ra = jr.get('rage')print( ra.__class__ )print( ra )

```

**Imposta tabella di dati**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()d = jr.set( dt , 'rdt' )   # as_name required from Pythonprint(d.__class__)print(d)# A R DataFrame is returned to Python as a pandas.DataFramerdt = jr.get('rdt')print( rdt.__class__ )print( rdt )

```

**Vettore di stringhe**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()s = dt['name']nas = np.array(s)print(nas.__class__)print(nas)rv = ro.vectors.StrVector(nas)print(rv.__class__)print(rv)

```

**Vettore numerico**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# initialize jmpex.R.R classjr = R()a = dt['age']nar = np.array( a )print(nar.__class__)print(nar)rv = ro.vectors.FloatVector(nar)print(rv.__class__)print(rv)

```

#### is_connected

**Sintassi:** jmpex.R.R.is_connected( )

**Descrizione:** Funzione statica disponibile indipendentemente dall&apos;esistenza di un oggetto istanza R(). Indica che il sottosistema R è stato inizializzato.

**JMP Versione aggiunta:** 19

```python

import jmpfrom jmpex.R import Rprint(f'R initialized: {R.is_connected()}')jr = R()print(f'R initialized: {R.is_connected()}')

```

#### obj2r

**Sintassi:** jmpex.R.R.obj2r( var )

**Descrizione:** Crea un oggetto R da un oggetto Python.

**JMP Versione aggiunta:** 19

```python

import jmpfrom jmpex.R import Rjr = R()d = { "canine": ["poodle", "dalmation", "wolf"],       "ages": [ 1, 3, 5],       "vet bill": [200.0, 300.57, 2000.99] }      r_obj = jr.obj2r( d )p_obj = jr.r2obj( r_obj )print(r_obj.__class__)print(r_obj)print(p_obj.__class__)print(p_obj)

```

#### r2obj

**Sintassi:** jmpex.R.R.r2obj( var )

**Descrizione:** Crea un oggetto Python regolare da un oggetto R.

**JMP Versione aggiunta:** 19

```python

import jmpfrom jmpex.R import Rjr = R()d = { "canine": ["poodle", "dalmation", "wolf"],       "ages": [ 1, 3, 5],       "vet bill": [200.0, 300.57, 2000.99] }      r_obj = jr.obj2r( d )p_obj = jr.r2obj( r_obj )print(r_obj.__class__)print(r_obj)print(p_obj.__class__)print(p_obj)

```

#### r_version

**Sintassi:** ver = jmpex.R.R.r_version( )

**Descrizione:** Restituisce la versione di R.

**JMP Versione aggiunta:** 19

```python

import jmpfrom jmpex.R import Rjr = R()print(f'R Version: {jr.r_version()}')

```

#### set

**Sintassi:** jmpex.R.R.set( var, as_name )

**Descrizione:** Imposta la variabile Python nell&apos;ambiente R con il nome del parametro &apos;as_name&apos;. L&apos;oggetto R viene creato utilizzando la funzione obj2r() internamente. Il nome è stato passato attraverso l&apos;appropriata funzione nome -> R Nome() per garantire che il nome sia un nome di variabile R valido.

**JMP Versione aggiunta:** 19

**Imposta colonna**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()a = jr.set( dt['age'], 'rage' )   # as_name required from Pythonprint(a.__class__)print(a)ra = jr.get('rage')print( ra.__class__ )print( ra )

```

**Imposta tabella di dati**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()# R DataFrame can be jmp.DataTable, pandas.DataFrame, ...d = jr.set( dt , 'Big.Class' )   # becomes 'Big.Class'jr.submit('Big.Class')           # see: JSL R Send File(); R Submit();print(d.__class__)print(d)bc = jr.get('Big.Class')print( bc.__class__ )print( bc )

```

**Vettore di stringhe**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()s = dt['name']nas = np.array(s)print(nas.__class__)print(nas)rv = ro.vectors.StrVector(nas)print(rv.__class__)print(rv)

```

**Vettore numerico**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# initialize jmpex.Rjr = R()a = dt['age']nar = np.array( a )print(nar.__class__)print(nar)rv = ro.vectors.FloatVector(nar)print(rv.__class__)print(rv)

```

#### submit

**Sintassi:** jmpex.R.R.submit( &apos;R script&apos; )

**Descrizione:** Invia il codice del programma R per la valutazione. Restituisce il risultato come oggetto Python, se disponibile.

**JMP Versione aggiunta:** 19

**Imposta tabella di dati**

```python

import jmpfrom jmpex.R import R           jr = R()dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# R DataFrame can be jmp.DataTable, pandas.DataFrame, ...d = jr.set( dt , 'Big.Class' )   # becomes 'Big.Class'df = jr.submit('Big.Class')           # see: JSL R Send File(); R Submit();print(f'DataFrame:\n{df}')print(d.__class__)print(d)bc = jr.get('Big.Class')print( bc.__class__ )print( bc )

```

**Script**

```python

import jmpfrom jmpex.R import Rjr = R()jr.submit('''x <- rnorm (100)y <- x**2 + rnorm (100)''')

```

#### submit_file

**Sintassi:** jmpex.R.R.submit_file(&apos;path_to_R_script&apos;)

**Descrizione:** Invia un file di script R per la valutazione. Restituisce il risultato come oggetto Python, se disponibile.

**JMP Versione aggiunta:** 19

```python

import jmpimport osfrom jmpex.R import Rjr = R()result = jr.submit_file( os.path.join(jmp.SAMPLE_SCRIPTS, 'R', 'SI_example.R') )print(result)print(result.__class__)po = jr.r2obj(result)print(po)print(po.__class__)

```

## jmpex > R - module

### Funzioni

#### Concetti

#### R

**Descrizione:** Il modulo R rappresenta jmpex.R che contiene la classe Python R. La classe jmpex.R.R implementa le funzionalità dell&apos;interfaccia.

**JMP Versione aggiunta:** 19

## jmpex

### Funzioni

#### Concetti

#### jmpex - package

**Descrizione:** Il pacchetto jmpex contiene le interfacce di estensione supportate da JMP. Attualmente contiene solo un modulo di supporto per R.

**JMP Versione aggiunta:** 19

## jmputils

### Funzioni

#### Costanti

#### Funzioni

#### __version__

**Descrizione:** Numero di versione del pacchetto jmputils.

**JMP Versione aggiunta:** 19

```python

import jmpimport jmputilsprint( jmputils.__version__ )

```

#### create_jpip

**Sintassi:** create_jpip( &apos;directory_path&apos; )

**Descrizione:** Funzione per creare la versione terminale/shell di comando dello script jpip all&apos;interno della directory specificata. Lo script jpip esegue il wrapping del comando Python pip, assicurandosi che siano configurate le variabili d&apos;ambiente appropriate. Questo assicura che i pacchetti installati da jpip siano installati nella directory dei pacchetti del sito JMP.

**JMP Versione aggiunta:** 18

```python

import jmpimport jmputilsjmp.run_jsl('''dest_path = Pick Directory("Directory location to save jpip script.");// Pick Directory on windows returns a leading / use Convert File Path()If( Host is("Windows"),    dest_path = Convert File Path( dest_path, windows ));Python Send(dest_path);''')jmputils.create_jpip(dest_path)

```

#### is_installed

**Sintassi:** success = is_installed(package_name)

**Descrizione:** Restituisce Vero | Falso se nome_pacchetto è installato.

**JMP Versione aggiunta:** 19

**Esempio 1**

```python

import jmpimport jmputilsif not jmputils.is_installed('certifi'):    result = jmputils.jpip('install', 'certifi', echo=False)    try:        result.check_returncode()        print( jmputils.package_version('certifi') )    except Exception as e:        print(f'jpip install failed with reason: {e}')else:    print( jmputils.package_version('certifi') )

```

**Pacchetto non trovato**

```python

import jmpimport jmputilsif jmputils.is_installed('invalidjmppackage'):    print("Surprise!")else:    print('Package not found.')

```

#### jpip

**Sintassi:** result = jpip( &apos;pip_cmd&apos;, packages=&apos;&apos;, echo=True )

**Descrizione:** Richiamabile dall&apos;interno di JMP, questa funzione racchiude il comando pip di Python. Restituisce un oggetto subprocess.CompletedProcess. Passare a questa funzione un argomento del comando pip come stringa, con una stringa opzionale di pacchetti da installare delimitata da spazi. Un&apos;alternativa più affidabile è quella di utilizzare elenchi di singoli argomenti. Il metodo dell&apos;elenco funziona anche in presenza di spazi nei percorsi delle directory. L&apos;argomento packages ha come valore predefinito una stringa vuota. Il pacchetto "jmputils" fa parte della libreria standard Python integrata in JMP. Le funzioni di jmputils utilizzano solo chiamate alla libreria standard Python o funzionalità integrate in JMP.

**JMP Versione aggiunta:** 18

**disinstalla**

```python

import jmpfrom jmputils import jpip# R support package jmpex uninstalled like any other Python package. jpip('uninstall', 'jmpex')

```

**elenco**

```python

import jmpfrom jmputils import jpipjpip('list')

```

**File dei requisiti**

```python

import jmpfrom jmputils import jpipjmp.run_jsl('''src_path = Pick File(    "Select requirements.txt File",    "$DOCUMENTS",    {"TXT Files|txt", "All Files|*"},    0,    0,    "requirements.txt");show(src_path);If( Host is("Windows"),    src_path = Convert File Path( src_path, windows ));show(src_path);Python Send(src_path);''')jpip('install', f'-r {src_path}')

```

**installa**

```python

import jmpfrom jmputils import jpip# update to latest version of pip and setuptools then install numpy & pandasjpip('install --upgrade', 'pip setuptools certifi')jpip('install', 'numpy pandas')

```

**installa (elenco argomenti)**

```python

import jmpfrom jmputils import jpip# update to latest version of pip and setuptools then install numpy & pandasjpip(['install', '--upgrade'], ['pip', 'setuptools', 'certifi'])jpip(['install'], ['numpy', 'pandas'])

```

**jmpex**

```python

import jmpimport osfrom jmputils import jpip# Install jmpex package jpip('install', [ os.path.join(jmp.SAMPLE_SCRIPTS, 'Python', 'jmpex.zip') ] )

```

**Pacchetto locale**

```python

import jmpfrom jmputils import jpipjmp.run_jsl('''dest_path = Pick Directory("Directory location of local package directory to install.");// Pick Directory on windows returns a leading / use Convert File Path()If( Host is("Windows"),    dest_path = Convert File Path( dest_path, windows ));Python Send(dest_path);''')print(dest_path)jpip('install', dest_path)

```

#### package_version

**Sintassi:** package_version(package_name)

**Descrizione:** Numero di versione del pacchetto denominato, se installato.

**JMP Versione aggiunta:** 19

```python

import jmpimport jmputils# package_version() internally calls is_installed()print( jmputils.package_version('certifi') )

```

#### packages

**Sintassi:** pkgs_dict = packages()

**Descrizione:** Restituisce un dizionario Python contenente l&apos;elenco dei pacchetti installati.

**JMP Versione aggiunta:** 19

```python

import jmpimport jmputilspkgs = jmputils.packages()print('Package,', 'Version')for key, value in pkgs.items():    print(f'{key}: {value}')

```

