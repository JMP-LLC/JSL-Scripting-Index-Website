# Platform Preferences

## Platform Preferences Platform
> **Summary**: Sets platform preferences and defines MATLAB installation paths for a seamless integration with JMP.

<!-- Keywords: #JMPScriptingLanguage, #MATLABIntegration, #PlatformPreferences, #JSLCode, #TechnicalDocumentation -->

**Code**:
```jsl
// 
// Change me to the PATH and name of your MATLAB installation.
Platform Preferences(
	PathVar(
		MATLABROOT32(
			"C:\Program Files (x86)\MATLAB\R2013a"
		),
		MATLABROOT(
			"C:\Program Files\MATLAB\R2013a"
		)
	)
);
//Test out the connection, returns 0 if successful. 
/*MATLAB Init();
MATLAB Term ();*/;
```

**Code Explanation**:

1. Set platform preferences.
2. Define MATLABROOT32 path.
3. Define MATLABROOT path.
4. Assign MATLAB installation paths.



