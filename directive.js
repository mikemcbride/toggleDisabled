app.directive('toggleDisabled', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.$watch(attrs.toggleDisabled, function (new_value, old_value) {
        if (new_value) {
          element.removeAttr('disabled')
        }
        else {
          element.attr('disabled', 'disabled')
        }
      })
    }
  }
})
