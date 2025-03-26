import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'subscription_options';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name');
            table.enum('duration_subscription', ['1w', '2w', '1m', '3m', '6m', '1y', 'lifetime']).defaultTo('send').notNullable();
            table.string('duration_promo', 5).defaultTo('1w').nullable();
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1737904908940_create_subscription_options_table.js.map