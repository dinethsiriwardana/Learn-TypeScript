// const StatusEnumes = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }
// console.log(StatusEnumes.inProgress)
// ? Enum - enumerable
// Enum is a Data Type
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["NotStarted"] = 0] = "NotStarted";
    StatusEnum[StatusEnum["InProgress"] = 1] = "InProgress";
    StatusEnum[StatusEnum["Done"] = 2] = "Done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatusEnum = StatusEnum.NotStarted;
notStartedStatusEnum = StatusEnum.Done;
console.log(StatusEnum.InProgress); // ! O/P is 1
// ? When its output count from 0 (NotStarted = 0) its cannot readable
// ? So we can use this
var StatusEnum_2;
(function (StatusEnum_2) {
    StatusEnum_2["NotStarted"] = "notStarted";
    StatusEnum_2["InProgress"] = "inProgress";
    StatusEnum_2["Done"] = "done";
})(StatusEnum_2 || (StatusEnum_2 = {}));
