# ★ MY QUEST LOG

ファミコン時代のRPGをイメージして作った、自分のポートフォリオサイトです。
大学での学びや制作物を、「冒険の記録」としてまとめています。

HTML・CSS・JavaScript だけで作っていて、フレームワークやライブラリは使っていません。

<!-- GitHub Pages で公開したら、下の行のURLを書き換える -->
**サイト：** （公開準備中）

## ページ

| ページ | 内容 |
|---|---|
| HOME | タイトル画面とメニュー |
| PLAYER | 自己紹介、これまで遊んできたゲーム、好きなゲーム、写真 |
| PROJECTS | Unity のゲームや Android アプリなどの制作物 |
| RESEARCH | ゼミ研究（C++ を使った画像処理） |
| SKILLS | 使ってきた言語・ツール |

## 工夫したところ

- **CSSだけで描いたレンガの壁**
  - 画像を使わず、`linear-gradient` と `mask-image` を組み合わせて描いています。
  - 段ごとにレンガを半分ずらしています。
  - スマホ幅では、壁を表示しません。
- **RPGのメニューのような演出**
  - PRESS START とタイトルのカーソルが点滅します。
  - メニューを選ぶと ▶ が点滅して、ページが上に消えながら切り替わります（`js/transition.js`）。
- **MY GAME DATA**
  - 左のゲーム名を選ぶと、右の詳細が切り替わります。
  - マウス・クリック・キーボードのどれでも操作できます。
  - ゲームの情報は、`js/game-data.js` の配列にまとめています。
- **スマホでも見やすいレイアウト**
  - 620px 以下では、カードを1列に並べ直します。
- **動きを減らす設定への対応**
  - OSの「アニメーションを減らす」設定がオンのときは、点滅やページ切り替えの演出を止めています（`prefers-reduced-motion`）。

## 使った技術

- HTML
- CSS（CSS変数、Grid、Flexbox、`@keyframes`）
- JavaScript

フォントには [DotGothic16](https://fonts.google.com/specimen/DotGothic16)（Google Fonts）を使っています。

## フォルダ構成

```
mypage/
├── index.html       HOME
├── player.html      PLAYER
├── projects.html    PROJECTS
├── research.html    RESEARCH
├── skills.html      SKILLS
├── css/
│   ├── common.css   全ページ共通（色、ウィンドウの枠、ページ切り替え）
│   ├── renga.css    レンガの壁（HOME）
│   └── 〇〇.css     各ページ用
├── js/
│   ├── transition.js  ページ切り替えの演出
│   └── game-data.js   MY GAME DATA の中身と切り替え
├── images/          スクリーンショット・写真
└── files/           ゼミ研究のレポート（PDF）
```

## 手元で見る方法

`index.html` をブラウザで開くと見られます。
