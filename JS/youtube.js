import { videos } from "./insertContent.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

function renderVideos() {
  let videoHTML = '';

  videos.forEach((video) => {

    const uploadeDate = dayjs(video.uploadedTime);
    const today = dayjs();
    let minutesPassed = today.diff(uploadeDate, 'minute');
    let timeCalculated;

    if (minutesPassed < Math.floor(minutesPassed)+0.9 && minutesPassed >= 2  
      && minutesPassed < 60) {
      timeCalculated = `${Math.floor(minutesPassed)} mins`;
    } else if (minutesPassed >= 60) {
      let hoursPassed = minutesPassed / 60;
      
      if (hoursPassed < Math.floor(hoursPassed)+0.9 && hoursPassed >= 2 
        && hoursPassed < 24) {
        timeCalculated = `${Math.floor(hoursPassed)} hours`;
      } else if (hoursPassed >= 24) {
        let daysPassed = hoursPassed / 24;
        
        if (daysPassed < Math.floor(daysPassed)+0.9 && daysPassed >= 2 
          && daysPassed < 7) {
          timeCalculated = `${Math.floor(daysPassed)} days`;
        } else if (daysPassed >= 7) {
          let weeksPassed = daysPassed / 7;
          
          if (weeksPassed < Math.floor(weeksPassed)+0.9 && weeksPassed <= 4 && weeksPassed >= 2) {
            timeCalculated = `${Math.floor(weeksPassed)} weeks`;
          } else if (weeksPassed > 4) {
            let monthsPassed = (weeksPassed * 7) / 30.44;
            
            if (monthsPassed < Math.floor(monthsPassed)+0.9 && monthsPassed <=11.9) {
              timeCalculated = `${Math.floor(monthsPassed)} months`;
            } else if (monthsPassed > 11.9) {
              let yearsPassed = monthsPassed / 12;

              if (yearsPassed < Math.floor(yearsPassed)+0.9 && yearsPassed >= 2) {
                timeCalculated = `${Math.floor(yearsPassed)} years`;
              } else if (yearsPassed < Math.floor(yearsPassed)+0.9) {
                timeCalculated = `${Math.floor(yearsPassed)} year`;
              }
            } else if (monthsPassed < Math.floor(monthsPassed)+0.9) {
              timeCalculated = `${Math.floor(monthsPassed)} month`;
            } 
          } else if (weeksPassed < Math.floor(weeksPassed)+0.9) {
            timeCalculated = `${Math.floor(weeksPassed)} week`;
          } 
        } else if (daysPassed < Math.floor(daysPassed)+0.9) {
          timeCalculated = `${Math.floor(daysPassed)} day`;
        } 
      } else if (hoursPassed < Math.floor(hoursPassed)+0.9) {
        timeCalculated = `${Math.floor(hoursPassed)} hour`;
      } 
    } else if (minutesPassed < Math.floor(minutesPassed)+0.9) {
      timeCalculated = `${Math.floor(minutesPassed)} min`;
    } 

    videoHTML += `
      <div class="member">
        <div class="up">
          <a href="${video.video.destination}">
            <img class="thumbnail" src="${video.video.thumbnail}" alt="Video Thumbnail" />
            <div>
              <p class="timing">${video.video.timing}</p>
            </div>
          </a>
        </div>
        <div class="down">
          <div class="left">
            <a href="${video.channel.destination}">
              <img class="logo" alt="Logo thumbnail" src="${video.channel.logo}">
            </a>
          </div>
          <div class="right">
            <div>
              <a href="${video.video.destination}">
                <span class="video-name">${video.videoName.name}</span>
              </a>
            </div>
            <div>
              <a href="${video.channel.destination}">
                <p class="channel-name">${video.channelName}</p>
              </a>
            </div>
            <div>
              <p class="video-about">${video.views} views &middot ${timeCalculated} ago</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-row')
    .innerHTML = videoHTML;

}
renderVideos();

document.getElementById('Search-place')
  .addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const searchTerm = document.getElementById('Search-place').value;
      window.location.href = "https://www.youtube.com/results?search_query=" + searchTerm;
    }
  });

document.querySelector('.js-search-button')
  .addEventListener('click', () => {
    const searchTerm = document.getElementById('Search-place').value;
    window.location.href = "https://www.youtube.com/results?search_query=" + searchTerm;
  });

/*
  const date1 = dayjs('2023-01-01');
  const date2 = dayjs();

  const TimePassed = date2.diff(date1, 'day');

  console.log(`Days passed: ${TimePassed}`);
*/