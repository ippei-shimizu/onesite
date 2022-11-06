<br>
<p align="center"><img width=320 src="/public/logo.svg#gh-light-mode-only" alt="GitHub-Mark-Light"></p>
<p align="center"><img width=320 src="/public/logo-white.svg#gh-dark-mode-only" alt="GitHub-Mark-Dark"></p>
<p align="center"><strong>Next.js×microCMSを使用したJamstack個人技術ブログ👨‍💻</strong></p>
<p align="center">https://www.onesite-web.com/</p>

## 概要
### Next.js × React × microCMSを使用した個人の技術アウトプットブログ
ブログ機能の記事作成・管理はヘッドレスCMSの「microCMS」を使用し、フロント側は「Next.js」と「React」を使用しています。ホスティングサービスは「vercel」を使用しています。

## 機能
- 記事作成
- 記事投稿
- 最新記事一覧
- カテゴリー別記事一覧
- タグ別記事一覧
- パンくずリスト
- ページネーション
- ダークモード対応
- 記事詳細
  - 目次
  - SNSシェアボタン
  - シンタックスハイライト
  - ページトップボタン
- XMLサイトマップ
- Google Analytics
- Basic認証（Worksページは仕事で制作したものもあるので、Basic認証をかけてあります。）

## 技術
- Next
- React
- Tailwind CSS
- Vercel
- microCMS
- ESLint
- Prettier
- PostCSS
- PWA
- yarn

## 背景
私がJamstackブログを制作しようと思った背景としては、普段仕事で「WordPress」をメインにWebサイト制作を行っていますが、サイトのパフォーマンスの低さやセキュリティーの脆弱性に課題を感じていました。実際に、WordPressで制作したサイトがマルウェアに感染してしまい、対処に大変苦労しましたことがありました。以前からJamstackには興味がありましたが、そんな経験から更に興味が深まり、フロントエンドの勉強がてらWordPressで運用していた個人ブログをJamstackに移行しようと思いました。

また、頻繁に更新はしないが簡単なお知らせのみWordPressの投稿機能をしたい場合、全てのページをWordPressで制作する必要があり、パフォーマンスやセキュリティ面から考えてベストな技術選択ではないなと思っていたので、Jamstackでブログを制作しました。

## 制作する上で意識したポイント
### デザイン
girdレイアウトを使用して、スクロールの量を抑えて情報量をコンパクトにしました。girdレイアウトにするとコンテンツの境目がわかりにくくなるので、グレデーションの色を変えて視覚的に境目がわかるようにしました。
また、ブログサイトで記事を読むことがメインになるので、コンテンツが横に広がり過ぎて、視線の移動量が多くならないように中央に揃えました。

### コーディング
Reactの関数コンポーネントを使用し、保守性を考えたコーディングを行いました。また、ISRを使用してコンテンツを更新しても再度ビルドをし直さなくても良いように実装しました。






