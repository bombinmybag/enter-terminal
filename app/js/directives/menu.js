/**
 * Created by i.sungurov on 08.10.13.
 */

enterTerminal.directive("menu", function (notifier, $location) {

    "use strict";

    var
        MAX_ITEM_NAME_LENGTH = 200,
        templateUrl = "templates/productMenu.html",
        replace = true,
        restrict = 'E',
        scope = {
            items: "=",
            applyRedirectMethod: "&",
            cancelMethod: "&"
        },

        createViewData = function (data) {
            var i;
            for (i = 0; i < data.Items.length; i += 1) {
                if (data.Items[i].Name.length > MAX_ITEM_NAME_LENGTH) {
                    data.Items[i].FullName = data.Items[i].Name;
                    data.Items[i].Name = data.Items[i].Name.substr(0, MAX_ITEM_NAME_LENGTH) + "...";
                }
            }
            return data;
        },

        getDataForDisplay = function (data, id) {

            var forDisplay = [],
                i;

            for (i = 0; i < data.Items.length; i += 1) {
                if ((data.Items[i].ParentItem === id) ||
                    (data.Items[i].ParentItem !== null && (data.Items[i].ParentItem.Id === id))) {

                    forDisplay.push(data.Items[i]);
                }
            }

            forDisplay.sort(function (item) {
                return item.Order;
            });

            return forDisplay;
        },
        link = function ($scope, iElement, iAttrs) {
            $scope.selectedService = null;
            $scope.currentParent = null;

            $scope.select = function ($event, item) {

                if (item.ProductId !== undefined) {
                    $scope.selectedService = item;
                } else {
                    $scope.displayData = getDataForDisplay($scope.data, item.Id);
                }
                $scope.currentParent = item;
            };

            $scope.showDetails = function ($event, item) {

                if ($event.stopPropagation) {
                    $event.stopPropagation();
                }
                if ($event.preventDefault) {
                    $event.preventDefault();
                }
                $event.cancelBubble = true;
                $event.returnValue = false;
                notifier.details.currentMessage  = item.FullName;
            };

            $scope.$watch("items", function (data) {

                if (data && data.Items) {
                    $scope.data = createViewData(angular.copy(data));
                    $scope.displayData = getDataForDisplay($scope.data, null);
                }
            });

            $scope.back = function () {
                $scope.selectedService = null;
                $scope.currentParent = $scope.currentParent.ParentItem;
                $scope.displayData = getDataForDisplay($scope.data, (($scope.currentParent) ? $scope.currentParent.Id : null));
//                $(".scroll-pane").data('jsp').reinitialise();
            };



            $scope.cancel = function () {
                $scope.cancelMethod();
            };


            $scope.$parent.back = $scope.back;

            $scope.applyRedirect = function () {
                $scope.$parent.item = $scope.selectedService;
                $scope.applyRedirectMethod($scope.selectedService);
            };

            $scope.record = function () {
                $location.path("/record");
            };


        };

    return {
        templateUrl: templateUrl,
        replace: replace,
        restrict: restrict,
        link: link,
        scope: scope
    };

});