class HomeController < ApplicationController
  def index
  end

  def error
    flash[:error]="This is an error generated by rails."
    redirect_to root_path
  end
  
  def notice
    flash[:notice]="This is a notice generated by rails."
    
     redirect_to root_path
   end
   def alert
     flash[:alert]="This is an alert generated by rails."
     
      redirect_to root_path
    end
end
