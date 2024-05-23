"use strict";
// Allow to define a set of named constants
var Responses;
(function (Responses) {
    Responses[Responses["no"] = 0] = "no";
    Responses[Responses["yes"] = 1] = "yes";
    Responses[Responses["maybe"] = 2] = "maybe";
})(Responses || (Responses = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PROGRESS"] = 0] = "PROGRESS";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
