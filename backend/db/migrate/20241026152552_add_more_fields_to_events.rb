class AddMoreFieldsToEvents < ActiveRecord::Migration[7.2]
  def change
    add_column :events, :banner, :string
    add_column :events, :location, :string
    add_column :events, :date, :string
    add_column :events, :ticket_type, :string
    add_column :events, :price, :integer
  end
end
