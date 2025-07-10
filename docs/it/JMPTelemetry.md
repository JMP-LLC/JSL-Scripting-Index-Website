# JMPTelemetry



### Block Periodic Writes

**Sintassi:** _jmp_telemetry_ << Block Periodic Writes( expr )

**Descrizione:** Blocks periodic writes while evaluating the given expression. Telemetry is still accumulated, it just won&apos;t be written immediately.

**JMP Versione aggiunta:** 18

### Bulk Add

**Sintassi:** _jmp_telemetry_ << Bulk Add( n, < Add Attributes(0|1) > )

**Descrizione:** Adds n telemetry test items. Optionally adds attributes to the items.

**JMP Versione aggiunta:** 18

### Clear

**Sintassi:** _jmp_telemetry_ << Clear

**Descrizione:** Discards accumulated telemetry without sending.

**JMP Versione aggiunta:** 18

### Create JMP Employee File

**Sintassi:** _jmp_telemetry_ << Create JMP Employee File( email )

**Descrizione:** Creates (or replaces) the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP Versione aggiunta:** 18

### Delete JMP Employee File

**Sintassi:** _jmp_telemetry_ << Delete JMP Employee File

**Descrizione:** Deletes the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP Versione aggiunta:** 18

### Get

**Sintassi:** _jmp_telemetry_ << Get

**Descrizione:** Returns accumulated telemetry as a list of associative arrays. This does not count as sending telemetry, so the telemetry items are retained.

**JMP Versione aggiunta:** 18

### Get Aggregation ID

**Sintassi:** _jmp_telemetry_ << Get Aggregation ID

**Descrizione:** Get the current user&apos;s aggregation id. Returns the empty string if telemetry recording is off.

**JMP Versione aggiunta:** 19

### Get Enabled State

**Sintassi:** _jmp_telemetry_ << Get Enabled State

**Descrizione:** Get the current enabled state: "Dormant", "Disabled", or "Enabled".

**JMP Versione aggiunta:** 19

### Get Send Mode

**Sintassi:** _jmp_telemetry_ << Get Send Mode

**Descrizione:** Returns the current send mode, as a string. Possible results include: "To Server", "To Directory", "To File", "To Null". For dev builds, the default is To Directory.

**JMP Versione aggiunta:** 18

### Get Send Path

**Sintassi:** _jmp_telemetry_ << Get Send Path

**Descrizione:** If the current send mode is "To Directory" or "To File", returns the current send path. Otherwise returns the empty string.

**JMP Versione aggiunta:** 18

### Get Session ID

**Sintassi:** _jmp_telemetry_ << Get Session ID

**Descrizione:** Get the current session id. Returns the empty string if telemetry recording is off.

**JMP Versione aggiunta:** 19

### Is Echo To Log

**Sintassi:** _jmp_telemetry_ << Is Echo To Log

**Descrizione:** Get whether or not we&apos;re currently echoing items to the log.

**JMP Versione aggiunta:** 19

### Is On

**Sintassi:** _jmp_telemetry_ << Is On

**Descrizione:** Is telemetry recording on.

**JMP Versione aggiunta:** 18

### Send

**Sintassi:** _jmp_telemetry_ << Send

**Descrizione:** Sends accumulated telemetry.

**JMP Versione aggiunta:** 18

### Set Dormant

**Sintassi:** _jmp_telemetry_ << Set Dormant( 1|0 )

**Descrizione:** Set or clear the dormant flag. Has no effect if built without TELEMETRY_HAS_DORMANT_STATE preprocessor flag set.

**JMP Versione aggiunta:** 19

### Set Echo To Log

**Sintassi:** _jmp_telemetry_ << Set Echo To Log( 1|0 )

**Descrizione:** Enables whether or not to echo telemetry output to the log.

**JMP Versione aggiunta:** 19

### Set Send Mode

**Sintassi:** _jmp_telemetry_ << Set Send Mode( To File | To Directory | To Server | To Null, < Default | "path" > )

**Descrizione:** Set the telemetry send mode. By default in dev builds telemetry is written to a directory. Include a path to change the path when setting the To File or To Directory send mode. Pass Default to reset the path to the default.

**JMP Versione aggiunta:** 18

### Suppress

**Sintassi:** _jmp_telemetry_ << Suppress( expr )

**Descrizione:** Suppress collecting telemetry while evaluating the expression. This has no effect on telemetry accumulated before or after.

**JMP Versione aggiunta:** 18

