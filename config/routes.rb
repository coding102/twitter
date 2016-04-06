Rails.application.routes.draw do
  devise_for :users

  resources :tweets
  resources :users
  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'

  root 'home#index'
end
