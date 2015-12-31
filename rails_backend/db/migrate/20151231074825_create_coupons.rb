class CreateCoupons < ActiveRecord::Migration
  def change
    create_table :coupons do |t|
      t.integer :status
      t.integer :customer_id

      t.timestamps null: false
    end
  end
end
