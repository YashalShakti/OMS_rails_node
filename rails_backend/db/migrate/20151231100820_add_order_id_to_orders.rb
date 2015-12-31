class AddOrderIdToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :orderID, :string
  end
end
