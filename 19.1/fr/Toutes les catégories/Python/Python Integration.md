# Python Integration



## Fonctions

### ALL_HOME

**Syntaxe :** jmp.ALL_HOME

**Description :** Valeur correspondant au répertoire $ALL_HOME de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.ALL_HOME)

```

### BUILTIN_SCRIPTS

**Syntaxe :** jmp.BUILTIN_SCRIPTS

**Description :** Valeur correspondant au répertoire $BUILTIN_SCRIPTS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.BUILTIN_SCRIPTS)

```

### Constantes

### DESKTOP

**Syntaxe :** jmp.DESKTOP

**Description :** Valeur correspondant au répertoire $DESKTOP de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.DESKTOP)

```

### DOCUMENTS

**Syntaxe :** jmp.DOCUMENTS

**Description :** Valeur correspondant au répertoire $DOCUMENTS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.DOCUMENTS)

```

### DOWNLOADS

**Syntaxe :** jmp.DOWNLOADS

**Description :** Valeur correspondant au répertoire $DOWNLOADS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.DOWNLOADS)

```

### DataType

**Syntaxe :** jmp.DataType.enum_value

**Description :** jmp.DataType est une énumération qui représente les types de données d&apos;une colonne JMP. Ces énumérations sont utilisées avec la fonction jmp.DataTable.new_column() pour créer des colonnes ayant un type différent du type Numérique par défaut.

**JMP Version ajoutée :** 18

```python

import jmp# for the sake of typingfrom jmp import DataType as dTypeprint('jmp.DataType members:')print( list(map(lambda c: c.name, dType)) )

```

### Fonctions

### HOME

**Syntaxe :** jmp.HOME

**Description :** Valeur correspondant au répertoire $HOME de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.HOME)

```

### JMPPRJ

**Syntaxe :** jmp.JMPPRJ

**Description :** Renvoie le chemin d&apos;accès physique du répertoire temporaire du projet. Renvoie le répertoire de travail actuel, ou Aucun si le script ne s&apos;exécute pas dans un projet.

**JMP Version ajoutée :** 19

```python

import jmpprint(jmp.JMPPRJ)

```

### ModelingType

**Syntaxe :** jmp.ModelingType.enum_value

**Description :** jmp.ModelingType est une énumération qui représente les types d&apos;analyse ou de modélisation d&apos;une colonne JMP. Ces énumérations sont utilisées avec la fonction jmp.DataTable.new_column() pour créer des colonnes ayant un type différent du type de modélisation Continu par défaut. Notez que TypeNone est différent du type de modélisation None de JMP, car « None » est un mot-clé Python.

**JMP Version ajoutée :** 18

```python

import jmp# for the sake of typingfrom jmp import ModelingType as mTypeprint('jmp.ModleingType members:')print( list(map(lambda c: c.name, mType)) )

```

### PYTHONW_EXE

**Syntaxe :** jmp.PYTHONW_EXE

**Description :** Chemin d&apos;accès au fichier exécutable Python sans console installé par JMP (Windows uniquement).

**JMP Version ajoutée :** 19

```python

import jmpimport platformif platform.system() == "Windows":    print(jmp.PYTHONW_EXE)

```

### PYTHON_EXE

**Syntaxe :** jmp.PYTHON_EXE

**Description :** Chemin d&apos;accès à l&apos;exécutable Python installé par JMP.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.PYTHON_EXE)

```

### PY_USER_APPDIR

**Syntaxe :** jmp.PY_USER_APPDIR

**Description :** Chemin d&apos;accès à l&apos;emplacement du répertoire utilisateur qui sert de base pour la prise en charge de Python dans JMP. Le répertoire des packages du site se trouve dans la hiérarchie de ce répertoire.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.PY_USER_APPDIR)

```

### SAMPLE_APPS

**Syntaxe :** jmp.SAMPLE_APPS

**Description :** Valeur correspondant au répertoire $SAMPLE_APPS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_APPS)

```

### SAMPLE_DASHBOARDS

**Syntaxe :** jmp.SAMPLE_DASHBOARDS

**Description :** Valeur correspondant au répertoire $SAMPLE_DASHBOARDS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_DASHBOARDS)

```

### SAMPLE_DATA

**Syntaxe :** jmp.SAMPLE_DATA

**Description :** Valeur correspondant au répertoire $SAMPLE_DATA de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_DATA)

```

### SAMPLE_IMAGES

**Syntaxe :** jmp.SAMPLE_IMAGES

**Description :** Valeur correspondant au répertoire $SAMPLE_IMAGES de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_IMAGES)

```

### SAMPLE_IMPORT_DATA

**Syntaxe :** jmp.SAMPLE_IMPORT_DATA

**Description :** Valeur correspondant au répertoire $SAMPLE_IMPORT_DATA de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_IMPORT_DATA)

```

### SAMPLE_PROJECTS

**Syntaxe :** jmp.SAMPLE_PROJECTS

**Description :** Valeur correspondant au répertoire $SAMPLE_PROJECTS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_PROJECTS)

```

### SAMPLE_SCRIPTS

**Syntaxe :** jmp.SAMPLE_SCRIPTS

**Description :** Valeur correspondant au répertoire $SAMPLE_SCRIPTS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_SCRIPTS)

```

### TEMP

**Syntaxe :** jmp.TEMP

**Description :** Valeur correspondant au répertoire $TEMP de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.TEMP)

```

### USER_APPDATA

**Syntaxe :** jmp.USER_APPDATA

**Description :** Valeur correspondant au répertoire $USER_APPDATA de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.USER_APPDATA)

```

### __jmp_version__

**Syntaxe :** jmp.__jmp_version__

**Description :** Numéro de version de l&apos;exécutable JMP.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.__jmp_version__)

```

### __version__

**Syntaxe :** jmp.__version__

**Description :** Numéro de version du package d&apos;importation « jmp ». Il ne s&apos;agit pas de la version de JMP.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.__version__)

```

### current

**Syntaxe :** dt = jmp.current()

**Description :** Renvoie un objet DataTable correspondant à la table de données JMP actuelle.

**JMP Version ajoutée :** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(jmp.current())

```

### eval

**Syntaxe :** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**Description :** Évalue l&apos;argument et retourne le résultat.

**JMP Version ajoutée :** 19

```python

import jmpfrom jmp import eval, Expressionexpression = Expression("2 + 2")result = eval(expression)print(result)

```

### from_dataframe

**Syntaxe :** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;, visibility=&lt;string&gt;)

**Description :** Renvoie un objet jmp.DataTable à partir du cadre de données d&apos;une bibliothèque conforme au protocole.

**JMP Version ajoutée :** 19

#### Ibis vers JMP

```python

import jmpimport jmputils try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)    jmputils.jpip('install', 'ibis-framework[duckdb,examples]') except Exception as e:    print(f'Install failed with exception: {e}')          import pandas as pd import ibis  pandas_df = pd.DataFrame(     [["a", 1, 2], ["b", 3, 4]],     columns=["one", "two", "three"], ) t = ibis.memtable(pandas_df, name="t") print(t) dt = jmp.from_dataframe(t) print(dt)

```

#### JMP vers Pandas

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pddt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")pandas_df = (pd.api.interchange.from_dataframe(dt))print(pandas_df)

```

#### JMP vers Polars

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as pldt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")polars_df = pl.from_dataframe(dt)print(polars_df)

```

#### Option de secours CSV

```python

import jmpimport jmputils        try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe(df)print(dt)

```

#### Pandas vers JMP

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df)print(dt)

```

#### Polars vers JMP

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as plfrom datetime import datepolars_df = pl.DataFrame( {    "foo": [1, 2, 3],    "bar": [6.0, 7.0, 8.0],    "ham": [date(2020, 1, 2), date(2021, 3, 4), date(2022, 5, 6)],  } ) print(polars_df) dt = jmp.from_dataframe(polars_df) print(dt)

```

#### Visibility

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df, visibility="invisible")#dt = jmp.from_dataframe(pandas_df, visibility="private")print(dt)

```

### from_dataframe_using_csv

**Syntaxe :** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;, visibility=&lt;string&gt;)

**Description :** Renvoie un objet jmp.DataTable à partir du cadre de données d&apos;une bibliothèque à l&apos;aide de la méthode de conversion CSV fournie.

**JMP Version ajoutée :** 19

#### General

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})try:    # Try converting object without CSV fallback    dt = jmp.from_dataframe(df, True, False)    print("Converted using jmp.from_dataframe()")except:     # Explicitly convert using CSV    dt = jmp.from_dataframe_using_csv(df)    print("Converted using jmp.from_dataframe_using_csv()")print(dt)

```

#### Visibility

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe_using_csv(df, visibility="invisible")#dt = jmp.from_dataframe_using_csv(df, visibility="private")print(dt)

```

### open

**Syntaxe :** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**Description :** Ouvre un fichier au chemin file_path. Si le fichier est un fichier .jmp ou un fichier qui importe dans une table de données JMP, l&apos;objet renvoyé est un objet DataTable. Dans le cas contraire, Vrai ou Faux est renvoyé en cas de réussite ou d&apos;échec. Le paramètre facultatif de visibilité contrôle si le fichier ouvert est masqué de l&apos;affichage. Invisible signifie simplement masqué de l&apos;affichage, mais visible dans le menu des fichiers récents et sur la fenêtre d&apos;accueil. Avec une table privée, la référence renvoyée est la seule référence à la table. Elle ne s&apos;affiche dans aucune des listes de fichiers.

**JMP Version ajoutée :** 18

#### Excel

```python

import jmpobj = jmp.open(jmp.SAMPLE_IMPORT_DATA + 'Bigclass.xlsx')print(obj)

```

#### Invisible

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Invisible')dt = jmp.current()print(dt)  # successdt = jmp.table('Animals')print(dt)  # success# Select and run the above first if you want to see that even though# there is no window, Animals.jmp appears in recent files and# home window's list of filesdt.close(save=False);del dt

```

#### JMP

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt)

```

#### Privée

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')dt = jmp.current()print(dt)  # => Nonetry:  dt = jmp.table('Animals')except FileNotFoundError:  print('Requested table not found')dt = jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')print(dt)dt.close(save=False)del dt

```

#### Script JSL

```python

import jmpobj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')print(obj)

```

### path_variable

**Syntaxe :** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**Description :** Renvoie la valeur d&apos;une variable de chemin d&apos;accès, qui est un nom tel que SAMPLE_DATA, qui est remplacé lorsqu&apos;il se trouve dans les noms de chemin d&apos;accès.

**JMP Version ajoutée :** 19

```python

import jmppath_value = jmp.path_variable('SAMPLE_DATA')if not path_value:    print('Invalid path variable.')else:    print(path_value)

```

### r_name

**Syntaxe :** dt = jmp.r_name(jsl_var)

**Description :** Convertit un nom de variable JMP en un nom de variable R à l’aide des règles de nommage des variables R.

**JMP Version ajoutée :** 19

```python

import jmprName = jmp.r_name('c d e')print(rName)

```

### reset

**Syntaxe :** jmp.reset()

**Description :** Réinitialise l&apos;environnement Python partagé, en effaçant principalement toutes les références à des objets. Cette opération ne modifie pas le cache d&apos;importation des modules importés. Il s&apos;agit d&apos;une limitation de l&apos;environnement Python. Les modules qui chargent des bibliothèques partagées ne peuvent pas être déchargés par le processus en cours d&apos;exécution. Pour recharger du code Python pur, consultez la documentation Python.org sur la fonction importlib reload().

**JMP Version ajoutée :** 19

```python

import jmppi = 3.1415927print(pi)jmp.reset()print(pi)

```

### run_jsl

**Syntaxe :** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**Description :** Exécutez le script JSL depuis l&apos;environnement Python, y compris les fonctions d&apos;interface Python JSL. Lorsque le paramètre facultatif echo= est défini sur Faux ou Aucun, le code source JSL présenté n&apos;est plus répercuté dans le log. Un résultat sera renvoyé pour les types d&apos;objet JSL pris en charge par les fonctions Python Send() et Get(). En cas d&apos;échec du script ou de types d&apos;objet JSL non pris en charge, Aucun sera renvoyé.

**JMP Version ajoutée :** 18

#### Obtenir la version

```python

import jmpjmp.run_jsl('Python Get Version();')

```

#### Propriétés de colonne

```python

import jmp# Create a data table# dt = jmp.DataTable(name='table_name', rows=n)pbp = jmp.DataTable(rows=5)pbp.name = 'Powered by Python'pbp.new_column('Name', jmp.DataType.Character)pbp.new_column('Hourly Rate')#pbp['Name'] = ['Janet', 'James', 'Jerry', 'Jenny', 'Jill']pbp[1] = [ 14.25, 9.75, 15.0, 12.35, '17.25']  # last value bad => becomes missingpbp[1][4] = 17.25## Change column format: Hourly Ratejmp.run_jsl('''Data Table( "Powered by Python" ):Hourly Rate << Format( "Currency", "USD", 17, 2 );Data Table( "Powered by Python" ):Name << Set Display Width( 75 );''')

```

#### Valeur renvoyée

```python

import jmpvalue = jmp.run_jsl('''Names default to here(1);an A = 1.5;x = 5 * anA;''')print( f'{value} = jmp.run_jsl()')

```

### table

**Syntaxe :** dt = jmp.table(&apos;table_name&apos;)

**Description :** Renvoie un objet DataTable correspondant à la table de données ouverte portant le nom « table_name »

**JMP Version ajoutée :** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( jmp.table('Big Class') )

```

### Énumérations

## jmp > DataConnector

### Fonctions

#### Aptitude à copier avec copy.copy

**Description :** Les objets DataConnector prennent en charge la copie superficielle avec la fonction standard copy.copy.



Il n&apos;est pas possible de modifier le comportement de copie dans les sous-classes. De ce fait, les sous-classes ne doivent pas ajouter d&apos;attributs d&apos;instance supplémentaires, car ceux-ci ne seront pas copiés.

**JMP Version ajoutée :** 19

```python

import jmpimport copyclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource(copy.copy(self))jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def __init__(self, config):        self._config = config        print("Connecting to data source")    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column')        dt['column'] = [self._config['My Option']]        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" ),            My Option( 42 )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### Concepts

#### Fonctions

#### Méthodes

#### __getitem__

**Syntaxe :** value = dc["FIELD NAME"]

**Description :** Récupère la valeur associée à un champ.

**JMP Version ajoutée :** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {"Example Field": str}class ExampleConnector(jmp.DataConnector):    ...    def _do_as_data_source(self):        ef = self["Example Field"]        # When running the JSL below, ef will be "example value"        print(f"{ef=}")        ...jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# This will fail but only after printing the valuejmp.run_jsl("""    New SQL Query( Connection(        New Data Connector(            Type("Python:__main__:ExampleConnectorType"),            Example Field("example value")        )    ) ) << Modify""", echo=False)

```

#### _do_as_data_source

**Syntaxe :** def _do_as_data_source(self) -&gt; jmp.DataSource:

**Description :** Les sous-classes doivent remplacer cette fonction pour créer une connexion. La connexion renvoyée, sous la forme d&apos;une sous-classe de jmp.DataSource, permet l&apos;intégration au Générateur de requêtes.



Évitez de stocker et d&apos;utiliser une référence à l&apos;instance de connecteur (self) dans la source de données renvoyée. D&apos;autres parties du code peuvent également contenir une référence et modifier des valeurs de configuration de manière inattendue. À la place, envisagez de faire référence à une copie indépendante créée avec copy.copy, comme « self_copy = copy.copy(self) ».

**JMP Version ajoutée :** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource(self['My Option'])jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def __init__(self, my_option):        self._my_option = my_option        print("Connecting to data source")    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column')        dt['column'] = [self._my_option]        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" ),            My Option( 42 )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### _do_open

**Syntaxe :** def _do_open(self) -&gt; jmp.DataTable:

**Description :** Les sous-classes peuvent remplacer cette fonction pour ouvrir une table directement. Cette fonction implémente le message Open dans JSL [Nouveau connecteur de données(...) << Open()].



Si cette fonction et _do_as_data_source sont tous deux implémentés, ils doivent être en mesure d&apos;ouvrir le même ensemble de tables.

**JMP Version ajoutée :** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_open(self):        dt = jmp.DataTable(rows=1)        dt.new_column('column')        dt['column'] = [self['My Option']]        return dtjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    My Option( 42 )) << Open();""", echo=False)

```

#### tie

**Syntaxe :** jmp.DataConnector.tie(DataConnectorTypeClass, DataConnectorClass)

**Description :** Associe une sous-classe jmp.DataConnectorType à une sous-classe jmp.DataConnector, en les « reliant » et en complétant les définitions des deux classes. Cette association permet à la sous-classe jmp.DataConnector d&apos;accéder à la sous-classe jmp.DataConnectorType et à ses définitions de champ. Cela garantit également que la sous-classe jmp.DataConnectorType crée des instances jmp.DataConnector à l&apos;aide de la sous-classe spécifiée.



Cette fonction crée l&apos;association en définissant des attributs sur les sous-classes.

**JMP Version ajoutée :** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {'My Option': int}class ExampleConnector(jmp.DataConnector):    def _do_open(self):        dt = jmp.DataTable(rows=1)        dt.new_column('column')        dt['column'] = [self['My Option']]        return dtjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    My Option( 42 )) << Open();""", echo=False)

```

#### Éléments spéciaux

## jmp > DataConnectorField

### Fonctions

#### Constructeurs

#### __init__

**Syntaxe :** field = jmp.DataConnectorField(type, &lt;default=DEFAULT_VALUE,&gt; &lt;tooltip="TOOLTIP" | None,&gt; &lt;ui_name="UI NAME" | None,&gt; &lt;credential="CREDENTIAL TYPE" | None,&gt; &lt;sensitive=True | False,&gt; &lt;mask_input=True | False&gt;)

**Description :** DataConnectorField définit un champ.



Arguments de base :



type : le type de champ, comme int (voir jmp.DataConnectorType.fields pour plus d&apos;informations).



default : la valeur par défaut pour ce champ, comme 42. Si elle n&apos;est pas fournie, la valeur par défaut dépend du type : None si cette valeur est prise en charge, par exemple pour le type « int | None » ; sinon la valeur vide correspondant au type, c&apos;est-à-dire une chaîne vide pour str, 0 pour int et False pour bool.



tooltip : si cette valeur est fournie et différente de None, elle est utilisée comme info-bulle pour le champ dans l&apos;éditeur de connecteur de données.



ui_name : si cette valeur est fournie est différente de None, elle est utilisée comme nom du champ dans l&apos;éditeur de connecteur de données à la place du nom réel du champ.



Arguments supplémentaires lorsque le type est « str » ou « str | None » :



credential : si cette valeur est fournie est différente de None, le type d&apos;informations d&apos;identification stocké par ce champ. Les valeurs valides sont « username » et « password ». JMP utilise ces informations pour permettre la prise en charge des espaces réservés.



sensitive : lorsque défini sur true, ce champ est considéré comme contenant des informations sensibles. Ses valeurs ne sont donc pas écrites en texte brut. Défini par défaut sur true si « credential » est défini, et sur false dans le cas contraire.



mask_input : lorsque défini sur true, la valeur est cachée et indiquée par des points dans l&apos;éditeur de connecteur de données. Défini par défaut sur true si « credential » est « password » ou « sensitive » est true et credential n&apos;est pas défini.

**JMP Version ajoutée :** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    _DCF = jmp.DataConnectorField    fields = {        "Field 1": int,        # Same as Field 1 but uses jmp.DataConnectorField instead of a bare type        "Field 2": _DCF(int),        # Like Field 1 and Field 2 but adds a tooltip        "Field 3": _DCF(int, tooltip="The third field."),        # Like Field 1 and Field 2 but adds a default value and a tooltip        "Field 4": _DCF(int, default=42, tooltip="The fourth field."),        # ui_name is useful for JSL-unfriendly names or localization        "JSL Unfriendly Field": _DCF(int, ui_name="JSL-Unfriendly Field"),        # credential (and sensitive and mask_input) are useful for usernames,        # passwords, and other sorts of credentials        "Password Field": _DCF(str, credential="password"),    }class ExampleConnector(jmp.DataConnector):    def _do_open(self):        # Show the values then error        print(f"{self["Field 1"] = }")        print(f"{self["Field 2"] = }")        print(f"{self["Field 3"] = }")        print(f"{self["Field 4"] = }")        print(f"{self["JSL Unfriendly Field"] = }")        print(f"{self["Password Field"] = }")        raise NotImplementedErrorjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# To see the tooltips, the UI name, and the masking triggered by credential,# you'll need to launch the Data Connector Editor and set the type to# Python:__main__:ExampleConnectorType.jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    Field 1( 4 ),    Field 2( 19 ),    Field 3( 23 ),    Field 4( 42 ),    JSL Unfriendly Field( 65 ),    // This encodes the string "107":    Password Field( "0173AEE42BA6B646CBE03941DD25153DAAFDF2ED3039A9E64296808E53DA110CDE45733216E9B2A3F82AA052F370443F231C8B1D83E2AA68B6D19DD4B6BB0CE08F635C07162E3E13B2AF77D25DF8DDD1DB" )) << Open();""", echo=False)

```

## jmp > DataConnectorGroupedFields

### Fonctions

#### Constructeurs

#### __init__

**Syntaxe :** fields = jmp.DataConnectorGroupedFields([("Group 1 Name", GROUP_1_FIELDS), ("Group 2 Name", GROUP_2_FIELDS), ...])

**Description :** jmp.DataConnectorGroupedFields définit des champs en groupes nommés. Les groupes sont passés comme liste de paires. Le premier élément de chaque paire est le nom du groupe, et le deuxième est un dictionnaire contenant les champs. Le dictionnaire a le même format qu&apos;un dictionnaire utilisé directement comme valeur de jmp.DataConnectorType.fields.



L&apos;utilisation de groupes affecte la présentation des champs dans l&apos;éditeur de connecteur de données, mais pas leur accès par programmation. Le nom du groupe est utilisé uniquement dans l&apos;IU. La règle de nommage des champs pour éviter l&apos;utilisation de caractères qui ne doivent pas être utilisés dans les noms JSL ne s&apos;applique donc pas.

**JMP Version ajoutée :** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = jmp.DataConnectorGroupedFields([        # Specify a first group named "Route" that has "Destination" and        # "Origin" fields.        ("Route", {            "Destination": str,            "Origin": str,        }),        # Specify a second group named "Vehicle" that has "Passengers" and        # "Range" fields.        ("Vehicle", {            "Passengers": int,            "Range": int,        }),    ])class ExampleConnector(jmp.DataConnector):    def _do_open(self):        # Show the values then error        print(f"{self["Destination"] = }")        print(f"{self["Origin"] = }")        print(f"{self["Passengers"] = }")        print(f"{self["Range"] = }")        raise NotImplementedErrorjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# To see the groups you'll need to launch the Data Connector Editor# and set the type to Python:__main__:ExampleConnectorType.jmp.run_jsl(r"""New Data Connector(    Type( "Python:__main__:ExampleConnectorType" ),    Destination( "JMP" ),    Origin( "RDU" ),    Passengers( 5 ),    Range( 254 )) << Open();""")

```

## jmp > DataConnectorType

### Fonctions

#### Propriétés

#### fields

**Syntaxe :** fields = {"Name 1": TYPE_1 | jmp.DataConnectorField(...), "Name 2": TYPE_2 | jmp.DataConnectorField(...), ...} | jmp.DataConnectorGroupedFields(...)

**Description :** Les sous-classes doivent définir une variable « fields » au niveau de la classe, qui spécifie les options de configuration pour ce type. Il doit s&apos;agir d&apos;un objet dictionnaire ou jmp.DataConnectorGroupedFields.



Les clés du dictionnaire sont les noms des options de configuration, qui sont exposés dans JSL et l&apos;éditeur. Ils doivent être formatés comme des identificateurs JSL. La valeur correspondant à chaque clé est le type du champ, tel que str ou int, ou un objet jmp.DataConnectorField.



Les types suivants sont pris en charge : bool, int et str. Les versions facultatives de ces types, comme typing.Optional[bool] ou bool | None pour bool, sont également prises en charge. Une valeur manquante est représentée par None.

**JMP Version ajoutée :** 19

```python

import jmpimport typingclass ExampleConnectorType(jmp.DataConnectorType):    _DCF = jmp.DataConnectorField    fields = {        "Basic Int Field": int,        "Optional Int Field": int | None,        "Alternative Optional Int Field": typing.Optional[int],        "Int Field With Default And Tooltip": _DCF(int, default=42, tooltip=(            "Tooltip for complicated int field."        )),        "Catalog": _DCF(str, default="main", tooltip=(            "Database catalog in which to access schemas and tables."        )),    }class ExampleConnector(jmp.DataConnector):    def _do_open(self):        # Show values for demo purposes and then error out        print(f"{self["Basic Int Field"] = }")        print(f"{self["Optional Int Field"] = }")        print(f"{self["Alternative Optional Int Field"] = }")        print(f"{self["Int Field With Default And Tooltip"] = }")        print(f"{self["Catalog"] = }")        raise NotImplementedErrorjmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# To see the tooltips you'll need to launch the Data Connector Editor# and set the type to Python:__main__:ExampleConnectorType.jmp.run_jsl(r"""New Data Connector( Type( "Python:__main__:ExampleConnectorType" ) ) << Open();""")

```

## jmp > DataSource

### Fonctions

#### Méthodes

#### get_schemas

**Syntaxe :** def get_schemas(self) -&gt; Sequence[str] | None:

**Description :** Les sous-classes peuvent remplacer cette fonction pour fournir une liste de schémas dans la source de données. Si cette fonction n&apos;est pas remplacée et renvoie None, la source de données est considérée comme ne prenant pas en charge les schémas.

**JMP Version ajoutée :** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)# Pretend our data source has two schemas, each with a tableclass ExampleDataSource(jmp.DataSource):    def get_schemas(self):        # Normally you would get this dynamically instead of hard-coding it.        return ['schema1', 'schema2']    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column', jmp.DataType.Character)        dt['column'] = [f'{schema}.{table}']        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Schema( "schema1" ), Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### get_tables

**Syntaxe :** def get_tables(self, schema: str) -&gt; Sequence[str]:

**Description :** Les sous-classes doivent remplacer cette fonction pour fournir une liste des tables dans la source de données. Si les schémas sont pris en charge, cette liste doit inclure uniquement les tables sous le schéma passé. Sinon, le paramètre de schéma doit être ignoré.

**JMP Version ajoutée :** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        # Normally you would get this dynamically instead of hard-coding it.        return ['example1', 'example2']    def open_table(self, schema, table):        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('column', jmp.DataType.Character)        dt['column'] = [table]        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "A" ),    Select( Star ),    From( Table( "example1", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### open_table

**Syntaxe :** def open_table(self, schema: str, table: str) -&gt; jmp.DataTable | str:

**Description :** Les sous-classes doivent remplacer cette fonction pour obtenir les données de la table nommée. Si les schémas ne sont pas pris en charge, la valeur de l&apos;argument de schéma peut être ignorée. La fonction doit renvoyer un objet jmp.DataTable ou une chaîne contenant un chemin d&apos;accès à un fichier dans un format de données pris en charge par JMP.



Si une table de données est renvoyée directement, la table doit être créée en privé. Si une chaîne de chemin d&apos;accès est renvoyée, JMP ouvre la table de données et capture les paramètres utilisés, en les conservant dans les scripts du générateur de requêtes.

**JMP Version ajoutée :** 19

**Créer la table directement**

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        # Normally you would use schema and table.        dt = jmp.DataTable(rows=1, visibility='private')        dt.new_column('Hello', jmp.DataType.Character)        dt['Hello'] = ['world!']        return dtjmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

**Renvoyer un chemin d'accès à un fichier**

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        return ['example']    def open_table(self, schema, table):        # Normally you would use schema and table.        return jmp.SAMPLE_IMPORT_DATA + 'Bigclass_L.txt'jmp.run_jsl(r"""New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run;""", echo=False)

```

#### open_table_with_settings

**Syntaxe :** def open_table_with_settings(self, schema: str, table: str, settings: str | None) -&gt; (jmp.DataTable, str | None):

**Description :** Les sous-classes peuvent remplacer cette fonction au lieu de open_table pour fournir un traitement sur mesure des paramètres d&apos;ouverture de table. Cette fonction est semblable à open_table, mais elle est également appelée avec les paramètres existants, le cas échéant. Elle doit renvoyer une table de données, ainsi que les nouveaux paramètres, le cas échéant. Les paramètres manquants sont indiqués par None.

**JMP Version ajoutée :** 19

```python

import jmpclass ExampleConnectorType(jmp.DataConnectorType):    fields = {}class ExampleConnector(jmp.DataConnector):    def _do_as_data_source(self):        return ExampleDataSource()jmp.DataConnector.tie(ExampleConnectorType, ExampleConnector)class ExampleDataSource(jmp.DataSource):    def get_tables(self, schema):        return ['example']    def open_table_with_settings(self, schema, table, settings):        print(f"Input settings: {settings!r}")        if settings is None:            # In practice settings are something you prompt the user            # for, but here we hard-code it.            settings = f'settings for {table}'        dt = jmp.DataTable(visibility='private')        dt.new_column()        print(f"Output settings: {settings!r}")        return dt, settingsjmp.run_jsl(r"""Write( ( New SQL Query(    Connection(        New Data Connector(            Type( "Python:__main__:ExampleConnectorType" )        )    ),    QueryName( "example" ),    Select( Star ),    From( Table( "example", Alias( "t1" ) ) )) << Run Foreground ) << Get Property( "Source" ) );""", echo=False)

```

## jmp > DataTable > Column

### Fonctions

#### Concepts

#### Constructeurs

#### Mappage

**Description :** L&apos;objet jmp.DataTable.Column prend en charge le protocole de mappage Python. Pour cela, fournissez les opérateurs [] de tableau en utilisant un indice de ligne numérique.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]for i in range(0, dt.nrows):    print( dt[0][i] )

```

#### Propriétés

#### Séquence

**Description :** L&apos;objet DataTable.Column se comporte comme une séquence Python. Cela permet l&apos;itération sur les valeurs de la colonne.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]for n in dt[0]:    print( n )

```

#### Tranche

**Description :** L&apos;opérateur tranche sert de paramètre à l&apos;opération d&apos;obtention d&apos;élément [ ]. Il se compose de start:stop:step. Ces paramètres sont facultatifs. La valeur renvoyée est une liste de valeurs qui démarre à la valeur start sans la valeur stop, avec un incrément de step. Les nombres négatifs pour start et stop démarrent à 1 à partir de la fin de la séquence. Une valeur [step] négative décrémente le nombre de valeurs au lieu de l&apos;incrémenter. Les valeurs vides ont des valeurs par défaut appropriées. [::-1] renvoie la liste complète dans l&apos;ordre inverse, et [:] renvoie le tableau entier dans l&apos;ordre actuel.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( [c.name for c in dt[:]] )         # print list of column names default step = 1reverse_cols = dt[::-1]                  # list of column names in reverse orderprint( [c.name for c in reverse_cols] )  # print reversed column name listprint( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### __eq__

**Syntaxe :** column1 == column2

**Description :** Test d&apos;égalité qui renvoie True lorsque deux objets jmp.DataTable.Column pointent vers la même colonne de table de données JMP. Ce test ne vérifie pas la correspondance des contenus, mais que les deux variables pointent vers la même colonne.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col1 = dt[0]col2 = dt['name']col3 = dt['age']print( col1 == col2 )print( col1 == col3 )

```

#### __getitem__

**Syntaxe :** value = column[ index ]

**Description :** Fournit l&apos;opérateur [] pour obtenir la valeur de l&apos;objet jmp.DataTable.Column à partir de la colonne avec un indice qui démarre à 0.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col = dt[0]for i in range ( len(col) ):    print( col[i] )

```

#### __init__

**Syntaxe :** Column( dt_obj, name | index)

**Description :** Crée un nouvel objet de colonne qui pointe vers une colonne spécifique d&apos;une table de données. Un objet jmp.DataTable est obligatoire pour le paramètre dt_obj, ainsi qu&apos;un indice ou un nom de colonne valide.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col = jmp.DataTable.Column(dt, 'name')print(col)# Note: it's simpler to just let Python create one for you through assignment.col2 = dt['name'];print(col2)

```

#### __len__

**Syntaxe :** count = len( column )

**Description :** Renvoie le nombre de colonnes dans la table.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print( len( dt['name'] ) )

```

#### __ne__

**Syntaxe :** column1 != column2

**Description :** Test d&apos;inégalité qui renvoie True lorsque deux objets jmp.DataTable.Column ne pointent pas vers la même colonne de table de données. Ce test ne vérifie pas la correspondance des contenus, mais que les deux objets ne pointent pas vers la même colonne.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col1 = dt[0]col2 = dt['name']col3 = dt['age']print( col1 != col2 )print( col1 != col3 )

```

#### __setitem__

**Syntaxe :** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**Description :** Fournit l&apos;opérateur [] pour définir les valeurs d&apos;une colonne en obtenant un objet jmp.DataTable.Column à partir de la table en utilisant le nom de colonne ou un indice qui démarre à 0.

**JMP Version ajoutée :** 18

**datetime.date**

```python

import jmpfrom datetime import datedt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('birthday', jmp.DataType.Numeric)dt['birthday'].format = "m/d/y"dt['birthday'][0] = date.today()

```

**datetime.datetime**

```python

import jmpfrom datetime import datetimedt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('birthday', jmp.DataType.Numeric)dt['birthday'].format = "m/d/y h:m:s"dt['birthday'][0] = datetime.now()

```

**État de ligne**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column("rs", jmp.DataType.RowState)dt['rs'][0] = jmp.RowState(selected=True, marker=3, color=4)print(dt['rs'][0])

```

**Expression**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column("expressions", jmp.DataType.Expression)dt['expressions'][0] = jmp.Expression('1 + 1')print(dt['expressions'][0])result = jmp.eval(dt['expressions'][0])print(result)

```

**Image**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column("images", jmp.DataType.Expression)for i in range( len( dt["images"] ) ):    dt['images'][i] = jmp.Image(jmp.SAMPLE_IMAGES + "tile.jpg")print(dt['images'][0])

```

**Standard**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")column = dt[0]column2 = dt['age']print(column)print(column2)

```

**time.struct_time**

```python

import jmpimport timedt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('birthday', jmp.DataType.Numeric)dt['birthday'].format = "h:m:s"dt['birthday'][0] = time.localtime()

```

#### __str__

**Syntaxe :** str( column_obj )

**Description :** Renvoie une représentation sous forme de chaîne contenant les informations de résumé relatives à la colonne de la table de données.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt[0])

```

#### data_length

**Syntaxe :** col_obj.data_length

**Description :** Propriété qui renvoie la longueur des données du champ de colonne. Cette valeur peut être 0, 1, 2, 4 ou 8 octets. 0 est la valeur par défaut et implique que 8 octets sont utilisés pour les champs numériques de table de données.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f'Data length of dt[-1] (weight column): {dt[-1].data_length}')

```

#### display_width

**Syntaxe :** col_obj.display_width col_obj.display_width = &lt;int&gt;

**Description :** Modifier la largeur d&apos;affichage de la colonne.

**JMP Version ajoutée :** 19

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")jmp.run_jsl('Wait( 0 );')print(dt[0].display_width)dt[0].display_width = 100print(dt[0].display_width)

```

#### dtype

**Syntaxe :** col_obj.dtype

**Description :** Propriété qui renvoie la valeur d&apos;énumération correspondant au type de données de la colonne.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f"Data Type of dt['age']: {dt['age'].dtype}")dt['age'].dtype = jmp.DataType.Character print(f"Updated Data Type of dt['age']: {dt['age'].dtype}")

```

#### format

**Syntaxe :** col_obj.format col_obj.format = tuple&lt; &lt;string&gt;|&lt;int&gt;, ... &gt;

**Description :** Obtenir le format

**JMP Version ajoutée :** 19

**Affectation de n-uplet**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print(dt[3].format)dt[3].format = ('Fixed Dec', 6, 3)print(dt[3].format)

```

**Différentes variantes**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "XYZ Stock Averages (plots).jmp")dt[0].format = ("ddMonyyyy", 9)dt[1].format = "Currency"dt[2].format = (    "best",    "Use Thousands Separator",    10,    0)dt[3].format = (    "Fixed Dec",    "Use Thousands Separator",    10,    2)

```

#### formula

**Syntaxe :** col_obj.formula col_obj.formula = &lt;Expression | string&gt;

**Description :** Définit une formule de colonne en fonction d&apos;un objet Expression ou d&apos;une chaîne représentant un JSL valide donnés.

**JMP Version ajoutée :** 19

**Chaîne**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('ratio', jmp.DataType.Numeric)dt['ratio'].formula = ':Height / :Weight'print(dt['ratio'].formula)

```

**Expression**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt.new_column('ratio', jmp.DataType.Numeric)dt['ratio'].formula = jmp.Expression(':Height / :Weight')print(dt['ratio'].formula)

```

#### mtype

**Syntaxe :** col_obj.mtype

**Description :** Propriété qui renvoie la valeur d&apos;énumération correspondant au type de modélisation de la colonne.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f"Modeling Type of dt['age']: {dt['age'].mtype}") dt['age'].mtype = jmp.ModelingType.Nominalprint(f"Updated Modeling Type of dt['age']: {dt['age'].mtype}")

```

#### name

**Syntaxe :** col_obj.name col_obj.name = &lt;string&gt;

**Description :** La propriété Nom de la colonne peut être lue et définie.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print(dt[0].name)dt[0].name = 'First Name'

```

#### Égalité

**Description :** L&apos;objet Column prend en charge les tests d&apos;égalité et d&apos;inégalité. Étant donné qu&apos;un objet DataTable.Column est actuellement une référence à une colonne de table de données live, plusieurs objets Column pourraient pointer vers la même colonne actuelle. Les tests d&apos;égalité == et d&apos;inégalité != ne comparent pas le contenu. Ils vérifient simplement si les deux objets DataTable.Column pointent vers la même colonne.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")col1 = dt[0]col2 = dt['name']col3 = dt['age']print( col1 == col2 )print( col1 == col3 )print( col1 != col2 )print( col1 != col3 )

```

#### Éléments spéciaux

## jmp > DataTable

### Fonctions

#### Concepts

#### Constructeurs

#### Mappage

**Description :** L&apos;objet DataTable prend en charge le protocole de mappage Python. Pour cela, fournissez les opérateurs [] de tableau et utilisez un nom de colonne ou une valeur numérique comme indice de colonne.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( f'Column name: {dt[1].name}' )print( f"Column name: {dt['age'].name}" )

```

#### Méthodes

#### Propriétés

#### Séquence

**Description :** L&apos;objet DataTable se comporte comme une séquence Python. Cela permet l&apos;itération sur les colonnes de la table.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")for n in dt:    print( n.name )

```

#### Tranche

**Description :** L&apos;opérateur tranche sert de paramètre à l&apos;opération d&apos;obtention d&apos;élément [ ]. Il se compose de start:stop:step. Ces paramètres sont facultatifs. La valeur renvoyée est une liste de valeurs qui démarre à la valeur start sans la valeur stop, avec un incrément de step. Les nombres négatifs pour start et stop démarrent à 1 à partir de la fin de la séquence. Une valeur « step » négative décrémente le nombre de valeurs au lieu de l&apos;incrémenter. Les valeurs vides ont des valeurs par défaut appropriées. [::-1] renvoie la liste complète dans l&apos;ordre inverse, et [:] renvoie le tableau entier dans l&apos;ordre actuel.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( [c.name for c in dt[:]] )         # print list of column names default step = 1reverse_cols = dt[::-1]                  # list of column names in reverse orderprint( [c.name for c in reverse_cols] )  # print reversed column name listprint( dt['name'][0:20:2] )              # print every other value in range [0, 20)

```

#### __eq__

**Syntaxe :** table1 == table2

**Description :** Test d&apos;égalité qui renvoie True lorsque deux objets jmp.DataTable pointent vers la même table de données JMP. Ce test ne vérifie pas la correspondance des contenus, mais que les deux variables pointent vers la même table.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt2 = jmp.current()iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")print( dt == dt2 )print( dt == iris)

```

#### __getitem__

**Syntaxe :** column = dt[&apos;name&apos; | index]

**Description :** Fournit l&apos;opérateur [] pour obtenir l&apos;objet jmp.DataTable.Column à partir de la table en utilisant le nom de colonne ou un indice qui démarre à 0.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")column = dt[0]column2 = dt['age']print(column)print(column2)

```

#### __init__

**Syntaxe :** dt = jmp.DataTable(&lt;name=&apos;table_name&apos;&gt;, &lt;rows=n&gt;, &lt;visibility=&apos;Invisible&apos; | &apos;Private&apos; )

**Description :** Créez une table de données portant le nom « table_name » avec n lignes. Les paramètres et les mots-clés sont facultatifs, sauf si uniquement les lignes sont spécifiées ou si l&apos;ordre des paramètres est inversé.

**JMP Version ajoutée :** 18

**Avec mots-clés**

```python

import jmpdt = jmp.DataTable(rows=40, name='Powered By Python')

```

**Invisible**

```python

import jmpdt = jmp.DataTable('Powered By Python', 40, visibility='Invisible')

```

**Nommée avec des lignes**

```python

import jmpdt = jmp.DataTable('Powered By Python', 40)

```

**Privée**

```python

import jmpdt = jmp.DataTable('Powered By Python', 40, visibility='private')

```

**Table vide**

```python

import jmpdt = jmp.DataTable()

```

**Table vide nommée**

```python

import jmpdt = jmp.DataTable('Powered By Python')

```

#### __len__

**Syntaxe :** count = len(dt)

**Description :** Renvoie le nombre de colonnes dans la table.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")print( len(dt) )

```

#### __ne__

**Syntaxe :** table1 != table2

**Description :** Test d&apos;inégalité qui renvoie True lorsque deux objets jmp.DataTable ne pointent pas vers la même table de données. Ce test ne vérifie pas la correspondance des contenus, mais que les deux objets ne pointent pas vers la même table.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt2 = jmp.current()iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")print( dt != dt2 )print( dt != iris)

```

#### __setitem__

**Syntaxe :** dt[&apos;name&apos; | index] = [ list, of, items, count, must, match, table, rows]

**Description :** Fournit l&apos;opérateur [] pour définir les valeurs d&apos;une colonne en obtenant un objet jmp.DataTable.Column à partir de la table en utilisant le nom de colonne ou un indice qui démarre à 0.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]print( dt[0][:] )

```

#### __str__

**Syntaxe :** str( data_table )

**Description :** Renvoie une représentation sous forme de chaîne des informations de résumé relatives à l&apos;objet de table de données.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt)

```

#### add_rows

**Syntaxe :** add_rows(rows, &lt;at=-1&gt;)

**Description :** Ajoute des lignes à un objet DataTable. rows est obligatoire. at est facultatif. Si la valeur de at est 0, l&apos;insertion se produit au début de la table de données ; si la valeur est <0, l&apos;insertion se produit à la fin de la table de données. Sinon, si at est m, l&apos;insertion se produit à la ligne m (index qui démarre à 0).

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.add_rows(5)dt.add_rows(1, at=0)dt.add_rows(2, at=12) # 0-based indexing

```

#### begin_update

**Syntaxe :** dt.begin_update() # added JMP 19.1

**Description :** Small tables update rapidly, but for large tables, having to update the user interface while making mass changes to a column is very time consuming. The begin_update() method stops the GUI updates to the data table until a corresponding end_update().

**JMP Version ajoutée :** 19

```python

import jmpimport randomimport timedt = jmp.open(jmp.SAMPLE_DATA + "Wafer Stacked.jmp")print(dt.nrows)start_time = time.perf_counter()dt.begin_update()try:    for x in range(dt.nrows):        dt[5][x] = random.randint(1,1000)finally:    dt.end_update()end_time = time.perf_counter()elapsed = end_time - start_timeprint(f'Elapsed time: {elapsed:.3f}')

```

#### cell_height

**Syntaxe :** dt.cell_height dt.cell_height = &lt;int&gt;

**Description :** Définir la hauteur d&apos;affichage de chaque cellule de table de données.

**JMP Version ajoutée :** 19

```python

import jmpdt = jmp.DataTable()jmp.run_jsl('Wait(0)')print(dt.cell_height)dt.cell_height = 40print(dt.cell_height)

```

#### close

**Syntaxe :** dt.close( &lt;save= True | False&gt;)

**Description :** Méthode Fermer sur un objet DataTable. Comme dans JSL, enregistre le fichier par défaut lorsque la méthode est appelée sans paramètres. Pour abandonner un fichier, par exemple un fichier créé comme table de données temporaire, utilisez dt.close(False) ou dt.close(save=False) pour plus de clarté.

**JMP Version ajoutée :** 18

```python

import jmpimport os# To remove the wow.jmp file uncomment then run the 2 lines below,# if os.path.isfile('wow.jmp'):#    os.unlink('wow.jmp')dt = jmp.DataTable('wow', 5)dt.new_column('one')dt.close()                # saves and closes filedt = jmp.open('wow.jmp')dt.new_column('two')dt.close(save=False)      # closes without saving

```

#### delete_columns

**Syntaxe :** delete_columns(&apos;name&apos;, ..., &apos;name&apos;)

**Description :** La méthode delete_columns() fonctionne comme son équivalent JSL, le message Supprimer Colonnes(). Les arguments acceptables sont : aucun argument, un nom de colonne ou des noms séparés par des virgules, une liste Python de noms de colonnes. L&apos;absence d&apos;arguments signifie la suppression des colonnes sélectionnées.

**JMP Version ajoutée :** 19

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.select_columns('weight')     # JSL:  dt << Select Columns( {:weight})r = dt.delete_columns()                  # delete by selected column(s)print(r)r = dt.delete_columns('name', 'sex')     # delete by nameprint(r)r = dt.delete_columns(['age', 'height']) # delete with list of column namesprint(r)

```

#### end_update

**Syntaxe :** dt.end_update() # added JMP 19.1

**Description :** Restores the data table GUI update processing.

**JMP Version ajoutée :** 19

```python

import jmpimport randomimport timedt = jmp.open(jmp.SAMPLE_DATA + "Wafer Stacked.jmp")print(dt.nrows)start_time = time.perf_counter()dt.begin_update()try:    for x in range(dt.nrows):        dt[5][x] = random.randint(1,1000)finally:    dt.end_update()end_time = time.perf_counter()elapsed = end_time - start_timeprint(f'Elapsed time: {elapsed:.3f}')

```

#### name

**Syntaxe :** dt.name dt.name = &apos;string&apos;

**Description :** La propriété name permet à la fois de définir et d&apos;obtenir le nom de la table de données.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.DataTable()print(dt.name)dt.name = 'Powered by Python'

```

#### ncols

**Syntaxe :** dt.ncols

**Description :** Une propriété en lecture seule qui renvoie le nombre de colonnes dans la table de données.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f'Number of columns: {dt.ncols}')

```

#### new_column

**Syntaxe :** dt.new_column( name=&apos;column_name&apos;, dtype=jmp.Numeric | .Character | .RowState | .Expression, mtype=jmp.ModelingType.Continuous | ... | TypeNone dlen=len cell type&apos;s data length especially for numeric 8(double),4(int32),2(int16),1(int8) where=n insert column after column n

**Description :** Créer une nouvelle colonne de table de données, en spécifiant de manière facultative le nom, le type de colonne, la longueur des données et le type de modélisation

**JMP Version ajoutée :** 18

**Classe New**

```python

import jmpfrom jmp import DataTable as Dtdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')nc = jmp.DataTable('New Class', dt.nrows)nc.new_column('name', jmp.DataType.Character)# populate column from a listnc[0] = ['Fred','Kimi','Amanda','Courtney','Paul','Theresa','Erika','Blake','Joseph','Amber',    'Daphne','Robert','James','Richard', 'Eric','Mark','Coleen','Brian','Bryan','Emily',    'Bonnie','Georgia','Terrance','Carmen','Hunter','Samantha','Kay','Tamara','Brett','David',    'Chandler','Siebela','Judy','Hui','Drew','Russ','Megan','Evan','Alex','Travis']col = nc.new_column('age', jmp.DataType.Numeric)# populate column from another columnnc['age'] = dt['age']print(nc['age'][::])print(col.__class__)

```

**Classe Small**

```python

import jmpdt = jmp.DataTable('Names', 5)dt.new_column('First Name', jmp.DataType.Character)dt[0]  = ['Paul', 'Kimi', 'Evan', 'Ernest', 'Shannon' ]print( dt[0][:] )print( list( dt['First Name'] ) )dt.new_column('Distance (km)', jmp.DataType.Numeric, jmp.ModelingType.Continuous)dt[1] = [ 1239.2, 12266.4, 15.75, 35.0, 10.6 ]

```

#### nrows

**Syntaxe :** dt.nrows

**Description :** Une propriété en lecture seule qui renvoie le nombre de lignes dans la table de données.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(f'Number of rows: {dt.nrows}')

```

#### row_states

**Syntaxe :** dt.row_states dt.row_states = [state1, state2, ..., stateN]

**Description :** Définit les états de ligne de toutes les lignes de la table de données.

**JMP Version ajoutée :** 19

**Colonne d'état de ligne**

```python

import jmpfrom jmp import DataTypedt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')rs_col = dt.new_column('rs', DataType.RowState)dt['rs'] = dt.row_statesdt['rs'][0] = jmp.RowState(value=33)dt['rs'][1] = jmp.RowState(color=2, marker=3)row_state = jmp.RowState(color=4, selected=False)dt['rs'][3] = row_staterow_state.marker = 9dt['rs'][4] = row_statedt.row_states = dt['rs']print(dt.row_states)

```

**Itération**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')for i in range(len(dt.row_states)):    if dt['age'][i] % 2:        dt.row_states[i].selected = Trueprint(dt.row_states)

```

**Liste de n-uplets (<index>, <RowState | int>)**

```python

import jmpfrom jmp import RowStatedt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states = [(2, RowState(marker=2, selected=True)), (5, 97)]print(dt.row_states)

```

**Liste d'entiers**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states = [33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]print(dt.row_states)

```

**Réinitialiser les états de ligne**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states = [33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]print(dt.row_states)dt.row_states = [0] * dt.nrowsprint(dt.row_states)

```

**Utilisation générale**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.row_states[0] = jmp.RowState(marker=4, color=3)print(dt.row_states)dt.row_states[0].selected = Truedt.row_states[1] = jmp.RowState(value=22)print(dt.row_states)

```

#### save

**Syntaxe :** dt.save( &lt; path=&apos;file_path&apos; &gt; )

**Description :** Enregistrez la table de données en utilisant le nom de la table de données dans le répertoire actuel. L&apos;argument facultatif de chemin d&apos;accès permet l&apos;enregistrement à un autre emplacement ou avec un nom différent.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt[0][0] = 'Katie'dt.save('BC_lowercase.jmp')

```

#### scripts

**Syntaxe :** dt.scripts dt.scripts = &lt;dict&lt;str : &lt;str | Expression&gt;&gt;&gt;

**Description :** La propriété scripts permet de lire et d&apos;écrire des scripts de table de données.

**JMP Version ajoutée :** 19

**Multiples scripts**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# Concatenationdt.scripts |= {    "Example": 'Print("Foo")',    "Example 2": jmp.Expression('Print("Bar")')}print("Distribution" in dt.scripts)print("Example" in dt.scripts)print("Example 2" in dt.scripts)# Reassigning of scripts removes all other scriptsdt.scripts = {    "Example": 'Print("FooBar")',}print(dt.scripts)# Iterationfor name, value in dt.scripts.items():    print(name, value)for name in dt.scripts:    print(name, dt.scripts[name])

```

**Récupérer/Définir des scripts**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# Getting a scriptprint(dt.scripts["Distribution"])# Adding a scriptdt.scripts["Example"] = 'Print("Foo")'dt.scripts["Example 2"] = jmp.Expression('Print("Bar")')# Getting all scriptsprint(dt.scripts)

```

**Suppression de scripts**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# Reassigning of scripts removes all other scriptsdt.scripts = {    "Example": 'Print("Foo")',    "Example 2": jmp.Expression('Print("Bar")')}print("Distribution" in dt.scripts)   # Falseprint("Example" in dt.scripts)        # Trueprint("Example 2" in dt.scripts)      # True# Deleting a script# Note: If the script editing window is open, the script will not be deleted. del dt.scripts["Example"]dt.scripts["Example 2"] = Noneprint("Example" in dt.scripts)        # Falseprint("Example 2" in dt.scripts)      # Falsedt.scripts = {    "Example": 'Print("FooBar")',}# Deleting all scriptsdt.scripts = {}

```

#### select_columns

**Syntaxe :** select_columns(&apos;name&apos;, ..., &apos;name&apos;)

**Description :** La méthode select_columns() fonctionne comme son équivalent JSL, le message Sélectionner Colonnes(). Les arguments acceptables sont : un nom de colonne ou des noms séparés par des virgules, une liste Python de noms de colonnes.

**JMP Version ajoutée :** 19

**Exemple 1**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.select_columns('weight')dt.select_columns('name', 'sex')dt.select_columns(['age', 'height'])# all columns should be selected.

```

**Tout**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')dt.select_columns([col.name for col in dt])# all columns should be selected.

```

#### Égalité

**Description :** L&apos;objet DataTable prend en charge les tests d&apos;égalité et d&apos;inégalité. Étant donné qu&apos;un objet DataTable est actuellement une référence à une table de données live, plusieurs objets pourraient pointer vers la même table JMP. Les tests d&apos;égalité == et d&apos;inégalité != ne comparent pas le contenu. Ils vérifient si les deux objets DataTable pointent vers la même table JMP.

**JMP Version ajoutée :** 18

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")dt2 = jmp.current()iris = jmp.open(jmp.SAMPLE_DATA + "Iris.jmp")print( dt == dt2 )print( dt == iris)print( dt != dt2 )print( dt != iris )

```

#### Éléments spéciaux

## jmp > Expression

### Fonctions

#### Concepts

#### Constructeurs

#### Propriétés

#### __eq__

**Syntaxe :** expression1 == expression2

**Description :** Le test d&apos;égalité renvoie vrai si l&apos;objet Expression a le même contenu qu&apos;un autre objet Expression, et renvoie faux dans le cas contraire.

**JMP Version ajoutée :** 19

```python

import jmpexpr1 = jmp.Expression('1 + 1')expr2 = jmp.Expression('2 + 0')expr3 = jmp.Expression('1 + 1')print(expr1 == expr2)print(expr1 == expr3)

```

#### __init__

**Syntaxe :** Expression(jsl=&lt;string&gt;)

**Description :** Crée un nouvel objet Expression.

**JMP Version ajoutée :** 19

```python

import jmpfrom jmp import Expression, evalexpr = Expression(jsl="2 + 2")print(f'Expression: {expr}')print(f'Result: {eval(expr)}')expr.jsl = '1 + 1'print(f'Expression Adjusted: {eval(expr)}')

```

#### __ne__

**Syntaxe :** expression1 != expression2

**Description :** Le test d&apos;inégalité renvoie vrai si l&apos;objet Expression a un contenu différent d&apos;un autre objet Expression, et renvoie faux dans le cas contraire.

**JMP Version ajoutée :** 19

```python

import jmpexpr1 = jmp.Expression('1 + 1')expr2 = jmp.Expression('2 + 0')expr3 = jmp.Expression('1 + 1')print(expr1 != expr2)print(expr1 != expr3)

```

#### __str__

**Syntaxe :** str( expr_obj )

**Description :** Renvoie une représentation sous forme de chaîne qui contient toutes les informations sur l&apos;objet Expression.

**JMP Version ajoutée :** 19

```python

import jmpexpr = jmp.Expression(':Height / :Weight')print(expr)

```

#### jsl

**Syntaxe :** expr_obj.jsl expr_obj.jsl = &lt;string&gt;

**Description :** La propriété jsl de l&apos;expression est lisible et définissable.

**JMP Version ajoutée :** 19

```python

import jmpexpr = jmp.Expression(jsl='0 + 0')print(expr)expr.jsl = '2 + 2'print(expr)

```

#### Égalité

**Description :** L&apos;objet Expression prend en charge les vérifications d&apos;égalité et d&apos;inégalité. Lors de la comparaison d&apos;égalité entre deux objets Expression, les valeurs sont comparées et renvoyées si elles sont égales ou non. Il s&apos;agit d&apos;une comparaison des valeurs de l&apos;objet Expression, pas de l&apos;évaluation des valeurs.

**JMP Version ajoutée :** 19

```python

import jmpexpr1 = jmp.Expression('1 + 1')expr2 = jmp.Expression('2 + 0')expr3 = jmp.Expression('1 + 1')print(expr1 == expr2)print(expr1 == expr3)print(expr1 != expr2)print(expr1 != expr3)

```

#### Éléments spéciaux

## jmp > Image

### Fonctions

#### Concepts

#### Constructeurs

#### __eq__

**Syntaxe :** image1 == image2

**Description :** Le test d&apos;égalité renvoie vrai si l&apos;objet Image a le même contenu qu&apos;un autre objet Image, et renvoie faux dans le cas contraire.

**JMP Version ajoutée :** 19

```python

import jmpimage1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')print(image1 == image2)print(image1 == image3)

```

#### __init__

**Syntaxe :** jmp.Image(path=&lt;string&gt;)

**Description :** Crée un nouvel objet Image.

**JMP Version ajoutée :** 19

```python

import jmpimage = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')print(f'Image: {image}')jmp.open(image)

```

#### __ne__

**Syntaxe :** image1 != image2

**Description :** Le test d&apos;inégalité renvoie vrai si l&apos;objet Image a un contenu différent d&apos;un autre objet Image, et renvoie faux dans le cas contraire.

**JMP Version ajoutée :** 19

```python

import jmpimage1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')print(image1 != image2)print(image1 != image3)

```

#### __str__

**Syntaxe :** str( image_obj )

**Description :** Renvoie une représentation sous forme de chaîne qui contient toutes les informations sur l&apos;objet Image.

**JMP Version ajoutée :** 19

```python

import jmpimage = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')print(image)

```

#### Égalité

**Description :** L&apos;objet Image prend en charge les vérifications d&apos;égalité et d&apos;inégalité. Lors de la comparaison entre deux objets Image, les valeurs sont comparées et renvoyées si elles sont égales ou non.

**JMP Version ajoutée :** 19

```python

import jmpimage1 = jmp.Image(jmp.SAMPLE_IMAGES + 'tile.jpg')image2 = jmp.Image(jmp.SAMPLE_IMAGES + 'pi.gif')image3 = jmp.Image(path=jmp.SAMPLE_IMAGES + 'tile.jpg')print(image1 == image2)print(image1 == image3)print(image1 != image2)print(image1 != image3)

```

#### Éléments spéciaux

## jmp > Project

### Fonctions

#### Constructeurs

#### Fonctions

#### Propriétés

#### __init__

**Syntaxe :** prj = jmp.Project(&lt;name=&apos;Project name&apos;&gt;)

**Description :** Créez un nouvel objet Projet pour accéder aux fichiers et projets JMP.

**JMP Version ajoutée :** 19

**Nom du projet**

```python

import jmpprj = jmp.Project()print(prj.name)

```

**Projet vide**

```python

import jmpprj = jmp.Project()

```

**Projet vide nommé**

```python

import jmpprj = jmp.Project('My Project')

```

#### __str__

**Syntaxe :** str( project )

**Description :** Renvoie une représentation sous forme de chaîne du projet.

**JMP Version ajoutée :** 19

```python

import jmpprj = jmp.Project()print( prj )

```

#### contents

**Syntaxe :** prj.name

**Description :** Renvoie une liste des noms de fichier contenus dans le projet.

**JMP Version ajoutée :** 19

```python

import jmpprj = jmp.Project()print(prj.contents)

```

#### exists

**Syntaxe :** prj.exists(&apos;file_name&apos;)

**Description :** Prend un nom de fichier et vérifie si le fichier existe dans le projet.

**JMP Version ajoutée :** 19

```python

import jmpprj = jmp.Project()print( prj.exists('myfile.data') )

```

#### extract

**Syntaxe :** prj.extract(&apos;file_name&apos;)

**Description :** Prend un nom de fichier et extrait le fichier de Dans le projet vers le répertoire temporaire du projet.

**JMP Version ajoutée :** 19

```python

import jmpprj = jmp.Project()success = prj.extract('myfile.data')

```

#### extract_all

**Syntaxe :** prj.extract_all()

**Description :** Extrait tous les fichiers de projet dans le répertoire temporaire du projet.

**JMP Version ajoutée :** 19

```python

import jmpprj = jmp.Project()success = prj.extract_all()

```

#### is_extracted

**Syntaxe :** prj.is_extracted(&apos;file_name&apos;)

**Description :** Prend un nom de fichier et vérifie si le fichier a déjà été extrait de l&apos;archive du projet.

**JMP Version ajoutée :** 19

```python

import jmpprj = jmp.Project()print( prj.is_extracted('myfile.data') )

```

#### name

**Syntaxe :** prj.name

**Description :** La propriété nom de fichier est en lecture seule

**JMP Version ajoutée :** 19

```python

import jmpprj = jmp.Project()print(prj.name)

```

#### Éléments spéciaux

## jmp > RowState

### Fonctions

#### Concepts

#### Constructeurs

#### Propriétés

#### __eq__

**Syntaxe :** rs1 == rs2

**Description :** Le test d&apos;égalité renvoie vrai si l&apos;objet RowState a le même contenu qu&apos;un autre objet RowState, et renvoie faux dans le cas contraire.

**JMP Version ajoutée :** 19

```python

import jmprs1 = jmp.RowState(color=4, marker=2, selected=True)rs2 = jmp.RowState(color=11, excluded=True, labeled=True)rs3 = jmp.RowState(value=1057)print(rs1 == rs2)print(rs1 == rs3)

```

#### __init__

**Syntaxe :** jmp.RowState(selected?=&lt;boolean&gt;, hidden?=&lt;booleane&gt;, labeled?=&lt;boolean&gt;, excluded?=&lt;boolean&gt;, color?=&lt;int&gt;, marker?=&lt;int&gt;) jmp.RowState(value=&lt;int&gt;)

**Description :** Crée un nouvel objet RowState. L&apos;objet RowState contient une ou plusieurs des six caractéristiques des lignes d&apos;une table de données JMP, à savoir sélectionnée, masquée, exclue, étiquetée, coloriée, et marquée.

**JMP Version ajoutée :** 19

```python

import jmpfrom jmp import RowStaters = RowState(color=4, marker=2, selected=True)print(f'Row State: {rs}')rs_from_value = RowState(value=33)print(f'Row State from Value: {rs_from_value}')

```

#### __ne__

**Syntaxe :** image1 != image2

**Description :** Le test d&apos;inégalité renvoie vrai si l&apos;objet RowState a un contenu différent d&apos;un autre objet RowState, et renvoie faux dans le cas contraire.

**JMP Version ajoutée :** 19

```python

import jmprs1 = jmp.RowState(color=4, marker=2, selected=True)rs2 = jmp.RowState(color=11, excluded=True, labeled=True)rs3 = jmp.RowState(value=1057)print(rs1 != rs2)print(rs1 != rs3)

```

#### __str__

**Syntaxe :** str( rs_obj )

**Description :** Renvoie une représentation sous forme de chaîne qui contient toutes les informations sur l&apos;objet RowState.

**JMP Version ajoutée :** 19

```python

import jmprs = jmp.RowState(color=11, excluded=True, labeled=True)print(rs)

```

#### color

**Syntaxe :** rs_obj.color rs_obj.color = &lt;int&gt;

**Description :** La propriété couleur du RowState est lisible et définissable. Les couleurs vont de 0 à 84. (0 à 15 de base, 16 à 31 foncé, 32 à 47 clair, 48 à 63 très foncé, 64 à 79 très clair, 80 à 84 gris)

**JMP Version ajoutée :** 19

```python

import jmprs = jmp.RowState(color=5)print(rs)rs.color = 0print(rs)

```

#### excluded

**Syntaxe :** rs_obj.excluded rs_obj.excluded = &lt;boolean&gt;

**Description :** La propriété exclue du RowState est lisible et définissable.

**JMP Version ajoutée :** 19

```python

import jmprs = jmp.RowState(excluded=True)print(rs)rs.excluded = False print(rs)

```

#### hidden

**Syntaxe :** rs_obj.hidden rs_obj.hidden = &lt;boolean&gt;

**Description :** La propriété masquée du RowState est lisible et définissable.

**JMP Version ajoutée :** 19

```python

import jmprs = jmp.RowState(hidden=True)print(rs)rs.hidden = False print(rs)

```

#### labeled

**Syntaxe :** rs_obj.labeled rs_obj.labeled = &lt;boolean&gt;

**Description :** La propriété étiquetée du RowState est lisible et définissable.

**JMP Version ajoutée :** 19

```python

import jmprs = jmp.RowState(labeled=True)print(rs)rs.labeled = False print(rs)

```

#### marker

**Syntaxe :** rs_obj.marker rs_obj.marker = &lt;int&gt;

**Description :** La propriété marqueur du RowState est lisible et définissable. Les marqueurs vont de 0 à 31

**JMP Version ajoutée :** 19

```python

import jmprs = jmp.RowState(marker=3)print(rs)rs.marker = 0print(rs)

```

#### selected

**Syntaxe :** rs_obj.selected rs_obj.selected = &lt;boolean&gt;

**Description :** La propriété sélectionnée du RowState est lisible et définissable.

**JMP Version ajoutée :** 19

```python

import jmprs = jmp.RowState(selected=True)print(rs)rs.selected = False print(rs)

```

#### Égalité

**Description :** L&apos;objet RowState prend en charge les vérifications d&apos;égalité et d&apos;inégalité. Lors de la comparaison entre deux objets RowState, les valeurs sont comparées et renvoyées si elles sont égales ou non. Si deux objets RowState ont le même contenu, mais sont initialisés différemment, ils renvoient toujours vrai.

**JMP Version ajoutée :** 19

```python

import jmprs1 = jmp.RowState(color=4, marker=2, selected=True)rs2 = jmp.RowState(color=11, excluded=True, labeled=True)rs3 = jmp.RowState(value=1057)print(rs1 == rs2)print(rs1 == rs3)print(rs1 != rs2)print(rs1 != rs3)

```

#### Éléments spéciaux

## jmp > globals

### Fonctions

#### Concepts

#### Iteration

**Description :** La propriété globals prend en charge l&apos;itération sur l&apos;ensemble de valeurs.

**JMP Version ajoutée :** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['e'] = 2.718jmp.run_jsl('''    show(::pi)''')for x in jmp.globals:    print( x )

```

#### Méthodes

#### __getitem__

**Syntaxe :** value = jmp.globals[&apos;name&apos;]

**Description :** Récupère une variable globale JSL en tant qu&apos;objet Python. Renvoie None si l&apos;objet est introuvable. Renvoie un type opaque pour les types d&apos;objet ne pouvant être passés. Capable de transférer les mêmes types d&apos;objet que les fonctions Python Send() et Get().

**JMP Version ajoutée :** 19

```python

import jmpjmp.run_jsl('''    pi = 3.1415929''')print( jmp.globals['pi'] )

```

#### __len__

**Syntaxe :** length = len( jmp.globals )

**Description :** Renvoie le nombre de symboles dans l&apos;environnement global JSL.

**JMP Version ajoutée :** 19

```python

import jmpprint( len( jmp.globals ) )jmp.globals['pi'] = 3.1415927print( len( jmp.globals ) )jmp.globals['e'] =  2.7182818print( len( jmp.globals ) )

```

#### __setitem__

**Syntaxe :** jmp.globals[&apos;name&apos;] = value

**Description :** En raison de la portée de Python et de la conception de Python get(), seules les variables présentes dans la portée globale de Python sont accessibles avec Python get(). Le dictionnaire jmp.globals permet de définir ou de créer directement une variable JSL à partir du code Python. Le type de valeur peut être n&apos;importe quel type Python actuellement pris en charge par Python get().

**JMP Version ajoutée :** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.run_jsl('''    show(pi)''')

```

#### __str__

**Syntaxe :** str(jmp.globals)

**Description :** Affichez le contenu de globals sous forme de dictionnaire. Notez que le dictionnaire globals est également utilisé par JMP et peut donc contenir des entrées supplémentaires.

**JMP Version ajoutée :** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['e'] =  2.7182818jmp.globals['Bb'] = 'bumble bee'print( jmp.globals )d = str(jmp.globals)print(d)

```

#### get

**Syntaxe :** value = jmp.globals.get(&apos;name&apos;)

**Description :** La fonction get() renvoie la valeur de la clé donnée. Semblable à JSL, la clé est une correspondance approximative.

**JMP Version ajoutée :** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['an A'] = 'Annie'print( jmp.globals.get('pi') )                        print( jmp.globals.get('ana') )

```

#### items

**Syntaxe :** item_list = jmp.globals.items()

**Description :** Renvoie une liste de paires clé-valeur dans l&apos;espace de noms. Notez que le dictionnaire globals est également utilisé par JMP et peut donc contenir des entrées supplémentaires.

**JMP Version ajoutée :** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['bB'] = 'Bumble Bee'print( jmp.globals.items() )

```

#### keys

**Syntaxe :** key_list = jmp.globals.keys()

**Description :** Renvoie une liste des clés dans l&apos;espace de noms. Notez que le dictionnaire globals est également utilisé par JMP et peut donc contenir des entrées supplémentaires.

**JMP Version ajoutée :** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['bB'] = 'Bumble Bee'print( jmp.globals.keys() )

```

#### values

**Syntaxe :** value_list = jmp.globals.values()

**Description :** Renvoie les valeurs dans l&apos;espace de noms. Notez que le dictionnaire globals est également utilisé par JMP et peut donc contenir des entrées supplémentaires.

**JMP Version ajoutée :** 19

```python

import jmpjmp.globals['pi'] = 3.1415927jmp.globals['bB'] = 'Bumble Bee'print( jmp.globals.values() )

```

#### Éléments spéciaux

## jmp > here

### Fonctions

#### Concepts

#### Iteration

**Description :** La propriété here prend en charge l&apos;itération sur l&apos;ensemble de valeurs dans l&apos;espace de noms « here ».

**JMP Version ajoutée :** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.globals['e'] = 2.718jmp.run_jsl('''    Names Default to Here(1);    show(pi)''')for x in jmp.here:    print( x )print([x for x in jmp.globals])

```

#### Méthodes

#### __getitem__

**Syntaxe :** value = jmp.here[&apos;name&apos;]

**Description :** Récupère une variable JSL à partir de l&apos;espace de noms &apos;here&apos; actuel en tant qu&apos;objet Python. Renvoie None si l&apos;objet est introuvable, ou un type opaque pour les types de données qui ne peuvent pas encore être passés. Provision de récupération directe d&apos;une variable JSL dans l&apos;étendue Python locale. Prend en charge les transferts des mêmes types d&apos;objets que la fonction Python Send(). Dans le cadre des espaces de noms JSL, l&apos;espace de noms &apos;here&apos; est local à la soumission de script et les codes soumis à partir de différentes fenêtres de script auront des espaces de noms &apos;here&apos; distincts. Le code qui inclut un autre script a un seul espace de noms &apos;here&apos;. Cet espace de noms partagé existe également pour un script JSL qui exécute Python via Submit() ou Execute(), les scripts Python appelant run_jsl().

**JMP Version ajoutée :** 19

**Exemple 1**

```python

import jmpjmp.globals['e'] = 2.71828jmp.run_jsl('''    Names Default to Here(1);    pi = 3.1415929;    show(::e);''')print( jmp.here['pi'] )

```

**Scope**

```python

import jmpjmp.run_jsl('''Names Default to Here(1);here_v = "here";Show(here_v);''')print( f'temporary: {jmp.here['here_v']}' )try:        print(here_v)except:    print('here_v is not in Python globals().')def scoped():    v = jmp.here['here_v']    print(f'scoped: {v}')    scoped()try:        print(v)except:    print('v is local to scoped().')

```

#### __len__

**Syntaxe :** length = len( jmp.here )

**Description :** Renvoie le nombre de symboles dans l&apos;espace de noms JSL « here ».

**JMP Version ajoutée :** 19

```python

import jmpprint( len( jmp.here ) )jmp.here['pi'] = 3.1415927print( len( jmp.here ) )jmp.here['e'] =  2.7182818print( len( jmp.here ) )

```

#### __setitem__

**Syntaxe :** jmp.here[&apos;name&apos;] = value

**Description :** Permet de définir une valeur dans l&apos;espace de noms &apos;here&apos; du script JSL. Cela permet de renvoyer une valeur qui ne pouvait pas être atteinte par la fonction Python Get(), qui voit uniquement les variables dans l&apos;étendue globale Python. Prend en charge les mêmes types d&apos;objets que la fonction Python Get(). Dans le cadre des espaces de noms JSL, l&apos;espace de noms &apos;here&apos; est local à la soumission du script. Les codes soumis à partir de fenêtres de script différentes auront des espaces de noms &apos;here&apos; distincts. Le code incluant un autre script aura un espace de noms &apos;here&apos; unique. Cela est vrai pour un script JSL qui exécute Python via Submit() ou Execute(), les scripts Python appelant run_jsl().

**JMP Version ajoutée :** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.run_jsl('''    Names Default to Here(1);    show(pi)''')

```

#### __str__

**Syntaxe :** str(jmp.here)

**Description :** Affichez le contenu de here sous forme de dictionnaire.

**JMP Version ajoutée :** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['e'] =  2.7182818jmp.here['Bb'] = 'bumble bee'print( jmp.here )d = str(jmp.here)print(d)

```

#### get

**Syntaxe :** value = jmp.here.get(&apos;name&apos;)

**Description :** La fonction get() renvoie la valeur de la clé donnée. Semblable à JSL, la clé est une correspondance approximative.

**JMP Version ajoutée :** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.get('pi') )                        print( jmp.here.get('b  b') )

```

#### items

**Syntaxe :** item_list = jmp.here.items()

**Description :** Renvoie une liste de paires clé-valeur dans l&apos;espace de noms.

**JMP Version ajoutée :** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.items() )

```

#### keys

**Syntaxe :** key_list = jmp.here.keys()

**Description :** Renvoie une liste des clés dans l&apos;espace de noms.

**JMP Version ajoutée :** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.keys() )

```

#### values

**Syntaxe :** value_list = jmp.here.values()

**Description :** Renvoie les valeurs dans l&apos;espace de noms.

**JMP Version ajoutée :** 19

```python

import jmpjmp.here['pi'] = 3.1415927jmp.here['bB'] = 'Bumble Bee'print( jmp.here.values() )

```

#### Éléments spéciaux

## jmp > live

### Fonctions

#### Fonctions

#### get_credentials()

**Syntaxe :** jmp.live.get_credentials(&lt;credential_name&gt;)

**Description :** Dans les scripts d&apos;actualisation de données JMP Live, renvoie les identifiants avec le prénom usuel affecté au script ou, si aucun nom n&apos;est fourni, les identifiants par défaut. La valeur renvoyée est un dictionnaire contenant les clés « username », « password » et « key_file_path ».

**JMP Version ajoutée :** 19

```python

import jmpdt = jmp.DataTable()credentials = jmp.live.get_credentials()# login to external data source using credentials['username'] and credentials['password']# create dt using obtained datajmp.live.set_result(dt)

```

#### get_import_file_path()

**Syntaxe :** jmp.live.get_import_file_path()

**Description :** Dans les scripts d&apos;importation des données de JMP Live, renvoie le chemin d&apos;accès au fichier d&apos;importation chargé.

**JMP Version ajoutée :** 19

```python

import jmpdt = jmp.DataTable()importPath = jmp.live.get_import_file_path()with open(importPath) as importFile:    # [import data from importFile to dt]jmp.live.set_result(dt)

```

#### set_result()

**Syntaxe :** jmp.live.set_result()

**Description :** Dans les scripts d&apos;importation et d&apos;actualisation des données JMP Live, définit la table de résultats. Définissez le résultat sur Aucun pour annuler la mise à jour.

**JMP Version ajoutée :** 19

```python

import jmpdt = jmp.DataTable()shouldUpdate = True# add data to dt, or set shouldUpdate to Falseif shouldUpdate:    jmp.live.set_result(dt)else:    jmp.live.set_result(None)

```

## jmp > log

### Fonctions

#### Fonctions

#### flush

**Syntaxe :** jmp.log.flush()

**Description :** Les fonctions log.flush() et log.write() surchargent les fonctions stdio et stderr flush() et write() de Python. Elles servent principalement à une utilisation interne de JMP, car elles dirigent la sortie de Python vers les fenêtres de journal JMP et de journal incorporé. La fonction jmp.log.flush() est une fonction sans opération (NOP) qui renvoie une chaîne vide.

**JMP Version ajoutée :** 18

```python

import jmpimport jmp.logjmp.log.flush()

```

#### write

**Syntaxe :** jmp.log.write(&apos;message&apos;)

**Description :** Les fonctions log.flush() et log.write() surchargent les fonctions stdio et stderr flush() et write() de Python. Elles servent principalement à une utilisation interne de JMP, car elles dirigent la sortie de Python vers les fenêtres de journal JMP et de journal incorporé. Les programmes peuvent appeler jmp.log.write(&apos;message&apos;) pour envoyer explicitement le message aux fenêtres de journal JMP et de journal incorporé.

**JMP Version ajoutée :** 18

```python

import jmpimport jmp.logjmp.log.write('I am a log message.')

```

## jmp

### Fonctions

#### ALL_HOME

**Syntaxe :** jmp.ALL_HOME

**Description :** Valeur correspondant au répertoire $ALL_HOME de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.ALL_HOME)

```

#### BUILTIN_SCRIPTS

**Syntaxe :** jmp.BUILTIN_SCRIPTS

**Description :** Valeur correspondant au répertoire $BUILTIN_SCRIPTS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.BUILTIN_SCRIPTS)

```

#### Constantes

#### DESKTOP

**Syntaxe :** jmp.DESKTOP

**Description :** Valeur correspondant au répertoire $DESKTOP de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.DESKTOP)

```

#### DOCUMENTS

**Syntaxe :** jmp.DOCUMENTS

**Description :** Valeur correspondant au répertoire $DOCUMENTS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.DOCUMENTS)

```

#### DOWNLOADS

**Syntaxe :** jmp.DOWNLOADS

**Description :** Valeur correspondant au répertoire $DOWNLOADS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.DOWNLOADS)

```

#### DataType

**Syntaxe :** jmp.DataType.enum_value

**Description :** jmp.DataType est une énumération qui représente les types de données d&apos;une colonne JMP. Ces énumérations sont utilisées avec la fonction jmp.DataTable.new_column() pour créer des colonnes ayant un type différent du type Numérique par défaut.

**JMP Version ajoutée :** 18

```python

import jmp# for the sake of typingfrom jmp import DataType as dTypeprint('jmp.DataType members:')print( list(map(lambda c: c.name, dType)) )

```

#### Fonctions

#### HOME

**Syntaxe :** jmp.HOME

**Description :** Valeur correspondant au répertoire $HOME de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.HOME)

```

#### JMPPRJ

**Syntaxe :** jmp.JMPPRJ

**Description :** Renvoie le chemin d&apos;accès physique du répertoire temporaire du projet. Renvoie le répertoire de travail actuel, ou Aucun si le script ne s&apos;exécute pas dans un projet.

**JMP Version ajoutée :** 19

```python

import jmpprint(jmp.JMPPRJ)

```

#### ModelingType

**Syntaxe :** jmp.ModelingType.enum_value

**Description :** jmp.ModelingType est une énumération qui représente les types d&apos;analyse ou de modélisation d&apos;une colonne JMP. Ces énumérations sont utilisées avec la fonction jmp.DataTable.new_column() pour créer des colonnes ayant un type différent du type de modélisation Continu par défaut. Notez que TypeNone est différent du type de modélisation None de JMP, car « None » est un mot-clé Python.

**JMP Version ajoutée :** 18

```python

import jmp# for the sake of typingfrom jmp import ModelingType as mTypeprint('jmp.ModleingType members:')print( list(map(lambda c: c.name, mType)) )

```

#### PYTHONW_EXE

**Syntaxe :** jmp.PYTHONW_EXE

**Description :** Chemin d&apos;accès au fichier exécutable Python sans console installé par JMP (Windows uniquement).

**JMP Version ajoutée :** 19

```python

import jmpimport platformif platform.system() == "Windows":    print(jmp.PYTHONW_EXE)

```

#### PYTHON_EXE

**Syntaxe :** jmp.PYTHON_EXE

**Description :** Chemin d&apos;accès à l&apos;exécutable Python installé par JMP.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.PYTHON_EXE)

```

#### PY_USER_APPDIR

**Syntaxe :** jmp.PY_USER_APPDIR

**Description :** Chemin d&apos;accès à l&apos;emplacement du répertoire utilisateur qui sert de base pour la prise en charge de Python dans JMP. Le répertoire des packages du site se trouve dans la hiérarchie de ce répertoire.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.PY_USER_APPDIR)

```

#### SAMPLE_APPS

**Syntaxe :** jmp.SAMPLE_APPS

**Description :** Valeur correspondant au répertoire $SAMPLE_APPS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_APPS)

```

#### SAMPLE_DASHBOARDS

**Syntaxe :** jmp.SAMPLE_DASHBOARDS

**Description :** Valeur correspondant au répertoire $SAMPLE_DASHBOARDS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_DASHBOARDS)

```

#### SAMPLE_DATA

**Syntaxe :** jmp.SAMPLE_DATA

**Description :** Valeur correspondant au répertoire $SAMPLE_DATA de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_DATA)

```

#### SAMPLE_IMAGES

**Syntaxe :** jmp.SAMPLE_IMAGES

**Description :** Valeur correspondant au répertoire $SAMPLE_IMAGES de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_IMAGES)

```

#### SAMPLE_IMPORT_DATA

**Syntaxe :** jmp.SAMPLE_IMPORT_DATA

**Description :** Valeur correspondant au répertoire $SAMPLE_IMPORT_DATA de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_IMPORT_DATA)

```

#### SAMPLE_PROJECTS

**Syntaxe :** jmp.SAMPLE_PROJECTS

**Description :** Valeur correspondant au répertoire $SAMPLE_PROJECTS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_PROJECTS)

```

#### SAMPLE_SCRIPTS

**Syntaxe :** jmp.SAMPLE_SCRIPTS

**Description :** Valeur correspondant au répertoire $SAMPLE_SCRIPTS de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.SAMPLE_SCRIPTS)

```

#### TEMP

**Syntaxe :** jmp.TEMP

**Description :** Valeur correspondant au répertoire $TEMP de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.TEMP)

```

#### USER_APPDATA

**Syntaxe :** jmp.USER_APPDATA

**Description :** Valeur correspondant au répertoire $USER_APPDATA de JSL.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.USER_APPDATA)

```

#### __jmp_version__

**Syntaxe :** jmp.__jmp_version__

**Description :** Numéro de version de l&apos;exécutable JMP.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.__jmp_version__)

```

#### __version__

**Syntaxe :** jmp.__version__

**Description :** Numéro de version du package d&apos;importation « jmp ». Il ne s&apos;agit pas de la version de JMP.

**JMP Version ajoutée :** 18

```python

import jmpprint(jmp.__version__)

```

#### current

**Syntaxe :** dt = jmp.current()

**Description :** Renvoie un objet DataTable correspondant à la table de données JMP actuelle.

**JMP Version ajoutée :** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(jmp.current())

```

#### eval

**Syntaxe :** result = eval(&lt;string&gt;|&lt;Expression&gt;)

**Description :** Évalue l&apos;argument et retourne le résultat.

**JMP Version ajoutée :** 19

```python

import jmpfrom jmp import eval, Expressionexpression = Expression("2 + 2")result = eval(expression)print(result)

```

#### from_dataframe

**Syntaxe :** result = jmp.from_dataframe(&lt;library.Dataframe&gt;, allow_copy=&lt;boolean&gt;, allow_csv_fallback=&lt;boolean&gt;, visibility=&lt;string&gt;)

**Description :** Renvoie un objet jmp.DataTable à partir du cadre de données d&apos;une bibliothèque conforme au protocole.

**JMP Version ajoutée :** 19

**Ibis vers JMP**

```python

import jmpimport jmputils try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)    jmputils.jpip('install', 'ibis-framework[duckdb,examples]') except Exception as e:    print(f'Install failed with exception: {e}')          import pandas as pd import ibis  pandas_df = pd.DataFrame(     [["a", 1, 2], ["b", 3, 4]],     columns=["one", "two", "three"], ) t = ibis.memtable(pandas_df, name="t") print(t) dt = jmp.from_dataframe(t) print(dt)

```

**JMP vers Pandas**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pddt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")pandas_df = (pd.api.interchange.from_dataframe(dt))print(pandas_df)

```

**JMP vers Polars**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as pldt = jmp.open(jmp.SAMPLE_DATA + "Big Class.jmp")polars_df = pl.from_dataframe(dt)print(polars_df)

```

**Option de secours CSV**

```python

import jmpimport jmputils        try:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe(df)print(dt)

```

**Pandas vers JMP**

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df)print(dt)

```

**Polars vers JMP**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('polars'):        jmputils.jpip('install', 'polars', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import polars as plfrom datetime import datepolars_df = pl.DataFrame( {    "foo": [1, 2, 3],    "bar": [6.0, 7.0, 8.0],    "ham": [date(2020, 1, 2), date(2021, 3, 4), date(2022, 5, 6)],  } ) print(polars_df) dt = jmp.from_dataframe(polars_df) print(dt)

```

**Visibility**

```python

import jmpimport jmputilstry:    # pandas depends on numpy will install numpy if needed    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pdimport numpy as nppandas_df = pd.DataFrame(    {        "A": 1.0,        "B": pd.Timestamp("20130102"),        "C": pd.Series(1, index=list(range(4)), dtype="float32"),        "D": np.array([3] * 4, dtype="int32"),        "E": pd.Categorical(["test", "train", "test", "train"]),        "F": "foo",    })print(pandas_df)dt = jmp.from_dataframe(pandas_df, visibility="invisible")#dt = jmp.from_dataframe(pandas_df, visibility="private")print(dt)

```

#### from_dataframe_using_csv

**Syntaxe :** result = jmp.from_dataframe_using_csv(&lt;library.Dataframe&gt;, visibility=&lt;string&gt;)

**Description :** Renvoie un objet jmp.DataTable à partir du cadre de données d&apos;une bibliothèque à l&apos;aide de la méthode de conversion CSV fournie.

**JMP Version ajoutée :** 19

**General**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})try:    # Try converting object without CSV fallback    dt = jmp.from_dataframe(df, True, False)    print("Converted using jmp.from_dataframe()")except:     # Explicitly convert using CSV    dt = jmp.from_dataframe_using_csv(df)    print("Converted using jmp.from_dataframe_using_csv()")print(dt)

```

**Visibility**

```python

import jmpimport jmputilstry:    if not jmputils.is_installed('pandas'):        jmputils.jpip('install', 'pandas', echo=False)except Exception as e:    print(f'Install failed with exception: {e}')import pandas as pd# Object columns are unsupported with jmp.from_dataframe() df = pd.DataFrame({    "objects": pd.Series([{"a": 1, "b": 2}, {"a": 3, "b": 4}, {"a": 5, "b": 6}, {"a": 7, "b": 8}, {"a": 9, "b": 10}, {"a": 11, "b": 12}]),})dt = jmp.from_dataframe_using_csv(df, visibility="invisible")#dt = jmp.from_dataframe_using_csv(df, visibility="private")print(dt)

```

#### open

**Syntaxe :** obj = jmp.open(&apos;file_path&apos; &lt; , visibility=&apos;Invisible | Private&apos; )

**Description :** Ouvre un fichier au chemin file_path. Si le fichier est un fichier .jmp ou un fichier qui importe dans une table de données JMP, l&apos;objet renvoyé est un objet DataTable. Dans le cas contraire, Vrai ou Faux est renvoyé en cas de réussite ou d&apos;échec. Le paramètre facultatif de visibilité contrôle si le fichier ouvert est masqué de l&apos;affichage. Invisible signifie simplement masqué de l&apos;affichage, mais visible dans le menu des fichiers récents et sur la fenêtre d&apos;accueil. Avec une table privée, la référence renvoyée est la seule référence à la table. Elle ne s&apos;affiche dans aucune des listes de fichiers.

**JMP Version ajoutée :** 18

**Excel**

```python

import jmpobj = jmp.open(jmp.SAMPLE_IMPORT_DATA + 'Bigclass.xlsx')print(obj)

```

**Invisible**

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Invisible')dt = jmp.current()print(dt)  # successdt = jmp.table('Animals')print(dt)  # success# Select and run the above first if you want to see that even though# there is no window, Animals.jmp appears in recent files and# home window's list of filesdt.close(save=False);del dt

```

**JMP**

```python

import jmpdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print(dt)

```

**Privée**

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')dt = jmp.current()print(dt)  # => Nonetry:  dt = jmp.table('Animals')except FileNotFoundError:  print('Requested table not found')dt = jmp.open(jmp.SAMPLE_DATA + 'Animals.jmp', visibility = 'Private')print(dt)dt.close(save=False)del dt

```

**Script JSL**

```python

import jmpobj = jmp.open(jmp.SAMPLE_SCRIPTS + 'string.jsl')print(obj)

```

#### path_variable

**Syntaxe :** path_value = jmp.path_variable(&apos;SAMPLE_DATA&apos;)

**Description :** Renvoie la valeur d&apos;une variable de chemin d&apos;accès, qui est un nom tel que SAMPLE_DATA, qui est remplacé lorsqu&apos;il se trouve dans les noms de chemin d&apos;accès.

**JMP Version ajoutée :** 19

```python

import jmppath_value = jmp.path_variable('SAMPLE_DATA')if not path_value:    print('Invalid path variable.')else:    print(path_value)

```

#### r_name

**Syntaxe :** dt = jmp.r_name(jsl_var)

**Description :** Convertit un nom de variable JMP en un nom de variable R à l’aide des règles de nommage des variables R.

**JMP Version ajoutée :** 19

```python

import jmprName = jmp.r_name('c d e')print(rName)

```

#### reset

**Syntaxe :** jmp.reset()

**Description :** Réinitialise l&apos;environnement Python partagé, en effaçant principalement toutes les références à des objets. Cette opération ne modifie pas le cache d&apos;importation des modules importés. Il s&apos;agit d&apos;une limitation de l&apos;environnement Python. Les modules qui chargent des bibliothèques partagées ne peuvent pas être déchargés par le processus en cours d&apos;exécution. Pour recharger du code Python pur, consultez la documentation Python.org sur la fonction importlib reload().

**JMP Version ajoutée :** 19

```python

import jmppi = 3.1415927print(pi)jmp.reset()print(pi)

```

#### run_jsl

**Syntaxe :** result = jmp.run_jsl(&apos;JSL script contents&apos; &lt;, echo = True | False | None &gt; )

**Description :** Exécutez le script JSL depuis l&apos;environnement Python, y compris les fonctions d&apos;interface Python JSL. Lorsque le paramètre facultatif echo= est défini sur Faux ou Aucun, le code source JSL présenté n&apos;est plus répercuté dans le log. Un résultat sera renvoyé pour les types d&apos;objet JSL pris en charge par les fonctions Python Send() et Get(). En cas d&apos;échec du script ou de types d&apos;objet JSL non pris en charge, Aucun sera renvoyé.

**JMP Version ajoutée :** 18

**Obtenir la version**

```python

import jmpjmp.run_jsl('Python Get Version();')

```

**Propriétés de colonne**

```python

import jmp# Create a data table# dt = jmp.DataTable(name='table_name', rows=n)pbp = jmp.DataTable(rows=5)pbp.name = 'Powered by Python'pbp.new_column('Name', jmp.DataType.Character)pbp.new_column('Hourly Rate')#pbp['Name'] = ['Janet', 'James', 'Jerry', 'Jenny', 'Jill']pbp[1] = [ 14.25, 9.75, 15.0, 12.35, '17.25']  # last value bad => becomes missingpbp[1][4] = 17.25## Change column format: Hourly Ratejmp.run_jsl('''Data Table( "Powered by Python" ):Hourly Rate << Format( "Currency", "USD", 17, 2 );Data Table( "Powered by Python" ):Name << Set Display Width( 75 );''')

```

**Valeur renvoyée**

```python

import jmpvalue = jmp.run_jsl('''Names default to here(1);an A = 1.5;x = 5 * anA;''')print( f'{value} = jmp.run_jsl()')

```

#### table

**Syntaxe :** dt = jmp.table(&apos;table_name&apos;)

**Description :** Renvoie un objet DataTable correspondant à la table de données ouverte portant le nom « table_name »

**JMP Version ajoutée :** 18

```python

import jmpjmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')print( jmp.table('Big Class') )

```

#### Énumérations

## jmpex > R - module > R - class

### Fonctions

#### Constantes

#### Constructeurs

#### Fonctions

#### __init__

**Syntaxe :** jmpex.R.R( &lt;&apos;rpy2&apos;&gt; )

**Description :** Fonction permettant de créer un objet de classe d&apos;extension R. Un paramètre facultatif permet de spécifier le backend pour la prise en charge de R. Actuellement, seul « rpy2 » est pris en charge. Il s&apos;agit de la valeur par défaut si aucun argument n&apos;est spécifié.

**JMP Version ajoutée :** 19

```python

import jmpfrom jmpex.R import Rjr = R()print(jr.r_version())

```

#### __version__

**Syntaxe :** ver = jmpex.R.R().__version__

**Description :** La version de support R du package jmpex.

**JMP Version ajoutée :** 19

```python

import jmpfrom jmpex.R import Rjr = R()print(jr.__version__)

```

#### get

**Syntaxe :** pyobj = jmpex.R.R.get( &apos;name&apos; )

**Description :** Récupère la variable nommée à partir de l&apos;environnement R et la renvoie à Python à l&apos;aide de la fonction r2obj(). Un cadre de données R est renvoyé en tant que pandas.DataFrame.

**JMP Version ajoutée :** 19

**Définir la colonne**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()a = jr.set( dt['age'], 'rage' )   # as_name required from Pythonprint(a.__class__)print(a)ra = jr.get('rage')print( ra.__class__ )print( ra )

```

**Définir la table de données**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()d = jr.set( dt , 'rdt' )   # as_name required from Pythonprint(d.__class__)print(d)# A R DataFrame is returned to Python as a pandas.DataFramerdt = jr.get('rdt')print( rdt.__class__ )print( rdt )

```

**Vecteur de chaîne**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()s = dt['name']nas = np.array(s)print(nas.__class__)print(nas)rv = ro.vectors.StrVector(nas)print(rv.__class__)print(rv)

```

**Vecteur numérique**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# initialize jmpex.R.R classjr = R()a = dt['age']nar = np.array( a )print(nar.__class__)print(nar)rv = ro.vectors.FloatVector(nar)print(rv.__class__)print(rv)

```

#### is_connected

**Syntaxe :** jmpex.R.R.is_connected( )

**Description :** Fonction statique disponible, peu importe qu&apos;un objet d&apos;instance R() existe ou non. Indique que le sous-système R a été initialisé.

**JMP Version ajoutée :** 19

```python

import jmpfrom jmpex.R import Rprint(f'R initialized: {R.is_connected()}')jr = R()print(f'R initialized: {R.is_connected()}')

```

#### obj2r

**Syntaxe :** jmpex.R.R.obj2r( var )

**Description :** Créez un objet R à partir d&apos;un objet Python.

**JMP Version ajoutée :** 19

```python

import jmpfrom jmpex.R import Rjr = R()d = { "canine": ["poodle", "dalmation", "wolf"],       "ages": [ 1, 3, 5],       "vet bill": [200.0, 300.57, 2000.99] }      r_obj = jr.obj2r( d )p_obj = jr.r2obj( r_obj )print(r_obj.__class__)print(r_obj)print(p_obj.__class__)print(p_obj)

```

#### r2obj

**Syntaxe :** jmpex.R.R.r2obj( var )

**Description :** Créez un objet Python ordinaire à partir d&apos;un objet R.

**JMP Version ajoutée :** 19

```python

import jmpfrom jmpex.R import Rjr = R()d = { "canine": ["poodle", "dalmation", "wolf"],       "ages": [ 1, 3, 5],       "vet bill": [200.0, 300.57, 2000.99] }      r_obj = jr.obj2r( d )p_obj = jr.r2obj( r_obj )print(r_obj.__class__)print(r_obj)print(p_obj.__class__)print(p_obj)

```

#### r_version

**Syntaxe :** ver = jmpex.R.R.r_version( )

**Description :** Renvoie la version de R.

**JMP Version ajoutée :** 19

```python

import jmpfrom jmpex.R import Rjr = R()print(f'R Version: {jr.r_version()}')

```

#### set

**Syntaxe :** jmpex.R.R.set( var, as_name )

**Description :** Définissez une variable Python dans l&apos;environnement R, nommée selon le paramètre « as_name ». L&apos;objet R est créé en interne à l&apos;aide de la fonction obj2r(). Le nom a été passé au moyen du nom approprié -> fonction R Name() pour vérifier que le nom est un nom de variable R valide.

**JMP Version ajoutée :** 19

**Définir la colonne**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()a = jr.set( dt['age'], 'rage' )   # as_name required from Pythonprint(a.__class__)print(a)ra = jr.get('rage')print( ra.__class__ )print( ra )

```

**Définir la table de données**

```python

import jmpfrom jmpex.R import Rdt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()# R DataFrame can be jmp.DataTable, pandas.DataFrame, ...d = jr.set( dt , 'Big.Class' )   # becomes 'Big.Class'jr.submit('Big.Class')           # see: JSL R Send File(); R Submit();print(d.__class__)print(d)bc = jr.get('Big.Class')print( bc.__class__ )print( bc )

```

**Vecteur de chaîne**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')jr = R()s = dt['name']nas = np.array(s)print(nas.__class__)print(nas)rv = ro.vectors.StrVector(nas)print(rv.__class__)print(rv)

```

**Vecteur numérique**

```python

import jmpfrom jmpex.R import Rimport numpy as npimport rpy2.robjects as rodt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# initialize jmpex.Rjr = R()a = dt['age']nar = np.array( a )print(nar.__class__)print(nar)rv = ro.vectors.FloatVector(nar)print(rv.__class__)print(rv)

```

#### submit

**Syntaxe :** jmpex.R.R.submit( &apos;R script&apos; )

**Description :** Envoyez le code de programme R pour l&apos;évaluation. Renvoie un résultat en tant qu&apos;objet Python si disponible.

**JMP Version ajoutée :** 19

**Définir la table de données**

```python

import jmpfrom jmpex.R import R           jr = R()dt = jmp.open(jmp.SAMPLE_DATA + 'Big Class.jmp')# R DataFrame can be jmp.DataTable, pandas.DataFrame, ...d = jr.set( dt , 'Big.Class' )   # becomes 'Big.Class'df = jr.submit('Big.Class')           # see: JSL R Send File(); R Submit();print(f'DataFrame:\n{df}')print(d.__class__)print(d)bc = jr.get('Big.Class')print( bc.__class__ )print( bc )

```

**Script**

```python

import jmpfrom jmpex.R import Rjr = R()jr.submit('''x <- rnorm (100)y <- x**2 + rnorm (100)''')

```

#### submit_file

**Syntaxe :** jmpex.R.R.submit_file(&apos;path_to_R_script&apos;)

**Description :** Envoyez un fichier de script R pour l&apos;évaluation. Renvoie un résultat en tant qu&apos;objet Python si disponible.

**JMP Version ajoutée :** 19

```python

import jmpimport osfrom jmpex.R import Rjr = R()result = jr.submit_file( os.path.join(jmp.SAMPLE_SCRIPTS, 'R', 'SI_example.R') )print(result)print(result.__class__)po = jr.r2obj(result)print(po)print(po.__class__)

```

## jmpex > R - module

### Fonctions

#### Concepts

#### R

**Description :** Le module R représente jmpex.R, qui contient la classe Python R. La classe jmpex.R.R implémente la fonctionnalité d&apos;interface.

**JMP Version ajoutée :** 19

## jmpex

### Fonctions

#### Concepts

#### jmpex - package

**Description :** Le package jmpex contient des interfaces d&apos;extension prises en charge par JMP. Actuellement, il contient uniquement un module de prise en charge R.

**JMP Version ajoutée :** 19

## jmputils

### Fonctions

#### Constantes

#### Fonctions

#### __version__

**Description :** Numéro de version du package jmputils

**JMP Version ajoutée :** 19

```python

import jmpimport jmputilsprint( jmputils.__version__ )

```

#### create_jpip

**Syntaxe :** create_jpip( &apos;directory_path&apos; )

**Description :** Fonction permettant de créer la version terminal ou interpréteur de commande du script jpip dans le répertoire spécifié. Le script jpip enveloppe la commande Python pip pour garantir la configuration des variables d&apos;environnement appropriées. Cela garantit que les packages installés par jpip sont installés dans le répertoire JMP site-packages.

**JMP Version ajoutée :** 18

```python

import jmpimport jmputilsjmp.run_jsl('''dest_path = Pick Directory("Directory location to save jpip script.");// Pick Directory on windows returns a leading / use Convert File Path()If( Host is("Windows"),    dest_path = Convert File Path( dest_path, windows ));Python Send(dest_path);''')jmputils.create_jpip(dest_path)

```

#### is_installed

**Syntaxe :** success = is_installed(package_name)

**Description :** Renvoie True | False si package_name est installé.

**JMP Version ajoutée :** 19

**Exemple 1**

```python

import jmpimport jmputilsif not jmputils.is_installed('certifi'):    result = jmputils.jpip('install', 'certifi', echo=False)    try:        result.check_returncode()        print( jmputils.package_version('certifi') )    except Exception as e:        print(f'jpip install failed with reason: {e}')else:    print( jmputils.package_version('certifi') )

```

**Package introuvable**

```python

import jmpimport jmputilsif jmputils.is_installed('invalidjmppackage'):    print("Surprise!")else:    print('Package not found.')

```

#### jpip

**Syntaxe :** result = jpip( &apos;pip_cmd&apos;, packages=&apos;&apos;, echo=True )

**Description :** Appelable depuis JMP, cette fonction enveloppe la commande pip Python. Renvoie un objet subprocess.CompletedProcess. Passez à cette fonction un argument de commande en tant que chaîne, ainsi que, de manière facultative, une chaîne séparée par des espaces contenant les packages à installer. Utiliser des listes d&apos;arguments individuels constitue une alternative plus fiable.  La méthode list fonctionne même lorsqu&apos;il y a des espaces dans les chemins de répertoire. L&apos;argument packages prend par défaut la valeur de chaîne vide. Le package « jmputils » fait partie des fichiers de bibliothèque standard Python incorporés. Les fonctions de jmputils utilisent uniquement les appels de bibliothèque standard Python ou les fonctionnalités intégrées de JMP.

**JMP Version ajoutée :** 18

**désinstaller**

```python

import jmpfrom jmputils import jpip# R support package jmpex uninstalled like any other Python package. jpip('uninstall', 'jmpex')

```

**Fichier d'exigences**

```python

import jmpfrom jmputils import jpipjmp.run_jsl('''src_path = Pick File(    "Select requirements.txt File",    "$DOCUMENTS",    {"TXT Files|txt", "All Files|*"},    0,    0,    "requirements.txt");show(src_path);If( Host is("Windows"),    src_path = Convert File Path( src_path, windows ));show(src_path);Python Send(src_path);''')jpip('install', f'-r {src_path}')

```

**installer**

```python

import jmpfrom jmputils import jpip# update to latest version of pip and setuptools then install numpy & pandasjpip('install --upgrade', 'pip setuptools certifi')jpip('install', 'numpy pandas')

```

**installer (lister les arguments)**

```python

import jmpfrom jmputils import jpip# update to latest version of pip and setuptools then install numpy & pandasjpip(['install', '--upgrade'], ['pip', 'setuptools', 'certifi'])jpip(['install'], ['numpy', 'pandas'])

```

**jmpex**

```python

import jmpimport osfrom jmputils import jpip# Install jmpex package jpip('install', [ os.path.join(jmp.SAMPLE_SCRIPTS, 'Python', 'jmpex.zip') ] )

```

**lister**

```python

import jmpfrom jmputils import jpipjpip('list')

```

**Package local**

```python

import jmpfrom jmputils import jpipjmp.run_jsl('''dest_path = Pick Directory("Directory location of local package directory to install.");// Pick Directory on windows returns a leading / use Convert File Path()If( Host is("Windows"),    dest_path = Convert File Path( dest_path, windows ));Python Send(dest_path);''')print(dest_path)jpip('install', dest_path)

```

#### package_version

**Syntaxe :** package_version(package_name)

**Description :** Numéro de version du package nommé, s&apos;il est installé.

**JMP Version ajoutée :** 19

```python

import jmpimport jmputils# package_version() internally calls is_installed()print( jmputils.package_version('certifi') )

```

#### packages

**Syntaxe :** pkgs_dict = packages()

**Description :** Renvoie un dictionnaire Python contenant la liste des packages installés.

**JMP Version ajoutée :** 19

```python

import jmpimport jmputilspkgs = jmputils.packages()print('Package,', 'Version')for key, value in pkgs.items():    print(f'{key}: {value}')

```

