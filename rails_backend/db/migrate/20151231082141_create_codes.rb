class CreateCodes < ActiveRecord::Migration
  def change
    create_table :codes do |t|
      t.integer :type

      t.timestamps null: false
    end
  end
end
