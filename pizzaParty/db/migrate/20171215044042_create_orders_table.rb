class CreateOrdersTable < ActiveRecord::Migration
  def change
    create_table :orders_tables do |t|
      t.time :pickup_time
      t.string :items, array:true
      t.boolean :ready
    end
  end
end
