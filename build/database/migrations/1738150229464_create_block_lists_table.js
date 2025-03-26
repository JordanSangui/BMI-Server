import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'block_lists';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('user_id').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.integer('block_user_id').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.enum('reason', ['spam', 'aggressive', 'other']).notNullable();
            table.text('comment').nullable();
            table.boolean('report_this_user').notNullable().defaultTo(false);
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1738150229464_create_block_lists_table.js.map