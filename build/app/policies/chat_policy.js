import { BasePolicy } from '@adonisjs/bouncer';
export default class ChatPolicy extends BasePolicy {
    create(user) {
        return true;
    }
    edit(user, message) {
        return user.id === message.userId;
    }
    delete(user, message) {
        return user.id === message.userId;
    }
}
//# sourceMappingURL=chat_policy.js.map