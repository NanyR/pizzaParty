class CustomersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    customer=Customer.new(customer_params)
    if customer.save
      render json: customer
    else
      render json:"Error, could not create customer", status: 401
    end
  end

  def update
    customer= Customer.find(params[:id])
    if customer.update(customer_params)
      render json: {name: customer.name, phone: customer.phone}
    else
      render json: "Error- there was an error updating this customer", status: 401
    end
  end

  def show
    customer=Customer.find(params[:id])
    render json: customer
  end

  private

  def customer_params
    params.require(:customer).permit(:name, :phone)
  end

end
