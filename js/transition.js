//ページ切り替えの演出（全ページ共通）

//演出の長さ（ミリ秒
const EXIT_TIME = 450;

//動きを減らす設定になっているか
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

//移動中かどうか（連打で何度も動かないようにする）
let isNavigating = false;

//.htmlで終わるリンクをすべて集める
const pageLinks = document.querySelectorAll('a[href$=".html"]');

pageLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        //Ctrl+クリック（新しいタブで開く）などは、ブラウザに任せる
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
            return;
        }

        //動きを減らす設定なら、演出なしで普通に移動する
        if (reduceMotion.matches) {
            return;
        }

        //ブラウザの「すぐ移動する」動きを止める
        event.preventDefault();

        //すでに移動中なら何もしない
        if (isNavigating) {
            return;
        }
        isNavigating = true;

        //選んだリンクとbodyに、演出用のクラスを付ける
        link.classList.add('is-selected');
        document.body.classList.add('page-exiting');

        //演出が終わったら次のページへ移動する
        const destination = link.getAttribute('href');
        setTimeout(() => {
            window.location.href = destination;
        }, EXIT_TIME);
    });
});

//「戻る」ボタンで戻ってきたとき、演出の途中の状態を元に戻す
window.addEventListener('pageshow', () => {
    isNavigating = false;
    document.body.classList.remove('page-exiting');
    document.querySelectorAll('.is-selected').forEach((link) => {
        link.classList.remove('is-selected');
    });
});