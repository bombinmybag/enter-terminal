/**
 * Created by i.sungurov on 28.10.13.
 */

enterTerminal.service('httpTicketOperations', function ($q, $log, $http, $timeout,
                                                                         defferedHttpJsonp,
                                                                         HTTP_GET_PRODUCT_MONTH_SCHEDULE_URL,
                                                                         HTTP_GET_PRODUCT_DAY_SCHEDULE_URL,
                                                                         HTTP_GET_TICKET_PDF_FILE_URL,
                                                                         HTTP_RESERVE_TICKET_PRODUCT_URL,
                                                                         HTTP_CANCEL_TICKET_PRODUCT_URL,
                                                                         HTTP_CONFIRM_TICKET_URL,
                                                                         HTTP_CANCEL_TICKET_URL) {
    'use strict';
    var
        selectProduct = function (params, dateTime) {

            var url = HTTP_RESERVE_TICKET_PRODUCT_URL
                .replace("{productmenulinkid}", params[0]);


            if(dateTime){

                var formattedDateTime = moment(dateTime.currentDate)
                    .hours(Math.floor(dateTime.item.Minutes/60))
                    .minutes(dateTime.item.Minutes%60)
                    .format("DD.MM.YYYY-HH:mm");

                url = url.replace("{datetime}", formattedDateTime);

            } else{

                url = url.replace("{datetime}", "");
            }


            return defferedHttpJsonp.get(url);;
        },

        unselectProduct = function (id) {

            var url = HTTP_CANCEL_TICKET_PRODUCT_URL
                        .replace("{ticketproductid}", id);

            return defferedHttpJsonp.get(url);
        },

        getMonthSchedule = function(params){

            var url = HTTP_GET_PRODUCT_MONTH_SCHEDULE_URL
                            .replace("{productid}", params[0])
                            .replace("{year}",      params[1])
                            .replace("{month}",     params[2]);

            return defferedHttpJsonp.get(url);
        },

        getDaySchedule = function(params){

            var saturday = 6,
                sunday = 0,
                date = moment({year: params[1], month: params[2] - 1, day: params[3]}),
                day = parseInt(date.format("d"));

            if( ( day === saturday) || ( day === sunday)){

                var q = $q.defer();
                $timeout(function() {
                    q.resolve([]);
                });
                return q.promise;

            } else {

                var date = date.format("DD.MM.YYYY");
                var url = HTTP_GET_PRODUCT_DAY_SCHEDULE_URL
                    .replace("{productid}", params[0])
                    .replace("{date}",      date );

                return defferedHttpJsonp.get(url);
            }
        },

        confirmTicket = function (id) {
            var url = HTTP_CONFIRM_TICKET_URL
                        .replace("{ticketid}", id)
            var promise = defferedHttpJsonp.get(url)

            promise.then( function (){
                getPdfFile(id);
            });
            return promise;
        },

        cancelTicket = function (id) {
            var url = HTTP_CANCEL_TICKET_URL
                        .replace("{ticketid}", id)
            return defferedHttpJsonp.get(url);
        },

        getPdfFile = function (id){
            var url = HTTP_GET_TICKET_PDF_FILE_URL
                        .replace("{ticketid}", id);
            return defferedHttpJsonp.getFile(url);
        };

    return {
        selectProduct: selectProduct,
        unselectProduct: unselectProduct,
        getMonthSchedule: getMonthSchedule,
        getDaySchedule:getDaySchedule,
        confirmTicket: confirmTicket,
        cancelTicket: cancelTicket,
        getPdfFile: getPdfFile
    };
});