import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'notifications';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.enum('scope', ['public', 'private']).defaultTo('public').notNullable();
            table.json('users').notNullable();
            table.text('message').notNullable();
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1737904626258_create_notifications_table.js.map