# JMPTelemetry



## Item Messages

### Block Periodic Writes

**Syntax:** _jmp_telemetry_ &lt;&lt; Block Periodic Writes( expr )

**Description:** Blocks periodic writes while evaluating the given expression. Telemetry is still accumulated, it just won&apos;t be written immediately.

**JMP Version Added:** 18

### Bulk Add

**Syntax:** _jmp_telemetry_ &lt;&lt; Bulk Add( n, &lt; Add Attributes(0|1) &gt; )

**Description:** Adds n telemetry test items. Optionally adds attributes to the items.

**JMP Version Added:** 18

### Clear

**Syntax:** _jmp_telemetry_ &lt;&lt; Clear

**Description:** Discards accumulated telemetry without sending.

**JMP Version Added:** 18

### Create JMP Employee File

**Syntax:** _jmp_telemetry_ &lt;&lt; Create JMP Employee File( email )

**Description:** Creates (or replaces) the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP Version Added:** 18

### Delete JMP Employee File

**Syntax:** _jmp_telemetry_ &lt;&lt; Delete JMP Employee File

**Description:** Deletes the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP Version Added:** 18

### Get

**Syntax:** _jmp_telemetry_ &lt;&lt; Get

**Description:** Returns accumulated telemetry as a list of associative arrays. This does not count as sending telemetry, so the telemetry items are retained.

**JMP Version Added:** 18

### Get Aggregation ID

**Syntax:** _jmp_telemetry_ &lt;&lt; Get Aggregation ID

**Description:** Get the current user&apos;s aggregation id. Returns the empty string if telemetry recording is off.

**JMP Version Added:** 19

### Get Enabled State

**Syntax:** _jmp_telemetry_ &lt;&lt; Get Enabled State

**Description:** Get the current enabled state: "Dormant", "Disabled", or "Enabled".

**JMP Version Added:** 19

### Get Send Mode

**Syntax:** _jmp_telemetry_ &lt;&lt; Get Send Mode

**Description:** Returns the current send mode, as a string. Possible results include: "To Server", "To Directory", "To File", "To Null". For dev builds, the default is To Directory.

**JMP Version Added:** 18

### Get Send Path

**Syntax:** _jmp_telemetry_ &lt;&lt; Get Send Path

**Description:** If the current send mode is "To Directory" or "To File", returns the current send path. Otherwise returns the empty string.

**JMP Version Added:** 18

### Get Session ID

**Syntax:** _jmp_telemetry_ &lt;&lt; Get Session ID

**Description:** Get the current session id. Returns the empty string if telemetry recording is off.

**JMP Version Added:** 19

### Is Echo To Log

**Syntax:** _jmp_telemetry_ &lt;&lt; Is Echo To Log

**Description:** Get whether or not we&apos;re currently echoing items to the log.

**JMP Version Added:** 19

### Is On

**Syntax:** _jmp_telemetry_ &lt;&lt; Is On

**Description:** Is telemetry recording on.

**JMP Version Added:** 18

### Send

**Syntax:** _jmp_telemetry_ &lt;&lt; Send

**Description:** Sends accumulated telemetry.

**JMP Version Added:** 18

### Set Dormant

**Syntax:** _jmp_telemetry_ &lt;&lt; Set Dormant( 1|0 )

**Description:** Set or clear the dormant flag. Has no effect if built without TELEMETRY_HAS_DORMANT_STATE preprocessor flag set.

**JMP Version Added:** 19

### Set Echo To Log

**Syntax:** _jmp_telemetry_ &lt;&lt; Set Echo To Log( 1|0 )

**Description:** Enables whether or not to echo telemetry output to the log.

**JMP Version Added:** 19

### Set Send Mode

**Syntax:** _jmp_telemetry_ &lt;&lt; Set Send Mode( To File | To Directory | To Server | To Null, &lt; Default | "path" &gt; )

**Description:** Set the telemetry send mode. By default in dev builds telemetry is written to a directory. Include a path to change the path when setting the To File or To Directory send mode. Pass Default to reset the path to the default.

**JMP Version Added:** 18

### Suppress

**Syntax:** _jmp_telemetry_ &lt;&lt; Suppress( expr )

**Description:** Suppress collecting telemetry while evaluating the expression. This has no effect on telemetry accumulated before or after.

**JMP Version Added:** 18

