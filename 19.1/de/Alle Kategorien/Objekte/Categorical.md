# Categorical



## Elementmeldungen

### Agreement Statistic

**Syntax:** obj &lt;&lt; Agreement Statistic( state=0|1 )

**Beschreibung:** Testet, wie eng die Bewerter miteinander übereinstimmen und ob der Mangel an Übereinstimmung symmetrisch ist. Nur bei einer Zielgröße vom Typ Bewerterübereinstimmung verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical(	Rater Agreement( :First Survey, :Second Survey ),	Freq( :Count ),	Agreement Statistic( 0 ));Wait( 1 );obj << Agreement Statistic( 1 );

```

### Aligned Responses

**Syntax:** obj = Categorical(...Aligned Responses( columns )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Fasst Daten mehrerer Spalten mit gleichen Zielgrößenstufen in einem einzelnen Bericht zusammen.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical( Aligned Responses( :First Survey, :Second Survey ), Freq( :Count ) );

```

### Arrange in Rows

**Syntax:** obj &lt;&lt; Arrange in Rows( number )

**Beschreibung:** Ordnet die Berichte so an, dass sie über die Seite verlaufen. Geben Sie die Anzahl von Berichten an, die in jeder Zeile erscheinen sollen.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	Responses( :country ),	Legend( 0 ),	Arrange in Rows( 2 ));Wait( 1 );obj << Arrange in Rows( 1 );

```

### Binomial

**Syntax:** obj &lt;&lt; Binomial( state=0|1 )

**Beschreibung:** Führt einen Chi-Quadrat-Test der Unabhängigkeit von Antwortstufen aus, wobei eine Binomialverteilung für jede Kategorie angenommen wird. Hinweis: Nur bei Mehrfachantworten verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );obj << Homogeneity Test( 1 );

```

### Cell Chisq

**Syntax:** obj &lt;&lt; Cell Chisq( state=0|1 )

**Beschreibung:** Blendet p-Werte für jede Zelle in der Tabelle für einen Chi-Quadrat-Test der Unabhängigkeit ein oder aus. Die p-Werte sind gefärbt und schattiert, je nachdem, ob die Häufigkeit größer oder kleiner als die erwartete Häufigkeit ist.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :size ), Responses( :country ) );obj << Cell Chisq( 1 );

```

### Cell Chisq FDR

**Syntax:** obj &lt;&lt; Cell Chisq FDR( state=0|1 )

**Beschreibung:** Blendet mittels False Discovery Rate (FDR) adjustierte p-Werte für jede Zelle in der Tabelle für einen Chi-Quadrat-Test der Unabhängigkeit ein oder aus. Die FDR-adjustierten p-Werte sind gefärbt und schattiert, je nachdem, ob die Häufigkeit größer oder kleiner als die erwartete Häufigkeit ist.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :size ), Responses( :country ) );obj << Cell Chisq( 1 );

```

### ChiSquare Test Choices

**Syntax:** obj &lt;&lt; ChiSquare Test Choices( "LR und Pearson"|"Nur LR"|"Nur Pearson" )

**Beschreibung:** Gibt an, welche Tests in den Tests auf Homogenität angezeigt werden, entweder Chi-Quadrat des Likelihood-Verhältnisses oder Chi-Quadrat Pearson oder beide. Nur bei einer Zielgröße verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << ChiSquare Test Choices( "Pearson Only" );obj << Test Response Homogeneity( 1 );

```

### Compare Each Cell

**Syntax:** obj &lt;&lt; Compare Each Cell( state=0|1 )

**Beschreibung:** Vergleicht jede Stufe der Zielgröße im Vergleich zu allen anderen Stufen kombiniert über Stufen einer Gruppierungsvariablen.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );obj << Compare Each Cell( 1 );

```

### Compare Each Cell FDR

**Syntax:** obj &lt;&lt; Compare Each Cell FDR( state=0|1 )

**Beschreibung:** Vergleicht jede Stufe der Zielgröße im Vergleich zu allen anderen Stufen kombiniert über Stufen einer Gruppierungsvariablen, mit Adjustierung der False Discovery Rate (FDR).

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );obj << Compare Each Cell FDR( 1 );

```

### Compare Each Sample

**Syntax:** obj &lt;&lt; Compare Each Sample( state=0|1 )

**Beschreibung:** Vergleicht Antworten über Stufen einer Gruppierungsvariablen.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );obj << Compare Each Sample( 1 );

```

### Compare Each Sample FDR

**Syntax:** obj &lt;&lt; Compare Each Sample FDR( state=0|1 )

**Beschreibung:** Vergleicht Zielgrößen auf verschiedenen Stufen einer Gruppierungsvariable mit Adjustierung der False Discovery Rate (FDR).

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );obj << Compare Each Sample FDR( 1 );

```

### Conditional Association

**Syntax:** obj &lt;&lt; Conditional Association( state=0|1 )

**Beschreibung:** Zeigt die Rate für das Vorhandensein einer Antwort in einer Spalte, wenn sich die gleiche Antwort in einer Zeile befindet, an oder blendet sie aus. Nur bei den Modellen vom Typ Mehrfachantwort, Mehrfachantwort mit Trennzeichen und Mehrfachantwort nach ID verfügbar, wenn die Option „Eindeutiges Auftreten innerhalb der ID“ ausgewählt ist.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	ID( :Response ID ),	Unique Occurrences within ID( 1 ),	Structured( :Brush, :Brush Delimited ),	Share Chart( 0 ),	Legend( 0 ),	Conditional Association( 1 ));

```

### Confidence Interval Coverage

**Syntax:** obj = Categorical(...Confidence Interval Coverage( number=0.95 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Legt die Überdeckung der Konfidenzintervalle für die Raten und den Anteil der Antworten fest. Die Überdeckung ist gleich (1-Alpha). Standardmäßig „0.95“.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	X( :Age Group ),	Responses( :I am working on my career ),	Confidence Interval Coverage( 0.99 ),	Share Confidence Interval( 1 ));

```

### Confidence Limits Format

**Syntax:** obj &lt;&lt; Confidence Limits Format( format, &lt;options&gt; )

**Beschreibung:** Formatiert die Konfidenzgrenzen für Anteil und Rate in der Tabelle. Der Standardwert ist „Prozent“, 6, 2.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	X( :Age Group ),	Responses( :I am working on my career ),	Confidence Interval Coverage( 0.99 ),	Share Confidence Interval( 1 ));Wait( 1 );obj << Confidence Limits Format( "Percent", 6, 0 );

```

### Contents Summary

**Syntax:** obj &lt;&lt; Contents Summary( state=0|1 )

**Beschreibung:** Erfasst alle Tests und p-Werte in einem Bericht.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Contents Summary( 1 );

```

### Count Missing Responses

**Syntax:** obj = Categorical(...Count Missing Responses( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Schließt fehlende Werte als Zielgrößenkategorie ein.

```jsl

dt = Open( "$SAMPLE_DATA/Missing Data Pattern.jmp" );Categorical( X( :Trial 1 ), Count Missing Responses( 1 ), Responses( :Trial 4 ) );

```

### Count Test

**Syntax:** obj &lt;&lt; Count Test( state=0|1 )

**Beschreibung:** Führt mittels Poisson-Regression einen Chi-Quadrat-Test der Unabhängigkeit von Raten aus. Hinweis: Nur bei Mehrfachantworten verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );obj << Count Test( 1 );

```

### Crosstab

**Syntax:** obj &lt;&lt; Crosstab( state=0|1 )

**Beschreibung:** Erzeugt eine Kreuztabelle der Häufigkeiten, wobei die Zielgrößenstufen die Spalten und die Gruppierungsvariablenstufen die Zeilen definieren. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Crosstab Transposed( 1 );obj << Crosstab( 1 );

```

### Crosstab Transposed

**Syntax:** obj &lt;&lt; Crosstab Transposed( state=0|1 )

**Beschreibung:** Erzeugt eine Kreuztabelle der Häufigkeiten, wobei die Zielgrößenstufen die Zeilen und die Gruppierungsvariablenstufen die Spalten definieren.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Crosstab Transposed( 1 );

```

### Exclude Nonresponses

**Syntax:** obj &lt;&lt; Exclude Nonresponses( state=0|1 )

**Beschreibung:** Schließt fehlende Werte bei Häufigkeits- und Homogenitätstests aus, wenn Mehrfachantwortkategorien verglichen werden. Leere oder fehlende Zellen werden als fehlende Werte behandelt. Die Verwendung einer eigenen Kategorie für „Sonstige“ wird empfohlen.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	Structured( :"What is your gender ? "n, :"What colors do you like? (with nonresponse)"n ),	Share Chart( 0 ),	Homogeneity Test( 1 ));Wait( 1 );obj << Exclude Nonresponses( 1 );

```

### FDR Adjusted PValues

**Syntax:** obj &lt;&lt; FDR Adjusted PValues( state=0|1 )

**Beschreibung:** False-Discovery-Rate-adjustierte p-Werte (Benjamini und Hochberg, 1995) werden verwendet, wenn es zu viele p-Werte gibt und es für einige Tests einfach wird, rein durch Zufall signifikant zu sein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Structured( :I am working on my career, :Age Group * :Employee Tenure ),	Share Chart( 0 ),	Test Response Homogeneity( 1 ));obj << FDR Adjusted PValues( 1 );

```

### Filter

**Syntax:** obj &lt;&lt; Filter( state=0|1 )

**Beschreibung:** Filtert Daten nach spezifischen Gruppen oder Bereichen lokal.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	Responses( :country ),	Legend( 0 ),	Local Data Filter(		Location( {634, 43} ),		Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),		Add Filter( columns( :sex ), Where( :sex == "Female" ) )	));Wait( 1.0 );obj << Filter( 0 );

```

### Force Crosstab Shading

**Syntax:** obj &lt;&lt; Force Crosstab Shading( state=0|1 )

**Beschreibung:** Verwendet Schattierung in Kreuztabellenberichten, selbst wenn in den globalen Voreinstellungen festgelegt ist, dass keine Schattierung verwendet werden soll. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Force Crosstab Shading( 0 );Wait( 1 );obj << Force Crosstab Shading( 1 );

```

### Force Labels Horizontal

**Syntax:** obj &lt;&lt; Force Labels Horizontal( state=0|1 )

**Beschreibung:** Verwendet horizontale Beschriftungen in der Kreuztabelle unabhängig von der Länge des Texts. Der Beschriftungstext wird umgebrochen und nicht rotiert.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );Wait( 1 );obj << Force Labels Horizontal( 1 );

```

### Format Elements

**Syntax:** obj &lt;&lt; Format Elements

**Beschreibung:** Öffnet ein Fenster, in dem Sie Formate für verschiedene Elemente des Berichts festlegen können.

### Frequencies

**Syntax:** obj &lt;&lt; Frequencies( state=0|1 )

**Beschreibung:** Blendet die Häufigkeitentabelle im Bericht ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	Frequencies( 0 ));Wait( 1 );obj << Frequencies( 1 );

```

### Frequencies Format

**Syntax:** obj &lt;&lt; Frequencies Format( format, &lt;options&gt; )

**Beschreibung:** Formatiert die Häufigkeitswerte in der Tabelle. Der Standardwert ist „Festkomma-Dez.“, 7, 0.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );Wait( 1 );obj << Frequencies Format( "Fixed Dec", 7, 2 );

```

### Frequency Chart

**Syntax:** obj &lt;&lt; Frequency Chart( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Häufigkeiten im Bericht ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Frequency Chart( 1 );

```

### Grouping Option

**Syntax:** obj = Categorical(...Grouping Option( "Kombinationen"|"Jeweils einzeln"|"Beide" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Legt die Gruppierungsmethode für die X-Variablen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Aligned Responses( :country, :size ),	Grouping Option( Each Individually ));

```

### Hide Nonsignificant

**Syntax:** obj &lt;&lt; Hide Nonsignificant( state=0|1 )

**Beschreibung:** Unterdrückt nicht signifikante Berichte.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Grouping Option( Each Individually ),	X( :Age Group, :School Age Children ),	Responses( :I am working on my career ),	Responses( :My home needs some major improvements ),	Responses( :I have vast interests outside of work ),	Responses( :I come from a large family ),	Crosstab Transposed( 1 ),	Test Response Homogeneity( 1 ));obj << Hide Nonsignificant( 1 );

```

### Highlight Cells

**Syntax:** obj &lt;&lt; Highlight Cells

**Beschreibung:** Hebt die Zellen hervor, die die angegebenen Bedingungen erfüllen.

#### Nach Höchstem und Niedrigstem in Tabelle hervorheben

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );Categorical(	ID( :ID ),	X( :clean, :date ),	Multiple Delimited( :failures ),	Share Chart( 1 ),	Highlight Cells( Highest in Table( Freq ), Color( "Green" ) ),	Highlight Cells( Lowest in Table( Freq ), Color( "Purple" ) ));

```

#### Nach höchster Zielgröße und höchster Stichprobe hervorheben

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );obj = dt << Categorical(	Multiple Delimited( :failures ),	ID( :ID ),	X( :clean, :date ),	Highlight Cells( Highest Response( Share ), Color( "Green" ) ),	Highlight Cells( Highest Sample( Share ), Color( "Purple" ) ));

```

#### Nach Kategorie hervorheben

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured( :Position Tenure + :Age Group, :I am working on my career + :Brush ),	Mean Score( 1 ),	Highlight Cells( Share >= 0.5, Color( "Magenta" ), Category( "30-34" ) ),	Highlight Cells( Share >= 0.46, Color( "Green" ), Category( "5 to 10 years" ) ),	Highlight Cells( Share < 0.5, Color( "Blue" ), Category( "Agree" ) ),	Highlight Cells( Mean Score <= 2, Color( "Yellow" ), Category( "25-29" ) ));

```

#### Nach mittlerem Score und Anteil hervorheben

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	X( :Gender, :Age Group ),	Responses( :Job Satisfaction ),	Responses( :I am working on my career ),	Mean Score( 1 ),	Mean Std Error( 1 ),	Mean Confidence Interval( 1 ),	Std Dev Score( 1 ),	Share Chart( 0 ),	Highlight Cells( Mean Score > 2.3, Color( "Blue" ) ),	Highlight Cells( Share >= 0.6, Color( "Cyan" ) ),	Highlight Cells( Share > 0.7, Color( "Green" ) ));

```

#### Nach niedrigster Zielgröße und niedrigster Stichprobe hervorheben

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );obj = dt << Categorical(	Multiple Delimited( :failures ),	ID( :ID ),	X( :clean, :date ),	Highlight Cells( Lowest Response( Share ), Color( "Green" ) ),	Highlight Cells( Lowest Sample( Share ), Color( "Purple" ) ));

```

#### Nach Spalte hervorheben

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured( :Position Tenure + :Age Group, :I am working on my career + :Brush ),	Mean Score( 1 ),	Highlight Cells( Share >= 0.5, Column( :Age Group ) ),	Highlight Cells( Share >= 0.46, Color( "Fuchsia" ), Column( :Brush ) ));

```

### Homogeneity Test

**Syntax:** obj &lt;&lt; Homogeneity Test( state=0|1 )

**Beschreibung:** Führt einen Chi-Quadrat-Test der Unabhängigkeit von Antwortstufen aus, wobei eine Binomialverteilung für jede Kategorie angenommen wird. Hinweis: Nur bei Mehrfachantworten verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );obj << Homogeneity Test( 1 );

```

### Include Response Categories in Excluded Rows

**Syntax:** obj = Categorical(...Include Response Categories in Excluded Rows( state=0|1 )...)

**Beschreibung:** Gibt an, dass der Bericht Zielgrößenkategorien einschließt, die nur in ausgeschlossenen Zeilen erscheinen. Die Anzahl für diese Kategorien ist null.

**JMP Version hinzugefügt:** 15

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Select Where( :size == "Small" );dt << Exclude;obj = Categorical(	Include Response Categories in Excluded Rows( 1 ),	X( :marital status ),	Responses( :size ));

```

### Include Responses Not in Data

**Syntax:** obj = Categorical(...Include Responses Not in Data( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Zeigt Zielgrößenkategorien mit Wertbeschriftungen an, auch wenn diese nicht in den Daten vorkommen.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );:type << Set Property(	Value Labels,	{"Family" = "Family", "Sporty" = "Sporty", "Utility" = "SUV", "Work" = "Work"});obj = Categorical( X( :marital status ), Responses( :type ) );obj << Include Responses Not in Data( 1 );

```

### Indicator Group

**Syntax:** obj = Categorical(...Indicator Group( columns )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Fasst Daten einer Mehrfachantwortvariablen zusammen, wobei sich die Antworten in mehreren Indikatorspalten befinden.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Indicators.jmp" );obj = dt << Categorical(	X( :clean, :date ),	Indicator Group(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	));

```

### Mean Confidence Interval

**Syntax:** obj &lt;&lt; Mean Confidence Interval( state=0|1 )

**Beschreibung:** Zeigt das Konfidenzintervall für die Mittelwerte an oder blendet es aus

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Confidence Interval( 1 );

```

### Mean Score

**Syntax:** obj &lt;&lt; Mean Score( state=0|1 )

**Beschreibung:** Zeigt den mittleren Score basierend auf numerischen Rohcodes oder Wert-Scores in der Kreuztabelle an.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score( 1 );

```

### Mean Score Comparisons

**Syntax:** obj &lt;&lt; Mean Score Comparisons( state=0|1 )

**Beschreibung:** Vergleicht den mittleren Score über Gruppierungskategorien.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score Comparisons( 1 );

```

### Mean Score Comparisons FDR

**Syntax:** obj &lt;&lt; Mean Score Comparisons FDR( state=0|1 )

**Beschreibung:** Vergleicht den mittleren Score über Gruppierungskategorien.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score Comparisons FDR( 1 );

```

### Mean Score Comparisons as Suffix

**Syntax:** obj &lt;&lt; Mean Score Comparisons as Suffix( state=0|1 )

**Beschreibung:** Vergleicht den mittleren Score über Gruppierungskategorien.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score Comparisons Suffixed( 1 );

```

### Mean Std Error

**Syntax:** obj &lt;&lt; Mean Std Error( state=0|1 )

**Beschreibung:** Zeigt den Standardfehler für die Mittelwerte an oder blendet ihn aus

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Std Error( 1 );

```

### Means Format

**Syntax:** obj &lt;&lt; Means Format( format, &lt;options&gt; )

**Beschreibung:** Formatiert die mittleren Scores in der Tabelle. Der Standardwert ist „Fixiert“, 6, 2.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score( 1 );Wait( 1 );obj << Means Format( "Fixed", 6, 4 );

```

### Multiple Delimited

**Syntax:** obj = Categorical(...Multiple Delimited( column )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Fasst Daten einer Mehrfachantwortvariablen zusammen, wobei sich die Antworten in einer einzelnen Spalte befinden und jede Antwort durch Komma, Semikolon oder Tabstopp getrennt ist.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );obj = dt << Categorical( Multiple Delimited( :failureS ), ID( :ID ), X( :clean, :date ) );

```

### Multiple Response

**Syntax:** obj = Categorical(...Multiple Response( columns )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Fasst Daten einer Mehrfachantwortvariablen zusammen, wobei jede mögliche Antwort in einer eigenen Spalte aufgezeichnet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3MultipleField.jmp" );obj = dt << Categorical(	X( :clean, :date ),	Multiple Response( :Failure1, :Failure2, :Failure3 ),	Frequency Chart( 0 ));

```

### Multiple Response by ID

**Syntax:** obj = Categorical(...Multiple Response by ID( column )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Fasst Daten einer Mehrfachantwortvariablen zusammen, wobei es eine einzelne Spalte mit Antworten und eine zweite Spalte mit einer ID für das Subjekt gibt.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));

```

### Order Response Levels High to Low

**Syntax:** obj = Categorical(...Order Response Levels High to Low( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Ordnet den Bericht neu, so dass sich Kategorien mit dem höchsten Wert oben befinden.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Order Response Levels High to Low( 1 ),	Responses( :country ));

```

### Order by Significance

**Syntax:** obj &lt;&lt; Order by Significance( state=0|1 )

**Beschreibung:** Ordnet die Berichte neu, so dass sich die signifikantesten Berichte oben befinden.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Grouping Option( Each Individually ),	X( :Age Group, :School Age Children ),	Responses( :I am working on my career ),	Responses( :My home needs some major improvements ),	Responses( :I have vast interests outside of work ),	Responses( :I come from a large family ),	Crosstab Transposed( 1 ),	Test Response Homogeneity( 1 ));obj << Order by Significance( 1 );

```

### Poisson

**Syntax:** obj &lt;&lt; Poisson( state=0|1 )

**Beschreibung:** Führt mittels Poisson-Regression einen Chi-Quadrat-Test der Unabhängigkeit von Raten aus. Hinweis: Nur bei Mehrfachantworten verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );obj << Count Test( 1 );

```

### Rate Confidence Interval

**Syntax:** obj &lt;&lt; Rate Confidence Interval( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt das Konfidenzintervall für die Ratenwahrscheinlichkeit. Das Konfidenzintervall ist ein normalverteiltes Intervall, das die Standardfehler aus dem linearen Poisson-Modell verwendet.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Gender ), Multiple Delimited( :Brush Delimited ) );obj << Rate Confidence Interval( 1 );

```

### Rate Per Case

**Syntax:** obj &lt;&lt; Rate Per Case( state=0|1 )

**Beschreibung:** Blendet die Tabelle mit der Rate pro Fall im Bericht ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ),	Rate Per Case( 0 ));Wait( 1 );obj << Rate Per Case( 1 );

```

### Rate per Case Responding

**Syntax:** obj &lt;&lt; Rate per Case Responding( state=0|1 )

**Beschreibung:** Blendet die Antwortrate pro antwortendem Fall (ausschließlich fehlende) ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));obj << Rate Per Case Responding( 1 );

```

### Rater Agreement

**Syntax:** obj = Categorical(...Rater Agreement( columns )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Fasst Daten mehrerer Spalten zusammen, wobei jede Spalte eine Bewertung für die gleiche Frage oder das gleiche Element ist, die jedoch von unterschiedlichen Individuen gegeben wurde (Bewerter).

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical( Rater Agreement( :First Survey, :Second Survey ), Freq( :Count ) );

```

### Relative Risk

**Syntax:** obj &lt;&lt; Relative Risk( state=0|1, {}, {level of interest} )

**Beschreibung:** Zeigt die relativen Risiken für eine zweistufige Gruppierungsvariable für jede Stufe der Zielgröße an oder blendet sie aus. Verfügbar, wenn die Gruppierungsvariable zwei Stufen hat und entweder die Zielgröße zwei Stufen hat oder es sich um eine Mehrfachantwort handelt und „Eindeutiges Auftreten innerhalb der ID“ ausgewählt ist.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = dt << Categorical(	Response Frequencies(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect,	),	Sample Size( :SampleSize ),	X( :clean ));obj << Relative Risk( 1, {}, {"after"} );

```

### Repeated Measures

**Syntax:** obj = Categorical(...Repeated Measures( columns )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Fasst Daten mehrerer Spalten zusammen, wobei jede Spalte Antworten auf die gleiche Frage zu unterschieden Zeitpunkten enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical( Repeated Measures( :First Survey, :Second Survey ), Freq( :Count ) );

```

### Response Frequencies

**Syntax:** obj = Categorical(...Response Frequencies( columns )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Fasst eine Mehrfachantwortvariable zusammen, wobei die Häufigkeit jeder möglichen Antwort in einer eigenen Spalte aufgezeichnet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = dt << Categorical(	Response Frequencies(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	),	X( :clean, :date ),	Sample Size( :SampleSize ));

```

### Response Levels

**Syntax:** obj &lt;&lt; Response Levels( state=0|1 )

**Beschreibung:** Zeigt Datenstufen für jede Zielgröße an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Response Levels( 0 );Wait( 1 );obj << Response Levels( 1 );

```

### Responses

**Syntax:** obj = Categorical(...Responses( column )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Fasst Zielgrößen einer einzelnen Spalte zusammen. Wenn mehrere Spalten ausgewählt werden, enthält der kategoriale Bericht einen separaten Bericht für jede einzelne Spalte.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Save Contingency Table

**Syntax:** obj &lt;&lt; Save Contingency Table

**Beschreibung:** Speichert die Werte in der Kreuztabelle in einer neuen Datentabelle. Die neue Tabelle verwendet die ursprünglichen Spaltennamen.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save Contingency Table;

```

### Save DocX File

**Syntax:** obj &lt;&lt; Save DocX File

**Beschreibung:** Undocumented and Experimental Feature

### Save Excel File

**Syntax:** obj &lt;&lt; Save Excel File

**Beschreibung:** Speichert die Tabellen in einer Excel-Tabellenkalkulationsdatei.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save Excel File(	"$DOCUMENTS\ExcelCarSize.xlsx",	Separate Rows for Each Cell Statistic( 1 ));

```

### Save Frequencies

**Syntax:** obj &lt;&lt; Save Frequencies

**Beschreibung:** Speichert die Häufigkeiten in einer neuen Tabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Frequencies;

```

### Save Mean Scores

**Syntax:** obj &lt;&lt; Save Mean Scores

**Beschreibung:** Speichert die mittleren Scores für jede Teilgruppe in einer neuen Tabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save Mean Scores;

```

### Save Rate Per Case

**Syntax:** obj &lt;&lt; Save Rate Per Case

**Beschreibung:** Speichert die Rate pro Fall in einer neuen Tabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));obj << Rate Per Case( 1 );obj << Save Rate Per Case;

```

### Save Share of Responses

**Syntax:** obj &lt;&lt; Save Share of Responses

**Beschreibung:** Speichert den Anteil der Antwortvariablen in einer neuen Tabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Share of Responses;

```

### Save Stacked Table

**Syntax:** obj &lt;&lt; Save Stacked Table

**Beschreibung:** Speichert die Werte in der Kreuztabelle in einer neuen Datentabelle. Die neue Tabelle verwendet allgemeine Spaltennamen.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save Stacked Table;

```

### Save Test Homogeneity

**Syntax:** obj &lt;&lt; Save Test Homogeneity

**Beschreibung:** Speichert die Ergebnisse der Tests auf Homogenität in einer neuen Tabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Test Homogeneity;

```

### Save Test Rates

**Syntax:** obj &lt;&lt; Save Test Rates

**Beschreibung:** Speichert die Ergebnisse der Option „Mehrfachantwort testen“ in einer neuen Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));obj << Rate Per Case( 1 );obj << Save Test Rates;

```

### Save Transposed Frequencies

**Syntax:** obj &lt;&lt; Save Transposed Frequencies

**Beschreibung:** Speichert die transponierten Häufigkeiten in einer neuen Tabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Transposed Frequencies;

```

### Save Transposed Rate Per Case

**Syntax:** obj &lt;&lt; Save Transposed Rate Per Case

**Beschreibung:** Speichert die transponierte Rate pro Fall in einer neuen Tabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));obj << Rate Per Case( 1 );obj << Save Transposed Rate Per Case;

```

### Save Transposed Share of Responses

**Syntax:** obj &lt;&lt; Save Transposed Share of Responses

**Beschreibung:** Speichert den transponierten Anteil der Antwortvariablen in einer neuen Tabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Transposed Share of Responses;

```

### Save tTests and pValues

**Syntax:** obj &lt;&lt; Save tTests and pValues

**Beschreibung:** Speichert t-Tests und p-Werte von den Mittelwertvergleichstests in einer neuen Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save ttests and pvalues;

```

### Share Chart

**Syntax:** obj &lt;&lt; Share Chart( state=0|1 )

**Beschreibung:** Blendet das Anteilsdiagramm im Bericht ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	Share Chart( 0 ));Wait( 1 );obj << Share Chart( 1 );

```

### Share Confidence Interval

**Syntax:** obj &lt;&lt; Share Confidence Interval( state=0|1 )

**Beschreibung:** Zeigt oder verbirgt das Konfidenzintervall für den Anteil der Antwortwahrscheinlichkeit. Das Konfidenzintervall wird mit der Wilson-Score-Testmethode erstellt.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );obj << Share Confidence Interval( 1 );

```

### Share Of Responses

**Syntax:** obj &lt;&lt; Share Of Responses( state=0|1 )

**Beschreibung:** Blendet die Tabelle mit dem Anteil der Antwortvariablen im Bericht ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	Share of Responses( 0 ));Wait( 1 );obj << Share of Responses( 1 );

```

### Shares and Rates Format

**Syntax:** obj &lt;&lt; Shares and Rates Format( format, &lt;options&gt; )

**Beschreibung:** Formatiert die Werte für Anteil, Rate und Rate pro Antwort in der Tabelle. Der Standardwert ist „Prozent“, 6, 1.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );Wait( 1 );obj << Shares and Rates Format( "Percent", 7, 2 );

```

### Shorten Labels

**Syntax:** obj = Categorical(...Shorten Labels( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Kürzt Beschriftungen durch Entfernen gemeinsamer Präfixe und Suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Age Range",	Numeric,	"Continuous",	Formula( :age > 12 ),	Value Labels( {0 = "Age Range: Adolescent", 1 = "Age Range: Teenager"} ));obj = dt << Categorical( Responses( :Age Range ), Legend( 0 ) );Wait( 2 );obj << Shorten Labels( 1 );

```

### Show Columns Used in Report

**Syntax:** obj &lt;&lt; Show Columns Used in Report( state=0|1 )

**Beschreibung:** Zeigt Informationen zu im Bericht verwendeten Spalten an oder blendet sie aus. Diese Option betrifft nur Spalten, die einen SPSS-oder SAS-Namen oder die Spalteneigenschaft SAS-Beschriftung haben.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );:country << Set Property( "SAS Label", "Country of Manufacture Origin" );obj = Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Show Columns Used in Report( 1 );

```

### Show Highlight Legend

**Syntax:** obj &lt;&lt; Show Highlight Legend( state=0|1 )

**Beschreibung:** Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Structured( :Position Tenure + :Age Group, :I am working on my career + :Brush ),	Mean Score( 1 ),	Highlight Cells( Share >= 0.8 ),	Highlight Cells( Mean Score >= 2.7, Color( "Blue" ) ));obj << Show Highlight Legend( 0 );Wait( 1 );obj << Show Highlight Legend( 1 );

```

### Show Supercategories

**Syntax:** obj &lt;&lt; Show Supercategories( state=0|1 )

**Beschreibung:** Blendet Superkategorien ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	X( :"What is your gender ? "n, :"How old are you ? "n ),	Responses( :I like the color orange. ),	Supercategories(		:I like the color orange.(			{Group( "Positive Response", {"Neutral", "Agree", "Strongly agree"} )}		)	),	Legend( 0 ));obj << Show Supercategories( 0 );Wait( 1 );obj << Show Supercategories( 1 );

```

### Show Warnings

**Syntax:** obj &lt;&lt; Show Warnings( state=0|1 )

**Beschreibung:** Zeigt Warnungen für Chi-Quadrat-Tests in Zusammenhang mit kleiner Stichprobengröße an.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Structured( :I am working on my career, :Age Group * :Employee Tenure ),	Share Chart( 0 ),	Test Response Homogeneity( 1 ));obj << Show Warnings( 1 );

```

### Std Dev Format

**Syntax:** obj &lt;&lt; Std Dev Format( format, &lt;options&gt; )

**Beschreibung:** Formatiert die Standardabweichungs-Scores in der Tabelle. Der Standardwert ist „Fixiert“, 6, 2.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Std Dev Score( 1 );Wait( 1 );obj << Std Dev Format( "Fixed", 6, 4 );

```

### Std Dev Score

**Syntax:** obj &lt;&lt; Std Dev Score( state=0|1 )

**Beschreibung:** Zeigt den Standardabweichungs-Score basierend auf numerischen Rohcodes oder Wert-Scores in der Kreuztabelle an.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Std Dev Score( 1 );

```

### Structured

**Syntax:** obj = Categorical(...Structured( Column * nestedColumn ... + rightColumn, sideColumn + lowerColumns... )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Erzeugt eine strukturierte Kreuztabelle aus zwei oder mehr Variablen.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Structured( :Gender * :Age Group + :Position Tenure, :Job Satisfaction + :Salary Group ));

```

### Supercategories

**Syntax:** obj &lt;&lt; Supercategories( column, ({Group (name, {level1, level2, ... levelN})}) )

**Beschreibung:** Gibt Superkategorien an, um Antwortkategorien lokal zu aggregieren.

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	X( :"What is your gender ? "n, :"How old are you ? "n ),	Responses( :I like the color orange. ),	Supercategories(		:I like the color orange.(			{Group( "Positive Response", {"Neutral", "Agree", "Strongly agree"} )}		)	),	Legend( 0 ));

```

### Test Response Homogeneity

**Syntax:** obj &lt;&lt; Test Response Homogeneity( state=0|1 )

**Beschreibung:** Testet die Zielgrößenspalte auf Homogenität und führt die Chi-Quadrat-Tests für das Likelihood-Verhältnis und nach Pearson durch. Nur bei einer Zielgrößenvariablen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Test Response Homogeneity( 1 );

```

### Total Cases

**Syntax:** obj &lt;&lt; Total Cases( state=0|1 )

**Beschreibung:** Zeigt bei Mehrfachantwortvariablen die Gesamtanzahl der Fälle in der Kreuztabelle an. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	X( :"What is your gender ? "n, :"How old are you ? "n ),	Multiple Response(		:I like the color blue., :I like the color red., :I like the color orange.	));obj << Total Cases( 0 );Wait( 1 );obj << Total Cases( 1 );

```

### Total Cases Responding

**Syntax:** obj &lt;&lt; Total Cases Responding( state=0|1 )

**Beschreibung:** Zeigt bei Mehrfachantwortvariablen die Gesamtanzahl der Fälle, die mindestens einmal geantwortet haben, in der Kreuztabelle an. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	X( :"What is your gender ? "n, :"How old are you ? "n ),	Multiple Response(		:I like the color blue., :I like the color red., :I like the color orange.	));obj << Total Cases Responding( 0 );Wait( 1 );obj << Total Cases Responding( 1 );

```

### Total Responses

**Syntax:** obj &lt;&lt; Total Responses( state=0|1 )

**Beschreibung:** Zeigt die Gesamtanzahl der Antworten in der Kreuztabelle an. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Total Responses( 0 );Wait( 1 );obj << Total Responses( 1 );

```

### Totals First

**Syntax:** obj &lt;&lt; Totals First( state=0|1 )

**Beschreibung:** Zeigt die Zielgrößensummen oben oder links in der Kreuztabelle an, jedoch nur, wenn die Summen in mehreren Tabellen in jeder Spalte gleich sind.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Categorical(	Structured(		:Single Status + :School Age Children,		:Employee Tenure + :Position Tenure + :Age Group	),	Frequencies( 0 ),	Totals First( 1 ),	Total Responses( 0 ));

```

### Transition Report

**Syntax:** obj &lt;&lt; Transition Report( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der anzeigt, wie sich die Kategorien über die Zeit verändert haben. Nur verfügbar bei einem Modell vom Typ Messwiederholungen. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical( Repeated Measures( :First Survey, :Second Survey ), Freq( :Count ) );obj << Transition Report( 1 );

```

### Transposed Freq Chart

**Syntax:** obj &lt;&lt; Transposed Freq Chart( state=0|1 )

**Beschreibung:** Blendet ein transponiertes Diagramm der Häufigkeiten ein oder aus, das eine Spalte für jede Zielgrößenstufe und horizontale Zeilen für die verschiedenen Stichprobenstufen enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :marital status ), Responses( :country ) );obj << Transposed Freq Chart( 1 );

```

### Unique Occurrences within ID

**Syntax:** obj = Categorical(...Unique Occurrences within ID( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Richtet Mehrfachantworten mit derselben ID über Zeilen aus.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ),	Unique occurrences within ID( 1 ),	Multiple Response by ID( :failure ));

```

## Freigegebene Elementmeldungen

### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

#### Anonyme Voreinstellung

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### In Ordner(n) suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Nach Name suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Timing;Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Categorical(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Spalten

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	Freq( :_freqcol ));

```

### Grouping Category

**Syntax:** obj &lt;&lt; Grouping Category( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### ID

**Syntax:** obj &lt;&lt; ID( column )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Sample Size

**Syntax:** obj &lt;&lt; Sample Size( column )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### X

**Syntax:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

## Zugehörige Konstruktoren

### Categorical

**Syntax:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**Beschreibung:** Fasst kategoriale Zielgrößendaten zusammen und analysiert sie. Daten können einfache Zielgrößen, Mehrfachantworten, Messwiederholungen, Bewerterübereinstimmung, ausgerichtete Zielgrößen oder freier Text sein. Umfasst die Möglichkeit, benutzerdefinierte Kreuztabellen von Zielgrößen zu erzeugen.

#### Ausgerichtete Zielgrößen

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		Empty(),		Empty(),		Aligned Responses(			:I am working on my career, :I want to see the world,			:My home needs some major improvements, :I have vast interests outside of work,			:I want to get my debt under control, :I come from a large family		)	));

```

#### Bewerterübereinstimmung

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );Categorical( Rater Agreement( :A, :B, :C ) );

```

#### Drei Zielgrößen nach zwei einzelnen Faktoren (strukturiert)

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		:I am working on my career + :I want to see the world,		:Gender + :Single Status + :Age Group	));

```

#### Eine Zielgröße nach zwei geschachtelten Faktoren

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

#### Geschachtelt innerhalb einzelner Faktoren

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		:Single Status * :Gender + :School Age Children * :Gender,		:I am working on my career + :I want to see the world	));

```

#### Mehrfachantwort (strukturiert)

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical( Structured( :Gender, :Brush Delimited + :Floss Delimited ) );

```

#### Mehrfachantwort mit geschachtelten Gruppen

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3MultipleField.jmp" );Categorical( X( :clean, :date ), Multiple Response( :Failure1, :Failure2, :Failure3 ) );

```

#### Messwiederholungen

```jsl

dt = Open( "$SAMPLE_DATA/Presidential Elections.jmp" );Categorical(	Repeated Measures(		:"1980 Winner"n, :"1984 Winner"n, :"1988 Winner"n, :"1992 Winner"n, :"1996 Winner"n,		:"2000 Winner"n, :"2004 Winner"n, :"2008 Winner"n, :"2012 Winner"n	));

```

