class CreateSportsters < ActiveRecord::Migration
  def change
    create_table :sportsters do |t|
      t.string :firstname
      t.string :lastname
      t.string :photo
      t.string :team
      t.string :division
      t.string :sport
      t.integer :year

      t.timestamps null: false
    end
  end
end
