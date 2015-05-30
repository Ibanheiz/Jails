# Gulp Jails


## Scaffolds

There are some gulp jails tasks which will help you to create:

- config
- apps
- controllers
- components
- filters

After all is done in your gulp-jails setup, you can create project files easily,
just running a `gulp jails` command.

## config.js

Every Jails project needs a `config.js` file, you can create it with **gulp jails** command and point to your global variable using `-n` parameter.

```
gulp jails/config -n global.page
```

## Apps, Controllers, Components and Filters

For these classes the command is pretty much the same, you must define what you want to create and point to a name using the `-n` parameter.

```
gulp jails/app -n my-app
```

---
```
gulp jails/controller -n my-controller
```

---
```
gulp jails/filter -n my-filter
```

## Folder namespaces

If you want to arrange your files in directories, you can do it by using slashes on your module namespaces.

```
gulp jails/components -n form/submitter
```

That command will create a scaffold for the submitter component, and will place it on `components/form` folder.
