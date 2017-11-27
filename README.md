# Learn Travis

## Introduction

This is a small node.js example showing some practical ways to use TravisCI for automation.

Our goal is to create a simple web service that combines the [image-to-ascii](https://github.com/IonicaBizau/image-to-ascii) node.js module with [Twitter's profile image URLs](https://stackoverflow.com/questions/18381710/building-twitter-profile-image-url-with-twitter-user-id)

Using our web service, we should be able to use the following URL:

http://localhost:7000/profile/Twitter

And have our server download and turn this:

![@Twitter](test/Twitter.jpg)

into this:

```
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
fffffffffffffffffffffffffffffffffffLLfftfftfffffffffffffffff
ffffffffffffffffLCfffffffffffffLG88@@80GLLCCffffffffffffffff
ffffffffffffffff0@0CftffffffffG@@@@@@@@@@@8GLfffffffffffffff
ffffffffffffffff0@@@8GCffftftL@@@@@@@@@@@@0Cffffffffffffffff
fffffffffffffffff0@@@@@@80GCCG@@@@@@@@@@@@ftffffffffffffffff
ffffffffffffffffGG8@@@@@@@@@@@@@@@@@@@@@@8ffffffffffffffffff
ffffffffffffffffC@@@@@@@@@@@@@@@@@@@@@@@@Gtfffffffffffffffff
fffffffffffffffffL08@@@@@@@@@@@@@@@@@@@@8fffffffffffffffffff
ffffffffffffffffftL08@@@@@@@@@@@@@@@@@@8ffffffffffffffffffff
fffffffffffffffffffC8@@@@@@@@@@@@@@@@@0fffffffffffffffffffff
fffffffffffffffffftttLC0@@@@@@@@@@@@8Cffffffffffffffffffffff
ffffffffffffffffLCCGG08@@@@@@@@@@80Lffffffffffffffffffffffff
ffffffffffffffffLG08@@@@@@@@880GLfffffffffffffffffffffffffff
fffffffffffffffffttfffLLLLLfffftffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
```
