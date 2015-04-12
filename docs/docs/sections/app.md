
# Apps

> **Apps** and **Controllers** inherits from a same Common class and they share the same public methods.
Every methods is executed in the Jails elements context.

```js
jails.app('my-app', function(html, data){
    //Here you can call any public methods
    //Or even create your own
});
```

The markup should specify the type of Jails module and it's name aswell.

```html
<body data-app="my-app" />
<div data-controller="my-controller" data-template />
<div data-component="my-component" />
```

---

## .init
Init is automatically called by `Jails`, is really usefull to start your application and let the variables and init things on **top**.

    .init function();

---
## .watch
Delegates a event to the container class. You don't have to append events again when child nodes are refreshed.

    .watch function( String:selector, String:event, Function:method );



## .x
This method is called the EXecuter, used when you want to execute some method of other higher class
such as App, Controller or a View.

    .x function( selector) : Function( String method, arguments... );


---
## .emit
Emits an event to node parents and a optional data, name will be appended to the Jails module name.
The above example will fire `my-component:loaded` to node parents.

    .emit function( name, [data] );

---
## .listen
This method is used to catch **emit** events. While **.listen** and **.emit** has a closed scope and limits to parent and child limits, **.publish** and **subscribe** has a "global" behavior, any Jails module can listen and emit an event.

    .listen function( name, method );

---

## .publish
Fires an event globally, every module which is subscribed will listen to that. `data` is optional.

    .publish( event, [data]);

---
## .subscribe
Listen to a global event, and executes the callback. If `publish` send a data, it will be sent as a parameter of callback function.

    .subscribe( event, callback([data]) );
