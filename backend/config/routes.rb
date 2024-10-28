Rails.application.routes.draw do
  namespace :api do
    resources :events do
      resources :images, only: [:index]
    end
  end
end