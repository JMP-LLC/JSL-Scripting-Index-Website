# JMPTelemetry



## Messages d'éléments

### Block Periodic Writes

**Syntaxe :** _jmp_telemetry_ << Block Periodic Writes( expr )

**Description :** Blocks periodic writes while evaluating the given expression. Telemetry is still accumulated, it just won&apos;t be written immediately.

**JMP Version ajoutée :** 18

### Bulk Add

**Syntaxe :** _jmp_telemetry_ << Bulk Add( n, < Add Attributes(0|1) > )

**Description :** Adds n telemetry test items. Optionally adds attributes to the items.

**JMP Version ajoutée :** 18

### Clear

**Syntaxe :** _jmp_telemetry_ << Clear

**Description :** Discards accumulated telemetry without sending.

**JMP Version ajoutée :** 18

### Create JMP Employee File

**Syntaxe :** _jmp_telemetry_ << Create JMP Employee File( email )

**Description :** Creates (or replaces) the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP Version ajoutée :** 18

### Delete JMP Employee File

**Syntaxe :** _jmp_telemetry_ << Delete JMP Employee File

**Description :** Deletes the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP Version ajoutée :** 18

### Get

**Syntaxe :** _jmp_telemetry_ << Get

**Description :** Returns accumulated telemetry as a list of associative arrays. This does not count as sending telemetry, so the telemetry items are retained.

**JMP Version ajoutée :** 18

### Get Aggregation ID

**Syntaxe :** _jmp_telemetry_ << Get Aggregation ID

**Description :** Get the current user&apos;s aggregation id. Returns the empty string if telemetry recording is off.

**JMP Version ajoutée :** 19

### Get Enabled State

**Syntaxe :** _jmp_telemetry_ << Get Enabled State

**Description :** Get the current enabled state: "Dormant", "Disabled", or "Enabled".

**JMP Version ajoutée :** 19

### Get Send Mode

**Syntaxe :** _jmp_telemetry_ << Get Send Mode

**Description :** Returns the current send mode, as a string. Possible results include: "To Server", "To Directory", "To File", "To Null". For dev builds, the default is To Directory.

**JMP Version ajoutée :** 18

### Get Send Path

**Syntaxe :** _jmp_telemetry_ << Get Send Path

**Description :** If the current send mode is "To Directory" or "To File", returns the current send path. Otherwise returns the empty string.

**JMP Version ajoutée :** 18

### Get Session ID

**Syntaxe :** _jmp_telemetry_ << Get Session ID

**Description :** Get the current session id. Returns the empty string if telemetry recording is off.

**JMP Version ajoutée :** 19

### Is Echo To Log

**Syntaxe :** _jmp_telemetry_ << Is Echo To Log

**Description :** Get whether or not we&apos;re currently echoing items to the log.

**JMP Version ajoutée :** 19

### Is On

**Syntaxe :** _jmp_telemetry_ << Is On

**Description :** Is telemetry recording on.

**JMP Version ajoutée :** 18

### Send

**Syntaxe :** _jmp_telemetry_ << Send

**Description :** Sends accumulated telemetry.

**JMP Version ajoutée :** 18

### Set Dormant

**Syntaxe :** _jmp_telemetry_ << Set Dormant( 1|0 )

**Description :** Set or clear the dormant flag. Has no effect if built without TELEMETRY_HAS_DORMANT_STATE preprocessor flag set.

**JMP Version ajoutée :** 19

### Set Echo To Log

**Syntaxe :** _jmp_telemetry_ << Set Echo To Log( 1|0 )

**Description :** Enables whether or not to echo telemetry output to the log.

**JMP Version ajoutée :** 19

### Set Send Mode

**Syntaxe :** _jmp_telemetry_ << Set Send Mode( To File | To Directory | To Server | To Null, < Default | "path" > )

**Description :** Set the telemetry send mode. By default in dev builds telemetry is written to a directory. Include a path to change the path when setting the To File or To Directory send mode. Pass Default to reset the path to the default.

**JMP Version ajoutée :** 18

### Suppress

**Syntaxe :** _jmp_telemetry_ << Suppress( expr )

**Description :** Suppress collecting telemetry while evaluating the expression. This has no effect on telemetry accumulated before or after.

**JMP Version ajoutée :** 18

