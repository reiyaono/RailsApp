class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.text :name
      t.integer :age
      t.text :mail

      t.timestamps null: false
    end
  end
end
