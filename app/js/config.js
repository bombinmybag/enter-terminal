/**
 * Created by i.sungurov on 02.10.13.
 */

enterTerminal.config(['$routeProvider', function ($routeProvider) {

    'use strict';

//        preliminaryRrecord

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

    .constant('SEND_ID_URL', 'http://enter.local/client/sendid')                             /* Устанавливаем идетификатор клиента */

    .constant('INVITE_NEW_URL', 'http://enter.local/visitors/invite')                       /* Пригласить из общей очереди */
    .constant('INVITE_AGAIN_URL', 'http://enter.local/visitors/inviteagain')                /* Повторно пригласить из общей очереди */
    .constant('HOLD_URL', 'http://enter.local/visitors/hold')                               /* Отложить прием */
    .constant('INVITE_HOLDED_URL', 'http://enter.local/visitors/inviteholded')              /* Пригласить из персональной очереди */
    .constant('START_OPERATION_URL', 'http://enter.local/visitors/startoperation')          /* Начать прием */
    .constant('COMPLETE_OPERATION_URL', 'http://enter.local/visitors/completeoperation')    /* Закончить приём */
    .constant('CANCEL_OPERATION_URL', 'http://enter.local/visitors/canceloperation')        /* Не явился */
    .constant('REDIRECT_TICKET_URL', 'http://enter.local/visitors/redirect')                /* Перенаправить */

    .constant('ACTIVE_TICKET_PRODUCT_COUNT_URL', 'http://enter.local/tickets/count')        /* Количество в общей очереди  */
    .constant('PERSONAL_QUEUE_URL', 'http://enter.local/tickets/holded')                    /* Персоональная очередь */
    .constant('WORK_PLACE_CLIENT_URL', 'http://enter.local/clients/workplace')              /* Рабочее место*/
    .constant('MENU_URL', 'http://enter.local/subscribtion/menu')                           /* Рабочее место*/

    .constant('CATEGORIES_URL', 'http://enter.local/categories')                            /* Категории */
    .constant('PRODUCTS_URL', 'http://enter.local/products');                               /* Услуги */

