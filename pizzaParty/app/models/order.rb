class Order < ActiveRecord::Base
  belongs_to :customer

  validates :items, presence: true
  validates :pickup_time, presence: true



end
