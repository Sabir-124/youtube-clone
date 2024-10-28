import { optionExplore, optionMore, renderSidebar, moreOptions, removeSidebar, bringSidebar } from "./renderSidebar.js";

function partOneOptions (){
  const options = [
    {
      link: 'https://www.youtube.com/',
      icon: 'sidebar-pics/home-icon.png',
      name: 'Home'
    },
    {
      link: 'https://www.youtube.com/shorts/8IXoiqUvi7Y',
      icon: 'sidebar-pics/shorts-logo.png',
      name: 'Shorts'
    },
    {
      link: 'https://www.youtube.com/feed/subscriptions',
      icon: 'sidebar-pics/youtube-subscription-icon.png',
      name: 'Subscription'
    }
  ]
  let partOneOptions = ``;
  options.forEach((options) => {
    partOneOptions += `
      <a href="${options.link}">
        <div class="buttons-of-icons-jinjal remaining-icons">
          <div>
            <img class="jinjal-icons" alt="Visit Example Website" src="${options.icon}">
          </div>
          <div class="icon-name names">${options.name}</div>
        </div>
      </a>
    `;
    document.querySelector('.part-1-options')
      .innerHTML = partOneOptions;
  });
}

export let slidebar = `
  <div class="part">
    <div class="part-1-options"></div>
  </div>

  <div class="part">
    <div class="buttons-of-icons-jinjal2" id="remaining-icons-2">
      <div class="icon-names names">You</div>
      <div>
        <img class="pic" id="pic" src="sidebar-pics/arrow-icon.png">
      </div>
    </div>
    <div class="buttons-of-icons Icons">
      <div>
        <img class="icons" alt="Visit Example Website" src="sidebar-pics/history-icon.png">
      </div>
      <div class="icon-name">History</div>
    </div>
    <div class="buttons-of-icons Icons">
      <div>
        <img class="icons" alt="Visit Example Website" src="sidebar-pics/playlist-icon.png">
      </div>
      <div>Playlists</div>
    </div>
    <div class="buttons-of-icons Icons">
      <div>
        <img class="icons" alt="Visit Example Website" src="sidebar-pics/watch-later-icon.png">
      </div>
      <div>Watch later</div>
    </div>
    <div class="buttons-of-icons Icons">
      <div>
        <img class="icons" alt="Visit Example Website" src="sidebar-pics/like-icon.png">
      </div>
      <div>Liked videos</div>
    </div>
    <div class="buttons-of-icons-jinjal remaining-icons">
      <div>
        <img class="jinjal-icons" alt="Visit Example Website" src="sidebar-pics/download-icon.png">
      </div>
      <div class="icon-name names">Downloads</div>
    </div>
  </div>

  <div class="explore-options Icons"></div>

  <div class="more-youtube-options Icons"></div>

  <div class="more-options Icons"></div>
`;

const sidebarExploreClass = '.render-explore-options';
const sidebarMoreYoutubeClass = '.render-youtube-options';
const sidebarMoreClass = '.render-more-options';

const exploreClass = '.explore-options';
const moreYoutubeClass = '.more-youtube-options';
const moreClass = '.more-options';

document.querySelector('.render-slidebar')
  .innerHTML = slidebar;

renderSidebar();
partOneOptions();

optionExplore(sidebarExploreClass);
optionMore(sidebarMoreYoutubeClass);
moreOptions(sidebarMoreClass);

optionExplore(exploreClass);
optionMore(moreYoutubeClass);
moreOptions(moreClass);

var icons = document.querySelectorAll('.Icons');
const Side = document.getElementById('sidebar');
var remainingIcons = document.querySelectorAll('.remaining-icons');
var remainingIcons2 = document.getElementById("remaining-icons-2");
const name = document.querySelectorAll('.names');
const part = document.querySelectorAll('.part');
var pic = document.getElementById('pic');
var sideIcons = document.querySelectorAll('.jinjal-icons');

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  let isImage1 = true;

  document.getElementById("toggle-ham-icon")
    .addEventListener('click', () => {
      let zoom = window.devicePixelRatio;

      if (body.classList.contains('padding1') && zoom < 1) {
        body.classList.remove('padding1');
      } else if (!body.classList.contains('padding1') && zoom < 1) {
        body.classList.remove('padding1');
      } else {
        body.classList.toggle('padding1');
      }

      const width = window.innerWidth;

      if (width < 1229) {
        bringSidebar();
      } else {
        icons.forEach((items) => {
          items.classList.toggle('hidden');
        });

        Side.classList.toggle('width');
        Side.classList.toggle('hide');

        remainingIcons.forEach((items) => {
          items.classList.toggle('style');
        });
        name.forEach((items) => {
          items.classList.toggle('style');
        });
        part.forEach((items) => {
          items.classList.toggle('margin');
        });

        remainingIcons2.classList.toggle('style2');
        remainingIcons2.classList.toggle('name');
        remainingIcons2.classList.toggle('margin');
        remainingIcons2.classList.toggle('marginTop');
        pic.classList.toggle('style');
        
        if (isImage1) {
          pic.src = 'sidebar-pics/you-icon.jpg';
        } else {
          pic.src = 'sidebar-pics/arrow-icon.png';
        }
        isImage1 = !isImage1;

        sideIcons.forEach((items) => {
          items.classList.toggle('margin');
        });
      }
    });

  document.getElementById("close-toggle-ham-icon")
    .addEventListener('click', () => {
      removeSidebar();
    });

  window.addEventListener('resize', () => {
    let zoom = window.devicePixelRatio;

    if (zoom < 1 && body.classList.contains('padding1')) {
      body.classList.remove('padding1');
    } else if (zoom > 1 && zoom < 3 && body.classList.contains('padding1')) {
      body.classList.add('padding1');
    } else if (zoom >=5) {
      body.classList.remove('padding1');
    }
    console.log(zoom);
  });
  
});
