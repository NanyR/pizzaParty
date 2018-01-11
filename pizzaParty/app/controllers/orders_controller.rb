class OrdersController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create

    order=Order.new(order_params)
    if order.save
      render json: order
    else
      render json:"Error, could not create customer", status: 401
    end
  end

  def update
    order= Order.find(params[:id])
    if order.update(order_params)
      render json: {id: order.id, pickup_time: order.pickup_time}
    else
      render json: "Error- there was an error updating this customer", status: 401
    end
  end

  def show
    order=Order.find(params[:id])
    render json: order
  end

  def index
    orders=Order.order(:pickup_time)
    render json: orders
  end

  private

  def order_params
    params.require(:order).permit(:pickup_time, :customer_id, :items, :ready)
  end

end
