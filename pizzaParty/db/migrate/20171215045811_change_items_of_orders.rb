class ChangeItemsOfOrders < ActiveRecord::Migration
  def change
    change_column :orders, :items, :json
  end
end
