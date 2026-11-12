// MY GAME DATA
//左のゲーム名を選ぶと、右の詳細が切り替わる

//ゲーム情報

const games = [
    {
        title: 'Apex Legends',
        genre: 'バトルロイヤル / FPS',
        platform: 'PC / Steam',
        playTime: '2000h',
        comment: 'ヘムロック&carが好き',
        isMain: true
    }
    ,
    {
        title: 'Escape from Tarkov',
        genre: '脱出型FPS',
        platform: 'PC',
        playTime: '200h',
        comment: '心臓バクバク',
        isMain: false
    }
    ,
    {
        title: 'Minecraft',
        genre: 'サンドボックス',
        platform: 'PC',
        playTime: '400h',
        comment: '大人数でプレイするのが好き',
        isMain: false
    }
    ,
    {
        title: 'モンスターハンターライズ&サンブレイク',
        genre: 'ハンティングアクション',
        platform: 'Switch',
        playTime: '350h',
        comment: 'スラッシュアックス使い',
        isMain: false
    }
];

const gameList = document.querySelector('#game-list');
const gameDetail = document.querySelector('#game-detail');
const mainBadge = document.querySelector('#game-main-badge');
const titleText = document.querySelector('#game-title');
const genreText = document.querySelector('#game-genre');
const platformText = document.querySelector('#game-platform');
const playTimeText = document.querySelector('#game-play-time');
const commentText = document.querySelector('#game-comment');

//今表示しているゲームの番号
let currentIndex = -1;

//左のゲーム選択メニューを、配列gamesから作る
const gameButtons = games.map((game, index) => {
    const item = document.createElement('li');
    const button = document.createElement('button');
    const pointer = document.createElement('span');

    button.type = 'button';
    button.className = 'game-button';

    pointer.className = 'game-pointer';
    pointer.setAttribute('aria-hidden', 'true');
    pointer.textContent = '▶';

    button.append(pointer, game.title);
    item.append(button);
    gameList.append(item);

    //マウスを乗せたとき・Tabキーで選んだとき・クリック/タップしたときに切り替える
    button.addEventListener('mouseenter', () => showGame(index));
    button.addEventListener('focus', () => showGame(index));
    button.addEventListener('click', () => showGame(index));

    return button;
});

//指定した番号のゲームを右側に表示する
function showGame(index) {
    //同じゲームを選び直したときは何もしない
    if (index === currentIndex) {
        return;
    }
    currentIndex = index;

    const game = games[index];

    titleText.textContent = game.title;
    genreText.textContent = game.genre;
    platformText.textContent = game.platform;
    playTimeText.textContent = game.playTime;
    commentText.textContent = game.comment;
    mainBadge.hidden = !game.isMain;

    //選んだゲームだけに ▶ と黄色い枠を付ける
    gameButtons.forEach((button, i) => {
        const selected = i === index;
        button.classList.toggle('is-active', selected);
        button.setAttribute('aria-pressed', String(selected));
    });

    //フェード演出
    gameDetail.classList.remove('is-changing');
    void gameDetail.offsetWidth;
    gameDetail.classList.add('is-changing');
}

//最初は0番目を表示する
showGame(0);
