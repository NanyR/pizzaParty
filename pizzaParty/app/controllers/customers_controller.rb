class CustomersController < ApplicationController


  def create
    customer=Customer.new(customer_params)
    if customer.save
      render json: image
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
