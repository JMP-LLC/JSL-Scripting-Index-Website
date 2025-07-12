# JMPTelemetry



## Item Messages

### Block Periodic Writes

**Syntax:** _jmp_telemetry_ << Block Periodic Writes( expr )

**Description:** Blocks periodic writes while evaluating the given expression. Telemetry is still accumulated, it just won&apos;t be written immediately.

### Bulk Add

**Syntax:** _jmp_telemetry_ << Bulk Add( n, < Add Attributes(0|1) > )

**Description:** Adds n telemetry test items. Optionally adds attributes to the items.

### Clear

**Syntax:** _jmp_telemetry_ << Clear

**Description:** Discards accumulated telemetry without sending.

### Create JMP Employee File

**Syntax:** _jmp_telemetry_ << Create JMP Employee File( email )

**Description:** Creates (or replaces) the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

### Delete JMP Employee File

**Syntax:** _jmp_telemetry_ << Delete JMP Employee File

**Description:** Deletes the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

### Get

**Syntax:** _jmp_telemetry_ << Get

**Description:** Returns accumulated telemetry as a list of associative arrays. This does not count as sending telemetry, so the telemetry items are retained.

### Get Aggregation ID

**Syntax:** _jmp_telemetry_ << Get Aggregation ID

**Description:** Get the current user&apos;s aggregation id. Returns the empty string if telemetry recording is off.

### Get Enabled State

**Syntax:** _jmp_telemetry_ << Get Enabled State

**Description:** Get the current enabled state: "Dormant", "Disabled", or "Enabled".

### Get Send Mode

**Syntax:** _jmp_telemetry_ << Get Send Mode

**Description:** Returns the current send mode, as a string. Possible results include: "To Server", "To Directory", "To File", "To Null". For dev builds, the default is To Directory.

### Get Send Path

**Syntax:** _jmp_telemetry_ << Get Send Path

**Description:** If the current send mode is "To Directory" or "To File", returns the current send path. Otherwise returns the empty string.

### Get Session ID

**Syntax:** _jmp_telemetry_ << Get Session ID

**Description:** Get the current session id. Returns the empty string if telemetry recording is off.

### Is Echo To Log

**Syntax:** _jmp_telemetry_ << Is Echo To Log

**Description:** Get whether or not we&apos;re currently echoing items to the log.

### Is On

**Syntax:** _jmp_telemetry_ << Is On

**Description:** Is telemetry recording on.

### Send

**Syntax:** _jmp_telemetry_ << Send

**Description:** Sends accumulated telemetry.

### Set Dormant

**Syntax:** _jmp_telemetry_ << Set Dormant( 1|0 )

**Description:** Set or clear the dormant flag. Has no effect if built without TELEMETRY_HAS_DORMANT_STATE preprocessor flag set.

### Set Echo To Log

**Syntax:** _jmp_telemetry_ << Set Echo To Log( 1|0 )

**Description:** Enables whether or not to echo telemetry output to the log.

### Set Send Mode

**Syntax:** _jmp_telemetry_ << Set Send Mode( To File | To Directory | To Server | To Null, < Default | "path" > )

**Description:** Set the telemetry send mode. By default in dev builds telemetry is written to a directory. Include a path to change the path when setting the To File or To Directory send mode. Pass Default to reset the path to the default.

### Suppress

**Syntax:** _jmp_telemetry_ << Suppress( expr )

**Description:** Suppress collecting telemetry while evaluating the expression. This has no effect on telemetry accumulated before or after.

