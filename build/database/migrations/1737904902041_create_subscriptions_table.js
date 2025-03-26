import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'subscriptions';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('subscription_option_id').unsigned().notNullable().references('subscription_options.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.integer('user_id').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.timestamp('started_at');
            table.timestamp('ended_at');
            table.text('comment').nullable();
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1737904902041_create_subscriptions_table.js.map