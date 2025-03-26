import { BaseSeeder } from '@adonisjs/lucid/seeders';
import { UserFactory } from '#database/factories/user_factory';
export default class extends BaseSeeder {
    async run() {
        await UserFactory.createMany(10);
    }
}
//# sourceMappingURL=user_seeder.js.map