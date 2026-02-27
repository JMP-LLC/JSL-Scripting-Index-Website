# Scheduler



## Constructeurs associés

### Schedule

**Syntaxe :** Schedule( seconds, script )

**Description :** Planifie un événement qui exécutera le script scpt après un délai de sec secondes. Remarque : le planificateur n’est exécuté que pendant les temps d’inactivité.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);

```

## Messages d'éléments

### Clear Schedule

**Syntaxe :** obj &lt;&lt; Clear Schedule

**Description :** Efface le planificateur de tous les événements actuellement planifiés.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Clear Schedule;

```

### Close

**Syntaxe :** obj &lt;&lt; Close

**Description :** Ferme le planificateur.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
Wait( 2 );
s << Close;

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
t = s << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Restart

**Syntaxe :** obj &lt;&lt; Restart

**Description :** Redémarre le planificateur après l’avoir arrêté pour qu’il exécute tous les événements actuellement planifiés.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;
Wait( 2 );
s << Restart;

```

### Show Schedule

**Syntaxe :** obj &lt;&lt; Show Schedule

**Description :** Affiche l&apos;événement suivant actuellement planifié.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Show Schedule;

```

### Stop

**Syntaxe :** obj &lt;&lt; Stop

**Description :** Arrête l’exécution par le planificateur de tous les événements actuellement planifiés.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;

```

