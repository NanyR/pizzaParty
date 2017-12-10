class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.datetime :pickup_time
      t.belongs_to :customer, index:true
      
      t.timestamps null: false
    end
  end
end
