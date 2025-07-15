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

### Set Up
Each localization has its own site. This was done so that the search index is created on a per language basis.
The sites are located at the index.html in the subsequent folders.


### Update AWS Cloudfront
The sites are created using the `build` command above and then the contents of the site directory is copied into the `jmp-jsl-md-docs` s3 bucket. To have cloudfront reflect the changes you'll need to do a cache invalidation for the files you changed or can use the wildcard `/*`. 

### Cloudfront Function
There is a very basic js function that does localization redirection based on the Accept-Language browser setting. 

### Oddities/Build Notes

#### ZH-CN
There's an issue with the default lunr.zh.js script and the one included in js/ folder will fix the issue but its hard because these are generated within the build. The recommendation from the mkdocs maintainers is to use the ja search for stemming.
I switched it to ja so I can pre-build the index for caching and more efficient search but if you want the index to be built client side you can manually replace the lunr.zh.js script after its built. 


