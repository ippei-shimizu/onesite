---
title: "金属製品加工業様 HP"
date: "2022/09/30"
id: "works-06"
category: "Corporate Site"
tech: "#WordPress"
coverImg: "/shouwa-seiki.jpg"
alt: "金属製品加工業様き様のファーストビュー"
url: "https://shouwaseiki.jp/"
---

<h2>
<img src="/fox.svg" alt="きつねのイラスト" width="36px" height="36px" loading="lazy">
<strong>概要</strong>
</h2>

---

私は、ワイヤーフレームとコーディングを担当させていただきました。社内の技術力と最新設備の発信をメインに強化するためにコーポレートサイトを作りたいとの要望があり、ワイヤーフレームを制作する中で、お客様の強みである「長年培ってきた技術力の高さ」「最新設備について」を1番にアピールできるように構成を考えました。

トップページには「コンセプト」と「強み」についてのセクションを上部に設置し、所有している設備については、種類が多かったためカテゴリーに分けて表示させるようにしました。

また、海外からの受注も狙いたいとのことでしたので、WordPressプラグインの「Bogo」を使用して、英語版対応を行いました。

<h2>
<img src="/cat.svg" alt="猫のイラスト" width="36px" height="36px" loading="lazy">
<strong>担当</strong>
</h2>

---

- ワイヤーフレーム
- コーディング
- サーバー関係

<h2>
<img src="/owl.svg" alt="ふくろうのイラスト" width="36px" height="36px" loading="lazy">
<strong>使用技術</strong>
</h2>

---

- HTML
- CSS
- Scss
- JavaScript
- jQuery
- WordPress
- PHP
- gulp

<h2>
<img src="/flamingo.svg" alt="フラミンゴのイラスト" width="36px" height="36px" loading="lazy">
<strong>技術選定の理由</strong>
</h2>

---

- **投稿機能が必要だったこと**
- **制作期間を考えて手軽に英語版対応をする必要があったため**

この 2 点から WordPress を選びました。

<h2>
<img src="/penguin.svg" alt="ペンギンのイラスト" width="36px" height="36px" loading="lazy">
<strong>機能</strong>
</h2>

---

- **英語版対応**

WordPress プラグインの「Bogo」を使用して英語版対応を行いました。

- **お問い合わせ・採用フォーム**

WordPress プラグインの「Contact Form 7」を使用してフォームを設置しました。

<h2>
<img src="/monkey.svg" alt="お猿さんのイラスト" width="36px" height="36px" loading="lazy">
<strong>こだわり</strong>
</h2>

---

### Lighthouse スコアを意識したコーディング

![Lighthouseスコア](/shouwa-lighthouse.png)
コーディングによって SEO の評価が下がらないように、Lighthouse のスコアで高得点が取れるようにコーディングを行いました。

具体的に Lighthouse スコア向上のために行なったことは以下のものになります。

#### 画像について<br>

- 画像の圧縮<br>
  画像の解像度を最適化し、圧縮を行っています。

- Webp の使用<br>
  Webp 対応とスマホ時とディスクトップ時の画像の切り替えを行うために、`<picture>`タグと`<source>`タグを使用しました。

- 画像の遅延読み込み<br>
  ファーストビュー外の画像は`loading="lazy"` を `<img>` タグや`<iframe>`に設置して、画像がビューポートに近づいたら読み込むようにしました。

- レイアウトシフト<br>
  レイアウトシフトへの対策のため、`<img>`タグに`width`と`height`を設定しています。

#### CSS・JavaScript について<br>

- functions.php で一元管理<br>
  CSS を`wp_enqueue_style`、JavaScript を`wp_enqueue_script`で管理することで、ページ毎に読み込むファイルを分割しています。

- CSS の非同期化<br>
  CSS を非同期で読み込むために、`media="print" onload="this.media='all'`を使用しています。しかし、ファーストビューで表示される範囲の CSS を非同期にしてしまうと、CSS があたっていない状態が読み込み時に表示されてしまうので、そのセクションの CSS は別ファイルで準備して`<head>`内で読み込むようにしています。

- JavaScript の非同期化<br>
  レンダリングブロックを防ぐために、`<script>`タグに`defer`をつけて HTML の解析が完了後に読み込むようにしています。

#### Intersection Observer を使用<br>

スクロールアニメーションには`Intersection Observer`を使用し、非同期で処理をさせるようにしました。

<h2>
<img src="/wolf.svg" alt="オオカミのイラスト" width="36px" height="36px" loading="lazy">
<strong>苦労</strong>
</h2>

---

#### 別ページから特定のタブ内へダイレクトリンクさせること<br>

トップページから別のページのタブ内へダイレクトリンクさせる実装に苦労しました。結果的には、`location.hash`でリンクからハッシュ値を取得して、if 文を使用して実装しました。

<h2>
<img src="/skunk.svg" alt="スカンクのイラスト" width="36px" height="36px" loading="lazy">
<strong>改善点</strong>
</h2>

---

#### jQueryを極力使わずに素のjsで書きたい<br>
別ページからのタブ内ダイレクトリンクのコードをjQueryで書いているが、フロントエンドの知識を深めるために素のJavaScriptに置き換えられるようにしたいです。

#### スマホデザインの見直し<br>
今回のサイトはスマホ版のデザインカンプがなく、ディスクトップデザインを元にレスポンシブ対応を行いました。```margin```・```padding```の余白や、```font-size```などをもっと見やすくデザインできるのではないかと思います。
