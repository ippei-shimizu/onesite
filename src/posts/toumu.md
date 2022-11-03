---
title: "ワイナリー様 EC"
date: "2022/09/23"
id: "works-05"
category: "EC"
tech: "#WordPress　#Welcart"
coverImg: "/toumu.jpg"
alt: "ワイナリー様のファーストビュー"
url: "https://toumuwinery.com/"
---

<h2>
<img src="/fox.svg" alt="きつねのイラスト" width="36px" height="36px" loading="lazy">
<strong>概要</strong>
</h2>

---

私は、コーディングをメインに担当させていただきました。EC サイト兼コーポレートサイトを新しくリニューアルしてほしいとのご依頼でしたので、WordPress と Welcart を使用して制作を行いました。

元のサイトにも EC 機能は実装されていましたが、クレジットカード決済機能が搭載されていなかったので、今回はクレジットカード決済も導入してほしいとのご要望でした。なので、Welcart に PayPal を連携させてクレジットカード決済も対応可能にしました。

<h2>
<img src="/cat.svg" alt="猫のイラスト" width="36px" height="36px" loading="lazy">
<strong>担当</strong>
</h2>

---

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
- Welcart
- PHP
- gulp

<h2>
<img src="/flamingo.svg" alt="フラミンゴのイラスト" width="36px" height="36px" loading="lazy">
<strong>技術選定の理由</strong>
</h2>

---

- **EC サイトを組みこんだコーポーレートサイトにするため**
- **EC サイトのデザインもオリジナルのものにする必要があったため**
- **お客さまが WordPress での更新作業になれているため**

以上の点から WordPress で更新可能な Web サイトにし、EC サイトプラグインの Welcart を使用することにしました。

<h2>
<img src="/penguin.svg" alt="ペンギンのイラスト" width="36px" height="36px" loading="lazy">
<strong>機能</strong>
</h2>

---

- **EC 機能**

WordPress プラグインの「Welcart」を使用して、EC 機能を構築しました。

- **PayPal**

決済機能として、PayPal を Welcart と連携させています。

- **オリジナルラベル注文フォーム**

ワインのオリジナルラベルを注文できるフォームを「Contact form 7」を使用して実装しました。オリジナルラベルの画像のテキストボックスに番号を配置して、番号ごとにフォームに入力をしてもらうようにしました。

<h2>
<img src="/monkey.svg" alt="お猿さんのイラスト" width="36px" height="36px" loading="lazy">
<strong>こだわり</strong>
</h2>

---

### Welcart のカスタマイズ<br>

Welcart 専用の WordPress テーマは使用せず、オリジナルテーマで制作を行いました。なので、Welcart ページの CSS 調整や Welcart ファイルのカスタマイズを行いレイアウトの変更を行いました。

また、商品登録などお客さまご自身で更新していただくので、レイアウト崩れが起きないように、色々なパターンを検証してコーディングを行い、EC 機能の操作説明資料を作成し、納品時にお渡ししました。

### オリジナルラベルご注文フォーム

ワインのラベルにメッセージや写真をいれることができる、オリジナルラベルご注文フォームを実装しました。お客さまの予算的なことから一からシステムを構築するのではなく、「Contact form 7」を使用して実装しました。

注文の流れとしては、「オリジナルラベル選択」→「ラベルに入れるメッセージ入力と写真アップロード」→「入力情報確認」→「ラベル注文情報送信」→「オリジナルラベル用ワイン選択」→「ワイン注文」になります。

ラベルに入れるメッセージと写真は「Contact form 7」に入力していただき、「Contact Form 7 Multi-Step Forms」で確認画面を設置して、「送信ボタン」のリンク先を Welcart のオリジナルラベルワイン一覧ページへと繋げました。

こうすることで、実際は「オリジナルラベルご注文フォーム」と「Welcart」は連携していませんが、ユーザーからはラベル注文〜ワイン注文までを自然な流れで行えるようにしました。

<h2>
<img src="/wolf.svg" alt="オオカミのイラスト" width="36px" height="36px" loading="lazy">
<strong>苦労</strong>
</h2>

---

EC サイトの仕様がコーディング中に変わることが頻繁にあり、対応するのに苦労しました。サイトの仕様を決める段階で、コーディングをする目線でディレクション担当の方としっかりと打ち合わせを行い、細かい仕様の検証を行うべきだと思いました。

<h2>
<img src="/skunk.svg" alt="スカンクのイラスト" width="36px" height="36px" loading="lazy">
<strong>改善点</strong>
</h2>

---

#### オリジナルラベルご注文フォームのリアルタイル反映<br>

オリジナルラベルフォームに入力した情報をリアルタイムでラベルの画像へ反映させたい。

#### オリジナルラベル注文情報と EC サイトの機能の連携<br>

今の私の技術力では、Welcart とラベル情報を連携させることが難しかったです。これからもっと勉強してフルスクラッチ EC サイトが開発できるようになりたいと思いました。
