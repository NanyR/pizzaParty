class CreatePizzas < ActiveRecord::Migration
  def change
    create_table :pizzas do |t|
      t.string :type
      t.belongs_to :order, index: true
      t.timestamps null: false
    end
  end
end
