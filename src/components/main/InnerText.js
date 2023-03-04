const InnerText = () => (
  <div className="prose-lg prose-invert max-w-prose">
    <h2>Customize Your Website's Scrollbars with CSS Scrollbar Selectors</h2>
    <p>
      While most browsers come with default scrollbar styles, they may not
      always match the design of your website. Fortunately, there's a way to
      customize them with CSS scrollbar selectors.
    </p>
    <h3>What are CSS Scrollbar Selectors?</h3>
    <p>
      CSS scrollbar selectors are pseudo-elements that allow you to customize
      the appearance of scrollbars on WebKit and Blink based browsers. These
      selectors let you modify the entire scrollbar, the scrolling handle, the
      track (progress bar) of the scrollbar, and even the bottom corner of the
      scrollbar where both horizontal and vertical scrollbars meet.
    </p>
    <ul>
      <li>::-webkit-scrollbar – modifies the entire scrollbar.</li>
      <li>
        ::-webkit-scrollbar-thumb – modifies the draggable scrolling handle.
      </li>
      <li>::-webkit-scrollbar-track – modifies the track of the scrollbar.</li>
    </ul>
  </div>
);

export default InnerText;
