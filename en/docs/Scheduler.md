# Scheduler



### Clear Schedule

**Syntax:** obj << Clear Schedule

**Description:** Clears the scheduler of all events currently scheduled.

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

**Syntax:** obj << Close

**Description:** Closes the scheduler.

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

### Restart

**Syntax:** obj << Restart

**Description:** Restarts the scheduler after it was stopped from running all events currently scheduled.

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

**Syntax:** Schedule( sec, scpt )

**Description:** Schedules an event that runs the scpt script argument after sec seconds have elapsed. Note: the scheduler only runs during idle times.

```js

Names Default To Here( 1 );
Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);

```

### Show Schedule

**Syntax:** obj << Show Schedule

**Description:** Shows the next event currently scheduled.

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

**Syntax:** obj << Stop

**Description:** Stops the scheduler from running all events currently scheduled.

```js

Names Default To Here( 1 );
s = Schedule(
	10,
	Beep();
	Print( "Hello World!" );
);
s << Stop;

```

