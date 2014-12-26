require 'spec_helper'

describe Movie do
  describe 'searching Tmdb by keyword' do
    context 'with valid API key' do
      it 'should call Tmdb with title keywords' do
        Tmdb::Movie.should_receive(:find).with('Inception')
        Movie.find_in_tmdb('Inception')
      end
    end
    context 'with invalid API key' do
      before :each do
        Tmdb::Movie.stub(:find).and_raise(NoMethodError)
        Tmdb::Api.stub(:response).and_return({'code' => '401'})
      end        
      it 'should raise an InvalidKeyError with no API key' do
        lambda { Movie.find_in_tmdb('Inception') }.
          should raise_error(Movie::InvalidKeyError)
      end
    end
  end
end