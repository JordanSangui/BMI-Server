import Notification from '#models/notification';
export default class NotificationsController {
    async index({}) {
        const notifications = await Notification.search('Magnify').take(20).get();
        console.log("notifications", notifications);
        return [];
    }
}
//# sourceMappingURL=notifications_controller.js.map