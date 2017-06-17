class CreateApps < ActiveRecord::Migration
  def change
    create_table :apps do |t|
      t.text :content

      t.timestamps null: false
    end
  end
end
