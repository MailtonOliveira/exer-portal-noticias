const listaDeNoticias = document.querySelector("#listaDeNoticias")

async function getNoticias(){
    try{
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=br",{
            headers: {
                Authorization: "4bd9a1199a3a495dad97db8a62d77040"
            },
            
        });

        const data = await response.json();

        data.articles.forEach((articles) => {
            const card = `<article class="col-6">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://s2.glbimg.com/7ZfAaLoufp6dj1NEKMZpbqkJHq8=/1200x/smart/filters:cover():strip_icc()/s02.video.glbimg.com/x720/10330989.jpg"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">
                    Saques do FGTS: trabalhador vai poder sacar até R$ 1 mil -
                    Globo.com
                  </h5>
                  <p class="card-text">
                    Saques serão permitidos até 15 de dezembro.
                  </p>
                  <a
                    href="https://g1.globo.com/economia/noticia/2022/03/17/saques-do-fgts-trabalhador-vai-poder-sacar-ate-r-1-mil.ghtml"
                    class="btn btn-primary"
                    >Ir para noticia</a
                  >
                </div>
              </div>
            </div>
          </div>
        </article>`
            
        });

    } catch (error) {
        console.log("Ta dando pau " + error)
        } 
}
getNoticias();