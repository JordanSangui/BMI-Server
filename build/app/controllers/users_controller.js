import Ws from '#services/Ws';
import User from '#models/user';
export default class UsersController {
    async index({}) {
        const usersMagnify = await User.search('Magnify').take(20).get();
        console.log("usersMagnify", usersMagnify);
        const users = await User.query();
        return usersMagnify;
    }
    async token({ params }) {
        const user = await User.findOrFail(params.id);
        const token = await User.accessTokens.create(user);
        return token;
    }
    show({}) {
        Ws.io?.emit('new:user', { username: 'virk' });
        return [
            {
                message: 'UsersController',
            }
        ];
    }
}
//# sourceMappingURL=users_controller.js.map