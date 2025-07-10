# JMPTelemetry



### Block Periodic Writes

**Syntax:** _jmp_telemetry_ << Block Periodic Writes( expr )

**Beschreibung:** Blocks periodic writes while evaluating the given expression. Telemetry is still accumulated, it just won&apos;t be written immediately.

**JMP Version hinzugefügt:** 18

### Bulk Add

**Syntax:** _jmp_telemetry_ << Bulk Add( n, < Add Attributes(0|1) > )

**Beschreibung:** Adds n telemetry test items. Optionally adds attributes to the items.

**JMP Version hinzugefügt:** 18

### Clear

**Syntax:** _jmp_telemetry_ << Clear

**Beschreibung:** Discards accumulated telemetry without sending.

**JMP Version hinzugefügt:** 18

### Create JMP Employee File

**Syntax:** _jmp_telemetry_ << Create JMP Employee File( email )

**Beschreibung:** Creates (or replaces) the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP Version hinzugefügt:** 18

### Delete JMP Employee File

**Syntax:** _jmp_telemetry_ << Delete JMP Employee File

**Beschreibung:** Deletes the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP Version hinzugefügt:** 18

### Get

**Syntax:** _jmp_telemetry_ << Get

**Beschreibung:** Returns accumulated telemetry as a list of associative arrays. This does not count as sending telemetry, so the telemetry items are retained.

**JMP Version hinzugefügt:** 18

### Get Aggregation ID

**Syntax:** _jmp_telemetry_ << Get Aggregation ID

**Beschreibung:** Get the current user&apos;s aggregation id. Returns the empty string if telemetry recording is off.

**JMP Version hinzugefügt:** 19

### Get Enabled State

**Syntax:** _jmp_telemetry_ << Get Enabled State

**Beschreibung:** Get the current enabled state: "Dormant", "Disabled", or "Enabled".

**JMP Version hinzugefügt:** 19

### Get Send Mode

**Syntax:** _jmp_telemetry_ << Get Send Mode

**Beschreibung:** Returns the current send mode, as a string. Possible results include: "To Server", "To Directory", "To File", "To Null". For dev builds, the default is To Directory.

**JMP Version hinzugefügt:** 18

### Get Send Path

**Syntax:** _jmp_telemetry_ << Get Send Path

**Beschreibung:** If the current send mode is "To Directory" or "To File", returns the current send path. Otherwise returns the empty string.

**JMP Version hinzugefügt:** 18

### Get Session ID

**Syntax:** _jmp_telemetry_ << Get Session ID

**Beschreibung:** Get the current session id. Returns the empty string if telemetry recording is off.

**JMP Version hinzugefügt:** 19

### Is Echo To Log

**Syntax:** _jmp_telemetry_ << Is Echo To Log

**Beschreibung:** Get whether or not we&apos;re currently echoing items to the log.

**JMP Version hinzugefügt:** 19

### Is On

**Syntax:** _jmp_telemetry_ << Is On

**Beschreibung:** Is telemetry recording on.

**JMP Version hinzugefügt:** 18

### Send

**Syntax:** _jmp_telemetry_ << Send

**Beschreibung:** Sends accumulated telemetry.

**JMP Version hinzugefügt:** 18

### Set Dormant

**Syntax:** _jmp_telemetry_ << Set Dormant( 1|0 )

**Beschreibung:** Set or clear the dormant flag. Has no effect if built without TELEMETRY_HAS_DORMANT_STATE preprocessor flag set.

**JMP Version hinzugefügt:** 19

### Set Echo To Log

**Syntax:** _jmp_telemetry_ << Set Echo To Log( 1|0 )

**Beschreibung:** Enables whether or not to echo telemetry output to the log.

**JMP Version hinzugefügt:** 19

### Set Send Mode

**Syntax:** _jmp_telemetry_ << Set Send Mode( To File | To Directory | To Server | To Null, < Default | "path" > )

**Beschreibung:** Set the telemetry send mode. By default in dev builds telemetry is written to a directory. Include a path to change the path when setting the To File or To Directory send mode. Pass Default to reset the path to the default.

**JMP Version hinzugefügt:** 18

### Suppress

**Syntax:** _jmp_telemetry_ << Suppress( expr )

**Beschreibung:** Suppress collecting telemetry while evaluating the expression. This has no effect on telemetry accumulated before or after.

**JMP Version hinzugefügt:** 18

