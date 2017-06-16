# novonity-file-insert
# Installation
```bash
$ npm i novonity-file-insert
```
# CLI
**For example:**
```javascript
file-insert -f dist/bin/www -l 2 -c \"require('babel-polyfill');\" -r
```
**options include**
- -f which file would be modified
- -l which line would be inserted
- -c what content would be inserted to the file
- -r whether to replace ' into "
