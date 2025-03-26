import { BaseSeeder } from '@adonisjs/lucid/seeders';
import app from '@adonisjs/core/services/app';
export default class IndexSeeder extends BaseSeeder {
    async seed(Seeder) {
        if (!Seeder.default.environment ||
            (!Seeder.default.environment.includes('development') && app.inDev) ||
            (!Seeder.default.environment.includes('testing') && app.inTest) ||
            (!Seeder.default.environment.includes('production') && app.inProduction)) {
            return;
        }
        await new Seeder.default(this.client).run();
    }
    async run() {
        await this.seed(await import('#database/seeders/user_seeder'));
        await this.seed(await import('#database/seeders/notification_seeder'));
        await this.seed(await import('#database/seeders/friendship_seeder'));
        await this.seed(await import('#database/seeders/chat_seeder'));
        await this.seed(await import('#database/seeders/channel_seeder'));
        await this.seed(await import('#database/seeders/channel_chat_seeder'));
        await this.seed(await import('#database/seeders/event_seeder'));
        await this.seed(await import('#database/seeders/event_member_seeder'));
        await this.seed(await import('#database/seeders/subscription_option_seeder'));
        await this.seed(await import('#database/seeders/subscription_seeder'));
        await this.seed(await import('#database/seeders/payment_method_seeder'));
        await this.seed(await import('#database/seeders/payment_seeder'));
    }
}
//# sourceMappingURL=index_seeder.js.map