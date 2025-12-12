# [JSL Scripting Index](https://jsl.jmp.com)
A huge shout-out to Evan McCorkle for doing the legwork to create a JSL script that scraped this info, and to Michael Crotty and his team for all the work they have done to organize and create examples for the vast array of JSL functionalities represented in the JMP Scripting Index.

## Background
The JSL Scripting Index is a menu found within the JMP software that shows how to use JMP software JSL commands. It is comprehensive, covering all JMP platforms and capabilities. In the desktop product, this can be found at **Help > Scripting Index**.

## Why did we create an online version?
Because the menu can only be accessed within the JMP desktop product, it can lead to vague references on user sites like the JMP Community. This online site gives users the ability to link directly to examples in online forums and quickly copy and paste examples without having to run a specific version of JMP. JMP is also aware of the ongoing efforts around LLM training, and we thought it would be helpful to provide more JSL materials so they could improve at JSL scripting as well.


## To Run This Locally 

1. Clone the Repository.
2. Choose a Run Platform.

### Run with Python 
Run the following commands: 
    a. Install the MK Docs Package
    ```
    pip install mkdocs
    ```
    b. Navigate to the correct language directory you would like to build
    ```
    cd en 
    ```
    c. To Build the Site
    ```
    mkdocs build
    ```
    d. To serve the site at localhost 3001
    ```
    mkdocs serve
    ```

If your OS environment contains multiple versions python you may need to specify in the command the python version on your machine.
Ex:
```
python3 -m mkdocs build
python3 -m mkdocs serve
```

### Docker
This can also be built with Docker. Dockerfile is included. 
```
docker build --no-cache -t  jsl-scripting-index .
```
```
docker run --rm -it -p 8000:8000 jsl-scripting-index:latest
```

## Set Up
Each localization has its own site. This was done so that the search index is created on a per language basis.
The sites are located at the index.html in the subsequent folders when built.


### Search 
The search index uses lunr.js to provide search. Due to the size of the site, this has been optimized for titles and subtitles only instead of full text search. 

### Sources
The JMP Data Tables that power this site are available in the JMP Scripting Index Data Tables section of this repo. There is also an xlsx and a csv for the latest english version of the site. Note, several examples were refreshed in the english version with developer efforts to provide more platform examples in 19.1. All languages will have these new examples once the final version of 19.1 is available. 


### Versioning
This site was started when JMP 19.0 was published. The site will continue to be updated as versions of JMP are made available. For users using earlier versions of JMP, there is a "JMP Version Added" field that can be referenced in the documentation. 




