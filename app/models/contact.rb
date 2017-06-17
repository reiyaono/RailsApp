class Contact < ActiveRecord::Base
     validates :name, presence: true
     validates :age, presence: true
     validates :mail, presence: true

end
