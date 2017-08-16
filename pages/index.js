import React from 'react';
import Isvg from 'react-inlinesvg';
import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share';

import Body from './../components/body';
import button from './../components/lib/button';

const globalColors = {
  primary: '#243767',
  secondary: '#fff23f',
  bg: '#e7e8ec',
  text: '#252525',
};

const bodyProps = {
  siteName: 'C92新刊「CSSではじめる同人誌制作」 .∵. pentapod',
  title: 'C92新刊「CSSではじめる同人誌制作」 .∵. pentapod',
  description: '作ろうあなただけの本 C92新刊「CSSではじめる同人誌制作」',
  url: 'https://pentapod.github.io/c92',
  image: 'https://pentapod.github.io/c92/static/og.png',
  favicon: 'https://pentapod.github.io/c92/static/favicon.png',
  fbAppId: '513983385471617',
};
const shareText = bodyProps.description + ' ' + bodyProps.url;

const urls = {
  catalog: 'https://webcatalog.circle.ms/Circle/13312863',
  booth: 'https://pentapod.booth.pm/items/601017',
  freeDownload: 'https://c92-free-download-tufcpnsksj.now.sh',
  twitterShare: 'https://twitter.com/intent/tweet'
    + `?text=${encodeURIComponent(shareText)}`,
  facebookShare: 'https://www.facebook.com/dialog/feed'
    + `?app_id=${encodeURIComponent(bodyProps.fbAppId)}`
    + `&display=popup&caption=${encodeURIComponent(bodyProps.description)}`
    + `&link=${encodeURIComponent(bodyProps.url)}`
    + `&redirect_uri=${encodeURIComponent('https://www.facebook.com/')}`,
  hatebuShare: `http://b.hatena.ne.jp/entry/${bodyProps.url}`,
};


const {FacebookShareButton, TwitterShareButton} = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    return (
      <Body {...bodyProps}>
        <div id="global" className={this.state.loaded? 'loaded' : 'loading'}>
          <div className="left">
            <header>
              <div className="illust-container">
                <img src="static/top_illust.png" />
              </div>

              <div className="title-container">
                <div className="title">
                  <img src="static/title.svg" alt="CSSではじめる同人誌制作" />
                </div>
                <div className="badge">
                  C92<br/>新刊
                </div>
              </div>

              <div className="credit">
                Illust:&nbsp;にと
              </div>

              <div className="share-container">
                <div className="buttons">
                  <TwitterShareButton
                    url={bodyProps.url}
                    title={bodyProps.description}
                    className="tw-share">
                    <TwitterIcon size={48} round />
                  </TwitterShareButton>
                  <FacebookShareButton
                    url={bodyProps.url}
                    title={bodyProps.title}
                    description={bodyProps.description}
                    picture={bodyProps.image}
                    className="fb-share">
                    <FacebookIcon size={48} round />
                  </FacebookShareButton>
                </div>
              </div>
            </header>
          </div>

          <div className="right">
            <section className="lead">
              <div className="container">
                <center>
                  <h2 className="heading">CSSではじめる同人誌制作</h2>
                </center>
                <div className="content">
                  <h3>CSS組版</h3>
                  <p>
                    <strong>CSS組版</strong>は、WordでもLaTeXでもInDesignでもない組版技術。
                    HTMLの文章とCSSを用意するだけで、印刷用のPDFファイルとブラウザ表示用のWebページが同時に作成できます。
                    「CSSではじめる同人誌制作」を読んで、あなたも自分だけのオリジナル同人誌作りをはじめましょう。
                  </p>
                  <h3>CSSとは</h3>
                  <p>
                    HTML形式の文章の見栄え(スタイル)を指定するためのスタイルシート言語。
                    基本的にはWebページのような画面上のスタイルを指定するためのものですが、紙に印刷する際のスタイルも表現することができます。
                  </p>
                </div>
              </div>
            </section>

            <section className="detail">
              <div className="container">
                <div className="toc">
                  <center><h2 className="heading">コンテンツ</h2></center>
                  <dl>
                    <div className="content">
                      <dt><h3 className="heading">CSS組版を始める</h3></dt>
                      <dd>
                        CSS組版とは／Vivliostyle／原稿の執筆
                      </dd>

                      <dt><h3 className="heading">レイアウトを作る</h3></dt>
                      <dd>
                        ページの設定／ページ領域外のレイアウト／改ページ／段組／縦書き／タイポグラフィ／テキストの装飾／ルビ／書体・フォント機能／図表／脚注／ナンバリング／色／数式
                      </dd>

                      <dt><h3 className="heading">原稿を出力する</h3></dt>
                      <dd>
                        Chromeの印刷機能／PDF出力の自動化
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>

            <section className="spec">
              <div className="sample"></div>
              <div className="container">
                <table>
                  <tbody>
                    <tr>
                      <th>タイトル</th>
                      <td>
                        CSSではじめる同人誌制作<br/>
                        ISDN <a href="https://isdn.jp/2784510121025">278-4-510121-02-5</a>
                      </td>
                    </tr>
                    <tr>
                      <th>頒布場所</th>
                      <td>
                        <a href="http://www.comiket.co.jp/">コミックマーケット 92</a> 1日目<br/>
                        2017年8月11日(金) 10:00〜16:00<br/>
                        <strong>東た-12a</strong>
                        <a href={urls.catalog} className="btn" {...button.small(globalColors.primary)}>カタログを見る</a><br/>
                      </td>
                    </tr>
                    <tr>
                      <th>頒布価格</th>
                      <td>
                        B5冊子版&nbsp;<strong>¥500</strong><br/>
                        電子版&nbsp;<strong>¥300</strong>
                        <a href={urls.booth} className="btn" {...button.small(globalColors.primary)}>電子版を購入</a><br/>
                        冊子版購入者は電子版が<strong>¥0!!!</strong><br/>
                        <a href={urls.freeDownload} className="btn" {...button.small(globalColors.primary)}>ダウンロードページへ進む</a>
                      </td>
                    </tr>
                    <tr>
                      <th>仕様</th>
                      <td>B5 モノクロ 52ページ</td>
                    </tr>
                  </tbody>
                </table>

                <div className="tbf02">
                  <a href="https://pentapod.github.io/tbf02"><img src="static/tbf02-cover.jpg" /></a>
                  <div className="description">
                    技術書典2新刊「<a href="https://pentapod.github.io/tbf02">チートシート・チートシート</a>」も頒布予定！<br/>
                    冊子版は在庫が無いので何らかの紙に印刷してきます。
                  </div>
                </div>
              </div>
            </section>

            <section className="share">
              <div className="container">
                <h3><center>このページを共有</center></h3>
                <div className="buttons">
                  <a href={urls.catalog} {...button.inverse('#4caf50', '#319235')}>
                    Webカタログ<span class="long">でお気に入りに追加</span>
                  </a>
                  <a href={urls.twitterShare} {...button.inverse('#55acee', '#3b8dcc')}>
                    Twitter<span class="long">でツイート</span>
                  </a>
                  <a href={urls.facebookShare} {...button.inverse('#365899', '#1b386f')}>
                    Facebook<span class="long">でシェア</span>
                  </a>
                  <a href={urls.hatebuShare} {...button.inverse('#008fde', '#006fad')}>
                    はてなブックマーク<span class="long">に登録</span>
                  </a>
                </div>
              </div>
            </section>

            <footer>
              <div className="brand-container">
                <a href="https://pentapod.github.io">
                  <div className="logo"
                        style={{ width: 25 }}
                        >
                    <Isvg src='/static/logo.svg'></Isvg>
                  </div>
                  <div className="brand"
                        style={{ width: 100 }}
                        >
                    <Isvg src='/static/brand.svg'>pentapod</Isvg>
                  </div>
                </a>
              </div>
            </footer>
          </div>
        </div>

        <style jsx global>{`
          @font-face {
            font-family: "NotoSansCJKjp-Jxck";
            font-style: normal;
            font-weight: 400;
            src: local("NotoSansCJKjp-Bold.otf"),
                local("NotoSansJP-Bold.otf"),
                url("static/fonts/NotoSansCJKjp-Jxck-Regular.woff2") format("woff2"),
                url("static/fonts/NotoSansCJKjp-Jxck-Regular.woff") format("woff");
          }

          @font-face {
            font-family: "NotoSansCJKjp-Jxck";
            font-style: normal;
            font-weight: 700;
            src: local("NotoSansCJKjp-Bold.otf"),
                local("NotoSansJP-Bold.otf"),
                url("static/fonts/NotoSansCJKjp-Jxck-Bold.woff2") format("woff2"),
                url("static/fonts/NotoSansCJKjp-Jxck-Bold.woff") format("woff");
          }
          @font-face {
            font-family: "SourceHanSerifJP-Heading";
            font-style: normal;
            font-weight: 700;
            src: url("static/fonts/SourceHanSerifJP-Bold.subset.woff2") format("woff2"),
                url("static/fonts/SourceHanSerifJP-Bold.subset.woff") format("woff");
          }
          body {
            margin: 0;
            padding: 0;
            color: ${globalColors.text};
            background-color: #fff;
            font-size: 16px;
            font-family: "Noto Sans","Noto Sans CJK JP","NotoSansCJKjp-Jxck",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
            font-weight: 400;
            word-spacing: 0.2em;
            line-height: 1.8;
            line-break: strict;
          }
          @media (max-width: 767px) {
            body {
              font-size: 13px;
            }
          }
          p {
            margin: 1em 0;
          }
          a {
            color: #2a5ad6;
          }
          a:hover {
            color: #1740ab;
          }
          section {
            position: relative;
          }
          h1, h2, h3, h4 {
            margin: 0;
          }
          h1  { font-size: 2.0em; }
          h2  { font-size: 1.6em; }
          h3  { font-size: 1.3em; }
          h4  { font-size: 1.1em; }
          ul, ol {
            padding-left: 1em;
          }

          #global {
            transition: opacity .7s;
            opacity: 0;
          }
          #global.loaded {
            opacity: 1;
          }

          #global .illust-container {
            transition: opacity 1s .4s, transform 1s .4s;
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          #global.loaded .illust-container {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }

          header .tw-share, header .fb-share {
            display: inline-block;
            cursor: pointer;
            margin-left: 18px;
          }
        `}</style>

        <style jsx>{`
          .container {
            max-width: 920px;
            margin: 0 auto;
            padding: 0 40px;
          }
          @media (max-width: 767px) {
            .container {
              padding: 0 20px;
            }
          }
          .left {
            background-color: ${globalColors.primary};
            background-image: url(static/pattern.png);
            background-repeat: repeat;
            background-size: 120px;
            background-position: center;
          }
          .right {
            background-color: #ffffff;
          }
          @media (min-width: 980px) {
            .left {
              position: fixed;
              top: 0;
              bottom: 0;
              left: 0;
              width: 35vw;
              box-sizing: border-box;
              border-left: 2vw solid #ffffff;
            }
            .right {
              margin-left: 35vw;
            }
          }
          header {
            position: relative;
            height: 100%;
          }
          header .illust-container {
            position: absolute;
            width: 40vw;
            top: 40px;
            left: -3vw;
          }
          header .illust-container img {
            width: 100%;
          }
          header .title-container {
            position: relative;
            width: 38vw;
            margin-top: 40px;
            left: -18vw;
          }
          header .title {
            font-size: 0;
          }
          header .credit {
            position: absolute;
            bottom: 56px;
            right: 3vw;
            color: #ffffff;
            font-size: 85%;
          }
          header .share-container {
            position: absolute;
            bottom: 34px;
            left: 0;
          }
          header .badge {
            position: absolute;
            display: flex;
            right: -6vw;
            top: 0;
            width: 90px;
            height: 90px;
            border-radius: 50%;
            text-align: center;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            font-weight: 700;
            line-height: 26px;
            color: ${globalColors.primary};
            background-color: ${globalColors.secondary};
            box-shadow: 0 0 0 5px ${globalColors.primary}, 0 0 0 9px ${globalColors.secondary};
          }
          header .buttons {
            margin: 0 0 18px auto;
            text-align: right;
          }
          @media (max-width: 979px) {
            .left {
              border-top: 2vw solid #ffffff;
            }
            header {
              height: 50vw;
            }
            header .illust-container {
              left: auto;
              width: 65vw;
              top: -4vw;
              right: 0;
            }
            header .title-container {
              position: absolute;
              margin-top: 0;
              top: 4vw;
              left: -24vw;
              width: 60vw;
            }
            header .credit {
              bottom: 22px;
            }
            header .share-container {
              bottom: 0;
            }
          }
          @media (max-width: 640px) {
            header .badge {
              width: 60px;
              height: 60px;
              font-size: 16px;
              line-height: 18px;
              box-shadow: 0 0 0 2px ${globalColors.primary}, 0 0 0 4px ${globalColors.secondary};
            }
          }
          @media (max-width: 500px) {
            header {
              height: 100vw;
            }
            header .title-container {
              width: 90vw;
              top: 35vw;
              left: -40vw;
            }
          }

          .heading {
            display: inline-block;
            font-family: "SourceHanSerifJP-Heading", sans-serif;
            font-feature-settings: "palt", "pwid";
          }
          h2.heading {
            font-size: 24px;
            line-height: 28px;
            border-bottom: 6px solid ${globalColors.primary};
          }
          h3.heading {
            padding: 8px 8px 0 1000px;
            margin-left: -1000px;
            font-size: 22px;
            line-height: 26px;
            color: #ffffff;
            background-color: ${globalColors.primary};
          }

          section.lead {
            padding: 36px 0;
            background-color: #ffffff;
          }

          .lead .content {
            margin: 12px 0;
          }

          section.detail {
            padding: 36px 0;
            margin-left: -2vw;
            padding-left: 2vw;
            color: ${globalColors.primary};
            background-color: ${globalColors.bg};
            overflow: hidden;
          }
          .toc dl {
            margin: 0;
            {/* column-count: 2;
            column-gap: 40px; */}
          }
          @media (max-width: 767px) {
            .toc dl {
              column-count: 1;
            }
          }
          .toc .content {
            display: inline-block;
            width: 100%;
            margin: 12px 0;
          }
          .toc dt {
            margin: 1rem 0;
          }
          .toc dd {
            margin-left: 2rem;
          }
          @media (max-width: 500px) {
            .toc dt h3 {
              font-size: 20px;
            }
          }

          section.spec {
            padding: 36px 0;
            overflow: hidden;
            background-color: #ffffff;
          }
          .sample {
            position: absolute;
            z-index: 0;
            top: 35px;
            right: 0;
            width: 50%;
            overflow: hidden;
          }
          @keyframes sample-h500 {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-1598.66px, 0, 0); } {/* = 2625 * (500 / 821) */}
          }
          @keyframes sample-h300 {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-959.20px, 0, 0); } {/* = 2625 * (300 / 821) */}
          }
          .sample:before {
            content: " ";
            display: block;
            height: 500px;
            width: 10000px;
            background-image: url(static/sample.jpg);
            background-size: contain;
            animation: sample-h500 30s linear infinite;
          }
          .spec .container {
            position: relative;
            z-index: 10;
          }
          .spec tr {
            margin: 10px 0;
          }
          .spec th {
            font-weight: inherit;
            text-align: inherit;
            width: 110px;
          }
          .spec td {
            line-height: 30px;
            padding: 12px;
          }
          .spec strong {
            font-size: 24px;
            font-weight: 700;
          }
          .spec .btn {
            margin: 0 1em;
          }
          .tbf02 {
            display: flex;
            padding: 20px;
            width: 440px;
            background-color: #f7eaeb;
            border-radius: 2px;
          }
          .tbf02 img {
            height: 105px;
            margin-right: 20px;
          }
          .tbf02 .description {
            flex-grow: 1;
          }
          @media (max-width: 767px) {
            .sample {
              position: relative;
              top: 0;
              width: 100%;
              padding: 1.5em 0;
            }
            .sample:before {
              height: 300px;
              animation: sample-h300 30s linear infinite;
            }
            .spec th {
              width: 60px;
            }
            .tbf02 {
              margin: 20px;
              width: auto;
            }
          }
          @media (min-width: 768px) {
            .sample:after {
              content: " ";
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              width: 20%;
              height: 500px;
              background: linear-gradient(90deg,#ffffff 0,rgba(255,255,255,0) 100%);
            }
          }

          section.share {
            padding: 36px 0;
            margin-left: -2vw;
            padding-left: 2vw;
            color: ${globalColors.primary};
            background-color: ${globalColors.bg};
            overflow: hidden;
          }
          .share .buttons {
            display: flex;
            margin: 0 -10px;
          }
          .share .buttons > * {
            flex-grow: 1;
            margin: 10px;
          }
          @media (max-width: 767px) {
            .share .buttons {
              flex-direction: column;
            }
            .share .buttons > * {
              margin: 10px 10vw;
            }
          }
          @media (max-width: 1440px) and (min-width: 768px) {
            .share span {
              font-size: 0;
            }
          }

          footer {
            padding: 36px 0;
            background-color: #ffffff;
          }
          footer .brand-container {
            text-align: center;
          }
          footer .logo, footer .brand {
            display: inline-block;
            margin-left: auto;
            padding-right: 1em;
            fill: ${globalColors.text};
          }
        `}</style>
      </Body>
    );
  }
}
