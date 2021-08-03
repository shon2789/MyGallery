console.log('Starting up');

$(document).ready(onInit);
$('.contact-btn').click(openCanvas);

function onInit() {
  $('.email-submit').click(onClickSubmit)
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
            <img class="img-fluid proj-image" src="${project.image}"></ alt="">
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
    <a target="_blank" href="${proj.url}"><img class="img-fluid d-block mx-auto" src="${proj.image}" alt=""></a>
    <p>${proj.desc}</p>
    <ul class="list-inline">
    <li>Link: <a target="_blank" href="${proj.url}">${proj.name}</a></li>
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

function onClickSubmit() {
  var emailTxt = $('.email-input').val();
  var subjectTxt = $('.subject-input').val();
  var bodyTxt = $('.body-input').val();
  var inputTxt = `https://mail.google.com/mail/?view=cm&fs=1&to=shon2789@gmail.com&su=${subjectTxt}&body=${bodyTxt}`
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(emailTxt)) return;

  if (!emailTxt || !subjectTxt || !bodyTxt) return;
  $('.open-new-tab').attr('href', inputTxt)



}

