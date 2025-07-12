# Scheduler



## Associated Constructors

### Schedule

**Syntax:** Schedule( sec, scpt )

**Description:** Schedules an event that runs the scpt script argument after sec seconds have elapsed. Note: the scheduler only runs during idle times.

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);

```

## Item Messages

### Clear Schedule

**Syntax:** obj << Clear Schedule

**Description:** Clears the scheduler of all events currently scheduled.

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Clear Schedule;

```

### Close

**Syntax:** obj << Close

**Description:** Closes the scheduler.

```jsl

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

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

```jsl

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

**Syntax:** obj << Restart

**Description:** Restarts the scheduler after it was stopped from running all events currently scheduled.

```jsl

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

### Show Schedule

**Syntax:** obj << Show Schedule

**Description:** Shows the next event currently scheduled.

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Show Schedule;

```

### Stop

**Syntax:** obj << Stop

**Description:** Stops the scheduler from running all events currently scheduled.

```jsl

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;

```

