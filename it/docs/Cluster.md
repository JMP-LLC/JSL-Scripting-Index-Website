# Cluster



## Hierarchical Cluster

### Add Spatial Measures

**Sintassi:** obj = Hierarchical Cluster(...Add Spatial Measures( state=0|1 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Permette di selezionare e pesare le componenti spaziali per facilitare il clustering dei pattern di difetti. Disponibile solo se la struttura dei dati specificata è I dati sono in pila.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Defects ),
	Object ID( :Lot, :Wafer ),
	Attribute ID( :X_Die, :Y_Die ),
	Method( "Ward" ),
	Standardize Data( 0 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 12 ),
	g
    Add Spatial Measures(
		Attributes( 1 ),
		Angle( 1 ),
		Radius( 1 ),
		Streak Angle( 1 ),
		Streak Distance( 1 )
	)
);

```

### By

**Sintassi:** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), By( _bycol ) );

```

### Cluster Criterion

**Sintassi:** obj << Cluster Criterion( state=0|1 )

**Descrizione:** Mostra o nasconde il criterio di clusterizzazione cubica (CCC) per l&apos;intera gamma del numero di cluster. Il CCC viene utilizzato per stimare il numero di cluster, dove valori più grandi indicano una stima migliore.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Cluster Criterion );

```

### Cluster Summary

**Sintassi:** obj << Cluster Summary( state=0|1 )

**Descrizione:** Mostra o nasconde le statistiche di riepilogo per ciascuno dei numeri di cluster specificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Cluster Summary
);

```

### Clustering History

**Sintassi:** obj << Clustering History( state=0|1 )

**Descrizione:** Mostra o nasconde la cronologia di agglomerazione in ordine di join. La tabella contiene distanze ed è ordinata dalla più vicina alla più lontana. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Clustering History( 0 )
);

```

### Color Clusters

**Sintassi:** obj << Color Clusters( state=0|1 )

**Descrizione:** Colora le righe e le etichette del dendrogramma in base all&apos;appartenenza ai cluster. I colori vengono aggiornati al variare del numero di cluster.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Color Clusters( 1 );

```

### Color Map

**Sintassi:** obj << Color Map

**Descrizione:** Mostra o nasconde una mappa dei colori accanto al dendrogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Color Map( Green to Black to Red );
Wait( 1 );
obj << Color Map( Blue to Gray to Red );

```

### Column Cluster Criterion

**Sintassi:** obj << Column Cluster Criterion( state=0|1 )

### Column Dendrogram Position

**Sintassi:** obj << Column Dendrogram Position( "Sotto"|"Sopra" )

**Descrizione:** Sposta la posizione del dendrogramma per le colonne quando si utilizza il clustering bidirezionale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 5 ),
	Two Way Clustering,
	Column Dendrogram Position( "Above" )
);

```

### Column Label Position

**Sintassi:** obj << Column Label Position( "Sotto"|"Sopra" )

**Descrizione:** Sposta la posizione delle etichette sul dendrogramma per le colonne quando si utilizza il clustering bidirezionale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 5 ),
	Two Way Clustering,
	Distance Graph( 0 ),
	Column Label Position( "Above" )
);

```

### Constellation Plot

**Sintassi:** obj << Constellation Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un modo alternativo di presentare le informazioni nel dendrogramma di clusterizzazione gerarchica. Ogni osservazione (riga) è rappresentata da un punto finale e ogni join di cluster è rappresentata da un nuovo punto. Le linee che vengono tracciate rappresentano l&apos;appartenenza al cluster.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Constellation Plot( 1 );

```

### Dendrogram Scale

**Sintassi:** obj << Dendrogram Scale( "Scala di distanza"|"Spaziatura uniforme"|"Spaziatura geometrica" )

**Descrizione:** Specifica la scala del dendrogramma. La spaziatura uniforme rende uniforme lo spazio tra le diramazioni del dendrogramma. La spaziatura geometrica aumenta le distanze come multipli di scala risalendo l&apos;albero del dendrogramma. La scala di distanza utilizza la spaziatura tra le diramazioni in modo proporzionale alla distanza.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Dendrogram Scale( Geometric Spacing );

```

### Dendrogram Width

**Sintassi:** obj << Dendrogram Width( number=min(max(256,n*3),500) )

**Descrizione:** Quanto è ampio il frame del dendrogramma per la clusterizzazione delle righe. "min(max(256,n*3),500)", per impostazione predefinita.

### Distance Graph

**Sintassi:** obj << Distance Graph( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico che mostra la distanza superata ad ogni join del cluster. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Distance Graph( 0 )
);
Wait( 1 );
obj << Distance Graph( 1 );

```

### Get Clusters

**Sintassi:** obj << Get Clusters

**Descrizione:** Restituisce un vettore di assegnazioni di cluster per ogni riga.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 )
);
c = obj << Get Clusters;
Show( c );

```

### Get Column Display Order

**Sintassi:** obj << Get Column Display Order

**Descrizione:** Restituisce un vettore della posizione di visualizzazione per ciascuna colonna nella clusterizzazione a due vie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane, :"1-Octanol"n ),
	Twoway Clustering
);
rowOrder = obj << Get Column Display Order;

```

### Get Column Names

**Sintassi:** obj << Get Column Names

**Descrizione:** Dopo la clusterizzazione a due vie, restituisce i nomi delle colonne nell&apos;ordine dei cluster.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
c = obj << Get Column Names;
Show( c );

```

### Get Display Order

**Sintassi:** obj << Get Display Order

**Descrizione:** Restituisce un vettore della posizione di visualizzazione per ciascuna riga nel cluster, con valori mancanti per righe non visualizzate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane, :"1-Octanol"n )
);
rowOrder = obj << Get Display Order;

```

### Get Distance Matrix

**Sintassi:** obj << Get Distance Matrix

**Descrizione:** Restituisce la matrice della distanza utilizzata per la clusterizzazione gerarchica.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 8 )
);
m = obj << Get Distance Matrix;
Show( m );

```

### Hierarchical Cluster

**Sintassi:** Hierarchical Cluster( Y( columns ) )

**Descrizione:** Righe di cluster basate su variabili continue o categoriche. La clusterizzazione gerarchica inizia trattando ogni riga come il proprio cluster e successivamente combinando due cluster alla volta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### Hybrid Cycles

**Sintassi:** obj = Hierarchical Cluster(...Hybrid Cycles( number=30 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica il numero minimo di cicli di join di vicini più prossimi che vengono eseguiti prima di passare alla routine di clusterizzazione gerarchica. "30", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Cycles( 20 )
);

```

### Hybrid Goal

**Sintassi:** obj = Hierarchical Cluster(...Hybrid Goal( number=400 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica il numero massimo di cluster ammessi prima di passare alla routine di clusterizzazione gerarchica. All&apos;avvio della routine di clusterizzazione gerarchica, il numero di cluster deve essere minore o uguale all&apos;obiettivo ibrido. "400", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Goal( 300 )
);

```

### Hybrid Initial K

**Sintassi:** obj = Hierarchical Cluster(...Hybrid Initial K( number=10 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica il numero iniziale di vicini utilizzati nei cicli di join di vicini più prossimi. Il numero di vicini può aumentare o diminuire in base al numero di vicini più prossimi univoci trovati nel ciclo precedente. "10", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Initial K( 8 )
);

```

### Hybrid Log Details

**Sintassi:** obj = Hierarchical Cluster(...Hybrid Log Details( state=0|1 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica se mostrare lo stato e i tempi di ogni stato del metodo di Ward ibrido nel log.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Log Details( 1 )
);

```

### Hybrid RandomPCA Dim

**Sintassi:** obj = Hierarchical Cluster(...Hybrid RandomPCA Dim( number=0 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica il numero di dimensioni da utilizzare nella tecnica di riduzione della dimensione della PCA randomizzata. Questa tecnica viene usata quando il valore Dim. PCA randomizzata ibrida è un valore maggiore di zero e offre ulteriori miglioramenti in termini di velocità. "0", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid RandomPCA Dim( 3 )
);

```

### Late Join Outliers

**Sintassi:** obj << Late Join Outliers( state=0|1 )

**Descrizione:** Mostra o nasconde un report su quali elementi si sono clusterizzati molto tardi nell&apos;agglomerazione.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Late Join Outliers( 1 )
);

```

### Legend

**Sintassi:** obj << Legend( state=0|1 )

**Descrizione:** Mostra o nasconde la legenda della mappa dei colori a destra del dendrogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Color Map( Blue to Gray to Red )
);
obj << Legend( 1 );

```

### Mark Clusters

**Sintassi:** obj << Mark Clusters( state=0|1 )

**Descrizione:** Assegna indicatori alle righe della tabella di dati corrispondenti al cluster al quale la riga appartiene. Gli indicatori vengono aggiornati se si modifica il numero di cluster. Se si deseleziona questa opzione, gli indicatori non vengono più aggiornati in base al numero di cluster.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Mark Clusters;

```

### Method

**Sintassi:** Method( "Average"|"Centroid"|"Ward"|"Single"|"Complete"|"Fast Ward"|"Hybrid Ward" )

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica il metodo di distanza utilizzato per formare i cluster.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Method( "Complete" )
);

```

### Missing value imputation

**Sintassi:** obj = Hierarchical Cluster(...Missing value imputation( state=0|1 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Imputa i valori mancanti utilizzando l&apos;imputazione multivariata normale o multivariata SVD.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Method( "Ward" ),
	Standardize Data( 1 ),
	Missing value imputation( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 6 )
);

```

### More Color Map Columns

**Sintassi:** obj << More Color Map Columns( column )

**Descrizione:** Aggiunge un&apos;altra mappa dei colori basata sulla colonna specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map columns( :sex )
);

```

### Number of Clusters

**Sintassi:** obj << Number of Clusters( number )

**Descrizione:** Permette di impostare il numero di cluster, il punto in cui tagliare la struttura ad albero per definire i gruppi di cluster. Il numero di cluster si può cambiare anche trascinando l&apos;icona a forma di rombo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 )
);

```

### Number of Column Clusters

**Sintassi:** obj << Number of Column Clusters( number )

**Descrizione:** Specifica il numero di cluster di colonne prima del salvataggio. Disponibile solo per la clusterizzazione bidirezionale.

**JMP Versione aggiunta:** 17

### Parallel Coord Plots

**Sintassi:** obj << Parallel Coord Plots

**Descrizione:** Crea un diagramma a coordinate parallele per ciascun cluster, completamente contenuto in una finestra separata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Type, :Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size ),
	Label( :Model ),
	Number of Clusters( 3 )
);
obj << Parallel Coord Plots;

```

### Pivot on Selected Cluster

**Sintassi:** obj << Pivot on Selected Cluster

**Descrizione:** Inverte l&apos;ordine dei due sottocluster del cluster selezionato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
dt << Select Rows( Loc( (obj << Get Clusters) == 3 ) );
Wait( 2 );
obj << Pivot on Selected Cluster;

```

### Release Zoom

**Sintassi:** obj << Release Zoom

**Descrizione:** Rilascia lo zoom sulle righe selezionate del dendrogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
dt << Select Rows( [19, 22, 45, 61, 62, 64] );
obj = dt << Hierarchical Cluster(
	Y( :Type, :Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size ),
	Label( :Model )
);
obj << Zoom to Selected Rows;
Wait( 2 );
obj << Release Zoom;

```

### Row Dendrogram Position

**Sintassi:** obj << Row Dendrogram Position( "Sinistra"|"Destra" )

**Descrizione:** Cambia la posizione del dendrogramma per righe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Two Way Clustering,
	Row Dendrogram Position( "Left" )
);

```

### Row Label Position

**Sintassi:** obj << Row Label Position( "Sinistra"|"Destra" )

**Descrizione:** Cambia la posizione delle etichette sul dendrogramma per righe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

### Row More Position

**Sintassi:** obj << Row More Position( "Sinistra"|"Destra" )

**Descrizione:** Sposta la posizione della mappa dei colori aggiunta con il comando Altre colonne mappa dei colori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map Columns( :sex ),
	Row More Position( "Right" )
);

```

### Save Cluster Hierarchy

**Sintassi:** obj << Save Cluster Hierarchy

**Descrizione:** Crea una tabella di dati che contiene informazioni utili per la ricostruzione del dendrogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Hierarchy;

```

### Save Cluster History

**Sintassi:** obj << Save Cluster History

**Descrizione:** Salva la tabella che compare nel report Cronologia della clusterizzazione come una nuova tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster History
);

```

### Save Cluster Means

**Sintassi:** obj << Save Cluster Means

**Descrizione:** Salva una tabella di medie dei cluster per il numero di cluster specificato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster Means
);

```

### Save Cluster Tree

**Sintassi:** obj << Save Cluster Tree

**Descrizione:** Crea una tabella dati che contiene i nodi dell&apos;albero dei cluster.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Tree;

```

### Save Clusters

**Sintassi:** obj << Save Clusters

**Descrizione:** Crea una colonna che contiene i numeri dei cluster nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Clusters;

```

### Save Column Clusters

**Sintassi:** obj << Save Column Clusters

**Descrizione:** Salva una nuova tabella di dati che contiene informazioni sull&apos;appartenenza ai cluster per le colonne. Disponibile solo per la clusterizzazione bidirezionale.

**JMP Versione aggiunta:** 17

### Save Constellation Coordinates

**Sintassi:** obj << Save Constellation Coordinates

**Descrizione:** Salva le coordinate del grafico a costellazione in una nuova colonna nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Constellation Plot( 1 );
obj << Save Constellation Coordinates( 1 );

```

### Save Display Order

**Sintassi:** obj << Save Display Order

**Descrizione:** Crea una colonna della tabella di dati che contiene l&apos;ordine in cui la riga compare nel dendrogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Display Order;

```

### Save Distance Matrix

**Sintassi:** obj << Save Distance Matrix

**Descrizione:** Crea una tabella di dati che contiene le distanze tra le osservazioni.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Save Distance Matrix
);

```

### Save Formula for Closest Cluster

**Sintassi:** obj << Save Formula for Closest Cluster

**Descrizione:** Salva una colonna della formula nella tabella di dati che fornisce il numero del cluster con la media di cluster più vicina.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Formula for Closest Cluster;

```

### Scatterplot Matrix

**Sintassi:** obj << Scatterplot Matrix

**Descrizione:** Crea una matrice del grafico a dispersione in una nuova finestra con ellissi di confidenza sulla base del numero corrente di cluster.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Scatterplot Matrix
);

```

### Set Random Seed

**Sintassi:** obj << Set Random Seed( number )

**Descrizione:** Specifica un seme casuale per riprodurre i risultati per i futuri avvii della piattaforma.

### Show Dendrogram

**Sintassi:** obj << Show Dendrogram( state=0|1 )

**Descrizione:** Consente di disattivare il dendrogramma se si desidera vedere solo la mappa dei colori. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 ),
	Distance Graph( 0 ),
	Color Map( Green to Black to Red ),
	Color Clusters( 1 ),
	Show Dendrogram( 0 )
);

```

### Show NCluster Handle

**Sintassi:** obj << Show NCluster Handle( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;handle a forma di rombo utilizzato per scegliere il numero di cluster nel dendrogramma. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Color Clusters( 1 ),
	Show NCluster Handle( 0 )
);

```

### Standardize

**Sintassi:** obj << Standardize( "Non standardizzato"|"Colonne"|"Righe"|"Colonne e righe" )

**Descrizione:** Alias per &apos;Standardizza per&apos;, che specifica come standardizzare i valori prima della clusterizzazione.

### Standardize By

**Sintassi:** obj = Hierarchical Cluster(...Standardize By( "Non standardizzato"|"Colonne"|"Righe"|"Colonne e righe" )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica come standardizzare i valori prima della clusterizzazione. È possibile standardizzare per colonne, righe, colonne e righe, o non standardizzare affatto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Unstandardized" ),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

### Standardize Data

**Sintassi:** obj << Standardize Data( state=0|1 )

**Descrizione:** Precedente nome dell&apos;opzione, ancora supportato, ma sostituito da &apos;Standardizza per&apos;.

### Standardize Robustly

**Sintassi:** obj = Hierarchical Cluster(...Standardize Robustly( state=0|1 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Utilizza stime robuste di	media e deviazione standard per standardizzare i dati.

### Two Way Clustering

**Sintassi:** obj = Hierarchical Cluster(...Two Way Clustering...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Raggruppa in cluster le colonne oltre che le righe. Le colonne vanno misurate sulla stessa scala.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 8 )
);
Wait( .1 );
obj << Two Way Clustering;

```

### Use Saved Cluster Table

**Sintassi:** obj = Hierarchical Cluster(...Use Saved Cluster Table( state=0|1 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Utilizza una tabella di cronologia della clusterizzazione separata per specificare la clusterizzazione.

### Zoom to Selected Rows

**Sintassi:** obj << Zoom to Selected Rows

**Descrizione:** Ingrandisce le righe selezionate del dendrogramma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
dt << Select Rows( [19, 22, 45, 61, 62, 64] );
obj = dt << Hierarchical Cluster(
	Y( :Type, :Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size ),
	Label( :Model )
);
Wait( 2 );
obj << Zoom to Selected Rows;

```

## KDTable

### Distance between rows

**Sintassi:** distance = KDTable << Distance between rows( row1, row2 )

**Descrizione:** Restituisce la distanza tra due righe. La distanza si applica sia alle righe rimosse sia alle righe inserite.

```js

Names Default To Here( 1 );
tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );
distance = tbl << Distance between rows( 1, 2 ); 
//distance from row 1 to row 2 is: 
Show( distance );

```

### Insert rows

**Sintassi:** n = KDTable << Insert rows( number|[ vector ] )

**Descrizione:** Consente di reinserire righe nelle ricerche della tabella. Gli indici delle righe non cambiano se si inseriscono o si rimuovono righe e solo le righe originali possono essere rimosse e poi (re)inserite. Restituisce il numero delle righe inserite. Se una riga è stata già inserita, viene ignorata.

```js

Names Default To Here( 1 );
tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] ); 
//  remove 3 rows 
tbl << Remove Rows( [2 1 3] ); 
//  re-insert 1 row 
tbl << InsertRows( 2 ); 
// re-insert 2 rows, ignoring row 2 
tbl << InsertRows( [3 2] );
{rows, dist} = tbl << K nearest rows( 2, 4 ); 
//2 nearest rows to row 4, ignoring row 1, are:
Show( rows );

```

### K nearest rows

**Sintassi:** {rows, dist} = KDTable << K nearest rows( stop, <position> )

**Descrizione:** Restituisce le righe e distanze n più prossime a un punto o a una riga (se è specificata la posizione) o a tutte le righe (se la posizione è omessa), interrompendo la ricerca al superamento del limite di distanza. L&apos;interruzione può essere n o {n,limite}. La posizione facoltativa è un punto come matrice (1xK), dove K è il numero di dimensioni, o il numero di una riga. Se la posizione non viene fornita, le n righe più prossime sono restituite in una matrice (righe x n).

```js

Names Default To Here( 1 );
tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( {3, 2.0} ); 
//3 nearest rows to each row are: 
Show( rows );

```

### KDTable

**Sintassi:** tbl = KDTable( [ point1, point2, point3, point4, point5, ... ] )

**Descrizione:** Restituisce una tabella per la ricerca efficace dei vicini prossimi. Gli argomenti della matrice sono punti k-dimensionali. Non esiste alcun limite al numero di dimensioni o punti.

```js

Names Default To Here( 1 );
tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( 2, 1 ); 
//2 nearest rows to row 1 are: 
Show( rows );

```

### Remove rows

**Sintassi:** n = KDTable << Remove rows( number|[ vector ] )

**Descrizione:** Rimuove righe dalle ricerche della tabella. Gli indici delle righe non cambiano se si inseriscono o si rimuovono righe e solo le righe originali possono essere rimosse e poi (re)inserite. L&apos;indice della riga rimossa può ancora essere utilizzato come punti di inizio per le righe K più prossime. Restituisce il numero di righe rimosse. Se una riga è stata già rimossa, viene ignorata.

```js

Names Default To Here( 1 );
tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );  
//  remove 2 rows
tbl << RemoveRows( [2 1] ); 
//  re-insert 1 row 
tbl << Insert rows( 2 );
{rows, dist} = tbl << K nearest rows( 2, [1.5 1.5] ); 
//2 nearest rows to point at [1.5 1.5], ignoring row 1, are: 
Show( rows );

```

### Attribute ID

**Sintassi:** obj = Y(...<Attribute ID( column(s) )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Per dati in pila identifica attributi che sarebbero colonne (variabili) se i dati non fossero in pila.

### Columns

**Sintassi:** obj << Columns( column(s) )

### Freq

**Sintassi:** obj << Freq( column )

### Label

**Sintassi:** obj << Label( column )

### Object ID

**Sintassi:** obj = Y(...<Object ID( column(s) )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Per dati in pila identifica singoli dati per creare cluster. In alternativa, usato per aggregare ciascuna riga di un dato.

### Ordering

**Sintassi:** obj << Ordering( column )

### Weight

**Sintassi:** obj << Weight( column )

### Y

**Sintassi:** obj << Y( column(s) )

