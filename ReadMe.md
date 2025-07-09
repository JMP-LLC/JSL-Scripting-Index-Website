### A prototype of a static website with the JSL scripting index 
A absolutely huge shout out to Evan McCorkle for doing the leg work to create a jmp table that screen scraped this info

### To Run 
```
pip install mkdocs
mkdocs build
mkdocs serve
```

MAC Issues (Kristen):
```
python3 -m mkdocs build
python3 -m mkdocs serve
```

### Docker
```
docker build --no-cache -t  jsl-scripting-index .
```
```
docker run --rm -it -p 8000:8000 jsl-scripting-index:latest
```
