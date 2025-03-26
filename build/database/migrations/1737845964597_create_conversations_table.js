import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'conversations';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('channel_id').unsigned().nullable().references('channels.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.integer('user1_id').unsigned().nullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.integer('user2_id').unsigned().nullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.enum('scope', ['channel', 'private']).defaultTo('private').notNullable();
            table.boolean('active').notNullable().defaultTo(false);
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1737845964597_create_conversations_table.js.map