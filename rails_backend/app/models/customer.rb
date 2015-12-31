class Customer < ActiveRecord::Base
		has_many :order
		has_one :coupon
  validates_uniqueness_of :email
end
