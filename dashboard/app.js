// list of the covid-19 cases
const data = [
    {
        activecase: '190',    
        newcase: '25',   
        newtested: '646',
        total: '3,953',        
        recovered: '3,697',
        plusrecovered: '20',    
        death: '128',
        plusdeath: '5'
    }
];


const article = document.querySelector( '.feature' );

const covidData = data.map( cases => {
  console.log( cases );
  article.innerHTML =
    `  <div class="card-row1">
          <div class="result-card active-case w-h">
            <h4>${cases.activecase}</h4>
            <span>active cases</span>
            <i class="fa fa-user user"></i>
          </div>
          <div class="result-card new-case w-h">
            <h4>${cases.newcase}</h4>
            <span>new cases</span>
            <i class="fa fa-user-plus user"></i>
          </div>
          <div class="result-card new-tested w-h">
            <h4>${cases.newtested}</h4>
            <span>new tested</span>
            <i class="fas fa-user user"></i>
          </div>
        </div>
        <div class="card-row2">
          <div class="result-card total-cases">
            <div class="total-card">
              <img class="usert" src="./images/gam-flag.png" alt="" />
              <h4>${cases.total}</h4>
              <span>total comfirmed</span>
            </div>
            <div class="div"></div>
            <div>
              <span class="find-page">Find the full report at</span>
              <a class="link" href="#">www.moh.gov.gm</a>
            </div>
          </div>
          <div class="result-card recovered w-h">
            <h4>${cases.recovered}</h4>
            <i class="fa fa-user userr"></i>
            <span>+${cases.plusrecovered}</span>
            <span>recovered</span>
          </div>
          <div class="result-card death w-h">
            <h4>${cases.death}</h4>
            <i class="fa fa-users userd"></i>
            <span>+${cases.plusdeath}</span>
            <span>death</span>
          </div>
        </div>
            `
  console.log(article);
})