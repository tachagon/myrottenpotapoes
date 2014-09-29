class MoviesController < ApplicationController
	def index
		@movies = Movie.all
	end
	
	def show
		@movie = Movie.find_by_id(params[:id]) # what if this movie not in DB?
#BUG: we should check @movie for validity here!
	end
	
	def new
	    @movie = Movie.new
	end

	def create
		@movie = Movie.new(params[:movie])
		if @movie.save
			flash[:notice] = "#{@movie.title} was successfully created."
			redirect_to movies_path
		else
			render 'new' # note, 'new' template can access @movie's field values!
		end
	end

	def edit
		@movie = Movie.find params[:id]
	end

	def update
		@movie = Movie.find params[:id]
		if @movie.update_attributes(params[:movie])
			flash[:notice] = "#{@movie.title} was successfully updated."
			redirect_to movie_path(@movie)
		else
		    render 'edit' # note, 'edit' template can access @movie's field values!
		end
	end

	def destroy
		@movie = Movie.find(params[:id])
		@movie.destroy
		flash[:notice] = "Movie #{@movie.title} deleted."
		redirect_to movies_path
	end
end
