class HomeController < ApplicationController



  def top
  end

  def thanks
  end

  def about
  end

  def test
   @app = [
     "今日からProgateでRailsの勉強するよー！",
     "投稿一覧ページ作成中！",
     "投稿一覧ページわっしょい"
   ]



  end

  def Index
   @app = App.all
  end

  def test2
  end

  def contact
    @msg = "お問い合わせはこちらまでお願いします"
    @contact = Contact.new
  end

  def create

  @contact = Contact.create(contact_params)
  if @contact.save
     redirect_to '/home/thanks'
     flash[:notice] = "投稿を編集しました"
  else
    render '/home/contact'
    end
  end


    private
    def contact_params
      params.require(:contact).permit(:name, :age, :mail)
    end

end
