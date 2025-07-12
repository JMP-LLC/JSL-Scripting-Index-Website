# JMPTelemetry



## 项消息

### Block Periodic Writes

**语法:** _jmp_telemetry_ << Block Periodic Writes( expr )

**说明:** Blocks periodic writes while evaluating the given expression. Telemetry is still accumulated, it just won&apos;t be written immediately.

**JMP添加的版本:** 18

### Bulk Add

**语法:** _jmp_telemetry_ << Bulk Add( n, < Add Attributes(0|1) > )

**说明:** Adds n telemetry test items. Optionally adds attributes to the items.

**JMP添加的版本:** 18

### Clear

**语法:** _jmp_telemetry_ << Clear

**说明:** Discards accumulated telemetry without sending.

**JMP添加的版本:** 18

### Create JMP Employee File

**语法:** _jmp_telemetry_ << Create JMP Employee File( email )

**说明:** Creates (or replaces) the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP添加的版本:** 18

### Delete JMP Employee File

**语法:** _jmp_telemetry_ << Delete JMP Employee File

**说明:** Deletes the jmp_employee_email.txt file that JMP uses to identify telemetry items as coming from JMP employees.

**JMP添加的版本:** 18

### Get

**语法:** _jmp_telemetry_ << Get

**说明:** Returns accumulated telemetry as a list of associative arrays. This does not count as sending telemetry, so the telemetry items are retained.

**JMP添加的版本:** 18

### Get Aggregation ID

**语法:** _jmp_telemetry_ << Get Aggregation ID

**说明:** Get the current user&apos;s aggregation id. Returns the empty string if telemetry recording is off.

**JMP添加的版本:** 19

### Get Enabled State

**语法:** _jmp_telemetry_ << Get Enabled State

**说明:** Get the current enabled state: "Dormant", "Disabled", or "Enabled".

**JMP添加的版本:** 19

### Get Send Mode

**语法:** _jmp_telemetry_ << Get Send Mode

**说明:** Returns the current send mode, as a string. Possible results include: "To Server", "To Directory", "To File", "To Null". For dev builds, the default is To Directory.

**JMP添加的版本:** 18

### Get Send Path

**语法:** _jmp_telemetry_ << Get Send Path

**说明:** If the current send mode is "To Directory" or "To File", returns the current send path. Otherwise returns the empty string.

**JMP添加的版本:** 18

### Get Session ID

**语法:** _jmp_telemetry_ << Get Session ID

**说明:** Get the current session id. Returns the empty string if telemetry recording is off.

**JMP添加的版本:** 19

### Is Echo To Log

**语法:** _jmp_telemetry_ << Is Echo To Log

**说明:** Get whether or not we&apos;re currently echoing items to the log.

**JMP添加的版本:** 19

### Is On

**语法:** _jmp_telemetry_ << Is On

**说明:** Is telemetry recording on.

**JMP添加的版本:** 18

### Send

**语法:** _jmp_telemetry_ << Send

**说明:** Sends accumulated telemetry.

**JMP添加的版本:** 18

### Set Dormant

**语法:** _jmp_telemetry_ << Set Dormant( 1|0 )

**说明:** Set or clear the dormant flag. Has no effect if built without TELEMETRY_HAS_DORMANT_STATE preprocessor flag set.

**JMP添加的版本:** 19

### Set Echo To Log

**语法:** _jmp_telemetry_ << Set Echo To Log( 1|0 )

**说明:** Enables whether or not to echo telemetry output to the log.

**JMP添加的版本:** 19

### Set Send Mode

**语法:** _jmp_telemetry_ << Set Send Mode( To File | To Directory | To Server | To Null, < Default | "path" > )

**说明:** Set the telemetry send mode. By default in dev builds telemetry is written to a directory. Include a path to change the path when setting the To File or To Directory send mode. Pass Default to reset the path to the default.

**JMP添加的版本:** 18

### Suppress

**语法:** _jmp_telemetry_ << Suppress( expr )

**说明:** Suppress collecting telemetry while evaluating the expression. This has no effect on telemetry accumulated before or after.

**JMP添加的版本:** 18

