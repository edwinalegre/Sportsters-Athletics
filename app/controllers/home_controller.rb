class HomeController < ApplicationController

  def index
    @users = Sportster.all
  end

end