import React from 'react';
import Isvg from 'react-inlinesvg';
import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share';

import Body from './../components/body';
import button from './../components/lib/button';

const globalColors = {
  primary: '#243767',
  secondary: '#fff23f',
  bg: '#f7eaeb',
  text: '#252525',
  textAlt: '#381d1f',
};

const bodyProps = {
  siteName: 'C92新刊「CSSではじめる同人誌制作」 .∵. pentapod',
  title: 'C92新刊「CSSではじめる同人誌制作」 .∵. pentapod',
  description: '作ろうあなただけの本 C92新刊「CSSではじめる同人誌制作」',
  url: 'https://pentapod.github.io/tbf02',
  image: 'https://pentapod.github.io/c92/static/og.png',
  favicon: 'https://pentapod.github.io/c92/static/favicon.png',
  fbAppId: '513983385471617',
};
const shareText = bodyProps.description + ' ' + bodyProps.url;

const urls = {
  catalog: 'https://webcatalog-free.circle.ms/Circle/13312863',
  booth: '',
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
              <div className="title-container">
                <div className="title">
                  <img src="static/title.svg" alt="CSSではじめる同人誌制作" />
                </div>
                <div className="badge">
                  C92<br/>新刊
                </div>
              </div>

              <div className="brand-container">
                <a href="https://pentapod.github.io">
                  <div className="logo"
                        style={{ width: 30 }}
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

              <div className="credit">
                Illust:&nbsp;
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
              XXX
            </section>

            <section className="detail">
              <div className="container">
                <div className="toc">
                  <h3><center>掲載コンテンツ</center></h3>
                  <dl>
                    <div className="content">
                      <dt><h3>XXX</h3></dt>
                      <dd>
                        XXX
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
                        冊子版購入者は電子版が<strong>¥0!!!</strong>
                      </td>
                    </tr>
                    <tr>
                      <th>仕様</th>
                      <td>B5 モノクロ 52ページ</td>
                    </tr>
                  </tbody>
                </table>

                <div className="react-native">
                  <a href="https://pentapod.github.io/c90"><img src="static/react-native-cover.png" /></a>
                  <div className="description">
                    XXX<br/>
                    頒布価格&nbsp;<strong><s>¥1000</s>→¥500</strong>
                  </div>
                </div>
              </div>
            </section>

            <section className="share">
              <div className="container">
                <h3><center>このページを共有</center></h3>
                <div className="buttons">
                  <a href={urls.catalog} {...button.inverse('#4caf50', '#319235')}>Webカタログでお気に入りに追加</a>
                  <a href={urls.twitterShare} {...button.inverse('#55acee', '#3b8dcc')}>Twitterでツイート</a>
                  <a href={urls.facebookShare} {...button.inverse('#365899', '#1b386f')}>Facebookでシェア</a>
                  <a href={urls.hatebuShare} {...button.inverse('#008fde', '#006fad')}>はてなブックマークに登録</a>
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
            color: #2192b7;
          }
          a:hover {
            color: #1e86a8;
          }
          section {
            position: relative;
          }
          h1, h2, h3 {
            margin: 0;
          }
          h1  { font-size: 2.0em; }
          h2  { font-size: 1.6em; }
          h3  { font-size: 1.3em; }
          ul, ol {
            padding-left: 1em;
          }

          #global {
            transition: opacity 1s;
            opacity: 0;
          }
          #global.loaded {
            opacity: 1;
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
            padding: 0 20px;
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
              width: 30vw;
              box-sizing: border-box;
              border-left: 2vw solid #ffffff;
            }
            .right {
              margin-left: 30vw;
            }
          }
          header {
            position: relative;
            height: 100%;
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
          header .brand-container {
            position: absolute;
            bottom: 60px;
            left: 2vw;
          }
          header .credit {
          }
          header .share-container {
            position: absolute;
            bottom: 35px;
            right: 18px;
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
          .lead {
            margin: 0 0 0 auto;
            max-width: 550px;
            background-color: rgba(255, 255, 255, 0.5);
          }

          section.detail {
            padding: 36px 0;
            margin-left: -2vw;
            padding-left: 2vw;
            color: ${globalColors.textAlt};
            background-color: ${globalColors.bg};
            overflow: hidden;
          }
          .toc dl {
            column-count: 2;
            column-gap: 40px;
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
            line-height: 26px;
          }
          .toc dt h3 {
            font-size: 24px;
          }
          .toc dd {
            text-align: right;
          }
          @media (max-width: 500px) {
            .toc dt h3 {
              font-size: 20px;
            }
          }

          section.spec {
            padding: 36px 0;
            overflow: hidden;
          }
          .sample {
            position: absolute;
            z-index: -100;
            top: 35px;
            right: 0;
            width: 40%;
            overflow: hidden;
          }
          @keyframes sample-h500 {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-1666px, 0, 0); }
          }
          @keyframes sample-h300 {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-999px, 0, 0); }
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
          .react-native {
            display: flex;
            padding: 20px;
            width: 420px;
            color: #ffffff;
            background-color: #57A7BF;
            border-radius: 2px;
          }
          .react-native a {
            color: #ffffff;
          }
          .react-native img {
            height: 105px;
            margin-right: 20px;
          }
          .react-native .description {
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
              animation: sample-h500 30s linear infinite;
            }
            .spec th {
              width: 60px;
            }
            .react-native {
              margin-left: -20px;
              width: 100%;
              border-radius: 0;
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
            color: ${globalColors.textAlt};
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

          footer {
            padding: 36px 0;
            overflow: hidden;
          }
          footer .brand-container {
            text-align: center;
          }
          .logo, .brand {
            display: inline-block;
            margin-left: auto;
            padding-right: 1em;
            fill: #ffffff;
          }
        `}</style>
      </Body>
    );
  }
}
