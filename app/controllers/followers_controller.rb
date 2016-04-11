class FollowersController < ApplicationController
  # api endpoints, random user we can follow and an action to follow a user: "random" and "create"

  def random
    render json: User.who_to_follow(current_user.id)
  end

  def create
    # user who we want to follow, followed by current user
    follower = Follower.create(user_id: params[:user_id],
                      followed_by: current_user.id)
    render json: follower
  end

end
