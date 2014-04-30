toggleDisabled
==============

toggleDisabled is an AngularJS directive written with Twitter Bootstrap in mind. The goal is to bind the disabled attribute with a $scope element. When the $scope value is true, you can click the button, and when it is false, the button is disabled.

Wanna see it in action? Check out http://mmcbride1007.github.io/toggleDisabled

Usage
=====

Using toggleDisabled is pretty straightforward. First, add the directive to your app. You can just copy and paste the code from directive.js into your app.js file, or paste it where you store your directives.

To implement it, simply add the directive as an attribute on a button and pass in the $scope element that you want it to watch. Easy peasy.

```html
<button toggle-disabled="scopeAttr">Click me!</button>
```

Testing
=======

toggleDisabled works in all major browsers and has been tested to work with AngularJS up to the most recent version (1.2.15 at the time of writing this). This should _theoretically_ work in any version of Angular going forward as long as JQLite remains a component of the library.
