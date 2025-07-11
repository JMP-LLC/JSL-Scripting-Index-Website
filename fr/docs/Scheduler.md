# Scheduler



### Clear Schedule

**Syntaxe :** obj << Clear Schedule

**Description :** Efface le planificateur de tous les événements actuellement planifiés.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Clear Schedule;

```

### Close

**Syntaxe :** obj << Close

**Description :** Ferme le planificateur.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
Wait( 2 );
s << Close;

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
t = s << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Restart

**Syntaxe :** obj << Restart

**Description :** Redémarre le planificateur après l’avoir arrêté pour qu’il exécute tous les événements actuellement planifiés.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;
Wait( 2 );
s << Restart;

```

### Schedule

**Syntaxe :** Schedule( seconds, script )

**Description :** Planifie un événement qui exécutera le script scpt après un délai de sec secondes. Remarque : le planificateur n’est exécuté que pendant les temps d’inactivité.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);

```

### Show Schedule

**Syntaxe :** obj << Show Schedule

**Description :** Affiche l&apos;événement suivant actuellement planifié.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Show Schedule;

```

### Stop

**Syntaxe :** obj << Stop

**Description :** Arrête l’exécution par le planificateur de tous les événements actuellement planifiés.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;

```

