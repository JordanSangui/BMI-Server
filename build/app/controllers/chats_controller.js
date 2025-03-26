export default class ChatsController {
    index({}) {
        return [
            {
                message: 'ChatsController',
            }
        ];
    }
    async store({ auth }) {
        if (auth.isAuthenticated) {
        }
        return [
            {
                message: 'ChatsController.store',
            }
        ];
    }
}
//# sourceMappingURL=chats_controller.js.map