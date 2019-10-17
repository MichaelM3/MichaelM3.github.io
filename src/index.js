document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelector('.projects')

  projects.innerHTML = `
    <div>
      <div id="demo" class="project-info">
        <iframe class="videos"
          src="https://www.youtube.com/embed/Eyp96U58SEo">
        </iframe>
        <div class="description">
          <h2>LoL Pairup</h2>
          <p>
            Social web app to connect with other players that play league of legends<br>
            + Built API using Ruby on Rails<br>
            + Built front end using React.js with Redux for state containment.<br>
            + Used Bcrypt and JWT tokens for login auth<br>
            + Built Websockets using Rails ActionCables<br>
            + Designed the database schema and configured ActiveRecord Associations<br>
            + Used Semantic and custom CSS to design front end.<br>
            + Connected to the League of Legends API to fetch user data and statistics
          </p>
        </div>
      </div>
      <div class="project-info">
        <iframe class="videos"
          src="https://www.youtube.com/embed/5ATneZTcZz0">
        </iframe>
        <div class="description">
          <h2>What Do You Meme?</h2>
          <p>
            A simplified way to create unique memes by using an image text overlay<br>
            + Built API using Ruby on Rails<br>
            + Built front end using vanilla javascript<br>
            + Designed the database schema and configured ActiveRecord Associations<br>
            + Used Semantic and custom CSS to design front end
          </p>
        </div>
      </div>
      <div class="project-info">
        <iframe class="videos"
          src="https://www.youtube.com/embed/0mxoqhIB3lA">
        </iframe>
        <div class="description">
          <h2>CLI Movie Database</h2>
          <p>
            Command Line Interface movie database to find information on movies and actors swiftly<br>
            + Built in Ruby to run in the Command Line Interface<br>
            + Designed the database schema and configured ActiveRecord Associations<br>
            + Used Faker Gem to create Actors and Movies to be referanced
          </p>
        </div>
      </div><br>

      <div align="center" class="contact-info">
        <h1>Contact Info</h1>
        <h3>michael.muniz94@gmail.com</h3>
        <h3><a href="https://github.com/MichaelM3">Github</a></h3>
        <h3><a href="https://www.linkedin.com/in/michael-muniz94">LinkedIn</a></h3>
      </div>

    </div>
  `
  i = 1
  document.getElementById("projects").addEventListener("click", () => {
    location.href = "#demo"
  })
})
