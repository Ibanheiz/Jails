# Components

> Jails Components **lives in their own world**, does not know anything what's happening on **controllers** or **apps** and also doesn't know where he is or if there's other components in the page.

One of the most often architecture mistakes is related to not giving the right responsability for the components. It results in a large peace of code which does not will be reused at all.

Jails provides a **limited** way to construct a component. Whenever you create a new component and you see yourself in a situation where you need more methods such Jails component doesn't provide, then you'll know that what you're doing either is not a component, or you can split your tasks better in such a way that your component can achieve a job completely on it's own.

The only way your component can comunicate with your application is by emmiting an event. Then, other special class can be listening to it and go forward doing whatever you need to do.

## .listen
Listen for a higher-class module event, such as **controllers** or **apps**.

    .listen( event_name, callback )


## .emit
Emits an event to parents holders

    .emit( action, [data] );


## @annotations

Sometimes html *data* attributes can be very verbose, and you have to choose some long names
in order to not collide or crash another component. You can use annotations to send some configurations data by setting a comment in one line.

```html
<!-- @media-image({ max:800, src:'my/small/image.png' })-->
<img data-component="media-image" />
```

The annotations will be sent to your component class, you can use them with `data` attributes to set up your component.

```js
jails.component('media-image', function(html, annotation){

    this.init = function(){
        var max = annotation.max || html.data('max') || Infinity;
        //...
    };
});
```

## Emiting events

```js
jails.component('my-component', function(html){

    var cp = this;

    this.init = function(){
        html.find('a').on('click', shout);
    };

    function shout(){
        cp.emit('shout', { something:'lalalal'});
    }
});

```

## Listening to .emit

Your higher class such as `apps` or `controllers` should listen to your component event.

```js
jails.view('my-view', function(html, data){

    this.init = function(){
        this.listen('my-component:shout', log);
    };

    function log(ev, option){
        console.log('My component says' + option.something);
    }
});

```
