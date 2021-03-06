/**
 * Created by i.sungurov on 02.10.13.
 */

enterTerminal.config(['$routeProvider', function ($routeProvider) {

    'use strict';

    moment.lang("ru");

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

//    .constant('HTTP_SERVER_URL', 'http://192.168.10.40:80/')                                                        /*Имя сервера?*/
    .constant('HTTP_MENU_URL', 'webterminal/menu')                                                                  /*Получить меню*/
    .constant('HTTP_GET_PRODUCT_MONTH_SCHEDULE_URL', 'webterminal/productmonthshedule/{productid}/{year}/{month}')  /*Получить расписание для месяца*/
    .constant('HTTP_GET_PRODUCT_DAY_SCHEDULE_URL', 'webterminal/productdayschedule/{productid}/{date}')             /*Получить расписание для дня*/

    .constant('HTTP_GET_TICKET_PDF_FILE_URL', 'webterminal/ticketpdf/{ticketid}')

    .constant('HTTP_CONFIRM_TICKET_URL', 'webterminal/confirm/{ticketid}')
    .constant('HTTP_CANCEL_TICKET_URL', 'webterminal/cancelticket/{ticketid}')

    .constant('HTTP_RESERVE_TICKET_PRODUCT_URL', 'webterminal/reserve/{productmenulinkid}/{datetime}')
    .constant('HTTP_CANCEL_TICKET_PRODUCT_URL', 'webterminal/cancelticketproduct/{ticketproductid}');

