class AddItemsToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :items, :json
    add_column :orders, :ready, :boolean
  end
end
