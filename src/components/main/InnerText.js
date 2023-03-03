const InnerText = () => (
  <div className="prose-lg prose-invert max-w-prose">
    <h2>Customize Your Website's Scrollbars with CSS Scrollbar Selectors</h2>
    <p>
      If you have a website with lengthy content, you know how important it is
      to provide your users with an easy way to navigate through it. While most
      browsers come with default scrollbar styles, they may not always match the
      design of your website. Fortunately, there's a way to customize them with
      CSS scrollbar selectors.
    </p>
    <h3>What are CSS Scrollbar Selectors?</h3>
    <p>
      CSS scrollbar selectors are pseudo-elements that allow you to customize
      the appearance of scrollbars on WebKit and Blink based browsers. These
      selectors let you modify the entire scrollbar, the scrolling handle, the
      track (progress bar) of the scrollbar, and even the bottom corner of the
      scrollbar where both horizontal and vertical scrollbars meet.
    </p>
    <h3>Available Pseudo-Elements for CSS Scrollbar Selectors</h3>
    <p>
      Here's a list of the available pseudo-elements for CSS Scrollbar
      Selectors:
    </p>
    <ul>
      <li>::-webkit-scrollbar – modifies the entire scrollbar.</li>
      <li>
        ::-webkit-scrollbar-thumb – modifies the draggable scrolling handle.
      </li>
      <li>
        ::-webkit-scrollbar-track – modifies the track (progress bar) of the
        scrollbar.
      </li>
      <li>
        ::-webkit-scrollbar-corner – modifies the bottom corner of the scrollbar
        where both horizontal and vertical scrollbars meet. This is typically
        the bottom-right corner of the browser window.
      </li>
    </ul>
    <p>
      Keep in mind that you can add these pseudo-elements to any element that
      has content that is longer than the space reserved for the element.
      However, the element's overflow property must be set to scroll, otherwise,
      the scrollbar won't be displayed.
    </p>
    <h3>Supported Browsers for CSS Scrollbar Selectors</h3>
    <p>
      It's important to note that the CSS scrollbar selectors mentioned above
      only work in Blink and WebKit based browsers such as Google Chrome and
      Safari. For other browsers, the W3C provides scrollbar selectors such as
      scrollbar-width, scrollbar-color, scrollbar-track-color,
      scrollbar-thumb-color, and scrollbar-face-color.
    </p>
    <h3>Supported browsers include:</h3>
    <ul>
      <li>Chrome</li>
      <li>Brave</li>
      <li>Edge</li>
      <li>Safari</li>
      <li>Vivaldi</li>
      <li>Opera</li>
    </ul>
  </div>
);

export default InnerText;
