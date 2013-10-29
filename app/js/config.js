/**
 * Created by i.sungurov on 02.10.13.
 */

enterTerminal.config(['$routeProvider', function ($routeProvider) {

    'use strict';

    $routeProvider.when(
        '/',
        {
            redirectTo: "/main"
        }
    );

    $routeProvider.when(
        '/settings',
        {
            templateUrl: 'partials/settings.html',
            controller: 'SettingsCtrl'
        }
    );


    $routeProvider.when(
        '/main',
        {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }
    );

    $routeProvider.when(
        '/ticketProduct',
        {
            templateUrl: 'partials/ticketProduct.html',
            controller: 'TicketProductCtrl'
        }
    );

    $routeProvider.when(
        '/record',
        {
            templateUrl: 'partials/record.html',
            controller: 'RecordCtrl'
        }
    );

    $routeProvider.otherwise(
        {
            redirectTo: "/main"
        }
    );

}])

    .constant('SEND_ID_URL', 'http://enter.local/client/sendid')                          /*Устанавливаем идетификатор клиента */
    .constant('MENU_URL', 'http://enter.local/subscribtion/menu')                         /*Меню*/

    .constant('SELECT_PRODUCT_URL', 'http://enter.local/tickets/selectproduct')           /*Выбрать продукт*/
    .constant('UNSELECT_PRODUCT_URL', 'http://enter.local/tickets/unselectproduct')       /*Убрать продукт из списка*/

    .constant('GET_MONTH_SCHEDULE', 'http://enter.local/products/schedule/month')         /*Выбрать продукт*/
    .constant('GET_DAY_SCHEDULE', 'http://enter.local/products/schedule/day')             /*Убрать продукт из списка*/

    .constant('CONFIRM_TICKET_URL', 'http://enter.local/tickets/confirm')                 /*Напечатать билет*/
    .constant('CANCEL_TICKET_URL', 'http://enter.local/tickets/cancel')                   /*Отменить всё*/



                                                        /*Для http*/

    .constant('HTTP_SERVER_URL', 'http://test-zone.comintech.ru/')                                                  /*Имя сервера?*/
    .constant('HTTP_MENU_URL', 'webterminal/menu')                                                                  /*Получить меню*/
    .constant('HTTP_GET_PRODUCT_MONTH_SCHEDULE_URL', 'webterminal/productmonthshedule/{productid}/{year}/{month}')       /*Получить расписание для месяца*/
    .constant('HTTP_GET_PRODUCT_DAY_SCHEDULE_URL', 'webterminal/productdayschedule/{productid}/{date}')             /*Получить расписание для дня*/
    .constant('HTTP_GET_FILE', 'webterminal/{productid}/{datetime}')                                                /*Забронировать билет*/

;

