class Sportster < ActiveRecord::Base
  validates :firstname, :lastname, presence: true
  mount_uploader :photo, AvatarUploader
end