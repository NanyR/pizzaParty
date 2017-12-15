class DropPizzas < ActiveRecord::Migration
  def change
    drop_table :pizzas
  end
end
