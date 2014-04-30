toggleDisabled
==============

toggleDisabled is an AngularJS directive written with Twitter Bootstrap in mind. The goal is to bind the disabled attribute with a $scope element. When the $scope value is true, you can click the button, and when it is false, the button is disabled.


Usage
=====

Simply add the directive as an attribute on a button and pass in the $scope element that you want it to watch.

```html
<button toggle-disabled="scopeAttr">Click me!</button>
```
