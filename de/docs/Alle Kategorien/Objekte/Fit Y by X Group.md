# Fit Y by X Group



## Bivariate > Bivariate Curve

### Elementmeldungen

#### Confid Curves Fit

**Syntax:** obj << ( Curve[number] << Confid Curves Fit( state=0|1 ) ); 

obj << Fit Name( {Confid Curves Fit( state=0|1 )} )

**Beschreibung:** Zeigt die Konfidenzkurven der angepassten Geraden an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Confid Curves Indiv

**Syntax:** obj << ( Curve[number] << Confid Curves Indiv( state=0|1 ) ); 

obj << Fit Name( {Confid Curves Indiv( state=0|1 )} )

**Beschreibung:** Zeigt die Konfidenzkurven eines einzelnen Vorhersagewerts an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Indiv( 1 ));

```

#### Confid Shaded Fit

**Syntax:** obj << ( Curve[number] << Confid Shaded Fit( state=0|1 ) ); 

obj << Fit Name( {Confid Shaded Fit( state=0|1 )} )

**Beschreibung:** Schattiert den Bereich zwischen den Konfidenzkurven und der angepassten Funktion.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Confid Shaded Fit( 1 )} );
Wait( 1 );
obj << (curve[1] << Confid Shaded Fit( 0 ));

```

#### Confid Shaded Indiv

**Syntax:** obj << ( Curve[number] << Confid Shaded Indiv( state=0|1 ) ); 

obj << Fit Name( {Confid Shaded Indiv( state=0|1 )} )

**Beschreibung:** Schattiert den Bereich zwischen den Konfidenzkurven für einen einzelnen Vorhersagewert und der angepassten Funktion.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv( 1 ), Confid Shaded Indiv( 1 )} );
Wait( 1 );
obj << (curve[1] << Confid Shaded Indiv( 0 ));

```

#### Indiv Confidence Limit Formula

**Syntax:** obj << ( Curve[number] << Indiv Confidence Limit Formula( <alpha> ) ); 

obj << Fit Name( {Indiv Confidence Limit Formula( <alpha> ) )

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Erzeugt Spalten für die unteren und oberen Konfidenzgrenzen und für eine einzelne Vorhersage, die Funktionen der Regressoren sind. Die Voreinstellung für das Niveau Alpha ist 0,05, womit 95%-Konfidenzgrenzen erstellt werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));
Wait( 1 );
obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

#### Line Color

**Syntax:** obj << ( Curve[number] << Line Color( "color" ) ); 

obj << Fit Name( {Line Color( "color" )} ) 

obj << Density Ellipse( {Line Color( "color" )} )

**Beschreibung:** Ändert die Linienfarbe der angepassten Geraden, Konfidenzkurven und schattierter Konfidenzbereiche.

**Beispiel für Normalellipse**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

**Kurvenbeispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

#### Line Style

**Syntax:** obj << ( Curve[number] << Line Style( "pen style" ) ); 

obj << Fit Name( {Line Styel( "pen style" )} ) 

obj << Density Ellipse( {Line Style( "pen style" )} )

**Beschreibung:** Ändert die Linienart der angepassten Geraden.

**Beispiel für Normalellipse**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

**Kurvenbeispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

#### Line Width

**Syntax:** obj << ( Curve[number] << Line Width( number ) ); 

obj << Fit Name( {Line Width( number )} ) 

obj << Density Ellipse( {Line Width( number )} )

**Beschreibung:** Ändert die Linienbreite der angepassten Geraden und aller Konfidenzkurven.

**Beispiel für Normalellipse**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.99, {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

**Kurvenbeispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

#### Line of Fit

**Syntax:** obj << ( Curve[number] << Line of Fit( state=0|1 ) ); 

obj << Fit Name( {Line of Fit( state=0|1 )} ) 

obj << Density Ellipse( {Line of Fit( state=0|1 )} )

**Beschreibung:** Zeigt die angepasste Gerade an oder blendet sie aus. Standardmäßig ein.

**Beispiel für Normalellipse**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

**Kurvenbeispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

#### Mean Confidence Limit Formula

**Syntax:** obj << ( Curve[number] << Mean Confidence Limit Formula( <alpha> ) ); 

obj << Fit Name( {Mean Confidence Limit Formula( <alpha> ) )

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Erzeugt Spalten für die unteren und oberen Konfidenzgrenzen und für den Erwartungswert der Zielgröße, die Funktionen der Regressoren sind. Die Voreinstellung für das Niveau Alpha ist 0,05, womit 95%-Konfidenzgrenzen erstellt werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));
Wait( 1 );
obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

#### Plot Residuals

**Syntax:** obj << ( Curve[number] << Plot Residuals( state=0|1 ) ); 

obj << Fit Name( {Plot Residuals( state=0|1 )} )

**Beschreibung:** Zeigt fünf Diagnosediagramme an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1, {Plot Residuals( 1 )} );
Wait( 1 );
obj << (curve[1] << Plot Residuals( 0 ));

```

#### Profiler

**Syntax:** obj << ( Curve[number] << Profiler( state=0|1 ) ); 

obj << Fit Name( {Profiler( state=0|1 )} )

**Beschreibung:** Blendet eine Vorhersageanalyse für das ausgewählte Ergebnis mit dem ausgewählten Prädiktor und dem angegebenen Modell ein oder aus.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Profiler( 1 )} );
Wait( 1 );
obj << (Curve[1] << Profiler( 0 ));

```

#### Remove Fit

**Syntax:** obj << ( Curve[number] << Remove Fit )

**Beschreibung:** Entfernt die angepasste Kurve.

**Beispiel für Normalellipse**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );
obj << Density Ellipse( 0.90 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

**Kurvenbeispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

#### Report

**Syntax:** obj << ( Curve[number] << Report( state=0|1 ) ); 

obj << Fit Name( {Report( state=0|1 )} ) 

obj << Density Ellipse( {Report( state=0|1 )} )

**Beschreibung:** Zeigt die Berichte für Übersicht der Anpassung, Lack of Fit, ANOVA and Parameterschätzer an oder blendet sie aus. Standardmäßig ein.

**Beispiel für Normalellipse**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

**Kurvenbeispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

#### Save Predicteds

**Syntax:** obj << ( Curve[number] << Save Predicteds ); 

obj << Fit Name( {Save Predicteds} )

**Beschreibung:** Speichert eine neue Spalte in der ursprünglichen Datentabelle. Die Spalte enthält die Vorhersagewerte für die angegebene angepasste Kurve.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Save Predicteds} );
Wait( 1 );
obj << Fit Line( 1 );
obj << (curve[2] << Save Predicteds);

```

#### Save Residuals

**Syntax:** obj << ( Curve[number] << Save Residuals ); 

obj << Fit Name( {Save Residuals} )

**Beschreibung:** Speichert eine neue Spalte in der ursprünglichen Datentabelle. Die Spalte enthält die Residuenwerte für die angegebene angepasste Kurve.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Residuals);
Wait( 1 );
obj << Fit Line( {Save Residuals} );

```

#### Save Studentized Residuals

**Syntax:** obj << ( Curve[number] << Save Studentized Residuals ); 

obj << Fit Name( {Save Studentized Residuals} )

**Beschreibung:** Speichert eine neue Spalte in der ursprünglichen Datentabelle. Die Spalte enthält die studentisierten Residuen für die angegebene angepasste Kurve.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Studentized Residuals);
Wait( 1 );
obj << Fit Line( {Save Studentized Residuals} );

```

#### Set Alpha Level

**Syntax:** obj << ( Curve[number] << Set Alpha Level( alpha ) ); 

obj << Fit Name( {Set Alpha Level( alpha )} )

**Beschreibung:** Ändert das Alpha-Niveau für die Konfidenzkurven.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );
obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << (curve[2] << Set Alpha Level( 0.01 ));

```

#### Set α Level

**Syntax:** obj << ( Curve[number] << Set Alpha Level( alpha ) ); 

obj << Fit Name( {Set Alpha Level( alpha )} )

**Beschreibung:** Ändert das Alpha-Niveau für die Konfidenzkurven.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );
obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << (curve[2] << Set Alpha Level( 0.01 ));

```

### Zugehörige Konstruktoren

#### Curve

**Syntax:** obj << ( Curve[number] )

**Beschreibung:** Greift auf eine Einzelkurve zu, um weitere Meldungen an diese zu leiten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ), Fit Line );
obj << (curve[1] << Line of Fit( 1 ));
Wait( 1 );
obj << (curve[1] << Line of Fit( 0 ));

```

## Bivariate > Bivariate Nonpar Density

### Elementmeldungen

#### 5% Contours

**Syntax:** obj << ( Curve[number] << "5% Contours"n( state=0|1 ) ); 

obj << Nonpar Density( {"5% Contours"n( state=0|1 )} )

**Beschreibung:** Zeigt die 5% Konturlinien an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {"5% Contours"n( 0 )} );
Wait( 1 );
obj << (curve[1] << "5% Contours"n( 1 ));

```

#### Color By Density Quantile

**Syntax:** obj << ( Curve[number] << Color By Density Quantile ); 

obj << Nonpar Density( {Color by Density Quantile} )

**Beschreibung:** Färbt die Punkte und Zeilen entsprechend der Dichte.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
Wait( 1 );
obj << (curve[1] << Color By Density Quantile);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Color By Density Quantile} );

```

#### Color Theme

**Syntax:** obj << ( Curve[number] << Color Theme( "theme"(state=0|1 ) ) ); 

obj << Nonpar Density( {Color Theme( "theme"( state=0|1 ) )} )

**Beschreibung:** Legt das Farbschema für die Konturlinien der Quantildichte fest.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Color Theme( "Jet"(1) ));

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Color Theme( "White to Black"(1) )} );

```

#### Contour Fill

**Syntax:** obj << ( Curve[number] << Contour Fill( state=0|1 ) ); 

obj << Nonpar Density( {Contour Fill( state=0|1 )} )

**Beschreibung:** Zeigt die gefüllten Konturen an oder blendet sie aus.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density( {Contour Lines( 0 )} ) );
obj << (curve[1] << Contour Fill( 1 ));

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Contour Fill( 1 )} );

```

#### Contour Lines

**Syntax:** obj << ( Curve[number] << Contour Lines( state=0|1 ) ); 

obj << Nonpar Density( {Contour Lines( state=0|1 )} )

**Beschreibung:** Zeigt die Konturlinien an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Contour Lines( 0 )} );
Wait( 1 );
obj << (curve[1] << Contour Lines( 1 ));

```

#### Kernel Control

**Syntax:** obj << ( Curve[number] << Kernel Control( state=0|1 ) ); 

obj << Nonpar Density( {Kernel Control( state=0|1 )} )

**Beschreibung:** Zeigt einen Schieberegler an oder blendet ihn aus, um die Standardabweichung für jede Variable festzulegen. Die Standardabweichung definiert den Bereich von X- und Y-Werten zum Bestimmen der Dichte von Konturlinien.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Kernel Control( 1 )} );
Wait( 1 );
obj << (curve[1] << Kernel Control( 0 ));

```

#### Mesh Plot

**Syntax:** obj << ( Curve[number] << Mesh Plot( state=0|1 ) ); 

obj << Nonpar Density( {Mesh Plot( state=0|1 )} )

**Beschreibung:** Zeigt ein dreidimensionales Diagramm der Dichte über einem Raster aus zwei Analysevariablen an oder blendet es aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Mesh Plot( 1 )} );
Wait( 1 );
obj << (curve[1] << Mesh Plot( 0 ));

```

#### Modal Clustering

**Syntax:** obj << ( Curve[number] << Modal Clustering( state=0|1 ) ); 

obj << Nonpar Density( {Modal Clustering( state=0|1 )} )

**Beschreibung:** Zeigt die Ergebnisse für ein modales Clustern der Daten an oder blendet sie aus. Dabei werden Clusterzuweisungen basierend auf den aktuellen Konturen identifiziert. Diese Option speichert auch die Clusternummern in einer neuen Spalte in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Modal Clustering( 1 )} );
Wait( 1 );
obj << (curve[1] << Modal Clustering( 0 ));

```

#### Remove Fit

**Syntax:** obj << ( Curve[number] << Remove Fit )

**Beschreibung:** Entfernt die nichtparametrische Dichte.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density();
Wait( 1 );
obj << (curve[1] << Remove Fit);

```

#### Report

**Syntax:** obj << ( Curve[number] << Report( state=0|1 ) ); 

obj << Nonpar Density( {Report( state=0|1 )} )

**Beschreibung:** Zeigt den Bericht der Dichtekonturlinien für Quantile an oder blendet ihn aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Report( 0 )} );
Wait( 1 );
obj << (curve[1] << Report( 1 ));

```

#### Save Density Grid

**Syntax:** obj << ( Curve[number] << Save Density Grid ); 

obj << Nonpar Density( {Save Density Grid} )

**Beschreibung:** Speichert Spalten in einer neuen Datentabelle. Die Spalten enthalten die Dichteschätzer und entsprechenden Quantile.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Save Density Grid} );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Save Density Grid);

```

#### Save Density Quantile

**Syntax:** obj << ( Curve[number] << Save Density Quantile ); 

obj << Nonpar( {Save Density Quantile} )

**Beschreibung:** Speichert eine Spalte in der ursprünglichen Datentabelle. Die Spalte enthält einen Wert, der das Dichtequantil darstellt, das jeden Punkt enthält.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Save Density Quantile);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Save Density Quantile} );

```

#### Select Points by Density

**Syntax:** obj << ( Curve[number] << Select Points by Density( lower probability, upper probability ) ); 

obj << Nonpar Density( {Select Points by Density( lower probability, upper probability )} )

**Beschreibung:** Wählt Punkte zwischen der angegebenen unteren und der oberen Wahrscheinlichkeit aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Select Points by Density( 0.2, 0.5 )} );
Wait( 1 );
obj << (curve[1] << Select Points by Density( 0.8, 1 ));

```

#### Set Kernel

**Syntax:** obj << ( Curve[number] << Set Kernel( xStdDev, yStdDev )); 

obj << Nonpar Density( {Set Kernel( xStdDev, yStdDev )} )

**Beschreibung:** Legt die Standardabweichungen des Kerns für die X- und Y-Werte fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Kernel Control( 1 ), Set Kernel( 8.537, 1.7333 )} );
Wait( 1 );
obj << (curve[1] << Set Kernel( 8, 1 ));

```

## Bivariate > Bivariate Normal Ellipse

### Elementmeldungen

#### Confid Curves Fit

**Syntax:** obj << ( Curve[number] << Confid Curves Fit( state=0|1 ) ); 

obj << Fit Name( {Confid Curves Fit( state=0|1 )} )

**Beschreibung:** Zeigt die Konfidenzkurven der angepassten Geraden an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Confid Curves Indiv

**Syntax:** obj << ( Curve[number] << Confid Curves Indiv( state=0|1 ) ); 

obj << Fit Name( {Confid Curves Indiv( state=0|1 )} )

**Beschreibung:** Zeigt die Konfidenzkurven eines einzelnen Vorhersagewerts an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Indiv( 1 ));

```

#### Indiv Confidence Limit Formula

**Syntax:** obj << ( Curve[number] << Indiv Confidence Limit Formula( <alpha> ) ); 

obj << Fit Name( {Indiv Confidence Limit Formula( <alpha> ) )

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Erzeugt Spalten für die unteren und oberen Konfidenzgrenzen und für eine einzelne Vorhersage, die Funktionen der Regressoren sind. Die Voreinstellung für das Niveau Alpha ist 0,05, womit 95%-Konfidenzgrenzen erstellt werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));
Wait( 1 );
obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

#### Line Color

**Syntax:** obj << ( Curve[number] << Line Color( "color" ) ); 

obj << Fit Name( {Line Color( "color" )} ) 

obj << Density Ellipse( {Line Color( "color" )} )

**Beschreibung:** Ändert die Linienfarbe der angepassten Geraden, Konfidenzkurven und schattierter Konfidenzbereiche.

**Beispiel für Normalellipse**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

**Kurvenbeispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

#### Line Style

**Syntax:** obj << ( Curve[number] << Line Style( "pen style" ) ); 

obj << Fit Name( {Line Styel( "pen style" )} ) 

obj << Density Ellipse( {Line Style( "pen style" )} )

**Beschreibung:** Ändert die Linienart der angepassten Geraden.

**Beispiel für Normalellipse**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

**Kurvenbeispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

#### Line Width

**Syntax:** obj << ( Curve[number] << Line Width( number ) ); 

obj << Fit Name( {Line Width( number )} ) 

obj << Density Ellipse( {Line Width( number )} )

**Beschreibung:** Ändert die Linienbreite der angepassten Geraden und aller Konfidenzkurven.

**Beispiel für Normalellipse**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.99, {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

**Kurvenbeispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

#### Line of Fit

**Syntax:** obj << ( Curve[number] << Line of Fit( state=0|1 ) ); 

obj << Fit Name( {Line of Fit( state=0|1 )} ) 

obj << Density Ellipse( {Line of Fit( state=0|1 )} )

**Beschreibung:** Zeigt die angepasste Gerade an oder blendet sie aus. Standardmäßig ein.

**Beispiel für Normalellipse**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

**Kurvenbeispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

#### Mean Confidence Limit Formula

**Syntax:** obj << ( Curve[number] << Mean Confidence Limit Formula( <alpha> ) ); 

obj << Fit Name( {Mean Confidence Limit Formula( <alpha> ) )

**Beschreibung:** Speichert neue Formelspalten in der ursprünglichen Datentabelle. Erzeugt Spalten für die unteren und oberen Konfidenzgrenzen und für den Erwartungswert der Zielgröße, die Funktionen der Regressoren sind. Die Voreinstellung für das Niveau Alpha ist 0,05, womit 95%-Konfidenzgrenzen erstellt werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));
Wait( 1 );
obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

#### Remove Fit

**Syntax:** obj << ( Curve[number] << Remove Fit )

**Beschreibung:** Entfernt die angepasste Kurve.

**Beispiel für Normalellipse**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );
obj << Density Ellipse( 0.90 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

**Kurvenbeispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

#### Report

**Syntax:** obj << ( Curve[number] << Report( state=0|1 ) ); 

obj << Fit Name( {Report( state=0|1 )} ) 

obj << Density Ellipse( {Report( state=0|1 )} )

**Beschreibung:** Zeigt die Berichte für Übersicht der Anpassung, Lack of Fit, ANOVA and Parameterschätzer an oder blendet sie aus. Standardmäßig ein.

**Beispiel für Normalellipse**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

**Kurvenbeispiel**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

#### Save Predicteds

**Syntax:** obj << ( Curve[number] << Save Predicteds ); 

obj << Fit Name( {Save Predicteds} )

**Beschreibung:** Speichert eine neue Spalte in der ursprünglichen Datentabelle. Die Spalte enthält die Vorhersagewerte für die angegebene angepasste Kurve.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Save Predicteds} );
Wait( 1 );
obj << Fit Line( 1 );
obj << (curve[2] << Save Predicteds);

```

#### Save Residuals

**Syntax:** obj << ( Curve[number] << Save Residuals ); 

obj << Fit Name( {Save Residuals} )

**Beschreibung:** Speichert eine neue Spalte in der ursprünglichen Datentabelle. Die Spalte enthält die Residuenwerte für die angegebene angepasste Kurve.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Residuals);
Wait( 1 );
obj << Fit Line( {Save Residuals} );

```

#### Save Studentized Residuals

**Syntax:** obj << ( Curve[number] << Save Studentized Residuals ); 

obj << Fit Name( {Save Studentized Residuals} )

**Beschreibung:** Speichert eine neue Spalte in der ursprünglichen Datentabelle. Die Spalte enthält die studentisierten Residuen für die angegebene angepasste Kurve.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Studentized Residuals);
Wait( 1 );
obj << Fit Line( {Save Studentized Residuals} );

```

#### Select Points Inside

**Syntax:** obj << ( Curve[number] << Select Points Inside ); 

obj << Density Ellipse( {Select Points Inside} )

**Beschreibung:** Wählt Punkte innerhalb der Ellipse aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate(
	Y( :Weight ),
	X( :Height ),
	Density Ellipse( 0.95, {Line Color( {213, 72, 87} )} ),

);
obj << (curve[1] << Select Points Inside);
Wait( 1 );
obj << Density Ellipse( 0.8, {Select Points Inside} );

```

#### Select Points Outside

**Syntax:** obj << ( Curve[number] << Select Points Outside ); 

obj << Density Ellipse( {Select Points Outside} )

**Beschreibung:** Wählt Punkte außerhalb der Ellipse aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate(
	Y( :Weight ),
	X( :Height ),
	Density Ellipse( 0.8, {Line Color( {213, 72, 87} )} ),

);
obj << (curve[1] << Select Points Outside);
Wait( 1 );
obj << Density Ellipse( 0.95, {Select Points Outside} );

```

#### Shaded Contour

**Syntax:** obj << ( Curve[number] << Shaded Contour( state=0|1 ) ); 

obj << Density Ellipse( {Shaded Contour( state=0|1 )} )

**Beschreibung:** Zeigt die schattierte Kontur an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ), );
obj << Density Ellipse( 0.95, {Shaded Contour( 1 )} );
Wait( 1 );
obj << (Curve[1] << Shaded Contour( 0 ));

```

## Bivariate

### Elementmeldungen

#### Curve

**Syntax:** obj << ( Curve[number] << option )

**Beschreibung:** Feld mit Handles für angepasste Linien. Auf diese Weise können Sie Meldungen für das Objekt bivariate Kurven an spezifische Kurven, die angepasst wurden, senden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Density Ellipse

**Syntax:** obj << Density Ellipse( percent )

**Beschreibung:** Passt eine Kontur einer bivariaten Normalverteilung an. Die Kontur enthält den angegebenen Prozentsatz der Gesamtdatenpunkte.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );

```

#### Fit Cauchy

**Syntax:** obj << Fit Cauchy

**Beschreibung:** Passt ein robustes Regressionsmodell an, bei dem die Parameter mittels Maximum-Likelihood mit einer Cauchy Link-Funktion geschätzt werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Cauchy;

```

#### Fit Each Value

**Syntax:** obj << Fit Each Value

**Beschreibung:** Passt eine Linie an, die durch den mittleren Y-Wert jedes Satzes gleicher X-Werte verläuft.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Each Value;

```

#### Fit Line

**Syntax:** obj << Fit Line

**Beschreibung:** Passt ein Kleinste-Quadrate-Regressionsmodell an die Daten an. Die Anpassungsgerade wird im Diagramm angezeigt und ein Anpassungsbericht wird erstellt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line;

```

#### Fit Mean

**Syntax:** obj << Fit Mean

**Beschreibung:** Passt den Mittelwert der Y-Zielgrößenvariablen an. Im Diagramm wird eine flache Linie mit einer Steigung von Null angezeigt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Mean;

```

#### Fit Orthogonal

**Syntax:** obj << Fit Orthogonal( Univariate Variances|Equal Variances|Fit X to Y|Specified Variance Ratio(number) )

**Beschreibung:** Passt das angegebene orthogonale Regressionsmodell an. Orthogonale Regressionsmodelle sind nützlich, wenn beide Variablen, X und Y, mit Fehler gemessen werden. Das Argument „Angegebenes Varianzverhältnis“ ermöglicht Ihnen, das Varianzverhältnis vom Fehler in der X-Variablen zum Fehler in der Y-Variablen anzugeben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Orthogonal( Fit X to Y );

```

#### Fit Passing Bablok

**Syntax:** obj << Fit Passing Bablok

**Beschreibung:** Passt ein Regressionsmodell mithilfe der Passing-Bablok-Prozedur an. Diese Prozedur ist nützlich, wenn beide Variablen, X und Y, mit Fehler gemessen werden.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Passing Bablok;

```

#### Fit Polynomial

**Syntax:** obj << Fit Polynomial( degree of model )

**Beschreibung:** Passt eine polynomiale Kurve mit dem angegebenen Grad mithilfe der Kleinste-Quadrate-Regression an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3 );

```

#### Fit Robust

**Syntax:** obj << Fit Robust

**Beschreibung:** Passt ein Regressionsmodell mithilfe der Huber M-Schätzmethode an, die in Bezug auf Ausreißer robust ist. Die Huber-Verlustfunktion bestraft Ausreißer und steigt bei kleinen Fehlern quadratisch und bei großen Fehlern linear.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Robust;

```

#### Fit Special

**Syntax:** obj << Fit Special( xTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), yTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), <Intercept( number )>, <Slope( number )>, <Degree( degree )>, Centered Polynomial>  )

**Beschreibung:** Passt ein Regressionsmodell an, das Transformationen für die X- und Y-Variablen enthält. Sie können auch Nebenbedingungen für Steigung und Achsenabschnitt definieren sowie polynomiale Modelle mithilfe des Arguments „Degree“ anpassen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Special( xTran( "Log" ) );
obj << Fit Special( xTran( "Square" ), yTran( "Reciprocal" ), Intercept( 0 ) );

```

#### Fit Spline

**Syntax:** obj << Fit Spline( lambda, <Standardized> )

**Beschreibung:** Passt ein Kleinste-Quadrate-Modell mit Bestrafung an die Daten an, wobei der Glättungsparameter Lambda den Glättungsgrad für die Modellanpassung bestimmt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Spline( 341.1929, Standardized );
obj << Fit Spline( 341.1929 );

```

#### Fit Where

**Syntax:** obj << Fit Where( column == level, command )

**Beschreibung:** Passt eine Kurve an eine einzige Stufe einer kategorialen Variable an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
obj << Fit Where( :sex == "F", Fit Line( 1 ) );

```

#### Group By

**Syntax:** obj << Group By( column )

**Beschreibung:** Gibt eine Gruppierungsvariable an. Sobald eine Gruppierungsvariable angegeben ist, werden alle Analysen für jede Stufe der Gruppierungsvariable separat durchgeführt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
obj << Group By( :drug );
obj << Fit Line;

```

#### Histogram Borders

**Syntax:** obj << Histogram Borders( state=0|1 )

**Beschreibung:** Blendet Histogramme auf den horizontalen und vertikalen Achsen des Streudiagramms ein oder aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Histogram Borders( 1 );

```

#### Kernel Smoother

**Syntax:** obj << Kernel Smoother( lambda = 0|1|2, weight = 1|2|3|4|5, alpha, robust passes = 0|1|2|3|4, delta proportion )

**Beschreibung:** Wendet eine lokale Anpassung über wiederholte Teilmengen von Daten an, wobei der Teilmengenbereich durch Alpha, die Glättung der Anpassung durch Lambda und die Gewichtung durch die Gewichtungsfunktion festgelegt wird. Ausreißer werden mit zunehmender Robustheit schwächer gewichtet. Diese Methode ist auch als LOESS-Glättung bekannt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Bivariate( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Kernel Smoother( 1, 1, 0.84615, 0 );

```

#### Nonpar Density

**Syntax:** obj << Nonpar Density

**Beschreibung:** Passt nichtparametrische bivariate Dichtekonturen an und zeichnet die entsprechenden Konturen in den Graphen. Die Konturen sind in 5%-Intervallen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density;

```

#### Paired t test

**Syntax:** obj << Paired t test

**Beschreibung:** Führt einen paarweisen t-Test durch, erzeugt den Bericht und zeigt eine graue 45-Grad-Linie im Streudiagramm an, um darzustellen, wo die zwei Spalten gleich sind.



Diese Option wurde in die Plattform „Paarweise“ verschoben. Diese Option ist auch im Menü „Bivariat“ zugänglich, wenn Sie die Umschalttaste gedrückt halten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
obj << Paired t test;

```

#### Points Jittered

**Syntax:** obj << Points Jittered( "Keine"|"Automatisch"|"Zufällig gleichverteilt"|"Zufällig normalverteilt"|"Dichte zufällig"|"Gepackt"|"Raster"|"Hex.-Raster"|"Bienenschwarm"="Automatisch" )

**Beschreibung:** Gibt die Streuung der Datenpunkte an. Wenn ausgewählt, zittern die Datenpunkte, um überlappende Symbole zu vermeiden. Standardmäßig „Automatisch“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Oneway( Y( :Sepal length ), X( :Sepal width ) );
obj << Points Jittered( "Random Normal" );

```

#### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Beschreibung:** Zeigt die Punkte im Graphen an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
Wait( 1 );
obj << Show Points( 0 );

```

#### Summary Statistics

**Syntax:** obj << Summary Statistics( state=0|1 )

**Beschreibung:** Tabelle der statistischen Kenngrößen anzeigen oder ausblenden.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Summary Statistics( 1 );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj << Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj << Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj << Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

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

#### Get Data Table

**Syntax:** obj << Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj << Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj << Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj << Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj << Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

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

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

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

#### Redo Analysis

**Syntax:** obj << Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

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

#### Remove Local Data Filter

**Syntax:** obj << Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

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

#### Render Preset

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj << Report;

Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

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

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

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

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj << Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj << View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Bivariate(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### Spalten

#### By

**Syntax:** obj = Bivariate(...<By( column(s) )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );

```

#### Freq

**Syntax:** obj = Bivariate(...<Freq( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Freq( _freqcol ) );

```

#### Regressor

**Syntax:** obj = Bivariate(...Regressor( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Prädiktorvariablen an. Diese Variablen müssen einen stetigen Modellierungstyp haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Response

**Syntax:** obj = Bivariate(...Response( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die stetige Zielgrößenvariable an oder Variablen, die Sie analysieren möchten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Weight

**Syntax:** obj = Bivariate(...<Weight( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Weight( _weightcol ) );

```

#### X

**Syntax:** obj = Bivariate(...X( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Prädiktorvariablen an. Diese Variablen müssen einen stetigen Modellierungstyp haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Y

**Syntax:** obj = Bivariate(...Y( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die stetige Zielgrößenvariable an oder Variablen, die Sie analysieren möchten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Zugehörige Konstruktoren

#### Bivariate

**Syntax:** Bivariate( Y( columns ), X( columns ) )

**Beschreibung:** Modelliert eine stetige Zielgröße in Bezug auf eine andere stetige Variable. Analysemethoden sind u.a. Anpassung von Linien, Polynomen, Splines und bivariaten Dichten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

## Contingency > Analysis of Means for Proportions

### Elementmeldungen

#### Point Options

**Syntax:** obj << Analysis of Means for Proportions( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Beschreibung:** Gibt den Zeichnungsstil der Punkte in der Mittelwertanalyse für Anteile an. Sie können zwischen vertikalen Stäben, verbundenen Punkten oder nur Punkten wählen. Standardmäßig wird das Diagramm mit Stäben gezeichnet, die die Punkte mit der horizontalen Linie verbinden, die am Durchschnitt gezeichnet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Syntax:** obj << Analysis of Means for Proportions( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Beschreibung:** Ändert das Alpha-Niveau für die Berechnung der Entscheidungsgrenzen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Syntax:** obj << Analysis of Means for Proportions( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Beschreibung:** Zeigt die Mittellinie für die Mittelwertanalyse für Anteile an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** obj << Analysis of Means for Proportions( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Beschreibung:** Zeigt die Schattierung der Entscheidungsgrenzen in der Mittelwertanalyse für Anteile an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** obj << Analysis of Means for Proportions( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Beschreibung:** Zeigt die Linien der Entscheidungsgrenzen in der Mittelwertanalyse für Anteile an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** obj << Analysis of Means for Proportions( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Beschreibung:** Zeigt einen Bericht mit Zielgrößenanteilen und Entscheidungsgrenzen für jede Stufe der X-Variablen an oder blendet ihn aus. Der Bericht zeigt auch an, ob eine Grenze überschritten wurde.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

#### Switch Response Level for Proportion

**Syntax:** obj << Analysis of Means for Proportions( 1, Switch Response Level for Proportion( state=0|1 ) );

scrobj << Switch Response Level for Proportion( state=0|1 )

**Beschreibung:** Ändert die Zielgrößenkategorie, die in der Analyse verwendet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Switch Response Level for Proportion( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Switch Response Level for Proportion( 0 );

```

## Contingency > Contingency Equivalence Tests

### Elementmeldungen

#### Forest Plot

**Syntax:** obj << Equivalence Tests( ..., Forest Plot( state=0|1 ) );

scobj << Forest Plot( state=0|1 )

**Beschreibung:** Zeigt das Forest-Diagramm der Äquivalenztests an oder blendet es aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);
scobj << Forest Plot( 0 );

```

#### Remove

**Syntax:** scobj << Remove

**Beschreibung:** Entfernt den Bericht der Äquivalenztests.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 1 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);
Wait( 1 );
scobj << Remove;

```

#### Test Report

**Syntax:** obj << Equivalence Tests( ..., Test Report( state=0|1 ) );

scobj << Test Report( state=0|1 )

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der die Äquivalenztests, Superioritätstests oder Nicht-Inferioritätstests für Risikodifferenzen oder Risikoverhältnisse zusammenfasst. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);
scobj << Test Report( 0 );

```

## Contingency > Contingency Table

### Elementmeldungen

#### Cell Chi Square

**Syntax:** obj << Contingency Table( Cell Chi Square( state=0|1, <Format(...)> ) )

**Beschreibung:** Zeigt den einzelnen Zellenbeitrag an der Chi-Quadrat-Kenngröße in der Kontingenztabelle an oder blendet ihn aus.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Cell Chi Square( 1 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Cell Chi Square( 1, Format( "Fixed Dec", 8, 5 ) ) );

```

#### Col %

**Syntax:** obj << Contingency Table( Col %( state=0|1, <Format(...)> ) )

**Beschreibung:** Zeigt den prozentualen Beitrag jeder Zelle zu der Spalte in der Kontingenztabelle an oder blendet ihn aus. Standardmäßig ein.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Col %( 0 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Col %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Col Cum

**Syntax:** obj << Contingency Table( Col Cum( state=0|1, <Format(...)> ) )

**Beschreibung:** Zeigt die kumulierte Spaltensumme in der Kontingenztabelle an oder blendet sie aus.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum( 1 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Col Cum( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

#### Col Cum %

**Syntax:** obj << Contingency Table( Col Cum %( state=0|1, <Format(...)> ) )

**Beschreibung:** Zeigt die kumulierten Spaltenprozent in der Kontingenztabelle an oder blendet ihn aus.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum %( 1 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Col Cum %( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

#### Count

**Syntax:** obj << Contingency Table( Count( state=0|1, <Format(...)> ) )

**Beschreibung:** Zeigt die Anzahl pro Zelle in der Kontingenztabelle an oder blendet sie aus. Standardmäßig ein.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Count( 0 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Count( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Deviation

**Syntax:** obj << Contingency Table( Deviation( state=0|1, <Format(...)> ) )

**Beschreibung:** Zeigt die Abweichung in jeder Zelle in der Kontingenztabelle an oder blendet sie aus. Die Abweichung in jeder Zelle ist die tatsächliche Anzahl pro Zelle minus der erwarteten Anzahl pro Zelle.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Deviation( 1 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Deviation( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Expected

**Syntax:** obj << Contingency Table( Expected( state=0|1, <Format(...)> ) )

**Beschreibung:** Zeigt die erwartete Anzahl pro Zelle in der Kontingenztabelle an oder blendet sie aus. Die erwartete Anzahl pro Zelle ist das Produkt aus der entsprechenden Zeilensumme und der Spaltensumme dividiert durch die Gesamtsumme.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Expected( 1 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Expected( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Make Into Data Table

**Syntax:** obj << Contingency Table( Make Into Data Table )

**Beschreibung:** Erstellt eine Datentabelle, die Kreuztabellendaten enthält.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Contingency( Y( :Age ), X( :sex ), Contingency Table( Make into Data Table ) );

```

#### Row %

**Syntax:** obj << Contingency Table( Row %( state=0|1, <Format(...)> ) )

**Beschreibung:** Zeigt den prozentualen Beitrag jeder Zelle zu der Zeile in der Kontingenztabelle an oder blendet ihn aus. Standardmäßig ein.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Row %( 0 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Row %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Row Cum

**Syntax:** obj << Contingency Table( Row Cum( state=0|1, <Format(...)> ) )

**Beschreibung:** Zeigt die kumulierte Zeilensumme in der Kontingenztabelle an oder blendet sie aus.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum( 1 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Row Cum( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

#### Row Cum %

**Syntax:** obj << Contingency Table( Row Cum %( state=0|1, <Format(...)> ) )

**Beschreibung:** Zeigt die kumulierten Zeilenprozent in der Kontingenztabelle an oder blendet ihn aus.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum %( 1 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Row Cum %( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

#### Total %

**Syntax:** obj << Contingency Table( Total %( state=0|1, <Format(...)> ) )

**Beschreibung:** Zeigt den Gesamtprozentsatz der Zellen in der Kontingenztabelle an oder blendet ihn aus. Standardmäßig ein.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Total %( 0 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Total %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

## Contingency > Correspondence Analysis

### Elementmeldungen

#### 3D Correspondence Analysis

**Syntax:** obj << Correspondence Analysis( "3D Correspondence Analysis"( state=0|1 ) )

**Beschreibung:** Zeigt ein dreidimensionales Streudiagramm an oder blendet es aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cars 1993.jmp" );
obj = Contingency(
	Y( :Vehicle Category ),
	X( :Manufacturer ),
	Contingency Table( 0 ),
	Tests( 0 )
);
Wait( 1 );
obj << Correspondence Analysis( "3D Correspondence Analysis"(1) );

```

#### Make Table

**Syntax:** obj << Correspondence Analysis( "Make Table" )

**Beschreibung:** Erstellt eine Datentabelle, die die Korrespondenzanalyseausgabe enthält.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( "Make Table" );

```

#### Save Value Order

**Syntax:** obj << Correspondence Analysis( "Save Value Order" )

**Beschreibung:** Speichert eine Spalte mit der Wertereihenfolge in den Spalten der X- und der Y-Variable in der Datentabelle. Die Spalteneigenschaft gibt die Reihenfolge der Stufen sortiert nach dem ersten Korrespondenz-Score-Koeffizienten an.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( "Save Value Order" );

```

## Contingency

### Elementmeldungen

#### Agreement Statistic

**Syntax:** obj << Agreement Statistic( state=0|1 )

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der statistische Kenngrößen enthält, die die Übereinstimmung zwischen Stufen messen. Der Bericht enthält die statistische Kenngröße Kappa ebenso wie den Standardfehler, das Konfidenzintervall und den Hypothesentest für die statistische Kenngröße. Der Bericht enthält auch Bowkers Test der Symmetrie, der auch als McNemars Test bekannt ist. Diese Option ist nur verfügbar, wenn die X- und Y-Variablen die gleichen Stufen haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 ),
	Agreement Statistic( 1 )
);

```

#### Analysis of Means for Proportions

**Syntax:** obj << Analysis of Means for Proportions( state=0|1, <chart options> )

**Beschreibung:** Zeigt ein Entscheidungsdiagramm der Mittelwertanalyse für Anteile (ANOMP) an, um Gruppenanteile zu vergleichen. ANOMP ist eine Prozedur für multiple Vergleiche, bei der die Zielgrößenanteile für die Stufen der X-Variable mit dem Gesamtzielgrößenanteil verglichen werden. Diese Option ist nur verfügbar, wenn die Y-Variable genau zwei Stufen hat.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency(
	Y( :marital status ),
	X( :type ),
	Analysis of Means for Proportions( 1 )
);

```

#### Cochran Armitage Trend Test

**Syntax:** obj << Cochran Armitage Trend Test( state=0|1 )

**Beschreibung:** Zeigt einen Test auf Trends in binomialen Anteilen über Werte einer einzelnen Variablen an oder blendet ihn aus. Diese Option ist nur verfügbar, wenn eine Variable genau zwei Stufen hat und die andere Variable ordinal ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :size ), X( :sex ), Mosaic Plot( 0 ) );
obj << Cochran Armitage Trend Test( 1 );

```

#### Cochran Mantel Haenszel

**Syntax:** obj << Cochran Mantel Haenszel( column );

obj << Cochran Mantel Haenszel( state=0|1 )

**Beschreibung:** Zeigt einen Test an oder blendet ihn aus, der bestimmt, ob es eine Beziehung zwischen zwei kategorialen Variablen nach der Blockbildung über eine dritte Klassifikationsvariable gibt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :type ), X( :marital status ) );
obj << Cochran Mantel Haenszel( :country );
Wait( 2 );
obj << Cochran Mantel Haenszel( 0 );

```

#### Contingency Table

**Syntax:** obj << Contingency Table( state=0|1 )

**Beschreibung:** Zeigt eine Zwei-Wege-Häufigkeitentabelle an oder blendet sie aus. Die Tabelle enthält eine Zeile für jede Stufe der X-Variablen und eine Spalte für jede Stufe der Y-Variablen. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( 0 );

```

#### Correspondence Analysis

**Syntax:** obj << Correspondence Analysis( state=0|1 );

obj << Correspondence Analysis( correspondence chart options )

**Beschreibung:** Zeigt eine Korrespondenzanalyse an oder blendet sie aus, die Zeilen oder Spalten einer Häufigkeitentabelle identifiziert, die ähnliche Häufigkeitenmuster haben. Im Diagramm der Korrespondenzanalyse gibt es einen Punkt für jede Zeile und für jede Spalte der Kontingenztabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = dt << Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( 1 );

```

#### Equivalence Tests of Relative Risk

**Syntax:** obj << Equivalence Tests of Relative Risk( ratio, <alpha=.05>, <test type>, <Response Group( level )>, <Factor Group( level )> )

**Beschreibung:** Testet, dass die relativen Risiken sich nicht um mehr als ein Verhältnis unterscheiden, das praktisch äquivalent ist. Dies ist die Umkehrung des üblichen Signifikanztests. Alpha, Testtyp und die Gruppenstufen sind optionale Argumente. Das Argument „Testtyp“ ist standardmäßig „Äquivalenz“, doch es kann auch verwendet werden, um Superioritäts- oder Nicht-Inferioritätstests anzugeben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Relative Risk(
		0.8,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);

```

#### Equivalence Tests of Risk Difference

**Syntax:** obj << Equivalence Tests of Risk Difference( difference, <alpha=.05>, <test type>, <Response Group( level )>, <Factor Group( level )> )

**Beschreibung:** Testet, dass die Risikodifferenzen sich nicht um mehr als einen Betrag (Differenz) unterscheiden, der praktisch äquivalent ist. Dies ist die Umkehrung des üblichen Signifikanztests. Alpha, Testtyp und die Gruppenstufen sind optionale Argumente. Das Argument „Testtyp“ ist standardmäßig „Äquivalenz“, doch es kann auch verwendet werden, um Superioritäts- oder Nicht-Inferioritätstests anzugeben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);

```

#### Exact Agreement Statistic

**Syntax:** obj << Exact Agreement Statistic( state=0|1 )

**Beschreibung:** Zeigt die exakte Version der Übereinstimmungsstatistik Kappa an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 )
);
obj << Exact Agreement Statistic( 1 );

```

#### Exact Cochran Armitage Trend Test

**Syntax:** obj << Exact Cochran Armitage Trend Test( state=0|1 )

**Beschreibung:** Zeigt die exakte Version des Cochran-Armitage-Trendtests an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 )
);
obj << Exact Cochran Armitage Trend Test( 1 );

```

#### Fisher's Exact Test

**Syntax:** obj << Fisher&apos;s Exact Test( state=0|1 )

**Beschreibung:** Zeigt den Fishers exakten Test zum Testen des Zusammenhangs zwischen zwei kategorialen Variablen an oder blendet ihn aus. Dieser Test setzt keine Verteilungsannahmen für große Stichproben voraus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Fisher's Exact Test( 1 );

```

#### Horizontal Mosaic

**Syntax:** obj << Horizontal Mosaic( state=0|1 )

**Beschreibung:** Dreht das Mosaikdiagramm horizontal (1) oder vertikal (0).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
Wait( 2 );
obj << Horizontal Mosaic( 1 );

```

#### Jonckheere Terpstra Test

**Syntax:** obj << Jonckheere Terpstra Test( state=0|1 )

**Beschreibung:** Blendet einen Bericht des Jonckheere-Terpstra-Tests ein oder aus, bei dem es sich um einen nichtparametrischen Test auf geordnete Differenzen unter Klassen handelt. Getestet wird die Nullhypothese, dass sich die Verteilung der Zielgrößenvariable zwischen den Klassen nicht unterscheidet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.JMP" );
:height << Nominal( 1 );
obj = dt << Contingency(
	Y( :height ),
	X( :age ),
	Contingency Table(
		Count( 1 ),
		Total %( 0 ),
		Col %( 0 ),
		Row %( 0 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 ),
		Col Cum( 0 ),
		Col Cum %( 0 ),
		Row Cum( 0 ),
		Row Cum %( 0 )
	)
);
obj << Jonckheere Terpstra Test( 1 );

```

#### Measures of Association

**Syntax:** obj << Measures of Association( state=0|1 )

**Beschreibung:** Zeigt einen Bericht an, der Maße des Zusammenhangs zwischen den Variablen in der Kontingenztabelle enthält.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Measures of Association( 1 )
);

```

#### Mosaic Plot

**Syntax:** obj << Mosaic Plot( state=0|1 )

**Beschreibung:** Zeigt eine grafische Darstellung der Kontingenztabelle an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Mosaic Plot( 0 );

```

#### Odds Ratio

**Syntax:** obj << Odds Ratio( state=0|1 )

**Beschreibung:** Zeigt einen Bericht des Chancenverhältnisses an oder blendet ihn aus. Diese Option ist nur verfügbar, wenn die X- und Y-Variablen jeweils genau zwei Stufen haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ), Odds Ratio( 1 ) );

```

#### Relative Risk

**Syntax:** obj << Relative Risk( state=0|1, <Y variable level, X variable level> ); 

obj << Relative Risk( state=0|1, <"All"> )

**Beschreibung:** Zeigt das relative Risiko zwischen den Stufen der Zielgröße an oder blendet es aus. Diese Option ist nur verfügbar, wenn die X- und Y-Variablen jeweils genau zwei Stufen haben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( 0 )
);
obj << Relative Risk( 1, "Cancer", "Smoker" );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( 0 )
);
obj << Relative Risk( 1, "All" );

```

#### Set Alpha Level

**Syntax:** obj << Set Alpha Level( alpha=0.05 )

**Beschreibung:** Ändert das Alpha-Niveau für die Berechnung der Entscheidungsgrenzen. Standardmäßig „0.05“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Set Alpha Level( 0.1 );
obj << Measures of Association( 1 );

```

#### Set α Level

**Syntax:** obj << Set α Level( alpha=0.05 )

**Beschreibung:** Ändert das Alpha-Niveau für die Berechnung der Entscheidungsgrenzen. Standardmäßig „0.05“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Set Alpha Level( 0.1 );
obj << Measures of Association( 1 );

```

#### Tests

**Syntax:** obj << Tests( state=0|1 )

**Beschreibung:** Zeigt Tests an oder blendet sie aus, die messen, ob die Raten der Zielgrößenstufen über alle Stufen der X-Variablen gleich sind. Diese Tests sind analog zur Tabelle der Varianzanalyse für stetige Daten. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Tests( 0 );

```

#### Two Sample Test for Proportions

**Syntax:** obj << Two Sample Test for Proportions( state=0|1 )

**Beschreibung:** Zeigt einen Test mit zwei Stichproben für Anteile an oder blendet ihn aus. Dieser Test vergleicht die Anteile der Y-Variablen zwischen den zwei Stufen der X-Variablen. Diese Option ist nur verfügbar, wenn die X- und Y-Variablen jeweils genau zwei Stufen haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Two Sample Test for Proportions( 1 )
);

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj << Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj << Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj << Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

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

#### Get Data Table

**Syntax:** obj << Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj << Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj << Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj << Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj << Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

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

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

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

#### Redo Analysis

**Syntax:** obj << Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

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

#### Remove Local Data Filter

**Syntax:** obj << Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

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

#### Render Preset

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj << Report;

Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

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

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

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

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj << Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj << View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Contingency(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### Spalten

#### Block

**Syntax:** obj = Contingency(...<Block( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Blockbildungsvariable an. Diese identifiziert einen zweiten Faktor und führt einen Cochran-Mantel-Haenszel-Test durch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :marital status ), X( :type ), Block( :sex ) );

```

#### By

**Syntax:** obj = Contingency(...<By( column(s) )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );

```

#### Freq

**Syntax:** obj = Contingency(...<Freq( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Contingency( Y( :Age ), X( :sex ), Freq( _freqcol ) );

```

#### Grouping Category

**Syntax:** obj = Contingency(...Grouping Category( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Prädiktorvariablen an. Diese Variablen müssen einen ordinalen oder nominalen Modellierungstyp haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Response Category

**Syntax:** obj = Contingency(...Response Category( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die kategoriale Zielgrößenvariable an oder Variablen, die Sie analysieren möchten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Weight

**Syntax:** obj = Contingency(...<Weight( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Contingency( Y( :Age ), X( :sex ), Weight( _weightcol ) );

```

#### X

**Syntax:** obj = Contingency(...X( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Prädiktorvariablen an. Diese Variablen müssen einen ordinalen oder nominalen Modellierungstyp haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Y

**Syntax:** obj = Contingency(...Y( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die kategoriale Zielgrößenvariable an oder Variablen, die Sie analysieren möchten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Zugehörige Konstruktoren

#### Contingency

**Syntax:** Contingency( Y( columns ), X( columns ) )

**Beschreibung:** Modelliert eine kategoriale Zielgröße über einen Satz kategorialer Gruppen. Analysemethoden umfassen Chi-Quadrat-Test und Mosaikdiagramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

## Logistic

### Elementmeldungen

#### Confidence Intervals

**Syntax:** obj << Confidence Intervals( <state=0|1> | <fraction> )

**Beschreibung:** Zeigt Konfidenzintervalle in der Tabelle der Parameterschätzwerte rechts von jedem Effekt an bzw. blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Freq( :Count ), Y( :Response ), X( :"ln(dose)"n ) );
obj << Confidence Intervals( 0.01 );

```

#### Inverse Prediction

**Syntax:** obj << Inverse Prediction( Response( prob1, prob2, ... ), <Confidence Level( percent=0.95 )>, <Two sided|Lower One Sided|Upper One Sided> )

**Beschreibung:** Ermöglicht Ihnen, Werte der Prädiktorvariable für einen oder mehr Werte der Zielgrößenvariable vorherzusagen. Standardmäßig werden für jede inverse Vorhersage zweiseitige 95%-Konfidenzgrenzen berechnet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Inverse Prediction( Response( 0.5, 0.9 ) );

```

#### Lift Curve

**Syntax:** obj << Lift Curve( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Lift-Kurve ein oder aus. Eine Lift-Kurve stellt den Lift gegen den Anteil der Beobachtungen dar und bietet eine weitere Ansicht der Vorhersagefähigkeit eines Modells.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Lift Curve( 1 );

```

#### Line Color

**Syntax:** obj << Line Color( color )

**Beschreibung:** Ermöglicht Ihnen, die Farbe der Kurven im Diagramm auszuwählen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Line Color( "Magenta" );

```

#### Logistic Plot

**Syntax:** obj << Logistic Plot( state=0|1 )

**Beschreibung:** Zeigt das logistische Diagramm an oder blendet es aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Logistic Plot( 0 );

```

#### Odds Ratios

**Syntax:** obj << Odds Ratios( state=0|1 )

**Beschreibung:** Fügt Spalten hinzu oder entfernt sie, die Chancenverhältnisse zum Bericht der Parameter-Schätzwerte enthalten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Odds Ratios( 1 );

```

#### Precision Recall Curve

**Syntax:** obj << Precision Recall Curve( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Precision-Recall-Kurve ein oder aus, das für jede Stufe der Zielgrößenvariable eine Kurve enthält. Eine Precision-Recall-Kurve stellt die Präzisionswerte gegen die Werte der Sensitivität bei einer Vielzahl von Schwellenwerten dar.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
Wait( 1 );
obj << Precision Recall Curve( 1 );

```

#### ROC Curve

**Syntax:** obj << ROC Curve( state=0|1 )

**Beschreibung:** Zeigt die ROC-Kurve (Receiver-Operationscharakteristik) für jede Stufe der Zielgrößenvariable an oder blendet sie aus. Die ROC-Kurve ist ein Diagramm der Sensitivität im Vergleich zur (1 - Spezifizität).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
Wait( 1 );
obj << ROC Curve( 1 );

```

#### Save Probability Formula

**Syntax:** obj << Save Probability Formula

**Beschreibung:** Speichert neue Spalten in der Datentabelle. Die neuen Spalten enthalten die Formel für die Wahrscheinlichkeit, die vom Modell vorhergesagt wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Save Probability Formula;

```

#### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Beschreibung:** Zeigt die Punkte im logistischen Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Rate Curve

**Syntax:** obj << Show Rate Curve( state=0|1 )

**Beschreibung:** Zeigt die Anteilskurve im logistischen Diagramm an oder blendet sie aus. Die Anteilskurve ist nur nützlich, wenn Sie für jeden Wert der X-Variablen mehrere Punkte haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Show Rate Curve( 1 );

```

#### Target Level

**Syntax:** obj = Logistic(...Target Level( level )...)

**Beschreibung:** Gibt die Stufe der Zielgröße an, deren Wahrscheinlichkeit Sie modellieren möchten.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
obj << ROC Curve( 1 );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj << Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj << Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj << Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

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

#### Get Data Table

**Syntax:** obj << Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj << Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj << Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj << Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj << Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

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

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

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

#### Redo Analysis

**Syntax:** obj << Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

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

#### Remove Local Data Filter

**Syntax:** obj << Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

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

#### Render Preset

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj << Report;

Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

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

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

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

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj << Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj << View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### Spalten

#### By

**Syntax:** obj = Logistic(...<By( column(s) )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );

```

#### Categorical Response

**Syntax:** obj = Logistic(...Categorical Response( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die kategoriale Zielgrößenvariable an oder Variablen, die Sie analysieren möchten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Continuous Regressor

**Syntax:** obj = Logistic(...Continuous Regressor( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Prädiktorvariablen an. Diese Variablen müssen einen stetigen Modellierungstyp haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Freq

**Syntax:** obj = Logistic(...<Freq( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Weight

**Syntax:** obj = Logistic(...<Weight( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Weight( _weightcol )
);

```

#### X

**Syntax:** obj = Logistic(...X( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Prädiktorvariablen an. Diese Variablen müssen einen stetigen Modellierungstyp haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Y

**Syntax:** obj = Logistic(...Y( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die kategoriale Zielgrößenvariable an oder Variablen, die Sie analysieren möchten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Zugehörige Konstruktoren

#### Logistic

**Syntax:** Logistic( Y( columns ), X( columns ) )

**Beschreibung:** Modelliert eine kategoriale Zielgröße in Bezug auf eine stetige Variable. Analysemethoden sind u.a. logistische Regression und ROC-Kurven.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

## Oneway > ANOM for Ranges

### Elementmeldungen

#### Point Options

**Syntax:** obj << ANOM for Ranges( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Beschreibung:** Gibt den Zeichnungsstil der Punkte im Diagramm an. Sie können zwischen vertikalen Stäben, verbundenen Punkten oder nur Punkten wählen. Standardmäßig wird das Diagramm mit Stäben gezeichnet, die die Punkte mit der horizontalen Linie verbinden, die am Durchschnitt gezeichnet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Point Options( "Show Connected Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Point Options( "Show Only Points" );

```

#### Set Alpha Level

**Syntax:** obj << ANOM for Ranges( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Beschreibung:** Ändert das Alpha-Niveau für die Berechnung der Entscheidungsgrenzen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Syntax:** obj << ANOM for Ranges( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Beschreibung:** Zeigt die Mittellinie (gesamte mittlere Spannweite) an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** obj << ANOM for Ranges( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Beschreibung:** Zeigt die Schattierung der Entscheidungsgrenzen im Diagramm der Mittelwerte der Spannweiten an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** obj << ANOM for Ranges( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Beschreibung:** Zeigt die Linien der Entscheidungsgrenzen im Diagramm der Mittelwerte der Spannweiten an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** obj << ANOM for Ranges( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Beschreibung:** Zeigt einen Bericht mit den Gruppenspannweiten und den entsprechenden Entscheidungsgrenzen an oder blendet ihn aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances with Levene(ADM)

### Elementmeldungen

#### Point Options

**Syntax:** obj << "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Beschreibung:** Gibt den Zeichnungsstil der Punkte im Diagramm an. Sie können zwischen vertikalen Stäben, verbundenen Punkten oder nur Punkten wählen. Standardmäßig wird das Diagramm mit Stäben gezeichnet, die die Punkte mit der horizontalen Linie verbinden, die am Durchschnitt gezeichnet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Syntax:** obj << "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Beschreibung:** Ändert das Alpha-Niveau für die Berechnung der Entscheidungsgrenzen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Syntax:** obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Beschreibung:** Zeigt die Mittellinie (Gesamtmittelwert der ADM) an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Beschreibung:** Zeigt die Schattierung der Entscheidungsgrenzen im ANOMV-Levene (ADM)-Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Beschreibung:** Zeigt die Linien der Entscheidungsgrenzen im ANOMV-Levene (ADM)-Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Beschreibung:** Zeigt einen Bericht mit den Mittelwert der ADM der Gruppen und den Entscheidungsgrenzen an oder blendet ihn aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances

### Elementmeldungen

#### Graph in Variance Scale

**Syntax:** obj << ANOM for Variances( 1,  Graph in Variance Scale( state=0|1 ) );

scrobj <<  Graph in Variance Scale( state=0|1 )

**Beschreibung:** Gibt das Streuungsmaß auf der vertikalen Achse an. Sie können zwischen Standardabweichungen und Varianzen wählen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Graph in Variance Scale( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Graph in Variance Scale( 0 );

```

#### Point Options

**Syntax:** obj << ANOM for Variances( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Beschreibung:** Gibt den Zeichnungsstil der Punkte im Diagramm an. Sie können zwischen vertikalen Stäben, verbundenen Punkten oder nur Punkten wählen. Standardmäßig wird das Diagramm mit Stäben gezeichnet, die die Punkte mit der horizontalen Linie verbinden, die am Durchschnitt gezeichnet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Syntax:** obj << ANOM for Variances( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Beschreibung:** Ändert das Alpha-Niveau für die Berechnung der Entscheidungsgrenzen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Syntax:** obj << ANOM for Variances( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Beschreibung:** Zeigt die Mittellinie (RMSE oder MSE abhängig von der Y-Skala) an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** obj << ANOM for Variances( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Beschreibung:** Zeigt die Schattierung der Entscheidungsgrenzen im ANOMV-Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** obj << ANOM for Variances( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Beschreibung:** Zeigt die Linien der Entscheidungsgrenzen im ANOMV-Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** obj << ANOM for Variances( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Beschreibung:** Zeigt einen Bericht mit den Standardabweichungen der Gruppen (bzw. Varianzen) und den Entscheidungsgrenzen an oder blendet ihn aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM with Transformed Ranks

### Elementmeldungen

#### Point Options

**Syntax:** obj << ANOM with Transformed Ranks( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Beschreibung:** Gibt den Zeichnungsstil der Punkte im Diagramm an. Sie können zwischen vertikalen Stäben, verbundenen Punkten oder nur Punkten wählen. Standardmäßig wird das Diagramm mit Stäben gezeichnet, die die Punkte mit der horizontalen Linie verbinden, die am Durchschnitt gezeichnet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Syntax:** obj << ANOM with Transformed Ranks( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Beschreibung:** Ändert das Alpha-Niveau für die Berechnung der Entscheidungsgrenzen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Syntax:** obj << ANOM with Transformed Ranks( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Beschreibung:** Zeigt die Mittellinie (Gesamtmittelwert) an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** obj << ANOM with Transformed Ranks( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Beschreibung:** Zeigt die Schattierung der Entscheidungsgrenzen im ANOM-TR-Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** obj << ANOM with Transformed Ranks( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Beschreibung:** Zeigt die Linien der Entscheidungsgrenzen im ANOM-TR-Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** obj << ANOM with Transformed Ranks( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Beschreibung:** Zeigt einen Bericht mit den transformierten Rängen der Gruppenmittelwerte und den Entscheidungsgrenzen an oder blendet ihn aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM

### Elementmeldungen

#### Point Options

**Syntax:** obj << ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );

scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Beschreibung:** Gibt den Zeichnungsstil der Punkte im Diagramm an. Sie können zwischen vertikalen Stäben, verbundenen Punkten oder nur Punkten wählen. Standardmäßig wird das Diagramm mit Stäben gezeichnet, die die Punkte mit der horizontalen Linie verbinden, die am Durchschnitt gezeichnet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Syntax:** obj << ANOM( 1, Set Alpha Level( alpha ) );

scrobj << Set Alpha Level( alpha )

**Beschreibung:** Ändert das Alpha-Niveau für die Berechnung der Entscheidungsgrenzen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Syntax:** obj << ANOM( 1, Show Center Line( state=0|1 ) );

scrobj << Show Center Line( state=0|1 )

**Beschreibung:** Zeigt die Mittellinie (Gesamtmittelwert) im ANOM-Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntax:** obj << ANOM( 1, Show Decision Limit Shading( state=0|1 ) );

scrobj << Show Decision Limit Shading( state=0|1 )

**Beschreibung:** Zeigt die Schattierung der Entscheidungsgrenzen im ANOM-Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntax:** obj << ANOM( 1, Show Decision Limits( state=0|1 ) );

scrobj << Show Decision Limits( state=0|1 )

**Beschreibung:** Zeigt die Linien der Entscheidungsgrenzen im ANOM-Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntax:** obj << ANOM( 1, Show Summary Report( state=0|1 ) );

scrobj << Show Summary Report( state=0|1 )

**Beschreibung:** Zeigt einen Bericht mit den Gruppenmittelwerten und den Entscheidungsgrenzen an oder blendet ihn aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > Oneway Equivalence Tests

### Elementmeldungen

#### Forest Plot

**Syntax:** obj << Equivalence Tests( ..., Forest Plot( state=0|1 ) );

scobj << Forest Plot( state=0|1 )

**Beschreibung:** Zeigt das Forest-Diagramm der Äquivalenztests an oder blendet es aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Forest Plot( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Forest Plot( 0 );

```

#### Pairwise Comparisons

**Syntax:** obj << Equivalence Tests( ..., Equivalence Tests Pairwise Comparisons( state=0|1 ) );

scobj << Equivalence Tests Pairwise Comparisons( state=0|1 )

**Beschreibung:** Zeigt den Bericht der Äquivalenztests paarweise Vergleiche für alle paarweisen Vergleiche an oder blendet ihn aus.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests(
	4,
	0.05,
	"Pooled Variance",
	"Equivalence",
	Equivalence Tests Pairwise Comparisons( 1 )
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Pairwise Comparisons( 0 );

```

#### Remove

**Syntax:** scobj << Remove

**Beschreibung:** Entfernt den Bericht der Äquivalenztests.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests(
	4,
	0.05,
	"Pooled Variance",
	"Equivalence",
	Equivalence Tests Pairwise Comparisons( 1 )
);
Wait( 1 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
Wait( 1 );
scobj << Remove;

```

#### Scatterplot

**Syntax:** obj << Equivalence Tests( ..., Scatterplot( state=0|1 ) );

scobj << Scatterplot( state=0|1 )

**Beschreibung:** Zeigt das Streudiagramm der Äquivalenztests an oder blendet es aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Scatterplot( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Scatterplot( 0 );

```

#### Test Report

**Syntax:** obj << Equivalence Tests( ..., Test Report( state=0|1 ) );

scobj << Test Report( state=0|1 )

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, der die Äquivalenztests, Superioritätstests oder Nicht-Inferioritätstests für Mittelwerte oder Standardabweichungen zusammenfasst. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Test Report( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Test Report( 0 );

```

## Oneway > Oneway Means Comparisons

### Elementmeldungen

#### Confidence Quantile

**Syntax:** obj << Each Pair( 1, Confidence Quantile( state=0|1 ) );

obj << All Pairs( 1, Confidence Quantile( state=0|1 ) );

obj << With Best( 1, Confidence Quantile( state=0|1 ) );

obj << With Control( 1, Confidence Quantile( state=0|1 ) );

obj << Each Pair Stepwise( 1, Confidence Quantile( state=0|1 ) )

**Beschreibung:** Blendet den/die kritische(n) Wert(e) und das Alpha-Niveau für den Vergleich der Mittelwerte ein oder aus. 



Each Pair ist äquivalent zu Student&apos;s t. All Pairs ist äquivalent zu Tukey HSD. With Best ist äquivalent zu Hsu MCB. With Control ist äquivalent zu Dunnett&apos;s. Each Pair Stepwise ist äquivalent zu Newman-Keuls.

 Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Confidence Quantile( 1 ) );

```

#### Connecting Letters Report

**Syntax:** obj << Each Pair( 1, Connecting Letters Report( state=0|1 ) );

obj << All Pairs( 1, Connecting Letters Report( state=0|1 ) );

obj << Each Pair Stepwise( 1, Connecting Letters Report( state=0|1 ) )

**Beschreibung:** Blendet den herkömmlichen buchstabencodierten Bericht ein oder aus, in dem Mittelwerte, die keinen gemeinsamen Buchstaben haben, sich signifikant unterscheiden. 



Each Pair ist äquivalent zu Student&apos;s t. All Pairs ist äquivalent zu Tukey HSD. With Best ist äquivalent zu Hsu MCB. With Control ist äquivalent zu Dunnett&apos;s. Each Pair Stepwise ist äquivalent zu Newman-Keuls.

 Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Connecting Letters Report( 1 ) );

```

#### Detailed Comparisons Report

**Syntax:** obj << Each Pair( 1, Detailed Comparisons Report( state=0|1 ) )

**Beschreibung:** Blendet einen detaillierten Bericht für jeden Vergleich ein oder aus. Jeder Abschnitt zeigt die Differenz zwischen den Stufen, Standardfehler und Konfidenzintervalle, t-Werte, p-Werte und Freiheitsgrade. 



Each Pair ist äquivalent zu Student&apos;s t. All Pairs ist äquivalent zu Tukey HSD. With Best ist äquivalent zu Hsu MCB. With Control ist äquivalent zu Dunnett&apos;s. Each Pair Stepwise ist äquivalent zu Newman-Keuls.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Detailed Comparisons Report( 1 ) );

```

#### Difference Matrix

**Syntax:** obj << Each Pair( 1, Difference Matrix( state=0|1 ) );

obj << All Pairs( 1, Difference Matrix( state=0|1 ) );

obj << With Best( 1, Difference Matrix( state=0|1 ) );

obj << With Control( 1, Difference Matrix( state=0|1 ) );

obj << Each Pair Stepwise( 1, Difference Matrix( state=0|1 ) )

**Beschreibung:** Blendet eine Tabelle mit allen Differenzen der Mittelwerte ein oder aus. 



Each Pair ist äquivalent zu Student&apos;s t. All Pairs ist äquivalent zu Tukey HSD. With Best ist äquivalent zu Hsu MCB. With Control ist äquivalent zu Dunnett&apos;s. Each Pair Stepwise ist äquivalent zu Newman-Keuls.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Difference Matrix( 1 ) );

```

#### Dunnett's Lower

**Syntax:** obj << Dunnett&apos;s Lower( state=0|1 )

**Beschreibung:** Zeigt einen unteren einseitigen Dunnetts t-Test an oder blendet ihn aus, bei dem getestet wird, ob die Erwartungswerte kleiner als der Erwartungswert einer Kontrollgruppe sind.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15}, Dunnett's Lower( 1 ) );

```

#### Dunnett's Upper

**Syntax:** obj << Dunnett&apos;s Upper( state=0|1 )

**Beschreibung:** Zeigt einen oberen einseitigen Dunnetts t-Test an oder blendet ihn aus, bei dem getestet wird, ob die Erwartungswerte größer als der Erwartungswert einer Kontrollgruppe sind.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15}, Dunnett's Upper( 1 ) );

```

#### LSD Threshold Matrix

**Syntax:** obj << Each Pair( 1, LSD Threshold Matrix( state=0|1 ) );

obj << All Pairs( 1, LSD Threshold Matrix( state=0|1 ) );

obj << With Best( 1, LSD Threshold Matrix( state=0|1 ) );

obj << With Control( 1, LSD Threshold Matrix( state=0|1 ) )

**Beschreibung:** Blendet eine Matrix von paarweisen Differenzen von Mittelwerten minus der kleinsten signifikanten Differenz für diese Mittelwerte ein oder aus. Ein positiver Wert deutet auf ein Paar von Mittelwerten hin, die sich signifikant unterscheiden. 



Each Pair ist äquivalent zu Student&apos;s t. All Pairs ist äquivalent zu Tukey HSD. With Best ist äquivalent zu Hsu MCB. With Control ist äquivalent zu Dunnett&apos;s. Each Pair Stepwise ist äquivalent zu Newman-Keuls.

 Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, LSD Threshold Matrix( 1 ) );

```

#### Ordered Differences Report

**Syntax:** obj << Each Pair( 1, Ordered Differences Report( state=0|1 ) );

obj << All Pairs( 1, Ordered Differences Report( state=0|1 ) )

**Beschreibung:** Blendet alle paarweisen positiven Differenzen, Standardfehler der Differenz, Konfidenzintervalle, p-Werte und ein Diagramm der Größe der Differenz mit überlagerten Konfidenzintervallen ein oder aus. 



Each Pair ist äquivalent zu Student&apos;s t. All Pairs ist äquivalent zu Tukey HSD. With Best ist äquivalent zu Hsu MCB. With Control ist äquivalent zu Dunnett&apos;s. Each Pair Stepwise ist äquivalent zu Newman-Keuls.

 Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Ordered Differences Report( 1 ) );

```

#### Ordered Ratio Report

**Syntax:** obj << Each Pair( 1, Ordered Differences Report( state=0|1 ) );

obj << Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( state=0|1 ) )

**Beschreibung:** Blendet alle paarweisen positiven Differenzen, Standardfehler der Differenz, Konfidenzintervalle, p-Werte und ein Diagramm der Größe der Differenz mit überlagerten Konfidenzintervallen ein oder aus. 



Each Pair ist äquivalent zu Student&apos;s t. All Pairs ist äquivalent zu Tukey HSD. With Best ist äquivalent zu Hsu MCB. With Control ist äquivalent zu Dunnett&apos;s. Each Pair Stepwise ist äquivalent zu Newman-Keuls.

 Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( 1 ) );

```

#### Ratio Matrix

**Syntax:** obj << Ratios with Pooled Variance( 1, Ratio Matrix( state=0|1 ) );

obj << Ratio Comparison for Pooled Variance( 1, Ratio Matrix( state=0|1 ) )

**Beschreibung:** Blendet eine Tabelle mit allen Differenzen der Mittelwerte ein oder aus. 



Each Pair ist äquivalent zu Student&apos;s t. All Pairs ist äquivalent zu Tukey HSD. With Best ist äquivalent zu Hsu MCB. With Control ist äquivalent zu Dunnett&apos;s. Each Pair Stepwise ist äquivalent zu Newman-Keuls.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Pooled Variance( 1, Ratio Matrix( 1 ) );

```

## Oneway > Post Hoc Analysis for Friedman's Test

### Elementmeldungen

#### Nemenyi Test

**Syntax:** obj << Nemenyi Test( state=0|1 )

**Beschreibung:** Zeigt einen Bericht des Nemenyi-Tests an oder blendet ihn aus. Der Nemenyi-Test ist ein paarweiser Post-Hoc-Test für multiple Vergleiche von mittleren Rangsummen bei Blockdesign ohne Messwiederholungen. Dieser Test wird üblicherweise post-hoc nach signifikanten Ergebnissen des Friedman-Tests durchgeführt.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1, Nemenyi Test( 1 ) );

```

## Oneway

### Elementmeldungen

#### ANOM

**Syntax:** obj << ANOM( state=0|1, <chart options> )

**Beschreibung:** Jeden Gruppenmittelwert mit dem Gesamtmittelwert vergleichen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1 );

```

#### ANOM for Ranges

**Syntax:** obj << ANOM for Ranges( state=0|1, <chart options> )

**Beschreibung:** Test auf ungleiche Varianz durch Vergleichen von Gruppenspannweiten mit der gesamten mittleren Spannweite.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Ranges( 1 );

```

#### ANOM for Variances

**Syntax:** obj << ANOM for Variances( state=0|1, <chart options> )

**Beschreibung:** Auf ungleiche Varianz testen durch Vergleich von Standardabweichungen der Gruppen mit der Wurzel der mittleren quadratischen Abweichung (RMSE).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1 );

```

#### ANOM for Variances with Levene(ADM)

**Syntax:** obj << "ANOM for Variances with Levene(ADM)"n( state=0|1, <chart options> )

**Beschreibung:** Test auf ungleiche Varianz durch Vergleich der Gruppenmittelwerte der absoluten Abweichungen vom Median (ADM) zum Gesamtmittelwert der ADM.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1 );

```

#### ANOM with Transformed Ranks

**Syntax:** obj << ANOM with Transformed Ranks( state=0|1, <chart options> )

**Beschreibung:** Vergleicht jeden transformierten Rang des Gruppenmittelwerts mit dem transformierten Rang des Gesamtmittelwerts.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1 );

```

#### All Graphs

**Syntax:** obj << All Graphs( state=0|1 )

**Beschreibung:** Zeigt das einfaktorielle Diagramm an oder blendet es aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
Wait( 2 );
obj << All Graphs( 0 );

```

#### All Pairs

**Syntax:** obj << All Pairs( state=0|1 ); 

obj << Tukey HSD( state=0|1 ); 

obj << "All Pairs, Tukey HSD"n( state=0|1 )

**Beschreibung:** Berechnet den Tukey HSD-Test (HSD = Honestly Significant Difference); dieser Test schützt die Gesamtfehlerrate. Bei den Meldungen für Vergleiche einfaktorieller Mittelwerte finden Sie weitere Anzeigeoptionen.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Tukey HSD( 1 );

```

#### Box Plots

**Syntax:** obj << Box Plots( state=0|1 )

**Beschreibung:** Zeigt Ausreißer-Boxplots für jede Gruppe an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Box Plots( 1 );

```

#### CDF Plot

**Syntax:** obj << CDF Plot( state=0|1 )

**Beschreibung:** Zeigt die kumulierte Verteilungsfunktion für alle Gruppen im Bericht „Einfaktoriell“ an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << CDF Plot( 1 );

```

#### Cauchy Fit

**Syntax:** obj << Cauchy Fit( state=0|1 )

**Beschreibung:** Geht davon aus, dass die Fehler eine Cauchy-Verteilung haben. Die Cauchy-Anpassung ist eine robuste Methode, die extreme Ausreißer handhaben kann.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Cauchy Fit( 1 );

```

#### Compare Densities

**Syntax:** obj << Compare Densities( state=0|1 )

**Beschreibung:** Zeigt ein Diagramm der überlagerten Wahrscheinlichkeitsdichtefunktionen für jede Gruppe an oder blendet es aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Compare Densities( 1 );

```

#### Comparison Circles

**Syntax:** obj << Comparison Circles( state=0|1 )

**Beschreibung:** Zeigt Vergleichskreise an oder blendet sie aus. Diese Option ist nur verfügbar, wenn ein Bericht über multiple Vergleiche geöffnet ist. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );
Wait( 2 );
obj << Comparison Circles( 0 );

```

#### Composition of Densities

**Syntax:** obj << Composition of Densities( state=0|1 )

**Beschreibung:** Zeigt ein Diagramm der summierten Dichten, gewichtet nach der Häufigkeit jeder Gruppe an oder blendet es aus. Über den Bereich der X-Variablen zeigt das Diagramm der Überlagerung der Dichten an, wie jede Gruppe zur Gesamtdichte beiträgt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Composition of Densities( 1 );

```

#### Connect Means

**Syntax:** obj << Connect Means( state=0|1 )

**Beschreibung:** Zeigt gerade Linien, die die Gruppenmittelwerte verbinden, an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Connect Means( 1 );

```

#### Dunn All Pairs for Joint Ranks

**Syntax:** obj << Dunn All Pairs for Joint Ranks( state=0|1 )

**Beschreibung:** Zeigt Dunns Test für alle Paare nach gemeinsamen Rängen an oder blendet ihn aus. Dieser Test verwendet die Bonferroni-Adjustierung, sichert möglicherweise jedoch nicht die Gesamtfehlerrate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Dunn All Pairs for Joint Ranks( 1 );

```

#### Dunn With Control for Joint Ranks

**Syntax:** obj << Dunn With Control for Joint Ranks( state = 0|1, {control level} )

**Beschreibung:** Zeigt Dunns Test mit einer Kontrollgruppe über gemeinsamen Rängen an oder blendet ihn aus. Dieser Test verwendet die Bonferroni-Adjustierung, sichert möglicherweise jedoch nicht die Gesamtfehlerrate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Dunn With Control for Joint Ranks( 1, {12} );

```

#### Dunnett's

**Syntax:** obj << With Control( state=0|1, {control ID} ); 

obj << "Dunnett&apos;s"n( state=0|1, {control ID} ); 

obj << "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**Beschreibung:** Berechnet Dunnetts Test; dabei wird getestet, ob sich die Mittelwerte vom Mittelwert einer Kontrollgruppe unterscheiden. Bei den Meldungen für Vergleiche einfaktorieller Mittelwerte finden Sie weitere Anzeigeoptionen.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15} );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Dunnett's"n( 1, {15} );

```

#### Each Pair

**Syntax:** obj << Each Pair( state=0|1 ); 

obj << "Student&apos;s t"n( state=0|1 ); 

obj << "Each Pair, Student&apos;s t"n( state=0|1 )

**Beschreibung:** Berechnet paarweise Einzelvergleiche mit t-Tests ohne Korrektur für multiples Testen. Bei den Meldungen für Vergleiche einfaktorieller Mittelwerte finden Sie weitere Anzeigeoptionen.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1 );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Student's t"n( 1 );

```

#### Each Pair Stepwise

**Syntax:** obj << Each Pair Stepwise( state=0|1 ); 

obj << "Newman-Keuls"n( state=0|1 ); 

obj << "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**Beschreibung:** Berechnet den Newman-Keuls-Test. Hiermit wird mithilfe des Tests basierend auf der studentisierten Spannweite in einem schrittweisen Verfahren getestet, ob es Differenzen zwischen den Mittelwerten gibt. Dieser Test ist auch als Student-Newman-Keuls-Methode bekannt und ist weniger konservativ und leistungsstärker als ein Tukeys HSD-Test. Weitere Anzeigeoptionen finden Sie bei den Meldungen zu den einfaktoriellen Vergleichen der Mittelwerte.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair Stepwise( 1 );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Newman-Keuls"n( 1 );

```

#### Equivalence Tests

**Syntax:** obj << Equivalence Tests( difference, <alpha=.05>, <"Pooled Variance"|"Unequal Variances">, <test type> )

**Beschreibung:** Testet, dass die Mittelwerte sich nicht um mehr als einen Betrag (Differenz) unterscheiden, der praktisch äquivalent ist. Dies ist die Umkehrung des üblichen Signifikanztests. Alpha, Varianzannahme und Testtyp sind optionale Argumente. Standardmäßig wird die Annahme „Gepoolte Varianz“ verwendet. Das Argument „Testtyp“ ist standardmäßig „Äquivalenz“, doch es kann auch verwendet werden, um Superioritäts- oder Nicht-Inferioritätstests anzugeben.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.1, "Unequal Variances" );

```

#### Equivalence Tests of Std Dev

**Syntax:** obj << Equivalence Tests of Std Dev( ratio, <alpha=.05>, <test type> )

**Beschreibung:** Testet, dass die Standardabweichungen sich nicht um mehr als ein Verhältnis unterscheiden, das praktisch äquivalent ist. Dies ist die Umkehrung des üblichen Signifikanztests. Alpha und Testtyp sind optionale Argumente. Das Argument „Testtyp“ ist standardmäßig „Äquivalenz“, doch es kann auch verwendet werden, um Superioritäts- oder Nicht-Inferioritätstests anzugeben.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests of Std Dev( 0.8, 0.05, "Equivalence" );

```

#### Friedman Rank Test

**Syntax:** obj << Friedman Rank Test( state=0|1 )

**Beschreibung:** Zeigt einen Test basierend auf Friedman-Rang-Scores an oder blendet ihn aus. Die Friedman-Rang-Scores sind die Ränge der Daten innerhalb jeder Stufe der Blockbildungsvariablen. Die parametrische Version dieses Tests ist eine ANOVA mit Messwiederholungen. Diese Option ist nur verfügbar, wenn eine Blockbildungsvariable mit gleicher Anzahl von Beobachtungen innerhalb jedes Blocks bei Plattformstart angegeben wird.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1 );

```

#### Games-Howell

**Syntax:** obj << "Games-Howell"n( state=0|1 );

**Beschreibung:** Blendet einen Bericht über einen Games-Howell-Mehrfachvergleich aller Mittelwertpaare ein oder aus. Dieser Test kann in Situationen angewendet werden, in denen nicht davon ausgegangen werden kann, dass die Varianzen der einzelnen Gruppen gleich sind.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Games-Howell"n( 1 );

```

#### Grand Mean

**Syntax:** obj << Grand Mean( state=0|1 )

**Beschreibung:** Zeigt den Gesamtmittelwert der Y-Variable an oder blendet ihn aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), Grand Mean( 0 ) );
Wait( 2 );
obj << Grand Mean( 1 );

```

#### Histograms

**Syntax:** obj << Histograms( state=0|1 )

**Beschreibung:** Zeigt rechts vom ursprünglichen Diagramm nebeneinander liegende Histogramme an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Histograms( 1 );

```

#### Hsu MCB

**Syntax:** obj << With Best( state=0|1 ); 

obj << Hsu MCB( state=0|1 ); 

obj << "With Best, Hsu MCB"n( state=0|1 )

**Beschreibung:** Berechnet den Hsu MCB-Test (MCB = Multiple Comparison with Best); dabei wird getestet, ob die Mittelwerte kleiner als das unbekannte Maximum sind. Bei den Meldungen für Vergleiche einfaktorieller Mittelwerte finden Sie weitere Anzeigeoptionen.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Best( 1 );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Hsu MCB( 1 );

```

#### Jonckheere Terpstra Test

**Syntax:** obj << Jonckheere Terpstra Test( state=0|1 )

**Beschreibung:** Blendet einen Bericht des Jonckheere-Terpstra-Tests ein oder aus, bei dem es sich um einen nichtparametrischen Test auf geordnete Differenzen unter Klassen handelt. Getestet wird die Nullhypothese, dass sich die Verteilung der Zielgrößenvariable zwischen den Klassen nicht unterscheidet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.JMP" );
obj = dt << Oneway( Y( :Height ), X( :age ) );
obj << Jonckheere Terpstra Test( 1 );

```

#### Kolmogorov Smirnov Exact Test

**Syntax:** obj << Kolmogorov Smirnov Exact Test( state=0|1 )

**Beschreibung:** Zeigt den exakten Kolmogorov-Smirnov-Test an oder blendet ihn aus, der auf der empirischen Verteilungsfunktion basiert. Dieser Test ermittelt, ob die Verteilung der Zielgröße für alle Gruppen die gleiche ist. Diese Option ist nur verfügbar, wenn die X-Variable genau zwei Stufen hat.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Kolmogorov Smirnov Exact Test( 1 );

```

#### Kolmogorov Smirnov Test

**Syntax:** obj << Kolmogorov Smirnov Test( state=0|1 )

**Beschreibung:** Zeigt einen Test basierend auf der empirischen Verteilungsfunktion an oder blendet ihn aus, der testet, ob die Verteilung der Zielgröße für alle Gruppen die gleiche ist. Diese Option ist nur verfügbar, wenn die X-Variable genau zwei Stufen hat.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Kolmogorov Smirnov Test( 1 );

```

#### Legend

**Syntax:** obj << Legend( state=0|1 )

**Beschreibung:** Zeigt eine Legende für die Normal-Quantil-Diagramme, für Diagramme der kumulierten Verteilungsfunktion(CDF) und für Dichtediagramme an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), Plot Quantile by Actual( 1 ), Legend( 0 ) );
Wait( 2 );
obj << Legend( 1 );

```

#### Line of Fit

**Syntax:** obj << Line of Fit( state=0|1 )

**Beschreibung:** Zeigt eine Anpassung einer Referenzgeraden an die Daten für jede Stufe der X-Variablen in jedem geöffneten Quantildiagramm an oder blendet sie aus. Diese Option ist nur verfügbar, wenn ein Quantildiagramm geöffnet ist. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );
Wait( 2 );
obj << Line of Fit( 0 );

```

#### Matching Column

**Syntax:** obj << Matching Column( column )

**Beschreibung:** Zeigt eine Anpassungsgerade basierend auf einer angegebenen Übereinstimmungsvariablen und eine entsprechende Anpassungsgerade im einfaktoriellen Diagramm an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Weight ), X( :Age, :sex ) );
Wait( 2 );
obj[1] << Matching Column( :sex );
obj[2] << Matching Column( :Age );

```

#### Matching Dotted Lines

**Syntax:** obj << Matching Dotted Lines( state=0|1 )

**Beschreibung:** Zeigt gepunktete Linien an oder blendet sie aus, die die Mittelwerte durch fehlende Stufen der Übereinstimmungsvariable verbinden. Die anstelle der fehlenden Zellmittelwerte verwendeten Werte werden mithilfe eines zweifaktoriellen ANOVA-Modells ermittelt. Diese Option ist nur verfügbar, wenn die Option „Übereinstimmungsspalte“ ausgewählt ist und alle Werte der Übereinstimmungsvariable für eine Stufe der X-Variablen fehlen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:sex[6 :: 8] = "";
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Matching Column( :sex );
Wait( 2 );
obj << Matching Dotted Lines( 1 );

```

#### Matching Lines

**Syntax:** obj << Matching Lines( state=0|1 )

**Beschreibung:** Zeigt Linien an oder blendet sie aus, die die Mittelwerte jeder Stufe der Übereinstimmungsvariable verbinden. Diese Option ist nur verfügbar, wenn die Option „Übereinstimmungsspalte“ ausgewählt ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Oneway( Y( :LogHist0 ), X( :drug ) );
obj << Matching Column( :LogHist1 );
Wait( 2 );
obj << Matching Lines( 0 );

```

#### Mean CI Lines

**Syntax:** obj << Mean CI Lines( state=0|1 )

**Beschreibung:** Zeigt Linien an den oberen und unteren 95%-Konfidenzgrenzen für jede Gruppe an oder blendet sie aus. Die 95%-Konfidenzgrenzen werden mithilfe der gepoolten Standardabweichung berechnet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean CI Lines( 1 );

```

#### Mean Diamonds

**Syntax:** obj << Mean Diamonds( state=0|1 )

**Beschreibung:** Zeigt Mittelwertdiamanten im einfaktoriellen Diagramm an oder blendet sie aus. Jeder Mittelwertdiamant umfasst ein 95%-Konfidenzintervall für den entsprechenden Gruppenmittelwert mit einer horizontalen Linie am Mittelwert. Die 95%-Konfidenzintervalle werden mithilfe der gepoolten Standardabweichung berechnet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Diamonds( 1 );

```

#### Mean Error Bars

**Syntax:** obj << Mean Error Bars( state=0|1 )

**Beschreibung:** Zeigt den Mittelwert jeder Gruppe mit Fehlerbalken, die einen Standardfehler oberhalb und unterhalb des Mittelwerts sind, an oder blendet ihn aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Error Bars( 1 );

```

#### Mean Lines

**Syntax:** obj << Mean Lines( state=0|1 )

**Beschreibung:** Zeigt eine Linie am Mittelwert jeder Gruppe an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Lines( 1 );

```

#### Mean of Means

**Syntax:** obj << Mean of Means( state=0|1 )

**Beschreibung:** Zeigt den Mittelwert der Gruppenmittelwerte an oder blendet ihn aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean of Means( 1 );

```

#### Means and Std Dev

**Syntax:** obj << Means and Std Dev( state=0|1 )

**Beschreibung:** Zeigt Mittelwertlinien, Fehlerbalken und Standardabweichungslinien im einfaktoriellen Diagramm an oder blendet sie aus und zeigt eine Tabelle der statistischen Kenngrößen an oder blendet sie aus. Die Standardfehler für die Mittelwerte verwenden einzelne Standardabweichungen der Gruppen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means and Std Dev( 1 );

```

#### Means/Anova

**Syntax:** obj << Means( state=0|1 ); 

obj << "Means/Anova"n( state=0|1)

**Beschreibung:** Zeigt Mittelwertdiamanten im einfaktoriellen Diagramm an oder blendet sie aus und zeigt einen ANOVA-Bericht an oder blendet ihn aus. Diese Option ist nur verfügbar, wenn die X-Variable mehr als zwei Stufen hat.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );

```

#### Means/Anova/Pooled t

**Syntax:** obj << Means( state=0|1 ); 

obj << "Means/Anova/Pooled t"n( state=0|1)

**Beschreibung:** Zeigt Mittelwertdiamanten im einfaktoriellen Diagramm an oder blendet sie aus und zeigt einen ANOVA-Bericht an oder blendet ihn aus. Der ANOVA-Bericht umfasst einen Bericht zum gepoolten t-Test, der davon ausgeht, dass die zwei Gruppen gleiche Varianzen haben. Diese Option ist nur verfügbar, wenn die X-Variable exakt zwei Stufen hat.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Means( 1 );

```

#### Median Exact Test

**Syntax:** obj << Median Exact Test( state=0|1 )

**Beschreibung:** Zeigt eine Analyse der Median-Scores an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Median Exact Test( 1 );

```

#### Median Test

**Syntax:** obj << Median Test( state=0|1 )

**Beschreibung:** Zeigt einen Test basierend auf Median-Rang-Scores an oder blendet ihn aus. Die Median-Rang-Scores sind entweder 1 oder 0, abhängig davon, ob ein Rang oberhalb oder unterhalb des Median-Rangs ist. Der Median-Test ist der leistungsstärkste Rangtest für Fehler mit doppel-exponentiellen Verteilungen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Median Test( 1 );

```

#### Newman-Keuls

**Syntax:** obj << Each Pair Stepwise( state=0|1 ); 

obj << "Newman-Keuls"n( state=0|1 ); 

obj << "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**Beschreibung:** Berechnet den Newman-Keuls-Test. Hiermit wird mithilfe des Tests basierend auf der studentisierten Spannweite in einem schrittweisen Verfahren getestet, ob es Differenzen zwischen den Mittelwerten gibt. Dieser Test ist auch als Student-Newman-Keuls-Methode bekannt und ist weniger konservativ und leistungsstärker als ein Tukeys HSD-Test. Weitere Anzeigeoptionen finden Sie bei den Meldungen zu den einfaktoriellen Vergleichen der Mittelwerte.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair Stepwise( 1 );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Newman-Keuls"n( 1 );

```

#### Normal Quantile Label

**Syntax:** obj << Normal Quantile Label( state=0|1 )

**Beschreibung:** Zeigt die Normal-Quantilskala in jedem geöffneten Quantildiagramm an oder blendet sie aus. Diese Option ist nur verfügbar, wenn ein Quantildiagramm geöffnet ist. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );
Wait( 2 );
obj << Normal Quantile Label( 0 );

```

#### Plot Actual by Quantile

**Syntax:** obj << Plot Actual by Quantile( state=0|1 )

**Beschreibung:** Zeigt rechts vom Diagramm der einfaktoriellen Analyse ein Quantildiagramm an oder blendet es aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Actual by Quantile( 1 );

```

#### Plot Quantile by Actual

**Syntax:** obj << Plot Quantile by Actual( state=0|1 )

**Beschreibung:** Zeigt ein Quantildiagramm mit der Y-Variablen auf der horizontalen Achse und kumulierten Wahrscheinlichkeiten auf der vertikalen Achse an oder blendet es aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );

```

#### Points

**Syntax:** obj << Points( state=0|1 )

**Beschreibung:** Zeigt Datenpunkte im einfaktoriellen Diagramm an oder blendet sie aus. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
Wait( 2 );
obj << Points( 0 );

```

#### Points Jittered

**Syntax:** obj << Points Jittered( "Keine"|"Automatisch"|"Zufällig gleichverteilt"|"Zufällig normalverteilt"|"Dichte zufällig"|"Gepackt"|"Raster"|"Hex.-Raster"|"Bienenschwarm"="Automatisch" )

**Beschreibung:** Gibt die Streuung der Datenpunkte an. Wenn ausgewählt, zittern die Datenpunkte, um überlappende Symbole zu vermeiden. Standardmäßig „Automatisch“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Oneway( Y( :Sepal length ), X( :Species ) );
obj << Points Jittered( "Binned" );

```

#### Points Spread

**Syntax:** obj << Points Spread( state=0|1 )

**Beschreibung:** Gibt die Streuung der Datenpunkte an. Wenn ausgewählt, werden die Datenpunkte über die Breite des Intervalls verteilt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Points Spread( 1 );

```

#### Pooled Variance

**Syntax:** obj << Ratios with Pooled Variance( state=0|1 );

**Beschreibung:** Zeigt oder verbirgt einen Verhältnisvergleich jedes Mittelwertpaares im Bericht. Unter der Annahme gleicher Varianzen ist das gepoolte Konfidenzintervall für das Mittelwertverhältnis das Fieller-Konfidenzintervall.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Pooled Variance( 1 );

```

#### Power

**Syntax:** obj << Power( Alpha( from, <to>, <by> ), Sigma( from, <to>, <by> ), Delta( from, <to>, <by> ), Number( from, <to>, <by> ), Solve for Power|Solve for Least Significant Number|Solve for Least Significant Value|Adjusted Power and Confidence Interval, Power Plot, Done )

**Beschreibung:** Bericht über statistische Power-Berechnungen. Die Argumente ermöglichen die Angabe von Bereichen für Alpha, Sigma, Delta und Gesamtstichprobengröße (Anzahl). Das fünfte Argument gibt die Ergebnisse des Berichts an. Das sechste Argument fordert ein Power-Diagramm an und das Argument „Fertig“ schließt das Dialogfeld „Power“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), All Graphs( 0 ) );
obj << Power(
	Alpha( 0.05 ),
	Sigma( 3.382, 3.73 ),
	Delta( 2.79679 ),
	Number( 10, 90, 5 ),
	Solve for Power,
	Power Plot,
	Done
);

```

#### Proportion of Densities

**Syntax:** obj << Proportion of Densities( state=0|1 )

**Beschreibung:** Zeigt ein Diagramm des Beitrags jeder Stufe der X-Variablen an der Dichte an oder blendet es aus. Der Beitrag wird als Anteil an der Gesamtdichte über den Bereich der X-Variablen angezeigt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Proportion of Densities( 1 );

```

#### Quantiles

**Syntax:** obj << Quantiles( state=0|1 )

**Beschreibung:** Zeigt Box-Plots im einfaktoriellen Diagramm an oder blendet sie aus und zeigt einen Quantilbericht an oder blendet ihn aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Quantiles( 1 );

```

#### Robust Fit

**Syntax:** obj << Robust Fit( state=0|1 )

**Beschreibung:** Erzeugt Huber-Schätzwerte, die bei kleinen Residuen äquivalent sind mit Kleinste-Quadrate-Residuen und bei großen Residuen mit kleinsten Absolutwerten äquivalent sind.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Robust Fit( 1 );

```

#### Robust Means Lines

**Syntax:** obj << Robust Means Lines( state=0|1 )

**Beschreibung:** Zeigt eine Linie am robusten Mittelwert jeder Gruppe an oder blendet sie aus. Diese Option ist nur verfügbar, wenn eine Option „Robust“ ausgewählt ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Robust Fit( 1 );
obj << Robust Means Lines( 1 );

```

#### Save Normal Quantiles

**Syntax:** obj << Save Normal Quantiles

**Beschreibung:** Speichert Normal-Quantilwerte für jede Stufe der X-Variablen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Normal Quantiles;

```

#### Save Predicted

**Syntax:** obj << Save Predicted

**Beschreibung:** Speichert den vorhergesagten Mittelwert der Y-Variablen für jede Stufe der X-Variablen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Predicted;

```

#### Save Residuals

**Syntax:** obj << Save Residuals

**Beschreibung:** Speichert Werte, die als Y-Variable minus dem Mittelwert der Y-Variablen innerhalb jeder Stufe der X-Variablen berechnet werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Residuals;

```

#### Save Standardized

**Syntax:** obj << Save Standardized

**Beschreibung:** Speichert standardisierte Werte der Y-Variablen für jede Stufe der X-Variablen. Der standardisierte Wert ist die zentrierte Zielgröße dividiert durch die Standardabweichung innerhalb jeder Stufe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Standardized;

```

#### Select Group

**Syntax:** obj << Select Group( X value )

**Beschreibung:** Wählt eine Gruppe so aus, dass der entsprechende Kreis hervorgehoben wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Weight ), X( :Age ), Each Pair );
Wait( 2 );
obj << Select Group( 14 );

```

#### Set Alpha Level

**Syntax:** obj << Set Alpha Level( alpha=0.05 )

**Beschreibung:** Ändert das Alpha-Niveau der Konfidenzintervalle, Mittelwertdiamanten und der Werte der Konfidenzniveaus in Berichten. Standardmäßig „0.05“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );
Wait( 2 );
obj << Set Alpha Level( 0.01 );

```

#### Set α Level

**Syntax:** obj << Set α Level( alpha=0.05 )

**Beschreibung:** Ändert das Alpha-Niveau der Konfidenzintervalle, Mittelwertdiamanten und der Werte der Konfidenzniveaus in Berichten. Standardmäßig „0.05“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );
Wait( 2 );
obj << Set Alpha Level( 0.01 );

```

#### Standard Deviations

**Syntax:** obj << Standard Deviations

**Beschreibung:** Ruft ein Fenster mit Optionen für Äquivalenz-, Superioritäts- oder Nicht-Inferioritätstests für Standardabweichungen auf. Geben Sie das kritische Verhältnis an.

#### Std Dev Lines

**Syntax:** obj << Std Dev Lines( state=0|1 )

**Beschreibung:** Zeigt Linien an oder blendet sie aus, die eine Standardabweichung oberhalb und unterhalb des Mittelwerts jeder Gruppe sind.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Std Dev Lines( 1 );

```

#### Steel With Control

**Syntax:** obj << Steel With Control( state = 0|1, {control level} )

**Beschreibung:** Zeigt Steels Test an oder blendet ihn aus, der die Gesamtfehlerrate beim Vergleich aller anderen Gruppen mit einer Kontrollgruppe sichert. Dies ist die nichtparametrische Variante der Dunnett-Methode.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Steel With Control( 1, {12} );

```

#### Steel-Dwass All Pairs

**Syntax:** obj << "Steel-Dwass All Pairs"n( state=0|1 )

**Beschreibung:** Zeigt Steel-Dwass-Test an oder blendet ihn aus, der die Gesamtfehlerrate sichert. Dies ist die nichtparametrische Variante von Tukeys Methode.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Steel-Dwass All Pairs"n( 1 );

```

#### Student's t

**Syntax:** obj << Each Pair( state=0|1 ); 

obj << "Student&apos;s t"n( state=0|1 ); 

obj << "Each Pair, Student&apos;s t"n( state=0|1 )

**Beschreibung:** Berechnet paarweise Einzelvergleiche mit t-Tests ohne Korrektur für multiples Testen. Bei den Meldungen für Vergleiche einfaktorieller Mittelwerte finden Sie weitere Anzeigeoptionen.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1 );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Student's t"n( 1 );

```

#### Tukey HSD

**Syntax:** obj << All Pairs( state=0|1 ); 

obj << Tukey HSD( state=0|1 ); 

obj << "All Pairs, Tukey HSD"n( state=0|1 )

**Beschreibung:** Berechnet den Tukey HSD-Test (HSD = Honestly Significant Difference); dieser Test schützt die Gesamtfehlerrate. Bei den Meldungen für Vergleiche einfaktorieller Mittelwerte finden Sie weitere Anzeigeoptionen.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Tukey HSD( 1 );

```

#### Unequal Variances

**Syntax:** obj << Unequal Variances( state=0|1 )

**Beschreibung:** Zeigt vier Tests auf Gleichheit von Gruppenvarianzen an oder blendet sie aus. Diese Option erzeugt auch den Welch-Test, bei dem es sich um einen ANOVA-Test für den Vergleich von Mittelwerten handelt, wenn die Varianzen innerhalb Gruppen ungleich sind.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Unequal Variances( 1 );

```

#### Unpooled Variance

**Syntax:** obj << Ratios with Unpooled Variance( state=0|1 );

**Beschreibung:** Zeigt oder verbirgt einen Verhältnisvergleich jedes Mittelwertpaares im Bericht. Unter der Annahme ungleicher Varianzen wird das nicht-gepoolte Satterthwaite-basierte Konfidenzintervall für das Mittelwertverhältnis berechnet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Unequal Variance( 1 );

```

#### Van Der Waerden Exact Test

**Syntax:** obj << Van Der Waerden Exact Test( state=0|1 )

**Beschreibung:** Zeigt eine Analyse der Van-der-Waerden-Scores, die mit den Quantilen der Standardnormalverteilung berechnet werden, an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Van Der Waerden Exact Test( 1 );

```

#### Wilcoxon Each Pair

**Syntax:** obj << Wilcoxon Each Pair( state=0|1 )

**Beschreibung:** Zeigt Wilcoxons Test für alle möglichen Vergleiche ohne Korrektur für mehrere Tests an oder blendet ihn aus. Dies ist die nichtparametrische Variante der Methode „Jedes Paar, Student-t“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Wilcoxon Each Pair( 1 );

```

#### Wilcoxon Exact Test

**Syntax:** obj << Wilcoxon Exact Test( state=0|1 )

**Beschreibung:** Zeigt eine Analyse der Wilcoxon-Scores mittels exakter Methoden für jedes Paar von Kategorien an oder blendet sie aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Wilcoxon Exact Test( 1 );

```

#### Wilcoxon Test

**Syntax:** obj << Wilcoxon Test( state=0|1 )

**Beschreibung:** Zeigt einen Test basierend auf Wilcoxon-Rang-Scores an oder blendet ihn aus. Die Wilcoxon-Rang-Scores sind die einfachen Ränge der Daten. Der Wilcoxon-Test ist der leistungsstärkste Rangtest für Fehler mit logistischen Verteilungen. Wenn die X-Variable genau zwei Stufen hat, ist der Wilcoxon-Test äquivalent zum Mann-Whitney-Test. Wenn die X-Variable mehr als zwei Stufen hat, wird der Kruskal-Wallis-Test durchgeführt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Wilcoxon Test( 1 );

```

#### With Best

**Syntax:** obj << With Best( state=0|1 ); 

obj << Hsu MCB( state=0|1 ); 

obj << "With Best, Hsu MCB"n( state=0|1 )

**Beschreibung:** Berechnet den Hsu MCB-Test (MCB = Multiple Comparison with Best); dabei wird getestet, ob die Mittelwerte kleiner als das unbekannte Maximum sind. Bei den Meldungen für Vergleiche einfaktorieller Mittelwerte finden Sie weitere Anzeigeoptionen.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Best( 1 );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Hsu MCB( 1 );

```

#### With Control

**Syntax:** obj << With Control( state=0|1, {control ID} ); 

obj << "Dunnett&apos;s"n( state=0|1, {control ID} ); 

obj << "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**Beschreibung:** Berechnet Dunnetts Test; dabei wird getestet, ob sich die Mittelwerte vom Mittelwert einer Kontrollgruppe unterscheiden. Bei den Meldungen für Vergleiche einfaktorieller Mittelwerte finden Sie weitere Anzeigeoptionen.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15} );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Dunnett's"n( 1, {15} );

```

#### X Axis Proportional

**Syntax:** obj << X Axis Proportional( state=0|1 )

**Beschreibung:** Gibt die Abstände auf der horizontalen Achse an. Wenn ausgewählt, sind die Abstände proportional zur Anzahl der Beobachtungen auf jeder Stufe. Diese Option ist nicht verfügbar, wenn die Option „Übereinstimmungsspalte“ ausgewählt ist. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), X Axis Proportional( 0 ) );
Wait( 2 );
obj << X Axis Proportional( 1 );

```

#### t Test

**Syntax:** obj << t Test( state=0|1 )

**Beschreibung:** Zeigt einen Bericht zum t-Test an, der davon ausgeht, dass die Varianzen ungleich sind, oder blendet ihn aus. Diese Option ist nur verfügbar, wenn die X-Variable exakt zwei Stufen hat.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << t Test( 1 );

```

#### van der Waerden Test

**Syntax:** obj << van der Waerden Test( state=0|1 )

**Beschreibung:** Zeigt einen Test basierend auf Van der Waerden-Rang-Scores an oder blendet ihn aus. Die Van der Waerden-Rang-Scores sind die Ränge der Daten dividiert durch 1 plus ein Score-Wert. Der Score-Wert ist die Anzahl der Beobachtungen transformiert in einen Normalverteilungs-Score durch Anwenden der inversen Normalverteilungsfunktion. Der Van der Waerden-Test ist der leistungsstärkste Rangtest für Fehler mit Normalverteilungen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << van der Waerden Test( 1 );

```

### Freigegebene Elementmeldungen

#### Action

**Syntax:** obj << Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntax:** obj << Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Copy Script;

```

#### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Data Table Window;

```

#### Get By Levels

**Syntax:** obj << Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```jsl

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

#### Get Data Table

**Syntax:** obj << Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Syntax:** obj << Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Syntax:** obj << Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Syntax:** obj << Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Syntax:** obj << Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

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

#### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

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

#### Redo Analysis

**Syntax:** obj << Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

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

#### Remove Local Data Filter

**Syntax:** obj << Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

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

#### Render Preset

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Syntax:** obj << Report;

Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

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

#### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

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

#### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Syntax:** obj << Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Title( "My Platform" );

```

#### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Syntax:** obj << View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Syntax:** obj = Oneway(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### Spalten

#### Block

**Syntax:** obj << Block( column )

**Beschreibung:** Gibt eine Blockbildungsvariable an. Wenn diese Spalte angegeben ist, werden die Werte der Zielgrößenvariablen durch die Blockbildungsvariable zentriert.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1 );

```

#### By

**Syntax:** obj << By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );

```

#### Freq

**Syntax:** obj << Freq( column )

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Oneway( Y( :Height ), X( :Age ), Freq( _freqcol ) );

```

#### Grouping

**Syntax:** obj << Grouping( column(s) )

**Beschreibung:** Gibt die Prädiktorvariablen an. Diese Variablen müssen einen ordinalen oder nominalen Modellierungstyp haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Response

**Syntax:** obj << Response( column(s) )

**Beschreibung:** Gibt die stetige Zielgrößenvariable an oder Variablen, die Sie analysieren möchten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Weight

**Syntax:** obj << Weight( column )

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Oneway( Y( :Height ), X( :Age ), Weight( _weightcol ) );

```

#### X

**Syntax:** obj << X( column(s) )

**Beschreibung:** Gibt die Prädiktorvariablen an. Diese Variablen müssen einen ordinalen oder nominalen Modellierungstyp haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Y

**Syntax:** obj << Y( column(s) )

**Beschreibung:** Gibt die stetige Zielgrößenvariable an oder Variablen, die Sie analysieren möchten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Zugehörige Konstruktoren

#### Oneway

**Syntax:** Oneway( Y( columns ), X( columns ) )

**Beschreibung:** Modelliert eine stetige Zielgröße über einen Satz kategorialer Gruppen. Analysemethoden sind u.a. ANOVA, Mittelwertvergleiche, Mittelwertanalyse und Quantildiagramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

