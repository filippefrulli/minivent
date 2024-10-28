class Api::ImagesController < ApplicationController
  before_action :set_event, only: [:index]

  def index
    images = @event.images
    render json: images
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Event not found" }, status: :not_found
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_event
    @event = Event.find(params[:event_id])
  end

  # Only allow a list of trusted parameters through.
  def image_params
    params.require(:image).permit(:url, :alt_text)
  end
end