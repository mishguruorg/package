# CHANGELOG

## 7.0.0
- Updates to ava@2
- Updates to read-pkg-up@6
- Enabled following flags for typescript compiler: `forceConsistentCasingInFileNames`, `incremental`, `noUnusedLocals`, `noUnusedParameters`, `removeComments` and `diagnostics`

## 6.0.0

Add typescript support.

## 5.2.0

- We are using the latest `@mishguru/eslint-config`. There is now a maximum
  400 lines per file.

## 5.0.0
- Husky got a major bump update (0.14.3 => 1.1.1)

From: https://github.com/typicode/husky

Simply move your existing hooks to `husky.hooks` field and use raw Git hooks names. Also, if you're using the `GIT_PARAMS` env variable, rename it to `HUSKY_GIT_PARAMS`.

```diff
{
  "scripts": {
-   "precommit": "npm test",
-   "commitmsg": "commitlint -E GIT_PARAMS"
  },
+ "husky": {
+   "hooks": {
+     "pre-commit": "npm test",
+     "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
+   }
+ }
}
```

Alternatively, you can run the following command which will do the same automatically for you ;)

```
./node_modules/.bin/husky-upgrade
```

## 4.0.0

- All bash scripts have been rewritten to use JavaScript. So this should work
  on Windows (not tested yet though!)
- You no longer need to define the babel and ava config inside the
  `package.json` files -- please delete any old config. All config is now
  completely internal to this module.
- Removed `pkg-test-only`. Now you can just use `pkg-test` and pass it files
  you want to test.
- Prettier logs with colours and formatting!
- `pkg-coverage` cleans up the `.nyc_output` folder after it's finished.
- The babel config has been reduced to just flow, object spread and commonjs.
  We used to include the `env` config. You should notice faster babel builds!
- `pkg-tidy` is now a thing, it runs prettier on all the files
- `pkg-precommit` is now a thing, it runs prettier and lint on all stage files before a commit happens

## 2.0.0

- `standard` updated to v11
