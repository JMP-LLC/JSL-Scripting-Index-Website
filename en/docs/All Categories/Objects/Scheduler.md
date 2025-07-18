# Scheduler



## Associated Constructors

### Schedule

**Syntax:** Schedule( sec, scpt )

**Description:** Schedules an event that runs the scpt script argument after sec seconds have elapsed. Note: the scheduler only runs during idle times.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);

```

## Item Messages

### Clear Schedule

**Syntax:** obj &lt;&lt; Clear Schedule

**Description:** Clears the scheduler of all events currently scheduled.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Clear Schedule;

```

### Close

**Syntax:** obj &lt;&lt; Close

**Description:** Closes the scheduler.

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

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**JMP Version Added:** 19

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

**Syntax:** obj &lt;&lt; Restart

**Description:** Restarts the scheduler after it was stopped from running all events currently scheduled.

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

**Syntax:** obj &lt;&lt; Show Schedule

**Description:** Shows the next event currently scheduled.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Show Schedule;

```

### Stop

**Syntax:** obj &lt;&lt; Stop

**Description:** Stops the scheduler from running all events currently scheduled.

```jsl

s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;

```

