# JMPTelemetry



## Mensajes del elemento

### Block Periodic Writes

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Block Periodic Writes( expr )

**Descripción:** Blocks periodic writes while evaluating the given expression. Telemetry is still accumulated, it just won&apos;t be written immediately.

**JMP Versión agregada:** 18

### Bulk Add

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Bulk Add( n, &lt; Add Attributes(0|1) &gt; )

**Descripción:** Adds n telemetry test items. Optionally adds attributes to the items.

**JMP Versión agregada:** 18

### Clear

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Clear

**Descripción:** Discards accumulated telemetry without sending.

**JMP Versión agregada:** 18

### Create JMP Employee File

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Create JMP Employee File( email )

**Descripción:** Creates (or replaces) the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP Versión agregada:** 18

### Delete JMP Employee File

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Delete JMP Employee File

**Descripción:** Deletes the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP Versión agregada:** 18

### Get

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Get

**Descripción:** Returns accumulated telemetry as a list of associative arrays. This does not count as sending telemetry, so the telemetry items are retained.

**JMP Versión agregada:** 18

### Get Aggregation ID

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Get Aggregation ID

**Descripción:** Get the current user&apos;s aggregation id. Returns the empty string if telemetry recording is off.

**JMP Versión agregada:** 19

### Get Enabled State

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Get Enabled State

**Descripción:** Get the current enabled state: "Dormant", "Disabled", or "Enabled".

**JMP Versión agregada:** 19

### Get Send Mode

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Get Send Mode

**Descripción:** Returns the current send mode, as a string. Possible results include: "To Server", "To Directory", "To File", "To Null". For dev builds, the default is To Directory.

**JMP Versión agregada:** 18

### Get Send Path

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Get Send Path

**Descripción:** If the current send mode is "To Directory" or "To File", returns the current send path. Otherwise returns the empty string.

**JMP Versión agregada:** 18

### Get Session ID

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Get Session ID

**Descripción:** Get the current session id. Returns the empty string if telemetry recording is off.

**JMP Versión agregada:** 19

### Is Echo To Log

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Is Echo To Log

**Descripción:** Get whether or not we&apos;re currently echoing items to the log.

**JMP Versión agregada:** 19

### Is On

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Is On

**Descripción:** Is telemetry recording on.

**JMP Versión agregada:** 18

### Send

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Send

**Descripción:** Sends accumulated telemetry.

**JMP Versión agregada:** 18

### Set Dormant

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Set Dormant( 1|0 )

**Descripción:** Set or clear the dormant flag. Has no effect if built without TELEMETRY_HAS_DORMANT_STATE preprocessor flag set.

**JMP Versión agregada:** 19

### Set Echo To Log

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Set Echo To Log( 1|0 )

**Descripción:** Enables whether or not to echo telemetry output to the log.

**JMP Versión agregada:** 19

### Set Send Mode

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Set Send Mode( To File | To Directory | To Server | To Null, &lt; Default | "path" &gt; )

**Descripción:** Set the telemetry send mode. By default in dev builds telemetry is written to a directory. Include a path to change the path when setting the To File or To Directory send mode. Pass Default to reset the path to the default.

**JMP Versión agregada:** 18

### Suppress

**Sintaxis:** _jmp_telemetry_ &lt;&lt; Suppress( expr )

**Descripción:** Suppress collecting telemetry while evaluating the expression. This has no effect on telemetry accumulated before or after.

**JMP Versión agregada:** 18

