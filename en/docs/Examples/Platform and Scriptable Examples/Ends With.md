# Ends With

## Ends With using For
> **Summary**: Processes stress data folders by removing trailing slashes and updating the folder paths.

<!-- Keywords: #JSLScriptingLanguage, #DataProcessing, #FolderManagement, #PathManipulation, #Automation -->

**Code**:
```jsl
stressSpaceKey = "JMPPOOLSTRESSTESTING";
stressDataFolders = {"$SAMPLE_DATA"};
mapDataFolder = "$MAPS";
For( i = 1, i <= Length( stressDataFolders ), i++,
	If( Ends With( stressDataFolders[i], "/" ) | Ends With( stressDataFolders[i], "\" ),
		stressDataFolders[i] = Substr( stressDataFolders[i], 1, Length( stressDataFolders[i] ) - 1 )
	)
);
```

**Code Explanation**:

1. Set `stressSpaceKey`.
2. Define `stressDataFolders`.
3. Define `mapDataFolder`.
4. Loop through `stressDataFolders`.
5. Check if folder ends with `/` or ``.
6. Remove trailing `/` or ``.
7. End loop.



