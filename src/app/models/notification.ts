
export enum INotificationFrom {
    TOP,
    BOTTOM
}
export enum INotificationAlign {
    RIGHT,
    CENTER,
    LEFT
}
export interface Inotification {
    from: INotificationFrom,
    align: INotificationAlign,
    type: String;
    icon: string;
    message: string;
}