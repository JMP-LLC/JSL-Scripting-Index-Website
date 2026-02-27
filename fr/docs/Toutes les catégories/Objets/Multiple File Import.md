# Multiple File Import



## Constructeurs associés

### Multiple File Import

**Syntaxe :** mfiObj = Multiple File Import();

**Description :** Crée un objet Importation de plusieurs fichiers. L&apos;objet accepte les messages pour définir un dossier, filtrer des fichiers et importer. Pour ouvrir une boîte de dialogue, utilisez le message « Créer une fenêtre ». Pour importer immédiatement, utilisez le message « Importer les données » qui renvoie la liste des tables de données créées.

```jsl

// use the save-script-to-script-window button // in the MFI dialog to see more messages// for filtering files and controlling the importMultiple File Import(	<<Set Folder( "$DESKTOP" ),	<<Set Name Filter( "*.csv;" ),	<<Set Name Enable( 1 )) << Create Window;

```

## Messages d'éléments

### Create Window

**Syntaxe :** obj &lt;&lt; Create Window

**Description :** Affiche une fenêtre avec les paramètres actuels.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << set folder( "$sample_import_data" );mfi << create window();

```

### Get Add File Date Column

**Syntaxe :** obj &lt;&lt; Get Add File Date Column

**Description :** Renvoie 1 si la table importée a une colonne avec le nom du fichier à partir duquel la ligne a été importée.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Date Column( 1 );mfi << Get Add File Date Column();

```

### Get Add File Name Column

**Syntaxe :** obj &lt;&lt; Get Add File Name Column

**Description :** Renvoie 1 si la table importée a une colonne avec le nom du fichier à partir duquel la ligne a été importée.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Name Column( 1 );mfi << Get Add File Name Column();

```

### Get Add File Size Column

**Syntaxe :** obj &lt;&lt; Get Add File Size Column

**Description :** Renvoie 1 si la table importée a une colonne avec la taille du fichier à partir duquel la ligne a été importée.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Size Column( 1 );mfi << Get Add File Size Column();

```

### Get CSV Allow Numeric

**Syntaxe :** obj &lt;&lt; Get CSV Allow Numeric

**Description :** Renvoie 1 si des colonnes numériques seront créées à partir de données numériques apparentes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV Allow Numeric;

```

### Get CSV EOF Comma

**Syntaxe :** obj &lt;&lt; Get CSV EOF Comma

**Description :** Définir sur 1 pour utiliser une virgule pour séparer les champs à utiliser pour créer plusieurs colonnes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Comma();

```

### Get CSV EOF Other

**Syntaxe :** obj &lt;&lt; Get CSV EOF Other

**Description :** Définir sur la valeur de séparation des champs à utiliser pour créer plusieurs colonnes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Other();

```

### Get CSV EOF Space

**Syntaxe :** obj &lt;&lt; Get CSV EOF Space

**Description :** Définir sur 1 pour utiliser un espace pour séparer les champs à utiliser pour créer plusieurs colonnes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Space();

```

### Get CSV EOF Spaces

**Syntaxe :** obj &lt;&lt; Get CSV EOF Spaces

**Description :** Définir sur 1 pour utiliser un espace pour séparer les champs à utiliser pour créer plusieurs colonnes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Spaces();

```

### Get CSV EOF Tab

**Syntaxe :** obj &lt;&lt; Get CSV EOF Tab

**Description :** Définir sur 1 pour utiliser une tabulation pour séparer les champs à utiliser pour créer plusieurs colonnes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF TAb();

```

### Get CSV EOL CR

**Syntaxe :** obj &lt;&lt; Get CSV EOL CR

**Description :** Renvoie 1 si CR est la valeur de séparation des lignes à utiliser pour créer plusieurs lignes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOL CR();

```

### Get CSV EOL CRLF

**Syntaxe :** obj &lt;&lt; Get CSV EOL CRLF

**Description :** Renvoie 1 si CRLF est la valeur de séparation des lignes à utiliser pour créer plusieurs lignes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOL CRLF();

```

### Get CSV EOL LF

**Syntaxe :** obj &lt;&lt; Get CSV EOL LF

**Description :** Renvoie 1 si LF est la valeur de séparation des lignes à utiliser pour créer plusieurs lignes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOL LF();

```

### Get CSV EOL Other

**Syntaxe :** obj &lt;&lt; Get CSV EOL Other

**Description :** Récupère la valeur personnalisée pour séparer les lignes dans le fichier d&apos;entrée. Cette valeur crée des lignes en sortie.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOF Other();

```

### Get CSV EOL Semicolon

**Syntaxe :** obj &lt;&lt; Get CSV EOL Semicolon

**Description :** Renvoie 1 si un point-virgule représente les lignes entre les lignes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV EOL Semicolon();

```

### Get CSV Escape

**Syntaxe :** obj &lt;&lt; Get CSV Escape

**Description :** Récupère le caractère d&apos;échappement pour les caractères spéciaux comme la fin de champ, la fin de ligne, ou le délimiteur de citation.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV Escape();

```

### Get CSV First Data Line

**Syntaxe :** obj &lt;&lt; Get CSV First Data Line

**Description :** Le numéro de ligne dans le fichier qui contient la première ligne de données.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV First Data Line();

```

### Get CSV First Header Line

**Syntaxe :** obj &lt;&lt; Get CSV First Header Line

**Description :** Récupère la première ligne du fichier d&apos;importation qui contient les en-têtes à utiliser pour créer les noms de colonne.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );mfi << Set CSV First Header Line( 2 );mfi << Get CSV First Header Line();

```

### Get CSV Has Headers

**Syntaxe :** obj &lt;&lt; Get CSV Has Headers

**Description :** Renvoie 1 si les paramètres d&apos;en-tête seront utilisés lors de l&apos;importation.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV Has Headers;

```

### Get CSV Number Of Header Lines

**Syntaxe :** obj &lt;&lt; Get CSV Number Of Header Lines

**Description :** Récupère le nombre de lignes d&apos;en-têtes à utiliser pour les noms de colonne.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );mfi << Set CSV Number Of Header Lines( 2 );mfi << Get CSV Number Of Header Lines();

```

### Get CSV Quote

**Syntaxe :** obj &lt;&lt; Get CSV Quote

**Description :** Récupère la valeur qui sépare les chaînes entre guillemets

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get CSV Quote();

```

### Get Charset

**Syntaxe :** obj &lt;&lt; Get Charset

**Description :** Revoie le jeu de caractères à utiliser pour l&apos;importation des données.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get Charset();

```

### Get Date Count

**Syntaxe :** obj &lt;&lt; Get Date Count

**Description :** Renvoie le nombre de fichiers dont la date se trouve dans la plage du filtre, si celui-ci est activé, ou le nombre total de fichiers dans le cas contraire.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$downloads" );mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );mfi << Set Date Enable( 1 );mfi << Get Date Count();

```

### Get Date Enable

**Syntaxe :** obj &lt;&lt; Get Date Enable

**Description :** Renvoie 1 si le filtre de date est activé.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get Date Enable();

```

### Get Date Filter

**Syntaxe :** obj &lt;&lt; Get Date Filter

**Description :** Renvoie le filtre de date actuel.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );mfi << Set Date Enable( 1 );mfi << Get Date Filter();

```

### Get Excel Add Sheet Name Column

**Syntaxe :** obj &lt;&lt; Get Excel Add Sheet Name Column

**Description :** Renvoie 1 si une colonne est ajoutée à la table importée avec le nom de la feuille de calcul d&apos;où proviennent les données.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Add Sheet Name Column;

```

### Get Excel Best Guess

**Syntaxe :** obj &lt;&lt; Get Excel Best Guess

**Description :** Renvoie 1 si les données et les en-têtes de colonne sont trouvés de manière dynamique. Renvoie 0 si les autres paramètres Excel sont utilisés lors de l&apos;importation de données Excel.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Best Guess;

```

### Get Excel Column Headers As Hierarchies

**Syntaxe :** obj &lt;&lt; Get Excel Column Headers As Hierarchies

**Description :** Renvoie 1 si les cellules de feuille de calcul qui se trouvent dans les lignes d&apos;en-tête et qui s&apos;étendent sur plus d&apos;une cellule horizontalement sont traitées comme des hiérarchies.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Column Headers as Hierarchies;

```

### Get Excel Column Name Separator

**Syntaxe :** obj &lt;&lt; Get Excel Column Name Separator

**Description :** Obtenez la chaîne à utiliser pour concaténer plusieurs cellules dans les noms d&apos;en-tête de colonne.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Column Name Separator;

```

### Get Excel First Data Column

**Syntaxe :** obj &lt;&lt; Get Excel First Data Column

**Description :** Renvoie la première colonne non vide de la feuille de calcul à importer sous forme de données.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel First Data Column;

```

### Get Excel First Data Line

**Syntaxe :** obj &lt;&lt; Get Excel First Data Line

**Description :** Renvoie la première ligne non vide de la feuille de calcul à importer sous forme de données.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel First Data Line;

```

### Get Excel First Header Line

**Syntaxe :** obj &lt;&lt; Get Excel First Header Line

**Description :** Renvoie la première ligne non vide de la feuille de calcul à importer en tant qu&apos;en-tête de colonne.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel First Header Line;

```

### Get Excel Has Headers

**Syntaxe :** obj &lt;&lt; Get Excel Has Headers

**Description :** Renvoie 1 si les en-têtes sont importées à partir des feuilles de calcul, et 0 dans le cas contraire.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Has Headers;

```

### Get Excel Import Color Cells

**Syntaxe :** obj &lt;&lt; Get Excel Import Color Cells

**Description :** Renvoie 1 si la couleur de fond des cellules de données de la feuille de calcul est importée.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Import Color Cells;

```

### Get Excel Last Data Column

**Syntaxe :** obj &lt;&lt; Get Excel Last Data Column

**Description :** Renvoie la dernière colonne dans la zone de données de la feuille de calcul à importer. Si la valeur manquante est renvoyée, la dernière colonne est trouvée dynamiquement.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Last Data Column;

```

### Get Excel Last Data Row

**Syntaxe :** obj &lt;&lt; Get Excel Last Data Row

**Description :** Renvoie la dernière ligne dans la zone de données de la feuille de calcul à importer. Si la valeur manquante est renvoyée, la dernière ligne est trouvée dynamiquement.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Last Data Row;

```

### Get Excel Limit Column Type Detection

**Syntaxe :** obj &lt;&lt; Get Excel Limit Column Type Detection

**Description :** Renvoie 0 si toutes les cellules de la feuille de calcul dans chaque colonne sont contrôlées lors de la détection du type de données de la colonne, et 1 si uniquement un sous-ensemble est contrôlé. Limiter la détection peut améliorer la performance avec de grandes feuilles de calcul.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Limit Column Type Detection;

```

### Get Excel Multiple Series Stack

**Syntaxe :** obj &lt;&lt; Get Excel Multiple Series Stack

**Description :** Renvoie 1 si les colonnes étendues sont empilées si l&apos;option « Définir les en-têtes de colonne d&apos;Excel comme des hiérarchies » est fixée à 1.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Multiple Series Stack;

```

### Get Excel Number of Header Lines

**Syntaxe :** obj &lt;&lt; Get Excel Number of Header Lines

**Description :** Renvoie le nombre de lignes dans la feuille de calcul qui sont importées en tant qu&apos;en-têtes de colonne.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Number of Header Lines;

```

### Get Excel Replicate Data In Spanned Rows

**Syntaxe :** obj &lt;&lt; Get Excel Replicate Data In Spanned Rows

**Description :** Pour plusieurs lignes d&apos;en-tête fusionnées verticalement, fixez à 1 pour répéter la valeur.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Replicate Data In Spanned Rows;

```

### Get Excel Replicate Headers In Spanned Rows

**Syntaxe :** obj &lt;&lt; Get Excel Replicate Headers In Spanned Rows

**Description :** Renvoie 1 si les cellules d&apos;en-tête de feuille de calcul fusionnées ont des valeurs de cellule dupliquées lors de la création du nom de colonne de la table de données JMP.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Replicate Headers In Spanned Rows;

```

### Get Excel Suppress Empty Columns

**Syntaxe :** obj &lt;&lt; Get Excel Suppress Empty Columns

**Description :** Fixer à 1 pour interdire l&apos;importation des colonnes vides.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Suppress Empty Columns;

```

### Get Excel Suppress Hidden Columns

**Syntaxe :** obj &lt;&lt; Get Excel Suppress Hidden Columns

**Description :** Renvoie 1 si les colonnes masquées ne sont pas importées.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Suppress Hidden Columns;

```

### Get Excel Suppress Hidden Rows

**Syntaxe :** obj &lt;&lt; Get Excel Suppress Hidden Rows

**Description :** Renvoie 1 si les lignes masquées ne sont pas importées.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Suppress Hidden Rows;

```

### Get Excel Worksheet Filter

**Syntaxe :** obj &lt;&lt; Get Excel Worksheet Filter

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Get Excel Worksheet Filter;

```

### Get File List

**Syntaxe :** obj &lt;&lt; Get File List

**JMP Version ajoutée :** 18

```jsl



```

### Get Folder

**Syntaxe :** obj &lt;&lt; Get Folder

**Description :** Renvoyer le nom de dossier.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$Desktop" );mfi << Get Folder;

```

### Get Folder Count

**Syntaxe :** obj &lt;&lt; Get Folder Count

**Description :** Renvoyer le nombre de fichiers du dossier.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$Desktop" );mfi << Get Folder Count;

```

### Get Import Callback

**Syntaxe :** obj &lt;&lt; Get Import Callback

**JMP Version ajoutée :** 15

```jsl

Create Directory( "$temp/deleteme" );Save Text File( "$temp/deleteme/test1.txt", "a1\!n1" );Save Text File( "$temp/deleteme/test2.txt", "a2\!n1" );mfi = Multiple File Import(	<<Set Folder( "$temp/deleteme/" ),	<<Set Name Filter( "test?.txt;" ),	<<Set Name Enable( 1 ),	<<Set Add File Name Column( 1 ),	<<Set Import Callback(		Function( {a, b},			Write( "\!na=", a );			Write( "\!nb=", b );		)	));mfi << Get Import Callback();

```

### Get Import Mode

**Syntaxe :** obj &lt;&lt; Get Import Mode

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Import Mode( "Row Per Line" );mfi << Get Import Mode();

```

### Get JSON Guess

**Syntaxe :** obj &lt;&lt; Get JSON Guess

**Description :** Renvoie la méthode intégrée pour l&apos;importation de données JSON pour créer des tables de données.

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Get JSON Guess();

```

### Get JSON Method

**Syntaxe :** obj &lt;&lt; Get JSON Method

**Description :** Renvoie la méthode actuelle utilisée pour l&apos;importation de données JSON.

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Get JSON Method();

```

### Get JSON Settings

**Syntaxe :** obj &lt;&lt; Get JSON Settings

**Description :** Renvoie le JSL personnalisé qui importe les données JSON.

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Get JSON Settings();

```

### Get Name Count

**Syntaxe :** obj &lt;&lt; Get Name Count

**Description :** Renvoie le nombre de fichiers correspondant au filtre de nom actuel si Définir le nom activer est défini, ou le nombre total de fichiers dans le cas contraire.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get Name Count();

```

### Get Name Enable

**Syntaxe :** obj &lt;&lt; Get Name Enable

**Description :** Renvoie 1 si le filtre de nom actuel sera appliqué pour filtrer les fichiers inclus.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Name Enable( 1 );mfi << Get Name Enable();

```

### Get Name Filter

**Syntaxe :** obj &lt;&lt; Get Name Filter

**Description :** Renvoie le filtre de nom actuel.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Name Filter( "*.csv;*.txt" );mfi << Set Name Enable( 1 );mfi << Get Name Filter();

```

### Get PDF Method

**Syntaxe :** obj &lt;&lt; Get PDF Method

**Description :** Renvoie la méthode actuelle utilisée pour l&apos;importation de données PDF.

**JMP Version ajoutée :** 17

```jsl

mfi = Multiple File Import();mfi << Get PDF Method();

```

### Get PDF Settings

**Syntaxe :** obj &lt;&lt; Get PDF Settings

**Description :** Renvoie le JSL personnalisé qui importe les données PDF.

**JMP Version ajoutée :** 17

```jsl

mfi = Multiple File Import();mfi << Get PDF Settings();

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Créer un script à partir des paramètres actuels.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get Script();

```

### Get Show Hidden

**Syntaxe :** obj &lt;&lt; Get Show Hidden

**Description :** Renvoie si les fichiers masqués sont inclus ou non

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Set Show Hidden( 1 );mfi << Get Show Hidden();

```

### Get Size Count

**Syntaxe :** obj &lt;&lt; Get Size Count

**Description :** Renvoie le nombre de fichiers correspondant au filtre de taille actuel si Définir la taille activer est défini, ou le nombre total de fichiers dans le cas contraire.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$Documents" );mfi << Set Size Filter( {0, 1000} );mfi << Set Size Enable( 1 );Print( mfi << Get Size Count() );mfi << Set Size Enable( 0 );Print( mfi << Get Size Count() );

```

### Get Size Enable

**Syntaxe :** 0|1 = obj &lt;&lt; Get Size Enable

**Description :** Renvoie 1 si le filtre de taille est activé.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Size Enable( 1 );mfi << Set Size Filter( {0, 1000} );mfi << Get Size Enable();

```

### Get Size Filter

**Syntaxe :** obj &lt;&lt; Get Size Filter

**Description :** Renvoie une liste dont le premier élément est la taille du plus petit fichier inclus et le deuxième élément est la taille du plus grand fichier inclus.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Size Filter( {0, 1000} );mfi << Get Size Filter();

```

### Get Stack Mode

**Syntaxe :** obj &lt;&lt; Get Stack Mode

**Description :** Renvoie « Stack Similar » si les fichiers d&apos;entrée similaires seront combinés dans une table de données à l&apos;importation, ou renvoie « Table Per File » lorsque les fichiers d&apos;entrée seront combinés dans deux tables de données ou plus.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Get Stack Mode();

```

### Get Subfolders

**Syntaxe :** obj &lt;&lt; Get Subfolders

**Description :** Renvoie 1 si les fichiers des sous-dossiers sont inclus.

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Set Subfolders( 1 );mfi << Get Subfolders();

```

### Get Use File List

**Syntaxe :** obj &lt;&lt; Get Use File List

**JMP Version ajoutée :** 18

```jsl



```

### Get XML Guess

**Syntaxe :** obj &lt;&lt; Get XML Guess

**Description :** Renvoie la méthode intégrée pour l&apos;importation de données XML pour créer des tables de données.

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Get XML Guess();

```

### Get XML Method

**Syntaxe :** obj &lt;&lt; Get XML Method

**Description :** Renvoie la méthode actuelle utilisée pour l&apos;importation de données XML.

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Get XML Method();

```

### Get XML Settings

**Syntaxe :** obj &lt;&lt; Get XML Settings

**Description :** Renvoie le jsl personnalisé pour l&apos;importation de données xml.

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Get XML Settings();

```

### Import Data

**Syntaxe :** list of data tables = obj &lt;&lt; Import Data

**Description :** Importe les données en fonction des paramètres actuels et renvoie une liste de tables de données.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );mfi << Set Name Filter( "*.txt" );mfi << Set Name Enable( 1 );tables = mfi << Import Data();

```

### Set Add File Date Column

**Syntaxe :** obj &lt;&lt; Set Add File Date Column

**Description :** Définir pour créer une colonne avec la taille du fichier à partir duquel la ligne a été importée.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Date Column( 1 );

```

### Set Add File Name Column

**Syntaxe :** obj &lt;&lt; Set Add File Name Column

**Description :** Définir pour créer une colonne avec le nom du fichier à partir duquel la ligne a été importée.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Name Column( 1 );

```

### Set Add File Size Column

**Syntaxe :** obj &lt;&lt; Set Add File Size Column

**Description :** Définir pour créer une colonne avec la taille du fichier à partir duquel la ligne a été importée.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Add File Size Column( 1 );

```

### Set CSV Allow Numeric

**Syntaxe :** obj &lt;&lt; Set CSV Allow Numeric

**Description :** Définir sur 1 pour autoriser la création de colonnes numériques à partir de données numériques apparentes ou sur 0 pour créer uniquement des colonnes de caractères.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Allow Numeric( 1 );

```

### Set CSV EOF Comma

**Syntaxe :** obj &lt;&lt; Set CSV EOF Comma

**Description :** Définir sur 1 pour utiliser une virgule pour séparer les champs à utiliser pour créer plusieurs colonnes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Comma( 1 );

```

### Set CSV EOF Other

**Syntaxe :** obj &lt;&lt; Set CSV EOF Other

**Description :** Définir sur la valeur de séparation des champs à utiliser pour créer plusieurs colonnes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOF Space

**Syntaxe :** obj &lt;&lt; Set CSV EOF Space

**Description :** Définir sur 1 pour utiliser un espace pour séparer les champs à utiliser pour créer plusieurs colonnes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Space( 1 );

```

### Set CSV EOF Spaces

**Syntaxe :** obj &lt;&lt; Set CSV EOF Spaces

**Description :** Définir sur 1 pour utiliser un espace pour séparer les champs à utiliser pour créer plusieurs colonnes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Spaces( 1 );

```

### Set CSV EOF Tab

**Syntaxe :** obj &lt;&lt; Set CSV EOF Tab

**Description :** Définir sur 1 pour utiliser une tabulation pour séparer les champs à utiliser pour créer plusieurs colonnes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Tab( 1 );

```

### Set CSV EOL CR

**Syntaxe :** obj &lt;&lt; Set CSV EOL CR

**Description :** Définir sur 1 pour utiliser CR comme valeur de séparation des lignes à utiliser pour créer plusieurs lignes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOL CR( 1 );

```

### Set CSV EOL CRLF

**Syntaxe :** obj &lt;&lt; Set CSV EOL CRLF

**Description :** Définir sur 1 pour utiliser CRLF comme valeur de séparation des lignes à utiliser pour créer plusieurs lignes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOL CRLF( 1 );

```

### Set CSV EOL LF

**Syntaxe :** obj &lt;&lt; Set CSV EOL LF

**Description :** Définir sur 1 pour utiliser LF comme valeur de séparation des lignes à utiliser pour créer plusieurs lignes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOL LF( 1 );

```

### Set CSV EOL Other

**Syntaxe :** obj &lt;&lt; Set CSV EOL Other

**Description :** Définit la valeur personnalisée pour séparer les lignes dans le fichier d&apos;entrée. Cette valeur crée des lignes en sortie.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOF Other( "\" );

```

### Set CSV EOL Semicolon

**Syntaxe :** obj &lt;&lt; Set CSV EOL Semicolon

**Description :** Définir sur 1 pour utiliser un point-virgule pour représenter les lignes entre les lignes.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV EOL Semicolon( 1 );

```

### Set CSV Escape

**Syntaxe :** obj &lt;&lt; Set CSV Escape

**Description :** Définit un caractère d&apos;échappement pour les caractères spéciaux comme la fin de champ, la fin de ligne, ou le délimiteur de citation.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Escape( "\" );

```

### Set CSV First Data Line

**Syntaxe :** obj &lt;&lt; Set CSV First Data Line

**Description :** Le numéro de ligne dans le fichier qui contient la première ligne de données.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV First Data Line( 4 );

```

### Set CSV First Header Line

**Syntaxe :** obj &lt;&lt; Set CSV First Header Line

**Description :** Définit la première ligne du fichier d&apos;importation qui contient les en-têtes à utiliser pour créer les noms de colonne.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );mfi << Set CSV First Header Line( 2 );

```

### Set CSV Has Headers

**Syntaxe :** obj &lt;&lt; Set CSV Has Headers

**Description :** Définir sur 1 pour utiliser « Première ligne d&apos;en-tête CSV » et « Nombre de lignes d&apos;en-tête CSV ».

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );

```

### Set CSV Number Of Header Lines

**Syntaxe :** obj &lt;&lt; Set CSV Number Of Header Lines

**Description :** Définit le nombre de lignes d&apos;en-têtes à utiliser pour les noms de colonne.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Has Headers( 1 );mfi << Set CSV Number Of Header Lines( 2 );

```

### Set CSV Quote

**Syntaxe :** obj &lt;&lt; Set CSV Quote

**Description :** Définit la valeur qui sépare les chaînes entre guillemets.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set CSV Quote( "'" );

```

### Set Charset

**Syntaxe :** obj &lt;&lt; Set Charset

**Description :** Définit le jeu de caractères à utiliser lors de l&apos;importation de données.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Charset( "Best Guess" );

```

### Set Date Enable

**Syntaxe :** obj &lt;&lt; Set Date Enable

**Description :** Active le filtre date et heure. La valeur par défaut est désactivé, qui ignore le filtre de date même si celui-ci est défini.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );mfi << Set Date Enable( 1 );

```

### Set Date Filter

**Syntaxe :** obj &lt;&lt; Set Date Filter( {start of date time range, end of date time range} )

**Description :** Filtre les fichiers inclus en fonction d&apos;une plage de date et heure.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Date Filter( {05Sep2019:14:30:00, Today()} );mfi << Set Date Enable( 1 );

```

### Set Excel Add Sheet Name Column

**Syntaxe :** obj &lt;&lt; Set Excel Add Sheet Name Column

**Description :** Si la valeur est fixée à 1, une colonne est ajoutée à la table importée avec le nom de la feuille de calcul d&apos;où proviennent les données.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Add Sheet Name Column( 1 );

```

### Set Excel Best Guess

**Syntaxe :** obj &lt;&lt; Set Excel Best Guess

**Description :** Trouver dynamiquement les données dans chaque feuille de calcul et faire une meilleure déduction des noms de colonne. Si ce paramètre est défini, aucun autre paramètre Excel n&apos;est utilisé à l&apos;exception de « Définir la colonne de nom de feuille d&apos;ajout d&apos;Excel ».

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Best Guess( 1 );

```

### Set Excel Column Headers As Hierarchies

**Syntaxe :** obj &lt;&lt; Set Excel Column Headers As Hierarchies

**Description :** Fixer à 1 pour traiter plusieurs lignes d&apos;en-tête de colonne comme des hiérarchies. Cela réorganise les informations des cellules étendues dans les en-têtes et place ces données dans les lignes de la table générée.

**JMP Version ajoutée :** 18

```jsl

Multiple File Import(	fJust << Set Folder( "$sample_import_data" ),	<<Set Name Filter( "texas precipitation.xlsx" ),	<<Set Name Enable( 1 ),	<<Set Excel Best Guess( 0 ),	<<Set Excel Has Headers( 1 ),	<<Set Excel Number of Header Lines( 2 ),	<<Set Excel First Data Line( 3 ),	<<Set Excel Last Data Row( 6 ),	<<Set Excel Column Headers As Hierarchies( 1 )) << import data;

```

### Set Excel Column Name Separator

**Syntaxe :** obj &lt;&lt; Set Excel Column Name Separator

**Description :** Définissez une chaîne à utiliser comme séparateur lors de la concaténation de plusieurs cellules dans les noms d&apos;en-tête de colonne.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Column Name Separator( "+" );

```

### Set Excel First Data Column

**Syntaxe :** obj &lt;&lt; Set Excel First Data Column

**Description :** Définit le numéro de la première colonne non vide de la feuille de calcul qui est importée sous forme de données.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel First Data Column( 1 );

```

### Set Excel First Data Line

**Syntaxe :** obj &lt;&lt; Set Excel First Data Line

**Description :** Définit le numéro de la première ligne non vide de la feuille de calcul qui est importée sous forme de données.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel First Data Line( 1 );

```

### Set Excel First Header Line

**Syntaxe :** obj &lt;&lt; Set Excel First Header Line

**Description :** Définit le numéro de la première ligne non vide de la feuille de calcul à utiliser pour définir les en-têtes de colonne.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel First Header Line( 1 );

```

### Set Excel Has Headers

**Syntaxe :** obj &lt;&lt; Set Excel Has Headers

**Description :** Si cette option est définie, les options « Définir la première ligne d&apos;en-tête d&apos;Excel » et « Définir le nombre de lignes d&apos;en-tête d&apos;Excel » seront utilisées pour définir les en-têtes de colonne lors de l&apos;importation.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Has Headers( 1 );

```

### Set Excel Import Color Cells

**Syntaxe :** obj &lt;&lt; Set Excel Import Color Cells

**Description :** Si la valeur est fixée à 1, les couleurs de fond des cellules de données sont importées.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Import Color Cells( 1 );

```

### Set Excel Last Data Column

**Syntaxe :** obj &lt;&lt; Set Excel Last Data Column

**Description :** Définit la dernière colonne dans la zone de données de la feuille de calcul à importer. La zone de données commence après toutes les colonnes vides.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Last Data Column( 2 );

```

### Set Excel Last Data Row

**Syntaxe :** obj &lt;&lt; Set Excel Last Data Row

**Description :** Définissez la dernière ligne dans la zone de données de la feuille de calcul à importer. La zone de données commence après toutes les lignes vides.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Last Data Row( 1 );

```

### Set Excel Limit Column Type Detection

**Syntaxe :** obj &lt;&lt; Set Excel Limit Column Type Detection

**Description :** Fixer à 1 pour sélectionner uniquement certaines des lignes d&apos;une colonne lors de la détection automatique du type de données d&apos;une colonne. Une valeur de 1 entraîne un traitement plus rapide, mais il est possible que le mauvais type de données soit choisi dans les cas où le type de données diffère entre les valeurs se trouvant en bas de la colonne et en haut.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Limit Column Type Detection( 1 );

```

### Set Excel Multiple Series Stack

**Syntaxe :** obj &lt;&lt; Set Excel Multiple Series Stack

**Description :** Si la valeur est fixée à 1 et que l&apos;option « Définir les en-têtes de colonne d&apos;Excel comme des hiérarchies » est fixée à 1, les colonnes étendues sont empilées.

**JMP Version ajoutée :** 18

```jsl

Multiple File Import(	<<Set Folder( "$sample_import_data" ),	<<Set Name Filter( "texas precipitation.xlsx" ),	<<Set Name Enable( 1 ),	<<Set Excel Best Guess( 0 ),	<<Set Excel Has Headers( 1 ),	<<Set Excel Number of Header Lines( 2 ),	<<Set Excel First Data Line( 3 ),	<<Set Excel Last Data Row( 6 ),	<<Set Excel Column Headers As Hierarchies( 1 ), // must be set for Multiple Series Stack	<<Set Excel Multiple Series Stack( 1 ),) << import data;

```

### Set Excel Number of Header Lines

**Syntaxe :** obj &lt;&lt; Set Excel Number of Header Lines

**Description :** Définissez le nombre de lignes dans la feuille de calcul à importer en tant qu&apos;en-têtes de colonne.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Number of Header Lines( 1 );

```

### Set Excel Replicate Data In Spanned Rows

**Syntaxe :** obj &lt;&lt; Set Excel Replicate Data In Spanned Rows

**Description :** À la création de l&apos;en-tête de colonne, si la valeur est définie sur 1, et qu&apos;il y a plusieurs lignes d&apos;en-tête et qu&apos;une cellule s&apos;étend sur ces lignes mais ne s&apos;étend sur aucune cellule horizontalement, la valeur au début de la zone fusionnée est répétée.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Replicate Data In Spanned Rows( 1 );

```

### Set Excel Replicate Headers In Spanned Rows

**Syntaxe :** obj &lt;&lt; Set Excel Replicate Headers In Spanned Rows

**Description :** Si cette option est définie sur 1 et qu&apos;il y a plusieurs lignes d&apos;en-tête et qu&apos;une cellule s&apos;étend sur ces lignes et ne s&apos;étend sur aucune cellule horizontalement, la valeur au début de la zone fusionnée sera répétée lors de la création de l&apos;en-tête de colonne.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Replicate Headers In Spanned Rows( 1 );

```

### Set Excel Suppress Empty Columns

**Syntaxe :** obj &lt;&lt; Set Excel Suppress Empty Columns

**Description :** Fixer à 1 pour interdire l&apos;importation des colonnes vides.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Suppress Empty Columns( 1 );

```

### Set Excel Suppress Hidden Columns

**Syntaxe :** obj &lt;&lt; Set Excel Suppress Hidden Columns

**Description :** Fixer à 1 pour interdire l&apos;importation des colonnes masquées.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Suppress Hidden Columns( 1 );

```

### Set Excel Suppress Hidden Rows

**Syntaxe :** obj &lt;&lt; Set Excel Suppress Hidden Rows

**Description :** Fixer à 1 pour interdire l&apos;importation des lignes masquées.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Suppress Hidden Rows( 1 );

```

### Set Excel Worksheet Filter

**Syntaxe :** obj &lt;&lt; Set Excel Worksheet Filter

**Description :** Seules les feuilles de calcul correspondant au filtre sont importées.

**JMP Version ajoutée :** 18

```jsl

mfi = Multiple File Import();mfi << Set Excel Worksheet Filter( "data*;sheet?" );

```

### Set File List

**Syntaxe :** obj &lt;&lt; Set File List

**JMP Version ajoutée :** 18

```jsl



```

### Set Folder

**Syntaxe :** obj &lt;&lt; Set Folder

**Description :** Choisir un autre dossier.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Folder( "$Desktop" );

```

### Set Import Callback

**Syntaxe :** obj &lt;&lt; Set Import Callback

**Description :** Spécifie une fonction de rappel personnalisée exécutée comme dernière étape du processus d&apos;importation. La fonction Multiple File Import() passe à la fonction de rappel l&apos;objet Multiple File Import et une liste des tables de données ouvertes.

**JMP Version ajoutée :** 15

```jsl

Create Directory( "$temp/deleteme" );Save Text File( "$temp/deleteme/test1.txt", "a1\!n1" );Save Text File( "$temp/deleteme/test2.txt", "a2\!n1" );mfi = Multiple File Import(	<<Set Folder( "$temp/deleteme/" ),	<<Set Name Filter( "test?.txt;" ),	<<Set Name Enable( 1 ),	<<Set Add File Name Column( 1 ),	<<Set Import Callback(		Function( {a, b}, // a is the same is mfi			// b is a list of datatables that were created			Write( "\!na=", a );			Write( "\!nb=", b );		)	));mfi << Import Data;

```

### Set Import Mode

**Syntaxe :** obj &lt;&lt; Set Import Mode

**Description :** Définir sur « Ligne par fichier » pour créer une ligne par fichier, « Ligne par ligne » pour créer une ligne pour chaque ligne de chaque fichier, ou « CSVData » pour utiliser les options Paramètres pour l&apos;importation.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Import Mode( "Row Per Line" );

```

### Set JSON Guess

**Syntaxe :** obj &lt;&lt; Set JSON Guess( "Tall"|"Wide"|"Huge"|"Pandas" )

**Description :** Définit une supposition JSON qui correspond le mieux aux données JSON importées

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Set JSON Method( "Guess" );mfi << Set JSON Guess( "Tall" );

```

### Set JSON Method

**Syntaxe :** obj &lt;&lt; Set JSON Method

**Description :** Définir sur « Supposition » pour utiliser la supposition intégrée or sur « Paramètres JSON » pour entrer un jsl personnalisé.

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Set JSON Method( "Guess" );mfi << Set JSON Guess( "Tall" );

```

### Set JSON Settings

**Syntaxe :** obj &lt;&lt; Set JSON Settings

**Description :** Spécifie le JSL personnalisé qui importe les données JSON.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$sample_data\big class.jmp" );dt << Save( "$Documents\Big Class.json" );Close( dt );Multiple File Import(	<<Set Folder( "$DOCUMENTS" ),	<<Set Name Filter( "big*.JSON" ),	<<Set Name Enable( 1 ),	<<Set JSON Method( "JSON Settings" ),	<<Set JSON Settings(		JSON Settings(			Stack( 0 ),			Row( "/root" ),			Col(				"/root/name",				Column Name( "name" ),				Fill( "Use Once" ),				Type( "Character" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/root/age",				Column Name( "age" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/root/sex",				Column Name( "sex" ),				Fill( "Use Once" ),				Type( "Character" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/root/height",				Column Name( "height" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/root/weight",				Column Name( "weight" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			)		)	)) << Import Data;

```

### Set Name Enable

**Syntaxe :** obj &lt;&lt; Set Name Enable

**Description :** Définit si le filtre de nom actuel est appliqué ou non. La valeur par défaut est 0 qui ignore le filtre de nom même si celui-ci est défini.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Name Enable( 1 );

```

### Set Name Filter

**Syntaxe :** obj &lt;&lt; Set Name Filter

**Description :** Permet de placer les fichiers inclus dans une liste de filtres séparés par des points-virgules et pouvant contenir des caractères génériques. Les noms de fichier comprenant des points-virgules ou des barres horizontales | doivent être importés avec un caractère générique comme ? ou \*.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Name Filter( "*.csv;*.txt" );

```

### Set PDF Method

**Syntaxe :** obj &lt;&lt; Set PDF Method

**Description :** Mettre sur « Supposition » pour utiliser la supposition intégrée or sur « Paramètres PDF » pour entrer un jsl personnalisé.

**JMP Version ajoutée :** 17

```jsl

mfi = Multiple File Import();mfi << Set PDF Method( "Guess" );

```

### Set PDF Settings

**Syntaxe :** obj &lt;&lt; Set PDF Settings

**Description :** Spécifie le JSL personnalisé qui importe les données PDF.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$sample_data\big class.jmp" );win = New Window( "temp", Data Table Box( dt ) );win << Save pdf( "$Documents\big class.PDF" );win << Close window;Close( dt );Multiple File Import(	<<Set Folder( "$DOCUMENTS" ),	<<Set Name Filter( "big*.pdf" ),	<<Set Name Enable( 1 ),	<<Set PDF Method( "PDF Settings" ),	<<Set PDF Settings( PDF All Tables( combine( all ) ) )) << Import Data;

```

### Set Show Hidden

**Syntaxe :** obj &lt;&lt; Set Show Hidden

**Description :** Définit si les fichiers normalement masqués par Windows sont inclus ou non. Par défaut, les fichiers masqués ne sont pas inclus.

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Set Show Hidden( 1 );

```

### Set Size Enable

**Syntaxe :** obj &lt;&lt; Set Size Enable

**Description :** Définit si le filtre de taille actuel est appliqué ou non. La valeur par défaut est désactivé qui ignore le filtre de taille même si celui-ci est défini.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Size Enable( 1 );mfi << Set Size Filter( {0, 1000} );

```

### Set Size Filter

**Syntaxe :** obj &lt;&lt; Set Size Filter( {smallest size to include, largest size to include} )

**Description :** Filtre les fichiers inclus en fonction de la taille du fichier.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Size Enable( 1 );mfi << Set Size Filter( {0, 1000} );

```

### Set Stack Mode

**Syntaxe :** obj &lt;&lt; Set Stack Mode( "Stack Similar" | "Table Per File )

**Description :** Combine les fichiers similaires importés dans une table de données ou crée une table de données pour chaque fichier.

**JMP Version ajoutée :** 14

```jsl

mfi = Multiple File Import();mfi << Set Stack Mode( "Stack Similar" );

```

### Set Subfolders

**Syntaxe :** obj &lt;&lt; Set Subfolders

**Description :** Définit si les fichiers des sous-dossiers sont inclus ou non. Par défaut, ils ne sont pas inclus.

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Set Subfolders( 1 );

```

### Set Use File List

**Syntaxe :** obj &lt;&lt; Set Use File List

**JMP Version ajoutée :** 18

```jsl



```

### Set XML Guess

**Syntaxe :** obj &lt;&lt; Set XML Guess( "Tall"|"Wide"|"Huge" )

**Description :** Spécifie une supposition XML qui correspond le mieux aux données XML importées.

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Set XML Method( "Guess" );mfi << Set XML Guess( "Tall" );

```

### Set XML Method

**Syntaxe :** obj &lt;&lt; Set XML Method

**Description :** Spécifier « Supposition » pour permettre à JMP de décider si les données sont hautes, larges ou grandes. Spécifier « Paramètres XML » pour entrer un JSL personnalisé.

**JMP Version ajoutée :** 15

```jsl

mfi = Multiple File Import();mfi << Set XML Method( "Guess" );mfi << Set XML Guess( "Tall" );

```

### Set XML Settings

**Syntaxe :** obj &lt;&lt; Set XML Settings

**Description :** Spécifie le JSL personnalisé qui importe les données XML.

**JMP Version ajoutée :** 15

```jsl

Multiple File Import(	<<Set Folder( "$SAMPLE_IMPORT_DATA" ),	<<Set Name Filter( "*.xml" ),	<<Set Name Enable( 1 ),	<<Set XML Method( "XML Settings" ),	<<Set XML Settings(		XML Settings(			Row( "/book/story/chapter/para" ),			Col(				"/book/story/chapter/para",				Column Name( "story.chapter.para" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/book/story/chapter/para/price",				Column Name( "story.chapter.para.price" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			),			Col(				"/book/story/chapter/para/quantity",				Column Name( "story.chapter.para.quantity" ),				Fill( "Use Once" ),				Type( "Numeric" ),				Format( {"Best"} ),				Modeling Type( "Continuous" )			)		)	)) << Import Data;

```

