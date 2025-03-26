import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'eventmembers';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('event_id').unsigned().notNullable().references('events.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.integer('member_id').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1737904606681_create_eventmembers_table.js.map