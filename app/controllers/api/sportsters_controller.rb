module Api
  class SportstersController < ApplicationController
    protect_from_forgery with: :null_session

    def index
      sportsters = Sportster.all
      render json: sportsters, only: [:id, :firstname, :lastname, :photo, :team, :division, :year, :sport]
    end
  end
end