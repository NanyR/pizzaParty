class Customer < ActiveRecord::Base
  has_many :orders

  validates :phone, presence: true, uniqueness:true, length: {minimum: 10}
  validates :name, presence:true

end
