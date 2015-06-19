class SportstersController < ApplicationController

  def index
    @sportster = Sportster.all
  end

  def show
    @sportster = Sportster.find(params[:id])
  end

  def new
    @sportster = Sportster.new
  end

  def create
    @sportster = Sportster.new(params.require(:sportster).permit(:firstname, :lastname, :team, :division, :photo, :year, :sport))
    @sportster.save

    if @sportster.save
      flash[:success] = "Participant successfully added!"
      redirect_to sportster_path(@sportster)
    else
      render :index
    end
  end

  def edit
    @sportster = Sportster.find(params[:id])
  end

  def update
    @sportster = Sportster.find(params[:id])

    if @sportster.update(params.require(:sportster).permit(:firstname, :lastname, :team, :division, :photo, :year, :sport))
      flash[:success] = "Participant successfully saved!"
      redirect_to sportster_path(@sportster)
    else
      render :edit_sportster_path
    end
  end

  def destroy
    @sportster = Sportster.find(params[:id])
    @sportster.destroy
    flash[:danger] = "Participant has been deleted!"
    redirect_to root_path
  end
end