import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'channelchats';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('conversation_id').unsigned().notNullable().references('conversations.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.integer('sender_id').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.enum('type', ['text', 'image', 'document']).defaultTo('text').notNullable();
            table.string('message').nullable();
            table.string('file_name').nullable();
            table.boolean('read').notNullable().defaultTo(false);
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1737904575889_create_channelchats_table.js.map