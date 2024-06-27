/* global gsap */
import { doopal, renderUserCard, changeColor, delayP, renderSpinner, getNode, renderEmptyCard } from './lib/index.js';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/user';

const userCardInner = document.querySelector('.user-card-inner');

async function renderUserList() {

  // 로딩 스피너 렌더링
  renderSpinner(userCardInner)

  await delayP(2000);

  try {

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete(){
        getNode('.loadingSpinner').remove()
        //this._targets[0].remove()
      }
    })

    const response = await doopal.get(ENDPOINT);
    const data = response.data;

    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      stagger: {
        amount: 1,
        from: 'start',
      },
    });
  } catch {
    console.error('에러 발생');
    renderEmptyCard(userCardInner);
  }
}

renderUserList();
