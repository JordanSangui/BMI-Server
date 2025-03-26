import { BaseSchema } from '@adonisjs/lucid/schema';
export default class extends BaseSchema {
    tableName = 'channels';
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('creator_id').unsigned().notNullable().references('users.id').onUpdate('CASCADE').onDelete('CASCADE');
            table.string('name').notNullable();
            table.string('image').notNullable();
            table.string('link').notNullable().unique();
            table.json('administrators').notNullable();
            table.enum('scope', ['public', 'limited']).defaultTo('limited').notNullable();
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('created_at');
            table.timestamp('updated_at');
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
//# sourceMappingURL=1737904569850_create_channels_table.js.map