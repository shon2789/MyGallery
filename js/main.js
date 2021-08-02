console.log('Starting up');

$(document).ready(onInit);

function onInit() {
    renderProjects();
    renderModal();
}

function renderProjects() {

    var projects = getProjectsToShow();
    var strHTMLs = [];
    projects.map(function (project, idx) {
        return strHTMLs += `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx + 1}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${project.image}"></ alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
          </div>
        </div>`
    })

    $('.portfolio').html(strHTMLs);
}


function renderModal() {
    var strHTMLs = [];
    var projects = getProjectsToShow();

    projects.map(function (proj, idx) {
        return strHTMLs += `<div class="portfolio-modal modal fade" id="portfolioModal${idx + 1}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                  
                  <h2>${proj.name}</h2>
    <p class="item-intro text-muted">${proj.title}</p>
    <img class="img-fluid d-block mx-auto" src="${proj.image}" alt="">
    <p>${proj.desc}</p>
    <ul class="list-inline">
    <li>Link: <a href="${proj.url}">${proj.name}</a></li>
      <li>Date: ${proj.publishedAt}</li>
      <li>Category: Games </li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>`
    })
    $('.container-modals').html(strHTMLs);

}

{/* <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>Threads</h4>
            <p class="text-muted">Illustration</p>
          </div>
        </div> */}


        // <h2>Project Name</h2>
        //         <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
        //         <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
        //         <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
        //           blanditiis
        //           dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
        //           cupiditate,
        //           maiores repudiandae, nostrum, reiciendis facere nemo!</p>
        //         <ul class="list-inline">
        //           <li>Date: January 2017</li>
        //           <li>Client: Threads</li>
        //           <li>Category: Illustration</li>
        //         </ul>
        //         <button class="btn btn-primary" data-dismiss="modal" type="button">
        //           <i class="fa fa-times"></i>
        //           Close Project</button>