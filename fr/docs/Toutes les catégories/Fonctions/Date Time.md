# Date Time



### Abbrev Date

**Syntaxe :** s = Abbrev Date( datetime, &lt;format&gt; )

**Description :** Renvoie une représentation locale abrégée d&apos;une valeur « date-heure » de JMP.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Abbrev Date( Today() );

```

### As Date

**Syntaxe :** dt = As Date( datetime )

**Description :** Renvoie une valeur de date-heure marquée de façon interne comme une date à des fins de sortie.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
As Date( Today() );

```

### Date DMY

**Syntaxe :** z = Date DMY( d, m, y )

**Description :** Convertit au format « jour, mois et année » une valeur au format « date-heure » de JMP qui est le nombre de secondes depuis le 1er janvier 1904.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Difference

**Syntaxe :** delta = Date Difference( dt1, dt2, intervalName, &lt;alignment="start"&gt; )

**Description :** Renvoie la différence en intervalles de deux valeurs date/heure. Les valeurs de intervalName prises en charge sont « Année », « Quartier », « Mois », « Semaine », « Jour », « Heure », « Minute », « Seconde » et « Numérique ». Un alignment de "Start" comprend des intervalles complets ou partiels, alors que "Actual" renvoie uniquement des intervalles complets. Un alignment de "Fractional" renvoie des différences fractionnelles, en utilisant les moyennes de durée des intervalles « Année », « Quartier » et « Mois ».

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "start" );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "actual" );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
Date Difference(
	Date DMY( 31, 1, 2015 ),
	Date DMY( 1, 3, 2015 ),
	"Month",
	"fractional"
);

```

### Date Increment

**Syntaxe :** d = Date Increment( datetime, intervalName, &lt;incr=1&gt;, &lt;alignment="start"&gt; )

**Description :** Renvoie une nouvelle valeur date-heure en ajoutant un nombre incr d&apos;intervalles. Les valeurs de intervalName prises en charge sont « Année », « Quartier », « Mois », « Semaine », « Jour », « Heure », « Minute », « Seconde » et « Numérique ». Un alignment de "Start" tronque à l&apos;intervalle le plus proche avant d&apos;ajouter l&apos;incrément, alors que "Actual" retient la date/heure d&apos;entrée complète. Un alignment de "Fractional" permet des valeurs incr fractionnelles, en utilisant les moyennes de durée des intervalles « Année », « Quartier » et « Mois ».

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "start" );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "actual" );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**Syntaxe :** z = Date MDY( m, d, y )

**Description :** Convertit au format « mois, jour et année » une valeur au format « date-heure » de JMP qui est le nombre de secondes depuis le 1er janvier 1904.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**Syntaxe :** d = Day( datetime )

**Description :** Renvoie le jour du mois d&apos;une valeur « date-heure » de JMP, 1 - 31.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Day( Today() );

```

### Day Of Week

**Syntaxe :** d = Day Of Week( datetime )

**Description :** Renvoie le jour de la semaine d&apos;une valeur « date-heure » de JMP. Dimanche = 1, ..., Samedi = 7.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Day Of Week( Today() );

```

### Day Of Year

**Syntaxe :** d = Day Of Year( datetime )

**Description :** Renvoie le jour de l&apos;année d&apos;une valeur « date-heure » de JMP. Le 1er janvier est 1.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Day Of Year( Today() );

```

### Days In Month

**Syntaxe :** v = Days In Month(year, month)

**Description :** Renvoyer le nombre de jours dans un mois donné.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
v = Days In Month( 2016, 2 );

```

### Format

**Syntaxe :** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Description :** Renvoie le nombre au format spécifié. Les formats incluent les éléments de la boîte de dialogue Informations sur la colonne, tels que "Best" et "h:m:s". Voir la rubrique Aide pour découvrir d&apos;autres options, notamment les formats de p-value, de devise, de date et d&apos;heure, et géographiques.

**JMP Version ajoutée :** Avant la version 14

**Date et heure**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Motif de format**

```jsl

Names Default To Here( 1 );
Print(
	Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" )
);

```

**Pourcentage, devise**

```jsl

Names Default To Here( 1 );
pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

**Précision complète**

```jsl

Names Default To Here( 1 );
Show( Format( 88.54, "Best" ), Format( 88.54, "Best", "Full Precision" ) );

```

### Format Date

**Syntaxe :** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Description :** Renvoie le nombre au format spécifié. Les formats incluent les éléments de la boîte de dialogue Informations sur la colonne, tels que "Best" et "h:m:s". Voir la rubrique Aide pour découvrir d&apos;autres options, notamment les formats de p-value, de devise, de date et d&apos;heure, et géographiques.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Print(
	Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" )
);

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### HP Time

**Syntaxe :** t = HP Time()

**Description :** Renvoie une valeur de temps très précise, en micro secondes. Seulement utile en relation avec une autre valeur HP Time(). La valeur de temps représente le nombre de microsecondes depuis le démarrage de la session JMP.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
bt = HP Time();
Open( "$SAMPLE_DATA/Big Class.jmp" );
et = HP Time();
it = et - bt;
Show( it );

```

### Hour

**Syntaxe :** hr = Hour( datetime, &lt;12&gt; )

**Description :** Renvoie l&apos;heure d&apos;une valeur « date-heure » de JMP, dans le mode 12 heures (12, 1 - 11) ou dans le mode 24 heures (0 - 23).

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Hour( Today() );

```

### ISO Year

**Syntaxe :** yr = ISO Year( datetime )

**Description :** Renvoie l&apos;année ISO de la valeur date-time. Les années ISO correspondent aux semaines ISO ; elles commencent le lundi de la première semaine ayant au moins quatre jours.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
ISO Year( Today() );

```

### In Days

**Syntaxe :** y = In Days( &lt;x=1&gt; )

**Description :** Convertit en secondes une valeur en jours.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
In Days( 1.5 );

```

### In Hours

**Syntaxe :** y = In Hours( &lt;x=1&gt; )

**Description :** Convertit en secondes une valeur en heures.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
In Hours( 0.5 );

```

### In Minutes

**Syntaxe :** y = In Minutes( &lt;x=1&gt; )

**Description :** Convertit en secondes une valeur en minutes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
In Minutes( 1 );

```

### In Weeks

**Syntaxe :** y = In Weeks( &lt;x=1&gt; )

**Description :** Convertit en secondes une valeur en semaines.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
In Weeks( 1 );

```

### In Years

**Syntaxe :** y = In Years( &lt;x=1&gt; )

**Description :** Convertit en secondes une valeur en années.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
In Years( 1 );

```

### Informat

**Syntaxe :** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Description :** Analyse une chaîne d&apos;un format donné. Si le format correspond à un format de date et heure, la valeur est exprimée comme si elle était entre As Date() et renvoie la date au format jjmoiaaaa. L&apos;argument facultatif <<Restrict utilisé avec le « Meilleur » formatString permet uniquement la conversion aux formats entier, décimal et scientifique.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Informat( "07152000", "MMDDYYYY" );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
Informat( "86.8287° W", "Longitude DDD" );

```

**Exemple 4**

```jsl

Names Default To Here( 1 );
Informat( "123.45%", "Percent" );

```

**Exemple 5**

```jsl

Names Default To Here( 1 );
Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Is Leap Year

**Syntaxe :** v = Is Leap Year(year)

**Description :** Renvoyer si une année donnée est une année bissextile.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
v = Is Leap Year( 2016 );

```

### Long Date

**Syntaxe :** s = Long Date( datetime, &lt;format&gt; )

**Description :** Renvoie une représentation locale longue d&apos;une valeur « date-heure » de JMP.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Long Date( Today() );

```

### MDYHMS

**Syntaxe :** s = MDYHMS( datetime, &lt;format&gt; )

**Description :** Renvoie une représentation d&apos;une valeur « date-heure » de JMP dans l&apos;ordre suivant : mois, jour, année, heure, minute, seconde.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
MDYHMS( Today() );

```

### Minute

**Syntaxe :** min = Minute( datetime )

**Description :** Renvoie les minutes d&apos;une valeur « date-heure » de JMP, 0 - 59.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Minute( Today() );

```

### Month

**Syntaxe :** mon = Month( datetime )

**Description :** Renvoie le mois d&apos;une valeur « date-heure » de JMP, 1 - 12.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Month( Today() );

```

### Nth Day Of Week in the Month

**Syntaxe :** n = Nth Day Of Week in the Month( datetime )

**Description :** Renvoie un nombre entier représentant le nombre d&apos;instances du jour de la semaine de l&apos;argument datetime qui se sont produites durant le mois. Par exemple, le 28 novembre 2019 est le 4e jeudi du mois, la fonction renvoie donc la valeur 4.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Parse Date

**Syntaxe :** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Description :** Analyse une chaîne d&apos;un format donné. Si le format correspond à un format de date et heure, la valeur est exprimée comme si elle était entre As Date() et renvoie la date au format jjmoiaaaa. L&apos;argument facultatif <<Restrict utilisé avec le « Meilleur » formatString permet uniquement la conversion aux formats entier, décimal et scientifique.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Informat( "07152000", "MMDDYYYY" );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
Informat( "86.8287° W", "Longitude DDD" );

```

**Exemple 4**

```jsl

Names Default To Here( 1 );
Informat( "123.45%", "Percent" );

```

**Exemple 5**

```jsl

Names Default To Here( 1 );
Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Quarter

**Syntaxe :** q = Quarter( datetime )

**Description :** Renvoie le quart de la valeur date-heure, 1 - 4.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Quarter( Today() );

```

### Second

**Syntaxe :** sec = Second( datetime )

**Description :** Renvoie les secondes d&apos;une valeur « date-heure » de JMP, y compris la partie fractionnelle, 0 - 60 non inclus.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Second( Today() );

```

### Short Date

**Syntaxe :** s = Short Date( datetime, &lt;format&gt; )

**Description :** Renvoie une représentation locale (JJ/MM/AAAA) numérique d&apos;une valeur date-heure.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Short Date( Today() );

```

### Tick Seconds

**Syntaxe :** t = Tick Seconds()

**Description :** Renvoie une valeur de temps en secondes, avec généralement une précision d&apos;au moins 1/60 de seconde (une "graduation"), en fonction de l&apos;ordinateur. Seulement utile en relation avec une autre valeur Tick Seconds().

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
t1 = Tick Seconds();
Open( "$SAMPLE_DATA/Big Class.jmp" );
t2 = Tick Seconds();
Round( t2 - t1, 3 );

```

### Time Of Day

**Syntaxe :** sec = Time Of Day( datetime )

**Description :** Renvoie l&apos;heure d&apos;une valeur « date-heure » de JMP, y compris la partie fractionnelle.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Format( Time Of Day( Today() ), "h:m:s" );

```

### Today

**Syntaxe :** dt = Today()

**Description :** Renvoie la date et l&apos;heure du moment présent.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
As Date( Today() );

```

### Week Of Year

**Syntaxe :** d = Week Of Year( datetime, &lt;rule=1&gt; )

**Description :** Renvoie la semaine de l&apos;année d&apos;une valeur de la date-heure en utilisant l&apos;une des trois règles. Par défaut (règle 1), les semaines commencent le dimanche et le premier dimanche de l&apos;année se trouve dans la semaine no. 2. La semaine 1 est une semaine partielle ou vide (comme en 2006). La règle 2 établit que le premier dimanche se trouve dans la semaine 1, les jours précédents se trouvant dans la semaine 0. La règle 3 renvoie le numéro ISO de la semaine, selon lequel les semaines commencent le lundi et la semaine 1 est la première semaine de l&apos;année avec quatre jours dans cette année là. Avec les semaines ISO, il est possible que les premiers ou les derniers jours de l&apos;année appartiennent à une semaine de deux années voisines.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Week Of Year( Today() );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Show(
	Week Of Year( 01jan2012, 1 ),
	Week Of Year( 01jan2012, 2 ),
	Week Of Year( 01jan2012, 3 )
);

```

### Year

**Syntaxe :** yr = Year( datetime )

**Description :** Renvoie l&apos;année d&apos;une date.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Year( Today() );

```

