# JMPTelemetry



## 항목 메시지

### Block Periodic Writes

**구문:** _jmp_telemetry_ &lt;&lt; Block Periodic Writes( expr )

**설명:** Blocks periodic writes while evaluating the given expression. Telemetry is still accumulated, it just won&apos;t be written immediately.

**JMP추가된 버전:** 18

### Bulk Add

**구문:** _jmp_telemetry_ &lt;&lt; Bulk Add( n, &lt; Add Attributes(0|1) &gt; )

**설명:** Adds n telemetry test items. Optionally adds attributes to the items.

**JMP추가된 버전:** 18

### Clear

**구문:** _jmp_telemetry_ &lt;&lt; Clear

**설명:** Discards accumulated telemetry without sending.

**JMP추가된 버전:** 18

### Create JMP Employee File

**구문:** _jmp_telemetry_ &lt;&lt; Create JMP Employee File( email )

**설명:** Creates (or replaces) the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP추가된 버전:** 18

### Delete JMP Employee File

**구문:** _jmp_telemetry_ &lt;&lt; Delete JMP Employee File

**설명:** Deletes the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP추가된 버전:** 18

### Get

**구문:** _jmp_telemetry_ &lt;&lt; Get

**설명:** Returns accumulated telemetry as a list of associative arrays. This does not count as sending telemetry, so the telemetry items are retained.

**JMP추가된 버전:** 18

### Get Aggregation ID

**구문:** _jmp_telemetry_ &lt;&lt; Get Aggregation ID

**설명:** Get the current user&apos;s aggregation id. Returns the empty string if telemetry recording is off.

**JMP추가된 버전:** 19

### Get Enabled State

**구문:** _jmp_telemetry_ &lt;&lt; Get Enabled State

**설명:** Get the current enabled state: "Dormant", "Disabled", or "Enabled".

**JMP추가된 버전:** 19

### Get Send Mode

**구문:** _jmp_telemetry_ &lt;&lt; Get Send Mode

**설명:** Returns the current send mode, as a string. Possible results include: "To Server", "To Directory", "To File", "To Null". For dev builds, the default is To Directory.

**JMP추가된 버전:** 18

### Get Send Path

**구문:** _jmp_telemetry_ &lt;&lt; Get Send Path

**설명:** If the current send mode is "To Directory" or "To File", returns the current send path. Otherwise returns the empty string.

**JMP추가된 버전:** 18

### Get Session ID

**구문:** _jmp_telemetry_ &lt;&lt; Get Session ID

**설명:** Get the current session id. Returns the empty string if telemetry recording is off.

**JMP추가된 버전:** 19

### Is Echo To Log

**구문:** _jmp_telemetry_ &lt;&lt; Is Echo To Log

**설명:** Get whether or not we&apos;re currently echoing items to the log.

**JMP추가된 버전:** 19

### Is On

**구문:** _jmp_telemetry_ &lt;&lt; Is On

**설명:** Is telemetry recording on.

**JMP추가된 버전:** 18

### Send

**구문:** _jmp_telemetry_ &lt;&lt; Send

**설명:** Sends accumulated telemetry.

**JMP추가된 버전:** 18

### Set Dormant

**구문:** _jmp_telemetry_ &lt;&lt; Set Dormant( 1|0 )

**설명:** Set or clear the dormant flag. Has no effect if built without TELEMETRY_HAS_DORMANT_STATE preprocessor flag set.

**JMP추가된 버전:** 19

### Set Echo To Log

**구문:** _jmp_telemetry_ &lt;&lt; Set Echo To Log( 1|0 )

**설명:** Enables whether or not to echo telemetry output to the log.

**JMP추가된 버전:** 19

### Set Send Mode

**구문:** _jmp_telemetry_ &lt;&lt; Set Send Mode( To File | To Directory | To Server | To Null, &lt; Default | "path" &gt; )

**설명:** Set the telemetry send mode. By default in dev builds telemetry is written to a directory. Include a path to change the path when setting the To File or To Directory send mode. Pass Default to reset the path to the default.

**JMP추가된 버전:** 18

### Suppress

**구문:** _jmp_telemetry_ &lt;&lt; Suppress( expr )

**설명:** Suppress collecting telemetry while evaluating the expression. This has no effect on telemetry accumulated before or after.

**JMP추가된 버전:** 18

