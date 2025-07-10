# Text Explorer



## Discriminant Analysis

### Canonical Plot

**Syntax:** obj << Canonical Plot( state=0|1, N Canon( number ) )

**Beschreibung:** Blendet ein Diagramm der Dokumente und Gruppenmittelwerte im kanonischen Raum ein oder aus. Der kanonische Raum ist der Raum, der die Gruppen am meisten trennt.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Canonical Plot( 1, N Canon( 3 ) );

```

### Discriminant Analysis

**Syntax:** obj << Discriminant Analysis( Maximum Number of Terms( number ), Minimum Number of Terms( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number oc Singular Vectors( number ), Column( :column name ) )

**Beschreibung:** Sagt eine Klassifikation jedes Dokuments in eine Kategorie einer angegebenen Zielgrößenspalte mithilfe der linearen Diskriminanzanalyse der Matrix der Dokumentbegriffe voraus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);

```

### Remove

**Syntax:** obj << Remove

**Beschreibung:** Entfernt den Diskriminanzanalysebericht aus dem Text-Explorer-Berichtsfenster.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
Wait( 1 );
obj2 << Remove;

```

### Save Canonical Scores

**Syntax:** obj << Save Canonical Scores( N Canon( number ) )

**Beschreibung:** Speichert in der Datentabelle Spalten mit den Scores aus dem kanonischen Raum für jede Beobachtung. Der kanonische Raum ist der Raum, der die Gruppen am meisten trennt.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Canonical Scores( N Canon( 3 ) );

```

### Save Probabilities

**Syntax:** obj << Save Probabilities

**Beschreibung:** Speichert in der Datentabelle eine Wahrscheinlichkeitsspalte für jede Zielgrößenstufe sowie eine Spalte mit der wahrscheinlichsten Antwort.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Probabilities;

```

### Save Probability Formulas

**Syntax:** obj << Save Probability Formulas

**Beschreibung:** Speichert in der Datentabelle Formelspalten für die Vorhersage der wahrscheinlichsten Antwort. Diese Spalten verwenden die Funktion Text Score für die Berechnung der Wahrscheinlichkeit der einzelnen Zielgrößenstufen.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Probability Formulas;

```

## LCA Analysis

### Cluster Mixture Probabilities

**Syntax:** obj << Cluster Mixture Probabilities( state=0|1 )

**Beschreibung:** Zeigt eine Tabelle der Wahrscheinlichkeiten einer Beobachtung, die zu jedem Cluster gehören, an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Cluster Mixture Probabilities( 0 );

```

### Cluster Probabilities by Row

**Syntax:** obj << Cluster Probabilities by Row( state=0|1 )

**Beschreibung:** Zeigt die Tabelle der Mischungswahrscheinlichkeiten an oder blendet sie aus, die Wahrscheinlichkeiten der Cluster-Zugehörigkeit für jede Zeile enthält. Die Spalte „Wahrscheinlichster Cluster“ zeigt den Cluster mit der höchsten Wahrscheinlichkeit der Zugehörigkeit für jede Zeile an. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Cluster Probabilities by row( 0 );

```

### Color by Cluster

**Syntax:** obj << Color by Cluster

**Beschreibung:** Färbt jede Zeile in der Datentabelle entsprechend dem wahrscheinlichsten Cluster.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Color by Cluster;

```

### Latent Class Analysis

**Syntax:** obj << Latent Class Analysis( Number of Clusters( number ), Maximum Number of Terms( number ), Minimum Term Frequency( number ) )

**Beschreibung:** Gruppiert Dokumente in Clustern ähnlicher Dokumente mithilfe einer latenten Klassenanalyse der binären gewichteten Matrix der Dokumentbegriffe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

### MDS Plot

**Syntax:** obj << MDS Plot( state=0|1 )

**Beschreibung:** Zeigt ein multidimensionales Skalierungsdiagramm, bei dem es sich um eine zweidimensionale Darstellung der Nähe der Clusters handelt, an oder blendet es aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << MDS Plot( 0 );

```

### Remove

**Syntax:** obj << Remove

**Beschreibung:** Entfernt den Bericht der latenten Klassenanalyse aus dem Text-Explorer-Bericht.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Remove;

```

### Rename Clusters

**Syntax:** obj << Rename Clusters( "name1", "name2", ...  )

**Beschreibung:** Ermöglicht Ihnen, beschreibende Namen für einen oder mehrere der Cluster hinzuzufügen.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Rename Clusters( "First", "Second", "Third", "Fourth", "Fifth" );

```

### Save Probabilities

**Syntax:** obj << Save Probabilities

**Beschreibung:** Speichert die Wahrscheinlichkeit der Zugehörigkeit eines Dokuments zu jedem Cluster als separate Spalte in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Save Probabilities;

```

### Save Probability Formulas

**Syntax:** obj << Save Probability Formulas

**Beschreibung:** Speichert eine Formelspalte in der Datentabelle für jeden Cluster sowie eine Formelspalte für den wahrscheinlichsten Cluster.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Save Probability Formulas;

```

### Set Random Seed

**Syntax:** obj << Latent Class Analysis( Set Random Seed( number ) )

**Beschreibung:** Legt einen zufälligen Startwert für die Analyse fest.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 ),
	Set Random Seed( 1234 )
);

```

### Term Probabilities by Cluster

**Syntax:** obj << Term Probabilities by Cluster( state=0|1 )

**Beschreibung:** Zeigt eine Tabelle mit Begriffen mit einem Schätzwert für jeden Cluster an oder blendet sie aus. Der Schätzwert ist die bedingte Wahrscheinlichkeit, dass ein Dokument den Begriff enthält, sofern das Dokument zu einem bestimmten Cluster gehört. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Term Probabilities by Cluster( 0 );

```

### Top Terms by Cluster

**Syntax:** obj << Top Terms by Cluster( state=0|1 )

**Beschreibung:** Zeigt eine Tabelle mit den zehn Begriffen mit den höchsten Scores in jedem Cluster an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Top Terms by Cluster( 0 );

```

### Word Clouds by Cluster

**Syntax:** obj << Word Clouds by Cluster( state=0|1 )

**Beschreibung:** Zeigt eine Matrix aus Wortwolken, eine für jeden Cluster, an oder blendet sie aus.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Word Clouds by Cluster( 1 );

```

## SVD Analysis > Topic Analysis

### Remove

**Syntax:** obj << Remove

**Beschreibung:** Entfernt den Themenanalysebericht aus dem SWZ-Bericht.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Remove;

```

### Rename Topics

**Syntax:** obj << Rename Topics

**Beschreibung:** Ermöglicht Ihnen, beschreibende Namen für eines oder mehrere der Themen hinzuzufügen.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Rename Topics( "Too Busy", "Less Often", "Difficult", "Bed", "Week" );

```

### Rotated SVD

**Syntax:** obj << Topic Analysis( Number of Topics ( number ) ) 

 

obj << Rotated SVD( Number of Topics( number ) )

**Beschreibung:** Führt eine Varimax-rotierte Singulärwertzerlegung der Matrix der Dokumentbegriffe durch, um Gruppen von Begriffen zu erzeugen, die Themen genannt werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );

```

### Rotation Matrix

**Syntax:** obj << Rotation Matrix( state=0|1 )

**Beschreibung:** Zeigt eine Rotationsmatrix für die Varimax-Rotation an oder blendet sie aus.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Rotation Matrix( 1 );
Report( obj )["Rotation Matrix"] << Close( 0 );

```

### Save Document Topic Vectors

**Syntax:** obj << Save Document Topic Vectors

**Beschreibung:** Speichert die Singulärvektoren aus der Themenanalyse in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Document Topic Vectors;

```

### Save Item Topic Vectors

**Syntax:** obj << Save Item Topic Vectors

**Beschreibung:** Speichert die Themenvektoren in einer neuen Datentabelle „Elementthemen-Scores“.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Item Topic Vectors;

```

### Save Term Topic Vectors

**Syntax:** obj << Save Term Topic Vectors

**Beschreibung:** Speichert die Themenvektoren aus der Themenanalyse als Spalten in einer neuen Datentabelle. Wenn bereits eine Begriffstabelle geöffnet ist, werden die Spalten in der Datentabelle gespeichert.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj << Save Term Table;
obj3 << Save Term Topic Vectors;

```

### Save Topic Vector Formula

**Syntax:** obj << Save Topic Vector Formula

**Beschreibung:** Speichert eine Formel mit dem Modellierungstyp Vektor, der die rotierte Singulärwertzerlegung enthält, in der Datentabelle. Die resultierende Spalte verwendet die Funktion Text Score.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Topic Vector Formula;

```

### Save Transaction Topic Vectors

**Syntax:** obj << Save Transaction Topic Vectors

**Beschreibung:** Speichert eine benutzerspezifische Anzahl von Singulärvektoren aus der rotierten Singulärwertzerlegung (Themenvektoren) in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Transaction Topic Vectors;

```

### Top Loadings by Topic

**Syntax:** obj << Top Loadings by Topic( state=0|1 )

**Beschreibung:** Zeigt den Bericht „Häufigste Ladungen nach Thema“ an oder blendet ihn aus, der eine Tabelle der Begriffe für jedes Thema enthält. Die Begriffe in jeder Tabelle sind diejenigen mit den größten Ladungen im Absolutwert für jedes Thema. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Top Loadings by Topic( 0 );

```

### Topic Analysis

**Syntax:** obj << Topic Analysis( Number of Topics ( number ) ) 

 

obj << Rotated SVD( Number of Topics( number ) )

**Beschreibung:** Führt eine Varimax-rotierte Singulärwertzerlegung der Matrix der Dokumentbegriffe durch, um Gruppen von Begriffen zu erzeugen, die Themen genannt werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );

```

### Topic Loadings

**Syntax:** obj << Topic Loadings( state=0|1 )

**Beschreibung:** Zeigt die Tabelle der Themenladungen an oder blendet sie aus, die eine Matrix der Ladungen über Themen für jeden Begriff enthält. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Loadings"] << Close( 0 );
Wait( 1 );
obj3 << Topic Loadings( 0 );

```

### Topic Scatterplot Matrix

**Syntax:** obj << Topic Scatterplot Matrix( state=0|1 )

**Beschreibung:** Zeigt eine Streudiagrammmatrix der Vektoren der rotierten Singulärwertzerlegung an oder blendet sie aus.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Topic Scatterplot Matrix( 1 );

```

### Topic Scores

**Syntax:** obj << Topic Scores( state=0|1 )

**Beschreibung:** Zeigt eine Matrix von Scores über Themen für jedes Dokument an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Scores"] << Close( 0 );
Wait( 1 );
obj3 << Topic Scores( 0 );

```

### Topic Scores Plots

**Syntax:** obj << Topic Scores Plots( state=0|1 )

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der ein Diagramm von Themen-Scores für jedes Dokument enthält. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Scores Plots"] << Close( 0 );
Wait( 1 );
obj3 << Topic Scores Plots( 0 );

```

### Variance Explained by Each Topic

**Syntax:** obj << Variance Explained by Each Topic( state=0|1 )

**Beschreibung:** Zeigt eine Tabelle an oder blendet sie aus, die die Varianz enthält, die von jedem Thema erklärt wird. Die Tabelle enthält auch Spalten mit Prozent und kumulierten Prozent der Variation, die von jedem Thema erklärt wird.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Variance Explained by Each Topic( 1 );
Report( obj )["Variance Explained by Each Topic"] << Close( 0 );

```

### Word Clouds by Topic

**Syntax:** obj << Word Clouds by Topic( state=0|1 )

**Beschreibung:** Zeigt eine Matrix aus Wortwolken, eine für jedes Thema, an oder blendet sie aus.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Word Clouds by Topic( 1 );
Report( obj )["Word Clouds by Topic"] << Close( 0 );

```

## SVD Analysis

### Cluster Documents

**Syntax:** obj << Cluster Documents( state=0|1 )

**Beschreibung:** Zeigt eine Analyse des hierarchischen Clusterns der Dokumente in den Daten an oder blendet sie aus.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Cluster Documents( 1 );

```

### Cluster Items

**Syntax:** obj << Cluster Items( state=0|1 )

**Beschreibung:** Zeigt eine Analyse des hierarchischen Clusterns der Begriffe in den Daten an oder blendet sie aus.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );
obj2 = obj << SVD( Number of Singular Vectors( 20 ) );
obj2 << Cluster Items( 1 );

```

### Cluster Terms

**Syntax:** obj << Cluster Terms( state=0|1 )

**Beschreibung:** Zeigt eine Analyse des hierarchischen Clusterns der Begriffe in den Daten an oder blendet sie aus.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << obj << Cluster Terms( 1 );

```

### Cluster Transactions

**Syntax:** obj << Cluster Transactions( state=0|1 )

**Beschreibung:** Zeigt eine Analyse des hierarchischen Clusterns der Dokumente in den Daten an oder blendet sie aus.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );
obj2 = obj << SVD( Number of Singular Vectors( 20 ) );
obj2 << Cluster Transactions( 1 );

```

### Latent Semantic Analysis

**Syntax:** obj << Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); 

 

obj << SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**Beschreibung:** Führt eine dünnbesetzte Singulärwertzerlegung der Matrix der Dokumentbegriffe durch.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);

```

### Remove

**Syntax:** obj << Remove

**Beschreibung:** Entfernt den SWZ-Bericht aus dem Text-Explorer-Berichtsfenster.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
Wait( 1 );
obj2 << Remove;

```

### Rotated SVD

**Syntax:** obj << Topic Analysis( Number of Topics ( number ) )   

obj << Rotated SVD( Number of Topics( number ) )

**Beschreibung:** Führt eine Varimax-rotierte Singulärwertzerlegung der Matrix der Dokumentbegriffe durch, um Gruppen von Begriffen zu erzeugen, die Themen genannt werden.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );
obj2 << Topic Analysis( Number of Topics( 5 ) );

```

### SVD

**Syntax:** obj << Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); 

 

obj << SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**Beschreibung:** Führt eine dünnbesetzte Singulärwertzerlegung der Matrix der Dokumentbegriffe durch.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);

```

### SVD Scatterplot Matrix

**Syntax:** obj << SVD Scatterplot Matrix( state=0|1, Number of Vectors( number ) )

**Beschreibung:** Zeigt eine Streudiagrammmatrix der Vektoren der Singulärwertzerlegung der Begriffe und Dokumente für jedes SWZ-Diagramm an oder blendet sie aus.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << SVD Scatterplot Matrix( 1, Number of Vectors( 8 ) );

```

### Save Document Singular Vectors

**Syntax:** obj << Save Document Singular Vectors(number)

**Beschreibung:** Speichert die angegebene Anzahl von Singulärvektoren aus der Singulärwertzerlegung des Dokuments in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Document Singular Vectors( 5 );

```

### Save Item SVD

**Syntax:** obj << Save Item SVD

**Beschreibung:** Erstellt eine Datentabelle, die eine Anzahl von Singulärvektoren enthält, die Sie für jedes Item angeben. Hierbei handelt es sich um die rechten Singulärwerte in der Matrix der Transaktions-Items.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Item SVD( 5 );

```

### Save Item Singular Vectors

**Syntax:** obj << Save Item Singular Vectors

**Beschreibung:** Erstellt eine Datentabelle, die eine Anzahl von Singulärvektoren enthält, die Sie für jedes Item angeben. Hierbei handelt es sich um die rechten Singulärwerte in der Matrix der Transaktions-Items.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Item Singular Vectors( 5 );

```

### Save Singular Vector Formula

**Syntax:** obj << Save Singular Vector Formula

**Beschreibung:** Speichert eine vektorwertige Formelspalte, die die Singulärwertzerlegung des Dokuments enthält, in der Datentabelle. Die Formelspalte verwendet die Funktion Text Score.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Singular Vector Formula;

```

### Save Term Singular Vectors

**Syntax:** obj << Save Term Singular Vectors( number )

**Beschreibung:** Speichert die angegebene Anzahl von Singulärvektoren aus der Singulärwertzerlegung der Begriffe als Spalten in einer neuen Datentabelle. Jede Zeile entspricht einem Begriff. Wenn bereits eine Begriffstabelle geöffnet ist, werden die Spalten in der Datentabelle gespeichert.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Term Singular Vectors( 5 );

```

### Save Transaction SVD

**Syntax:** obj << Save Transaction SVD

**Beschreibung:** Erstellt eine Datentabelle, die eine Anzahl von Singulärvektoren enthält, die Sie für jede Transaktion angeben. Hierbei handelt es sich um die linken Singulärwerte in der Matrix der Transaktions-Items.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Transaction SVD( 5 );

```

### Save Transaction Singular Vectors

**Syntax:** obj << Save Transaction Singular Vectors

**Beschreibung:** Erstellt eine Datentabelle, die eine Anzahl von Singulärvektoren enthält, die Sie für jede Transaktion angeben. Hierbei handelt es sich um die linken Singulärwerte in der Matrix der Transaktions-Items.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Transaction Singular Vectors( 5 );

```

### Select Near Neighbors

**Syntax:** obj << Select Near Neighbors( number=10 )

**Beschreibung:** Findet und wählt die k nächsten Nachbarn der ausgewählten Punkte im Dokumenten-SWZ-Diagramm aus. Standardmäßig „10“.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
dt << Select Rows( [102, 237] );
obj2 << Select Near Neighbors( 8 );

```

### Topic Analysis

**Syntax:** obj << Topic Analysis( Number of Topics ( number ) )   

obj << Rotated SVD( Number of Topics( number ) )

**Beschreibung:** Führt eine Varimax-rotierte Singulärwertzerlegung der Matrix der Dokumentbegriffe durch, um Gruppen von Begriffen zu erzeugen, die Themen genannt werden.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );
obj2 << Topic Analysis( Number of Topics( 5 ) );

```

## Sentiment Analysis

### Add Feature Words

**Syntax:** obj << Add Feature Words( list )

**Beschreibung:** Fügt eine Liste von Wörtern hinzu, die als Merkmale gewertet werden.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Add Feature Words( {"floss"} );

```

### Add Intensifier Exception Words

**Syntax:** obj << Add Intensifier Exception Words( list )

**Beschreibung:** Fügt eine Liste von Verstärkerbegriffen hinzu, die aus der Analyse entfernt werden sollen.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Intensifier Exception Words( {"almost"} );

```

### Add Intensifier Words

**Syntax:** obj << Add Intensifier Words( {{<word, multiplier>}, {<word>, <multiplier>}, ... } )

**Beschreibung:** Fügt eine Liste von Wörtern hinzu, die in der Analyse als Verstärkerbegriffe verwendet werden sollen. Multiplikatoren sind Dezimalzahlen üblicherweise im Bereich [-2, 2].

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Intensifier Words( {{"extreme", 1.8}, {"extremely", 1.8}} );

```

### Add Negation Exception Words

**Syntax:** obj << Add Negation Exception Words( list )

**Beschreibung:** Fügt eine Liste von Negationsbegriffen hinzu, die aus der Analyse entfernt werden sollen.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Negation Exception Words( {"without"} );

```

### Add Negation Words

**Syntax:** obj << Add Negation Words( list )

**Beschreibung:** Fügt eine Liste von Wörtern hinzu, die in der Analyse als Negationsbegriffe verwendet werden sollen.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Negation Words( {"dont"} );

```

### Add Sentiment Exception Words

**Syntax:** obj << Add Sentiment Exception Words( list )

**Beschreibung:** Fügt eine Liste von Stimmungsbegriffen hinzu, die aus der Analyse entfernt werden sollen.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Sentiment Exception Words( {"easy"} );

```

### Add Sentiment Words

**Syntax:** obj << Add Sentiment Words( {{<word>, <score>}, {<word>, <score>}, ... } )

**Beschreibung:** Fügt eine Liste von Wörtern hinzu, die in der Analyse als Stimmungsbegriffe verwendet werden sollen. Scores sind ganze Zahlen im Bereich [-100, 100].

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Sentiment Words( {{"difficult", -70}, {"necessary", -20}} );

```

### Include Builtin Intensifier Terms

**Syntax:** obj << Include Builtin Intensifier Terms( state=0|1 )

**Beschreibung:** Gibt an, dass die integrierten Verstärkerbegriffe in den Verstärkerbegriffen eingeschlossen sind, die in der Stimmungsanalyse verwendet werden. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Intensifier Terms( 0 );

```

### Include Builtin Negation Terms

**Syntax:** obj << Include Builtin Negation Terms( state=0|1 )

**Beschreibung:** Gibt an, dass die integrierten Negationsbegriffe in den Negationsbegriffen eingeschlossen sind, die für die Stimmungsanalyse verwendet werden. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Negation Terms( 0 );

```

### Include Builtin Sentiment Terms

**Syntax:** obj << Include Builtin Sentiment Terms( state=0|1 )

**Beschreibung:** Gibt an, dass die integrierten Stimmungsbegriffe in den Stimmungsbegriffen eingeschlossen sind, die in der Stimmungsanalyse verwendet werden. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Sentiment Terms( 0 );

```

### Parse Documents

**Syntax:** obj << Parse Documents( state=0|1 )

**Beschreibung:** Gibt an, dass Verarbeitung natürlicher Sprache (NLP) zum Analysieren der Dokumente verwendet wird. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Parse Documents( 0 );

```

### Save Count of Sentiment Scores by Document

**Syntax:** obj << Save Count of Sentiment Scores by Document

**Beschreibung:** Speichert für jeden Stimmungsbegriff eine Spalte in der Datentabelle. Jede Spalte enthält die Häufigkeit der Vorkommen jedes Stimmungsbegriffs in jedem Dokument.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Save Count of Sentiment Scores by Document;

```

### Save Document Scores

**Syntax:** obj << Save Document Scores

**Beschreibung:** Speichert die Dokument-Scores in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Save Document Scores;

```

### Score Column

**Syntax:** obj << Score Column( column )

**Beschreibung:** Gibt eine Spalte an, die bekannte Informationen für den Vergleich mit der berechneten Stimmung enthält.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Score Column( :Gender );

```

### Scoring

**Syntax:** obj << Scoring( "Skaliert"|"Min. Max." )

**Beschreibung:** Legt den Scoring-Stil für die Berechnung des Gesamt-Scores für Dokumente fest. Die Option „Skaliert“ summiert die Scores von positiven und negativen Phrasen und dividiert dann die Summe durch die Anzahl der Phrasen. Die Option „Min. Max.“ wird als Summe des maximalen positiven Score und des minimalen negativen Score berechnet.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Scoring( "Min Max" );

```

### Sentiment Analysis

**Syntax:** Sentiment Analysis( state=0|1 )

**Beschreibung:** Identifiziert Stimmungsbegriffe in Dokumenten mithilfe der lexikalischen Analyse und bewertet Dokumente auf positive, negative und Gesamtstimmung.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );

```

### Show Feature Finder

**Syntax:** obj << Show Feature Finder( state=0|1 )

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, in dem Sie die Stimmung nach ausgewählten Merkmalen unterteilen können. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Features"] << Close( 0 );
Wait( 2 );
sent << Show Feature Finder( 0 );

```

### Show Intensifier Terms

**Syntax:** obj << Show Intensifier Terms( state=0|1 )

**Beschreibung:** Zeigt die Tabelle der Verstärkerbegriffe an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Intensifier Terms"] << Close( 0 );
Wait( 2 );
sent << Show Intensifier Terms( 0 );

```

### Show Negation Terms

**Syntax:** obj << Show Negation Terms( state=0|1 )

**Beschreibung:** Zeigt die Tabelle der Negationsbegriffe an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Negation Terms"] << Close( 0 );
Wait( 2 );
sent << Show Negation Terms( 0 );

```

### Show Sentiment Cloud

**Syntax:** obj << Show Sentiment Cloud( state=0|1 )

**Beschreibung:** Zeigt die Wortwolke von Stimmungsphrasen an oder blendet sie aus.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Show Sentiment Cloud( 1 );

```

### Show Sentiment Terms

**Syntax:** obj << Show Sentiment Terms( state=0|1 )

**Beschreibung:** Zeigt die Tabelle der Stimmungsbegriffe an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Sentiment Terms"] << Close( 0 );
Wait( 2 );
sent << Show Sentiment Terms( 0 );

```

## Term Selection

### Model Choice

**Syntax:** obj << Term Selection( Model Choice(<index>) )

**Beschreibung:** Gibt an, welches Modell das aktuelle Modell für den Zusammenfassungsbereich ist.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

### Models

**Syntax:** obj << Term Selection( Models( Model( Response Column( <column> ), <other models> )))

**Beschreibung:** Gibt Informationen an, die zum Generieren eines Modells erforderlich sind.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

### Remove

**Syntax:** obj << Remove

**Beschreibung:** Entfernt den Begriffsauswahlbericht aus dem Text-Explorer-Berichtsfenster.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
Wait( 1 );
term << Remove;

```

### Save Document Scores

**Syntax:** obj << Save Document Scores

**Beschreibung:** Speichert die Dokument-Scores in neuen Spalten in der Datentabelle.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Document Scores;

```

### Save Prediction Formulas

**Syntax:** obj << Save Prediction Formulas

**Beschreibung:** Speichert Spalten in der Datentabelle, die die Vorhersageformeln für die aktuell ausgewählte Analyse enthalten.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Prediction Formulas;

```

### Save Term Score DTM

**Syntax:** obj << Save Term Score DTM

**Beschreibung:** Speichert Spalten in der Datentabelle für jeden relevanten Begriff in der aktuell ausgewählten Analyse.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Term Score DTM;

```

### Show Term Cloud

**Syntax:** obj << Show Term Cloud( state=0|1 )

**Beschreibung:** Zeigt eine Wortwolke der Koeffizientenbegriffe an oder blendet sie aus.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Show Term Cloud;

```

### Term Selection

**Syntax:** obj << Term Selection( Models( Model( Response Column( <column> ), <other models> )), Model Choice( <index> ))

**Beschreibung:** Analysiert, welche Begriffe die unterschiedlichen Antworten am besten erklären. Die Begriffsauswahl ist auch bei der Stimmungsanalyse nützlich, wenn die Antworten Bewertungen sind.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

### Action

**Syntax:** obj << Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Add Delimiters

**Syntax:** obj << Add Delimiters( "string" )

**Beschreibung:** Fügt vom Benutzer vorgegebene Trennzeichen in einer einzigen Zeichenkette der Standardliste von Trennzeichen zum Trennen von Wörtern hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
obj << Show Delimiters( 1 );
Wait( 1 );
obj << Add Delimiters( "{}" );

```

### Add Phrase Exceptions

**Syntax:** obj << Add Phrase Exceptions( list )

**Beschreibung:** Fügt eine Liste von Phrasen hinzu, die aus der Begriffsliste entfernt werden sollen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Add Phrases( {"twice a day", "every time", "time consuming"} );
Wait( 1 );
obj << Add Phrase Exceptions( {"every time"} );

```

### Add Phrases

**Syntax:** obj << Add Phrases( list )

**Beschreibung:** Fügt der Begriffsliste eine Liste von Phrasen hinzu, die wie einzelne Begriffe analysiert werden sollen. Die Begriffshäufigkeiten werden entsprechend aktualisiert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Phrases( {"twice a day", "every time"} );

```

### Add Recode Exceptions

**Syntax:** obj << Add Recode Exceptions( { {pair1}, {pair2}, ...} )

**Beschreibung:** Fügt eine Liste von zu entfernenden neu codierten Textzeichenketten hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Recodes( {{"everytime", "every time"}, {"neglagent", "negligent"}} );
obj << Show Recodes( 1 );
Wait( 1 );
obj << Add Recode Exceptions( {"neglagent", "negligent"} );

```

### Add Recodes

**Syntax:** obj << Add Recodes( { {pair1}, {pair2}, ...} )

**Beschreibung:** Fügt eine Liste von neu zu codierenden Wortpaaren hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Recodes( {{"everytime", "every time"}, {"neglagent", "negligent"}} );
obj << Show Recodes( 1 );

```

### Add Stem Exceptions

**Syntax:** obj << Add Stem Exceptions( list )

**Beschreibung:** Fügt eine Liste von Wörtern hinzu, die aus der Stammbildung ausgeschlossen werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
Wait( 1 );
obj << Add Stem Exceptions( {"care", "brush", "like"} );

```

### Add Stem Overrides

**Syntax:** obj << Add Stem Overrides( list )

**Beschreibung:** Fügt eine Liste von Wörtern hinzu, bei denen die Stammbildung zulässig ist.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
Wait( 1 );
obj << Add Stem Overrides( {"care"} );
obj << Add Stem Exceptions( {"care", "brush", "like"} );

```

### Add Stop Word Exceptions

**Syntax:** obj << Add Stop Word Exceptions( list )

**Beschreibung:** Fügt eine Liste von Wörtern hinzu, die als Stoppwörter entfernt und der Begriffsliste hinzugefügt werden sollen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Stop Words( 1 );
Wait( 1 );
obj << Add Stop Word Exceptions( {"again", "are"} );

```

### Add Stop Words

**Syntax:** obj << Add Stop Words( list )

**Beschreibung:** Fügt eine Liste von Wörtern hinzu, die aus der Begriffsliste entfernt und in der Analyse ignoriert werden sollen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Stop Words( 1 );
Wait( 1 );
obj << Add Stop Words( {"use", "feel", "like"} );

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntax:** obj << By( column(s) )

**Beschreibung:** Mehrere Berichte erzeugen, einen für jede Stufe der Variable(n).

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );

```

### Cloud Width

**Syntax:** obj << Cloud Width( number )

**Beschreibung:** Legt für die Breite der Wortwolke die angegebene Anzahl von Pixel fest.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Cloud Width( 150 );

```

### Coloring

**Syntax:** obj << Coloring( "Kein"|"Einheitliche Farbe"|"Beliebige Grautöne"|"Beliebige Farben"|"Nach Spaltenwerten..." )

**Beschreibung:** Gibt die Farbzuweisung für die Begriffe in der Wortwolke an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Coloring( "Arbitrary Colors" );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Copy Script;

```

### Custom Stemmer

**Syntax:** obj << Custom Stemmer( Function( {string, dot}, ... ) )

**Beschreibung:** Führt die Stammbildung entsprechend Ihren Spezifikationen durch. Geben Sie eine Funktion an, die das Argument „String“ nimmt (einen Begriff aus einem Dokument), es testet, um festzustellen, welches Muster es enthält, und ggf. Zeichen mit dem Argument „dot“ ersetzt. Diese Funktion ersetzt den Standard-Stammbildungsalgorithmus. Alle Wörter, die geändert werden, müssen den Stammbildungspunkt am Ende erhalten. Wenn Stammbildung für die Plattform aktiviert ist, wird diese Funktion für jeden im Korpus gefundenen eindeutigen Begriff aufgerufen.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
//This custom stemmer looks only for words ending in 'ing' and replaces the end with the stemming dot.
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
obj << Custom Stemmer(
	Function( {string, dot},
		If( Ends With( string, "ing" ),
			Substr( string, 1, Length( string ) - 3 ) || dot,
			string
		)
	)
);

```

### Customize Regex

**Syntax:** obj = Text Explorer(...Customize Regex( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Öffnet den Editor für reguläre Ausdrücke im Text-Explorer, um die Einstellungen für reguläre Ausdrücke zu ändern. Diese Option ist nur bei der Regex-Tokenisierungsmethode verfügbar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Regex" );
obj << Customize Regex();

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Data Table Window;

```

### Discriminant Analysis

**Syntax:** obj << Discriminant Analysis( Maximum Number of Terms( number ), Minimum Number of Terms( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number oc Singular Vectors( number ), Column( :column name ) )

**Beschreibung:** Sagt eine Klassifikation jedes Dokuments in eine Kategorie einer angegebenen Zielgrößenspalte mithilfe der linearen Diskriminanzanalyse der Matrix der Dokumentbegriffe voraus.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Discriminant Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Column( :Gender )
);

```

### Font

**Syntax:** obj << Font( font )

**Beschreibung:** Gibt Schriftart, Schriftstil und Schriftgröße für die Begriffe in der Wortwolke an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Font( "Arial Narrow", 11, "Plain" );

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Syntax:** obj << Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### ID

**Syntax:** obj << ID( column )

**Beschreibung:** Eine Spalte zur Identifikation separater befragter Personen in der Ausgabedatentabelle „Gestapelte DTM für Assoziation speichern“ sowie der Bericht „Latente Klassenanalyse“.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	ID( :School Age Children )
);
obj << Save Stacked DTM For Association;

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Include Builtin Phrases

**Syntax:** obj << Include Builtin Phrases( state=0|1 )

**Beschreibung:** Gibt an, dass die integrierten Phrasen in den Phrasen enthalten sind, die im Tokenisierungsprozess verwendet werden. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Include Builtin Phrases( 0 );

```

### Include Builtin Stop Words

**Syntax:** obj << Include Builtin Stop Words( state=0|1 )

**Beschreibung:** Gibt an, dass die integrierten Stoppwörter in den Stoppwörtern enthalten sind, die im Tokenisierungsprozess verwendet werden. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Include Builtin Stop Words( 0 );

```

### Language

**Syntax:** obj = Text Explorer(...Language( "Sprachauswahl"|"Englisch"|"Deutsch"|"Spanisch"|"Französisch"|"Italienisch"|"Japanisch"|"Chinesisch (vereinfacht)"|"Chinesisch (traditionell)"|"Koreanisch" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die für die Textverarbeitung verwendeten Sprachen an. Dies wirkt sich auf die Stammbildung und die integrierte Liste der Stoppwörter, Neucodierungen und Phrasen aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( TextColumns( :Reasons Not to Floss ), Language( "German" ) );

```

### Latent Class Analysis

**Syntax:** obj << Latent Class Analysis( Number of Clusters( number ), Maximum Number of Terms( number ), Minimum Term Frequency( number ) )

**Beschreibung:** Gruppiert Dokumente in Clustern ähnlicher Dokumente mithilfe einer latenten Klassenanalyse der binären gewichteten Matrix der Dokumentbegriffe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

### Latent Semantic Analysis

**Syntax:** obj << Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); 

 

obj << SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**Beschreibung:** Führt eine dünnbesetzte Singulärwertzerlegung der Matrix der Dokumentbegriffe durch.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << SVD(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

### Layout

**Syntax:** obj << Layout( "Sortiert"|"Alphabetisch"|"Zentriert" )

**Beschreibung:** Gibt die Anordnung der Begriffe in der Wortwolke an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Layout( "Alphabetical" );

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Maximum Characters per Word

**Syntax:** obj = Text Explorer(...Maximum Characters per Word( number=50 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die größte number der Zeichen an, die ein Wort enthalten kann, um als Begriff in die Analyse aufgenommen zu werden. Standardmäßig „50“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Maximum Characters per Word( 15 )
);

```

### Maximum Number of Phrases

**Syntax:** obj = Text Explorer(...Maximum Number of Phrases( number=5000 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die maximale Anzahl number von Phrasen an, die in der Phrasenliste erscheinen. Standardmäßig „5000“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Maximum Number of Phrases( 50 )
);

```

### Maximum Words per Phrase

**Syntax:** obj = Text Explorer(...Maximum Words per Phrase( number=4 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt maximal number Wörter an, die eine Phrase enthalten darf, um als Phrase in die Analyse einbezogen zu werden. Standardmäßig „4“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Maximum Words per Phrase( 2 )
);

```

### Minimum Characters per Word

**Syntax:** obj = Text Explorer(...Minimum Characters per Word( number=1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die number der Zeichen an, die ein Wort enthalten muss, um als Begriff in die Analyse aufgenommen zu werden. Standardmäßig „1“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Minimum Characters per Word( 3 )
);

```

### Minimum Frequency for Phrase

**Syntax:** obj << Minimum Frequency for Phrase( number )

**Beschreibung:** Gibt die number von Vorkommen einer Phrase an, damit die Phrase in die Phrasenliste aufgenommen wird. Standardmäßig gibt es kein Minimum.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Minimum Frequency for Phrase( 5 );

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Phrases Alphabetical

**Syntax:** obj << Phrases Alphabetical( state=0|1 )

**Beschreibung:** Sortiert die Phrasenliste alphabetisch. Standardmäßig wird nach absteigender Anzahl sortiert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Phrases Alphabetical( 1 );

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj << Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Report View( "Summary" );

```

### Rotated SVD

**Syntax:** obj << Topic Analysis( Number of Topics ( number ) ) 

 

obj << Rotated SVD( Number of Topics( number ) )

**Beschreibung:** Führt eine Varimax-rotierte Singulärwertzerlegung der Matrix der Dokumentbegriffe durch, um Gruppen von Begriffen zu erzeugen, die Themen genannt werden.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Topic Analysis( Number of Topics( 5 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Rotated SVD( Number of Topics( 5 ) );

```

### SVD

**Syntax:** obj << Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); 

 

obj << SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**Beschreibung:** Führt eine dünnbesetzte Singulärwertzerlegung der Matrix der Dokumentbegriffe durch.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << SVD(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save DTM Formula

**Syntax:** obj << Save DTM Formula( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weight( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ) )

**Beschreibung:** Speichert mithilfe der JSL-Funktion Text Score eine vektorwertige Formelspalte in der Datentabelle. Die Länge des Vektors ist von benutzerspezifischen Optionen für die maximale Anzahl von Begriffen, die minimale Begriffshäufigkeit und der Gewichtung abhängig.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save DTM Formula(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" )
);

```

### Save Document Term Matrix

**Syntax:** obj << Save Document Term Matrix( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weight( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ) )

**Beschreibung:** Speichert für jede Spalte der Matrix der Dokumentbegriffe Spalten in der Datentabelle. Die Anzahl der Spalten ist von den benutzerspezifischen Optionen für die maximale Anzahl von Begriffen, die minimale Begriffshäufigkeit und der Gewichtung abhängig.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Document Term Matrix(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" )
);

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Script Window;

```

### Save Stacked DTM for Association

**Syntax:** obj << Save Stacked DTM for Association

**Beschreibung:** Speichert eine gestapelte Version der Matrix der Dokumentbegriffe in einer neuen Datentabelle. Wenn im Startfenster des Text-Explorers eine ID-Variable angegeben ist, wird die ID-Variable zum Identifizieren der Zeilen verwendet, aus denen die einzelnen Begriffe in der ursprünglichen Textdatentabelle kamen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Stacked DTM For Association;

```

### Save Term Table

**Syntax:** obj << Save Term Table

**Beschreibung:** Erstellt eine JMP-Datentabelle mit jedem Begriff aus der Begriffsliste, der Anzahl der Vorkommen und der Anzahl der Dokumente, die jeden Begriff enthalten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Term Table;

```

### SaveRegexColumn

**Syntax:** obj << SaveRegexColumn( text )

**Beschreibung:** Speichert die angegebenen benutzerdefinierten regulären Ausdrücke in einer neuen Spalte in der Datentabelle.

```js

Names Default To Here( 1 );
 
dt = New Table( "WordTable",
	New Column( "Original Words",
		Character,
		"Nominal",
		Set Values( {"Quick brown", "foxes jumped", "over the", "lazy dog."} )
	)
);
dt << Text Explorer(
	Text Columns( :Original Words ), 
// the regex: [a-z]*? means 0 or more letters, reluctantly. [aeiou] means one vowel.	
	// {2} means repeat twice. 
	// [a-z]* means 0 or more letters, greedily. (the rest of the word)
	Set Regex(
		Custom(
			Title( "Two Vowels" ),
			Regex( "(([a-z]*?[aeiou]){2}[a-z]*)" ),
			Result( "\[\1]\" ),

		)
	),
	Include Builtin Stop Words( 0 ), // "over" is a stop word, but we want to see it
	SaveRegexColumn( "Poly Vowel Words" )
);

```

### Score Terms by Column

**Syntax:** obj << Score Terms by Column( column )

**Beschreibung:** Speichert Scores basierend auf Werten in einer angegebenen Spalte in der Datentabelle, die von der Option „Begriffstabelle speichern“ erstellt wurde. Die Scores für jeden Begriff sind der Mittelwert der angegebenen Spalte gewichtet nach der Anzahl von Vorkommen des Begriffs in jeder Zeile.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Score Terms By Column( :Salary );

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sentiment Analysis

**Syntax:** obj << Sentiment Analysis( state=0|1 )

**Beschreibung:** Identifiziert Stimmungsbegriffe in Dokumenten mithilfe der lexikalischen Analyse und bewertet Dokumente auf positive, negative und Gesamtstimmung.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );

```

### Set Delimiters

**Syntax:** obj << Set Delimiters( "string" )

**Beschreibung:** Ersetzt die Standardliste von Trennzeichen zum Teilen von Wörtern durch vom Benutzer vorgegebene Zeichen in einer einzigen Zeichenkette.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
obj << Show Delimiters( 1 );
obj << Set Delimiters( " " );

```

### Set Regex

**Syntax:** obj << Set Regex( ... )

**Beschreibung:** Ersetzt die standardmäßigen regulären Ausdrücke, die in der Regex-Tokenisierungsmethode verwendet werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Set Regex( Library( "Words" ) );

```

### Show Delimiters

**Syntax:** obj << Show Delimiters( state=0|1 )

**Beschreibung:** Zeigt die Trennzeichen, die für die Tokenisierung verwendet werden, an oder blendet sie aus. Diese Option ist nur verfügbar, wenn die Tokenisierungsmethode „Basiswörter“ verwendet wird.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
Wait( 1 );
obj << Show Delimiters( 1 );

```

### Show Filters for all Tables

**Syntax:** obj << Show Filters for all Tables( state=0|1 )

**Beschreibung:** Zeigt Filter an oder blendet sie aus, die zum Suchen von Tabellen im Bericht verwendet werden können. Diese Option gilt für die folgenden Tabellen: Stoppwörter, Angegebene Phrasen, Stammausnahmen, Begriffsliste, Phrasenliste und Stammbericht.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Filters for All Tables( 1 );

```

### Show Legend

**Syntax:** obj << Show Legend( state=0|1 )

**Beschreibung:** Zeigt die Legende für die Wortwolke an oder blendet sie aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Coloring( "Arbitrary Colors" );
Wait( 1 );
obj << Show Legend( 0 );

```

### Show Phrase List

**Syntax:** obj << Show Phrase List( state=0|1 )

**Beschreibung:** Zeigt den Phrasenlistenbericht an oder blendet ihn aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Phrase List( 0 );

```

### Show Recodes

**Syntax:** obj << Show Recodes( state=0|1 )

**Beschreibung:** Zeigt eine Liste der neu codierten Begriffe an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Add Recodes( {{"flossing", "floss"}} );
Wait( 1 );
obj << Show Recodes( 1 );

```

### Show Selected Rows

**Syntax:** obj << Show Selected Rows

**Beschreibung:** Öffnet ein Fenster, das den Text der Dokumente enthält, die sich in den derzeit ausgewählten Zeilen befinden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
Current Data Table() << Select Rows( [1 2 3 4] );
obj << Show Selected Rows( 1 );

```

### Show Specified Phrases

**Syntax:** obj << Show Specified Phrases( state=0|1 )

**Beschreibung:** Zeigt eine Liste der Phrasen an oder blendet sie aus, bei denen der Benutzer angegeben hat, dass sie als Begriffe behandelt werden sollen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Specified Phrases( 1 );
Report( obj )["Specified Phrases"] << Close( 0 );

```

### Show Stem Exceptions

**Syntax:** obj << Show Stem Exceptions( state=0|1 )

**Beschreibung:** Zeigt die Begriffe, die bei der Stammbildung ausgeschlossen werden sollen, an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Stem Exceptions( 1 );

```

### Show Stem Report

**Syntax:** obj << Show Stem Report( state=0|1 )

**Beschreibung:** Zeigt den Stammbildungsbericht, der zwei Tabellen mit Stammbildungsergebnissen enthält, an oder blendet ihn aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Stemming( "Stem for Combining" );
obj << Show Stem Report( 1 );

```

### Show Stop Words

**Syntax:** obj << Show Stop Words( state=0|1 )

**Beschreibung:** Zeigt eine Liste der Stoppwörter, die in der Analyse verwendet werden, an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Stop Words( 1 );

```

### Show Summary Counts

**Syntax:** obj << Show Summary Counts( state=0|1 )

**Beschreibung:** Zeigt eine Tabelle der Übersichtszahlen an oder blendet sie aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Summary Counts( 0 );

```

### Show Term List

**Syntax:** obj << Show Term List( state=0|1 )

**Beschreibung:** Zeigt den Begriffslistenbericht an oder blendet ihn aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Term List( 0 );

```

### Show Term and Phrase Options

**Syntax:** obj << Show Term and Phrase Options( state=0|1 )

**Beschreibung:** Zeigt die Schaltflächen im Begriffs- und Phrasenlistenbericht an oder blendet sie aus, die den verfügbaren Optionen in den Popup-Menüs für jede Liste entsprechen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Term and Phrase Options( 1 );

```

### Show Word Cloud

**Syntax:** obj << Show Word Cloud( state=0|1 )

**Beschreibung:** Zeigt die Wortwolke an oder blendet sie aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Word Cloud( 1 );

```

### Stemming

**Syntax:** obj = Text Explorer(...Stemming( "Keine Stammbildung"|"Stamm zum Kombinieren"|"Stammbildung für alle Begriffe" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Methode zum Verbinden von Begriffen mit ähnlichen Anfangszeichen, doch unterschiedlichen Endungen an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Stemming( "Stem All Terms" );

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Term Selection

**Syntax:** obj << Term Selection( Models( Model( Response Column( <column> ), <other models> )), Model Choice( <index> ))

**Beschreibung:** Analysiert, welche Begriffe die unterschiedlichen Antworten am besten erklären. Die Begriffsauswahl ist auch bei der Stimmungsanalyse nützlich, wenn die Antworten Bewertungen sind.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

### Terms Alphabetical

**Syntax:** obj << Terms Alphabetical( state=0|1 )

**Beschreibung:** Sortiert die Begriffsliste alphabetisch. Standardmäßig wird nach absteigender Anzahl sortiert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Terms Alphabetical( 1 );

```

### Text Columns

**Syntax:** obj << Text Columns( column(s) )

**Beschreibung:** Eine Textspalte mit den zu verarbeitenden Dokumenten. Jeder Zeilenwert wird als ein Dokument behandelt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Text Explorer

**Syntax:** Text Explorer( Text Columns( columns ) )

**Beschreibung:** Analysiert Wörter aus Text in einer Spalte, zählt sie, weist sie anderen Spalten zu, speichert Indikatoren und zeichnet Beziehungen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Title

**Syntax:** obj << Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Title( "My Platform" );

```

### Tokenizing

**Syntax:** obj = Text Explorer(...Tokenizing( "Regex"|"Basiswörter" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Methode zum Zergliedern des Texts in Begriffe oder Token an. Die verfügbaren Methoden sind Regex und Basiswörter.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Basic Words" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Topic Analysis

**Syntax:** obj << Topic Analysis( Number of Topics ( number ) ) 

 

obj << Rotated SVD( Number of Topics( number ) )

**Beschreibung:** Führt eine Varimax-rotierte Singulärwertzerlegung der Matrix der Dokumentbegriffe durch, um Gruppen von Begriffen zu erzeugen, die Themen genannt werden.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Topic Analysis( Number of Topics( 5 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Rotated SVD( Number of Topics( 5 ) );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Treat Numbers as Words

**Syntax:** obj = Text Explorer(...Treat Numbers as Words( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Betrachtet vollständig aus Ziffern bestehende Wörter als Token. Verfügbar nur bei der Basiswörter-Tokenisierungsmethode.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Basic Words" );
obj << Treat Numbers as Words( 1 );

```

### Validation

**Syntax:** obj << Validation( column )

**Beschreibung:** Eine numerische Spalte mit zwei oder drei verschiedenen Werten. Wenn zwei Werte vorhanden sind, definiert der kleinere Wert den Trainingssatz und der größere Wert den Validierungssatz. Wenn es drei Werte gibt, definieren diese Werte den Trainings-, Validierungs- und Testsatz in der Reihenfolge zunehmender Größe. Wenn es mehr als drei Werte gibt, werden alle bis auf die kleinsten drei ignoriert.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Validation( :School Age Children )
);
obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

### View Web XML

**Syntax:** obj << View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Text Explorer(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

