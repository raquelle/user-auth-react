class CreateApps < ActiveRecord::Migration[5.1]
  def change
    create_table :apps do |t|
      t.string :name
      t.string :description
      t.string :category
      t.string :price
      t.string :version
      t.string :author
      t.string :logo

      t.timestamps
    end
  end
end
