# JMPTelemetry



## 項目のメッセージ

### Block Periodic Writes

**構文:** _jmp_telemetry_ &lt;&lt; Block Periodic Writes( expr )

**説明:** Blocks periodic writes while evaluating the given expression. Telemetry is still accumulated, it just won&apos;t be written immediately.

**JMP追加されたバージョン:** 18

### Bulk Add

**構文:** _jmp_telemetry_ &lt;&lt; Bulk Add( n, &lt; Add Attributes(0|1) &gt; )

**説明:** Adds n telemetry test items. Optionally adds attributes to the items.

**JMP追加されたバージョン:** 18

### Clear

**構文:** _jmp_telemetry_ &lt;&lt; Clear

**説明:** Discards accumulated telemetry without sending.

**JMP追加されたバージョン:** 18

### Create JMP Employee File

**構文:** _jmp_telemetry_ &lt;&lt; Create JMP Employee File( email )

**説明:** Creates (or replaces) the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP追加されたバージョン:** 18

### Delete JMP Employee File

**構文:** _jmp_telemetry_ &lt;&lt; Delete JMP Employee File

**説明:** Deletes the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP追加されたバージョン:** 18

### Get

**構文:** _jmp_telemetry_ &lt;&lt; Get

**説明:** Returns accumulated telemetry as a list of associative arrays. This does not count as sending telemetry, so the telemetry items are retained.

**JMP追加されたバージョン:** 18

### Get Aggregation ID

**構文:** _jmp_telemetry_ &lt;&lt; Get Aggregation ID

**説明:** Get the current user&apos;s aggregation id. Returns the empty string if telemetry recording is off.

**JMP追加されたバージョン:** 19

### Get Enabled State

**構文:** _jmp_telemetry_ &lt;&lt; Get Enabled State

**説明:** Get the current enabled state: "Dormant", "Disabled", or "Enabled".

**JMP追加されたバージョン:** 19

### Get Send Mode

**構文:** _jmp_telemetry_ &lt;&lt; Get Send Mode

**説明:** Returns the current send mode, as a string. Possible results include: "To Server", "To Directory", "To File", "To Null". For dev builds, the default is To Directory.

**JMP追加されたバージョン:** 18

### Get Send Path

**構文:** _jmp_telemetry_ &lt;&lt; Get Send Path

**説明:** If the current send mode is "To Directory" or "To File", returns the current send path. Otherwise returns the empty string.

**JMP追加されたバージョン:** 18

### Get Session ID

**構文:** _jmp_telemetry_ &lt;&lt; Get Session ID

**説明:** Get the current session id. Returns the empty string if telemetry recording is off.

**JMP追加されたバージョン:** 19

### Is Echo To Log

**構文:** _jmp_telemetry_ &lt;&lt; Is Echo To Log

**説明:** Get whether or not we&apos;re currently echoing items to the log.

**JMP追加されたバージョン:** 19

### Is On

**構文:** _jmp_telemetry_ &lt;&lt; Is On

**説明:** Is telemetry recording on.

**JMP追加されたバージョン:** 18

### Send

**構文:** _jmp_telemetry_ &lt;&lt; Send

**説明:** Sends accumulated telemetry.

**JMP追加されたバージョン:** 18

### Set Dormant

**構文:** _jmp_telemetry_ &lt;&lt; Set Dormant( 1|0 )

**説明:** Set or clear the dormant flag. Has no effect if built without TELEMETRY_HAS_DORMANT_STATE preprocessor flag set.

**JMP追加されたバージョン:** 19

### Set Echo To Log

**構文:** _jmp_telemetry_ &lt;&lt; Set Echo To Log( 1|0 )

**説明:** Enables whether or not to echo telemetry output to the log.

**JMP追加されたバージョン:** 19

### Set Send Mode

**構文:** _jmp_telemetry_ &lt;&lt; Set Send Mode( To File | To Directory | To Server | To Null, &lt; Default | "path" &gt; )

**説明:** Set the telemetry send mode. By default in dev builds telemetry is written to a directory. Include a path to change the path when setting the To File or To Directory send mode. Pass Default to reset the path to the default.

**JMP追加されたバージョン:** 18

### Suppress

**構文:** _jmp_telemetry_ &lt;&lt; Suppress( expr )

**説明:** Suppress collecting telemetry while evaluating the expression. This has no effect on telemetry accumulated before or after.

**JMP追加されたバージョン:** 18

