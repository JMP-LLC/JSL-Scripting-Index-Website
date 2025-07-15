# Cluster



## Spalten

### Attribute ID

**Syntax:** obj = Y(...&lt;Attribute ID( column(s) )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Bei gestapelten Daten werden hiermit Attribute identifiziert, bei denen es sich um Spalten (Variablen) handeln würde, wenn die Daten nicht gestapelt wären.

### Columns

**Syntax:** obj &lt;&lt; Columns( column(s) )

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

### Label

**Syntax:** obj &lt;&lt; Label( column )

### Object ID

**Syntax:** obj = Y(...&lt;Object ID( column(s) )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Bei gestapelten Daten werden hiermit Fälle zum Clustern identifiziert. Ansonsten dient es zum Aggregieren über Zeilen von Daten.

### Ordering

**Syntax:** obj &lt;&lt; Ordering( column )

### Weight

**Syntax:** obj &lt;&lt; Weight( column )

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

## Hierarchical Cluster

### Elementmeldungen

#### Add Spatial Measures

**Syntax:** obj = Hierarchical Cluster(...Add Spatial Measures( state=0|1 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Ermöglicht Ihnen, räumliche Komponenten zum Clustern von defekten Strukturen auszuwählen und zu gewichten. Ist nur dann verfügbar, wenn es sich bei der angegebenen Datenstruktur um „Daten sind gestapelt“ handelt.

```jsl

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

#### Cluster Criterion

**Syntax:** obj &lt;&lt; Cluster Criterion( state=0|1 )

**Beschreibung:** Zeigt das Kubische Cluster-Kriterium (Cubic Clustering Criterion, CCC) für den gesamten Bereich der Anzahl der Cluster an oder blendet es aus. Das CCC wird verwendet, um die Anzahl der Cluster zu schätzen, wenn größere Werte auf eine bessere Anpassung hindeuten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), Cluster Criterion );

```

#### Cluster Summary

**Syntax:** obj &lt;&lt; Cluster Summary( state=0|1 )

**Beschreibung:** Blendet statistische Kenngrößen für jede angegebene Anzahl der Cluster ein oder aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Cluster Summary
);

```

#### Clustering History

**Syntax:** obj &lt;&lt; Clustering History( state=0|1 )

**Beschreibung:** Zeigt den Agglomerationsverlauf in der Reihenfolge der Verbindungen an. Die Tabelle enthält Entfernungen und ist vom nächsten zum entferntesten sortiert. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Clustering History( 0 )
);

```

#### Color Clusters

**Syntax:** obj &lt;&lt; Color Clusters( state=0|1 )

**Beschreibung:** Färbt die Spalten und die Dendrogramm-Beschriftungen nach Cluster-Mitgliedschaft. Die Farben werden aktualisiert, wenn sich die Anzahl der Cluster ändert.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Color Clusters( 1 );

```

#### Color Map

**Syntax:** obj &lt;&lt; Color Map

**Beschreibung:** Zeigt eine Farbmatrix neben dem Dendrogramm an oder blendet sie aus.

```jsl

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

#### Column Cluster Criterion

**Syntax:** obj &lt;&lt; Column Cluster Criterion( state=0|1 )

#### Column Dendrogram Position

**Syntax:** obj &lt;&lt; Column Dendrogram Position( "Darunter"|"Darüber" )

**Beschreibung:** Verschiebt die Position des Dendrogramms für Spalten, wenn Zwei-Wege-Clustern verwendet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 5 ),
	Two Way Clustering,
	Column Dendrogram Position( "Above" )
);

```

#### Column Label Position

**Syntax:** obj &lt;&lt; Column Label Position( "Darunter"|"Darüber" )

**Beschreibung:** Verschiebt die Position der Beschriftungen im Dendrogramm für Spalten, wenn Zwei-Wege-Clustern verwendet wird.

```jsl

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

#### Constellation Plot

**Syntax:** obj &lt;&lt; Constellation Plot( state=0|1 )

**Beschreibung:** Blendet eine alternative Möglichkeit ein oder aus, die Informationen im Dendrogramm für hierarchisches Clustern zu präsentieren. Jede Beobachtung (Zeile) wird von einem Endpunkt dargestellt und jede Clusterverbindung wird von einem neuen Punkt dargestellt. Die gezeichneten Linien stellen die Cluster-Zugehörigkeit dar.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Constellation Plot( 1 );

```

#### Dendrogram Scale

**Syntax:** obj &lt;&lt; Dendrogram Scale( "Distanzskala"|"Gleiche Abstände"|"Geometrische Abstände" )

**Beschreibung:** Legt die Skala für das Dendrogramm fest. Mit der Option „Gleiche Abstände“ haben die Zweige im Dendrogramm gleiche Abstände. Mit der Option „Geometrische Abstände“ nehmen die Abstände im Dendrogramm multiplikativ den Baum entlang zu. Bei der Option „Distanzskala“ sind die Abstände der Zweige proportional zur Distanz.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Dendrogram Scale( Geometric Spacing );

```

#### Dendrogram Width

**Syntax:** obj &lt;&lt; Dendrogram Width( number=min(max(256,n*3),500) )

**Beschreibung:** Die Breite des Dendrogrammrahmens für das Clustern von Zeilen. Standardmäßig „min(max(256,n*3),500)“.

#### Distance Graph

**Syntax:** obj &lt;&lt; Distance Graph( state=0|1 )

**Beschreibung:** Zeigt einen Graphen an oder blendet ihn aus, der die Distanz an jeder Clusterverbindung anzeigt. Standardmäßig ein.

```jsl

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

#### Get Clusters

**Syntax:** obj &lt;&lt; Get Clusters

**Beschreibung:** Gibt einen Vektor mit Clusterzuweisungen für jede Zeile zurück.

```jsl

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

#### Get Column Display Order

**Syntax:** obj &lt;&lt; Get Column Display Order

**Beschreibung:** Gibt einen Vektor der Anzeigeposition für jede Spalte beim Zwei-Wege-Clustern zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane, :"1-Octanol"n ),
	Twoway Clustering
);
rowOrder = obj << Get Column Display Order;

```

#### Get Column Names

**Syntax:** obj &lt;&lt; Get Column Names

**Beschreibung:** Gibt nach dem Zwei-Wege-Clustern die Spaltennamen in der Clusterreihenfolge zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
c = obj << Get Column Names;
Show( c );

```

#### Get Display Order

**Syntax:** obj &lt;&lt; Get Display Order

**Beschreibung:** Gibt einen Vektor der Anzeigeposition für jede Zeile im Cluster zurück, mit fehlenden Werten für nicht angezeigte Zeilen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane, :"1-Octanol"n )
);
rowOrder = obj << Get Display Order;

```

#### Get Distance Matrix

**Syntax:** obj &lt;&lt; Get Distance Matrix

**Beschreibung:** Gibt die Distanzmatrix für hierarchisches Clustern zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 8 )
);
m = obj << Get Distance Matrix;
Show( m );

```

#### Hybrid Cycles

**Syntax:** obj = Hierarchical Cluster(...Hybrid Cycles( number=30 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die minimale Anzahl von Verbindungszyklen bei der Methode „nächste Nachbarn“ an, die durchgeführt werden, bevor zur Routine für hierarchisches Clustern gewechselt wird. Standardmäßig „30“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Cycles( 20 )
);

```

#### Hybrid Goal

**Syntax:** obj = Hierarchical Cluster(...Hybrid Goal( number=400 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die maximal zulässige Anzahl von Clustern an, bevor zur Routine für hierarchisches Clustern gewechselt wird. Wenn die Routine für hierarchisches Clustern startet, muss die Anzahl der Cluster kleiner oder gleich dem Wert bei Hybrid Goal sein. Standardmäßig „400“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Goal( 300 )
);

```

#### Hybrid Initial K

**Syntax:** obj = Hierarchical Cluster(...Hybrid Initial K( number=10 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die anfängliche Anzahl der Nachbarn an, die in den Verbindungszyklen bei der Methode „nächste Nachbarn“ verwendet werden. Die Anzahl der Nachbarn kann steigen oder fallen, je nachdem, wie viele eindeutige nächste Nachbarn im vorherigen Zyklus gefunden wurden. Standardmäßig „10“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Initial K( 8 )
);

```

#### Hybrid Log Details

**Syntax:** obj = Hierarchical Cluster(...Hybrid Log Details( state=0|1 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, ob der Status und die Zeiten jedes Zustands der Methode „Hybrides Ward“ im Log angezeigt werden sollen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid Log Details( 1 )
);

```

#### Hybrid RandomPCA Dim

**Syntax:** obj = Hierarchical Cluster(...Hybrid RandomPCA Dim( number=0 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Anzahl der Dimensionen an, die in der Technik zur Dimensionsreduktion „randomisierte PCA“ verwendet werden sollen. Diese Technik wird verwendet, wenn der Wert bei Hybrid RandomPCA Dim größer als 0 ist. Sie sorgt für eine weitere Verbesserung der Geschwindigkeit. Standardmäßig „0“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Method( "Hybrid Ward" ),
	Hybrid RandomPCA Dim( 3 )
);

```

#### Late Join Outliers

**Syntax:** obj &lt;&lt; Late Join Outliers( state=0|1 )

**Beschreibung:** Zeigt einen Bericht dazu an, welche Elemente sehr spät in der Agglomeration geclustert wurden, oder blendet ihn aus.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Late Join Outliers( 1 )
);

```

#### Legend

**Syntax:** obj &lt;&lt; Legend( state=0|1 )

**Beschreibung:** Zeigt eine Legende für die Farbmatrix neben dem Dendrogramm an oder blendet sie aus.

```jsl

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

#### Mark Clusters

**Syntax:** obj &lt;&lt; Mark Clusters( state=0|1 )

**Beschreibung:** Kennzeichnet die Clusterzugehörigkeit der Zeilen in der Datentabelle durch Symbole. Die Symbole werden aktualisiert, wenn Sie die Anzahl der Cluster ändern. Wenn Sie diese Option abwählen, werden die Symbole nicht mehr basierend auf der Anzahl der Cluster aktualisiert.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Mark Clusters;

```

#### Method

**Syntax:** Method( "Average"|"Centroid"|"Ward"|"Single"|"Complete"|"Fast Ward"|"Hybrid Ward" )&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Distanzmethode zur Bildung von Clustern an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 ),
	Method( "Complete" )
);

```

#### Missing value imputation

**Syntax:** obj = Hierarchical Cluster(...Missing value imputation( state=0|1 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Setzt fehlende Werte durch multivariate normalverteilte Imputation oder multivariate SWZ-Imputation ein.

```jsl

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

#### More Color Map Columns

**Syntax:** obj &lt;&lt; More Color Map Columns( column )

**Beschreibung:** Fügt eine weitere Farbmatrix basierend auf der angegebenen Spalte hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map columns( :sex )
);

```

#### Number of Clusters

**Syntax:** obj &lt;&lt; Number of Clusters( number )

**Beschreibung:** Stellt die Anzahl der Cluster ein, die Stelle zum Schneiden des Baums, um Clustergruppen zu definieren. Sie können die Anzahl der Cluster auch durch Ziehen des diamantförmigen Piktogramms ändern.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 3 )
);

```

#### Number of Column Clusters

**Syntax:** obj &lt;&lt; Number of Column Clusters( number )

**Beschreibung:** Gibt die Anzahl von Spaltenclustern vor dem Speichern an. Nur verfügbar beim Zwei-Wege-Clustern.

**JMP Version hinzugefügt:** 17

#### Parallel Coord Plots

**Syntax:** obj &lt;&lt; Parallel Coord Plots

**Beschreibung:** Erstellt ein Parallelkoordinatendiagramm für jedes Cluster in einem eigenen Fenster.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Type, :Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size ),
	Label( :Model ),
	Number of Clusters( 3 )
);
obj << Parallel Coord Plots;

```

#### Pivot on Selected Cluster

**Syntax:** obj &lt;&lt; Pivot on Selected Cluster

**Beschreibung:** Kehrt die Reihenfolge der zwei Teilcluster des ausgewählten Clusters um.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );
dt << Select Rows( Loc( (obj << Get Clusters) == 3 ) );
Wait( 2 );
obj << Pivot on Selected Cluster;

```

#### Release Zoom

**Syntax:** obj &lt;&lt; Release Zoom

**Beschreibung:** Hebt den Zoom im Dendrogramm für die ausgewählten Zeilen auf.

```jsl

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

#### Row Dendrogram Position

**Syntax:** obj &lt;&lt; Row Dendrogram Position( "Links"|"Rechts" )

**Beschreibung:** Verändert die Position des Dendrogramms für Zeilen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Two Way Clustering,
	Row Dendrogram Position( "Left" )
);

```

#### Row Label Position

**Syntax:** obj &lt;&lt; Row Label Position( "Links"|"Rechts" )

**Beschreibung:** Verändert die Position der Beschriftungen im Dendrogramm für Zeilen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

#### Row More Position

**Syntax:** obj &lt;&lt; Row More Position( "Links"|"Rechts" )

**Beschreibung:** Verändert die Position der Farbmatrix, die mit dem Befehl „Weitere Spalten für die Farbmatrix“ hinzugefügt wurde.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Skull.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :length, :basilar, :zygomat, :postorb ),
	Color Map( "Blue to Gray to Red" ),
	More Color Map Columns( :sex ),
	Row More Position( "Right" )
);

```

#### Save Cluster Hierarchy

**Syntax:** obj &lt;&lt; Save Cluster Hierarchy

**Beschreibung:** Erstellt eine Datentabelle mit Informationen, die bei der Wiedererstellung des Dendrogramms nützlich sind.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Hierarchy;

```

#### Save Cluster History

**Syntax:** obj &lt;&lt; Save Cluster History

**Beschreibung:** Speichert die Tabelle, die im Bericht des Clusteringverlaufs als neue Datentabelle erscheint.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster History
);

```

#### Save Cluster Means

**Syntax:** obj &lt;&lt; Save Cluster Means

**Beschreibung:** Speichert für die vorgegebene Anzahl der Cluster eine Tabelle von Clustermittelwerten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Save Cluster Means
);

```

#### Save Cluster Tree

**Syntax:** obj &lt;&lt; Save Cluster Tree

**Beschreibung:** Erstellt eine Datentabelle mit den Knoten des Dendrogramms.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Cluster Tree;

```

#### Save Clusters

**Syntax:** obj &lt;&lt; Save Clusters

**Beschreibung:** Erstellt eine Spalte in der Datentabelle, die die Clusternummern enthält.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Clusters;

```

#### Save Column Clusters

**Syntax:** obj &lt;&lt; Save Column Clusters

**Beschreibung:** Eine neue Datentabelle speichern, die Informationen zur Cluster-Zugehörigkeit für die Spalten enthält. Nur verfügbar beim Zwei-Wege-Clustern.

**JMP Version hinzugefügt:** 17

#### Save Constellation Coordinates

**Syntax:** obj &lt;&lt; Save Constellation Coordinates

**Beschreibung:** Speichert die Koordinaten des Konstellationsdiagramms in einer neuen Spalte in der Datentabelle.

```jsl

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

#### Save Display Order

**Syntax:** obj &lt;&lt; Save Display Order

**Beschreibung:** Erstellt eine Spalte in der Datentabelle mit der Reihenfolge, in der die Zeile im Dendrogramm erscheint.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Display Order;

```

#### Save Distance Matrix

**Syntax:** obj &lt;&lt; Save Distance Matrix

**Beschreibung:** Erstellt eine Datentabelle mit den Distanzen zwischen Beobachtungen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Save Distance Matrix
);

```

#### Save Formula for Closest Cluster

**Syntax:** obj &lt;&lt; Save Formula for Closest Cluster

**Beschreibung:** Speichert eine Formelspalte in der Datentabelle, die die Clusternummer des nächstgelegenen Clusters angibt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :birth, :death ),
	Label( :country ),
	Number of Clusters( 4 )
);
obj << Save Formula for Closest Cluster;

```

#### Scatterplot Matrix

**Syntax:** obj &lt;&lt; Scatterplot Matrix

**Beschreibung:** Erstellt eine Streudiagramm-Matrix in einem neuen Fenster mit Konfidenzellipsen basierend auf der aktuellen Anzahl der Cluster.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Scatterplot Matrix
);

```

#### Set Random Seed

**Syntax:** obj &lt;&lt; Set Random Seed( number )

**Beschreibung:** Gibt einen zufälligen Startwert an, um die Ergebnisse für künftige Aufrufe der Plattform zu reproduzieren.

#### Show Dendrogram

**Syntax:** obj &lt;&lt; Show Dendrogram( state=0|1 )

**Beschreibung:** Ermöglicht Ihnen, das Dendrogramm auszuschalten, wenn Sie nur die Farbmatrix anzeigen möchten. Standardmäßig ein.

```jsl

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

#### Show NCluster Handle

**Syntax:** obj &lt;&lt; Show NCluster Handle( state=0|1 )

**Beschreibung:** Zeigt den Diamant-Handle an oder blendet ihn aus, mit dem die Anzahl der Cluster im Dendrogramm ausgewählt werden kann. Standardmäßig ein.

```jsl

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

#### Standardize

**Syntax:** obj &lt;&lt; Standardize( "Nicht standardisiert"|"Spalten"|"Zeilen"|"Spalten und Zeilen" )

**Beschreibung:** Alias für „Standardisieren nach“, womit angegeben wird, wie die Werte vor dem Clustern standardisiert werden sollen.

#### Standardize By

**Syntax:** obj = Hierarchical Cluster(...Standardize By( "Nicht standardisiert"|"Spalten"|"Zeilen"|"Spalten und Zeilen" )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, wie die Werte vor dem Clustern standardisiert werden sollen. Sie können nach Spalten, nach Zeilen, nach Spalten und Zeilen oder gar nicht standardisieren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Unstandardized" ),
	Two Way Clustering,
	Row Label Position( "Right" )
);

```

#### Standardize Data

**Syntax:** obj &lt;&lt; Standardize Data( state=0|1 )

**Beschreibung:** Alter Name der Option, wird noch unterstützt, wurde aber durch „Standardize by“ ersetzt.

#### Standardize Robustly

**Syntax:** obj = Hierarchical Cluster(...Standardize Robustly( state=0|1 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Verwendet für die Standardisierung der Daten	robuste Schätzer von Mittelwert und Standardabweichung.

#### Two Way Clustering

**Syntax:** obj = Hierarchical Cluster(...Two Way Clustering...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Clustert Spalten und Zeilen. Die Spalten müssen alle auf der gleichen Skala gemessen werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Hierarchical Cluster(
	Y( :"1-Octanol"n, :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Number of Clusters( 8 )
);
Wait( .1 );
obj << Two Way Clustering;

```

#### Use Saved Cluster Table

**Syntax:** obj = Hierarchical Cluster(...Use Saved Cluster Table( state=0|1 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Verwendet eine separate Clusterverlaufstabelle zum Angeben des Clustern.

#### Zoom to Selected Rows

**Syntax:** obj &lt;&lt; Zoom to Selected Rows

**Beschreibung:** Zeigt nur die ausgewählten Zeilen im Dendrogramm an.

```jsl

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

### Spalten

#### By

**Syntax:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ), By( _bycol ) );

```

### Zugehörige Konstruktoren

#### Hierarchical Cluster

**Syntax:** Hierarchical Cluster( Y( columns ) )

**Beschreibung:** Clustert Zeilen basierend auf stetigen oder kategorialen Variablen. Hierarchisches Clustern beginnt damit, dass jede Zeile als eigener Cluster behandelt wird und dann nachfolgend jeweils zwei Cluster kombiniert werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

## KDTable

### Elementmeldungen

#### Distance between rows

**Syntax:** distance = KDTable &lt;&lt; Distance between rows( row1, row2 )

**Beschreibung:** Gibt die Distanz zwischen zwei Zeilen zurück. Die Distanz gilt bei entfernten Zeilen ebenso wie bei eingefügten Zeilen.

```jsl

Names Default To Here( 1 );
tbl = KDTable( [1 1, 2 2, 1 2, 2 1, 4 4] );
distance = tbl << Distance between rows( 1, 2 ); 
//distance from row 1 to row 2 is: 
Show( distance );

```

#### Insert rows

**Syntax:** n = KDTable &lt;&lt; Insert rows( number|[ vector ] )

**Beschreibung:** Ermöglicht Ihnen, Zeilen für Suchvorgänge in die Tabelle wieder einzufügen. Die Zeilenindizes ändern sich nicht, wenn Zeilen eingefügt oder entfernt werden, und nur die ursprünglichen Zeilen können entfernt und dann wieder eingefügt werden. Es wird die Anzahl der eingefügten Zeilen zurückgegeben. Wenn eine Zeile bereits eingefügt wurde, wird sie ignoriert.

```jsl

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

#### K nearest rows

**Syntax:** {rows, dist} = KDTable &lt;&lt; K nearest rows( stop, &lt;position&gt; )

**Beschreibung:** Gibt die n nächsten Zeilen und Distanzen zu einem Punkt oder zu einer Zeile (falls eine Position angegebenen ist) oder zu allen Zeilen (falls keine Position angegeben ist) zurück und stoppt die Suche, wenn der Distanzgrenzwert überschritten wird. Der Stopp kann entweder n oder {n,limit} sein. Die optionale Position ist ein Punkt entweder als (1xK)-Matrix, wobei K die Anzahl der Dimensionen oder die Nummer einer Zeile ist. Falls die Position nicht angegeben ist, werden die nächsten n Zeilen zu jeder Zeile in einer (Zeilen x n)-Matrix zurückgegeben.

```jsl

Names Default To Here( 1 );
tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( {3, 2.0} ); 
//3 nearest rows to each row are: 
Show( rows );

```

#### Remove rows

**Syntax:** n = KDTable &lt;&lt; Remove rows( number|[ vector ] )

**Beschreibung:** Entfernt Zeilen aus Suchvorgängen in der Tabelle. Die Zeilenindizes ändern sich nicht, wenn Zeilen eingefügt oder entfernt werden, und nur die ursprünglichen Zeilen können entfernt und dann wieder eingefügt werden. Der Index einer entfernten Zeile kann trotzdem noch als Startpunkt für K nächste Zeilen verwendet werden. Es wird die Anzahl der entfernten Zeilen zurückgegeben. Wenn eine Zeile bereits entfernt wurde, wird sie ignoriert.

```jsl

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

### Zugehörige Konstruktoren

#### KDTable

**Syntax:** tbl = KDTable( [ point1, point2, point3, point4, point5, ... ] )

**Beschreibung:** Gibt eine Tabelle zum effizienten Suchen naher Nachbarn zurück. Die Matrixargumente sind k-dimensionale Punkte. Es gibt keine Grenze für die Anzahl der Dimensionen oder Punkte.

```jsl

Names Default To Here( 1 );
tbl = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tbl << K nearest rows( 2, 1 ); 
//2 nearest rows to row 1 are: 
Show( rows );

```

