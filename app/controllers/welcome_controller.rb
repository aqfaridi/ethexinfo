class WelcomeController < ApplicationController

  def index
    response = RestClient.get 'https://api.ethexindia.com/order_book/'
    parsed_body = JSON.parse(response.body)
    @buyers = parsed_body["bids"]
    @sellers = parsed_body["asks"]
    response = RestClient.get 'https://api.ethexindia.com/trades/'
    @trades = JSON.parse(response.body)
  end
end
