class TweetsController < ApplicationController

  # avoid n+1, avoid sql query of every object in the collection >> by adding includes call
  def index
    render json: Tweet.includes(:user).order(created_at: :desc).all
  end

  def create
    tweet = Tweet.create(body: params[:body], user_id: current_user.id)
    render json: tweet
  end

end
