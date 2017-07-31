import React from 'react';
import Head from 'next/head';

require('normalize.css');

class Body extends React.Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    siteName: 'pentapod',
    title: 'pentapod',
    description: 'かゆいところに手が届くソフトウェア技術系同人サークル「pentapod」のHPです。',
    url: 'https://pentapod.github.io',
    image: 'https://pentapod.github.io/static/og.png',
    favicon: 'https://pentapod.github.io/static/favicon.png',
  };

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>

          <meta name="viewport" content="initial-scale=1.0" />
          <meta property="og:site_name" content={this.props.siteName} />
          <meta property="og:title" content={this.props.title} />
          <meta property="og:url" content={this.props.url} />
          <meta property="og:image" content={this.props.image} />
          <meta property="og:description" content={this.props.description} />
          <meta property="og:type" content="website" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:creator" content="@spring_raining" />
          <meta name="google-site-verification" content="uf35tScRk5eGKgvnTasid2iYy3Z3TdPrqFC7rgLsfjs" />

          <link rel="icon" type="image/png" href={this.props.favicon} />
          <link rel="canonical" href={this.props.url} />

          <link rel="stylesheet" href="static/css/bundle.css"/>

          <script dangerouslySetInnerHTML={{__html:
            `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-46915388-6', 'auto');
            ga('send', 'pageview');
            `}}
          />
        </Head>

        {this.props.children}
      </div>
    );
  }
}

export default Body;
