const newNoticias = document.querySelector("#listaDeNoticias")

async function getNoticias(){
    try{
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=br", {
            headers: {
                authorization: '4bd9a1199a3a495dad97db8a62d77040'
            },
            
        });

        const data = await response.json();

        data.articles.forEach((article) => {
            const cardU = `<article class="col-6">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="${article.urlToImage}"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">
                    ${article.title}
                  </h5>
                  <p class="card-text">
                    ${article.description}
                  </p>
                  <a
                    href="${article.url}"
                    class="btn btn-primary"
                    >Ir para noticia</a
                  >
                </div>
              </div>
            </div>
          </div>
        </article>`;


        newNoticias.innerHTML += cardU


            
        });

    } catch (error) {
        console.log("Ta dando pau " + error)
        } 
}
getNoticias();