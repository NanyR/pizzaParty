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


  def index
    customers=Customer.find_by(phone: params[:phone])
    if customers
      render json: customers
    else
      render json: "Error- could not find any results for this request"
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
