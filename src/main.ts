// const StatusEnumes = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }


// console.log(StatusEnumes.inProgress)

// ? Enum - enumerable
// Enum is a Data Type
enum StatusEnum {
    NotStarted,
    InProgress,
    Done
}

let notStartedStatusEnum: StatusEnum = StatusEnum.NotStarted;

notStartedStatusEnum = StatusEnum.Done;

console.log(StatusEnum.InProgress) // ! O/P is 1


// ? When its output count from 0 (NotStarted = 0) its cannot readable

// ? So we can use this

enum StatusEnum_2 {
    NotStarted = "notStarted",
    InProgress = "inProgress",
    Done = "done"
}


// ? We can use rnum with interface

interface Task {
    id: string
    StatusEnum : StatusEnum_2
}