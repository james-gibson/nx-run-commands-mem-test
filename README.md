
# @nrwl/nx Bug Reproduction Example

This is a simple reproduction of an issue experienced in prod. Scripts ran by Nx through `run-commands` can crash if the logging crosses an unspecified limit

Setup
```
git clone git@github.com:james-gibson/nx-run-commands-mem-test.git
cd nx-run-commands-mem-test
npm i
```

Script under test: `libs/memtest/src/watch.js`

Expected behavior when running `node libs/memtest/src/watch.js`:
```
$ node libs/memtest/src/watch.js
Starting fake watch mode
The quick brown fox jumped over the dogs back
The quick brown fox jumped over the dogs back
The quick brown fox jumped over the dogs back

...

The quick brown fox jumped over the dogs back
The quick brown fox jumped over the dogs back
The quick brown fox jumped over the dogs back
Finished fake watch mode

```

Actual behavior when running `$ nx watch memtest` directly
```
$ nx watch memtest
Starting fake watch mode
The quick brown fox jumped over the dogs back
The quick brown fox jumped over the dogs back
The quick brown fox jumped over the dogs back

...

The quick brown fox jumped over the dogs back
The quick brown fox jumped over the dogs back
The quick brown fox jumped over the dogs back
Finished fake watch mode

```

Actual behavior when running `$ nx start memtest`
```
$ nx start memtest
jgibson-mbp:test jgibson$ nx start memtest

> nx run memtest:start 
Starting fake compilation

> nx run memtest:prepare 
Starting fake prepare mode
Finishing fake prepare mode

> nx run memtest:hot 

> nx run memtest:watch 

> nx run memtest:serve 
Starting fake watch mode
Serving

The quick brown fox jumped over the dogs back
The quick brown fox jumped over the dogs back
The quick brown fox jumped over the dogs back

...

The quick brown fox jumped over the dogs back
The quick brown fox jumped over the dogs back
The quick brown fox jumped over the dogs back
Warning: @nrwl/run-commands command "nx watch memtest" exited with non-zero status code
```


